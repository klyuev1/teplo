import { ReactNode } from "react";
import { Project, Facade, Room} from "./models"

export interface ProtectedRouteProps {
  element: React.ElementType;
  isLoggedIn: boolean;
  [key: string]: unknown;
}

export interface ValidationProps {
  formValue: FormValue;
  setFormValue: React.Dispatch<React.SetStateAction<FormValue>>;
}

export interface FormValue {
  name: string;
  email: string;
  password?: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
}

export interface ProjectProps {
  project: Project;
}

export interface FacadeProps {
  facade: Facade;
}

export interface RoomProps {
  room: Room;
}

export interface PopupWithFormProps {
  name: string;
  title: string;
  buttonName: string;
  isOpen: boolean;
  isClose: () => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
}

export interface HeaderProps {
  isLoggedIn: boolean;
  purpleThemeHeader: string;
}

export interface IFacadeModule {
  facade: Facade;
  setHeight: React.Dispatch<React.SetStateAction<number | undefined>>;
  setWidth: React.Dispatch<React.SetStateAction<number | undefined>>;
  setAreaWall: React.Dispatch<React.SetStateAction<number | undefined>>;
  setAreaWindow: React.Dispatch<React.SetStateAction<number | undefined>>;
  setNumberFacade: React.Dispatch<React.SetStateAction<string>>;
}





