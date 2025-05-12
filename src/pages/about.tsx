import Layout from '../../components/Layout';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const About: NextPage = () => {

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
        </section>
      </Layout>
    </>
  );
};

export default About;