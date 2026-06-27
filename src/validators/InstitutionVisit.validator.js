import { z } from "zod";

export const createInstitutionVisitValidator = z.object({
  institution_type: z.string().min(1),
  institution_name: z.string().min(1),
  address: z.string().min(1),
  contact_person: z.string().min(1),
  contact_number: z.string().length(10),
  designation: z.string().min(1),
  planned_visit_date: z.coerce.date(),
});

export const updateInstitutionVisitValidator =
  createInstitutionVisitValidator.partial()