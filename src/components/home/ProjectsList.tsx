import {
    k_dream_href,
    k_augnav_href,
    k_club_websites_href,
    k_deep_playlist_href,
    k_ford_connected_href,
    k_fruit_vision_href,
    k_hapi_app_href,
    k_more_projects_href,
    k_personal_website_href,
    k_smart_room_href,
    k_spanish_hero_href,
    k_teaching_cs_indian_village_href,
    k_the_right_price_href,
    k_tort_cam_href, k_tower_defense_game_href
} from "../navbar";
import {ProjectProps} from "./Projects";
import {
    k_amazon_dynamodb_tag,
    k_angular_tag,
    k_arduino_tag,
    k_arkit_tag,
    k_azure_custom_vision_tag,
    k_azure_iot_hub,
    k_babel_tag,
    k_blender_tag,
    k_cpp_tag,
    k_css_tag,
    k_dart_tag,
    k_firebase_storage_tag,
    k_firestore_tag,
    k_flask_tag,
    k_flutter_tag,
    k_ghpages_tag,
    k_go_tag,
    k_google_maps,
    k_graphql_tag,
    k_heroku_tag,
    k_howler_tag,
    k_html_tag,
    k_ibm_watson_tag,
    k_ios_tag,
    k_java_tag,
    k_js_tag,
    k_mongodb_tag,
    k_nlp_tag,
    k_nodejs_tag, k_opengl_tag,
    k_p5_tag,
    k_python_tag,
    k_raspberrypi_tag,
    k_react_native_tag,
    k_react_tag, k_redis_tag,
    k_redux_tag,
    k_sass_tag,
    k_socketio_tag,
    k_spring_boot_tag,
    k_swift_tag,
    k_threejs_tag,
    k_ts_tag, k_webassembly_tag
} from "./ProjectTags";

import personal_website_image from "resources/images/personal_website.png";
import web from "resources/images/web.jpg";
import projects from "resources/images/projects.jpg";
// import dream_engine_image from "resources/images/dream-screenshot.png";

export const showMoreHeight = "177px";

interface ProjectList {
    [key: string]: ProjectProps;
}

let projectsList: ProjectList = {};

projectsList[k_dream_href] = {
    videoUrl: "https://www.youtube.com/embed/bcXhjQ1Pl3U",
    title: "Dream Engine",
    type: "Real-Time 3D Engine (Game Engine)",
    date: "February of 2023",
    content:
        <>
            <p>Website for the Application: <a rel="noreferrer" target="_blank"
                                   href="https://rdeepak2002.github.io/dream/">https://rdeepak2002.github.io/dream/</a></p>
            <p>Link to Source Code of the Software: <a rel="noreferrer" target="_blank"
                                                       href="https://github.com/rdeepak2002/dream/tree/51-instancing-support">https://github.com/rdeepak2002/dream/</a>
            </p>
            <p>“Dream Engine" - A Simple Tool to Allow Anyone to Turn Their Dreams Into Reality.</p>
            <ul>
                <li>Developed a real-time 3D engine / game engine similar to Unity and Unreal.</li>
                <li><strong>Utilized:</strong> C++ for the core engine code, OpenGL for rendering, and Emscripten to allow the engine to be compiled to web assembly.</li>
                <li><strong>Functions:</strong></li>
                <ol>
                    <li>Entity component system with hierarchy support.</li>
                    <li>Lua scripting to allow users to attach custom game code to entities.</li>
                    <li>Physics system utilizing Bullet Physics engine.</li>
                    <li>Forward rendering with support for point lights, directional lights, and spot lights.</li>
                    <li>Ability to load numerous types of 3D models from a project's asset folder into the 3D world.</li>
                    <li>Support for skeletal animations and a graph editor to edit animator state machines associated with entities.</li>
                </ol>
            </ul>
        </>,
    tags: [k_cpp_tag, k_opengl_tag, k_webassembly_tag],
    showMoreHeight: showMoreHeight,
    id: k_dream_href
};

