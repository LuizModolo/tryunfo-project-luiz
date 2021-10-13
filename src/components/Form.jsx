import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;

    return (
      <div className="inputFields">
        <Input
          labeltext="Nome"
          type="text"
          testid="name-input"
          name="cardName"
          value={ cardName }
          onChange={ onInputChange }
        />
        <Input
          labeltext="Descrição"
          type="textarea"
          testid="description-input"
          name="cardDescription"
          value={ cardDescription }
          onChange={ onInputChange }
        />
        <Input
          labeltext="Atributo-01"
          type="number"
          testid="attr1-input"
          name="cardAttr1"
          value={ cardAttr1 }
          onChange={ onInputChange }
        />
        <Input
          labeltext="Atributo-02"
          type="number"
          testid="attr2-input"
          name="cardAttr2"
          value={ cardAttr2 }
          onChange={ onInputChange }
        />
        <Input
          labeltext="Atributo-03"
          type="number"
          testid="attr3-input"
          name="cardAttr3"
          value={ cardAttr3 }
          onChange={ onInputChange }
        />
        <Input
          labeltext="Imagem"
          type="text"
          testid="image-input"
          name="cardImage"
          value={ cardImage }
          onChange={ onInputChange }
        />
        <Select
          labeltext="Raridade"
          type="select"
          testid="rare-input"
          name="cardRare"
          value={ cardRare }
          onChange={ onInputChange }
        />
        { hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho</p> : <Input
          labeltext="Super-Trybe"
          type="checkbox"
          testid="trunfo-input"
          name="cardTrunfo"
          value={ cardTrunfo }
          onChange={ onInputChange }
        />}
        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
