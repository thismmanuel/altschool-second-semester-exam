import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Contacts from "./pages/Contacts";
import Layout from "./Layout";
import Protected from "./Layout/Protected";
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Login />} />
            <Route element={<Protected />}>
              <Route path="/contacts" element={<Contacts />}>
                <Route path="/contacts/:id" element={<Contact />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
