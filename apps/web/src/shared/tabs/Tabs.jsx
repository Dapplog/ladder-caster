import React from 'react';
import { _tabs, _header, _view, _tab, _line } from './Tabs.styled';
import { useRemix } from 'core/hooks/remix/useRemix';

const Tabs = ({ views, tab_id, ...props }) => {
  const [tab, setTab] = useRemix(tab_id);

  const titles = Object.entries(views)?.map(([key, value]) => {
    return (
      <_tab key={key} onClick={() => setTab(key)}>
        <span>{value.name}</span>
        <_line $active={tab === key}>
          <div />
        </_line>
      </_tab>
    );
  });

  // Memory leaks for now grr
  const View = views[tab]?.View;

  return (
    <_tabs>
      <_header>{titles}</_header>
      <_view>{View && <View {...props} />}</_view>
    </_tabs>
  );
};

export default Tabs;
