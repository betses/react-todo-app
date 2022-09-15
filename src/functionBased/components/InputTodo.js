import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

const InputTodo = (props) => {
  const [inputText, setInputText] = useState({
    title: "",
  });

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentProps = props;
    const validate = document.querySelector(".validate");
    const input = document.querySelector(".form-container");

    if (inputText.title.trim()) {
      currentProps.addTodoProps(inputText.title);
      setInputText({
        title: "",
      });
      validate.style.display = "none";
      input.style.border = "none";
    } else {
      validate.style.display = "block";
      validate.innerHTML = "Please enter a task ";
      input.style.border = "1px solid red";
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add todo..."
          value={inputText.title}
          name="title"
          onChange={onChange}
        />
        <button className="input-submit" type="submit">
          <FaPlusCircle
            style={{ color: "darkcyan", fontSize: "20px", marginTop: "2px" }}
          />
        </button>
      </form>
      <p className="validate" style={{ color: "red", fontSize: "20px" }} />
    </>
  );
};

export default InputTodo;
