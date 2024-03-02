export interface Project {
  id?: string;
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
  id?: string;
  name: string;
  link: string;
  height: number;
  width: number;
  areaWindow: number;
  areaWall: number;
}
export interface Room {
  id?: string;
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