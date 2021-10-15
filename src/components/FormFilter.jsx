import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import SelectFilter from './SelectFilter';

class Form extends React.Component {
  render() {
    const {
      filterCard,
      cardRareFilter,
      cardTrunfoFilter,
      onInputChange } = this.props;

    return (
      <div className="inputFilterFields">
        <Input
          labeltext="Search Cards"
          type="text"
          testid="name-filter"
          name="filterCard"
          value={ filterCard }
          onChange={ onInputChange }
        />
        <SelectFilter
          labeltext="Type"
          type="select"
          testid="rare-filter"
          name="cardRareFilter"
          value={ cardRareFilter }
          onChange={ onInputChange }
        />
        <Input
          labeltext="ST-Card"
          type="checkbox"
          testid="trunfo-filter"
          name="cardTrunfoFilter"
          value={ cardTrunfoFilter }
          onChange={ onInputChange }
        />
      </div>
    );
  }
}

Form.propTypes = {
  filterCard: PropTypes.string.isRequired,
  cardRareFilter: PropTypes.string.isRequired,
  cardTrunfoFilter: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Form;
