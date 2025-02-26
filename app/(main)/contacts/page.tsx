import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 text-gray-900 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Contact Header */}
          <section className="text-center mb-12">
            <h2 className="text-4xl font-extrabold">Get in Touch</h2>
            <p className="text-lg mt-4 max-w-2xl mx-auto">
              Have questions about the PCO Licence process or need assistance?
              We’re here 24/7 to help you. Reach out to us via phone, email, or
              visit our office.
            </p>
          </section>

          {/* Contact Information */}
          <section className="grid md:grid-cols-2 gap-10 items-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-orange-500">
                Contact Details
              </h3>
              <p className="mb-2">
                <strong>📞 Phone:</strong> 07576497335 / 02034884184
              </p>
              <p className="mb-2">
                <strong>📧 Email:</strong> info@londonpcoandtraining.co.uk
              </p>
              <p className="mb-2">
                <strong>📍 Address:</strong> Ashley House Business Centre,
                235-239 High Rd, London N22 8HF, United Kingdom
              </p>
              <iframe
                className="w-full h-56 mt-4 rounded-lg"
                src="https://www.google.com/maps/embed?..."
                loading="lazy"
              ></iframe>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-orange-500">
                Send Us a Message
              </h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border rounded-lg"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border rounded-lg"
                  required
                />
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="w-full p-3 border rounded-lg"
                  required
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full p-3 border rounded-lg"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
