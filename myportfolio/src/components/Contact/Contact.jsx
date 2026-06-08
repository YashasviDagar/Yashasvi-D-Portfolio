import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // EmailJS handles form submission and sends data to your configured email service
    emailjs
      .sendForm(
        "service_pqikhuf", // Section Id of EmailJS
        "template_8g47o7y", // Template Id of EmailJs
        form.current,
        "gSrmIk9tNrIOLjFli",
      )
      .then(
        () => {
          setIsSent(true);

          // Reset form after successful submission
          form.current.reset();

          // Success toast notification (user feedback)
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          // If email fails, log error for debugging
          console.error("Error sending message:", error);

          // Error toast notification for user
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
      );
  };

  return (
    <>
      {/* Fix for browser autofill styling (dark theme compatibility) */}
      <style>{`
        input:-webkit-autofill {
          -webkit-box-shadow: 0 0 0 1000px #131025 inset;
          -webkit-text-fill-color: white;
        }
      `}</style>

      <section
        id="contact"
        className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
      >
        {/* Toast notifications container (required for react-toastify to show alerts) */}
        <ToastContainer />

        {/* SECTION TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">CONTACT</h2>

          <div className="w-32 h-1 bg-teal-500 mx-auto mt-4"></div>

          <p className="text-gray-400 mt-4 text-lg font-semibold">
            I’d love to hear from you—reach out for any opportunities or
            questions!
          </p>
        </div>

        {/* CONTACT FORM CONTAINER */}
        {/* Center card with dark theme + border glow effect */}
        <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg border border-teal-900 shadow-[0_0_25px_rgba(20,184,166,0.15)]">
          
          <h3 className="text-xl font-semibold text-white text-center mb-2">
            Connect With Me
          </h3>

          {/* Form submission handled via EmailJS */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="mt-4 flex flex-col space-y-4"
          >
            {/* Email input */}
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-teal-500"
            />

            {/* Name input */}
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-teal-500"
            />

            {/* Subject input */}
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-teal-500"
            />

            {/* Message textarea */}
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              required
              className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-teal-500"
            ></textarea>

            {/* Submit button */}
            {/* Triggers sendEmail function */}
            <button
              type="submit"
              className="w-full bg-transparent border border-teal-300 py-3 text-teal-400 font-semibold rounded-md hover:bg-teal-400 hover:text-slate-950 transition duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;