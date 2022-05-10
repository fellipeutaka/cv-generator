import { Certification } from "./Certification";
import { Education } from "./Education";
import { Experience } from "./Experience";

export type CV = {
  fullName: string;
  city: string;
  state: string;
  phone: string;
  email: string;
  personalDescription: string;
  education: Education[] | null;
  experience: Experience[] | null;
  skills: string[];
  certifications: Certification[] | null;
};
