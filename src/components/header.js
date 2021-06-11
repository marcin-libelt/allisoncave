import * as React from "react"
import PropTypes from "prop-types"
import {Link} from "gatsby"
import {StaticImage} from "gatsby-plugin-image"
import MainNav from './mainNav';

const Header = ({siteTitle}) => (
  <header>
    <div className={'container-fluid'}>
      <div className={'row'}>
        <div className={'col col-12 d-flex align-items-center justify-content-between'}>

          <h1 style={{margin: 0}}>
            <Link
              to="/">
              <StaticImage
                src="../images/allison-cave-primary-logo-white-transparent-croped.png"
                width={320}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt={siteTitle}
                style={{
                marginTop: '5px'
                }}
              />
            </Link>
          </h1>

          <nav className={'main-nav'}>
            <MainNav/>
          </nav>

        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
