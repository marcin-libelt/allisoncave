import React from 'react';
import Layout from "../components/layout"
import Seo from "../components/seo"
import Intro from "../components/intro"
import image from '../images/homepageheader_3.jpg';

const ServicePage = () => (
  <Layout>
    <Seo title="Service" />
    <Intro title={'high-level copywriting in your voice'} image={image}/>
  </Layout>
)

export default ServicePage;