import styled from "@emotion/styled";
import { media } from "./styles/vendors/media";
import { spread } from "./styles/vendors/spread";
import weather from './assets/weather.jpeg';
import { rem } from "polished";

const toolbarHeight = rem('64px');
const toolbarHeightMobile = rem('56px');

export const Content = styled.div`
  ${spread('margin', `${rem('12px')} 0`, `${rem('52px')} 0`)};
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

  ${media.down('sm')} {
    min-height: calc(100vh - ${toolbarHeightMobile});
  }
`;
