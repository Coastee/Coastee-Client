import { MenuHeader, ServerHeader } from "@/components";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div css={{ display: "flex" }}>
      <ServerHeader />
      <MenuHeader />
      <Outlet />
    </div>
  );
};

export default App;
