// import Counter from "./counter/Counter";
// import ControlInput from "./counter/ControlInput";
// import ControlInput2 from "./counter/ControlInput2";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Contacts from "./pages/Contacts";
import Layout from "./Layout";
import Protected from "./Layout/Protected";

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
          {/* <ControlInput /> */}
          {/* <Counter /> */}
          {/* <ControlInput2/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
