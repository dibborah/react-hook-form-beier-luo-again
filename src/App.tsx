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
    trigger,
    formState: { errors },
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

  console.log('errors', errors);
  return (
    <div>
      <div>
        <button type="button">{renderCount}</button>
      </div>
      <form onSubmit={handleSubmit(onsubmit)}>
        <br />
        <input {...register('firstName', {
          required: true,
          minLength: 6,
        })}
          placeholder="FirstName"
        />
        <br />
        <br />
        <input {...register('lastName', {
          required: true,
          minLength: 6,
        })}
          placeholder="LastName"
        />
        <br />
        
        {/* Calling trigger validate api on single fields multiple fields and on the 
        entire form */}

        {/* <button type="button" onClick={() => {
          // trigger('firstName')
          // trigger(['firstName', 'lastName'])
          trigger()// Triggering the validation for the entire form
        }}>trigger</button> */}
        
        {/* Calling trigger asynchronously */}

        {/* <button type="button"
          onClick={async () => {
            const output = await trigger();
            console.log('output', output);
          }}
        >
          trigger
        </button> */}
        <button type="button"
          onClick={async () => {
            const output = await trigger('lastName', {
              shouldFocus: true,
            });
            console.log('output', output);
          }}
        >
          trigger
        </button>
        <br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default App;