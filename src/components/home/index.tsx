import { useEffect } from "react";
import { Container } from "react-bootstrap";

import spaceBg from "./spaceBg.jpg";

const Home = ({ stateChanger, ...rest }: any) => {

    useEffect(() => {
        stateChanger("home");
    });

    return (
        <div>
            <div className="bg-image-container">
                <img alt="background" className="bg-image" src={spaceBg} />
            </div>

            <div className="home-section">
                <Container>
                    <h1>
                        Section 1
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sem metus, semper non egestas ac, volutpat sit amet diam. Quisque quis dolor eu dolor viverra pharetra feugiat nec turpis. Curabitur convallis a eros a condimentum. Pellentesque congue lorem et augue rhoncus, ac feugiat turpis auctor. Suspendisse nec lorem quis velit porta mattis eget lacinia purus. Nam at commodo felis. Proin eleifend in libero eu porta. Donec rhoncus ligula id vestibulum finibus. Duis elementum lorem sed erat sagittis pretium. Ut quis erat enim. Integer pellentesque odio felis, sit amet vulputate nisi volutpat et.

                        Phasellus sagittis aliquet facilisis. Donec commodo justo nibh, et tincidunt libero laoreet et. Donec auctor pulvinar urna, sit amet porta orci blandit sit amet. Donec sagittis porttitor turpis consectetur laoreet. Etiam pulvinar lorem justo, in pellentesque lorem feugiat sed. Ut sed bibendum erat. Mauris malesuada tincidunt tortor. Vestibulum pellentesque suscipit fringilla. Ut luctus, dui at pellentesque elementum, urna arcu iaculis massa, ac commodo tellus diam vitae nisl. Morbi in quam rhoncus, tincidunt diam at, vulputate augue.

                        Vivamus sit amet tempus nisi. Suspendisse lacus quam, placerat sed felis quis, dictum congue tellus. Cras sit amet mollis quam, eget scelerisque libero. Donec ac diam eleifend, interdum felis id, vulputate dui. Maecenas aliquet lacus sit amet tortor tincidunt accumsan. Maecenas sed dictum metus. Sed sollicitudin leo ut dapibus aliquet. Vivamus lobortis vehicula urna et posuere. Nunc eget erat in nisi blandit suscipit a sit amet purus. Phasellus at tristique nisi, ac laoreet urna. Sed porttitor lacus tellus, rhoncus dictum magna vulputate sed. Aliquam hendrerit molestie sem, a dignissim nibh dignissim quis. Suspendisse faucibus porta ornare. In in quam sagittis, molestie sem ut, porta sem. Donec mollis ultricies convallis. Proin quam magna, vulputate a posuere sed, ullamcorper nec diam.

                        Nunc id ligula feugiat, pulvinar purus eu, dignissim massa. Curabitur auctor ultricies turpis at egestas. Curabitur at risus magna. Proin id sollicitudin neque, condimentum tempor leo. Praesent et ullamcorper neque. Pellentesque in arcu eu sem sodales aliquet. Nulla ut accumsan risus. Sed erat justo, commodo ut tempus et, placerat sit amet augue. Quisque non enim in ante porttitor commodo tristique ut quam. Aenean fermentum, neque sit amet tincidunt ullamcorper, nisi turpis lacinia est, quis interdum tortor nisi ut mi.

                        Nam eu felis a nibh iaculis tincidunt vitae sed justo. Nullam elementum ante eu arcu volutpat, vitae consequat libero vehicula. Phasellus vestibulum, lacus in tincidunt viverra, metus erat pretium enim, a fringilla purus sem ac quam. Etiam blandit libero ut nibh interdum, sit amet sodales velit porttitor. In scelerisque a ex a tristique. Integer pharetra mi nec urna iaculis varius. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque porta cursus augue sit amet euismod. In pretium dignissim ante molestie rhoncus. Suspendisse suscipit eleifend lectus, facilisis placerat est dignissim sit amet. Ut euismod neque at iaculis eleifend.
                    </p>
                </Container>
            </div>

            <div className="home-section">
                <Container>
                    <h1>
                        Section 2
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sem metus, semper non egestas ac, volutpat sit amet diam. Quisque quis dolor eu dolor viverra pharetra feugiat nec turpis. Curabitur convallis a eros a condimentum. Pellentesque congue lorem et augue rhoncus, ac feugiat turpis auctor. Suspendisse nec lorem quis velit porta mattis eget lacinia purus. Nam at commodo felis. Proin eleifend in libero eu porta. Donec rhoncus ligula id vestibulum finibus. Duis elementum lorem sed erat sagittis pretium. Ut quis erat enim. Integer pellentesque odio felis, sit amet vulputate nisi volutpat et.

                        Phasellus sagittis aliquet facilisis. Donec commodo justo nibh, et tincidunt libero laoreet et. Donec auctor pulvinar urna, sit amet porta orci blandit sit amet. Donec sagittis porttitor turpis consectetur laoreet. Etiam pulvinar lorem justo, in pellentesque lorem feugiat sed. Ut sed bibendum erat. Mauris malesuada tincidunt tortor. Vestibulum pellentesque suscipit fringilla. Ut luctus, dui at pellentesque elementum, urna arcu iaculis massa, ac commodo tellus diam vitae nisl. Morbi in quam rhoncus, tincidunt diam at, vulputate augue.

                        Vivamus sit amet tempus nisi. Suspendisse lacus quam, placerat sed felis quis, dictum congue tellus. Cras sit amet mollis quam, eget scelerisque libero. Donec ac diam eleifend, interdum felis id, vulputate dui. Maecenas aliquet lacus sit amet tortor tincidunt accumsan. Maecenas sed dictum metus. Sed sollicitudin leo ut dapibus aliquet. Vivamus lobortis vehicula urna et posuere. Nunc eget erat in nisi blandit suscipit a sit amet purus. Phasellus at tristique nisi, ac laoreet urna. Sed porttitor lacus tellus, rhoncus dictum magna vulputate sed. Aliquam hendrerit molestie sem, a dignissim nibh dignissim quis. Suspendisse faucibus porta ornare. In in quam sagittis, molestie sem ut, porta sem. Donec mollis ultricies convallis. Proin quam magna, vulputate a posuere sed, ullamcorper nec diam.

                        Nunc id ligula feugiat, pulvinar purus eu, dignissim massa. Curabitur auctor ultricies turpis at egestas. Curabitur at risus magna. Proin id sollicitudin neque, condimentum tempor leo. Praesent et ullamcorper neque. Pellentesque in arcu eu sem sodales aliquet. Nulla ut accumsan risus. Sed erat justo, commodo ut tempus et, placerat sit amet augue. Quisque non enim in ante porttitor commodo tristique ut quam. Aenean fermentum, neque sit amet tincidunt ullamcorper, nisi turpis lacinia est, quis interdum tortor nisi ut mi.

                        Nam eu felis a nibh iaculis tincidunt vitae sed justo. Nullam elementum ante eu arcu volutpat, vitae consequat libero vehicula. Phasellus vestibulum, lacus in tincidunt viverra, metus erat pretium enim, a fringilla purus sem ac quam. Etiam blandit libero ut nibh interdum, sit amet sodales velit porttitor. In scelerisque a ex a tristique. Integer pharetra mi nec urna iaculis varius. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque porta cursus augue sit amet euismod. In pretium dignissim ante molestie rhoncus. Suspendisse suscipit eleifend lectus, facilisis placerat est dignissim sit amet. Ut euismod neque at iaculis eleifend.
                    </p>
                </Container>
            </div>
        </div>
    );
}

export default Home;