/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";

// type FormFields = {
//   firstname: string;
//   lastname: string;
//   age: number;
// };

type FormFields = {
  yourDetails: {
    firstName: string,
    lastName: string,
  }
};

let renderCount = 0;
const App = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: {
      // isDirty,
      // dirtyFields,
      // touchedFields,
      // errors,
      isValid,
    }
  } = useForm<FormFields>({
    defaultValues: {
      yourDetails: {
        firstName: '',
        lastName: '',
      },
    },
  });

  renderCount++;
  const onsubmit = async (data: any) => {
    console.log(data);
  }

  // console.log('isDirty, dirtyFields', isDirty, dirtyFields);
  // console.log('touchFields', touchedFields);
  // console.log('errors', errors);
  console.log('isValid', isValid);

  return (
    <div>
      <div>
        <button type="button">{renderCount}</button>
      </div>
      <form onSubmit={handleSubmit(onsubmit)}>
        <br />
        <input {...register('yourDetails.firstName', {
          required: true,
        },)}
          placeholder="FirstName"
        />
        <br />
        <input {...register('yourDetails.lastName', {
          required: true,
        },)}
          placeholder="lastName"
        />
        <br />
        <br />
        {/* <button onClick={() => {
          setValue('firstname', 'billbill',
            // { shouldDirty: true }
            // { shouldTouch: true }
            { shouldValidate: true }
          )
        }}>setValue</button> */}
        <button onClick={() => {
        //   setValue('yourDetails', {
        //     firstName: 'bill',
        //     lastName: 'luo',
        //   }, 
        //   // {shouldValidate: true}
        // )
        setValue('yourDetails.firstName', 'bill');
        setValue('yourDetails.lastName', 'luo');
        }}>setValue</button>
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default App;