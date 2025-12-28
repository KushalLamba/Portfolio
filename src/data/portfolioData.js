// Portfolio Data for Kushal Yadav
// All portfolio content centralized here for easy updates

export const personalInfo = {
    name: "Kushal Yadav",
    title: "Full-Stack MERN Developer",
    email: "22raokushalyadav99@gmail.com",
    phone: "+91 7206966260",
    location: "Patiala, Punjab, India",
    tagline: "Building scalable web applications with modern technologies",
    description: "I'm a passionate Computer Science student at Thapar Institute of Engineering and Technology, specializing in the MERN stack. With hands-on experience in building full-stack applications and a strong foundation in Data Structures & Algorithms, I'm eager to contribute to innovative software solutions.",
    resumeUrl: "#", // Update with actual resume link
    avatarInitial: "K"
};

export const socialLinks = {
    github: "https://github.com/KushalLamba",
    linkedin: "https://www.linkedin.com/in/lambakushal/",
    leetcode: "https://leetcode.com/u/22raokushalyadav99/",
    code360: "https://www.naukri.com/code360/profile/60b58af2-d43d-4b9b-843a-bcf6a52479dd"
};

export const education = {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Thapar Institute of Engineering and Technology",
    location: "Patiala, Punjab",
    duration: "2022 - 2026 (Expected)",
    gpa: "8.56/10",
    highlights: [
        "Strong foundation in Data Structures & Algorithms",
        "Specialized in Full-Stack Web Development",
        "Active participant in coding competitions"
    ]
};

export const skills = [
    {
        category: "Frontend",
        icon: "FaReact",
        items: [
            { name: "React.js", icon: "FaReact" },
            { name: "JavaScript", icon: "SiJavascript" },
            { name: "HTML5", icon: "FaHtml5" },
            { name: "CSS3", icon: "FaCss3Alt" },
            { name: "Tailwind CSS", icon: "SiTailwindcss" },
            { name: "Redux", icon: "SiRedux" }
        ]
    },
    {
        category: "Backend",
        icon: "FaNodeJs",
        items: [
            { name: "Node.js", icon: "FaNodeJs" },
            { name: "Express.js", icon: "SiExpress" },
            { name: "MongoDB", icon: "SiMongodb" },
            { name: "MySQL", icon: "SiMysql" },
            { name: "REST APIs", icon: "FaServer" },
            { name: "JWT Auth", icon: "SiJsonwebtokens" }
        ]
    },
    {
        category: "Tools & Others",
        icon: "FaTools",
        items: [
            { name: "Git", icon: "FaGitAlt" },
            { name: "GitHub", icon: "FaGithub" },
            { name: "VS Code", icon: "SiVisualstudiocode" },
            { name: "Postman", icon: "SiPostman" },
            { name: "Linux", icon: "FaLinux" },
            { name: "Vite", icon: "SiVite" }
        ]
    },
    {
        category: "Programming",
        icon: "FaCode",
        items: [
            { name: "C++", icon: "SiCplusplus" },
            { name: "JavaScript", icon: "SiJavascript" },
            { name: "Python", icon: "FaPython" },
            { name: "DSA", icon: "FaProjectDiagram" },
            { name: "Problem Solving", icon: "FaBrain" }
        ]
    }
];

export const experience = [
    {
        role: "Software Developer",
        company: "Bluestock Fintech",
        location: "Remote",
        duration: "Feb 2025 - Mar 2025",
        type: "Internship",
        description: [
            "Collaborated with the Bluestock Fintech leadership team to support development of internal fintech tools, contributing to a fast-paced startup environment",
            "Assisted in building and improving software features focused on enhancing user experience and product reliability, gaining hands-on exposure to real-world development workflows",
            "Worked closely with team members during remote sprints, participating in requirement discussions, debugging sessions, and iterative feature improvements"
        ],
        technologies: ["React", "Node.js", "MongoDB", "Express.js"]
    }
];

export const projects = [
    {
        title: "StudyNotion - EdTech Platform",
        description: "A full-stack EdTech platform enabling users to create, consume, and rate educational content with seamless user experience, instructor management, and secure payment processing. Achieved 60% faster development cycles compared to traditional frameworks.",
        image: "📚",
        technologies: ["React.js", "Redux", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT", "Razorpay", "Cloudinary"],
        highlights: [
            "99.5% security protection with Bcrypt password hashing",
            "40% faster query performance with Mongoose ODM",
            "99.9% transaction success rate with Razorpay",
            "Role-based access control implementation"
        ],
        liveUrl: "#", // Update with actual link
        githubUrl: "#", // Update with actual link
        featured: true
    },
    {
        title: "Password Manager",
        description: "A secure Password Manager application using React, Vite, Node.js, Express, and MongoDB. Features both frontend-only and full-stack versions for enhanced data management and security.",
        image: "🔐",
        technologies: ["React", "Vite", "Node.js", "Express", "MongoDB"],
        highlights: [
            "Copy/edit/delete passwords functionality",
            "Password visibility toggle",
            "Responsive UI design",
            "Secure data encryption"
        ],
        liveUrl: "#",
        githubUrl: "https://github.com/KushalLamba",
        featured: true
    },
    {
        title: "Project AAHAR",
        description: "A MERN Stack project focused on solving real-world problems. Built with modern web technologies and best practices for scalable application development.",
        image: "🍽️",
        technologies: ["MongoDB", "Express.js", "React", "Node.js", "EJS"],
        highlights: [
            "Full-stack MERN implementation",
            "Clean and scalable architecture",
            "Responsive design"
        ],
        liveUrl: "#",
        githubUrl: "https://github.com/KushalLamba/Project--AAHAR",
        featured: false
    }
];

export const achievements = [
    {
        title: "Code Crusader",
        platform: "Code 360",
        description: "Earned the prestigious Code Crusader badge for consistent problem solving",
        icon: "🏆"
    },
    {
        title: "800+ Problems",
        platform: "LeetCode",
        description: "Solved over 800 algorithmic problems on LeetCode",
        icon: "⚡"
    },
    {
        title: "1300+ Problems",
        platform: "All Platforms",
        description: "Solved 1300+ problems across various coding platforms",
        icon: "💻"
    },
    {
        title: "SQL Badge",
        platform: "LeetCode",
        description: "Earned SQL proficiency badge demonstrating database expertise",
        icon: "🗄️"
    }
];

export const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" }
];

export const typedStrings = [
    "Full-Stack Developer",
    "MERN Specialist",
    "Problem Solver",
    "Tech Enthusiast"
];
