import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Banner.css';

/**
* @extends {React.Component<{bannerBg:string.isRequired, color:string.isRequired, texto:string.isRequired}>}
*/
class Banner extends Component {
  render() {
    const { texto, color, bannerBg } = this.props;

    // const estilo = {
    //   backgroundColor: color,
    //   backgroundImage: `url(${bannerBg})`,
    //   backgroundSize: 'cover',
    // };

    return (
      <div
        className="banner"
        style={ { backgroundColor: color,
          backgroundImage: `url(${bannerBg})`,
          backgroundSize: 'cover' } }
      >
        {texto}
      </div>
    );
  }
}

Banner.propTypes = {
  bannerBg: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
};

export default Banner;
