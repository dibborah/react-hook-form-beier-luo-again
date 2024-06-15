/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { useForm, useFormState, useWatch } from "react-hook-form";

type FormFields = {
  firstName: string;
  lastName: string;
};

const Controller = ({ control, register, render, name, rules }: any) => {
  const props = register(name, rules);
  const value = useWatch({
    control,
    name,
  })
  const { errors } = useFormState({
    control,
    name,
  })

  console.log('errors', errors);
  return render({
    value,
    onChange: (e: any) => props.onChange({
      target: {
        name,
        value: e.target.value,
      }
    }),
    onBlur: props.onBlur,
    name: props.name,
  })
}

const Input = (props: any) => {
  const [value, setValue] = useState(props.value || '');

  React.useEffect(() => {
    setValue(props.value);
  }, [props.value]);// Asynchronous 'duo' update is done using this useEffect

  return <input
    onChange={(e) => {
      setValue(e.target.value)
      props.onChange && props.onChange(e)
    }}
    value={value}
  />
}
let renderCount = 0;
const App = () => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    // formState: {errors}
  } = useForm<FormFields>({
    defaultValues: {
      firstName: '',
      lastName: 'test',// This is working because of using the useWatch hook
    },
  });

  renderCount++;

  const onSubmit = async (data: FormFields) => {
    console.log(data);
  };
  
  // console.log('errors', errors);

  // setValue('lastName', 'bill');

  React.useEffect(() => {
    setTimeout(() => {
      setValue('lastName', 'duo');// This line or useEffect is woking becuase of the useEffect in <Input /> component
    }, 1000)
  }, [setValue]);
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
        <Controller {...{
          register,
          control,
          rules: {
            required: true
          },
          name: 'lastName',
          render: (props: any) => <Input {...props} />
        }} />
        <br />
        <input type="submit" />
        <br />
      </form>
    </div>
  )
}

export default App;