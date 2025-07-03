export interface SkillCategory {
    name: string;
    skills: string[];
}

export const skills: SkillCategory[] = [
    {
        name: "Programming Languages",
        skills: ["Python", "JavaScript", "TypeScript", "PHP", "C/C++", "C#"]
    },
    {
        name: "Frontend",
        skills: ["Angular", "Vue.js", "React", "Next.js"]
    },
    {
        name: "Backend",
        skills: ["Django", "Flask", "FastAPI", "Node.js", "Express", "NestJS", "Symfony",]
    },
    {
        name: "Databases",
        skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"]
    },
    {
        name: "DevOps & Cloud",
        skills: ["Docker", "AWS", "CI/CD", "Nginx", "Linux", "RabbitMQ", "Cloudflare"]
    }
];