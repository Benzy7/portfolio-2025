import { skills } from '@/data/skills';

export default function Skills() {
    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {skills.map((category, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                            <h3 className="text-xl font-bold mb-4 text-blue-600">{category.name}</h3>
                            <ul className="space-y-2">
                                {category.skills.map((skill, i) => (
                                    <li key={i} className="flex items-center">
                                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}