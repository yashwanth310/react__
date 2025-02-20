import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./pages/Home";
import Counter from "./components/Counter";
import UserForm from "./components/UserForm";
import Login from "./pages/login";
import Register from "./pages/Register";
import PrivateRouter from "./components/PrivateRouter";
import RichTextEditor from "./components/RichTextEditor";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path ="/editor" element={<RichTextEditor />} />
       
          <Route element={<PrivateRouter />}>
            <Route path="/form" element={<UserForm />} />
         
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