projectsList[k_augnav_href] = {
    videoUrl: "https://www.youtube.com/embed/8opbh55IOg4",
    title: "AugNav",
    type: "Web App and Phone App",
    date: "March of 2021",
    content:
        <>
            <p>Website for the Application: <a rel="noreferrer" target="_blank"
                                               href="https://augnav.herokuapp.com/">https://augnav.herokuapp.com</a></p>
            <p>“AugNav" - A Creative Way to Guide People Inside Buildings or In Complex Environments Using Augmented
                Reality.</p>
            <ul>
                <li>Developed Web Application & Mobile Phone Application - "AugNav.”</li>
                <li><strong>Inspired:</strong> When I Noticed How My Elderly Parents Frequently Get Lost in Places Like
                    the Mall or Disneyland.
                </li>
                <li><strong>Utilized:</strong> Machine Learning and Augmented Reality.</li>
                <li><strong>Functions:</strong></li>
                <ol>
                    <li>To find the exit in high-rise builidings during an emergency like a fire or earthquake.</li>
                    <li>For people to navigate through complex environments like theme parks, airports, and malls.</li>
                </ol>
            </ul>
        </>,
    tags: [k_ios_tag, k_arkit_tag, k_swift_tag, k_firestore_tag, k_html_tag, k_css_tag, k_js_tag, k_threejs_tag, k_nodejs_tag, k_heroku_tag],
    showMoreHeight: showMoreHeight,
    id: k_augnav_href
};

projectsList[k_smart_room_href] = {
    videoUrl: "https://www.youtube.com/embed/VwFOZGbdJio",
    title: "SmartRoom",
    type: "Web App",
    date: "May of 2020",
    content:
        <>
            <p>Website for the Application: <a rel="noreferrer" target="_blank"
                                               href="https://smartroomvr.herokuapp.com/">https://smartroomvr.herokuapp.com</a>
            </p>
            <p>"SmartRoom" - An Immersive 3D Classroom Environment that Allows Students to Collaborate and Talk to Their
                Teacher.</p>
            <ul>
                <li>Developed Web Application - "SmartRoom.”</li>
                <li><strong>Inspired:</strong> When I Noticed How Fellow Students Disliked Zoom Meetings.</li>
                <li><strong>Utilized:</strong> THREE.js and Websockets.</li>
                <li><strong>Functions:</strong></li>
                <ol>
                    <li>Live quiz feature to administer quizzes to students.</li>
                    <li>Live feedback feature that utilizes IBM Watson's Tone analyzer to categorize constructive and
                        destructive feedback.
                    </li>
                    <li>Live whiteboard for teacher to draw diagrams that students can view.</li>
                </ol>
            </ul>
        </>,
    tags: [k_html_tag, k_js_tag, k_css_tag, k_babel_tag, k_socketio_tag, k_nodejs_tag, k_threejs_tag, k_heroku_tag, k_blender_tag],
    showMoreHeight: showMoreHeight,
    id: k_smart_room_href
};

projectsList[k_tower_defense_game_href] = {
    videoUrl: "https://www.youtube.com/embed/FEQlW8OKS3c",
    title: "Georgia Tech CS 2340 Tower Defense Game",
    type: "Desktop Game",
    date: "May of 2022",
    content:
        <>
            <p>Tower Defense Game Developed in Georgia Tech's CS 2340 "Objects and Design" Class</p>
            <ul>
                <li>Developed a Tower Defense Desktop Game Application using JavaFX and Maven</li>
                <li>Won first place out of 127 teams for the best game in the class based on student votes</li>
                <li>Recognition from class instructor, Dr. Aibek Musaev</li>
                <li><strong>Utilized:</strong> SOLID and GRASP object oriented design principles while developing the software. Art and music are from the 2006 game "YS Origin".</li>
                <li><strong>Functions:</strong></li>
                <ol>
                    <li>Users can place towers onto a map</li>
                    <li>Users can purchase towers from a store</li>
                    <li>Users can earn money by eliminating enemies</li>
                    <li>Users can battle a final boss after surviving through three waves of enemies</li>
                    <li>Users can view game statistics such as how many towers they placed after winning or losing</li>
                </ol>
            </ul>
        </>,
    tags: [k_java_tag],
    showMoreHeight: showMoreHeight,
    id: k_tower_defense_game_href
};

