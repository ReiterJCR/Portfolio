import Layout from '../../components/Layout';
import Link from 'next/link';
import { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Joel Reiter | Software Engineer</title>
        <meta name="description" content="Professional portfolio of Joel Reiter, Software Engineer" />
      </Head>
      
      <Layout>
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center items-center bg-navy-900 text-white px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Joel Reiter
            </h1>
            <h2 className="text-xl md:text-2xl text-navy-200 mb-8 animate-fade-in delay-100">
              Software Engineer & Problem Solver
            </h2>
            <p className="text-lg md:text-xl text-navy-300 mb-12 max-w-2xl mx-auto animate-fade-in delay-200">
              I solve efficient solutions to complex problems through clean code and thoughtful design.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in delay-300">
              <Link
                href="/projects"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-all duration-300 text-lg font-medium"
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

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* Featured Skills Section */}
        <section className="py-20 bg-navy-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-white mb-12">What I Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Web Development",
                  description: "Building responsive, accessible web applications with modern frameworks.",
                  icon: "💻"
                },
                {
                  title: "System Design",
                  description: "Architecting scalable and maintainable software systems.",
                  icon: "🧩"
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
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;