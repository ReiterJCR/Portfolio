import Layout from '../../components/Layout';
import { NextPage } from 'next';

const About: NextPage = () => {
  return (
    <Layout>
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">About Me</h2>
        <h3 className="text-center "> Hi, I'm Joel.</h3>
        <p className="text-gray-600 max-w-2xl mx-auto text-center">
            bio text
        </p>
      </section>
    </Layout>
  );
};

export default About;