import { SvgXml } from "react-native-svg";

export default function SearchSVG(props) {
  const svgCode = `
  <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" 
    fill="${
      props?.fill || "none"
    }" width="800" height="800" viewBox="0 0 512 512">
    <path d="M500.011 442.325 334.933 277.248c17.472-27.861 27.733-60.672 27.733-95.915C362.667 81.344 281.344 0 181.333 0S0 81.344 0 181.333s81.344 181.333 181.333 181.333c35.221 0 68.011-10.261 95.872-27.691l165.077 165.056c7.616 7.595 18.112 11.968 28.885 11.968C493.717 512 512 493.675 512 471.211c0-10.752-4.395-21.27-11.989-28.886zM181.333 341.333c-88.235 0-160-71.765-160-160s71.787-160 160-160 160 71.765 160 160-71.765 160-160 160zm289.835 149.355c-5.141 0-10.155-2.091-13.781-5.717L294.912 322.496a181.038 181.038 0 0 0 27.563-27.563L484.95 457.386c3.605 3.648 5.717 8.683 5.717 13.803 0 10.752-8.768 19.499-19.499 19.499z"/>
    <path d="m87.509 181.312 38.72-58.091c3.264-4.907 1.92-11.52-2.965-14.784-4.864-3.221-11.499-1.963-14.805 2.965l-42.667 64a10.676 10.676 0 0 0 0 11.84l42.667 64c2.091 3.093 5.44 4.757 8.875 4.757 2.048 0 4.096-.576 5.909-1.813 4.907-3.264 6.229-9.877 2.965-14.784l-38.699-58.09zM205.269 85.653c-5.76-1.493-11.52 2.027-12.928 7.765l-42.667 170.667a10.643 10.643 0 0 0 7.765 12.928c.853.213 1.728.32 2.56.32 4.8 0 9.152-3.221 10.347-8.085l42.667-170.667c1.43-5.717-2.005-11.498-7.744-12.928zM296.896 175.424l-42.667-64c-3.285-4.928-9.941-6.208-14.784-2.965-4.907 3.264-6.229 9.877-2.965 14.784l38.699 58.091-38.72 58.091c-3.264 4.907-1.92 11.52 2.965 14.784a10.546 10.546 0 0 0 5.909 1.792c3.435 0 6.805-1.664 8.875-4.736l42.667-64a10.639 10.639 0 0 0 .021-11.841z"/>
  </svg>`;
  return (
    <SvgXml xml={svgCode} width="100%" height="100%" fill="#333" {...props} />
  );
}
