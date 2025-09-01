import { FiCode, FiUsers, FiAward, FiClock } from 'react-icons/fi';

export default function Stats() {
    const stats = [
        {
            icon: FiCode,
            number: "3+",
            label: "Years Experience",
            description: "Building scalable applications"
        },
        {
            icon: FiUsers,
            number: "10+",
            label: "Projects Completed",
            description: "Across various technologies"
        },
        {
            icon: FiAward,
            number: "100%",
            label: "Client Satisfaction",
            description: "Delivering quality solutions"
        },
        {
            icon: FiClock,
            number: "24/7",
            label: "Availability",
            description: "For urgent projects"
        }
    ];

    return (
        <section className="py-16 bg-blue-600 text-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="flex justify-center mb-4">
                                <stat.icon size={40} className="text-blue-200" />
                            </div>
                            <div className="text-3xl md:text-4xl font-bold mb-2">
                                {stat.number}
                            </div>
                            <div className="text-lg font-semibold mb-1">
                                {stat.label}
                            </div>
                            <div className="text-blue-200 text-sm">
                                {stat.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
