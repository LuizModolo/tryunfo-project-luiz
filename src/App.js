import React from 'react';
import Form from './components/Form';
import FormFilter from './components/FormFilter';
import Card from './components/Card';
import './App.css';

const initialState = {
  cardName: '',
  cardDescription: '',
  cardAttr1: 0,
  cardAttr2: 0,
  cardAttr3: 0,
  cardImage: '',
  cardRare: 'Fire-x',
  cardTrunfo: false,
  filterCard: '',
  cardRareFilter: 'All',
  cardTrunfoFilter: false,
  isSaveButtonDisabled: true,
};

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      ...initialState,
      hasTrunfo: false,
      savedCard: [],
    };
  }

  handlePrint = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.handleSaveButtonClick());
  };

  verifyText = () => {
    const { cardName, cardDescription, cardImage, cardRare } = this.state;
    if (
      cardName !== ''
      && cardDescription !== ''
      && cardImage !== ''
      && cardRare !== ''
    ) return true;
    return false;
  }

  verifyNumber = () => {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const num1 = Number(cardAttr1);
    const num2 = Number(cardAttr2);
    const num3 = Number(cardAttr3);
    const maxSum = 300;
    const maxNum = 100;
    if (
      num1 + num2 + num3 <= maxSum
      && num1 <= maxNum
      && num2 <= maxNum
      && num3 <= maxNum
      && num1 >= 0
      && num2 >= 0
      && num3 >= 0
    ) return true;
    return false;
  }

  handleSaveButtonClick = () => {
    const verText = this.verifyText();
    const verNum = this.verifyNumber();
    if (verText && verNum) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
    // const buttonDisabled = (verText && verNum);
    // this.setState({ isSaveButtonDisabled: !buttonDisabled });
  };

  saveCard = (event) => {
    event.preventDefault();
    const { savedCard, hasTrunfo, ...restState } = this.state;
    this.setState((previus) => ({
      savedCard: [...previus.savedCard, restState],
      hasTrunfo: restState.cardTrunfo ? true : hasTrunfo,
      ...initialState }));
  }

  removeButtonClick = (name, trunfo) => {
    const { savedCard } = this.state;
    this.setState((previus) => ({
      savedCard: savedCard.filter((card) => card.cardName !== name),
      hasTrunfo: trunfo ? false : previus.hasTrunfo,
    }));
  }

  filterCards = () => {
    const { savedCard, filterCard, cardRareFilter, cardTrunfoFilter } = this.state;
    if (cardTrunfoFilter) {
      return savedCard.filter((card) => (card.cardTrunfo === true));
    }
    if (filterCard !== '') {
      return savedCard.filter((card) => card.cardName.includes(filterCard));
    }
    if (cardRareFilter !== 'All') {
      return savedCard.filter((card) => (card.cardRare === cardRareFilter));
    }
    return savedCard;
  }

  render() {
    const { savedCard } = this.state;
    return (
      <div className="secondBody">
        <header className="headerApp">
          <h1>Pokemon Cards - The Game!</h1>
        </header>
        <div className="mainSection">
          <div className="addCard">
            <h1>Add New Card</h1>
            <Form
              { ...this.state }
              onInputChange={ this.handlePrint }
              onSaveButtonClick={ this.saveCard }
            />
          </div>
          <div className="cardRender">
            <div className="cardPreview">
              <Card { ...this.state } />
            </div>
          </div>
        </div>
        <div className="secondSection">
          <h1>Created Cards - Deck</h1>
          <div className="secondSectionContent">
            <div className="sectionFilter">
              <FormFilter
                { ...this.state }
                onInputChange={ this.handlePrint }
              />
            </div>
            <div className="printed-cards">
              {savedCard !== undefined
              && this.filterCards().map((card) => (
                <div className="saved-card" key={ card.cardName }>
                  <div className="saved-card2" id={ card.cardName }>
                    <Card { ...card } />
                    <button
                      type="button"
                      data-testid="delete-button"
                      onClick={ () => this
                        .removeButtonClick(card.cardName, card.cardTrunfo) }
                    >
                      Remove
                    </button>
                  </div>
                </div>))}
            </div>
          </div>
        </div>
        <footer className="footer">
          <h4>
            All rights reserved to Jupiter group
            {' '}
            <span>&#169;</span>
          </h4>
          <p><a href="https://www.linkedin.com/in/luizfcmodolo/" target="_blank" rel="noreferrer">Luiz Modolo</a></p>
        </footer>
      </div>
    );
  }
}

export default App;
