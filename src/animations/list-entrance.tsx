/** @jsxImportSource @emotion/react */
import { SerializedStyles, css } from "@emotion/react";
import styled from "@emotion/styled";
import { FC } from "react";
import { Transition } from "react-transition-group";

export interface ListEntranceProps {
  index: number;
  list?: any[];
}

const ANIMATION_DELAY = 300;

const Animation = styled.div`
  transition-duration: ${ANIMATION_DELAY}ms;
`;

const transitionStyles: Record<string, SerializedStyles> = {
  entering: css`
    opacity: 0;
    transform: scale(0.9);
    pointer-events: none;
  `,
  entered: css`
    opacity: 1;
    transform: scale(1);
    pointer-events: initial;
  `,
};

export const ListEntrance: FC<ListEntranceProps> = ({ index, children }) => (
  <Transition in={true} timeout={ANIMATION_DELAY * index} appear>
    {(state) => <Animation css={transitionStyles[state]}>{children}</Animation>}
  </Transition>
);
