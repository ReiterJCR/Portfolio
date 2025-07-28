import Layout from '../../components/Layout';
import Link from 'next/link';
import { NextPage } from 'next';
import Head from 'next/head';
import { FiExternalLink, FiDownload } from 'react-icons/fi';


const Projects: NextPage = () => {


  const projects = [
    {
      title: "Portfolio",
      description: "A performant personal portfolio website showcasing my skills and projects. Built with modern web technologies for optimal user experience.",
      tags: ["React", "Next.js", "TypeScript", "Vercel", "Tailwind CSS"],
      link: "https://joelreiter.com/",
      category: "Personal"
    },
    {
      title: "RTDrones",
      description: "A mock website for a drone business. Built with Next.js and Supabase. Deployed on Vercel.",
      tags: ["React", "Next.js", "Supabase", "Vercel", "Tailwind CSS"],
      link: "https://rt-drones.vercel.app/",
      category: "Demo"
    },
    {
      title: "HERO",
      description: "Health and Environmental Research Online (HERO) is a database of scientific studies and other references used to develop EPA's risk assessments aimed at understanding the health and environmental effects of pollutants and chemicals.",
      tags: ["Python", "Django", "PostgreSQL", "CSS", "HTML", "JavaScript", "Agile Development", "Jira", "Team"],
      link:"https://heronetnext.epa.gov/",
      category: "Professional"
    },
    {
        title: "RAG Chatbot for NASCAR pitstop data",
        description: "A Retrieval-Augmented Generation (RAG) chatbot that provides insights on NASCAR pitstop data using OpenAI.",
        tags: ["Python", "OpenAI", "Flask", "SQLite", "HTML", "CSS", "JavaScript"],
        link: "https://github.com/reiterjcr/asphalt-rag",
        category: "Personal"
    },
    {
        title: "Access Sentinel",
        description: "A simulated insider threat detection web application that monitors employee data access and flags potentially suspicious activity based on patterns like IP geolocation anomalies, access spikes, and after-hours usage.",
        tags: ["Python", "Django", "PostgreSQL", "HTML", "CSS", "JavaScript"],
        link: "https://github.com/reiterjcr/access-sentinel",
        category: "Personal"
    }
  ];

  return (
    <>
      <Head>
        <title>Projects | Joel Reiter - Software Engineer</title>
        <meta name="description" content="Selected projects by Joel Reiter showcasing professional and personal software development work" />
      </Head>
      
      <Layout>
        <section className="min-h-screen bg-navy-900 py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">My Projects</h2>
              <p className="text-navy-300 text-lg max-w-2xl mx-auto">
                A selection of my professional, personal, and demonstration projects
              </p>
              <a
                href="/Resume.pdf"
                download="Joel_Reiter_Resume.pdf"
                className="mt-6 flex items-center justify-center gap-2 max-w-fit mx-auto bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg transition-colors duration-300 hover:cursor-pointer"
              >
                Get My Resume <FiDownload className="text-sm" />
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className="bg-navy-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
                >
                  <div className="p-6 flex-grow">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        project.category === "Professional" ? "bg-green-900 text-green-300" :
                        project.category === "Personal" ? "bg-blue-900 text-blue-300" :
                        "bg-purple-900 text-purple-300"
                      }`}>
                        {project.category}
                      </span>
                    </div>
                    
                    <p className="text-navy-300 mb-6">{project.description}</p>
                    
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
                  </div>
                  
                  {project.link && (
                    <div className="p-4 bg-navy-850 border-navy-700">
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-300"
                      >
                        View Project <FiExternalLink className="text-sm" />
                      </Link>
                    </div>
                  )}
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