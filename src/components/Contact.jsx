import React from 'react'
import "../app/style/contact.css"

const Contact = () => {
    return (
        <section className='contactSection'>
            <h2>Contact Information</h2>
            <main className='contactContainer'>
                <span>
                    <p>Do you have any questions or you jusy want to say "Hello"?</p>
                    <br />
                    you can reach out to us !
                    <ul>
                        <li>Hasnat Khan</li>
                        <li>hasnatking1947@gmail.com</li>
                        <li>+92-3152323402</li>
                    </ul>
                    <br />
                    <a href="https://new-portfolio-kgnao7kcs-hasnatking1947-gmailcom.vercel.app/" className='portfolio' target="_blank"> <b>Check My Portfolio</b></a>
                </span>
                <div className='MyImage'></div>
            </main>
            <footer>
                @MIT LICENSE
            </footer>
        </section>
    )
}

export default Contact;
