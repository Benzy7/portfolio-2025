import { Experience as Exp } from '@prisma/client';
import { useEffect, useState } from 'react';

export default function Experience() {
    const [experiences, setExperiences] = useState<Exp[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch('/api/experiences')
            .then((res) => {
                if (!res.ok) throw new Error('Failed to fetch experiences');
                return res.json();
            })
            .then((data) => {
                setExperiences(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Failed to load experiences:', err);
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <section id="experience" className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center">Professional Experience</h2>
                    <div className="flex justify-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                    </div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section id="experience" className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center">Professional Experience</h2>
                    <div className="text-center text-red-600">
                        <p>Failed to load experience data. Please try again later.</p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="experience" className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center">Professional Experience</h2>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="border-l-4 border-blue-600 pl-6 relative">
                            <div className="absolute -left-2.5 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>

                            <div className="mb-2">
                                <h3 className="text-xl font-bold">{exp.position} · {exp.company}</h3>
                                <p className="text-gray-600 dark:text-gray-400">{exp.period} | {exp.location}</p>
                            </div>

                            <ul className="list-disc list-inside mb-4">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="mb-2">{item}</li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2">
                                {exp.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}