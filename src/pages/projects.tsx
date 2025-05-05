import Layout from '../../components/Layout';
import Link from 'next/link';
import { NextPage } from 'next';

const Projects: NextPage = () => {
  return (
    <Layout>
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Project Card 1 */}
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Project 1</h3>
            <p className="text-gray-600 mb-4">
              A brief description of your project. Add details about the tech stack or features.
            </p>
            <Link href="#" className="text-blue-600 hover:underline">
              Learn More
            </Link>
          </div>
          {/* Project Card 2 */}
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Project 2</h3>
            <p className="text-gray-600 mb-4">
              Another project description. Customize this with your own work.
            </p>
            <Link href="#" className="text-blue-600 hover:underline">
              Learn More
            </Link>
          </div>
          {/* Project Card 3 */}
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Project 3</h3>
            <p className="text-gray-600 mb-4">
              Describe another project here. Link to a live demo or GitHub if available.
            </p>
            <Link href="#" className="text-blue-600 hover:underline">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;