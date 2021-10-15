import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo } = this.props;

    return (
      <div className={ cardRare }>
        <div className="cardBg">
          <div className="cardTop">
            <h2 data-testid="name-card">{ cardName }</h2>
            { cardTrunfo && <p data-testid="trunfo-card">ST</p>}
          </div>
          <div className="cardImage">
            { cardImage !== '' && (
              <img src={ cardImage } alt={ cardName } data-testid="image-card" />)}
          </div>
          <div className="cardDiscription">
            <p data-testid="description-card">{ cardDescription }</p>
          </div>
          <div className="cardAtrr">
            { cardAttr1 !== 0 && (
              <div className="atr">
                <h4>
                  Attack - - - - - - - - - - - - - - - - -
                </h4>
                <p data-testid="attr1-card">
                  { cardAttr1 }
                </p>
              </div>)}
            { cardAttr2 !== 0 && (
              <div className="atr">
                <h4>
                  Defense - - - - - - - - - - - - - - - -
                </h4>
                <p data-testid="attr2-card">
                  { cardAttr2 }
                </p>
              </div>)}
            { cardAttr3 !== 0 && (
              <div className="atr">
                <h4>
                  Special - - - - - - - - - - - - - - - - -
                </h4>
                <p data-testid="attr3-card">
                  { cardAttr3 }
                </p>
              </div>)}
          </div>
          <div className="cardBotton">
            <p data-testid="rare-card">{ cardRare }</p>
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
