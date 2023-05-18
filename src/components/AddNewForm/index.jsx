import React from "react";
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
  },
};
const Index = ({ formHandler }) => {
  const inputRef = React.useRef();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        formHandler(inputRef.current.value);
        inputRef.current.value = "";
      }}
      style={styles.form}
    >
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
  );
};

export default Index;
