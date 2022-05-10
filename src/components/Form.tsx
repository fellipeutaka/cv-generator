import { Form as FormikForm, Formik } from "formik";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { TDocumentDefinitions } from "pdfmake/interfaces";
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
pdfMake.vfs = pdfFonts.pdfMake.vfs;

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

function generatePDF(values: InitialValues) {
  const docDefinitions: TDocumentDefinitions = {
    pageSize: "A4",
    defaultStyle: {
      lineHeight: 1.5,
    },
    content: [
      { text: values.fullName },
      { text: `${values.city}, ${values.state}` },
      { text: values.phone },
      { text: values.email },
      { text: "Personal description", style: "header" },
      { text: values.personalDescription },
      ...(values.hasEducation
        ? [
            {
              text: "Education",
              style: "header",
            },
            values.education!.map((education) => [
              {
                ul: [
                  {
                    text:
                      education.degree +
                      ", " +
                      education.subjectArea +
                      ", " +
                      education.collegeName +
                      ", " +
                      education.city +
                      ", " +
                      education.state +
                      ", " +
                      education.graduationYear,
                  },
                ],
              },
            ]),
          ]
        : []),
      {
        text: "Skills",
        style: "header",
      },
      values.skills.map((skill) => [
        {
          ul: [
            {
              text: skill,
            },
          ],
        },
      ]),
    ],
    info: {
      title: `${values.fullName} - CV`,
      author: values.fullName,
      creator: values.fullName,
      subject: "CV",
      creationDate: new Date(),
    },
    styles: {
      header: {
        fontSize: 18,
        bold: true,
      },
    },
  };
  pdfMake.createPdf(docDefinitions).open();
}

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
          {values.hasEducation && <EducationField values={values} />}
          <SkillsFields values={values} />
          <button type="submit">Submit</button>
        </FormikForm>
      )}
    </Formik>
  );
}
