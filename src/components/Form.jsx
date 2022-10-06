import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const Form = (props) => {
  const {
    // register an input field into React Hook Form so that it is available for the validation, and its value can be tracked for changes.
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm({ defaultValues: { activity: "", from: "", to: "" } });

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
            <h2 className="formTitle">Air Travel</h2>
          </center>
          <div className="form-group">
            <label htmlFor="for" className="control-label col-md-2">
              From:
            </label>
            <div className="col-md-10 inputGroupContainer">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="fas fa-plane-departure"></i>
                </span>
                <input
                  className="form-control"
                  placeholder="Enter an IATA code for the airport"
                  {...register("from", {
                    required: true,
                    minLength: 3,
                    maxLength: 3,
                  })}
                  aria-invalid={errors.from ? "true" : "false"}
                />
              </div>
              {errors.from && errors.from?.type === "required" && (
                <p role="alert">The from field is required.</p>
              )}
              {errors.from && errors.from?.type === "minLength" && (
                <p role="alert">
                  The from field requires a three letter IATA code for your
                  airport.
                </p>
              )}

              {errors.from && errors.from?.type === "maxLength" && (
                <p role="alert">
                  The from field requires a three letter IATA code for your
                  airport.
                </p>
              )}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="to" className="control-label col-md-2">
              To:
            </label>
            <div className="col-md-10 inputGroupContainer">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="fas fa-plane-arrival"></i>
                </span>
                <input
                  className="form-control"
                  placeholder="Enter an IATA code for the airport"
                  {...register("to", {
                    required: true,
                    minLength: 3,
                    maxLength: 3,
                  })}
                  aria-invalid={errors.to ? "true" : "false"}
                />
              </div>
              {errors.to && errors.to?.type === "required" && (
                <p role="alert">The to field is required.</p>
              )}
              {errors.to && errors.to?.type === "minLength" && (
                <p role="alert">
                  The to field requires a three letter IATA code for your
                  airport.
                </p>
              )}

              {errors.to && errors.to?.type === "maxLength" && (
                <p role="alert">
                  The to field requires a three letter IATA code for your
                  airport.
                </p>
              )}
            </div>
          </div>
          <div className="form-group">
            <div className="buttonHolder">
              <button type="submit" className="btn">
                Add Flight
              </button>
            </div>
          </div>{" "}
          <span className="text-muted text-right text-bottom">
            <h6>
              Look for the airport's IATA code {""}
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.iata.org/en/publications/directories/code-search"
              >
                here
              </a>
            </h6>
          </span>
        </form>
      </div>
    </>
  );
};

export default Form;
