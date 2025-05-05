import Layout from '../../components/Layout';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const About: NextPage = () => {
  const skills = [
    { name: 'TypeScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'System Design', level: 85 },
    { name: 'Cloud Architecture', level: 80 }
  ];

  return (
    <>
      <Head>
        <title>About | Joel Reiter</title>
        <meta name="description" content="About Joel Reiter, Software Engineer" />
      </Head>
      
      <Layout>
        <section className="min-h-screen bg-navy-900 py-20 px-6">
          <div className="container mx-auto">
            {/* Hero Section */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-20">
              <div className="lg:w-1/2">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="text-blue-400">Hi, I'm Joel.</span> Nice to meet you!
                </h1>
                <div className="text-navy-300 text-lg space-y-4">
                  <p>
                    I'm a passionate software engineer who loves turning complex problems into elegant solutions.
                  </p>
                  
                </div>
              </div>
              
              <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg">
                {/* Replace with your actual image path */}
                <Image
                  src="/images/jrlogo.png" 
                  alt="Joel Reiter"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Skills Section */}
            <div className="bg-navy-800 rounded-xl p-8 shadow-lg mb-20">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                My <span className="text-blue-400">Skills</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-navy-200 font-medium">{skill.name}</span>
                      <span className="text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-navy-700 rounded-full h-2.5">
                      <div 
                        className="bg-blue-600 h-2.5 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
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
                  That practical problem-solving mindset still drives me today. Whether it's building responsive web applications or optimizing backend systems, I love seeing how code translates into tangible solutions.
                </p>
              </div>
              
              <div className="bg-navy-800 rounded-xl p-8 flex-1 shadow-lg hover:transform hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="text-blue-400 mr-3">💡</span> My Philosophy
                </h3>
                <p className="text-navy-300">
                  
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;