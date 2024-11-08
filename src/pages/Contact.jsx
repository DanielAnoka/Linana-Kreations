import { useState } from "react";
import { Instagram, Link } from "lucide-react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation logic
    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }
    // Proceed with form submission logic
    console.log("Form submitted:", { name, email, message });
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* <h2 className="mb-12 text-center text-4xl font-bold text-gray-800 font-viga md:text-4xl">
          Contact Us
        </h2> */}
        <div className="grid gap-8 md:grid-cols-2 mt-10">
          {/* Contact Form */}
          <div className="rounded-lg bg-white p-8 shadow-lg transition-transform transform hover:scale-105">
            <h3 className="mb-6 text-2xl font-semibold text-gray-800">
              Get in Touch
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="h-32 w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button className="rounded-md bg-purple-600 px-6 py-2 text-white hover:bg-purple-700 transition duration-200">
                Send Message
              </button>
            </form>
          </div>

          {/* Additional Info */}
          <div className="space-y-6 rounded-lg bg-white p-8 shadow-lg transition-transform transform hover:scale-105">
            <div>
              <h3 className="mb-4 text-2xl font-semibold text-gray-800">
                Visit Us
              </h3>
              <div className="aspect-video w-full rounded-lg bg-gray-200">
                {/* Google Maps iframe would go here */}
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-2xl font-semibold text-gray-800">
                Connect With Us
              </h3>
              <div className="flex gap-6">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-purple-600 transition duration-200"
                >
                  <Instagram size={28} />
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-purple-600 transition duration-200"
                >
                  <Link size={28} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