projectsList[k_ford_connected_href] = {
    videoUrl: "https://www.youtube.com/embed/R4PKfsldrWA",
    title: "Ford Connected",
    type: "Phone App",
    date: "July of 2021",
    content:
        <>
            <p>Devpost Link: <a rel="noreferrer" target="_blank"
                                href="https://devpost.com/software/ford-connected">https://devpost.com/software/ford-connected</a>
            </p>
            <p>“Ford Connected” - A Mobile App to Allow Ford Vehicle Owners to Stay Connected.</p>
            <ul>
                <li>Developed Phone Application - “Ford Connected.”</li>
                <li><strong>Inspired:</strong> After Observing How Ford API Can be Utilized to Connect Drivers.</li>
                <li><strong>Utilized:</strong> React Native, Redux, Typescript, Spring Boot, MongoDB, Redis, GraphQL,
                    and Firebase Storage
                </li>
                <li><strong>Functions:</strong></li>
                <ol>
                    <li>Allows Ford vehicles owners to share about their experiences on the road.</li>
                    <li>Drivers can view real-time vehicle information such as location and speed of their friends and
                        family.
                    </li>
                </ol>
            </ul>
        </>,
    tags: [k_graphql_tag, k_redux_tag, k_react_native_tag, k_heroku_tag, k_ts_tag, k_css_tag, k_spring_boot_tag, k_java_tag, k_redis_tag, k_mongodb_tag, k_firebase_storage_tag],
    showMoreHeight: showMoreHeight,
    id: k_ford_connected_href
};

projectsList[k_spanish_hero_href] = {
    videoUrl: "https://www.youtube.com/embed/g88C3LuczK4",
    title: "\"Spanish Hero\" Educational Game",
    type: "Educational Software",
    date: "March of 2017",
    content:
        <>
            <p>Website to Download Application: <a rel="noreferrer" target="_blank"
                                                   href="https://spanishheromv.web.app/">https://spanishheromv.web.app</a>
            </p>
            <p>Link to Source Code of the Software: <a rel="noreferrer" target="_blank"
                                                       href="https://github.com/rdeepak2002/SpanishHero/">https://github.com/rdeepak2002/SpanishHero</a>
            </p>
            <p>“Spanish Hero” - An Entertaining Medium to Practice Conjugating Verbs Into Various Spanish Grammar Tenses
                in a Fun & Easy Way.</p>
            <ul>
                <li>Developed Spanish Video Game - “Spanish Hero.”</li>
                <li><strong>Inspired:</strong> When I became flustered with the numerous Spanish grammar tenses and verb
                    conjugations that I had to learn and remember in my Spanish 2 class.
                </li>
                <li><strong>Utilized:</strong> Advanced computer programming concepts such as Object-oriented
                    programming to organize the structure of the game's logic.
                </li>
                <li><strong>Functions:</strong></li>
                <ol>
                    <li>Helps All Students Learn Spanish Grammar in an Entertaining Way.</li>
                    <li>Delightful Way to Teach Spanish Concepts Like Verb Conjugations to Students in Poor Communities
                        Who Lack Educational Resources Such as Teachers and Textbooks to Practice Spanish Grammar
                        Exercises.
                    </li>
                </ol>
                <li><strong>Advantages:</strong></li>
                <ol>
                    <li>Allows Other Software Developers to Add More Features to The Video Game.</li>
                    <li>Video Game & Code is Made Available to The General Public - Allows Public to Learn & Improve
                        Spanish grammar in a delightful manner.
                    </li>
                </ol>
                <li><strong>Recognition:</strong> Received from Spanish Teacher and Mentor, Señora Griffin, that the
                    software is very ‘advanced'.
                </li>
            </ul>
        </>,
    tags: [k_java_tag],
    showMoreHeight: showMoreHeight,
    id: k_spanish_hero_href
};

projectsList[k_deep_playlist_href] = {
    videoUrl: "https://www.youtube.com/embed/dtWo9wkM9RE",
    title: "Deep Playlist",
    type: "Web App",
    date: "June of 2021",
    content:
        <>
            <p>"Deep Playlist" - A Web App to Generate a Playlist Using Deep Learning.</p>
            <ul>
                <li>Developed Web Application - "Deep Playlist.”</li>
                <li><strong>Inspired:</strong> Collaborated with a team of "Sound and Music Intelligence" engineers
                    during an internal company Hackathon.
                </li>
                <li><strong>Utilized:</strong> React, Typescript, P5.js, Three.js, Howler.js, Flask</li>
                <li><strong>Functions:</strong></li>
                <ol>
                    <li>Allows users to generate a smart playlist from a large collection of songs.</li>
                    <li>Users can select which song to start at and which song to end at.</li>
                </ol>
            </ul>
        </>,
    tags: [k_p5_tag, k_flask_tag, k_python_tag, k_howler_tag, k_threejs_tag, k_react_tag, k_ts_tag, k_css_tag, k_heroku_tag],
    showMoreHeight: showMoreHeight,
    id: k_deep_playlist_href
};

