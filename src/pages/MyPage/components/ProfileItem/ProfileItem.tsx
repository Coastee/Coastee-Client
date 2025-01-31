import { MiddlePointIcon } from "@/assets/svg";
import { Divider } from "@/components";
import * as s from "@/pages/MyPage/components/ProfileItem/ProfileItem.styles";

interface ProfileItemProps {
  data: {
    img: string;
    name: string;
    intro: string;
    experience: number;
    role: string;
  };
}

const ProfileItem = ({ data }: ProfileItemProps) => {
  return (
    <li css={s.wrapperStyle}>
      <div css={s.itemWrapperStyle}>
        <img src={data.img} alt="프로필" css={s.imgStyle} />
        <div css={s.itemLayoutStyle}>
          <h2 css={s.nameStyle}>{data.name}</h2>
          <div css={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
            <p css={s.descStyle}>{data.intro}</p>
            <MiddlePointIcon width={3} height={3} />
            <p css={s.descStyle}>{data.experience}년차</p>
            <MiddlePointIcon width={3} height={3} />
            <p css={s.descStyle}>{data.role}</p>
          </div>
        </div>
      </div>
      <Divider />
    </li>
  );
};

export default ProfileItem;
