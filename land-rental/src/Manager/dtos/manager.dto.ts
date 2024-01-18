import { ManagerE } from "../module/manager.entity";
export class CreateManagerDto {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword:string;
  country:string;
  dateOfBirth:string;
  phoneNumber:number; 
  profilePic: string;
  admin: ManagerE;
}
