import { Reveal } from "@/components/utils/Reveal";
import styles from "./contact.module.scss";
import { AiFillMail } from "react-icons/ai";
import Link from "next/link";
import { useState, type ChangeEvent, FormEvent } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  console.log(formData)
  

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <section className="section-wrapper" id="contact">
      <div className={styles.contactWrapper}>
        <Reveal width="100%">
          <h4 className={styles.contactTitle}>
            Contact<span>.</span>
          </h4>
        </Reveal>
        <Reveal width="100%">
          <p className={styles.contactCopy}>
            I&apos;d love to discuss more with you! Reach out to me through{" "}
            <Link
              href="https://www.linkedin.com/in/david-crimi/"
              target="_blank"
              rel="nofollow"
            >
              Linkedin
            </Link>{" "}
            or by email using the form below if that&apos;s more your speed.
          </p>
        </Reveal>
        <Reveal width="100%">
          <div className="flex justify-center">
            {/* Adjust the form container to match the theme */}
            <form
              className="w-3/4 bg-white shadow-md rounded px-8 pt-10 pb-12 mb-8 min-h-[400px] flex items-center justify-center"
              onSubmit={handleSubmit}
            >
              <div>
                {/* Email Input */}
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-md font-bold mb-2"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    className="bg-background-light appearance-none border-2 border-background-dark rounded w-full py-2 px-4 text-text leading-tight focus:outline-none focus:bg-white focus:border-brand"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="johndoe@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                {/* Message Textarea */}
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-md font-bold mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="bg-background-light appearance-none border-2 border-background-dark rounded w-full h-32 py-2 px-4 text-text leading-tight focus:outline-none focus:bg-white focus:border-brand"
                    id="message"
                    name="message"
                    placeholder="Hey David..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    cols={50} // Ensure cols is a number
                  />
                </div>
                {/* Submit Button */}
                <div className="flex justify-center items-center">
                  <button className="w-3/4 shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
