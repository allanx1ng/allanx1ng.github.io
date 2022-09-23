import '../App.css';

export default function Contact() {

    const submit = () => {
        console.log('submitted')
    }

    return (
        <div className='contact' id='contact'>
            <h1>
                {"Contact - (not functional yet)"}
            </h1>
            <div>
                <form className='contact-form'>
                    <a name="contact"></a>

                    <label>Name</label>
                    <input class="input-field" type="text" name="name" placeholder='Enter Text Here' required />

                    <label>Subject</label>
                    <input class="input-field" type="text" name="subject" placeholder='Enter Text Here' required />

                    <label>Email</label>
                    <input class="input-field" type="email" name="email" placeholder='Enter Text Here' required />

                    <label>Message</label>
                    <textarea class="input-field" name="message" placeholder='Enter Text Here' ></textarea>

                    <button onClick={submit}>Submit</button>
                </form>

            </div>
        </div>
    )
}