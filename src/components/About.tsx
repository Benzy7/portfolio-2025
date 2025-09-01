import { FiCode, FiTrendingUp, FiUsers, FiTarget } from 'react-icons/fi';

export default function About() {
    return (
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
                    
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                                I'm a passionate Full Stack Developer with over 3 years of experience crafting digital solutions 
                                that make a real impact. My journey in tech started with curiosity and has evolved into a 
                                commitment to building software that's not just functional, but exceptional.
                            </p>
                            
                            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                                I thrive in startup environments where I can wear multiple hats and contribute across the 
                                entire stack. My approach combines technical expertise with a deep understanding of business 
                                needs, ensuring that every line of code serves a purpose.
                            </p>
                            
                            <p className="text-lg text-gray-700 dark:text-gray-300">
                                Currently, I'm deeply exploring AI/ML integration in web applications, experimenting with 
                                cutting-edge technologies, and staying up-to-date with the latest developments in the tech world. 
                                When I'm not coding, you'll find me exploring new technologies, reading tech blogs, or working on personal projects.
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
                                <FiCode className="text-blue-600 mb-4" size={32} />
                                <h3 className="text-xl font-bold mb-2">Problem Solver</h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    I approach challenges systematically, breaking down complex problems into manageable solutions.
                                </p>
                            </div>
                            
                            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
                                <FiTrendingUp className="text-blue-600 mb-4" size={32} />
                                <h3 className="text-xl font-bold mb-2">Performance Focused</h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    I optimize for speed and scalability, ensuring applications can grow with your business.
                                </p>
                            </div>
                            
                            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
                                <FiUsers className="text-blue-600 mb-4" size={32} />
                                <h3 className="text-xl font-bold mb-2">Team Player</h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    I collaborate effectively with designers, product managers, and stakeholders to deliver results.
                                </p>
                            </div>
                            
                            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
                                <FiTarget className="text-blue-600 mb-4" size={32} />
                                <h3 className="text-xl font-bold mb-2">Goal Oriented</h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    I focus on delivering value and meeting business objectives with every project.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
