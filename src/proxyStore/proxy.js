import { proxy } from "valtio";

const proxyState = proxy({
	inIntro: true,
	inHome: true,
	inDisplayer: false,
	inCustomizer: false,
	inFeaturePage: false,
	inMockup: false,
	inCanvas: false,
	color: "#EFBD48",
	bg: "#101010",
	homeBtn: "#484848",
	isLogoTexture: true,
	isFullTexture: false,
	logoDecal: "./threejs.png",
	fullDecal: "./threejs.png",
});

export const homeProxy = proxy({
	showMaterials: true,
	showEditPanel: false,
});

export default proxyState;
