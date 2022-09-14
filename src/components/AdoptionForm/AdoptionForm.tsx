import { useParams } from "react-router-dom";
import data from "../../petDB.json";
import { CardAnimal } from "../CardAnimal/CardAnimal";
import Navbar from "../Navbar/Navbar";
import classes from "./AdoptionForm.module.scss";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    //.min(2, "Too Short!")
    //.max(50, "Too Long!")
    .required("שדה חובה"),
  address: Yup.string()
    .min(2, "Too Short!")
    .max(100, "Too Long!")
    .required("שדה חובה"),
  email: Yup.string().email("Invalid email").required("שדה חובה"),
  phone: Yup.number()
    .min(9, "Too Short!")
    //.max(10, "Too Long!")
    .required("שדה חובה"),
});

export const AdoptionForm: React.FC = () => {
  const { id } = useParams();
  const pet = data.find((petId) => {
    return petId.id === id;
  });
  const alertClick = () => {
    alert("Thank you for the good will, we will get back to you soon!!!");
  };
  if (!pet) return <h1>No Pet Found!</h1>;
  return (
    <div>
      <Navbar />
      <div className={classes.AdoptionForm}>
        <div className={classes.cardPetAdopt}>
          <Formik
            initialValues={{
              fullName: "",
              address: "",
              email: "",
              phone: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              alert(
                "Thank you for the good will, we will get back to you soon!!!"
              );
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form className={classes.inpotAdopt}>
                <Field
                  name="fullName"
                  placeholder="fullName"
                  className={classes.inpotStryleAdopt}
                />
                {errors.fullName && touched.fullName ? (
                  <div>{errors.fullName}</div>
                ) : null}
                <Field
                  name="address"
                  placeholder="address"
                  className={classes.inpotStryleAdopt}
                />
                {errors.address && touched.address ? (
                  <div>{errors.address}</div>
                ) : null}
                <Field
                  name="email"
                  type="email"
                  placeholder="email"
                  className={classes.inpotStryleAdopt}
                />
                {errors.email && touched.email ? (
                  <div>{errors.email}</div>
                ) : null}
                <Field
                  name="phone"
                  placeholder="phone"
                  className={classes.inpotStryleAdopt}
                />
                {errors.phone && touched.phone ? (
                  <div>{errors.phone}</div>
                ) : null}
                <button type="submit" className={classes.sudmitAdopt}>
                  Submit
                </button>
              </Form>
            )}
          </Formik>
          <CardAnimal
            id={pet.id}
            firstName={pet.firstName}
            birthYear={pet.birthYear}
            pictureUrl={pet.pictureUrl}
            animalType={pet.animalType}
            gender={pet.gender}
          />
        </div>
      </div>
    </div>
  );
};
