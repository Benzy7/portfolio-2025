import { FiMail, FiLinkedin, FiGithub, FiPhone } from 'react-icons/fi';
import ContactForm from './ContactForm';

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
                        <p className="text-xl text-gray-700 dark:text-gray-300">
                            Interested in working together? I'm available for freelance projects and full-time opportunities.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 items-start mb-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                            
                            <div className="space-y-4">
                                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                                    <div className="flex items-center">
                                        <FiMail className="text-blue-600 mr-4" size={24} />
                                        <div>
                                            <h4 className="text-lg font-bold mb-1">Email</h4>
                                            <a href="mailto:khoubaib.bnz@gmail.com" className="text-blue-600 hover:underline">
                                                khoubaib.bnz@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                                    <div className="flex items-center">
                                        <FiLinkedin className="text-blue-600 mr-4" size={24} />
                                        <div>
                                            <h4 className="text-lg font-bold mb-1">LinkedIn</h4>
                                            <a 
                                                href="https://linkedin.com/in/khoubaibz" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:underline"
                                            >
                                                Connect on LinkedIn
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                                    <div className="flex items-center">
                                        <FiGithub className="text-blue-600 mr-4" size={24} />
                                        <div>
                                            <h4 className="text-lg font-bold mb-1">GitHub</h4>
                                            <a 
                                                href="https://github.com/Benzy7" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:underline"
                                            >
                                                View my code
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <ContactForm />
                        </div>
                    </div>

                    <div className="text-center pt-8 border-t border-gray-200 dark:border-gray-700">
                        <h3 className="text-xl font-bold mb-4">Ready to Work Together?</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            I'm available for freelance projects and full-time opportunities.
                        </p>
                        <a
                            href="https://www.upwork.com/freelancers/~017674e090e24231de"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/20"
                        >
                            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                            Hire on Upwork
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}