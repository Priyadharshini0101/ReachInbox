import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import { useNavigate } from "react-router-dom";
import { SideBar,TopBar } from "./components/index.js";
function App() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token === null) {
      navigate("/login");
    } else {
      navigate("/home");
    }
  }, []);

  return (
    <div className="flex">
      {token ? <SideBar></SideBar> : <></>}
      <div className="w-full">
        {token ? <TopBar></TopBar> : <></>}
        <Outlet />
      </div>
    </div>
  );
}

export default App;
