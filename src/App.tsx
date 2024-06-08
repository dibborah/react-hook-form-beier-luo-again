/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { useForm } from "react-hook-form";

type FormFields = {
  firstname: string;
  lastname: string;
  age: number;
};

let renderCount = 0;
const App = () => {
  const { register, handleSubmit, watch } = useForm<FormFields>({
    defaultValues: {
      firstname: 'bill',
      lastname: 'luo',
      age: 6,
    },
  });
  renderCount++;
  const onsubmit = (data: any) => {
    console.log(data);
  }
  // console.log(watch(['firstname', 'lastname', 'age']));

  // useEffect(() => {
  //   const subscription = watch((data) => {
  //     console.log(data);
  //   });
  //   return () => {
  //     subscription.unsubscribe();
  //   }
  // }, [watch]);

  // Watch is better to use Inside the render than inside useEffect
  // So watch is always to be used inside the render function not inside the useEffect
  // That is the reccomended way

  const firstname = watch('firstname');
  return (
    <div>
      <div>
        <button type="button">{renderCount}</button>
      </div>
      <p>
        {firstname === 'bill' ? 'wait' : 'donot wait'}
      </p>
      <form onSubmit={handleSubmit(onsubmit)}>
        <br />
        <input {...register('firstname')} placeholder="FirstName" />
        <br />
        <input {...register('lastname')} placeholder="lastname" />
        <br />
        <input {...register('age')} placeholder="age" />
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default App;