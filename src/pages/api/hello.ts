import type { NextApiRequest, NextApiResponse } from "next";
import PdfPrinter from "pdfmake";
import { TDocumentDefinitions } from "pdfmake/interfaces";

const fonts = {
  Times: {
    normal: "Times-Roman",
    bold: "Times-Bold",
    italics: "Times-Italic",
    bolditalics: "Times-BoldItalic",
  },
};

const printer = new PdfPrinter(fonts);

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const docDefinitions: TDocumentDefinitions = {
    defaultStyle: { font: "Times" },
    content: [{ text: "Hello World!" }],
  };

  const pdfDoc = printer.createPdfKitDocument(docDefinitions);
  const chunks: Uint8Array[] = [];
  pdfDoc.on("data", (chunk) => {
    chunks.push(chunk);
  });
  pdfDoc.end();
  pdfDoc.on("end", () => {
    const result = Buffer.concat(chunks);
    res.end(result);
  });
}
