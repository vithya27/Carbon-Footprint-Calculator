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
      <div className="container">
        <form
          className="well form-horizontal"
          id="form"
          onSubmit={handleSubmit((data) => {
            props.onSave(data);
          })}
        >
          <center>
            <h2>Carbon Emissions Calculator</h2>
          </center>

          <div className="form-group">
            <label htmlFor="activity" className="control-label col-md-4">
              Activity:
            </label>
            <div className="col-md-4 inputGroupContainer">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-plane"></i>
                </span>
                <input
                  className="form-control"
                  placeholder="E.g. Flight from Singapore to Melbourne"
                  {...register("activity", { required: true })}
                  aria-invalid={errors.activity ? "true" : "false"}
                />
              </div>
              {errors.activity?.type === "required" && (
                <p role="alert">The activity is required</p>
              )}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="for" className="control-label col-md-4">
              From:
            </label>
            <div className="col-md-4 inputGroupContainer">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-arrow-right"></i>
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
            <label htmlFor="to" className="control-label col-md-4">
              To:
            </label>
            <div className="col-md-4 inputGroupContainer">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-arrow-left"></i>
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
            <div className="col-md-4">
              <button type="submit" className="btn btn-success">
                Add Flight
              </button>
            </div>
          </div>
        </form>
        <span className="text-muted text-right text-bottom">
          <h6>
            Look up IATA code {""}
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.iata.org/en/publications/directories/code-search"
            >
              here
            </a>
          </h6>
        </span>
      </div>
    </>
  );
};

export default Form;
