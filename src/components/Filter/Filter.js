import { connect, useSelector, useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
import * as phoneBookActions from '../../redux/phoneBook/phoneBook-actions';
import s from './Filter.module.css';
import { getFilter } from '../../redux/phoneBook/phoneBook-selectors';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  // const onChange = e => dispatch(phoneBookActions.changeFilter(e.target.value));

  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="string"
        name="filter"
        placeholder="Enter contact name to find"
        value={value}
        onChange={e => dispatch(phoneBookActions.changeFilter(e.target.value))}
        // onChange={onChange}
      ></input>
    </label>
  );
}

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

// OldRedux

// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import phoneBookActions from '../../redux/phoneBook/phoneBook-actions';
// import s from './Filter.module.css';

// function Filter({ value, onChange }) {
//   return (
//     <label className={s.label}>
//       Find contacts by name
//       <input
//         className={s.input}
//         type="string"
//         name="filter"
//         placeholder="Enter contact name to find"
//         value={value}
//         onChange={onChange}
//       ></input>
//     </label>
//   );
// }

// const mapStateToProps = state => ({
//   value: state.phoneBook.filter,
// });

// const mapDispatchToProps = dispatch => ({
//   onChange: e => {
//     console.log(e.target.value);
//     return dispatch(phoneBookActions.changeFilter(e.target.value));
//   },
// });

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
