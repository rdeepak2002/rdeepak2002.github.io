interface IProjectTag {
    name: string;
    color: string;
    link: string;
}

interface IProjectTags {
    [key: string]: IProjectTag;
}

const projectTags: IProjectTags = {};

export const k_ios_tag: string = "ios";
projectTags[k_ios_tag] = {
    name: "ios",
    color: "#51bbfe",
    link: "https://www.apple.com/ios/"
};

export const k_android_tag: string = "android";
projectTags[k_android_tag] = {
    name: "android",
    color: "#15B097",
    link: "https://www.android.com/"
};

export const k_arkit_tag: string = "ARKit";
projectTags[k_arkit_tag] = {
    name: "arkit",
    color: "#63B995",
    link: "https://developer.apple.com/augmented-reality/"
};

export const k_swift_tag: string = "swift";
projectTags[k_swift_tag] = {
    name: "swift",
    color: "#757761",
    link: "https://developer.apple.com/swift/"
};

export const k_firestore_tag: string = "firestore";
projectTags[k_firestore_tag] = {
    name: "cloud firestore",
    color: "#423E28",
    link: "https://firebase.google.com/docs/firestore"
};

export const k_ibm_watson_tag: string = "ibmwatson";
projectTags[k_ibm_watson_tag] = {
    name: "ibm watson",
    color: "#48A9A6",
    link: "https://www.ibm.com/watson"
};

export const k_flutter_tag: string = "flutter";
projectTags[k_flutter_tag] = {
    name: "flutter",
    color: "#480355",
    link: "https://flutter.dev/"
};

export const k_dart_tag: string = "dart";
projectTags[k_dart_tag] = {
    name: "dart",
    color: "#22AED1",
    link: "https://dart.dev/"
};

export const k_nlp_tag: string = "nlp";
projectTags[k_nlp_tag] = {
    name: "nlp",
    color: "#9448BC",
    link: "https://www.ibm.com/cloud/learn/natural-language-processing"
};

export const k_redis_tag: string = "redis";
projectTags[k_redis_tag] = {
    name: "redis",
    color: "#FA493C",
    link: "https://redis.io/"
};

export const k_firebase_storage_tag: string = "firebasestorage";
projectTags[k_firebase_storage_tag] = {
    name: "firebase storage",
    color: "#C1666B",
    link: "https://firebase.google.com/docs/storage"
};

export const k_babel_tag: string = "babel";
projectTags[k_babel_tag] = {
    name: "babel",
    color: "#748067",
    link: "https://babeljs.io/"
};

export const k_threejs_tag: string = "threejs";
projectTags[k_threejs_tag] = {
    name: "three.js",
    color: "#7A306C",
    link: "https://threejs.org/"
};

export const k_html_tag: string = "html";
projectTags[k_html_tag] = {
    name: "html",
    color: "#de1a1a",
    link: "https://html.spec.whatwg.org/"
};

export const k_css_tag: string = "css";
projectTags[k_css_tag] = {
    name: "css",
    color: "#D78521",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
};

export const k_sass_tag: string = "sass";
projectTags[k_sass_tag] = {
    name: "sass",
    color: "#645986",
    link: "https://sass-lang.com/"
};

export const k_google_maps: string = "googlemaps";
projectTags[k_google_maps] = {
    name: "google maps",
    color: "#EB6424",
    link: "https://www.google.com/maps"
};

export const k_ghpages_tag: string = "ghpages";
projectTags[k_ghpages_tag] = {
    name: "github pages",
    color: "#7C6A0A",
    link: "https://pages.github.com/"
};

export const k_js_tag: string = "javascript";
projectTags[k_js_tag] = {
    name: "javascript",
    color: "#A1869E",
    link: "https://www.javascript.com/"
};

export const k_ts_tag: string = "typescript";
projectTags[k_ts_tag] = {
    name: "typescript",
    color: "#68B0AB",
    link: "https://www.typescriptlang.org/"
};

export const k_heroku_tag: string = "heroku";
projectTags[k_heroku_tag] = {
    name: "heroku",
    color: "#430098",
    link: "https://www.heroku.com/about"
};

export const k_lua_tag: string = "lua";
projectTags[k_lua_tag] = {
    name: "lua",
    color: "#CB48B7",
    link: "https://www.lua.org/"
};

export const k_blender_tag: string = "blender";
projectTags[k_blender_tag] = {
    name: "blender",
    color: "#FFA500",
    link: "https://www.blender.org/"
};

export const k_nodejs_tag: string = "nodejs";
projectTags[k_nodejs_tag] = {
    name: "node.js",
    color: "#0B1D51",
    link: "https://nodejs.org/en/"
};

export const k_socketio_tag: string = "socketio";
projectTags[k_socketio_tag] = {
    name: "socket.io",
    color: "#0FA3B1",
    link: "https://socket.io/"
};

