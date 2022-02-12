import { useEventListener } from './useEventListener';

export const useMobileHeight = () => {
  let vh = window.innerHeight * 0.01;

  useEventListener('resize', () => {
    vh = window.innerHeight * 0.01;
  });
  useEventListener('scroll', () => {
    vh = window.innerHeight * 0.01;
  });
  return {
    vh,
  };
};
