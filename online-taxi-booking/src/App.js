import HomePage from './HomePage/HomePage.js'
import UserModule from './UserModule/User.js'
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={ <HomePage/>} />
        <Route path="/User" element={<UserModule/>} />
       
    </Routes>
    {/* <UserModule/> */}
    </>
  );
}

export default App;
