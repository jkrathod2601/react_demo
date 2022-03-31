import React from "react";
import { useForm } from "react-hook-form";

const Aform = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} placeholder="firstname" />
      <input
        {...register("lastName", { required: true })}
        placeholder="lastname"
      />
      {errors.lastName && <p>Last name is required.</p>}
      <input {...register("age", { pattern: /\d+/ })} placeholder="age" />
      {errors.age && <p>Please enter number for age.</p>}
      <input type="submit" />
    </form>
  );
};

export default Aform;
