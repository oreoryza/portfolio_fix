import React, { useState } from "react";
import { useSelector } from "react-redux";
import DOMPurify from "dompurify";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";

const Form = () => {
  const theme = useSelector((state) => state.theme.theme);
  const [isSubmitting, setIsSubmitting] = useState(false); // State untuk mengontrol status tombol

  const sanitizeInput = (input) => {
    return DOMPurify.sanitize(input);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true); // Set status tombol menjadi disabled

    const formData = new FormData(event.target);

    // Validasi input
    if (formData.get('email') === '' || formData.get('name') === '' || formData.get('message') === '') {
      Notify.failure('Please fill in all fields.');
      setIsSubmitting(false); // Reset status tombol jika validasi gagal
      return;
    }

    formData.append("access_key", "658e0f41-1929-4348-88a9-52ef846c22ca");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        Notify.success('Thank you for your message, I will respond as soon as possible.');
        event.target.reset();
      }
    } catch (error) {
      Notify.failure('An error occurred while submitting the form.');
    } finally {
      setIsSubmitting(false); // Reset status tombol setelah proses selesai
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col gap-4 w-[70vw] mt-4 ${
        theme == "dark" ? "" : "text-white"
      } duration-300 `}
    >
      <AnimatePresence mode="wait">
      <motion.div initial={{x:1000}} animate={{x:0}} exit={{x:1000}} transition={{duration:0.5}} className="font-gabarito flex flex-col gap-2">
        <label htmlFor="email" className="text-lg">
          Email:
        </label>
        <input
          type="email"
          onChange={(e) => {
            e.target.value = sanitizeInput(e.target.value);
          }}
          name="email"
          id="email"
          className="bg-transparent border-2 border-yellow focus:border-blue duration-300 p-2 outline-0"
        />
      </motion.div>
      <motion.div initial={{x:1000}} animate={{x:0}} exit={{x:1000}} transition={{duration:0.5, delay:0.1}} className="font-gabarito flex flex-col gap-2">
        <label htmlFor="name" className="text-lg">
          Name:
        </label>
        <input
          type="text"
          onChange={(e) => {
            e.target.value = sanitizeInput(e.target.value);
          }}
          name="name"
          id="name"
          className="bg-transparent border-2 border-yellow focus:border-blue duration-300 p-2 outline-0"
        />
      </motion.div>
      <motion.div initial={{x:1000}} animate={{x:0}} exit={{x:1000}} transition={{duration:0.5, delay:0.2}} className="font-gabarito flex flex-col gap-2">
        <label htmlFor="message" className="text-lg">
          Message:
        </label>
        <textarea
          onChange={(e) => {
            e.target.value = sanitizeInput(e.target.value);
          }}
          name="message"
          id="message"
          className="bg-transparent border-2 border-yellow focus:border-blue duration-300 p-2 outline-0 min-h-48 resize-none"
        />
      </motion.div>
      <motion.div initial={{x:1000}} animate={{x:0}} exit={{x:1000}} transition={{duration:0.5, delay:0.3}} className="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting} // Nonaktifkan tombol jika isSubmitting true
          className={`font-gabarito text-lg font-medium text-white bg-blue px-3 py-2 hover:bg-blue/[.0] hover:scale-105 hover:text-blue duration-300 cursor-pointer ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? "Sending..." : "Send"} {isSubmitting ? (<i class="bi bi-hourglass-split"></i>) : (<i className="bi bi-arrow-right"></i>)}
        </button>
      </motion.div>
      </AnimatePresence>
    </form>
  );
};

export default Form;