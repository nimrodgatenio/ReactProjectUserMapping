import UsersList from './UsersList';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import PageSelector from './PageSelector';
import UserDetails from './UserDetails';
// Styles
import './styles/App.css'


function App() {

  //routes manager:
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<UsersList />} />
          <Route exact path="/" element={<PageSelector />} />
          <Route exact path="/page/:page" element={<UsersList />} />
          <Route exact path="/page/:page" element={<PageSelector />}/>
          <Route exact path="/:page/user/:username" element={<UserDetails />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
