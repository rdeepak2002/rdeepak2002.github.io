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

                    <p>
                        My passion in programming since my elementary school days led me to develop my first educational video game in the JAVA programming language during my freshman year of high school. I am now a full-stack and mobile app developer. During my leisure time, I enjoy reading and obtaining advanced Computer Science knowledge, which I utilize to solve real world problems in the fields of education, business, health care, and emergency preparedness. My practical work is showcased in the form of web and phone applications. Due to my clean, structured programming techniques, I have won hackathons and several advanced Computer Science and Math competitions in the states of California, Georgia, and Idaho.
                    </p>

                </div>
            </div>
        </div>
    );
}

export default AboutSection;
