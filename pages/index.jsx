// import dynamic from "next/dynamic";
// import Head from "next/head";
import React from "react";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import News from "../src/components/News";
import Newsletter from "../src/components/Newsletter";
import Partners from "../src/components/Partners";
import Process from "../src/components/Process";
import Service from "../src/components/Service";
import Skills from "../src/components/Skills";
import Testimonial from "../src/components/Testimonial";
import Layout from "../src/layout/Layout";
import Portfolio from "../src/components/Portfolio";

// const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
//   ssr: false,
// });

const Index = () => {
  return (
  <div>
      <Layout>
     
     <Home />
     {/* HERO */}
     {/* PROCESS */}
     <Process />
     {/* /PROCESS */}
     {/* ABOUT */}
     <About />
     {/* /ABOUT */}
     {/* PORTFOLIO */}
     <Portfolio />
     {/* /PORTFOLIO */}
     {/* SKILLS */}
     <Skills />
     {/* /SKILLS */}
     {/* SERVICES */}
     <Service />
     {/* /SERVICES */}
     {/* TESTIMONIALS */}
     <Testimonial />
     {/* /TESTIMONIALS */}
     {/* PARTNERS */}
     <Partners />
     {/* /PARTNERS */}
     {/* NEWS */}
     <News />
     <Newsletter />
     <Contact />
   </Layout>
  </div>
  );
};
export default Index;
