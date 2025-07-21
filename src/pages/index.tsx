import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import AnimatedSection from '@/components/AnimatedSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />

      <main className="pt-20">
        <AnimatedSection>
          <Experience />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Projects />
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <Skills />
        </AnimatedSection>

        <AnimatedSection delay={0.6}>
          <Contact />
        </AnimatedSection>
      </main>

      <footer className="py-6 text-center text-gray-600 dark:text-gray-400">
        <div className="container mx-auto px-4">
          <p>Built with Next.js, TypeScript, and Tailwind CSS</p>
          <p className="mt-2 text-sm">
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