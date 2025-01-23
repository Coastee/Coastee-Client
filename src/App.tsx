import { MenuHeader, ServerHeader } from "@/components";

const App = () => {
  return (
    <div css={{ display: "flex" }}>
      <ServerHeader />
      <MenuHeader />
    </div>
  );
};

export default App;
