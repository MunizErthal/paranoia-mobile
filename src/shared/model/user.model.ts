export class UserModel {
  id: number;
  token: string;
  email: string;
  confirmMail: boolean;
  password: string;
  name: string;
  lastName: string;
  hashName: string;
  phone: string;
  cpf: string;

  constructor() {
    this.password = '';
    this.email = '';
    this.cpf = '';
    this.id = -1;
    this.token = '';
    this.confirmMail = false;
    this.name = '';
    this.lastName = '';
    this.hashName = '';
    this.phone = '';
  }
}
