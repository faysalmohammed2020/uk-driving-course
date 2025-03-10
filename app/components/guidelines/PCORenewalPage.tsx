"use client"
import { useState } from "react";
import { FileText, CheckCircle } from "lucide-react";
import { Label } from "@/app/components/ui/label";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";

const PCORenewalPage = () => {
  const [form, setForm] = useState({
    fullName: "",
    licenceNumber: "",
    expiryDate: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Renewal request submitted!");
  };

  return (
    <div className="max-w-7xl mx-auto mt-10 px-6 py-10 bg-gray-100 shadow-lg rounded-xl">
      <h1 className="text-3xl font-bold text-center mb-6 text-teal-700">PCO Licence Renewal</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column - Guidelines */}
        <div className="bg-white px-6 py-14 shadow-md rounded-xl">
          <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
            <FileText size={24} className="text-teal-600" /> Step-by-Step Guidelines
          </h2>
          <ul className="mt-4 space-y-4 text-gray-600">
            {[
              "Ensure your current PCO Licence is within 4 months of expiry.",
              "Prepare necessary documents: Passport, Driving Licence, PCO Badge, Insurance, MOT certificate.",
              "Complete the online renewal application form.",
              "Pay the renewal fee securely online.",
              "Book and attend a medical examination (if required).",
              "Submit the form and wait for confirmation via email.",
              "Receive your renewed PCO Licence within 10 working days."
            ].map((step, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle size={20} className="text-teal-500 mt-1" />
                {step}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column - Application Form */}
        <div className="bg-white px-6 py-14 shadow-md rounded-xl">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Apply for Renewal</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="fullName">Full Name</Label>
              <Input type="text" name="fullName" id="fullName" value={form.fullName} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="licenceNumber">Licence Number</Label>
              <Input type="text" name="licenceNumber" id="licenceNumber" value={form.licenceNumber} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="expiryDate">Expiry Date</Label>
              <Input type="date" name="expiryDate" id="expiryDate" value={form.expiryDate} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input type="email" name="email" id="email" value={form.email} onChange={handleChange} required />
            </div>
            <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white">
              Submit Renewal
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PCORenewalPage;
