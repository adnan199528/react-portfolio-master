import myPic from "./assets/adnan.jpg";
import fitnessImg from "./assets/images/fitnessImg.jpg";
import portfolioImg from "./assets/images/portfolioImg.jpg";
import ExpoTodoAppImg from "./assets/images/ExpoTodoAppImg.jpg";
import OpenWeatherAppImg from "./assets/images/OpenWeatherAppImg.jpg";

const logotext = "ADNAN SYED";
const meta = {
    title: "Adnan Syed",
    description: "I’m Adnan Syed — a Full/MERN Stack Developer, freelancing and building projects.",
};

const introdata = {
    title: "I’m Adnan Syed",
    animated: {
        first: "Full / MERN Stack Developer",
        second: "Freelancer on Fiverr & Upwork & Linkedin",
        third: "UI / UX Enthusiast",
    },
    description:
        "I am a passionate computer programming student with hands-on experience in responsive web apps, working with databases and improving user experiences.",
    your_img_url: myPic,
};

const dataabout = {
    title: "A bit about myself",
    aboutme:
        "I completed my Computer Programming course at Aptech with excellent grades and since then, I’ve been actively freelancing on Fiverr and Upwork. I enjoy building both frontend and backend apps, learning new technologies, and improving my skills in React, Node.js, and MongoDB.",
};

const worktimeline = [
    {
        jobtitle: "MERN Stack Developer",
        where: "Fiverr & Upwork & LinkedIn",
        date: "2023 - Present",
    },
    {
        jobtitle: "Programming Student",
        where: "Aptech Computer Education",
        date: "Completed with distinction",
    },
];

const skills = [
    { name: "React/React.js Native", value: 79 },
    { name: "Node.js/Express.js", value: 75 },
    { name: "MongoDB/Firebase/SQL Server/MySQL Server", value: 78 },
    { name: "JavaScript", value: 65 },
    { name: "HTML/CSS/TailWind CSS/Bootstrap", value: 70 },
    { name: "Asp.net/Angular/Laravel/Php/Flutter", value: 68 },
    { name: "Ms Office/Adobe Ps/Adobe Illustrator", value: 60 },
];

const services = [
    {
        title: "Web Development",
        description:
            "Building responsive, modern websites using React, Node.js, and MongoDB.",
    },
    {
        title: "UI/UX Design (basic)",
        description:
            "Designing clean and user-friendly interfaces with attention to detail.",
    },
    {
        title: "Freelance Projects",
        description:
            "Delivering quality work and collaborating with clients on Fiverr & Upwork.",
    },
];

const dataportfolio = [
    {
        img: fitnessImg,
        description:
            "A Fitness Tracker app built with the MERN stack to track workouts, diet, and progress — includes authentication, charts, and responsive design.",
        link: "https://fitnesstrack12.netlify.app/login", // Replace with real deployed link
    },
    {
        img: portfolioImg,
        description:
           "A sleek MERN Stack portfolio showcasing skills, projects, and modern UI design" ,
        link: "https://adnanportfoliomain.netlify.app/", // Replace with real deployed link
    },
      {
        img: ExpoTodoAppImg,
        description:
            "This is My React Native App",
        link: "https://expotodoapp.netlify.app/", // Replace with real deployed link
    },
    {
        img: OpenWeatherAppImg,
        description:
            "This is My Open Weather App",
        link: "https://openweatherapp2.netlify.app/", // Replace with real deployed link
    },
];

const contactConfig = {
    YOUR_EMAIL: "Syedorten95@gmail.com",
    YOUR_PHONE: "+92 3340604650",
    description:
        "I’d love to hear from you. Please fill out the form and I’ll reply as soon as possible! Feel free to reach out for collaborations, freelance projects, or job opportunities.",
    YOUR_SERVICE_ID: "service_jx9h5tq", // from EmailJS
    YOUR_TEMPLATE_ID: "template_1uv824k", // from EmailJS
    YOUR_USER_ID: "P5JxexiyC0_2DB9t9", // from EmailJS
};

const socialprofils = {
    github: "https://github.com/adnan199528",
    facebook: "https://www.facebook.com/billy.tio.94",
    linkedin: "https://www.linkedin.com/in/adnan-syed-390465413",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
