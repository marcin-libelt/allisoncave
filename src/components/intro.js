import * as React from "react"
import { Parallax } from 'react-parallax';
import PropTypes from "prop-types"


const Intro = ({title, image, updateStyle}) => {

  const styles = {
    backgroundColor: '#eeeae1',
    width: '45%',
    textAlign: 'center',
    margin: '0 auto',
    padding: '30px 30px 10px'
  }

  const fontStyles = {
    letterSpacing: '.05em',
    lineHeight: '1.4em',
  };

  return (
  <Parallax blur={0} bgImage={image} bgImageAlt="the cat" strength={100}>
    <div style={{...styles}} className={'intro-container my-5'}>
      <h1 className={'h1'} style={{...fontStyles, ...updateStyle }}>{title}</h1>
    </div>
  </Parallax>

)}

Intro.defaultProps = {
  updateStyle: {},
  image: '',
  title: ''
}

Intro.propTypes = {
  updateStyle: PropTypes.object,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}


export default Intro
