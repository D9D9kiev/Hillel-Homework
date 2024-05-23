import { SvgXml } from "react-native-svg";

export default function ClearSVG(props) {
  const svgCode = `
  <svg width="800px" height="800px" viewBox="0 0 24 24" 
  fill="${props?.fill || "none"}" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 9L15 15" stroke="${
      props.stroke
    }" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15 9L9 15" stroke="${
      props.stroke
    }" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="12" cy="12" r="9" stroke="${
      props.stroke
    }" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
  return (
    <SvgXml
      xml={svgCode}
      width="100%"
      height="100%"
      // fill='#333'
      {...props}
    />
  );
}
