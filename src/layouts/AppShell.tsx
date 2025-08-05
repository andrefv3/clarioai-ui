import { Outlet } from "react-router-dom";
import Sidebar from "../components/ui/SideBar/sideBar";
import { routes } from "../router/appRouter";
import '../styles/AppShell.css';

export default function AppShell() {
  return (
    <div className="AppShellWrapper h-screen bg-gray-50 overflow-hidden">
      <div className='AppShellLeft'>
        {routes.map((value) => {
          return (
            value.sidebar ? <Sidebar key={value.key} routes={value.routes} /> : null
          )
        })}
      </div>
      <div className='AppShellRight bg-gray-50 p-6 overflow-y-auto' >
        <Outlet />
      </div>
    </div>
  );
}