projectsList[k_tort_cam_href] = {
    videoUrl: "https://www.youtube.com/embed/Skl5BdvIy7U",
    title: "Tort Camera & Food Dispenser",
    type: "Hobbies",
    date: "November of 2019",
    content:
        <>
            <p>Link to Source Code of the Software: <a rel="noreferrer" target="_blank"
                                                       href="https://github.com/rdeepak2002/TortFeeder">https://github.com/rdeepak2002/TortFeeder</a>
            </p>
            <p>“Tort Cam & Food Dispenser” - Remote Surveillance System For my Pet Tortoise, “Lettuce-be-Happy”</p>
            <ul>
                <li>Developed Surveillance System - “Tort Camera & Food Dispenser”</li>
                <li><strong>Function:</strong> For Surveillance of Tortoise From Afar</li>
                <li><strong>Utilized:</strong> (i) Raspberry Pi mini computer; (ii) Arduino microcontroller; & (iii)
                    Webcam
                </li>
                <li>‘Tort’ Website - Hosted on The Raspberry Pi Mini Computer by Utilizing a Python Flask Server</li>
                <li>Router Settings Configured to Port Forward From The Raspberry Pi Computer</li>
                <li>Raspberry Pi Configured to Have Static IP Address</li>
                <li>Flask Server Takes Requests From Clients on The Website to Dispense Food Via Micro Servo Controlled
                    by Arduino Through Serial Configuration
                </li>
                <ul>
                    <li>Server Maintains Itself by Utilizing Cron Jobs to Reboot</li>
                    <li>Whenever Wi-Fi Disconnects, Server Automatically Turns On Within 20 Minutes After Reboot</li>
                </ul>
                <li>Project - Joyful, Learning Experience - Allows Observation of “Lettuce-be-Happy” From Afar</li>
            </ul>
        </>,
    tags: [k_raspberrypi_tag, k_arduino_tag, k_cpp_tag, k_flask_tag, k_python_tag, k_html_tag, k_css_tag, k_js_tag],
    showMoreHeight: showMoreHeight,
    id: k_tort_cam_href
};

projectsList[k_fruit_vision_href] = {
    videoUrl: "https://www.youtube.com/embed/tzvA_nzSJ-4",
    title: "FruitVision",
    type: "Web App",
    date: "May of 2021",
    content:
        <>
            <p>Devpost Link: <a rel="noreferrer" target="_blank"
                                href="https://devpost.com/software/fruit-vision">https://devpost.com/software/fruit-vision</a>
            </p>
            <p>“FruitVision" - A Web App to Allow Farmers to Monitor the Health of their Crops using Computer
                Vision.</p>
            <ul>
                <li>Developed Web Application - “FruitVision.”</li>
                <li><strong>Inspired:</strong> After Observing How Crop Spoilage Leads to Increased Food Waste.</li>
                <li><strong>Utilized:</strong> Azure Custom Vision, Azure IoT Hub, Node.js, Raspberry Pi, React, Web
                    Sockets
                </li>
                <li><strong>Functions:</strong></li>
                <ol>
                    <li>Allows farmers to view a real time video feed of their crops.</li>
                    <li>Uses Azure Custom Vision to analyze the health of crops.</li>
                </ol>
            </ul>
        </>,
    tags: [k_azure_custom_vision_tag, k_azure_iot_hub, k_socketio_tag, k_raspberrypi_tag, k_nodejs_tag, k_react_tag, k_css_tag, k_js_tag, k_heroku_tag],
    showMoreHeight: showMoreHeight,
    id: k_fruit_vision_href
};

