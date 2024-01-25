import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { object, string, number, date, InferType } from "yup";
type formValue = {
  username: string;
  email: string;
  age: number;
  password: string;
};

const Register = () => {
  const form = useForm<formValue>();
  const [err, setErr] = useState<string>('');
  const { register, handleSubmit } = form;

  //   const { name, ref, onChange, onBlur } = register("username");

  const schema = object({
    username: string().required(),
    age: number().required().positive().integer(),
    email: string().email(),
    password: string().required().min(8),
  });

  const onSubmit = (data: formValue) => {
    const userData = schema.validate(data);

    userData
      .then((data) => console.log(data))
      .catch((error) => {
        console.log("error", err);
        setErr(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">UserName</label>
        <input
          type="text"
          id="username"
          //   name={name}
          //   ref={ref}
          //   onChange={onChange}
          //   onBlur={onBlur}
          {...register("username")}
        />

        <label htmlFor="email">UserEmail</label>
        <input type="email" id="email" {...register("email")} />

        <label htmlFor="age">age</label>
        <input type="number" id="age" {...register("age")} />

        <label htmlFor="email">Password</label>
        <input type="password" id="password" {...register("password")} />

        <button type="submit">Submit</button>
        <p>{err}</p>
      </form>
    
    </div>
  );
};

export default Register;
