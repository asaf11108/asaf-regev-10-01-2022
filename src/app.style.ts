import styled from "@emotion/styled";
import { device } from "./styles/vendors/media";
import { spread } from "./styles/vendors/spread";
import weather from './assets/weather.jpeg';

const toolbarHeight = '64px';
const toolbarHeightMobile = '56px';

export const Content = styled.div`
  ${spread('margin', '10px 0', '50px 0')};
  ${spread('width', '90vw', '50vw')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-image: url(${weather});
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;
  min-height: calc(100vh - ${toolbarHeight});

  @media ${device.sm} {
    min-height: calc(100vh - ${toolbarHeightMobile});
  }
`;
