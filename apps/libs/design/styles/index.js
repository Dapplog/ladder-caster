import {
  _float,
  _position,
  _wrapper,
  _ribbon,
  _triangle,
} from './ribbons/_basic';
import {
  _percent,
  _option,
  _indicator,
  _label,
  _cutout,
  _fill,
} from './percent/_percent';
import { forms } from './forms';
import { _swap } from './swap/_swap';
import { buttons } from './buttons';
import { dividers } from './dividers';
import { lists } from './lists';
import { records } from './records';
import { text } from './text';
import { confirm } from './confirm';
import { dropdown } from './dropdown';
import { view } from './view';

const styles = {
  buttons,
  confirm,
  dividers,
  lists,
  records,
  text,
  forms,
  dropdown,
  view,
  percent: {
    basic: {
      container: _percent,
      option: _option,
      indicator: _indicator,
      label: _label,
      cutout: _cutout,
      fill: _fill,
    },
  },
  swap: {
    swap: _swap,
  },
};

export default styles;
