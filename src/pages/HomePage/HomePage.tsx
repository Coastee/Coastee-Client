import { titleStyle, body1Style, body2Style, body3Style } from "./HomePage.css";
import { logo1, logo2, logo3 } from "@/assets/logos";

export const HomePage = () => {
  return (
    <div>
      <h1 css={titleStyle}>타이틀입니다</h1>
      <p css={body1Style}>body1입니다</p>
      <p css={body2Style}>body2입니다</p>
      <p css={body3Style}>body3입니다</p>
      <img src={logo1} alt="logo1" />
      <img src={logo2} alt="logo2" />
      <img src={logo3} alt="logo3" />
    </div>
  );
};
