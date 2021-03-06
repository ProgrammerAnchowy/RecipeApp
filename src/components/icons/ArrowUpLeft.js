import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgArrowUpLeft(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="23"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className=""
      {...props}>
      <Path d="M17 17L7 7M7 17V7h10" />
    </Svg>
  );
}

export default SvgArrowUpLeft;
