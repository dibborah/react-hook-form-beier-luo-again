/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFieldArray, useForm } from "react-hook-form";

type FormFields = {
  cart: {
    name: string;
    amount: number;
  }[]
};

let renderCount = 0;
const App = () => {
  const {
    register,
    handleSubmit,
    control,
  } = useForm<FormFields>({
    defaultValues: {
      cart: [{
        name: '',
        amount: 0,
      }]
    },
  });

  const { fields, append, prepend, remove } = useFieldArray({
    name: 'cart',
    control,
  })

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
        {fields.map((item, index) => {
          return (
            <section key={index}>
              <label>
                <span>Name</span>
                <input type="text" {...register(`cart.${index}.name`)} />
              </label>
              <br />
              <br />
              <label>
                <span>Amount</span>
                <input type="number" {...register(`cart.${index}.amount`, { valueAsNumber: true })} />
              </label>
              <br />
              <br />
              <button type="button" onClick={() => {
                append({
                  name: 'append',
                  amount: 0,
                })
              }}>Append</button>
              <button type="button" onClick={() => {
                prepend({
                  name: 'prepend',
                  amount: 0,
                })
              }}>Prepend</button>
              <button type="button" onClick={() => {
                remove(index)
              }}>Delete</button>
              <hr />
            </section>
          )
        })}
        <br />
        <input type="submit" />
        <br />
      </form>
    </div>
  )
}

export default App;