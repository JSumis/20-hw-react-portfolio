import { Document } from 'react-pdf' 
export default function Resume() {
    return (
        <div className="resume-div">
            <h1>Resume</h1>
            <ul>
            <Document file="./public/images/Joseph_Sumis_Resume.PDF" />
            <a href="./Joseph_Sumis_Resume.PDF" alt="PDF file of current resume">Resume</a>
            </ul>

            <h2>Front-End Proficiencies</h2>
            <ul>
                <li>Html</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>JQuery</li>
                <li>Bootstrap</li>
                <li>React</li>
                <li>Mobile-First Responsive Design</li>
            </ul>

            <h2>Back-End Proficiencies</h2>
            <ul>
                
                <li>Node.js</li>
                <li>Express</li>
                <li>MYSQL/Sequelize</li>
                <li>MongDB</li>
                <li>GraphQL</li>
            </ul>
        </div>
    )
}