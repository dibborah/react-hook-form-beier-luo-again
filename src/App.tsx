/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { useForm } from "react-hook-form";

type FormFields = {
  firstname: string;
  lastname: string;
  age: number;
};

const sleep = async (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

let renderCount = 0;
const App = () => {
  const { register, handleSubmit, formState,
    formState: {
      errors,
      isDirty,
      dirtyFields,
      touchedFields,
      isSubmitted,
      isSubmitSuccessful,
      submitCount,
      isValid,
      isSubmitting,
      isValidating,
    } } = useForm<FormFields>({
      mode: 'onChange',
      defaultValues: {
        firstname: '',
        lastname: '',
      },
    });
  renderCount++;
  const onsubmit = async (data: any) => {
    await sleep(3000);
    console.log(data);
  }

  // console.log(errors);
  // console.log('isDirty', isDirty);// Requires defaultValues to be passed to be able to compare the inputted values with the default values as a single source of truth
  // console.log('dirtyFields', dirtyFields);
  // console.log('touchFields', touchedFields);
  // console.log('isubmitted', isSubmitted);
  // console.log('isSubmittedSuccessful', isSubmitSuccessful);
  // console.log('submitCount', submitCount);
  console.log('isValid', isValid);
  // console.log('isSubmitting', isSubmitting);
  // console.log('isValidating', isValidating);

  useEffect(() => {
    // console.log('useEffect', formState.errors);
  }, [formState]);

  return (
    <div>
      <div>
        <button type="button">{renderCount}</button>
      </div>
      <form onSubmit={handleSubmit(onsubmit)}>
        <br />
        <input {...register('firstname', {
          validate: async () => {
            // await sleep(1000);
            return true;
          },
          required: true,
        })} placeholder="FirstName" />
        <br />
        <input {...register('lastname', { required: true })} placeholder="lastname" />
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default App;