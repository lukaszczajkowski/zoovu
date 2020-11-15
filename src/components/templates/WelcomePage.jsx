//React core
import React from "react";

//React-router-dom
import { Link } from "react-router-dom";
//Recoil
import { useRecoilState } from "recoil";

//Formik import
import { Formik, useFormik } from "formik";

import { nameState } from "../../js/name";

export default function WelcomePage() {

  const [name, setName] = useRecoilState(nameState);

  const formik = useFormik({
    initialValues: {
      userName: "",
    },
    validate,
    onChange: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  /**
   * Validates the user input against the empty field
   * @param {String} values from the Formik form
   * @returns {String} array of errors
   */
  function validate(values) {
    let errors = {};
    if (!values.userName) {
      errors.userName = "The name field cannot be empty";
    }
    return errors;
  }

  const onChange = (event) => {
      setName(event.target.value);
  }

  return (
    <div className="welcome-page">
      <div className="greeting">Hello friend, tell me your name...</div>
        <input type="text" value = {name} onChange = {onChange}/>
        <Link className="buttons" to="/game">
          Let's go...
        </Link>
    </div>
  );
}
