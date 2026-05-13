import profilePic from '../assets/profile.jpg';
import emailIcon from '../assets/email-button.png';
import linkedinIcon from '../assets/linkedin-button.png';

function Profile() {
    return (
        <div className="profile">
            <img src={profilePic} alt="Profile" className="profile-picture"/>
            <h1 className="profile-name">Riddhi Chouhan</h1>
            <p>Lead Software Engineer</p>

            {/* Buttons */}
            <div className="buttons">
                {/*Email */}
                <img src={emailIcon} alt="Email" onClick={() => (window.location.href = 'mailto:chouhan.riddhi@gmail.com')} />

                {/*LinkedIn */}
                <img src={linkedinIcon} alt="LinkedIn" onClick={() => (window.location.href = 'https://www.linkedin.com/in/chouhanriddhi')} />

            </div>
        </div>
    );
}

export default Profile;