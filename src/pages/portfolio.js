import React from 'react';
import Layout from "../components/layout"
import Seo from "../components/seo"
import Intro from "../components/intro"
import image from '../images/woman-sitting-on-chair-while-reading-1194410.jpg';

const PortfolioPage = () => (
  <Layout>
    <Seo title="Blog Dupa"  />
    <Intro title={'Read all about it'} image={image}/>
  </Layout>
)

export default PortfolioPage;