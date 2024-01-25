import { useState } from "react";
import { useForm } from "react-hook-form";
import { object, string, number, date, InferType } from "yup";
import { useLoginUserMutation } from "../services/api";

type formValue = {
  email: string;
  password: string;
};

const Login = () => {
  const form = useForm<formValue>();
  const [err, setErr] = useState<string>("");
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
          console.log("data", payload);
        } catch (error) {
          console.log("error", error);
        }
      })
      .catch((err) => {
        console.log("error", err);
        setErr(err);
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
      {err && <p>{err}</p>}
    </div>
  );
};

export default Login;
