import type { AppRoute } from "@/src/router/routerConfig";
import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import './sideBar.css';

interface SidebarProps {
  routes: AppRoute[];
}

const Sidebar: FC<SidebarProps> = (props: SidebarProps) => {
  const navigate = useNavigate()

  const navigateTo = (route: string) => {
    navigate(route)
  }

  return (
    <aside className="sidebar bg-[#070F2B] text-white w-64 min-h-screen p-6 flex flex-col gap-8 rounded-r-3xl">
      <div className="flex items-center gap-3 text-xl font-semibold">
        <div className="w-4 h-4 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full shadow-md"></div>
        <span>ClarioAI</span>
      </div>

      <nav className="flex flex-col gap-4 text-sm font-medium">
        {props.routes.map((route) => (
          <button key={route.key} onClick={() => navigateTo(route.path)} className="flex items-center gap-3 hover:text-blue-300">
            {route.icon}
            <span className="truncate">{route.title}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
