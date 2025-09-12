import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./BookingForm.module.css";
import clsx from "clsx";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../../utils/theme";

const initialValues = {
  name: "",
  email: "",
  bookingDate: null,
  comment: "",
};

const bookingSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name is too short")
    .max(16, "Name is too long")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email")
    .max(128, "Email is too long")
    .required("Email is required"),
  bookingDate: Yup.date().nullable(),
  comment: Yup.string(),
});

export default function BookingForm() {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={css.formContainer}>
        <h3 className={css.title}>Book your car now</h3>
        <p className={css.text}>
          Stay connected! We are always ready to help you.
        </p>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={bookingSchema}
        >
          {({ values, setFieldValue, touched, errors }) => (
            <Form className={css.form}>
              <Field
                className={css.input}
                type="text"
                name="name"
                placeholder="Name*"
              />
              <div className={css.error}>
                <ErrorMessage name="name" />
              </div>
              <Field
                className={css.input}
                type="email"
                name="email"
                placeholder="Email*"
              />
              <div className={css.error}>
                <ErrorMessage name="email" />
              </div>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                  label="Booking date"
                  value={values.bookingDate}
                  onChange={(newValue) =>
                    setFieldValue("bookingDate", newValue)
                  }
                  slotProps={{
                    textField: {
                      placeholder: "Booking date",
                    },
                  }}
                />
                <div className={css.error}>
                  {touched.bookingDate && errors.bookingDate
                    ? errors.bookingDate
                    : ""}
                </div>
              </LocalizationProvider>

              <Field
                className={clsx(css.textarea, css.input)}
                as="textarea"
                name="comment"
                placeholder="Comment"
              />
              <div className={css.error}>
                <ErrorMessage name="comment" />
              </div>

              <button className={css.button} type="submit">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </ThemeProvider>
  );
}
