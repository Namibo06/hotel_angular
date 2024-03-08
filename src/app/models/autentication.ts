export type autentication={
  status:number,
  token:string,
  message:string,
  user:{
    id:number,
    first_name:string,
    last_name:string,
    email:string,
    phone:string
  }
}
