import { useForm } from "react-hook-form";

type FormFields = {
  firstName: string;
};

let renderCount = 0;
const App = () => {
  const {
    register,
    handleSubmit,
    reset,
    // getValues,
    resetField,
    formState: { errors, isValid },
    formState: { isDirty, dirtyFields }
    // formState: { touchedFields }
  } = useForm<FormFields>({
    defaultValues: {
      // firstName: 'bill',
      firstName: '',
    },
    mode: 'onChange',
  });

  renderCount++;

  // ### RHF compares with default values as source of TRUTH 

  const onSubmit = async (data: FormFields) => {
    console.log(data);
  };

  // reset({
  //   ...getValues, firstName: 'bill'
  // });

  console.log('isDirty, dirtyFields', isDirty, dirtyFields);
  // console.log('touchedFields', touchedFields);

  return (
    <div>
      <div>
        <button type="button">{renderCount}</button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <br />
        <input autoComplete="off" {...register('firstName', {
          required: 'This is required',
          minLength: {
            value: 6,
            message: 'This needs to be min length of 6',
          }
        })}
          placeholder="FirstName"
        />
        <br />
        <p>{errors?.firstName?.message}</p>
        <p>{isValid ? 'Valid' : 'Not Valid'}</p>
        <button
          type="button"
          onClick={() => resetField('firstName', {
            // keepError: true
            // keepDirty: true,
            // keepTouched: true,
          })}
        >Reset Field</button>
        {/* <button type="button" onClick={() => resetField('firstName')}>Reset Field</button> */}
        {/* <button type="button" onClick={() => reset()}>Reset Field</button> */}
        <br />
        <input type="submit" />
        <br />
      </form>
    </div>
  )
}

export default App;