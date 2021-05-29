import React from 'react';
import { useForm } from 'react-hook-form';


function Login(props) {

  let { register, handleSubmit, formState: { errors } } = useForm();

  const onSubForm = (bodyData) => {
    console.log(bodyData);
  }

  let emailRef = register("email", {
    required: true,
    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  })
  let passwordRef = register("password", { required: true, minLength: 3 });

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubForm)} className="col-lg-6 mx-auto shadow p-3 rounded">
        <div>
          <label>Email:</label>
          <input {...emailRef} type="text" className="form-control" />
          {errors.email && <span className="text-danger">Enter valid email</span>}
        </div>
        <div>
          <label>Password:</label>
          <input {...passwordRef} type="text" className="form-control" />
          {errors.password && <span className="text-danger">Enter min 3 charts password</span>}
        </div>
        <button className="btn btn-info mt-3">Sign up</button>
      </form>
    </div>
  )
}

export default Login