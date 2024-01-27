export interface Project {
  _id: string;
  name: string;
  tOutside: number;
  tInside: number;
  rWall: number;
  rWindow: number;
  beta: number;
  kHousehold: number;
}

export interface Facade {
  _id: string;
  name: string;
  link: string;
  height: number;
  width: number;
  areaWindow: number;
}

export interface Room {
  _id: string;
  number: number;
  name: string;
  height: number;
  width: number;
  areaWall: number;
  areaWindow: number;
  areaRoom: number;
  numberFacade: number;
}

export interface ApiResponse {
  user: { name: string; email: string };
}

export interface InfoTooltipProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  icon: string;
}

export interface RegisterProps {
  onRegister: ( email: string, password: string, name: string) => void;
  isLoggedIn: boolean;
}

export interface ValidationProps {
  formValue: FormValue;
  setFormValue: React.Dispatch<React.SetStateAction<FormValue>>;
}

export interface FormValue {
  name: string;
  email: string;
  password: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
}