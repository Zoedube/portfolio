import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    git,
    github,
    html,
    javascript,
    linkedin,
    nextjs,
    pricewise,
    react,
    redux,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "Self Taught",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "2024 - present",
        points: [
            "Developed and maintained web applications using React.js and other related technologies for personal projects.",
      "Collaborated with online communities and peers, incorporating feedback to improve the quality of projects.",
      "Implemented responsive design techniques to ensure compatibility across different devices and browsers.",
      "Actively participated in online code reviews and communities to receive feedback and improve code quality.",
        ],
    },
    {
        title: "React Three Fiber & Three.js Developer (Personal Projects)",
    company_name: "Self-Taught",
    icon: tesla, 
    iconBg: "#fbc3bc",
    date: "2024 - present",
    points: [
      "Explored 3D graphics and animations using Three.js and React Three Fiber to create immersive experiences in the browser.",
      "Developed interactive 3D scenes, including models, lighting, and animations, enhancing the user experience.",
      "Optimized performance of WebGL-based applications to ensure smooth rendering on various devices.",
      "Consistently researched new techniques and tools to push the boundaries of web-based 3D applications.",
        ],
    },
    {
        title: "Tailwind CSS Developer (Personal Projects)",
    company_name: "Self-Taught",
    icon: shopify,
    iconBg: "#b7e4c7",
    date: "2024 - present",
    points: [
      "Designed and implemented responsive web layouts using Tailwind CSS for various personal projects.",
      "Focused on building highly customizable, reusable UI components while adhering to modern web design trends.",
      "Improved workflow efficiency by leveraging Tailwind’s utility-first CSS framework for rapid prototyping.",
      "Collaborated with online developer communities to share insights and gather feedback on Tailwind CSS best practices."
        ],
    },
    {
        title: "JavaScript Developer (Personal Learning Projects)",
    company_name: "Self-Taught",
    icon: meta,
    iconBg: "#a2d2ff",
    date: "2024 - present",
    points: [
      "Gained extensive experience in JavaScript for DOM manipulation, asynchronous programming, and creating interactive web pages.",
      "Built dynamic, feature-rich web applications utilizing JavaScript ES6+ features.",
      "Used JavaScript frameworks like React.js to build interactive single-page applications (SPAs).",
      "Regularly updated knowledge on modern JavaScript trends and best practices through self-learning and community engagement.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Éclair Delights',
        description: 'Developed a fully responsive bakery web application that showcases the products of the bakery, opening hours, and menu prices. The application includes a history section, about page, and offers a seamless user experience for customers. Built with React.js, this app helps enhance the bakery’s online presence and customer engagement.',
        link: 'https://github.com/Zoedube/eclair-delights.git',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'E-Commerce Store (Bootcamp Collaboration)',
        description: 'Collaborated with a team during a bootcamp to develop a fully functional e-commerce web application. The goal was to replicate a design provided via Figma and implement it using React.js. This project focused on ensuring pixel-perfect alignment with the provided design while delivering a smooth and responsive user experience.',
        link: 'https://github.com/MphoVersace/ecommerce-store.git',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: '3D Shopping Cart',
        description: 'Developed a unique 3D shopping cart web application using the 3D UI/UX design tool Spline, alongside HTML, CSS, and JavaScript. The project combines immersive 3D visuals with a fully functional shopping cart interface, offering users an interactive shopping experience.',
        link: 'https://github.com/Zoedube/shoppingCart.git',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Melsoft Website Clone',
        description: 'Developed a complete clone of the Melsoft website as part of a bootcamp project, utilizing a Bootstrap template to achieve a responsive and modern design. This project provided hands-on experience with front-end development and helped reinforce my understanding of Bootstraps grid system and components.',
        link: 'https://github.com/Zoedube/Melsoft-Website.git',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Chefs Kiss',
        description: 'Developed a beautifully designed website dedicated to Korean cuisine, showcasing a variety of traditional recipes and culinary tips. This project highlights my ability to create engaging content and a visually appealing user experience.',
        link: 'https://github.com/Zoedube/recipewebsite.git',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'The Petal Palace',
        description: 'Collaborated with another developer to create The Petal Palace, a visually stunning website dedicated to showcasing a variety of flowers and floral arrangements. This project focuses on providing users with an engaging and informative experience while exploring the world of flowers.',
        link: 'https://github.com/Zoedube/The-Petal-PalaceWebsite.git',
    }
];