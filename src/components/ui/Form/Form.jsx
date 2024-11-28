// FormComponent.js
import React from "react";
import FormField from "./FormField";
import Button from "../Button/Button";
import "./Form.scss";
import Card from "../Card/Card";

const Form = ({
  onSubmit,
  label = "Submit",
  title = "Contact Us",
  fields = [
    {
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "Enter your name",
      required: false,
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
      required: true,
    },
    {
      name: "phone",
      label: "Phone Number",
      type: "tel",
      placeholder: "Enter your phone number",
      required: true,
    },
  ],
}) => {
  return (
      <Card title={title}>
        <form className="form-parent" onSubmit={onSubmit}>
          <FormField fields={fields} />
          <Button type="submit" label={label} />
        </form>
      </Card>
  );
};

export default Form;
