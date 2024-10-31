import "./about.css";
import Image from "next/image";

export default function About() {
    return (
        <div className="p">
            <div className="h1"><h1>𝗛𝗲𝗹𝗹𝗼, 𝗜'𝗺 𝗡𝗼𝗼𝗿 𝘂𝗹 𝗦𝗲𝗵𝗮𝗿!</h1></div>

            <div className="mainpara">
                I’m a dedicated developer with a strong passion for coding and technology.
                Specializing in languages like Java, TypeScript, HTML, and CSS, I enjoy creating 
                projects that solve real-world problems while focusing on quality, user experience, 
                and innovation. Through CodeCraft Hub, I aim to showcase my journey in the world of 
                software development. My projects reflect my commitment to growth, learning, and 
                crafting solutions that make a difference.
            </div>

            <div className="myself">
                <img src="/sehar.jpeg" alt="image" />
            </div>

            <h2>Skills</h2>

            <div className="skill-container">
                <div className="skill-title">Communication</div>
                <div className="progress-bar-container">
                    <div className="progress-bar communication">85%</div>
                </div>
            </div>

            <div className="skill-container">
                <div className="skill-title">Teaching</div>
                <div className="progress-bar-container">
                    <div className="progress-bar teaching">90%</div>
                </div>
            </div>

            <div className="skill-container">
                <div className="skill-title">Basic Computer Knowledge</div>
                <div className="progress-bar-container">
                    <div className="progress-bar basic-computer">75%</div>
                </div>
            </div>

            <div className="skill-container">
                <div className="skill-title">Voice Quality</div>
                <div className="progress-bar-container">
                    <div className="progress-bar voice-quality">80%</div>
                </div>
            </div>

            <div className="skill-container">
                <div className="skill-title">HTML</div>
                <div className="progress-bar-container">
                    <div className="progress-bar html">70%</div>
                </div>
            </div>

            <div className="skill-container">
                <div className="skill-title">CSS</div>
                <div className="progress-bar-container">
                    <div className="progress-bar css">65%</div>
                </div>
            </div>

            <div className="skill-container">
                <div className="skill-title">TypeScript</div>
                <div className="progress-bar-container">
                    <div className="progress-bar typescript">60%</div>
                </div>
            </div>

            <div className="skill-container">
                <div className="skill-title">Next.js</div>
                <div className="progress-bar-container">
                    <div className="progress-bar nextjs">70%</div>
                </div>
            </div>
        </div>
    );
}
