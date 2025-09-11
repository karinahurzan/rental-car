import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import css from "./BookingForm.module.css";
import "react-datepicker/dist/react-datepicker.css";
import clsx from "clsx";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const initialValues = {
  name: "",
  email: "",
  bookingDate: "",
  comment: "",
};

const bookingSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too short!")
    .max(16, "Too long!")
    .required("Required"),
  email: Yup.string()
    .email("Must be a valid email!")
    .max(128, "Too long!")
    .required("Required"),
  bookingDate: Yup.date(),
  comment: Yup.string(),
});

export default function BookingForm() {
  const [calendarOpen, setCalendarOpen] = useState(false);

  return (
    <div className={css.formContainer}>
      <h3 className={css.title}>Book your car now</h3>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik initialValues={initialValues} validationSchema={bookingSchema}>
        {({ values, setFieldValue, errors, touched }) => (
          <Form className={css.form}>
            <Field
              className={css.input}
              type="text"
              name="name"
              placeholder="Name*"
            />
            <Field
              className={css.input}
              type="email"
              name="email"
              placeholder="Email*"
            />
            {/* <Field
              className={css.input}
              type="date"
              name="date"
              placeholder="Booking date"
            />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DateCalendar", "DateCalendar"]}>
                <DemoItem label="readOnly">
                  <DateCalendar defaultValue={dayjs("2022-04-17")} readOnly />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider> */}

            <Box
              sx={{
                position: "relative",
                width: "100%",
              }}
            >
              <TextField
                className={css.input}
                name="date"
                placeholder="Booking date"
                value={
                  values.date ? dayjs(values.date).format("YYYY-MM-DD") : ""
                }
                onClick={() => setCalendarOpen(!calendarOpen)}
                readOnly
                error={touched.date && Boolean(errors.date)}
                helperText={touched.date && errors.date}
                fullWidth
              />

              {calendarOpen && (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Box sx={{ position: "absolute", zIndex: 10, mt: 1 }}>
                    <DateCalendar
                      value={values.date ? dayjs(values.date) : null}
                      onChange={(newValue) => {
                        setFieldValue(
                          "date",
                          newValue ? newValue.toISOString() : ""
                        );
                        setCalendarOpen(false);
                      }}
                    />
                  </Box>
                </LocalizationProvider>
              )}
            </Box>

            <Field
              className={clsx(css.textarea, css.input)}
              as="textarea"
              name="comment"
              placeholder="Comment"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}
