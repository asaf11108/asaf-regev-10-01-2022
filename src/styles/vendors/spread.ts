// This library has been transformed from sass to css-in-js
// An include-media plugin for spreading css properties over breakpoints
// https://github.com/jackmcpickle/include-media-spread


import { forEach, forIn, size, zip } from "lodash-es";
import { BREAKPOINTS, device } from "./media";
import { getValueAndUnit } from "polished";
import { Styles } from "polished/lib/types/style";

interface ChangeValues {
  start: string;
  change: number;
}

// Adjust values from list
function adjustValues(progress: number, changeValuesMap: ChangeValues[], _ease: string): string {
  let adjustedValues: string[] = [];

  changeValuesMap.forEach(({start, change}) => {
      // adjust value based on type of ease
      const [value, unit] = getValueAndUnit(start);
      let adjusted = ease(progress, value, change, _ease);
      // adjust to 2 decimal places
      adjusted = Math.round(adjusted * 100) / 100;
      adjustedValues.push(adjusted + unit);
  })

  return adjustedValues.join(' ');
}

function changeMapList(startValue: string, endValue: string): ChangeValues[] {
  let startList = startValue.split(' ');
  let endList = endValue.split(' ');

  if (startList.length !== endList.length) {
    // Split lists into comparable values
    startList = splitList(startValue);
    endList = splitList(endValue);
  }

  const _changeValueList = changeValueList(startList, endList);
  
  return startList.map((start, index) => ({ start, change: _changeValueList[index] }));
}

function changeValueList(start: string[], end: string[]): number[] {
  // combines lists with matching pairs
  const list = zip(start, end);
  let changeValueList: number[] = [];
  // calculate change value on pairs

  forEach(list, pair => {
    const [val1] = getValueAndUnit(pair[1] as string | number);
    const [val0] = getValueAndUnit(pair[0] as string | number);
    changeValueList.push(val1 - val0);
  })

  return changeValueList;
}

// // adapted from http://www.kirupa.com/forum/showthread.php?378287-Robert-Penner-s-Easing-Equations-in-Pure-JS-%28no-jQuery%29
function ease(progress: number, startValue: number, change: number, _ease: string): number {
  // value increases evenly
  if (_ease === 'linear') {
    return change * progress + startValue;
  }

  // value increases on a curve, accelerating
  if (_ease === 'in-quad') {
    return change * progress * progress + startValue;
  }

  // value increases on a curve, decelerating
  if (_ease === 'out-quad') {
    return -change * progress * (progress - 2) + startValue;
  }

  // value accelerates sharply
  if (_ease === 'in-cubic') {
    return change * Math.pow(progress, 3) + startValue;
  }

  // value decelerates sharply
  if (_ease === 'out-cubic') {
    return change * (Math.pow(progress - 1, 3) + 1) + startValue;
  }

  // value accelerates more sharply
  if (_ease === 'in-quart') {
    return change * Math.pow(progress, 4) + startValue;
  }

  // value decelerates more sharply
  if (_ease === 'out-quart') {
    return -change * (Math.pow(progress - 1, 4) - 1) + startValue;
  }

  // value accelerates very sharply
  if (_ease === 'in-quint') {
    return change * Math.pow(progress, 5) + startValue;
  }

  // value decelerates very sharply
  if (_ease === 'out-quint') {
    return change * (Math.pow(progress - 1, 5) + 1) + startValue;
  }

  return 0;
}

function splitList(list: string): string[] {
  const listArr = list.split(' ');
  let top = '';
  let left = '';
  let bottom = '';
  let right = '';

  // top/bottom/left/right match
  if (listArr.length === 1) {
    top = listArr[0];
    right = listArr[0];
    bottom = listArr[0];
    left = listArr[0];
  } else if (listArr.length === 2) {
    // top/bottom match, left/right match
    top = listArr[1];
    bottom = listArr[1];
    right = listArr[2];
    left = listArr[2];
  } else if (listArr.length === 3) {
    // top/bottom differ, left/right match
    top = listArr[1];
    right = listArr[2];
    left = listArr[2];
    bottom = listArr[3];
  } else if (listArr.length === 4) {
    // top/bottom/left/right differ
    return [top, right, bottom, left];
  } else {
    console.warn(`Your ${list} is too large with ${listArr.length} properties`);
  }

  return [top, right, bottom, left];
}

/// @author Jack McNicol
/// @access public
////

///
/// Calculates the difference between property values and distributes them through your include-media breakpoints.
///

///  @param {property} $property - CSS property to set
//   @param {value | values} $start-values - Start value(s) of the property
//   @param {value | values} $end-values - End value(s) of the property
//   @param {linear | in-quad | out-quad | in-cubic | out-cubic | in-quart | out-quart | in-quint | out-quint } $ease [linear] - Easing function to use when calculating value helpful for fine-tuning some widths in the mid-range
///
///
export function spread(
  property: string,
  startValues: string,
  endValues: string,
  _ease = 'linear',
  breakpoints = BREAKPOINTS
): Styles {
  if (startValues === endValues) {
    console.warn('CSS spread: you are passing the same values');
  }

  const totalIterations = size(breakpoints); // Will loop through number of breakpoints
  let iteration = 1;
  const _changeMapList = changeMapList(startValues, endValues);
  let sumCss: Styles = {[property]: startValues};

  forIn(device, val => {
      sumCss[`@media ${val}`] = {
        [property]: adjustValues(iteration / totalIterations, _changeMapList, _ease)
      };
      iteration++;
  });

  return sumCss;
}
