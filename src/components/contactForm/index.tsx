'use client'

import React, { useState } from 'react'
import style from './style.module.css'
import Image from 'next/image'

export default function ContactForm() {
    const [info, setInfo] = useState({ email: 'zz@test.com', name: 'zz', message: 'zz' })
    async function sendMessageHander(e) {
        e.preventDefault()
        const data = await fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify(info)
        })
    }

    return (
        <section className={style.contact}>
            <h1>How can i help u</h1>
            <form className={style.form} action="" onSubmit={sendMessageHander}>
                <div className={style.controls}>
                    <div className={style.control}>
                        <label htmlFor="email">Your Email</label>
                        <input
                            type="email"
                            id='email'
                            required
                            value={info.email}
                            onChange={e => setInfo({ email: e.target.value })}
                        />
                    </div>
                    <div className={style.control}>
                        <label htmlFor="name">Your name</label>
                        <input
                            type="text"
                            id='name'
                            required
                            value={info.name}
                            onChange={e => setInfo({ name: e.target.value })}
                        />
                    </div>
                </div>
                <div className={style.control}>
                    <label htmlFor="message">Your Message</label>
                    <textarea
                        name=""
                        id="message"
                        rows={5}
                        value={info.message}
                        required
                        onChange={e => setInfo({ message: e.target.value })}
                    ></textarea>
                </div>
                <div className={style.actions}>
                    <button>Send Message</button>
                </div>
            </form>
        </section>
    )
}
