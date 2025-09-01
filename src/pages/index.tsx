import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import AnimatedSection from '@/components/AnimatedSection';
import ScrollToTop from '@/components/ScrollToTop';
import Stats from '@/components/Stats';
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />

      <main className="pt-20">
        <AnimatedSection>
          <About />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Experience />
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <Projects />
        </AnimatedSection>

        <AnimatedSection delay={0.6}>
          <Skills />
        </AnimatedSection>

        <Stats />

        <AnimatedSection delay={0.8}>
          <Contact />
        </AnimatedSection>
      </main>

      <ScrollToTop />

      <footer className="py-6 text-center text-gray-600 dark:text-gray-400">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center space-x-4 mb-4">
            <p>Built with Next.js, TypeScript, and Tailwind CSS</p>
            <ThemeToggle />
          </div>
          <p className="text-sm">
            <a
              href="/api/status"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              /api/status
            </a>
          </p>
          <p className="mt-2">&copy; {new Date().getFullYear()} Khoubaib Benzayed. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}