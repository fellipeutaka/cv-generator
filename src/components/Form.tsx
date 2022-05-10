import { Form as FormikForm, Formik } from "formik";
import * as Yup from "yup";
import { CV } from "../types/CV";
import CityField from "./Fields/City";
import DescriptionField from "./Fields/Description";
import EducationField from "./Fields/Education";
import EmailField from "./Fields/Email";
import HasEducation from "./Fields/HasEducation";
import FullNameField from "./Fields/Name";
import PhoneField from "./Fields/Phone";
import SkillsFields from "./Fields/Skills";
import StateField from "./Fields/State";

type OptionsValues = {
  hasEducation: boolean;
};

export type InitialValues = CV & OptionsValues;

const initialValues: InitialValues = {
  fullName: "",
  city: "",
  state: "",
  phone: "",
  email: "",
  personalDescription: "",
  hasEducation: false,
  education: null,
  experience: null,
  skills: [""],
  certifications: null,
};

const CVSchema = Yup.object().shape({
  fullName: Yup.string().required("Name is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  phone: Yup.string().required("Phone is required"),
  email: Yup.string()
    .required("E-mail is required")
    .email("Must be a valid e-mail"),
  personalDescription: Yup.string()
    .required("Description is required")
    .min(2, "Too short")
    .max(35, "Too long"),
  hasEducation: Yup.boolean(),
  education: Yup.array()
    .of(
      Yup.object().shape({
        degree: Yup.string().required("Degree is required"),
        subjectArea: Yup.string().required("Subject area is required"),
        collegeName: Yup.string().required("College name is required"),
        city: Yup.string().required("City is required"),
        state: Yup.string().required("State is required"),
        graduationYear: Yup.number()
          .required("Graduation year is required")
          .min(4)
          .max(4)
          .positive()
          .integer(),
      })
    )
    .nullable(),
  skills: Yup.array().of(Yup.string().required("Skill is required")),
});

export default function Form() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={CVSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ values, setFieldValue, errors, touched }) => (
        <FormikForm>
          <FullNameField errors={errors} touched={touched} />
          <CityField errors={errors} touched={touched} />
          <StateField errors={errors} touched={touched} />
          <PhoneField errors={errors} touched={touched} />
          <EmailField errors={errors} touched={touched} />
          <DescriptionField errors={errors} touched={touched} />
          <HasEducation values={values} setFieldValue={setFieldValue} />
          {values.hasEducation && <EducationField values={values} />}
          <SkillsFields values={values} />
          <button type="submit">Submit</button>
        </FormikForm>
      )}
    </Formik>
  );
}
