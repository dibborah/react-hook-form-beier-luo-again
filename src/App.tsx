/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";

let renderCount = 0;

type FieldValues = {
  firstname: string;
  lastname: string;
}

const App = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm<FieldValues>({
    defaultValues: {
      firstname: 'bill',
      lastname: 'luo',
    }
  });
  renderCount++;
  const onsubmit = (data: any) => {
    console.log(data);
  }
  console.log('errors', errors);
  const firstName = watch('firstname');
  console.log(firstName);
  return (
    <div>
      <div>
        <button type="button">{renderCount}</button>
      </div>
      <p>FIRSTNAME: {firstName}</p>
      <form onSubmit={handleSubmit(onsubmit)}>
        <div>
          <input {...register("firstname", {
            required: 'This is required'
          })} placeholder="FirstName" />
          {errors?.firstname && <div style={{ color: "red" }}>{errors?.firstname?.message}</div>}
        </div>
        <div>
          <input {...register("lastname", {
            required: 'This is required',
            minLength: {
              value: 3,
              message: 'Min length of 3 is necessary'
            },
          })} placeholder="LastName"
          />
          {errors?.lastname && <div style={{ color: "red" }}>{errors?.lastname?.message}</div>}
        </div>
        <input type="submit" />
      </form>
    </div>
  )
}

export default App;