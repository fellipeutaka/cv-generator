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
