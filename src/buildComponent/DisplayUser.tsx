    type Props = {
            id?:string;
            age?:number;
            firstName?:string;
            lastName?:string;
            gender?:string;
            company?:string;
            email?:string;
            phone?:string;
            address?: string;
            text?:string
    }
  function DisplayUser(prop:Props){
  return(

      <div className="container">
          <div className="row">
              <div className="userBorder">

              </div>
          </div>

      </div>
  )}
  export default DisplayUser;