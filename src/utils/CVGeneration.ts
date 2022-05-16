import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { TDocumentDefinitions } from "pdfmake/interfaces";
import { InitialValues } from "../components/Form";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export function generatePDF(values: InitialValues) {
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
      { text: "\n" },
      { text: "Personal description", style: "header" },
      { text: values.personalDescription },
      ...(values.hasEducation
        ? [
            { text: "\n" },
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

      ...(values.hasExperience
        ? [
            { text: "\n" },
            {
              text: "Experience",
              style: "header",
            },
            values.experience!.map((experience) => [
              {
                text: experience.jobTitle,
              },
              {
                text: `${experience.companyName}, ${experience.city}, ${experience.state}, ${experience.startYear}-${experience.endYear}`,
              },
              experience.jobDuty.map((duty) => ({
                ul: [
                  {
                    text: duty,
                  },
                ],
              })),
            ]),
          ]
        : []),
      { text: "\n" },
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

      ...(values.hasCertifications
        ? [
            { text: "\n" },
            {
              text: "Certifications",
              style: "header",
            },
            values.certifications!.map((certification) => [
              {
                ul: [
                  {
                    text:
                      certification.name +
                      ", " +
                      certification.organization +
                      ", " +
                      certification.yearEarned,
                  },
                ],
              },
            ]),
          ]
        : []),
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
