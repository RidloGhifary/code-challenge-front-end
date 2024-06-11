import { Mail } from "lucide-react";
import { PhoneCall } from "lucide-react";
import { Form, Field, ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import { Toast } from "@/utils/Toast";

const SubscriptionSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
});

export default function Footer() {
  return (
    <footer className="p-4 py-16 md:px-14">
      <div className="mx-auto grid max-w-[1240px] gap-16 sm:grid-cols-2 md:grid-cols-4">
        <article className="md:col-span-2">
          <h1 className="text-4xl font-semibold text-mainColor">Car Rental</h1>
          <p className="my-3 font-normal text-secondaryTextGray">
            We offer a big range of vehicles for all your driving needs. We have
            the perfect car to meet your needs.
          </p>
          <div className="mt-6 flex items-center gap-4 font-medium text-mainColor">
            <PhoneCall size={28} color="#f4791f" />
            <span>(123)-123-456</span>
          </div>
          <div className="flex items-center gap-4 font-medium text-mainColor">
            <Mail size={28} color="#f4791f" />
            <span>carRental@gmail.com</span>
          </div>
        </article>

        <article className="text-left text-secondaryTextGray">
          <h1 className="text-3xl font-bold text-black">Company</h1>
          <ul className="mt-3 space-y-3">
            <li className="hover:underline">Jakarta</li>
            <li className="hover:underline">Malaysia</li>
            <li className="hover:underline">Singapore</li>
            <li className="hover:underline">Australia</li>
            <li className="hover:underline">New York</li>
          </ul>
        </article>

        <article className="text-left">
          <h1 className="text-3xl font-bold">Working Hours</h1>
          <ul className="mt-3 space-y-3 text-secondaryTextGray">
            <li className="hover:underline">Mon-Fri: 9:00AM - 9:00PM</li>
            <li className="hover:underline">Sat-Sun: 24 Hours</li>
          </ul>
        </article>

        <div className="md:col-span-2">
          <article className="text-center sm:text-left">
            <h1 className="text-3xl font-bold">Subscription</h1>
            <p className="my-3">
              Subscribe to your email address for the latest news & updates.
            </p>
          </article>
          <Formik
            initialValues={{ email: "" }}
            validationSchema={SubscriptionSchema}
            onSubmit={(_, { resetForm }) => {
              Toast.fire({
                icon: "success",
                title: "Please check your email for further instructions",
              });
              resetForm();
            }}>
            {() => (
              <Form>
                <div>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    placeholder="Enter Email Address"
                    className="w-full bg-neutral-200 p-4 focus:outline-mainColor"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <input
                  type="submit"
                  value="Submit"
                  className="mt-3 w-full cursor-pointer bg-mainColor p-4 text-white shadow-2xl transition hover:bg-mainColor/80"
                />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </footer>
  );
}
