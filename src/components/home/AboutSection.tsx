import {Image} from "react-bootstrap";
import deepak_picture from "resources/images/deepak_3.jpeg";

interface AboutSectionProps {
    isMobileCss: boolean;
}

const AboutSection = (props: AboutSectionProps) => {
    return (
        <div className="card" style={{width: "100%"}}>
            <div style={{
                display: "flex",
                flexDirection: props.isMobileCss ? "column" : "row",
                paddingTop: 64,
                paddingBottom: 64,
                paddingRight: 48,
                paddingLeft: 48
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    flex: 0.5,
                    borderBottomStyle: props.isMobileCss ? "solid" : "none",
                    borderBottomWidth: 1,
                    marginBottom: props.isMobileCss ? 10 : 0
                }}>
                    <Image src={deepak_picture} fluid rounded
                           style={{width: props.isMobileCss ? "100%" : "60%", height: "auto"}}/>

                    <div style={{marginTop: "1rem"}}>
                        <p><strong>Name:</strong> Deepak Ramalingam</p>
                        <p><strong>Major:</strong> B.S. Computer Science @ Georgia Institute of Technology (Georgia
                            Tech)</p>
                        <p><strong>Email:</strong> rdeepak2002@gmail.com</p>
                        <p><strong>Phone:</strong> +1 (208) 391-9267</p>
                    </div>
                </div>
                <div style={{display: "flex", flexDirection: "column", flex: 0.5}}>
                    <h5>Biography</h5>

                    <p>I’m a software engineer passionate about building reliable, high-impact systems and products. My experience spans startups, big tech, and research environments — from developing systems to orchestrate machine learning and big data workloads in Netflix’s data platform (2× intern, now full-time) to contributing to patented augmented reality tools at TikTok, and creating production-ready web and mobile applications at PeeblesTech.
</p>

                    <p>I’ve also worked on open-source projects across diverse domains: building a custom real-time 3D engine and renderer from the ground up, developing augmented reality navigation systems, creating machine learning-powered applications, and maintaining projects that have gained over 900 stars on GitHub.</p>

                    <p>In every project, my focus is on writing clean, well-tested, maintainable code and delivering software that balances performance, usability, and long-term scalability.</p>

                </div>
            </div>
        </div>
    );
}

export default AboutSection;
