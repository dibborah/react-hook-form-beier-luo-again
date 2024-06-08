/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";

type FormFields = {
  firstname: string;
  lastname: string;
  age: number;
}

let renderCount = 0;
const App = () => {
  const { register, handleSubmit, watch } = useForm<FormFields>();
  renderCount++;
  const onsubmit = (data: any) => {
    console.log(data);
  }
  return (
    <div>
      <div>
        <button type="button">{renderCount}</button>
      </div>
      <form onSubmit={handleSubmit(onsubmit)}>
        <input {...register('firstname')} placeholder="FirstName" />
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default App;