export class MedalModel {
  id: number;
  name: string;
  description: string;
  exp: number;
  dontShow: boolean;
  userHeave: boolean;
    
  constructor(id: number,
    name: string,
    description: string,
    exp: number,
    dontShow: boolean,
    userHeave: boolean) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.exp = exp;
      this.dontShow = dontShow;
      this.userHeave = userHeave;
  }
}