projectsList[k_hapi_app_href] = {
    videoUrl: "https://www.youtube.com/embed/cDajvueR5Wk",
    title: "Hapi App",
    type: "Web App and Phone App",
    date: "July of 2018",
    content:
        <>
            <p>Website for the Application: <a rel="noreferrer" target="_blank"
                                               href="http://www.hapidiary.com/">http://www.hapidiary.com</a></p>
            <p>Mentioned in News: <a rel="noreferrer" target="_blank"
                                     href="https://patch.com/california/cupertino/cupertino-winners-teen-app-design-challenge-announced">https://patch.com/california/cupertino/cupertino-winners-teen-app-design-challenge-announced</a>
            </p>
            <p>“Hapi App” - An Engaging Medium to Help People Cope With Psychological Depression, a Social Injustice
                That Affects People in All Walks of Life.</p>
            <ul>
                <li>Developed Web Application & Mobile Phone Application - “Hapi App.”</li>
                <li>Won 1st Place - Teen App Challenge Competition. Won 4th Place for App and Video - Congressional App
                    Challenge National Competition.
                </li>
                <li>Featured in an Article on Patch News website.</li>
                <li>Interviewed by Mr. Matt Lorenzo, Teen Services Librarian - Video Recording of my Application Played
                    Daily in the Cupertino Library TV.
                </li>
                <li><strong>Inspired:</strong> When Students Became Excessively Stressed About Their Academic
                    Performance Due to The Competitive Environment of my High School.
                </li>
                <li><strong>Utilized:</strong> Machine Learning to Provide Users With an Automated Analysis to Visualize
                    Their Feelings About Certain People, Places, or Things Mentioned in the Diary Entry.
                </li>
                <li><strong>Functions:</strong></li>
                <ol>
                    <li>Serves as a Smart Diary to Help People Cope With Anxiety & Depression.</li>
                    <li>Recommends a List of Possible Activities to Help Users Strengthen Relationships With People
                        Mentioned in The Entries of The User’s Diary.
                    </li>
                    <li>Provides Videos Related to the Entries in the User’s Diary to Help Uplift The User’s Spirit.
                    </li>
                </ol>
            </ul>
        </>,
    tags: [k_ibm_watson_tag, k_nlp_tag, k_flutter_tag, k_dart_tag, k_nodejs_tag, k_firestore_tag, k_firebase_storage_tag, k_html_tag, k_css_tag, k_js_tag, k_heroku_tag],
    showMoreHeight: showMoreHeight,
    id: k_hapi_app_href
};

projectsList[k_personal_website_href] = {
    imageUrl: personal_website_image,
    title: "Personal Website",
    type: "Web App",
    date: "August of 2021",
    content:
        <>
            <p>Link to Web App: <a rel="noreferrer" target="_blank"
                                   href="https://rdeepak2002.github.io">https://rdeepak2002.github.io</a></p>
            <ul>
                <li>Developed a Personal Website to Showcase my Innovations and Achievements.</li>
                <li><strong>Functions</strong></li>
                <ul>
                    <li>Keeps track of website visits using Go server and an Amazon DynamoDB database</li>
                    <li>Frontend is designed using React, Typescript, Sass, and Three.js.</li>
                </ul>
            </ul>
        </>,
    tags: [k_go_tag, k_amazon_dynamodb_tag, k_sass_tag, k_ghpages_tag, k_react_tag, k_ts_tag, k_threejs_tag],
    showMoreHeight: showMoreHeight,
    id: k_personal_website_href
};

projectsList[k_the_right_price_href] = {
    videoUrl: "https://www.youtube.com/embed/sywBQSnFeOw",
    title: "The Right Price",
    type: "Web App and iPhone App",
    date: "April of 2019",
    content:
        <>
            <p>Devpost Link: <a rel="noreferrer" target="_blank"
                                href="https://devpost.com/software/the-right-price-t4kipb">https://devpost.com/software/the-right-price-t4kipb</a>
            </p>
            <p>“The Right Price” - An Effective Application to Help Small Businesses to Survive & Shine in a Competitive
                Economy.</p>
            <ul>
                <li>Developed Web Application & iPhone Application - “The Right Price.”</li>
                <li>Won 1st Place - Cupertino Hacks Hackathon.</li>
                <li>Presented on Live TV to Mayor of Cupertino, Mr. Steven Scharf - Cupertino City Council.</li>
                <li><strong>Inspired:</strong> After Observing How Online Shopping Services Mostly Target Large
                    Retailers Causing Local Businesses in Small Towns to Lose Out on Customers.
                </li>
                <li><strong>Utilized:</strong> Augmented Reality (AR) on a Smartphone & Crowdsourcing to Guide The User
                    to Nearby Locations Where Certain Products Are Sold.
                </li>
                <li><strong>Functions:</strong></li>
                <ol>
                    <li>Helps local stores gain popularity by assisting customers in purchasing products of better
                        quality at nearby locations.
                    </li>
                    <li>Helps local businesses to gain popularity by assisting users to find cheap, high-quality
                        products nearby through the recommendations of their peers.
                    </li>
                    <li>Creates Virtual AR Labels of The Products in The Viewing Direction Relative to The User’s
                        Current Location by Utilizing The Information Obtained From Other Users About Similar Products.
                    </li>
                </ol>
                <li><strong>Advantages:</strong></li>
                <ol>
                    <li>Serves as a Virtual Compass for The User And Makes The Shopping Experience Entertaining &
                        Adventurous.
                    </li>
                    <li>Motivates Users to Purchase The Products From Local Stores, Instead of Buying The Products
                        Online From Large Retailers.
                    </li>
                </ol>
            </ul>
        </>,
    tags: [k_google_maps, k_arkit_tag, k_ios_tag, k_html_tag, k_css_tag, k_js_tag],
    showMoreHeight: showMoreHeight,
    id: k_the_right_price_href
};

