//React core
import React, { useState } from 'react';

//React-router-dom
import { Link } from 'react-router-dom';
//Recoil
import { useRecoilState } from 'recoil';
import { RecoilRoot }from 'recoil';

//Formik import
import { useFormik } from "formik";

import { nameState } from '../../js/name';

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


    return (
        <div className = "welcome-page">
            <div className = "greeting">
                Hello friend, tell me your name...
            </div>
            <input
                onChange={formik.handleChange}
                placeholder="Your name here"
                name= "userName"
                type="text"
          value={formik.values.name}
          className="input-field"
        />
      {formik.errors.id ? (
        <div className="errors">{formik.errors.id}</div>
      ) : null}
      {formik.values.id === "" ? (
        <button className="buttons" onClick = {() => setName(formik.values.name)}>Let's go...</button>
      ) : (
        <Link className="buttons" to= "/game">
          Let's go...
        </Link>
        )}
        </div>
    );
}

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

 
