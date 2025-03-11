"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import { admin, useSession } from "@/lib/auth-client";
import * as yup from "yup";

interface formData {
  name: string;
  role: string;
  phone: number;
  email: string;
  password: string;
}

// Define available roles (update as needed)
const roleOptions = [
  { value: "admin", title: "Admin" },
  { value: "user", title: "User" },
  { value: "moderator", title: "Moderator" },
];

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    phone: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  // Form validation schema
  const signUpSchemaUser = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    role: yup.string().required("Role is required"),
    phone: yup.string().required("Phone is required"),
  });

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signUpSchemaUser.validate(formData, { abortEarly: false });

      await admin.createUser(
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          role: formData.role,
          ...(formData.phone && { data: { phone: formData.phone } }), // Add phone only if supported in 'data'
        },
        {
          onSuccess: () => {
            toast.success("User created successfully!");
            setFormData({
              name: "",
              role: "",
              phone: "",
              email: "",
              password: "",
            });
          },
        }
      );
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        error.inner.forEach((err) => toast.error(err.message));
      } else {
        console.error("Error creating user:", error);
        toast.error("Something went wrong!");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center lg:m-10">
      <div className="w-full p-8 space-y-6">
        <h2 className="text-2xl font-bold text-center">Add New User</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <InputField
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <SelectField
            label="Role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            options={roleOptions}
            required
          />
          <InputField
            label="Mobile Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <InputField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <InputField
            type="password"
            label="Create New Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="w-32 py-2 px-4 bg-[#155E75] text-white rounded-md hover:bg-blue-600"
            >
              {loading ? "Processing..." : "Add User"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Reusable Input Field Component
interface InputFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}
const InputField: React.FC<InputFieldProps> = ({ label, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <input className="w-full p-2 border rounded-md" {...props} />
  </div>
);

// Reusable Select Field Component
interface SelectFieldProps {
  label: string;
  options: { value: string; title: string }[];
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
}
const SelectField: React.FC<SelectFieldProps> = ({
  label,
  options,
  ...props
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <select className="w-full p-2 border rounded-md" {...props}>
      <option value="">Select {label}</option>
      {options.map(({ value, title }) => (
        <option key={value} value={value}>
          {title}
        </option>
      ))}
    </select>
  </div>
);

export default Register;
