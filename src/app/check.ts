export class Indata {

  constructor(
    public username: string,
    public adress: string,
    public category: string,
    public phoneNumber: number,
    public price: number,
    public imageUrl : string,
    public productInfo : string
  ) {  }

}

export class UserLogin {

  constructor(
   public email : string,
   public password: string
  ) {  }

}


export class UserJoin {

  constructor(
   public username : string,
   public email : string,
   public password: string,
   public passwordConfirm : string,
  ) {  }

}