// Sidebar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Plus, BookOpen, Users, User, LogOut } from "lucide-react";

const Sidebar = () => {
  const location = useLocation();
  const menuItems = [
    { id: "dashboard", label: "Dashboard", path: "/educator", icon: LayoutDashboard },
    { id: "add-course", label: "Add Course", path: "/educator/add-course", icon: Plus },
    { id: "my-courses", label: "My Courses", path: "/educator/my-courses", icon: BookOpen },
    { id: "students-enrolled", label: "Students Enrolled", path: "/educator/students-enrolled", icon: Users },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col">
      <div className="p-6 border-b border-gray-200 flex items-center gap-3">
        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-sm">E</span>
        </div>
        <span className="text-xl font-bold text-gray-900">Edemy</span>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className={`w-full flex items-center px-4 h-12 gap-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-gray-600" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">Hi Richard</p>
          </div>
        </div>
        <Link
          to="/"
          className="w-full justify-start gap-3 h-10 text-gray-700 flex items-center px-4 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
