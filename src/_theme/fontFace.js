import ShinGoBold from "./fonts/ShinGo/AOTFShinGoProBold.woff";

import ShinGoLight from "./fonts/ShinGo/AOTFShinGoProLight.woff";
import ShinGoMedium from "./fonts/ShinGo/AOTFShinGoProMedium.woff";

import ShinGoRegular from "./fonts/ShinGo/AOTFShinGoProRegular.woff";

const fontFace = `
 @font-face {
  font-family: 'ShinGo';
  font-style: normal;
  font-weight: normal;
  font-display: swap;
  src: local('ShinGo'), local('AOTFShinGoProRegular'), url(${ShinGoRegular}) format('woff');
}

@font-face {
  font-family: 'ShinGo';
  font-style: normal;
  font-weight: normal;
  font-display: swap;
  src: local('ShinGo'), local('AOTFShinGoProLight'), url(${ShinGoLight}) format('woff');
}

@font-face {
  font-family: 'ShinGo';
  font-style: normal;
  font-weight: normal;
  font-display: swap;
  src: local('ShinGo') local('AOTFShinGoProMedium'),, url(${ShinGoMedium}) format('woff');
}

@font-face {
  font-family: 'ShinGo';
  font-style: normal;
  font-weight: normal;
  font-display: swap;
  src: local('ShinGo'), local('AOTFShinGoProBold'), url(${ShinGoBold}) format('woff');
}
`;

export default fontFace;