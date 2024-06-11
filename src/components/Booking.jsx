"use client";

import { Toast } from "@/utils/Toast";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const BookingSchema = Yup.object().shape({
  carType: Yup.string().required("Required"),
  pickUpDate: Yup.date().required("Required").nullable(),
  pickUpLocation: Yup.string().required("Required"),
  dropOffDate: Yup.date().required("Required").nullable(),
  useDriver: Yup.boolean().required("Required"),
});

export default function Booking() {
  const initialFormData = {
    carType: "",
    pickUpDate: "",
    pickUpLocation: "",
    dropOffDate: "",
    useDriver: false,
  };

  return (
    <section className="p-4 py-16 md:px-14">
      <div className="">
        <article className="space-y-4 md:max-w-[50%]">
          <h1 className="text-4xl font-bold text-mainColor">
            Booking schedule
          </h1>
          <p className="font-medium leading-5 text-secondaryTextGray">
            Simplify your travel plans with our easy booking schedule. Secure
            your ride hassle-free, ensuring a smooth journey ahead.
          </p>
        </article>

        <Formik
          initialValues={initialFormData}
          validationSchema={BookingSchema}
          onSubmit={(_, { resetForm }) => {
            Toast.fire({
              icon: "success",
              title: "Please check your email for further instructions",
            });
            resetForm();
          }}>
          {() => (
            <Form className="my-6 grid grid-cols-2 items-end justify-end gap-2 md:grid-cols-3">
              <div className="flex flex-col">
                <label
                  htmlFor="carType"
                  className="font-medium text-mainColor flex justify-between items-center">
                  <span>Car Type</span>
                  <ErrorMessage
                    name="carType"
                    component="div"
                    className="text-red-700"
                  />
                </label>
                <Field
                  as="select"
                  name="carType"
                  id="carType"
                  className="h-[50px] w-full border border-mainColor p-2 text-mainColor focus:outline-none">
                  <option value="" disabled>
                    Select your car type
                  </option>
                  <option value="bmw5series">BMW 5 Series</option>
                  <option value="bmw320i">BMW 320i</option>
                  <option value="bmwx3">BMW X3</option>
                  <option value="SUV">Lexus RX 300</option>
                  <option value="VOXY">TOYOTA VOXY</option>
                  <option value="daihatsuayla">Daihatsu Ayla</option>
                </Field>
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="pickUpDate"
                  className="font-medium text-mainColor flex justify-between items-center">
                  <span>Pick Up Date</span>
                  <ErrorMessage
                    name="pickUpDate"
                    component="div"
                    className="text-red-500"
                  />
                </label>
                <Field
                  type="date"
                  name="pickUpDate"
                  id="pickUpDate"
                  className="h-[50px] w-full border border-mainColor p-2 text-mainColor focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="pickUpLocation"
                  className="font-medium text-mainColor flex justify-between items-center">
                  <span>Pick Up Location</span>
                  <ErrorMessage
                    name="pickUpLocation"
                    component="div"
                    className="text-red-500"
                  />
                </label>
                <Field
                  type="text"
                  name="pickUpLocation"
                  id="pickUpLocation"
                  placeholder="Pick Location"
                  className="placeholder-orange h-[50px] w-full border border-mainColor p-2 text-mainColor placeholder:text-mainColor focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="dropOffDate"
                  className="font-medium text-mainColor flex justify-between items-center">
                  <span>Drop Off Date</span>
                  <ErrorMessage
                    name="dropOffDate"
                    component="div"
                    className="text-red-500"
                  />
                </label>
                <Field
                  type="date"
                  name="dropOffDate"
                  id="dropOffDate"
                  className="h-[50px] w-full border border-mainColor p-2 text-mainColor focus:outline-none"
                />
              </div>

              <button className="col-span-2 h-[50px] w-full cursor-pointer border border-mainColor p-2 font-medium text-mainColor hover:bg-mainColor hover:text-white focus:outline-none">
                Submit
              </button>

              <div className="flex items-center justify-start pl-1">
                <Field
                  type="checkbox"
                  name="useDriver"
                  id="useDriver"
                  className="accent-orange scale-150 text-white"
                />
                <label
                  htmlFor="useDriver"
                  className="ml-2 font-medium text-mainColor">
                  Use our driver
                </label>
                <ErrorMessage
                  name="useDriver"
                  component="div"
                  className="text-red-500"
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}
