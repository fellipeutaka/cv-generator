import { Form as FormikForm, Formik } from "formik";
import { CV } from "../types/CV";
import { generatePDF } from "../utils/CVGeneration";
import { CVSchema } from "../utils/CVValidation";
import CertificationField from "./Fields/Certification";
import CityField from "./Fields/City";
import DescriptionField from "./Fields/Description";
import EducationField from "./Fields/Education";
import EmailField from "./Fields/Email";
import ExperienceField from "./Fields/Experience";
import HasCertifications from "./Fields/HasCertifications";
import HasEducation from "./Fields/HasEducation";
import HasExperience from "./Fields/HasExperience";
import FullNameField from "./Fields/Name";
import PhoneField from "./Fields/Phone";
import SkillsFields from "./Fields/Skills";
import StateField from "./Fields/State";

type OptionsValues = {
  hasEducation: boolean;
  hasExperience: boolean;
  hasCertifications: boolean;
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
  hasExperience: false,
  experience: null,
  skills: [""],
  hasCertifications: false,
  certifications: null,
};

export default function Form() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={CVSchema}
      onSubmit={(values) => {
        console.log(values);
        generatePDF(values);
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
          {values.hasEducation && (
            <EducationField values={values} errors={errors} touched={touched} />
          )}
          <HasExperience values={values} setFieldValue={setFieldValue} />
          {values.hasExperience && (
            <ExperienceField
              values={values}
              errors={errors}
              touched={touched}
            />
          )}
          <SkillsFields values={values} errors={errors} touched={touched} />
          <HasCertifications values={values} setFieldValue={setFieldValue} />
          {values.hasCertifications && (
            <CertificationField
              values={values}
              errors={errors}
              touched={touched}
            />
          )}
          <button type="submit">Submit</button>
        </FormikForm>
      )}
    </Formik>
  );
}
