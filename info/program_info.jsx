import {DiHtml5, DiCss3, DiJavascript1, DiReact, DiRuby, DiPython, DiGit} from 'react-icons/di';

const programs = [
    {
        id: "html-css",
        image: "https://www.techrepublic.com/wp-content/uploads/2022/07/html-css-beginners.jpg",
        icon: <span className='inline-flex'><DiHtml5 className='text-orange-600' /> & <DiCss3 /></span>,
        title: "HTML & CSS",
        description: "Structure and style websites with any layout using HTML and CSS, while learning the basics of responsive design that fits and looks great on all devices."
    },
    {
        id: "javascript",
        icon: <DiJavascript1 />,
        title: "JAVASCRIPT",
        description: "Create interactive websites, games, animations, anything imaginable! With Javascript, you'll be able to make any website dynamic."
    },
    {
        id: "react",
        icon: <DiReact />,
        title: "REACT.JS",
        description: "Speed up development with predefined components and functions using popular framesworks and libraries such as React.js"
    },
    {
        id: "ruby",
        icon: <DiRuby />,
        title: "Ruby",
        description: "Learn the concepts and principles behind building innovative web applications in the Back-end with ease."
    },
    // {
    //     id: "python",
    //     icon: <DiPython />,
    //     title: "Python",
    //     description: "Become a specialist in the essentials of Artificial intelligence and machine learning using python and libraries such as TensorFlow and PyTorch."
    // },
    // {
    //     id: "git",
    //     icon: <DiGit />,
    //     title: "Git",
    //     description: "Collaborate with fellow geeks through Git. A version control system to keep track of your work and encourage open community collaborative work."
    // },
]

export default programs;