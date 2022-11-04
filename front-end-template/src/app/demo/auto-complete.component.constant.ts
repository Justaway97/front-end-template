export const autoCompleteOptions = ['One', 'Two', 'Three'];
export const autoCompletePlaceholder = 'example auto complete';
export const autoCompleteDisabled = false;
export const autoCompleteLabel = 'example auto complete label';

export const buttonLabel = 'example button';
export const buttonIconLabel = 'home';
export const buttonTooltip = 'example tooltip';
export const buttonTooltipPosition = 'below';

export const buttonToggleOptions = ['One', 'Two', 'Three'];

export const checkboxLabel = 'example checkbox';
export const checkboxOptions = ['One', 'Two', 'Three'];

export const checkboxLabel1 = 'example checkbox';
export const checkboxOptions1 = ['One', 'Two', 'Three'];
export const checkboxChecked1 = ['Two'];

export const multiAutoCompleteOptions = ['One', 'Two', 'Three', 'Four', 'Five'];
export const multiAutoCompleteLabel = 'example multi auto complete';
export const multiAutoCompletePlaceholder =
  'example multi auto complete placeholder';

export const datePickerLabel = 'example date picker';
export const datePickerPlaceholder = 'example date picker placeholder';

export const inputLabel = 'example input';
export const inputPlaceholder = 'example input placeholder';

export const menuOptions = [
  { name: 'abc', children: [{ name: 'xyz', children: [{ name: 'zzz' }] }] },
  { name: 'bcd', children: [{ name: 'xxx' }, { name: 'yyy' }] },
  { name: 'cde' },
];

export const radioLabel = 'example radio';
export const radioOptions = ['yes', 'no'];

export const toolbarItems = {
  left: [
    {
      display: 'icon',
      type: 'button',
      text: 'menu',
      options: [
        {
          name: 'abc',
          children: [{ name: 'xyz', children: [{ name: 'zzz' }] }],
        },
        { name: 'bcd', children: [{ name: 'xxx' }, { name: 'yyy' }] },
        { name: 'cde' },
      ],
    },
    {
      display: 'text',
      type: 'text',
      text: 'test toolbar',
    },
  ],
  right: [
    {
      display: 'icon',
      type: 'button',
      text: 'share',
      options: [
        {
          name: 'abc',
          children: [{ name: 'xyz', children: [{ name: 'zzz' }] }],
        },
        { name: 'bcd', children: [{ name: 'xxx' }, { name: 'yyy' }] },
        { name: 'cde' },
      ],
    },
    {
      display: 'icon',
      type: 'button',
      text: 'favorite',
    },
    {
      display: 'icon',
      type: 'button',
      text: 'delete',
    },
  ],
};

export const tableHeaders = [
  'select',
  'input',
  'autoComplete',
  'buttonToggle',
  'multiAutoComplete',
  'datePicker',
  'position',
  'name',
  'weight',
  'symbol',
  'menu',
];
export const tableDataSource = [
  {
    select: { value: true },
    input: { value: 'testing 1' },
    autoComplete: {
      value: 'One',
      options: ['One', 'Two', 'Three'],
      disabled: false,
    },
    buttonToggle: {
      value: 'Two',
      options: ['One', 'Two', 'Three'],
    },
    multiAutoComplete: {
      value: ['Three', 'Four'],
      options: ['One', 'Two', 'Three', 'Four', 'Five'],
    },
    datePicker: {
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
    autoComplete: {
      value: 'One',
      options: ['One', 'Two', 'Three'],
      disabled: false,
    },
    buttonToggle: {
      value: '',
      options: ['One', 'Two', 'Three'],
    },
    multiAutoComplete: {
      value: [],
      options: ['One', 'Two', 'Three', 'Four', 'Five'],
    },
    datePicker: {
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
    autoComplete: {
      value: 'One',
      options: ['One', 'Two', 'Three'],
      disabled: false,
    },
    buttonToggle: {
      value: '',
      options: ['One', 'Two', 'Three'],
    },
    multiAutoComplete: {
      value: [],
      options: ['One', 'Two', 'Three', 'Four', 'Five'],
    },
    datePicker: {
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
    autoComplete: {
      value: 'One',
      options: ['One', 'Two', 'Three'],
      disabled: false,
    },
    buttonToggle: {
      value: '',
      options: ['One', 'Two', 'Three'],
    },
    multiAutoComplete: {
      value: [],
      options: ['One', 'Two', 'Three', 'Four', 'Five'],
    },
    datePicker: {
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
    autoComplete: {
      value: 'One',
      options: ['One', 'Two', 'Three'],
      disabled: false,
    },
    buttonToggle: {
      value: '',
      options: ['One', 'Two', 'Three'],
    },
    multiAutoComplete: {
      value: [],
      options: ['One', 'Two', 'Three', 'Four', 'Five'],
    },
    datePicker: {
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
    autoComplete: {
      value: 'One',
      options: ['One', 'Two', 'Three'],
      disabled: false,
    },
    buttonToggle: {
      value: '',
      options: ['One', 'Two', 'Three'],
    },
    multiAutoComplete: {
      value: [],
      options: ['One', 'Two', 'Three', 'Four', 'Five'],
    },
    datePicker: {
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
    autoComplete: {
      value: 'One',
      options: ['One', 'Two', 'Three'],
      disabled: false,
    },
    buttonToggle: {
      value: '',
      options: ['One', 'Two', 'Three'],
    },
    multiAutoComplete: {
      value: [],
      options: ['One', 'Two', 'Three', 'Four', 'Five'],
    },
    datePicker: {
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
    autoComplete: {
      value: 'One',
      options: ['One', 'Two', 'Three'],
      disabled: false,
    },
    buttonToggle: {
      value: '',
      options: ['One', 'Two', 'Three'],
    },
    multiAutoComplete: {
      value: [],
      options: ['One', 'Two', 'Three', 'Four', 'Five'],
    },
    datePicker: {
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
    autoComplete: {
      value: 'One',
      options: ['One', 'Two', 'Three'],
      disabled: false,
    },
    buttonToggle: {
      value: '',
      options: ['One', 'Two', 'Three'],
    },
    multiAutoComplete: {
      value: [],
      options: ['One', 'Two', 'Three', 'Four', 'Five'],
    },
    datePicker: {
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
    autoComplete: {
      value: 'One',
      options: ['One', 'Two', 'Three'],
      disabled: false,
    },
    buttonToggle: {
      value: '',
      options: ['One', 'Two', 'Three'],
    },
    multiAutoComplete: {
      value: [],
      options: ['One', 'Two', 'Three', 'Four', 'Five'],
    },
    datePicker: {
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
