/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control, useFieldArray, useForm, useWatch } from "react-hook-form";

type FormFields = {
  cart: {
    name: string;
    amount: number;
  }[]
};

const getTotalAmount = (payload: FormFields['cart']) => {
  let total = 0
  for(const item of payload) {
    total = total + (Number.isNaN(item.amount) ? 0 : item.amount);
  }
  return total;
}

const TotolAmount = ({ control }: { control: Control<FormFields> }) => {
  const cartValues = useWatch({
    name: 'cart',
    control,
  })
  console.log('cartValues', cartValues);
  return <p>{getTotalAmount(cartValues)}</p>;
}

let renderCount = 0;
const App = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
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
    rules: {
      required: 'please append at least one field array',
    }
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
        {fields.map((field, index) => {
          return (
            <section key={field.id}>
              <label>
                <span>Name</span>
                <input type="text" {...register(`cart.${index}.name`, { required: true })} />
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
                remove(index)
              }}>Delete</button>
              <hr />
            </section>
          )
        })}
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
        <TotolAmount control={control} />
        <p>
          {errors?.cart?.root?.message}
        </p>
        <input type="submit" />
        <br />
      </form>
    </div>
  )
}

export default App;