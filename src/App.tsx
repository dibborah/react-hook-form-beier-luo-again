/* eslint-disable @typescript-eslint/no-explicit-any */
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
        <br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default App;