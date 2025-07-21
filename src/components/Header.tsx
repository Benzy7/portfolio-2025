import { useState, useEffect } from 'react';
import { FiMoon, FiSun, FiMenu, FiX } from 'react-icons/fi';
import useThemeSwitch from '@/hooks/useThemeSwitch';
import { useRouter } from 'next/router';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { mounted, resolvedTheme, toggleTheme } = useThemeSwitch();
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' }
    ];

    const handleNavClick = (href: string) => {
        setIsMenuOpen(false);
        router.push(href);
    };

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled
                ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md py-3 shadow-sm'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                <a
                    href="#home"
                    className="text-2xl font-bold font-mono tracking-tight hover:text-blue-600 transition-colors"
                    onClick={(e) => {
                        e.preventDefault();
                        handleNavClick('#home');
                    }}
                >
                    benzy<span className="text-blue-600">.cc</span>
                </a>
                <nav className="hidden md:flex items-center space-x-8">
                    <ul className="flex space-x-6">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    className="font-medium hover:text-blue-600 transition-colors"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick(item.href);
                                    }}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* {mounted && (
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                            aria-label="Toggle theme"
                        >
                            {resolvedTheme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
                        </button>
                    )} */}
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center space-x-4">
                    {mounted && (
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
                            aria-label="Toggle theme"
                        >
                            {resolvedTheme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
                        </button>
                    )}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <nav className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
                    <ul className="py-4">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    className="block py-3 px-6 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick(item.href);
                                        setIsMenuOpen(false);
                                    }}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
}