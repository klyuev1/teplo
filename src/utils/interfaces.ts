import { ReactNode } from "react";

export interface ProtectedRouteProps {
  element: React.ElementType; // Тип для свойства element, представляющего React-компонент
  isLoggedIn: boolean; // Тип для свойства isLoggedIn, представляющего логическое значение
  [key: string]: any; // Разрешение для дополнительных свойств
}

export interface Project {
  _id?: string;
  name: string;
  tOutside: number;
  tInside: number;
  rWall: number;
  rWindow: number;
  beta: number;
  kHousehold: number;
  createdAt?: number;
}

export interface Facade {
  _id?: string;
  name: string;
  link: string;
  height: number;
  width: number;
  areaWindow: number;
  areaWall: number;
}

export interface Room {
  _id?: string;
  number: string;
  name: string;
  height: number;
  width: number;
  areaWall: number;
  areaWindow: number;
  areaRoom: number;
  numberFacade: string;
  heatLoss?: number;
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

export interface RegisterProps {
  onRegister: ( email: string, password: string, name: string ) => void;
  isLoggedIn: boolean;
}

export interface LoginProps {
  onLogin: ( email: string, password: string ) => void;
  isLoggedIn: boolean;
}

export interface ProfileProps {
  onSignOut: () => {};
  onUpdateUser: (name: string, email: string) => void;
}

export interface ProjectTableProps {
  isLoggedIn: boolean;
  projects: Project[];
  onProjectDelete: ( project: Project ) => void;
}

export interface ProjectProps {
  project: Project;
}

export interface FacadesProps {
  facades: Facade[];
  onClickFacade: () => {};
  onCreareFacade: () => {};
  onCardDelete: (facade : Facade) => void;
}

export interface FacadeProps {
  facade: Facade;
  onCardDelete: (facade : Facade) => void;
  onClickFacade: (facade : Facade) => void;
}

export interface RoomsContextType {
  rooms: Room[];
  setRooms: React.Dispatch<React.SetStateAction<Room[]>>;
  projectID: string | null;
  setProjectID: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface RoomsProviderProps {
  children: React.ReactNode;
}

export interface RoomsProps {
  isLoggedIn: boolean;
  handleCreateRoomClick: () => {};
  onRoomDelete: (projectID: string, room: Room) => {};
  onUpdateProjectClick: () => {};
  onClickRoom: (room: Room) => {};
  onDownloadCSV: (projectID: string) => {};
}

export interface RoomTableProps {
  rooms: Room[];
  onRoomDelete: (projectID: string, room: Room) => {};
  onClickRoom: (room: Room) => {};
}

export interface RoomProps {
  room: Room;
  onRoomDelete: (projectID: string, room: Room) => {};
  onClickRoom: (room: Room) => {};
}

export interface RoomProps {
  room: Room;
  onRoomDelete: (projectID: string, room: Room) => {};
  onClickRoom: (room: Room) => {};
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

export interface CreateRoomPopupProps {
  isOpen: boolean;
  facades: Facade[],
  onClose: () => void;
  onCreateRoom: (projectID: string, room: Room) => void;
}

export interface UpdateProjectPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface GetFacadePopupProps {
  facade: Facade;
  onClose: () => void;
}

export interface GetRoomPopupProps {
  room: Room;
  onClose: () => void;
}

export interface InfoTooltipProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  icon: React.FunctionComponent<React.SVGAttributes<SVGElement>> | null ;
}

export interface HeaderProps {
  isLoggedIn: boolean;
  purpleThemeHeader: string;
}

export interface CurrentUserContextProps {
  name: string;
  email: string;
}


export interface FacadesProps {
  facades: Facade[];
  onClickFacade: () => {};
  onCreareFacade: () => {};
  onCardDelete: (facade : Facade) => void;
}

export interface FacadeProps {
  facade: Facade;
  onCardDelete: (facade : Facade) => void;
  onClickFacade: (facade : Facade) => void;
}


export interface CreateFacadePopupProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateFacade: (project: Facade) => void;
}

export interface IFacadeModule {
  facade: Facade;
  setHeight: React.Dispatch<React.SetStateAction<number | undefined>>;
  setWidth: React.Dispatch<React.SetStateAction<number | undefined>>;
  setAreaWall: React.Dispatch<React.SetStateAction<number | undefined>>;
  setAreaWindow: React.Dispatch<React.SetStateAction<number | undefined>>;
  setNumberFacade: React.Dispatch<React.SetStateAction<string>>;
}





