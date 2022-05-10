import { Form as FormikForm, Formik } from "formik";
import { CV } from "../types/CV";
import { CVSchema } from "../utils/CVValidation";
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
