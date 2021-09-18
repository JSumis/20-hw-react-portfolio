export default function Contact() {
    return (
        <div id="contact-container">
        <div className="contact-div">
            <h1>Contact</h1>

            <h2>LinkedIn</h2>
            <h2>https://www.linkedin.com/in/joseph-sumis-179aa87a/</h2>

            <form>
             <h2>Name</h2>
                <input
                 type="text"

                />

            </form>
             <h2>Email</h2>
                <input
                 type="text"
            />

            <form>
             <h2>Message</h2>
                <input id="message-input"
                 type="text"
                />
            </form>

            <form>
                <input id="submit-btn"
                 type="submit"
                 value="Send Msg"
                // onClick={handleSubmit}
                />
            </form>

        </div>
        </div>
    )
}