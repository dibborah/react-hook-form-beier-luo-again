/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { useForm } from "react-hook-form";

type FormFields = {
    firstName: string,
    lastName: string,
};

let renderCount = 0;
const App = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    getValues,
    setValue,
  } = useForm<FormFields>({
    defaultValues: {
      firstName: '',
      lastName: ''
    },
  });

  renderCount++;
  const onsubmit = async (data: any) => {
    console.log(data);
  }

  console.log('isDirty', formState.isDirty);

  // useEffect(() => {
  //   if(formState.isSubmitSuccessful){
  //     reset({
  //       firstName: 'bill101',
  //       lastName: 'luo101',
  //     })
  //   }
  // }, [formState, reset]);

  console.log('isSubmittedSuccessful', formState.isSubmitSuccessful);

  return (
    <div>
      <div>
        <button type="button">{renderCount}</button>
      </div>
      <form onSubmit={handleSubmit(onsubmit)}>
        <br />
        <input {...register('firstName')}
          placeholder="FirstName"
        />
        <br />
        <input {...register('lastName')}
          placeholder="LastName"
        />
        <br />
        {/* <button type="button" onClick={() => {
          reset({
            ...getValues(),
            lastName: 'luo + bill'
          },{
            // keepDefaultValues: true
          });
        }}>Reset</button> */}
        <button onClick={() => {
          setValue('firstName', 'billSetValue');
          setValue('lastName', 'luoSetValeue');
        }}>SetValue</button>
        <br />
        <button onClick={() => {
          reset({
            firstName: 'billReset',
            lastName: 'luoReset'
          })
        }}>Reset</button>
        <br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default App;