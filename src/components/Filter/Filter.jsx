import PropTypes from 'prop-types';

const Filter = ({ val, onChange }) => {
  return (
    <label>
      Find contacts by name{' '}
      <input type="text" value={val} onChange={onChange} />
    </label>
  );
};

export default Filter;

Filter.propTypes = {
  val: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
