import { useForm } from "react-hook-form";

type FormFields = {
  firstName: string;
};

// const sleep = async (ms: number) => {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// }

let renderCount = 0;
const App = () => {
  const {
    register,
    handleSubmit,
    // setError,
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
  const onSubmit = async (data: FormFields, event: any) => {
    // try {
    //   await sleep(2000)
    //   console.log('data', data);
    // } catch (e) {
    //   setError('service', {
    //     type: 'Server side Error',
    //     message: 'Something went wrong'
    //   });
    // }
    // throw new Error('test');
    console.log(data);
    // console.log("Event", event);
  };

  return (
    <div>
      <div>
        <button type="button">{renderCount}</button>
      </div>
      {/* <form onSubmit={handleSubmit(onSubmit, onError)}> */}
      <form onSubmit={(e) => handleSubmit(onSubmit, onError)(e).catch(() => {
        console.log('e', e);
      })}>
        <br />
        <input {...register('firstName', {
          // disabled: true,// If disable is set to true than result are going to be undefined
          // plus inputs are now cannot be entered anymore
          // required: true,
        })}
          placeholder="FirstName"
        />
        <br />
        <br />
        <input type="submit" />
        <br />
        <button
          type="button"
          onClick={(e) => {
            handleSubmit(onSubmit, onError)(e);
          }}
        >
          Fake Submit
        </button>
        <br />
      </form>
    </div>
  )
}

export default App;