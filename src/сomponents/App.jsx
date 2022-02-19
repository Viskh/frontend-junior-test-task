import React, { useRef, useState } from "react";
import styles from "./app.module.css";
import animals from "../data.json";
import useOnClickOutside from "../hooks/useOnClickOutside";

const App = () => {
  const ref = useRef();

  const [inputValue, setInputValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddName = (name) => {
    setInputValue(name);
    setOpenModal(false);
  };

  const filtered = animals.filter((animal) => {
    return animal.name.toLowerCase().includes(inputValue.toLowerCase());
  });

  useOnClickOutside(ref, () => setOpenModal(false));

  return (
    <div className={styles.container}>
      <div className={styles.container__form}>
        <input
          onClick={() => setOpenModal(true)}
          onChange={(e) => handleChange(e)}
          value={inputValue}
          type="text"
          className={styles.form__input}
        />
        {inputValue && (
          <div
            onClick={() => setInputValue("")}
            className={styles.input__value__delete}
          >
            ✖️
          </div>
        )}
      </div>

      {openModal && (
        <div className={styles.modal__window} ref={ref}>
          {filtered.map((animal, index) => {
            return (
              <div
                onClick={() => handleAddName(animal.name)}
                className={styles.modal__window__item}
                key={index}
              >
                <p>{animal.name}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default App;
