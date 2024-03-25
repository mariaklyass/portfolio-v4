import { useState } from "react";
import { ChangeEvent, FormEvent } from "react";
import clsx from "clsx";
import { sendContactForm } from "@/lib/api";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { FaPaperPlane } from "react-icons/fa";
import { useSectionInView } from "@/hooks/useSectionInView";
import StarrySky from "../StarrySky";

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}
interface State {
  values: FormValues;
  isLoading: boolean;
  error: string | null;
}

const initValues: FormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};
const initState: State = { isLoading: false, error: "", values: initValues };

const Contact: React.FC = () => {
  const { ref } = useSectionInView("Contact");

  const [state, setState] = useState<State>(initState);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const { values } = state;

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      values: {
        ...prevState.values,
        [name]: value,
      },
    }));
  };

  const onBlur = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name } = event.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const isInvalid = (field: keyof FormValues): boolean =>
    touched[field] && !values[field];

  const onSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      toast.success("Email sent successfully");
    } catch (error) {
      toast.error(error as string);
      setState((prev) => ({
        ...prev,
        isLoading: false,
      }));
    }
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="relative w-full flex gap-8 items-center justify-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <StarrySky />

      <div className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center relative z-10">
        <h2 className="text-3xl font-medium capitalize mb-8 mt-2 text-center pt-2 text-white dark:text-stone-400">
          Contact Form
        </h2>
        <p className="text-gray-300/70 mt-10 dark:text-white/70">
          Please contact me directly at{" "}
          <a className="underline" href="mailto:klyassmaria@gmail.com">
            klyassmaria@gmail.com
          </a>{" "}
          or through this form.
        </p>

        <form
          onSubmit={onSubmit}
          className="mt-10 flex flex-col gap-4 dark:text-black"
        >
          <div className="flex flex-col gap-2">
            <label className="text-white self-start">Name* </label>
            <input
              className={clsx(
                "h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none",
                {
                  "border-red-600": isInvalid("name"),
                }
              )}
              required
              type="text"
              name="name"
              placeholder="Name"
              value={values.name}
              onChange={handleChange}
              onBlur={onBlur}
            />
            {isInvalid("name") && <p className="text-red-500">Required</p>}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-white self-start">Email* </label>
            <input
              className={clsx(
                "h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none",
                {
                  "border-red-600": isInvalid("subject"),
                }
              )}
              required
              type="email"
              name="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={onBlur}
            />
            {isInvalid("subject") && <p className="text-red-500">Required</p>}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-white self-start">Subject* </label>
            <input
              className={clsx(
                "h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none",
                {
                  "border-red-600": isInvalid("subject"),
                }
              )}
              required
              type="text"
              name="subject"
              placeholder="Subject"
              value={values.subject}
              onChange={handleChange}
              onBlur={onBlur}
            />
            {isInvalid("subject") && <p className="text-red-500">Required</p>}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-white self-start">Message* </label>
            <textarea
              className={clsx(
                "h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none",
                {
                  "border-red-600": isInvalid("message"),
                }
              )}
              required
              name="message"
              placeholder="Message"
              rows={4}
              value={values.message}
              onChange={handleChange}
              onBlur={onBlur}
            />
            {isInvalid("message") && <p className="text-red-500">Required</p>}
          </div>

          <button
            className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:border dark:border-white disabled:pointer-events-none
             disabled:scale-100 disabled:border-none disabled:text-stone-400 disabled:bg-stone-60/40"
            disabled={
              !values.name ||
              !values.email ||
              !values.subject ||
              !values.message ||
              isLoading
            }
            type="submit"
          >
            {isLoading ? (
              <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
            ) : (
              <>
                Send Email{" "}
                <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
              </>
            )}
          </button>
        </form>
      </div>
    </motion.section>
  );
};
export default Contact;
