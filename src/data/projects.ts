export interface Project {
    title: string;
    description: string;
    tech: string[];
    github?: string;
    demo?: string;
    backendFocus?: boolean;
}
export const projects: Project[] = [
    {
        title: "Car Rental Application",
        description: "A full-featured personal project for managing car rentals with booking, availability, and admin features.",
        tech: ["Django", "Django REST Framework", "PostgreSQL", "AWS S3", "Docker"],
        backendFocus: true,
        github: "https://github.com/Benzy7/car-rental-backend",
    },
    {
        title: "URL Shortener Service",
        description: "Developed a lightweight URL shortener demonstrating practical use of React and Node.js with easy-to-use interface.",
        tech: ["Node.js", "Express", "MongoDB", "React"],
        github: "https://github.com/Benzy7/url-shortener",
        demo: "https://short-url.benzy.cc",
    },
    {
        title: "Driver Delivery App (Intigo)",
        description: "Mobile-first web platform enabling drivers to manage deliveries, pickups, routes, and real-time status updates. Built as part of Intigo’s logistics suite.",
        tech: ["Angular", "Node.js", "Express", "MongoDB", "RabbitMQ", "React"],
    },
    {
        title: "Queue Management Application (XtendPLex)",
        description: "Kiosk-based system for managing queues in healthcare environments with real-time updates, HL7 integration, and MQTT messaging.",
        tech: ["Angular", "Django", "PostgreSQL", "WebSockets", "AWS", "HL7", "MQTT", "Cloudflare", "Docker", "Keycloack"],
    },
    {
        title: "E-commerce Management Platform (TikTak PRO)",
        description: "Developed a robust e-commerce management platform similar to Shopify, with features like order tracking, inventory management, and secure payment integration.",
        tech: ["Angular", "Django", "Celery", "VueJs", "PostgreSQL", "Symfony"],
    },
    {
        title: "Collaborative Blog Platform (MEAN Stack)",
        description: "Collaborative blogging platform with real-time features, microservice architecture, role-based permissions, and nested commenting.",
        tech: ["Angular", "Node.js", "Express", "MongoDB", "JWT", "RxJS", "Socket.IO", "Redis", "Microservices"],
        github: "https://github.com/Benzy7/blog",
    }
];
