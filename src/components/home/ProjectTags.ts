interface ProjectTag {
  name: string;
  color: string;
  link: string;
}

interface ProjectTags {
  [key: string]: ProjectTag;
}

const projectTags: ProjectTags = {};

export const k_ios_tag: string = "ios";
projectTags[k_ios_tag] = {
  name: "ios",
  color: "#51bbfe",
  link: "link"
};

export const k_arkit_tag: string = "ARKit";
projectTags[k_arkit_tag] = {
  name: "arkit",
  color: "#63B995",
  link: "link"
};

export const k_swift_tag: string = "swift";
projectTags[k_swift_tag] = {
  name: "swift",
  color: "#757761",
  link: "link"
};

export const k_firestore_tag: string = "firestore";
projectTags[k_firestore_tag] = {
  name: "cloud firestore",
  color: "#423E28",
  link: "link"
};

export const k_firebase_storage_tag: string = "firebasestorage";
projectTags[k_firebase_storage_tag] = {
  name: "firebase storage",
  color: "red",
  link: "link"
};

export const k_babel_tag: string = "babel";
projectTags[k_babel_tag] = {
  name: "babel",
  color: "#748067",
  link: "link"
};

export const k_threejs_tag: string = "threejs";
projectTags[k_threejs_tag] = {
  name: "three.js",
  color: "#7A306C",
  link: "link"
};

export const k_html_tag: string = "html";
projectTags[k_html_tag] = {
  name: "html",
  color: "#de1a1a",
  link: "link"
};

export const k_css_tag: string = "css";
projectTags[k_css_tag] = {
  name: "css",
  color: "#D78521",
  link: "link"
};

export const k_sass_tag: string = "sass";
projectTags[k_sass_tag] = {
  name: "sass",
  color: "red",
  link: "link"
};

export const k_js_tag: string = "javascript";
projectTags[k_js_tag] = {
  name: "javascript",
  color: "#A1869E",
  link: "link"
};

export const k_ts_tag: string = "typescript";
projectTags[k_ts_tag] = {
  name: "typescript",
  color: "red",
  link: "link"
};

export const k_nodejs_tag: string = "nodejs";
projectTags[k_nodejs_tag] = {
  name: "node.js",
  color: "#0B1D51",
  link: "link"
};

export const k_socketio_tag: string = "socketio";
projectTags[k_socketio_tag] = {
  name: "socket.io",
  color: "#0FA3B1",
  link: "link"
};

export const k_p5_tag: string = "p5";
projectTags[k_p5_tag] = {
  name: "p5.js",
  color: "red",
  link: "link"
};

export const k_java_tag: string = "java";
projectTags[k_java_tag] = {
  name: "java",
  color: "red",
  link: "link"
};

export const k_python_tag: string = "python";
projectTags[k_python_tag] = {
  name: "python",
  color: "red",
  link: "link"
};

export const k_cpp_tag: string = "cpp";
projectTags[k_cpp_tag] = {
  name: "c++",
  color: "red",
  link: "link"
};

export const k_raspberrypi_tag: string = "raspberrypi";
projectTags[k_raspberrypi_tag] = {
  name: "raspberrypi",
  color: "red",
  link: "link"
};

export const k_arduino_tag: string = "arduino";
projectTags[k_arduino_tag] = {
  name: "arduino",
  color: "red",
  link: "link"
};

export const k_graphql_tag: string = "graphql";
projectTags[k_graphql_tag] = {
  name: "GraphQL",
  color: "red",
  link: "link"
};

export const k_mongodb_tag: string = "mongodb";
projectTags[k_mongodb_tag] = {
  name: "MongoDB",
  color: "red",
  link: "link"
};

export const k_dynamodb_tag: string = "dynamodb";
projectTags[k_dynamodb_tag] = {
  name: "Amazon DynamoDB",
  color: "red",
  link: "link"
};

export const k_iothub_tag: string = "iothub";
projectTags[k_iothub_tag] = {
  name: "Azure IoT Hub",
  color: "red",
  link: "link"
};

export const k_azure_custom_vision_tag: string = "azurecustomvision";
projectTags[k_azure_custom_vision_tag] = {
  name: "Azure Custom Vision",
  color: "red",
  link: "link"
};

export const k_flask_tag: string = "flask";
projectTags[k_flask_tag] = {
  name: "flask",
  color: "red",
  link: "link"
};

export const k_spring_boot_tag: string = "springboot";
projectTags[k_spring_boot_tag] = {
  name: "spring boot",
  color: "red",
  link: "link"
};

export const k_go_tag: string = "go";
projectTags[k_go_tag] = {
  name: "go",
  color: "red",
  link: "link"
};

export const k_react_tag: string = "react";
projectTags[k_react_tag] = {
  name: "react",
  color: "red",
  link: "link"
};

export const k_angular_tag: string = "angular";
projectTags[k_angular_tag] = {
  name: "AngularJS",
  color: "red",
  link: "link"
};

export const k_react_native_tag: string = "reactnative";
projectTags[k_react_native_tag] = {
  name: "react native",
  color: "red",
  link: "link"
};

export const k_nginx_tag: string = "nginx";
projectTags[k_nginx_tag] = {
  name: "nginx",
  color: "red",
  link: "link"
};

export default projectTags;