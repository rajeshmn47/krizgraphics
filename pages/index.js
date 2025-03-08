import Head from 'next/head';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';

function Home() {
  return (
    <div>
      <Head>
        <title>KRIZ Graphics - Professional Design Solutions</title>
        <meta name="description" content="Professional Graphics Design, Photo Editing, and Digital Solutions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <WhyChooseUs />
      <Features />
      <Portfolio />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default Home;