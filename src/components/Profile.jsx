function Profile() {
    return (
        <div className="profile">
            <img src="src/assets/profile.jpg" alt="Profile" className="profile-picture"/>
            <h1 className="profile-name">Riddhi Chouhan</h1>
            <p>Lead Software Engineer</p>

            {/* Buttons */}
            <div className="buttons">
                {/*Email */}
                <img src="src/assets/email-button.png" alt="Email" onClick={() => (window.location.href = 'mailto:chouhan.riddhi@gmail.com')} />

                {/*LinkedIn */}
                <img src="src/assets/linkedin-button.png" alt="LinkedIn" onClick={() => (window.location.href = 'https://www.linkedin.com/in/chouhanriddhi')} />

            </div>
        </div>
    );
}

export default Profile;