import * as Yup from "yup";

const nameRegex =
  /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/;

export const CVSchema = Yup.object().shape({
  fullName: Yup.string()
    .required("Name is required")
    .min(3, "Too short")
    .matches(nameRegex, "Must be a valid name")
    .max(128, "Too long"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  phone: Yup.string()
    .required("Phone is required")
    .min(15, "Invalid phone number")
    .max(15, "Invalid phone number"),
  email: Yup.string()
    .required("E-mail is required")
    .email("Must be a valid e-mail"),
  personalDescription: Yup.string()
    .required("Description is required")
    .min(8, "Too short")
    .max(128, "Too long"),
  education: Yup.array()
    .of(
      Yup.object().shape({
        degree: Yup.string().required("Degree is required"),
        subjectArea: Yup.string().required("Subject area is required"),
        collegeName: Yup.string().required("College name is required"),
        city: Yup.string().required("City is required"),
        state: Yup.string().required("State is required"),
        graduationYear: Yup.string()
          .required("Graduation year is required")
          .min(4, "Invalid year")
          .max(4, "Invalid year"),
      })
    )
    .nullable(),
  experience: Yup.array()
    .of(
      Yup.object().shape({
        jobTitle: Yup.string().required("Job title is required"),
        companyName: Yup.string().required("Company name is required"),
        city: Yup.string().required("City is required"),
        state: Yup.string().required("State is required"),
        startYear: Yup.string()
          .required("Start year is required")
          .min(4, "Invalid year")
          .max(4, "Invalid year"),
        endYear: Yup.string()
          .required("End year is required")
          .min(4, "Invalid year")
          .max(4, "Invalid year"),
        jobDuty: Yup.array().of(Yup.string().required("Job duty is required")),
      })
    )
    .nullable(),
  skills: Yup.array().of(Yup.string().required("Skill is required")),
  certifications: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string().required("Name is required"),
        organization: Yup.string().required("Organization name is required"),
        yearEarned: Yup.string()
          .required("Year earned is required")
          .min(4, "Invalid year")
          .max(4, "Invalid year"),
      })
    )
    .nullable(),
});