export const k_p5_tag: string = "p5";
projectTags[k_p5_tag] = {
    name: "p5.js",
    color: "#FF37A6",
    link: "https://p5js.org/"
};

export const k_java_tag: string = "java";
projectTags[k_java_tag] = {
    name: "java",
    color: "#748386",
    link: "https://www.java.com/en/"
};

export const k_howler_tag: string = "howler";
projectTags[k_howler_tag] = {
    name: "howler.js",
    color: "#694F5D",
    link: "https://howlerjs.com/"
};

export const k_python_tag: string = "python";
projectTags[k_python_tag] = {
    name: "python",
    color: "#68A691",
    link: "https://www.python.org/"
};

export const k_cpp_tag: string = "cpp";
projectTags[k_cpp_tag] = {
    name: "c++",
    color: "#357DED",
    link: "https://www.cplusplus.com/"
};

export const k_ar_tag: string = "ar";
projectTags[k_ar_tag] = {
    name: "ar",
    color: "#A41623",
    link: "https://en.wikipedia.org/wiki/Augmented_reality"
};

export const k_raspberrypi_tag: string = "raspberrypi";
projectTags[k_raspberrypi_tag] = {
    name: "raspberrypi",
    color: "#B287A3",
    link: "https://www.raspberrypi.org/"
};

export const k_arduino_tag: string = "arduino";
projectTags[k_arduino_tag] = {
    name: "arduino",
    color: "#482728",
    link: "https://www.arduino.cc/"
};

export const k_graphql_tag: string = "graphql";
projectTags[k_graphql_tag] = {
    name: "graphql",
    color: "#657ED4",
    link: "https://graphql.org/"
};

export const k_mongodb_tag: string = "mongodb";
projectTags[k_mongodb_tag] = {
    name: "mongodb",
    color: "#809848",
    link: "https://www.mongodb.com/"
};

export const k_amazon_dynamodb_tag: string = "dynamodb";
projectTags[k_amazon_dynamodb_tag] = {
    name: "dynamodb",
    color: "#58BC82",
    link: "https://aws.amazon.com/dynamodb/"
};

export const k_azure_iot_hub: string = "iothub";
projectTags[k_azure_iot_hub] = {
    name: "azure iot hub",
    color: "#CB9173",
    link: "https://azure.microsoft.com/en-us/services/iot-hub/"
};

export const k_azure_custom_vision_tag: string = "azurecustomvision";
projectTags[k_azure_custom_vision_tag] = {
    name: "azure custom vision",
    color: "#80A1D4",
    link: "https://azure.microsoft.com/en-us/services/cognitive-services/custom-vision-service/"
};

export const k_flask_tag: string = "flask";
projectTags[k_flask_tag] = {
    name: "flask",
    color: "#43B929",
    link: "https://flask.palletsprojects.com/en/2.0.x/"
};

export const k_spring_boot_tag: string = "springboot";
projectTags[k_spring_boot_tag] = {
    name: "spring boot",
    color: "#337357",
    link: "https://spring.io/projects/spring-boot"
};

export const k_go_tag: string = "go";
projectTags[k_go_tag] = {
    name: "go",
    color: "#22AED1",
    link: "https://golang.org/"
};

export const k_react_tag: string = "react";
projectTags[k_react_tag] = {
    name: "react",
    color: "#4E8098",
    link: "https://reactjs.org/"
};

export const k_redux_tag: string = "redux";
projectTags[k_redux_tag] = {
    name: "redux",
    color: "#59546C",
    link: "https://redux.js.org/"
};


export const k_napi_tag: string = "napi";
projectTags[k_napi_tag] = {
    name: "napi",
    color: "#F45866",
    link: "https://nodejs.org/api/n-api.html"
};

export const k_angular_tag: string = "angular";
projectTags[k_angular_tag] = {
    name: "angularjs",
    color: "#B39C4D",
    link: "https://angularjs.org/"
};

export const k_digital_ocean_tag: string = "digitalocean";
projectTags[k_digital_ocean_tag] = {
    name: "digital ocean",
    color: "#3D405B",
    link: "https://www.digitalocean.com/"
};

export const k_react_native_tag: string = "reactnative";
projectTags[k_react_native_tag] = {
    name: "react native",
    color: "#63A375",
    link: "https://reactnative.dev/"
};

export const k_nginx_tag: string = "nginx";
projectTags[k_nginx_tag] = {
    name: "nginx",
    color: "#26547C",
    link: "https://www.nginx.com/"
};

export const k_jenkins_tag: string = "jenkins";
projectTags[k_jenkins_tag] = {
    name: "jenkins",
    color: "#EF476F",
    link: "https://www.jenkins.io/"
};

export default projectTags;
