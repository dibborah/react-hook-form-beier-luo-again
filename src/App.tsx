import { useForm } from "react-hook-form";

type FormFields = {
  firstName: string;
};

let renderCount = 0;
const App = () => {
  const {
    register,
    handleSubmit,
  } = useForm<FormFields>({
    defaultValues: {
      firstName: '',
    },
    mode: 'onChange',
  });

  renderCount++;

  const onSubmit = async (data: FormFields) => {
    console.log(data);
  };

  return (
    <div>
      <div>
        <button type="button">{renderCount}</button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <br />
        <input autoComplete="off" {...register('firstName')}
          placeholder="FirstName"
        />
        <br />
        <br />
        <input type="submit" />
        <br />
      </form>
    </div>
  )
}

export default App;