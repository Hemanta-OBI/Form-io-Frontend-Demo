import React from "react";
const styles = {
  container: { border: "1px solid #003bba62" },
  heading: {
    color: "#003bba",
    textAlign: "center",
    padding: "1rem 0",
    borderBottom: "1px solid #003bba62",
  },
  ul: {
    listStyle: "none",
  },
  label: { textTransform: "capitalize" },
};
const Index = ({ forms, selectedForm, formChangeHandler }) => {
  return (
    <div style={styles.container}>
      <h5 style={styles.heading}>Available Forms</h5>
      <ul style={styles.ul}>
        {forms.map((form) => (
          <li key={form._id} style={styles.li}>
            <input
              type="radio"
              name="form"
              id={form.formName}
              value={form.formName}
              checked={selectedForm === form.formName}
              onChange={(e) => {
                localStorage.setItem("formName", e.target.value);
                formChangeHandler(e.target.value);
              }}
            />{" "}
            &nbsp;
            <label htmlFor={form.formName} style={styles.label}>
              {form.formName}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;