projectsList[k_teaching_cs_indian_village_href] = {
    videoUrl: "https://www.youtube.com/embed/53qEBPBruRk",
    title: "Teaching Computer Science At Indian Village",
    type: "Volunteering",
    date: "July of 2019",
    content:
        <>
            <p>The 26-minutes concise video demonstrates me (Deepak Ramalingam), a Senior at Monta Vista High School in
                Cupertino, California, teaching two weeks of Computer Science classes (Python 3 Programming language &
                Web Design) to a student body of 52 pupils at an Indian Village High School.</p>
            <p><strong>Date of Internship: </strong>June 23 - July 8, 2019</p>
            <p><strong>Venue: </strong>Sankaramangalam Public High School & Junior College, Kaviyoor, Kerala, India</p>
            <p><strong>Note:</strong></p>
            <ul>
                <li>Due to the lack of air-conditioning / fans in the sweltering temperature and absence of sound-proof
                    walls, external sounds and noises could not be eliminated because of the need for open doors and
                    windows for aeration.
                </li>
                <li>No computers or internet were available for student usage. Thus, only the theory of computer science
                    was taught to the students.
                </li>
            </ul>
            <p><strong>Teaching Medium:</strong></p>
            <ul>
                <li>Personally Prepared Power Points</li>
                <li>Digital Whiteboard</li>
                <li>Projector</li>
            </ul>
            <p>It was an interactive teaching session with doubts and questions being asked and answered from both
                sides. An exam was conducted after the teaching session in order to test the understanding of the
                material - the students did well.</p>
        </>,
    tags: [k_python_tag, k_html_tag, k_css_tag, k_js_tag],
    showMoreHeight: showMoreHeight,
    id: k_teaching_cs_indian_village_href
};

projectsList[k_club_websites_href] = {
    imageUrl: web,
    title: "Websites For Clubs",
    type: "Web Apps",
    date: "August of 2019",
    content:
        <>
            <p>NHS Website: <a rel="noreferrer" target="_blank"
                               href="https://mvnhs.herokuapp.com/home">https://mvnhs.herokuapp.com/home</a></p>
            <p>Bite Club Website: <a rel="noreferrer" target="_blank"
                                     href="https://biteclub.web.app/#/">https://biteclub.web.app</a></p>
            <ul>
                <li><strong>Vice President</strong> - Monta Vista National Honor Society (NHS).</li>
                <li><strong>Vice President</strong> - Food Science / Bite Club.</li>
                <li>Developed Websites For Monta Vista National Honor Society (NHS) & Food Science / Bite Clubs.</li>
                <li><strong>Functions and Advantages</strong></li>
                <ul>
                    <li>NHS Website - Allows Members to Create Accounts & to Sign up For Volunteer Events.</li>
                    <li>Food Science / Bite Club Website - Cooking Club at Monta Vista High School.</li>
                    <li>Future Officers Can Use Administrative Accounts to Create New Meetings & Manage Member
                        Profiles.
                    </li>
                </ul>
            </ul>
        </>,
    tags: [k_angular_tag, k_react_tag, k_mongodb_tag, k_nodejs_tag, k_css_tag, k_js_tag, k_heroku_tag, k_firestore_tag],
    showMoreHeight: showMoreHeight,
    id: k_club_websites_href
};

projectsList[k_more_projects_href] = {
    imageUrl: projects,
    title: "More Projects",
    type: "Hobbies",
    date: "Current",
    content:
        <>
            <p>Link to my GitHub: <a rel="noreferrer" target="_blank"
                                     href="https://github.com/rdeepak2002">https://github.com/rdeepak2002</a></p>
            <p>More Projects Can be Viewed on my GitHub.</p>
        </>,
    tags: [],
    showMoreHeight: showMoreHeight,
    id: k_more_projects_href
};

export default projectsList;
