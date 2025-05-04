import Layout from '../../components/Layout';
import Link from 'next/link';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Joel Reiter
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Software Engineer
        </p>
        <Link
          href="/projects"
          className="inline-block text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          View My Work
        </Link>
      </section>
    </Layout>
  );
};

export default Home;