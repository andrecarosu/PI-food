import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getDietTypes, addRecipe } from "../../redux/actions";
import style from "./Form.module.css";

function validate(input) {
  const errors = {};
  if (!input.name) errors.name = "Please complete with a recipe name";
  if (!input.summary)
    errors.summary = "Please add some comments about your recipe";
  if (input.score < 1 || input.score > 100)
    errors.score = "The score must be a number between 1 and 100";
  if (input.healthScore < 1 || input.healthScore > 100)
    errors.healthScore = "The score must be a number between 1 and 100";
  if (!input.steps.length)
    errors.steps = "Please detail the steps for your recipe";
  if (!input.diets.length)
    errors.diets = "You must select at least one diet type";
  return errors;
}

export default function AddRecipe() {
  const dispatch = useDispatch();
  const dietTypes = useSelector(state => state.dietTypes);
  const history = useHistory();
  const [errors, setErrors] = useState({});

  const [stepNumber, setStepNumber] = useState(1);
  const [stepText, setStepText] = useState("");

  const handleAddStep = () => {
    setInput({
      ...input,
      steps: [...input.steps, { number: stepNumber, step: stepText }],
    });
    setStepNumber(stepNumber + 1);
    setStepText("");
  };

  const handleRemoveStep = () => {
    setInput({ ...input, steps: input.steps.slice(0, -1) });
    setStepNumber(stepNumber - 1);
  };

  const [input, setInput] = useState({
    name: "",
    image: "",
    summary: "",
    healthScore: "",
    steps: [],
    diets: [],
  });

  useEffect(() => {
    dispatch(getDietTypes());
  }, [dispatch]);

  function handleChange(e) {
    e.preventDefault();
    setInput(prevInput => {
      const newInput = {
        ...prevInput,
        [e.target.name]: e.target.value,
      };
      const validations = validate(newInput);
      setErrors(validations);
      return newInput;
    });
  }

  function handleCheckBox(e) {
    let newArray = input.diets;
    let find = newArray.indexOf(e.target.value);

    if (find >= 0) {
      newArray.splice(find, 1);
    } else {
      newArray.push(e.target.value);
    }

    setInput({
      ...input,
      diets: newArray,
    });
    const validations = validate(input);
    setErrors(validations);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (Object.values(errors).length > 0) {
      alert("Please complete the information required");
    } else if (
      input.name === "" &&
      input.image === "" &&
      input.summary === "" &&
      input.healthScore === "" &&
      // input.steps === '' &&
      !input.diets.length
    ) {
      alert("Please complete the form");
    } else {
      dispatch(addRecipe(input));
      alert("New recipe added successfully!");
      setInput({
        name: "",
        image: "",
        summary: "",
        healthScore: "",
        steps: [],
        diets: [],
      });
      history.push("/home");
    }
  }

  return (
    <div className={style.addRecipe}>
      <h1 className={style.msg}>Creat your own recipe!</h1>
      <form onSubmit={e => handleSubmit(e)}>
        <div className={style.form}>
          <div className={style.prettierForm}>
            <div className={style.nameInput}>
              <label className={style.msg}>Name:</label>
              <input
                className={style.input}
                name="name"
                type="text"
                value={input.name}
                onChange={e => handleChange(e)}
              />
              {errors.name && (
                <span className={style.errors}>{errors.name}</span>
              )}
            </div>
            <div className={style.nameInput}>
              <label className={style.msgs}>Image:</label>
              <input
                name="image"
                type="text"
                value={input.image}
                onChange={e => handleChange(e)}
              />
              {errors.image && (
                <span className={style.errors}>{errors.image}</span>
              )}
            </div>
            <div className={style.nameInput}>
              <label className={style.msgs}>Summary:</label>
              <textarea
                name="summary"
                type="text"
                rows="4"
                cols="30"
                value={input.summary}
                onChange={e => handleChange(e)}
              />
              {errors.summary && (
                <span className={style.errors}>{errors.summary}</span>
              )}
            </div>

            <div className={style.nameInput}>
              <label className={style.msgs}>Health Score:</label>
              <input
                name="healthScore"
                type="number"
                value={input.healthScore}
                onChange={e => handleChange(e)}
              />
              {errors.healthScore && (
                <span className={style.errors}>{errors.healthScore}</span>
              )}
            </div>

            <div className={style.nameInput}>
              <label htmlFor="stepText">Step Text:</label>
              <input
                type="text"
                id="stepText"
                value={stepText}
                onChange={e => setStepText(e.target.value)}
              />
              <br />
              <div>
                <button
                  type="button"
                  onClick={handleAddStep}
                  className={style.submitButton}
                >
                  Add Step
                </button>
                <button
                  type="button"
                  onClick={handleRemoveStep}
                  className={style.submitButton}
                >
                  Remove Step
                </button>
              </div>
              <ul>
                {input.steps.map(step => (
                  <li key={step.number}>
                    Step {step.number}: {step.step}
                  </li>
                ))}
              </ul>
            </div>

            <div className={style.checkSelect}>
              <label className={style.msgs}>Diet Types:</label>
              {dietTypes.map(d => {
                return (
                  <div key={d} className={style.checks}>
                    <label className={style.dietTypes}>{d}</label>
                    <input
                      className={style.checks}
                      type="checkbox"
                      name={d}
                      value={d}
                      selected={input.diets.includes(d)}
                      onChange={e => handleCheckBox(e)}
                    />
                  </div>
                );
              })}
              {errors.diets && (
                <span className={style.errors}>{errors.diets}</span>
              )}
            </div>
          </div>
        </div>
        <button className={style.submitButton} type="submit">
          Submit Recipe
        </button>
        <Link to="/home">
          <button className={style.goBackButton}>Go back</button>
        </Link>
      </form>
    </div>
  );
}
