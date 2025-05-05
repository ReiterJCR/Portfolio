import Layout from '../../components/Layout';
import { NextPage } from 'next';

const Contact: NextPage = () => {
  return (
    <Layout>
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Get in Touch</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Interested in working together? Feel free to reach out via email or follow me on social media.
        </p>
        <a
          href="mailto:your.email@example.com"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Contact Me
        </a>
      </section>
    </Layout>
  );
};

export default Contact;