
import styles from './reacthookform.css';


import React from 'react';
import { useForm } from 'react-hook-form';

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log("data",data,"err",errors);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="First name"  size={80} {...register("name",{ maxLength: { value: 2, message: "error message" } })} />
      
      
    </form>
  );
}

export default function() {
  return (
    <div className={styles.normal}>
      <App>Page reacthookform</App>
    </div>
  );
}
/*


function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="First name" name="First name" ref={...register({required: true, maxLength: 80})} />
      <input type="text" placeholder="Last name" name="Last name" ref={...register({required: true, maxLength: 100})} />
      <input type="text" placeholder="Email" name="Email" ref={...register({required: true, pattern: /^\S+@\S+$/i})} />
      <input type="tel" placeholder="Mobile number" name="Mobile number" ref={...register({required: true, minLength: 6, maxLength: 12})} />
      <select name="Title" ref={...register({ required: true })}>
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
        <option value="Dr">Dr</option>
      </select>

      <input name="Developer" ref={...register({ required: true })}type="radio" value="Yes" />
      <input name="Developer" ref={...register({ required: true })}type="radio" value="No" />

      <input type="submit" />
    </form>
  );
}



*/