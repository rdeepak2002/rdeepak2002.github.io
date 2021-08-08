import {Image} from "react-bootstrap";
import deepak_picture from "resources/images/deepak_1.jpg";

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

                    <p>
                        I was born in Boise, Idaho, and I am currently a second year Computer Science student at the
                        Georgia Institute of Technology (Georgia Tech).
                    </p>

                    <p>
                        I am passionate about Computer Science and during my free time I like to create full stack
                        applications. I also love to play racquet sports like badminton and tennis.
                    </p>

                    <p>
                        I work part-time as a Software Developer for PeeblesTech LLC in Wisconsin, Madison.
                    </p>

                    <p>
                        I am also a full-time Augmented Reality Software Engineering Intern at TikTok's Intelligent
                        Creation R&D Lab in Mountain View, California.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutSection;