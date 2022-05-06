/** @jsxImportSource @emotion/react */
import { SerializedStyles, css } from "@emotion/react";
import styled from "@emotion/styled";
import { get } from "lodash-es";
import { FC, ReactNode } from "react";
import { Transition, TransitionGroup } from "react-transition-group";

interface InjectedProps<T> {
  item: T;
}

export interface ListEntranceProps<T = any> {
  className?: string;
  list: T[];
  idProp?: string;
  children: (props: InjectedProps<T>) => ReactNode
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

export const ListEntrance: FC<ListEntranceProps> = ({ className, list, idProp = 'id', children }) => (
  <TransitionGroup className={className}>
    {list.map((item, index) => 
      <Transition in={true} timeout={ANIMATION_DELAY * index} appear key={get(item, idProp)}>
        {(state) => <Animation css={transitionStyles[state]}>{children({ item })}</Animation>}
      </Transition>
    )}
  </TransitionGroup>
);
