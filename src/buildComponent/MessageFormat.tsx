 //==================typescript======================================//
  type Props = {
       firstName: string;
       lastName: string;
       email?: string;
       phone?: string;
       text: string;
  }

  //=======================Html======================================//

  function MessageFormat(prop:Props){
    return(
             <div>
                 <p>
                     {prop.text}  {prop.firstName}  {prop.lastName}
                 </p>

                 <p>
                     {prop?.email && <span>{prop.email}</span>}  {/*if I have email then I display it*/}
                     {prop?.phone ? <span>{prop.phone}</span> :null}
                 </p>
             </div>

           )
  }
  export default MessageFormat;