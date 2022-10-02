import '../App.css';

export default function Contact() {

 
    return (
        <div className='contact' id='contact'>
            <h1>
                {"- Contact -"}
            </h1>
            <div>
                <form className='contact-form' action='https://formsubmit.co/allanxing2003@gmail.com' method='POST'>
                    <a name="contact"></a>

                    <label>Name</label>
                    <input class="input-field" type="text" name="name" placeholder='Enter Text Here' required />

                    <label>Subject</label>
                    <input class="input-field" type="text" name="subject" placeholder='Enter Text Here' required />

                    <label>Email</label>
                    <input class="input-field" type="email" name="email" placeholder='Enter Text Here' required />

                    <label>Message</label>
                    <textarea class="input-field" name="message" placeholder='Enter Text Here' ></textarea>

                    <button type='submit'>Submit</button>
                </form>

            </div>
        </div>
    )
}