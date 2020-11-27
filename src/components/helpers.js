export const notificationSettings = ({
  title,
  message,
  type,
  position = 'top-right',
  animationIn = 'flipInY',
  animationOut = 'flipOutY',
  duration = 8000,
  onRemoval,
}) => {
  return {
    title: title,
    message: message,
    type: type,
    container: position,
    animationIn: ['animated', animationIn],
    animationOut: ['animated', animationOut],
    onRemoval,
    dismiss: {
      duration: duration,
      onScreen: false,
      pauseOnHover: true,
      showIcon: true,
    },
    slidingExit: {
      duration: 200,
      timingFunction: 'ease-out',
      delay: 0,
    },
    slidingEnter: {
      duration: 200,
      timingFunction: 'ease-in',
      delay: 0,
    },
    touchSlidingExit: {
      swipe: {
        duration: 200,
        timingFunction: 'ease-in-out',
        delay: 0,
      },
      fade: {
        duration: 200,
        timingFunction: 'ease-in-out',
        delay: 0,
      },
    },
  };
};

export function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export function isValid(n) {
  let firstChar;
  let number;
  let pattern = /^([0]{1})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7,8})$/g;

  if (!n || n.length < 5) return false;

  if (typeof n === 'number') {
    // numbers never begin with 0, force this to become a string
    number = '0' + n;
  } else if (typeof n === 'string') {
    firstChar = n.substring(0, 1);

    // user may supply 0 before the number or not
    // e.g 0703 or 703 (two types of people ¯\_(ツ)_/¯)
    // either way supply missing leading 0
    number = firstChar === '0' ? n : '0' + n;
  } else {
    return false;
  }

  // remove all whitespace(s) before running test
  return pattern.test(number.replace(/\s+/g, ''));
}

export const range = (from, to, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};
