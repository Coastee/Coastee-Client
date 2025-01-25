import { GoogleIcon, KakaoIcon, Logo4WhiteIcon, NaverIcon } from "@/assets/svg";
import AuthContainer from "@/components/AuthContainer/AuthContainer";
import * as s from "@/pages/OnboardingPage/OnboardingPage.styles";

const OnBoardingPage = () => {
  return (
    <>
      <AuthContainer
        title="시작하기"
        desc={
          <>
            Welcome to <Logo4WhiteIcon width={90} height={30} />
          </>
        }
      >
        <div css={s.sideStyle}>
          <button type="button" aria-label="Google로 시작하기" css={[s.commonBtnStyle, s.googleBtnStyle]}>
            <GoogleIcon width={22} height={22} />
            Google로 시작하기
          </button>
          <button type="button" aria-label="카카오로 시작하기" css={[s.commonBtnStyle, s.kakaoBtnStyle]}>
            <KakaoIcon width={21} height={19} />
            카카오로 시작하기
          </button>
          <button type="button" aria-label="네이버로 시작하기" css={[s.commonBtnStyle, s.naverBtnStyle]}>
            <NaverIcon width={19} height={18} />
            네이버로 시작하기
          </button>
        </div>
      </AuthContainer>
    </>
  );
};

export default OnBoardingPage;
