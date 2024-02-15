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