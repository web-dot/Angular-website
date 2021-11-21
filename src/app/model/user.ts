export interface User {
  isSelected: boolean;
  id: number;
  name: string;
  uname: string;
  email: string;
  company: string;
  isEdit: boolean;
}

export const UserSchema = {
  isSelected: "isSelected",
  id: "number",
  name: "text",
  uname: "text",
  email: "text",
  company: "text",
  isEdit: "isEdit"
}
