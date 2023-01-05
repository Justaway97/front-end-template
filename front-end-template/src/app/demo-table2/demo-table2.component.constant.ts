export const tableHeaders = [
  { header: 'select', type: 'select', text: 'select' },
  { header: 'input', type: 'input', text: 'input' },
  { header: 'auto_complete', type: 'autoComplete', text: 'auto_complete' },
  { header: 'button_toggle', type: 'buttonToggle', text: 'button_toggle' },
  {
    header: 'multi_auto_complete',
    type: 'multiAutoComplete',
    text: 'multi_auto_complete',
  },
  { header: 'date_picker', type: 'datePicker', text: 'date_picker' },
  { header: 'position', type: 'label', text: 'position' },
  { header: 'name', type: 'label', text: 'name' },
  { header: 'weight', type: 'label', text: 'weight' },
  { header: 'symbol', type: 'label', text: 'symbol' },
  { header: 'menu', type: 'menu' },
];

export const formData = {
  data: [
    {
      select: [],
      autoComplete: '',
      buttonToggle: '',
      multiAutoComplete: [],
      datePicker: Date(),
      input: '',
    },
  ],
};

export const headers = [
  { header: 'select', type: 'select', text: 'select' },
  { header: 'input', type: 'input', text: 'input' },
  { header: 'autoComplete', type: 'autoComplete', text: 'auto_complete' },
  { header: 'buttonToggle', type: 'buttonToggle', text: 'button_toggle' },
  {
    header: 'multiAutoComplete',
    type: 'multiAutoComplete',
    text: 'multi_auto_complete',
  },
  { header: 'datePicker', type: 'datePicker', text: 'date_picker' },
  { header: 'position', type: 'label', text: 'position' },
  { header: 'name', type: 'label', text: 'name' },
  { header: 'weight', type: 'label', text: 'weight' },
  { header: 'symbol', type: 'label', text: 'symbol' },
];

export const dataSource = [
  {
    select: { value: null },
    input: { value: null },
    autoComplete: {
      value: null,
      optionRule: 'AUTO_COMPLETE',
    },
    buttonToggle: {
      value: null,
      optionRule: 'BUTTON_TOGGLE',
    },
    multiAutoComplete: {
      value: null,
      optionRule: 'AUTO_COMPLETE',
    },
    datePicker: {
      value: null,
    },
    position: null,
    name: null,
    weight: null,
    symbol: null,
  },
];

