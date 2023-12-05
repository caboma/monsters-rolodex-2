import './search-field-style.css';

const SearchField = ({ type, placeholder, className, onChangeHandler }) => {

  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      onChange={onChangeHandler} />
  )
}

export default SearchField;