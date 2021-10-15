import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { labeltext, type, testid, value, onChange, name, maxLength} = this.props;
    return (
      <label htmlFor={ labeltext } className={ labeltext }>
        <span>{ labeltext }</span>
        {type === 'checkbox' ? <input
          id={ labeltext }
          data-testid={ testid }
          maxLength={ maxLength }
          type={ type }
          checked={ value }
          onChange={ onChange }
          name={ name }
        /> : <input
          id={ labeltext }
          data-testid={ testid }
          maxLength={ maxLength }
          type={ type }
          value={ value }
          onChange={ onChange }
          name={ name }
        /> }
      </label>
    );
  }
}

Input.propTypes = {
  labeltext: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Input;
