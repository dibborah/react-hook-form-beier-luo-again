import { useForm } from "react-hook-form";

type FormFields = {
  firstName: string;
};

const sleep = async (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

let renderCount = 0;
const App = () => {
  const {
    register,
    handleSubmit,
  } = useForm<FormFields>({
    defaultValues: {
      firstName: '',
    },
  });

  renderCount++;

  const onError = () => {
    console.log('Wrong');
  };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
    const onsubmit = async (data: FormFields, event: any) => {
      // await sleep(2000)
      console.log('data', data);
      // console.log("Event", event);
    }

  return (
    <div>
      <div>
        <button type="button">{renderCount}</button>
      </div>
      {/* <form onSubmit={handleSubmit(onsubmit, onError)}> */}
      <form onSubmit={(e) => handleSubmit(onsubmit)(e)}>
        <br />
        <input {...register('firstName', {
          // disabled: true,// If disable is set to true than result are going to be undefined
          // plus inputs are now cannot be entered anymore
        })}
          placeholder="FirstName"
        />
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default App;