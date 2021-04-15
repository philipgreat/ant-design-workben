
import styles from './materialhookform.css';
import React, { useEffect } from "react";
import { TextField, Select, MenuItem } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";

const defaultValues = {
  select: "",
  input: ""
};

function App() {
  const { register, handleSubmit, reset, watch, control } = useForm({ defaultValues });
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        render={
          ({ field }) => <Select {...field}>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
          </Select>
        }
        control={control}
        {...register('select')}
        defaultValue={10}
      />
      <Controller render={({ field }) => <TextField {...field}/>} control={control}
        {...register('input.0.name')}
        defaultValue={""}
      />
      <Controller render={({ field }) => <TextField {...field}/>} control={control}
        {...register('input.0.age')}
        defaultValue={""}
      />
     

      <button type="button" onClick={() => reset({ defaultValues })}>Reset</button>
      <input type="submit" />
    </form>
  );
}
export default function() {
  return (
    <div className={styles.normal}>
      <App>Page materialhookform</App>
    </div>
  );
}
