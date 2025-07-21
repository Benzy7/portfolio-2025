export interface Experience {
    company: string;
    position: string;
    period: string;
    location: string;
    description: string[];
    skills: string[];
}

export const experiences: Experience[] = [
    {
        company: "Freelance",
        position: "Full Stack Developer",
        period: "Jan 2022 – Present",
        location: "Remote",
        description: [
            "Worked with small businesses to build responsive and scalable web applications tailored to client needs",
            "Delivered custom admin dashboards, e-commerce features, and REST APIs using Django and React",
            "Collaborated with clients on deployment, performance optimization, and maintenance"
        ],
        skills: ["React", "Django", "Node.js", "Tailwind", "PostgreSQL", "Git", "Docker", "AWS"]
    },
    {
        company: "Intigo",
        position: "Full Stack Developer",
        period: "Jun 2024 – Jan 2025",
        location: "Tunis, Tunisia",
        description: [
            "Developed and enhanced a driver-oriented mobile app for deliveries and pickups",
            "Improved administration portal and partner platform",
            "Contributed to financial management system development"
        ],
        skills: ["Angular", "Django", "Node.js", "Express", "React", "MongoDB", "RabbitMQ"]
    },
    {
        company: "XtendPLex",
        position: "Full Stack Developer",
        period: "Jul 2022 – May 2024",
        location: "Ariana, Tunisia",
        description: [
            "Developed kiosk-based queue management application",
            "Implemented HL7 and MQTT protocols for healthcare integration",
            "Used Websockets for real-time communication"
        ],
        skills: ["Angular", "Django", "PostgreSQL", "AWS", "Docker", "HL7", "MQTT"]
    },
    {
        company: "TikTak PRO",
        position: "Full Stack Developer",
        period: "Nov 2021 – Jun 2022",
        location: "Ariana, Tunisia",
        description: [
            "Developed and maintained e-commerce management platform",
            "Implemented order tracking and inventory management",
            "Ensured application performance and security"
        ],
        skills: ["PHP", "Symfony", "Twig", "React.js", "MySQL", "Git"]
    },
    {
        company: "Financial Market Council",
        position: "Web Developer Intern",
        period: "Feb 2021 - May 2021",
        location: "Tunis, Tunisia · Remote",
        description: [
            "Migrated market surveillance application to web platform",
            "Optimized graphic and technical aspects"
        ],
        skills: ["Symfony", "Twig", "React.js", "MySQL", "Git"]
    }
];