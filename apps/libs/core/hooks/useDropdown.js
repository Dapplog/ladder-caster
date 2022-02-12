import React, { useMemo, useState } from 'react';
import { useInput } from './useInput';
import { forEach } from 'lodash';
import { _item, _name } from 'web/src/shared/dropdown/Dropdown.styled';
import { nanoid } from 'nanoid';

export const useDropdown = ({ list, initial_input }) => {
  const [active, setActive] = useState();
  const input_selected = useInput(initial_input || '');

  const items = useMemo(() => {
    if (list) {
      const render_list = [];
      forEach(list, (item) => {
        const name = item.name;
        render_list.push(
          <_item key={nanoid()} onClick={() => setActive(name)}>
            <_name $active={active === name}>{name}</_name>
          </_item>,
        );
      });
      return render_list;
    }
  }, [list]);

  return {
    active,
    input: input_selected,
    items,
  };
};
