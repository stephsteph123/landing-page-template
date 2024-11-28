import React from "react";

export default function FormField({ fields }) {
  return (
    <>
      {fields.map((item, index) => (
        <div className="form-field" key={`${item.name} ${index}`}>
          {item.label && <label className="form-label" htmlFor={item.name}>{item.label}</label>}
          <input
            id={item.name}
            type={item.type}
            value={item.value}
            name={item.name}
            placeholder={item.placeholder}
            onChange={item.onChange}
            className={`form-input ${item.error ? "form-input-error" : ""}`}
          />
          {item.error && <span className="form-error">{item.error}</span>}
        </div>
      ))}
    </>
  );
}
