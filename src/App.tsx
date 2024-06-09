import { useForm } from "react-hook-form";

type FormFields = {
  firstName: string;
  customError: string;
};

let renderCount = 0;
const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormFields>({
    defaultValues: {
      firstName: '',
    },
    // criteriaMode: 'all',
  });

  renderCount++;
  const onsubmit = async (data: FormFields) => {
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
        <input {...register('firstName')}
          placeholder="FirstName"
        />
        <br />
        <br />

        {/* Single custom error message */}
        {/* <button type="button"
          onClick={() => {
            setError('firstName', {
              type: 'custom',
              message: 'Something went wrong'
            })
          }}
        >
          setError
        </button> */}

        {/* Multiple custom error message */}
        {/* <button
          type="button"
          onClick={() => {
            setError('firstName', {
              types: {
                test: 'test went wrong',
                test1: 'test1 went wrong',
              }
            })
          }}
        >
          setError
        </button> */}

        {/* Creating custom error validation */}
        {/* <button type="button"
        onClick={() => {
          setError("customError", {
            type: 'server side',
            message: 'server side error'
          })
        }}>setError</button>
        <br /> */}
        <button type="button"
        onClick={() => {
          setError("firstName", {
            type: 'server side',
            message: 'server side error'
          }, {
            shouldFocus: true,
          })
        }}>setError</button>
        <br />
        {/* <p>{errors.firstName?.types?.test}</p>
        <p>{errors.firstName?.types?.test1}</p> */}
        <p>{errors.customError?.message}</p>
        <br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default App;