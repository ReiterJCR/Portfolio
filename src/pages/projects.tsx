import Layout from '../../components/Layout';
import Link from 'next/link';
import { NextPage } from 'next';
import Head from 'next/head';

const Projects: NextPage = () => {
  const projects = [
    {
        title: "Portfolio",
        description: "This website was built using React and Next.js. Deployed on Vercel.",
        tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Personal"],
        link: "https://joelreiter.com/"
    },
    {
      title: "RTDrones",
      description: "A mock website for a drone business. Built with Next.js and Supabase. Deployed on Vercel.",
      tags: ["React", "TypeScript", "Next.js", "Vercel", "Supabase", "Personal"],
      link: "https://rt-drones.vercel.app/"
    },
    {
      title: "HERO",
      description: "Health and Environmental Research Online (HERO) is a database of scientific studies and other references used to develop EPA's risk assessments aimed at understanding the health and environmental effects of pollutants and chemicals.",
      tags: ["Python", "Django", "PostgreSQL", "CSS", "HTML", "JavaScript", "Agile Development", "Jira", "Team"],
      link:"https://heronetnext.epa.gov/"
    },
  ];

  return (
    <>
      <Head>
        <title>Projects | Joel Reiter</title>
        <meta name="description" content="Projects by Joel Reiter, Software Engineer" />
      </Head>
      
      <Layout>
        <section className="min-h-screen bg-navy-900 py-20 px-6">
          <div className="container mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">Projects</h2>
            <p className="text-navy-300 text-lg text-center max-w-2xl mx-auto mb-12">
              Here are some things I have worked on.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className="bg-navy-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 hover:transform hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-white mb-3">{project.title}</h3>
                    <p className="text-navy-300 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="bg-navy-700 text-blue-400 text-xs px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.link && (
                        <Link
                           href={project.link}
                           className="inline-block w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-300"
                        >
                            View Project
                        </Link>
                    )}
                    
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Projects;