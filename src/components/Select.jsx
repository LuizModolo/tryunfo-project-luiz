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
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
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
