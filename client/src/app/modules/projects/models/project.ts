export interface Project {
  id: number,
  companyName: string,
  projectName: string,
  startDate: number,
  endDate: number|null,
  roles: string,
  imageSrc: string;
}