export const tableDataSource = [
  {
    select: { value: true },
    input: { value: 'testing 1' },
    auto_complete: {
      value: 'One',
      optionRule: 'AUTO_COMPLETE',
      disabled: false,
    },
    button_toggle: {
      value: 'Two',
      optionRule: 'BUTTON_TOGGLE',
    },
    multi_auto_complete: {
      value: ['Three', 'Four'],
      optionRule: 'AUTO_COMPLETE',
    },
    date_picker: {
      value: new Date().getTime(),
    },
    position: 1,
    name: 'Hydrogen',
    weight: 1.0079,
    symbol: 'H',
    menu: {
      icon: 'more_vert',
      options: [
        {
          name: 'abc',
          children: [{ name: 'xyz', children: [{ name: 'zzz' }] }],
        },
        { name: 'bcd', children: [{ name: 'xxx' }, { name: 'yyy' }] },
        { name: 'cde' },
      ],
    },
  },
  {
    select: { value: false },
    input: { value: '' },
    auto_complete: {
      value: 'One',
      options: ['One', 'Two', 'Three'],
      disabled: false,
    },
    button_toggle: {
      value: '',
      options: ['One', 'Two', 'Three'],
    },
    multi_auto_complete: {
      value: [],
      options: ['One', 'Two', 'Three', 'Four', 'Five'],
    },
    date_picker: {
      value: new Date().getTime(),
    },
    position: 2,
    name: 'Helium',
    weight: 4.0026,
    symbol: 'He',
    menu: {
      icon: 'more_vert',
      options: [
        {
          name: 'abc',
          children: [{ name: 'xyz', children: [{ name: 'zzz' }] }],
        },
        { name: 'bcd', children: [{ name: 'xxx' }, { name: 'yyy' }] },
      ],
    },
  },
  {
    select: { value: false },
    input: { value: '' },
    auto_complete: {
      value: 'One',
      options: ['One', 'Two', 'Three'],
      disabled: false,
    },
    button_toggle: {
      value: '',
      options: ['One', 'Two', 'Three'],
    },
    multi_auto_complete: {
      value: [],
      options: ['One', 'Two', 'Three', 'Four', 'Five'],
    },
    date_picker: {
      value: new Date().getTime(),
    },
    position: 3,
    name: 'Lithium',
    weight: 6.941,
    symbol: 'Li',
    menu: {
      icon: 'more_vert',
      options: [
        {
          name: 'abc',
          children: [{ name: 'xyz', children: [{ name: 'zzz' }] }],
        },
        { name: 'bcd', children: [{ name: 'xxx' }, { name: 'yyy' }] },
        { name: 'cde' },
      ],
    },
  },
  {
    select: { value: false },
    input: { value: '' },
    auto_complete: {
      value: 'One',
      options: ['One', 'Two', 'Three'],
      disabled: false,
    },
    button_toggle: {
      value: '',
      options: ['One', 'Two', 'Three'],
    },
    multi_auto_complete: {
      value: [],
      options: ['One', 'Two', 'Three', 'Four', 'Five'],
    },
    date_picker: {
      value: new Date().getTime(),
    },
    position: 4,
    name: 'Beryllium',
    weight: 9.0122,
    symbol: 'Be',
    menu: {
      icon: 'more_vert',
      options: [
        {
          name: 'abc',
          children: [{ name: 'xyz', children: [{ name: 'zzz' }] }],
        },
        { name: 'bcd' },
        { name: 'cde' },
      ],
    },
  },
  {
    select: { value: false },
    input: { value: '' },
    auto_complete: {
      value: 'One',
      options: ['One', 'Two', 'Three'],
      disabled: false,
    },
    button_toggle: {
      value: '',
      options: ['One', 'Two', 'Three'],
    },
    multi_auto_complete: {
      value: [],
      options: ['One', 'Two', 'Three', 'Four', 'Five'],
    },
    date_picker: {
      value: new Date().getTime(),
    },
    position: 5,
    name: 'Boron',
    weight: 10.811,
    symbol: 'B',
    menu: {
      icon: 'more_vert',
      options: [
        {
          name: 'abc',
          children: [{ name: 'xyz', children: [{ name: 'zzz' }] }],
        },
        { name: 'bcd', children: [{ name: 'xxx' }, { name: 'yyy' }] },
        { name: 'cde' },
      ],
    },
  },
  {
    select: { value: false },
    input: { value: '' },
    auto_complete: {
      value: 'One',
      options: ['One', 'Two', 'Three'],
      disabled: false,
    },
    button_toggle: {
      value: '',
      options: ['One', 'Two', 'Three'],
    },
    multi_auto_complete: {
      value: [],
      options: ['One', 'Two', 'Three', 'Four', 'Five'],
    },
    date_picker: {
      value: new Date().getTime(),
    },
    position: 6,
    name: 'Carbon',
    weight: 12.0107,
    symbol: 'C',
    menu: {
      icon: 'more_vert',
      options: [
        {
          name: 'abc',
          children: [{ name: 'xyz', children: [{ name: 'zzz' }] }],
        },
        { name: 'bcd', children: [{ name: 'xxx' }, { name: 'yyy' }] },
        { name: 'cde' },
      ],
    },
  },
  {
    select: { value: false },
    input: { value: '' },
    auto_complete: {
      value: 'One',
      options: ['One', 'Two', 'Three'],
      disabled: false,
    },
    button_toggle: {
      value: '',
      options: ['One', 'Two', 'Three'],
    },
    multi_auto_complete: {
      value: [],
      options: ['One', 'Two', 'Three', 'Four', 'Five'],
    },
    date_picker: {
      value: new Date().getTime(),
    },
    position: 7,
    name: 'Nitrogen',
    weight: 14.0067,
    symbol: 'N',
    menu: {
      icon: 'more_vert',
      options: [
        { name: 'abc' },
        { name: 'bcd', children: [{ name: 'xxx' }, { name: 'yyy' }] },
        {
          name: 'cde',
          children: [{ name: 'xyz', children: [{ name: 'zzz' }] }],
        },
      ],
    },
  },
  {
    select: { value: false },
    input: { value: '' },
    auto_complete: {
      value: 'One',
      options: ['One', 'Two', 'Three'],
      disabled: false,
    },
    button_toggle: {
      value: '',
      options: ['One', 'Two', 'Three'],
    },
    multi_auto_complete: {
      value: [],
      options: ['One', 'Two', 'Three', 'Four', 'Five'],
    },
    date_picker: {
      value: new Date().getTime(),
    },
    position: 8,
    name: 'Oxygen',
    weight: 15.9994,
    symbol: 'O',
    menu: {
      icon: 'more_vert',
      options: [
        {
          name: 'abc',
          children: [{ name: 'xyz', children: [{ name: 'zzz' }] }],
        },
        { name: 'bcd', children: [{ name: 'xxx' }, { name: 'yyy' }] },
        { name: 'cde' },
      ],
    },
  },
  {
    select: { value: false },
    input: { value: '' },
    auto_complete: {
      value: 'One',
      options: ['One', 'Two', 'Three'],
      disabled: false,
    },
    button_toggle: {
      value: '',
      options: ['One', 'Two', 'Three'],
    },
    multi_auto_complete: {
      value: [],
      options: ['One', 'Two', 'Three', 'Four', 'Five'],
    },
    date_picker: {
      value: new Date().getTime(),
    },
    position: 9,
    name: 'Fluorine',
    weight: 18.9984,
    symbol: 'F',
    menu: {
      icon: 'more_vert',
      options: [
        {
          name: 'abc',
          children: [{ name: 'xyz', children: [{ name: 'zzz' }] }],
        },
        { name: 'bcd' },
        { name: 'cde', children: [{ name: 'xxx' }, { name: 'yyy' }] },
      ],
    },
  },
  {
    select: { value: false },
    input: { value: '' },
    auto_complete: {
      value: 'One',
      options: ['One', 'Two', 'Three'],
      disabled: false,
    },
    button_toggle: {
      value: '',
      options: ['One', 'Two', 'Three'],
    },
    multi_auto_complete: {
      value: [],
      options: ['One', 'Two', 'Three', 'Four', 'Five'],
    },
    date_picker: {
      value: new Date().getTime(),
    },
    position: 10,
    name: 'Neon',
    weight: 20.1797,
    symbol: 'Ne',
    menu: {
      icon: 'more_vert',
      options: [
        { name: 'abc', children: [{ name: 'xyz' }] },
        { name: 'bcd', children: [{ name: 'xxx' }, { name: 'yyy' }] },
        { name: 'cde', children: [{ name: 'zzz' }] },
      ],
    },
  },
];
