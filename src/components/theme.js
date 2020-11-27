const theme = {
  fontFamily: {
    circular: 'Circular std',
    circularBook: 'Circular Std Book',
    nunito: 'nunito',
  },
  colors: {
    primary: '#0c1098',
    primaryLight: '#1318B3',
    secondary: '#ffe709',
    tertiary: '#ffffff',
    tertiaryRgbaDark: 'rgba(255, 255, 255, 0.37)',
    tertiaryRgba: 'rgba(255, 255, 255, 1)',
    danger: '#ff5252',
    confirm: ' #77b551',
    money: '#77b554',
    info: '#7D7D7D',
    placeholder: '#79828B',
    ftg: '#6A79DD',
    darkText: '#424242',
    black: '#000000',
    hover: 'rgb(3, 61, 254)',
    input: '#E4E8EA',
    edge: 'rgba(12, 16, 152, 0.63)',
    textSecondary: 'rgba(12, 16, 152, 1)',
    paragraphColor: '#71828A',
    pageColor: '#E5E5E5',
    subscribeInput: '#F7F7F7',
    bannerBg: '#F5F7FA',
    searchPlaceHolder: '#68686B',
    // text: '#333',
    // background: '#fff',
    // link: '#1eaaf1',
    // linkHover: '#0d8ecf',
    // border: '#ddd',
    // warning: '#fff3cd',
    // success: '#d4edda',
  },
  spacing: {},
  size: {
    loginText: '14px',
    heading: '44px',
    paragraph: '18px',
  },
  border: {
    input: ' 1px solid #E4E8EA',
    hover: '1px solid #0c1098',
    ruler: ' 1px solid #FED000',
    brands: '1px solid #E5E5E5',
    inputAlt: '1px solid #919AA3',
  },
  radius: {
    input: '5px',
    button: '3px',
  },
  shadow: {
    contact: '0px 4px 20px rgba(0, 0, 0, 0.1)',
  },
  effects: {
    stretch: 'scale(0.95)',
    buttonTransitionIn:
      'color 100ms ease-in, transform 80ms ease-in, background-color 100ms ease-in;',
    buttonTransitionOut:
      'color 100ms ease-out, transform 80ms ease-out,background-color 100ms ease-in',
    allIn: (duration) => {
      return `all ${duration}ms ease-in`;
    },
    allOut: (duration) => {
      return `all ${duration}ms ease-out`;
    },
  },
};

export default theme;
