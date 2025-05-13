import { useRef } from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import StarField from '../../components/StarField';

const Home: NextPage = () => {
  const skillsSectionRef = useRef<HTMLDivElement>(null);
  const aboutSectionRef = useRef<HTMLDivElement>(null);

  const scrollToSkills = () => {
    skillsSectionRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const scrollToAbout = () => {
    aboutSectionRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <>
      <Head>
        <title>Joel Reiter | Software Engineer</title>
        <meta name="description" content="Professional portfolio of Joel Reiter, Software Engineer" />
      </Head>
      
      <Layout>
        <section className="min-h-screen flex flex-col justify-center items-center bg-navy-900 text-white px-6 py-16 relative">
          <div className="max-w-4xl mx-auto text-center">        
            <StarField />

            <h1 className="text-4xl text-blue-400 md:text-6xl font-bold mb-6 animate-fade-in">
              Joel Reiter
            </h1>
            <h2 className="text-xl md:text-2xl text-navy-200 mb-8 animate-fade-in delay-100">
              Software Engineer
            </h2>
            <p className="text-lg md:text-xl text-navy-300 mb-12 max-w-2xl mx-auto animate-fade-in delay-200">
              I create efficient solutions to complex problems.
            </p>
          </div>

          <div className="absolute bottom-60 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <button 
              onClick={scrollToAbout}
              className="hover:cursor-pointer focus:outline-none mb-4 animate-fade-in delay-1000"
              aria-label="Scroll to about section"
            >
              <svg className="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </section>
        {/* About Section */}
        <section ref={aboutSectionRef} className="min-h-screen flex flex-col justify-between items-center bg-navy-900 text-white px-6 py-16">
            <div className="container mx-auto">
            {/* Hero Section */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-20">
                <div className="lg:w-1/2">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    <span className="text-blue-400">Hi, I'm Joel.</span> Nice to meet you!
                </h1>
                <div className="text-navy-300 text-lg space-y-4">
                    <p>
                    I'm a 24 year old software engineer who loves to find unique solutions to complex problems. I am motivated to bring my skills to the table and work with others to create something amazing. I have a passion for learning new things and am always looking for new challenges to tackle.
                    </p>
                    
                </div>
                </div>
                
                <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg">
                <Image
                    src="/images/headshot.jpg" 
                    alt="Joel Reiter"
                    fill
                    className="object-cover"
                    priority
                />
                </div>
            </div>

            {/* Personal Touch Section */}
            <div className="flex flex-col md:flex-row gap-8">
                <div className="bg-navy-800 rounded-xl p-8 flex-1 shadow-lg hover:transform hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <span className="text-blue-400 mr-3">✈️</span> My Journey
                </h3>
                <p className="text-navy-300">
                    I first started coding in high school, fascinated by how a few lines of text could create something interactive. When I chose Computer Science at Appalachian State, it wasn't just because I enjoyed programming - I saw how computers could solve real-world problems in ways that excited me.
                </p>
                <p className="text-navy-300">
                    That practical problem-solving mindset still drives me today. Whether its building web applications or optimizing backend systems, I love seeing how code translates into tangible solutions.
                </p>
                </div>
                
                <div className="bg-navy-800 rounded-xl p-8 flex-1 shadow-lg hover:transform hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <span className="text-blue-400 mr-3">💡</span> My Philosophy
                </h3>
                <p className="text-navy-300">
                    I believe that technology should be accessible and intuitive. My goal is to create software that not only meets the needs of users but also enhances their experience. I strive to write clean, maintainable code and to always be learning and adapting to new technologies.
                </p>
                <p className="text-navy-300">
                    I value collaboration and communication and enjoy working in teams where ideas can be shared and developed together. I believe that the best solutions can come from multiple diverse perspectives working together.
                </p>
                </div>
            </div>
            </div>
            <div className="flex flex-col items-center">
            <button 
              onClick={scrollToSkills}
              className="animate-bounce hover:cursor-pointer focus:outline-none"
              aria-label="Scroll to skills section"
            >
              <svg className="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
            </div> 
        </section>
        {/* Featured Skills Section */}
        <section ref={skillsSectionRef} className="py-20 bg-navy-800">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-white mb-12">What I Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                {
                title: "Frontend Development",
                description: "Building responsive, accessible web applications with modern frameworks.",
                icon: "💻"
                },
                {
                title: "Backend Development",
                description: "Creating APIs and microservices to power applications.",
                icon: "⚙️"
                },
                {
                title: "Cloud Solutions",
                description: "Leveraging cloud technologies for scalable and efficient solutions.",
                icon: "☁️"
                },
                {
                title: "Data Analysis",
                description: "Transforming data into actionable insights through analysis and visualization.",
                icon: "📊"
                },
                {
                title: "Problem Solving",
                description: "Breaking down complex problems into elegant solutions.",
                icon: "🔍"
                }
            ].map((skill, index) => (
                <div key={index} className="bg-navy-700 p-8 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{skill.title}</h3>
                <p className="text-navy-200">{skill.description}</p>
                </div>
            ))}
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
              <Link
                href="/projects"
                className="bg-blue-800 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-all duration-300 text-lg font-medium"
              >
                View My Work
              </Link>
              <Link
                href="/contact"
                className="border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg transition-all duration-300 text-lg font-medium"
              >
                Get In Touch
              </Link>
            </div>
        </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;