import styled from "@emotion/styled";
import { device } from "./styles/media";
import { spread } from "./styles/_spread";
import weather from './assets/weather.jpeg';

const toolbarHeight = '64px';
const toolbarHeightMobile = '56px';

export const Content = styled.div`
  ${spread('marginTop', '10px', '50px')};
  ${spread('marginBottom', '10px', '50px')};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  background-image: url(${weather});
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;
  min-height: calc(100vh - ${toolbarHeight});
  display: flex;
  justify-content: center;

  @media ${device.sm} {
    min-height: calc(100vh - ${toolbarHeightMobile});
  }
`;
