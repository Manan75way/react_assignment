import { useState } from "react";
import { useForm } from "react-hook-form";
import { object, string } from "yup";
import { useLoginUserMutation } from "../services/api";
import { useAppDispatch } from "../store/store";
import { userLogin } from "../store/reducers/userReducer";

type formValue = {
  email: string;
  password: string;
};

const Login = () => {
  const form = useForm<formValue>();
  const dispatch = useAppDispatch();

  const { register, handleSubmit } = form;
  const [loginUser] = useLoginUserMutation();

  const schema = object({
    email: string().email().required(),
    password: string().required().min(8),
  });

  const onSubmit = (data: formValue) => {
    const userData = schema.validate(data);

    userData
      .then(async (datas) => {
        console.log(datas);
        try {
          const payload = await loginUser(datas).unwrap();
          console.log(payload.users.username);

          const actionData = {
            name: payload.users.username,
            email: payload.users.email,
            token: payload.token,
          };
          localStorage.setItem("user", JSON.stringify(actionData));
          dispatch(userLogin(actionData));
        } catch (error) {
          console.log("error", error);
        }
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">UserEmail</label>
        <input type="email" id="email" {...register("email")} />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" {...register("password")} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
