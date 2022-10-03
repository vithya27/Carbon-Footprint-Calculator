import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="container">
        <form
          className="well form-horizontal"
          id="form"
          onSubmit={handleSubmit(onSubmit)}
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
      </div>
    </>
  );
};

export default Form;
