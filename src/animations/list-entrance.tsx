import { CSSProperties, FC } from "react";
import { Transition } from "react-transition-group";

export const ANIMATION_DELAY = 300;

const transitionStyles: Record<string, CSSProperties> = {
    entering: { opacity: 0, transform: 'scale(0.9)' },
    entered:  { opacity: 1, transform: 'translateX(0)' },
  };

export const ListEntrance: FC<{ index: number }> = ({ index, children }) => (
    <Transition in={true} timeout={ANIMATION_DELAY * (index + 1)} appear>
      {state => (
        <div style={{
          ...transitionStyles[state]
        }}>
          {children}
        </div>
      )}
    </Transition>
  );
