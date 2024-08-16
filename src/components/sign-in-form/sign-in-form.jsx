import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

const SignIn = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <Form className="form">
            <h3 className="form__title">Login</h3>
            <div className="form__field">
              <Field
                className={`form__input ${
                  errors.email && touched.email ? "form__input--invalid" : ""
                }`}
                placeholder="Email address"
                name="email"
              />
              <label
                className={`form__label ${
                  errors.email && touched.email ? "form__label--hidden" : ""
                }`}
              >
                Email address
              </label>
              {errors.email && touched.email ? (
                <div className="form__error">{errors.email}</div>
              ) : null}
            </div>
            <div className="form__field">
              <Field
                className={`form__input ${
                  errors.email && touched.email ? "form__input--invalid" : ""
                }`}
                placeholder="Password"
                name="password"
              />
              <label
                className={`form__label ${
                  errors.password && touched.password
                    ? "form__label--hidden"
                    : ""
                }`}
              >
                Password
              </label>
              {errors.password && touched.password ? (
                <div className="form__error">{errors.password}</div>
              ) : null}
            </div>
            <button className="btn" type="submit">
              Submit &rarr;
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignIn;

{
  /* <fieldset className="form__field">
          <legend className="form__field-name">Email</legend>
          <input className="form__email" type="email" />
        </fieldset>
        <fieldset className="form__field">
          <legend className="form__field-name">Password</legend>
          <input className="form__password" type="password" />
        </fieldset>
        <button className="form__btn">Submit</button> */
}
