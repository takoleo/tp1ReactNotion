import MapUsers from "./MapUsers/MapUsers";
import {ListOfUsers} from "./Data/data";

function App() {
  return (
      <section>
          {/*  ======== display table of name of user=======*/}
           {/*   <MessageFormat
                 firstName="Achille"
                 lastName="MBOUNGUEN"
                 email="virgil@gmail.com"
                 phone="999999"
                 text="Halloooooooooo"
              />*/}
          {/*  ======== display table of user=======*/}
          <section className="container">
              <MapUsers UsersTab={ListOfUsers} />
          </section>
      </section>
  );
}

export default App
