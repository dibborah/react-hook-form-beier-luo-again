import React from "react";
import { useForm } from "react-hook-form";

type FormFields = {
  firstName: string;
  checkbox: boolean;
};

let renderCount = 0;
const App = () => {
  const {
    register,
    handleSubmit,
    watch,
    unregister,
    formState: { errors }
  } = useForm<FormFields>({
    defaultValues: {
      firstName: '',
      checkbox: true,
    },
    mode: 'onChange',
    // shouldUnregister: false,// by default
    // shouldUnregister: true,
  });

  renderCount++;

  const onSubmit = async (data: FormFields) => {
    console.log(data);
  };

  const checkbox = watch('checkbox');

  console.log("checkbox", checkbox);

  React.useEffect(() => {
    if (!checkbox) {
      // unregister(['firstName', 'lastName'], {// When multiple inputs needs to be unregistered// Put them in an array
      unregister('firstName', {
        // keepError: true
      });
    }
  }, [unregister, checkbox]);

  console.log('errors', errors);

  return (
    <div>
      <div>
        <button type="button">{renderCount}</button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <br />
        {checkbox && <input autoComplete="off" {...register('firstName', {
          required: true,
        })}
          placeholder="FirstName"
        />}
        <br />
        <br />
        <input type="checkbox" {...register('checkbox')} />
        <br />
        <input type="submit" />
        <br />
      </form>
    </div>
  )
}

export default App;