import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import emailJS from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

/* eslint-disable react-refresh/only-export-components */
const Contact = () => {

    const formRef = useRef()
    const [form, setform] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [loading, setloading] = useState(false);

    const handlechange = (e) => { }

    const handlesubmit = (e) => { }

    return (
        <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>

            <motion.div variants={slideIn("left", "tween", 0.2, 1)} className='flex-[0.75] !p-8 rounded-2xl'>

                <p className={styles.sectionSubText}>Contact Me</p>
                <h3 className={styles.sectionHeadText}>Get In Touch.</h3>

                <form
                    ref={formRef}
                    onSubmit={handlesubmit}
                    className='mt-12 flex flex-col gap-8'
                >
                    <label className='flex flex-col'>
                        <span className='text-white font-medium !mb-4'>Your Name</span>
                        <input
                            type='text'
                            name='name'
                            value={form.name}
                            onChange={handlechange}
                            placeholder='Whats your name?'
                            // bg-[#151030]
                            className='bg-[#1e1744] !py-4 !px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                        >

                        </input>

                    </label>

                    <label className='flex flex-col'>
                        <span className='text-white font-medium !mb-4'>Your Email</span>
                        <input
                            type='email'
                            name='email'
                            value={form.email}
                            onChange={handlechange}
                            placeholder='Whats your email?'
                            className='bg-[#1e1744] !py-4 !px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                        >

                        </input>

                    </label>

                    <label className='flex flex-col'>
                        <span className='text-white font-medium !mb-4'>Your Message</span>
                        <textarea
                            rows="7"
                            name='Message'
                            value={form.message}
                            onChange={handlechange}
                            placeholder='Whats your message?'
                            className='bg-[#1e1744] !py-4 !px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                        >

                        </textarea>

                    </label>

                    <button
                        type='submit'
                        className='bg-[#1e1744] !py-3 !px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl cursor-pointer'

                    >
                        {loading ? "Sending" : "Send!"}
                    </button>

                </form>

            </motion.div>

        </div>
    )
}

export default SectionWrapper(Contact, "Contact Me")