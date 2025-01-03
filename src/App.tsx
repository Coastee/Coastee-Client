import { globalStyle } from "@/styles/globalStyle";
import { Global } from "@emotion/react";

const App = () => {
  return (
    <>
      <Global styles={globalStyle} />
    </>
  );
};

export default App;
