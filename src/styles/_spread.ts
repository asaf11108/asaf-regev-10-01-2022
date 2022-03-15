import { css } from "@emotion/react";
import { forIn, get, size, zip } from "lodash-es";
import { BREAKPOINTS, CssType, media } from "./media";

// interface ChangeValues {
//   start: any;
//   change: any
// }

// // Adjust values from list
// function adjustValues(progress: number, changeValuesMap: ChangeValues[], _ease) {
//   let adjustedValues = {};

//   changeValuesMap.forEach(({start, change}) => {
//       // adjust value based on type of ease
//       let adjusted = ease(progress, start, change, _ease);
//       // adjust to 2 decimal places
//       adjusted = Math.round(adjusted * 100) / 100;
//       let adjustedValues = list.join(adjustedValues, adjusted, space);
//   })

//   return cleanList(adjustedValues);
// }

// function changeMapList(startValue, endValue) {
//   const differentLengths = startValue.length != endValue.length;
//   let startList;
//   let endList;

//   if (differentLengths) {
//     // Split lists into comparable values
//     startList = splitList(startValue);
//     endList = splitList(endValue);
//   }

//   const changeValueList = changeValueList(startList, endList);
//   const fullChangeMapList = [];

//  zip(startList, changeValueList).forEach(({ start, change }) => {
//     const _changeMapList = {
//       start: start,
//       change: change,
//     };
//     const fullChangeMapList = list.append(fullChangeMapList, _changeMapList, $separator: comma);
//   }
//   @return $full-changeMapList;
// }

// function changeValueList($start, $end) {
//   // combines lists with matching pairs
//   $list: zip($start, $end);
//   $change-value-list: ();
//   // calculate change value on pairs

//   @each $l in $list {
//     $change: nth($l, 2) - nth($l, 1);
//     $change-value-list: list.join($change-value-list, $change, $separator: comma);
//   }

//   @return $change-value-list;
// }

// // adapted from http://www.kirupa.com/forum/showthread.php?378287-Robert-Penner-s-Easing-Equations-in-Pure-JS-%28no-jQuery%29
// function ease($progress, $start-value, $change, $ease) {
//   // value increases evenly
//   @if $ease == linear {
//     @return $change * $progress + $start-value;
//   }

//   // value increases on a curve, accelerating
//   @if $ease == in-quad {
//     @return $change * $progress * $progress + $start-value;
//   }

//   // value increases on a curve, decelerating
//   @if $ease == out-quad {
//     @return -$change * $progress * ($progress - 2) + $start-value;
//   }

//   // value accelerates sharply
//   @if $ease == in-cubic {
//     @return $change * math.pow($progress, 3) + $start-value;
//   }

//   // value decelerates sharply
//   @if $ease == out-cubic {
//     @return $change * (math.pow($progress - 1, 3) + 1) + $start-value;
//   }

//   // value accelerates more sharply
//   @if $ease == in-quart {
//     @return $change * math.pow($progress, 4) + $start-value;
//   }

//   // value decelerates more sharply
//   @if $ease == out-quart {
//     @return -$change * (math.pow($progress - 1, 4) - 1) + $start-value;
//   }

//   // value accelerates very sharply
//   @if $ease == in-quint {
//     @return $change * math.pow($progress, 5) + $start-value;
//   }

//   // value decelerates very sharply
//   @if $ease == out-quint {
//     @return $change * (math.pow($progress - 1, 5) + 1) + $start-value;
//   }
// }

// // Fixes issue with single value list adding comma to end
// function clean-list($list) {
//   @return if(list.length($list) == 1, list.nth($list, 1), $list);
// }

// function splitList($list) {
//   $list-size: length($list);
//   $top: '';
//   $left: '';
//   $bottom: '';
//   $right: '';

//   // top/bottom/left/right match
//   @if ($list-size == 1) {
//     $top: $list;
//     $right: $list;
//     $bottom: $list;
//     $left: $list;
//   } @else if ($list-size == 2) {
//     // top/bottom match, left/right match
//     $top: nth($list, 1);
//     $bottom: nth($list, 1);
//     $right: nth($list, 2);
//     $left: nth($list, 2);
//   } @else if ($list-size == 3) {
//     // top/bottom differ, left/right match
//     $top: nth($list, 1);
//     $right: nth($list, 2);
//     $left: nth($list, 2);
//     $bottom: nth($list, 3);
//   } @else if ($list-size == 4) {
//     // top/bottom/left/right differ
//     @return $list;
//   } @else {
//     @warn 'Your #{$list} is too large with #{$list-size} properties';
//   }

//   @return $top $right $bottom $left;
// }

// /// @author Jack McNicol
// /// @access public
// ////

// ///
// /// Calculates the difference between property values and distributes them through your include-media breakpoints.
// ///

// ///  @param {property} $property - CSS property to set
// //   @param {value | values} $start-values - Start value(s) of the property
// //   @param {value | values} $end-values - End value(s) of the property
// //   @param {linear | in-quad | out-quad | in-cubic | out-cubic | in-quart | out-quart | in-quint | out-quint } $ease [linear] - Easing function to use when calculating value helpful for fine-tuning some widths in the mid-range
// ///
// ///

export function spread(
  property: string,
  startValues: string,
  endValues: string,
  _ease: string,
  breakpoints = BREAKPOINTS
) {
  if (startValues === endValues) {
    console.warn('You are passing the same values');
  }

  // #{property}: #{startValues}; // default values

  const totalIterations = size(breakpoints); // Will loop through number of breakpoints
  const _changeMapList = changeMapList(startValues, endValues);
  let sumCss = '';

  forIn(breakpoints, (val, key) => {
      sumCss += get(media, key)(css`
        margin: 20px
      `)
      // #{property}: adjustValues($progress, $changeMapList, _ease);
  });
}
