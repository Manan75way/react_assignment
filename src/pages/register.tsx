import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { object, string, number } from "yup";
import { useRegisterNewUserMutation } from "../services/api";
type formValue = {
  username: string;
  email: string;
  age: number;
  password: string;
};

const Register = () => {
  const form = useForm<formValue>();
  const { register, handleSubmit } = form;
  const [userRegister] = useRegisterNewUserMutation();
  //   const { name, ref, onChange, onBlur } = register("username");

  const schema = object({
    username: string().required(),
    age: number().required().positive().integer(),
    email: string().email().required(),
    password: string().required().min(8),
  });

  const onSubmit = async (data: formValue) => {
    const userData = schema.validate(data);

    userData
      .then(async (datas) => {
        console.log(datas);

        try {
          const payload = await userRegister(datas).unwrap();
          console.log('fulfilled', payload)
        } catch (error) {
          console.error('rejected', error);
        }
      })
      .catch((error) => {
        console.log("error", error);
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
      </form>
    </div>
  );
};

export default Register;
