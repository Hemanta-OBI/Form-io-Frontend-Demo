"use client";
import React from "react";
import { Form, FormBuilder } from "@formio/react";
import axios from "axios";
import { addFormComponentApi, removeFormComponentApi } from "../../api/api";
const styles = {
  form: {
    // width: "100%",
    backgroundColor: "#cfe5f4",
    textAlign: "center",
    padding: "1rem",
    borderRadius: "4px",
    // margin: ".5rem 1rem",
    display: "flex",
    justifyContent: "center",
    marginBottom: "6px",
  },
  formInput: {
    minWidth: "100px",
    flex: 1,
    border: "1px solid #035c97",
    borderRadius: "4px",
  },
  formButton: {
    border: "1px solid #035c97",
    color: "#035c97",
    borderRadius: "4px",
    marginLeft: "2px",
    minWidth: "120px",
    fontWeight: 500,
    backgroundColor:"#fdd72f"
  },
};
const Index = ({ addFormHandler }) => {
  const [jsonSchema, setSchema] = React.useState({ components: [] });
  const inputRef = React.useRef();
  const onFormChange = (schema) => {
    setSchema({ ...schema, components: [...schema.components] });
    // console.log("onChange schema", schema);
  };

  const deleteHandler = (e) => {
    console.log("jsonSchema", jsonSchema);

    console.log("e", e);
    axios({
      method: removeFormComponentApi.method,
      url: removeFormComponentApi.url,
      data: {
        formName: "registration",
        key: e.key,
      },
    })
      .then(() => {
        alert("success");
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let formName = inputRef.current.value;
    if (!formName) {
      alert("Enter form name");
      return;
    }
    let components = jsonSchema.components.map((component) => {
      return {
        label: component.label,
        labelPosition: component.labelPosition,
        inputType: component.inputType,
        inputFormat: component.inputFormat,
        inputMask: component.inputMask,
        key: component.key,
        placeholder: component.placeholder,
        validate: component.validate,
        validateOn: component.validateOn,
        prefix: component.prefix,
        type: component.type,
        mask: component.mask,
        autofocus: component.autofocus,
        autocomplete: component.autocomplete,
        disabled: component.disabled,
        description: component.description,
        errorLabel: component.errorLabel,
        errors: component.errors,
        hidden: component.hidden,
        hideLabel: component.hideLabel,
        customClass: component.customClass,
        modalEdit: component.modalEdit,
        values: component.values,
        defaultValue: component.defaultValue,
        data: component.data,
        action: component.action,
      };
    });
    addFormHandler(formName, components);
    inputRef.current.value = "";
  };
  return (
    <div>
      <form onSubmit={submitHandler} style={styles.form}>
        <input
          type="text"
          name="formName"
          id="formName"
          placeholder="Enter Form Name"
          style={styles.formInput}
          ref={inputRef}
        />
        <button type="submit" style={styles.formButton}>
          Create Form
        </button>
      </form>
      <FormBuilder
        form={jsonSchema}
        onChange={onFormChange}
        // onSaveComponent={saveHandler}
        // onEditComponent={(e) => {
        //   console.log("onEditComponent", e);
        // }}
        // onDeleteComponent={deleteHandler}
        // onUpdateComponent={(e) => {
        //   console.log("onUpdateComponent", e);
        // }}
      />
    </div>
  );
};

export default Index;
