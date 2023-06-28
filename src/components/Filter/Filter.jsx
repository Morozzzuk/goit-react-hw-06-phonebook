import { FilterForm, FilterLabel } from './Filter.styled';
import { Input } from '../FormList/FormList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { changeFilter } from 'redux/filterSlice';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <FilterForm>
      <FilterLabel>
        <Input
          type="name"
          value={value}
          onChange={handleChange}
          placeholder="Please enter a name to search"
        />
      </FilterLabel>
    </FilterForm>
  );
};

export default Filter;
