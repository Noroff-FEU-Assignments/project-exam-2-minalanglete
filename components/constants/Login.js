import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { TOKEN } from "./apiLogin";
import FormError from "../common/FormError";

const url = TOKEN;

const schema = yup.object().shape({
  username: yup.string().required("Please enter your username"),
  password: yup.string().required("Please enter your password"),
});

export default function LoginForm() {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);

    console.log(data);

    try {
      const response = await axios.post(url, data);
      console.log("response", response.data);
    } catch (error) {
      console.log("error", error);
      setLoginError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {loginError && <FormError>{loginError}</FormError>}
        <fieldset disabled={submitting}>
          <div>
            <input name="username" placeholder="Username" ref={register} />
            {errors.username && <FormError>{errors.username.message}</FormError>}
          </div>

          <div>
            <input name="password" placeholder="Password" ref={register} type="password" />
            {errors.password && <FormError>{errors.password.message}</FormError>}
          </div>
          <button>{submitting ? "Loggin in..." : "Login"}</button>
        </fieldset>
      </form>
    </>
  );
}
