import { POPOVER_CHILDREN } from '../remix/state';
import { useRemixOrigin } from './remix/useRemixOrigin';

export const usePopover = (ref_id) => {
  const [popoverActive, setPopoverActive] = useRemixOrigin(POPOVER_CHILDREN, {
    isOpen: false,
    active: '',
  });

  const setIsOpen = (isOpen) => {
    setPopoverActive({
      isOpen,
      active: ref_id,
    });
  };

  return [popoverActive, setIsOpen];
};
