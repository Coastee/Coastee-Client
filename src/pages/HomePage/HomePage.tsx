import { GroupChatList, TitleContainer } from "@/components";
import * as s from "./HomePage.styles";

export const HomePage = () => {
  return (
    <div css={s.containerStyle}>
      <TitleContainer
        title="그룹 채팅방"
        textButton="전체보기"
        handleTextButtonClick={() => console.log("전체보기")}
      >
        <GroupChatList />
      </TitleContainer>
    </div>
  );
};
