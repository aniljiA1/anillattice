import { v4 as uuidv4 } from "uuid";

export const generateBookingCode = () => {
  return uuidv4();
};
