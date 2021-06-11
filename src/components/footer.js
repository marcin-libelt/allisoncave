import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import MainNav from './mainNav';

const Footer = () => (
    <footer>
      <div className={'container-fluid'}>
        <div className={'d-flex flex-column'}>
          <div className={'d-flex justify-content-center'}>
            <StaticImage
                src="../images/allison-cave-secondary-logo-white-transparent.png"
                width={280}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="A Gatsby astronaut"
            />
          </div>
          <p className={'main-nav'}>
            <MainNav isForFooter={true}/>
          </p>
        </div>
      </div>
    </footer>
)


export default Footer
