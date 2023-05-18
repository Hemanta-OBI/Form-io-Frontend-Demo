"use client";
import React from "react";

import { Form } from "@formio/react";
import { getForms } from "../../api/api";
import axios from "axios";

const RegistrationForm = () => {
  const [loading, setLoading] = React.useState(true);
  const [jsons, setJsons] = React.useState([]);
  React.useEffect(() => {
    axios({ method: getForms.method, url: getForms.url })
      .then((res) => {
        console.log("res", res);
        setJsons(res.data.forms);
        setLoading(false);
      })
      .catch((err) => {
        console.log("err", err);
        setLoading(false);
      });
  }, []);
  // const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    if (navigator) {
      setLoading(false);
    }
  }, []);
  // console.log("loading", loading);
  if (loading) {
    return (
      <h3 style={{ textAlign: "center", marginTop: "2rem" }}>Please wait...</h3>
    );
  }
  return (
    <>
      {jsons.map((json) => (
        <div
          key={json._id}
          style={{
            margin: "1rem",
            padding: "1rem",
            borderRadius: "4px",
            border: "1px solid #0086d9",
          }}
        >
          <h4 style={{ backgroundColor: "#0086d9", padding: "1rem" }}>
            {json.formName}
          </h4>
          <Form
            form={json}
            onSubmit={(e) => {
              console.log("e", e);
            }}
          />
        </div>
      ))}
    </>
  );
};

export default RegistrationForm;
