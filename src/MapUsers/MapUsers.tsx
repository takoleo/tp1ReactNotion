import DisplayUser from "../buildComponent/DisplayUser";

type UserObject = {
                    id?:string;
                    age?:number;
                    firstname?:string;
                    lastname?:string;
                    gender?:string;
                    company?:string;
                    email?:string;
                    phone?:string;
                    address?: string;
                    text?:string
                }

    type Props = {
          UsersTab:UserObject[];
    }

  //====================== function===========================
 function MapUsers(props:Props){

    const Users = props.UsersTab;
     return(
          <section className="grid">
              {Users.map((user:UserObject)=>(
                  <article className="user">
                      <h3>
                          {user.firstname}
                          {user.lastname}
                      </h3>
                      <p>{user.phone}</p>
                      <p>{user.email}</p>

                  </article>
              ))}
          </section>
     )

 }
 export default MapUsers;

/*
return(Users.map((oneUser:UserObject)=>
    <DisplayUser age={oneUser.age}  address={oneUser.address}  phone={oneUser.phone}/>

))*/
