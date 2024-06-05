/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";

type FormFields = {
  firstname: string;
  lastname: string;
  age: number;
}

let renderCount = 0;
const App = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormFields>({
    defaultValues: {
      firstname: '',
      lastname: '',
      age: 0,
    }
  });
  renderCount++;
  const onsubmit = (data: any) => {
    console.log(data);
  }
  console.log('errors', errors);
  return (
    <div>
      <div>
        <button type="button">{renderCount}</button>
      </div>
      <form onSubmit={handleSubmit(onsubmit)}>
        <input {...register('firstname', { required: true })} placeholder="FirstName" />
        <br />
        <input {...register('lastname', {
          required: true,
          maxLength: {
            value: 4,
            message: 'Max length of 4 is required',
          },
        })} placeholder="LastName" />
        <br />
        <input type="number" {...register('age', { valueAsNumber: true})} placeholder="age" />
        <br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default App;