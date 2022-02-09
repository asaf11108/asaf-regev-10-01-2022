import { FC } from 'react';
import { ControllerAutocompleteProps } from './Autocomplete.model';
import Autocomplete from './Autocomplete';
import { useController } from 'react-hook-form';

const ControllerAutocomplete: FC<ControllerAutocompleteProps> = ({
  onChange: handleChange,
  promiseOptions,
  optionText = 'option',
  option,
  name,
  control
}) => {
  const {
    field: { onChange: handleInputChange, onBlur, ref },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
    defaultValue: option?.label || '',
    rules: {
      required: {
        value: true,
        message: `Please enter ${optionText}`
      },
      pattern: {
        value: /^[a-zA-Z ]+$/,
        message: 'Only letters are allowed'
      }
    }
  });

  return (
      <Autocomplete
        innerRef={ref}
        onBlur={onBlur}
        option={option}
        onInputChange={handleInputChange}
        onChange={handleChange}
        promiseOptions={promiseOptions}
        optionText={optionText}
        valid={!invalid}
        error={error}
      />
  );
};

export default ControllerAutocomplete;
