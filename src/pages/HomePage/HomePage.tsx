import { GroupChatList, TitleContainer } from "@/components";
import { SORTING_OPTIONS } from "@/constants/dropdown";
import { useState } from "react";
import * as s from "./HomePage.styles";

export const HomePage = () => {
  const [sortingOption, setSortingOption] = useState(SORTING_OPTIONS[0]);

  return (
    <div css={s.containerStyle}>
      <TitleContainer
        title="그룹 채팅방"
        textButton="전체보기"
        handleTextButtonClick={() => console.log("전체보기")}
        sortingOptions={SORTING_OPTIONS}
        sortingOption={sortingOption}
        setSortingOption={setSortingOption}
      >
        <GroupChatList />
      </TitleContainer>
    </div>
  );
};
