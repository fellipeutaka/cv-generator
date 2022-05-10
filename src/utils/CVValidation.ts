import * as Yup from "yup";

const nameRegex =
  /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/;

export const CVSchema = Yup.object().shape({
  fullName: Yup.string()
    .required("Name is required")
    .min(2, "Too short")
    .matches(nameRegex, "Must be a valid name")
    .max(40, "Too long"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  phone: Yup.string().required("Phone is required"),
  email: Yup.string()
    .required("E-mail is required")
    .email("Must be a valid e-mail"),
  personalDescription: Yup.string()
    .required("Description is required")
    .min(2, "Too short")
    .max(75, "Too long"),
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
