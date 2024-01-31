import { useRef } from "react";
import emailjs from '@emailjs/browser';

export default function Enquiry() {
    const formRef = useRef(); // Use a meaningful name like formRef instead of form

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_yththum', 'template_9yb8ytv', formRef.current, 'mHQ4I_f2yF4ul6iGA')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
        <div className="container_cont">
            <div className="contact_heading">
                <h3 className="name_contact_us">Contact Us</h3>
            </div>
            <div className="form_div">
                <form ref={formRef} onSubmit={sendEmail} className="forms">
                    <input className="text_area" type="text" placeholder="Full Name" name="user_name" required />
                    <input className="text_area" type="email" placeholder="Email" name="user_email" required />
                    <input className="text_area" type="text" placeholder="Subject" name="subject" required />
                    <textarea className="text_area" name="message" cols={30} rows={10}></textarea>
                    <button className="view_contact" type="submit">Send Enquiry</button>
                </form>
            </div>
        </div>
    );
}
