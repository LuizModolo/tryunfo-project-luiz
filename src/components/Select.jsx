import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { labeltext, type, testid, value, onChange, name } = this.props;
    return (
      <label htmlFor={ labeltext } className={ labeltext }>
        { labeltext }
        <select
          id={ labeltext }
          data-testid={ testid }
          type={ type }
          value={ value }
          onChange={ onChange }
          name={ name }
        >
          <option value="Grass">Grass-original</option>
          <option value="Fire">Fire-original</option>
          <option value="Water">Water-original</option>
          <option value="Eletric">Eletric-original</option>
          <option value="Psychic">Psychic-original</option>
          <option value="Fighting">Fighting-original</option>
          <option value="Dark">Dark-original</option>
          <option value="Metal">Metal-original</option>
          <option value="Dragon">Dragon-original</option>
          <option value="Fairy">Fairy-original</option>
          <option value="Normal">Normal-original</option>
          <option value="Grass-x">Grass-X</option>
          <option value="Fire-x">Fire-X</option>
          <option value="Water-x">Water-X</option>
          <option value="Eletric-x">Eletric-X</option>
          <option value="Psychic-x">Psychic-X</option>
          <option value="Fighting-x">Fighting-X</option>
          <option value="Dark-x">Dark-X</option>
          <option value="Metal-x">Metal-X</option>
          <option value="Dragon-x">Dragon-X</option>
          <option value="Fairy-x">Fairy-X</option>
          <option value="Normal-x">Normal-X</option>
          <option value="Sound-x">Sound-X</option>
          <option value="Cyber-x">Cyber-X</option>
          <option value="Light-x">Light-X</option>
          <option value="Flying-x">Flying-X</option>
          <option value="Rock-x">Rock-X</option>
          <option value="Ground-x">Ground-X</option>
          <option value="Bug-x">Bug-X</option>
          <option value="Cosmic-x">Cosmic-X</option>
          <option value="Ghost-x">Ghost-X</option>
          <option value="Ice-x">Ice-X</option>
          <option value="Poison-x">Poison-X</option>
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  labeltext: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Select;
