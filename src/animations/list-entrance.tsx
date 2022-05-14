/** @jsxImportSource @emotion/react */
import { SerializedStyles, css } from "@emotion/react";
import styled from "@emotion/styled";
import { get } from "lodash-es";
import { FC, PropsWithChildren, ReactNode, useRef } from "react";
import { Transition, TransitionGroup } from "react-transition-group";

interface InjectedProps<T> {
  item: T;
}

export interface ListEntranceProps<T> {
  list: T[];
  idProp?: string;
  children: (props: InjectedProps<T>) => ReturnType<FC>
}

const ANIMATION_DELAY = 300;

const Animation = styled.div`
  transition-duration: ${ANIMATION_DELAY}ms;
`;

const StyledTransitionGroup = styled(TransitionGroup)`
  display: contents;
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

export const ListEntrance = <T extends any>({ list, idProp = 'id', children }: PropsWithChildren<ListEntranceProps<T>>): ReturnType<FC> => {
  // Issue: https://github.com/reactjs/react-transition-group/issues/668
  const nodeRef = useRef(null);

  return (
    <StyledTransitionGroup>
      {list.map((item, index) => 
        <Transition in={true} timeout={ANIMATION_DELAY * index} appear key={get(item, idProp, item)} nodeRef={nodeRef}>
          {(state) => <Animation css={transitionStyles[state]} ref={nodeRef}>{children({ item })}</Animation>}
        </Transition>
      )}
    </StyledTransitionGroup>
  )
};
