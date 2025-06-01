import React from 'react';

function Contact() {
    return (
        <section>
            <h2>Contact Us</h2>
            <form>
                <div>
                    <label htmlFor="name">Name:</label><br />
                    <input type="text"
                        id="name"
                        name="name"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="email">Email:</label><br />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="message">Message:</label><br />
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        required
                    ></textarea>
                </div>

                <div>
                    <button type="submit">Send Message</button>
                </div>
            </form>
        </section>
    );
}

export default Contact;
