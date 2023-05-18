"use client";
import React from "react";
import dynamic from "next/dynamic";

import FormSelector from "../../components/FormSelector";
import { addNewFrom, getForms } from "@/api/api";
import axios from "axios";

const DynamicFormBuilder = dynamic(
  () => import("../../components/FormBuilder/Index.jsx"),
  {
    ssr: false,
    loading: () => (
      <h3 style={{ textAlign: "center", color: "blue", marginTop: "2rem" }}>
        Loading...
      </h3>
    ),
  }
);

const styles = {
  formHeading: {
    width: "100%",
    backgroundColor: "#0086d9",
    textAlign: "center",
    padding: "1rem",
  },
  gridDiv: {
    display: "grid",
    gridTemplateColumns: "80% 20%",
    gap: "2px",
  },
};
const FormBuilder = () => {
  const [loading, setLoading] = React.useState(true);
  const [forms, setForms] = React.useState([]);
  const [selectedFormName, setSelectedFormName] = React.useState("");

  React.useEffect(() => {
    if (navigator) {
      setLoading(false);
    }
  }, []);

  //fetch available forms
  React.useEffect(() => {
    axios({
      method: getForms.method,
      url: getForms.url,
    }).then((res) => {
      setForms(res.data.forms);
    });
  }, []);

  const createNewFormHandler = (formName, components) => {
    axios({
      method: addNewFrom.method,
      url: addNewFrom.url,
      data: { formName: formName, components: components },
    })
      .then((res) => {
        axios({
          method: getForms.method,
          url: getForms.url,
        }).then((res) => {
          setForms(res.data.forms);
        });
        alert("Success");
      })
      .catch((err) => {
        console.log("err", err.response.data.message);
        alert(err.response.data.message);
      });
  };

  const selectFormChangeHandler = (form) => {
    setSelectedFormName(form);
  };

  return (
    <div>
      {loading ? (
        <p>Please wait</p>
      ) : (
        <>
          <div style={styles.formHeading}>
            <h3 style={{ color: "#fff" }}>Form.io</h3>
            <p style={{ color: "#fff" }}>Create Dynamic Forms</p>
          </div>

          <div style={styles.gridDiv}>
            <DynamicFormBuilder
              // formComponentAddHandler={addFormComponentHandler}
              addFormHandler={createNewFormHandler}
            />
            <FormSelector
              forms={forms}
              selectedForm={selectedFormName}
              formChangeHandler={selectFormChangeHandler}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default FormBuilder;
