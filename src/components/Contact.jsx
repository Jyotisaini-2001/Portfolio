import { createElement, useRef } from "react";
import { content } from "../content/Content";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const { Contact } = content;
  const form = useRef();

  // Sending Email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
      'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY'
      )
      .then(
        (result) => {
          console.log(result.text);
          // Clear all input field values
          form.current.reset();
          // Success toast message
          toast.success("Email send Successfully");
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        }
      );
  };

  return (
    <section className=" bg-violet-950 text-white" id="contact">
      <Toaster />
      <div className="md:container px-5 py-14 ">
        <h2 className="md:text-3xl text-2xl text-[rgba(255,255,255,text-opacity-100)] font-inria-serif text-5xl font-bold " data-aos="fade-down">
          {Contact.title}
        </h2>
        <h4 className="text-[rgba(183,197,211)]  md:text-4xl text-3xl !leading-relaxed font-paprika" data-aos="fade-down">
          {Contact.subtitle}
        </h4>
        <br />
        <div className="flex gap-10 md:flex-row flex-col ">
          <form
            ref={form}
            onSubmit={sendEmail}
            data-aos="fade-up"
            className="flex-1 flex flex-col gap-5 "
          >
            {/* Input Name as same as email js templates values */}
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              required
              className="border border-slate-600 p-3 rounded bg-transparent"
            />
            <input
              type="email"
              name="user_email"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
              placeholder="Email Id"
              required
              className="border border-slate-600 p-3 rounded bg-transparent"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="border border-slate-600 p-3 rounded h-44 bg-transparent outline-none font-poppins;"
              required
            ></textarea>
            <button
              className="py-2 px-9 border-2 rounded-md font-poppins
              border-dark_primary rounded-br-3xl font-medium self-start
              text-sky-900 bg-white"
            >
              Submit
            </button>
          </form>
          <div className="flex-1 flex flex-col gap-5">
            {Contact.social_media.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 430}
                className="flex items-center gap-2"
              >
                <h4 className="text-white md:text-4xl text-3xl !leading-relaxed font-paprika">{createElement(content.icon)}</h4>
                <a className="font-Poppins" href={content.link} target="_blank">
                  {content.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
