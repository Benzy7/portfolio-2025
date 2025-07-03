import { FiMail, FiLinkedin, FiGithub, FiPhone } from 'react-icons/fi';

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
                    <p className="text-xl mb-10 text-gray-700 dark:text-gray-300">
                        Interested in working together? I'm available for freelance projects.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow md:col-span-2">
                            <FiMail className="text-blue-600 mx-auto mb-4" size={32} />
                            <h3 className="text-xl font-bold mb-2">Email</h3>
                            <a href="mailto:khoubaib.bnz@gmail.com" className="text-blue-600 hover:underline">
                                khoubaib.bnz@gmail.com
                            </a>
                        </div>

                        {/* <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
                            <FiPhone className="text-blue-600 mx-auto mb-4" size={32} />
                            <h3 className="text-xl font-bold mb-2">Phone</h3>
                            <a href="tel:+21627113063" className="text-blue-600 hover:underline">
                                +216 27 113 063
                            </a>
                        </div> */}
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 mb-10">
                        <a
                            href="https://linkedin.com/in/khoubaibz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                        >
                            <FiLinkedin className="mr-2" /> LinkedIn
                        </a>
                        <a
                            href="https://github.com/Benzy7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                        >
                            <FiGithub className="mr-2" /> GitHub
                        </a>
                        <a
                            href="https://www.upwork.com/freelancers/~017674e090e24231de"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center border border-gray-300 dark:border-gray-700 hover:border-blue-600 px-6 py-3 rounded-lg font-medium transition-colors"
                        >
                            Hire on Upwork
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}