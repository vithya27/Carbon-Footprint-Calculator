import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const Form = (props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm({ defaultValues: { distance: "" } });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset("", { keepValues: false });
    }
  }, [formState, reset]);

  return (
    <>
      <div className="col-md-6">
        <br />
        <form
          className="well form-horizontal"
          id="form"
          onSubmit={handleSubmit((data) => {
            props.onSave(data);
          })}
        >
          <center>
            <h2 className="formTitle">Rail Travel</h2>
          </center>
          <div className="form-group">
            <label htmlFor="distance" className="control-label col-md-2">
              Distance:
            </label>
            <div className="col-md-10 inputGroupContainer">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="fas fa-train"></i>
                </span>
                <input
                  className="form-control"
                  placeholder="Enter the distance between stations"
                  {...register("distance", {
                    required: true,
                    valueAsNumber: true,
                    validate: (value) => value > 0,
                  })}
                  aria-invalid={errors.distance ? "true" : "false"}
                />
              </div>
              {errors.distance && errors.distance?.type === "required" && (
                <p role="alert">The distance field is required.</p>
              )}
              {errors.distance && errors.distance?.type === "validate" && (
                <p role="alert">The distance field requires a number.</p>
              )}
            </div>
          </div>
          <div className="form-group">
            <div className="buttonHolder">
              <button type="submit" className="btn">
                Add Rail Travel
              </button>
            </div>
          </div>{" "}
        </form>
      </div>
    </>
  );
};

export default Form;
