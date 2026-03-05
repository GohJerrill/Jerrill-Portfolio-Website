// Contact.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn, textVariant } from "../utils/motion";
import { Globe } from "./Globe";

// template_u9n24m6
// service_4myh177
// vFfy-N6Q3so7ju_GR

const COOLDOWN_SECONDS = 5 * 60;
const COOLDOWN_KEY = "contact_form_cooldown_end";

/* eslint-disable react-refresh/only-export-components */
const Contact = () => {
    const formRef = useRef(null);

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [cooldownLeft, setCooldownLeft] = useState(0);
    const [status, setStatus] = useState({
        type: "",
        message: "",
    });

    useEffect(() => {
        const savedCooldownEnd = localStorage.getItem(COOLDOWN_KEY);

        if (savedCooldownEnd) {
            const remaining = Math.max(
                0,
                Math.ceil((Number(savedCooldownEnd) - Date.now()) / 1000)
            );
            setCooldownLeft(remaining);
        }

        const timer = setInterval(() => {
            const savedEnd = localStorage.getItem(COOLDOWN_KEY);

            if (!savedEnd) {
                setCooldownLeft(0);
                return;
            }

            const remaining = Math.max(
                0,
                Math.ceil((Number(savedEnd) - Date.now()) / 1000)
            );

            setCooldownLeft(remaining);

            if (remaining === 0) {
                localStorage.removeItem(COOLDOWN_KEY);
                setCooldownLeft(0);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });

        // Optional: clear error while user edits
        if (status.type === "error") {
            setStatus({ type: "", message: "" });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (loading) return;

        if (cooldownLeft > 0) return;

        if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
            setStatus({
                type: "error",
                message: "Please fill in all fields before sending.",
            });
            return;
        }

        setLoading(true);
        setStatus({ type: "", message: "" });

        const time = new Date().toLocaleString("en-SG", {
            timeZone: "Asia/Singapore",
            hour12: true,
            year: "numeric",
            month: "short",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
        });

        emailjs
            .send(
                "service_4myh177",
                "template_u9n24m6",
                {
                    from_name: form.name,
                    to_name: "Goh Jerrill",
                    from_email: form.email,
                    to_email: "gohjerrill316@gmail.com",
                    message: form.message,
                    time,
                },
                "vFfy-N6Q3so7ju_GR"
            )
            .then(
                () => {
                    setLoading(false);

                    setForm({
                        name: "",
                        email: "",
                        message: "",
                    });

                    const cooldownEnd = Date.now() + COOLDOWN_SECONDS * 1000;
                    localStorage.setItem(COOLDOWN_KEY, String(cooldownEnd));
                    setCooldownLeft(COOLDOWN_SECONDS);

                    setStatus({
                        type: "success",
                        message: "Message sent successfully. Thanks for reaching out!",
                    });
                },
                (error) => {
                    setLoading(false);
                    console.error(error);

                    setStatus({
                        type: "error",
                        message: "Something went wrong. Please try again.",
                    });
                }
            );
    };

    const isSubmitDisabled = loading || cooldownLeft > 0;

    return (
        <>
            {/* Centered header */}
            <motion.div variants={textVariant()} className="w-full">
                <p className={`${styles.sectionSubText} !mb-1 text-center`}>Contact Me</p>
                <h2 className={`${styles.sectionHeadText} text-gray-300 leading-tight text-center`}>
                    Get In Touch.
                </h2>
            </motion.div>

            {/* Container */}
            <div className="overflow-x-hidden !px-5 sm:!px-8 lg:!px-25">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 items-center justify-items-center">
                    <motion.div
                        variants={slideIn("right", "tween", 0.2, 1)}
                        className="order-1 xl:order-2 w-full flex items-center justify-center mb-12 sm:mb-8 xl:mb-0"
                    >
                        <div className="w-full max-w-[360px] sm:max-w-[450px] md:max-w-[520px] xl:max-w-[550px] aspect-square">
                            <Globe className="max-w-none w-full h-full" />
                        </div>
                    </motion.div>

                    <motion.div
                        variants={slideIn("left", "tween", 0.2, 1)}
                        className="order-2 xl:order-1 w-full max-w-[720px] rounded-2xl !p-6 sm:!p-8"
                    >
                        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6 sm:gap-8">
                            <label className="flex flex-col">
                                <span className="text-white font-medium !mb-3 sm:!mb-4">Your Name</span>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="What's your name?"
                                    className="bg-[#1e1744] !py-4 !px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium w-full"
                                />
                            </label>

                            <label className="flex flex-col">
                                <span className="text-white font-medium !mb-3 sm:!mb-4">Your Email</span>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="What's your email?"
                                    className="bg-[#1e1744] !py-4 !px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium w-full"
                                />
                            </label>

                            <label className="flex flex-col">
                                <span className="text-white font-medium !mb-3 sm:!mb-4">Your Message</span>
                                <textarea
                                    rows={7}
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="What's your message?"
                                    className="bg-[#1e1744] !py-4 !px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium w-full"
                                />
                            </label>

                            {/* Status pill */}
                            {(status.type === "success" || status.type === "error") && status.message && (
                                <div
                                    className={`
                                            w-fit max-w-full mx-auto rounded-full border !px-4 !py-2
                                            text-center text-[13px] sm:text-[14px] font-medium
                                            ${status.type === "success"
                                            ? "bg-emerald-500/10 border-emerald-400/30 text-emerald-300"
                                            : "bg-red-500/10 border-red-400/30 text-red-300"
                                        }
                                    `}
                                >
                                    {status.message}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitDisabled}
                                className="
                                    bg-[#1e1744] !py-3 !px-8 outline-none
                                    w-full sm:w-fit
                                    text-white font-bold shadow-md shadow-primary rounded-xl cursor-pointer
                                    disabled:opacity-60 disabled:cursor-not-allowed
                                "
                            >
                                {loading
                                    ? "Sending..."
                                    : cooldownLeft > 0
                                        ? `Wait ${formatCooldown(cooldownLeft)}`
                                        : "Send!"}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

function formatCooldown(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
}

export default SectionWrapper(Contact, "contact");