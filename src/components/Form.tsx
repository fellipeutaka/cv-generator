import { Box, Button, Flex, Grid } from "@chakra-ui/react";
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
      onSubmit={(values) => generatePDF(values)}
    >
      {({ values, errors, touched, setFieldValue }) => (
        <FormikForm>
          <Grid
            width="100%"
            minH="100vh"
            justifyContent="center"
            alignContent="center"
            gap={12}
            templateAreas="
              'personalInfo education'
              'experience certifications'
              'submit submit'
            "
          >
            <Flex flexDir="column" gap={4} gridArea="personalInfo" w="260px">
              <Box maxH="712px" px={4} pb={2} overflowY="auto">
                <FullNameField errors={errors} touched={touched} />
                <CityField errors={errors} touched={touched} />
                <StateField errors={errors} touched={touched} />
                <PhoneField errors={errors} touched={touched} />
                <EmailField errors={errors} touched={touched} />
                <DescriptionField errors={errors} touched={touched} />
                <SkillsFields
                  values={values}
                  errors={errors}
                  touched={touched}
                />
              </Box>
            </Flex>
            <Box gridArea="education" w="260px">
              <HasEducation values={values} setFieldValue={setFieldValue} />
              {values.hasEducation && (
                <Box maxH="712px" px={4} pb={2} overflowY="auto">
                  <EducationField
                    values={values}
                    errors={errors}
                    touched={touched}
                  />
                </Box>
              )}
            </Box>
            <Box gridArea="experience" w="260px">
              <HasExperience values={values} setFieldValue={setFieldValue} />
              {values.hasExperience && (
                <Box maxH="712px" px={4} pb={2} overflowY="auto">
                  <ExperienceField
                    values={values}
                    errors={errors}
                    touched={touched}
                  />
                </Box>
              )}
            </Box>
            <Box gridArea="certifications" w="260px">
              <HasCertifications
                values={values}
                setFieldValue={setFieldValue}
              />
              {values.hasCertifications && (
                <Box maxH="712px" px={4} pb={2} overflowY="auto">
                  <CertificationField
                    values={values}
                    errors={errors}
                    touched={touched}
                  />
                </Box>
              )}
            </Box>
            <Button type="submit" gridArea="submit">
              Submit
            </Button>
          </Grid>
        </FormikForm>
      )}
    </Formik>
  );
}
