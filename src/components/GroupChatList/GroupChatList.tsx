import { RotateLogoIcon } from "@/assets/svg";
import * as s from "@/components/GroupChatList/GroupChatList.styles";
import { CHAT_ROOMS_DUMMY } from "@/dummy/chatRoomsDummy";

const GroupChatList = () => {
  return (
    <ul css={s.listContainerStyle}>
      {CHAT_ROOMS_DUMMY.slice(0, 3).map((chat, idx) => (
        <>
          <li key={chat.id} css={s.listItemStyle}>
            <div css={s.infoLayoutStyle}>
              <div css={s.textLayoutStyle}>
                <RotateLogoIcon width={20} style={{ minWidth: "2rem" }} />
                <p css={s.listTitleStyle}>{chat.title}</p>
                <p css={s.circle} />
                <p css={s.listUsersStyle}>
                  {chat.currentUsers}/{chat.maxUsers}명
                </p>
              </div>
              <p css={s.listDescStyle}>{chat.desc}</p>
            </div>
            <img
              src={chat.imgSrc}
              alt="예시 이미지"
              css={s.thumbnailImgStyle}
            />
          </li>
          {idx < 2 && <hr css={s.hrStyle} />}
        </>
      ))}
    </ul>
  );
};

export default GroupChatList;
