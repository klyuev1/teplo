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