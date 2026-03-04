import { NavLink } from "react-router";


export default function Nav() {
  const links = [
    {
      id: 1,
      path: "/auth/newtask",
      name: "New Task",
    },
    {
      id: 2,
      path: "/auth/alltask",
      name: "All Tasks",
    },
  ];
  return (
    <div className="max-w-[1100px] mx-auto p-4 flex justify-between items-center">
      <NavLink to="/"><img src="https://task-duty-proj-client.vercel.app/assets/logo-cQYmEuE8.svg" alt="" /></NavLink>
      <div className="flex items-center space-x-6">
        {links.map((item) => (
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive ? "text-purple-500 font-semibold" : ""
            }
          >
            {item.name}
            
          </NavLink>
        ))}
        <img src="/WhatsApp Image 2025-10-30 at 07.53.07.jpeg" alt="" />
      </div>
    </div>
  );
}
