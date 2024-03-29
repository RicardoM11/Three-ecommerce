import { motion } from "framer-motion";
import "./components.css";

const pathStyle = {
	fill: "none",
	stroke: "#fcfcfc",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	strokeWidth: "8px",
};
const fill = { fill: "#fff" };

const svgVariants = {
	hidden: { rotate: -180 },
	visible: {
		rotate: 0,
		transition: { duration: 1 },
	},
};

const pathVariants = {
	hidden: {
		opacity: 0,
		pathLength: 0,
	},
	visible: {
		opacity: 1,
		pathLength: 1,
		transition: {
			duration: 4,
			ease: "easeInOut",
		},
	},
};

const textVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 2,
			delay: 4,
		},
	},
};

const ballVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 2,
			delay: 6,
		},
	},
};

function LogoSVG() {
	return (
		<div className="logo-svg">
			<motion.svg
				viewBox="420 0 1390.62 448.31"
				variants={svgVariants}
				initial="hidden"
				animate="visible"
			>
				<motion.path
					variants={pathVariants}
					d="m848.72,301.96c.11-9,3.89-150.5,3.89-150.5,3.19-196.63,263.83-196.57,267,0,3.23-196.65,263.81-196.57,267,0,0,0-3.79,141.49-3.89,150.49"
					style={pathStyle}
				/>
				<motion.path
					variants={pathVariants}
					d="m1262.34,61.96c43.95,0,60.16,46.6,24.1,78.06-36.07,31.46-.69,159.62,96.38,175.93,0,0-135.95-11.65-169.74-145.64-19.81-110.69,49.26-108.36,49.26-108.36Z"
					style={pathStyle}
				/>
				<motion.path
					variants={pathVariants}
					d="m968.83,61.96c-43.95,0-60.16,46.6-24.1,78.06,36.07,31.46.69,159.62-96.38,175.93,0,0,135.95-11.65,169.74-145.64,19.81-110.69-49.26-108.36-49.26-108.36Z"
					style={pathStyle}
				/>
				<motion.g variants={textVariants}>
					<path
						d="m844.79,354.1v-5.52h48.8v5.52h-21.33v61.78h-6.15v-61.78h-21.33Z"
						style={fill}
					/>
					<path
						d="m979.76,415.88v-67.3c12.21.82,34.51-3.95,40.96,9.71,4.83,9.1,2.7,23.03-7.25,27.85-6.27,3.99-22.93,2.13-30.4,2.53v-5.62c9.05-.88,27.37,3.4,32.32-6.7,7.73-23.95-12.62-22.77-29.49-22.25v61.78h-6.15Zm29.68-30.37l16.56,30.37h-7.1l-16.4-30.37h6.93Z"
						style={fill}
					/>
					<path d="m1116.67,348.58v67.3h-6.15v-67.3h6.15Z" style={fill} />
					<path
						d="m1243.46,365.4c-.8-11.3-15.32-14.7-24.3-10.65-10.43,4.02-9.66,18.41.99,21.46,15.64,4.87,38.61,9.72,27.39,31.48-9.99,15.15-42.69,11.97-43.68-8.64h6.31c.85,12.01,16.66,14.61,25.78,10.66,14.57-6.82,8.69-22.04-5.64-24.24-6.46-1.8-16.27-4.45-20.34-8.91-12.03-12.32,2.24-30.51,17.62-28.95,10.79-.29,21.49,6.56,21.82,17.78h-5.95Z"
						style={fill}
					/>
					<path
						d="m1357.24,415.88h-19.72v-67.3c10.12.46,28.98-1.88,37.38,4.01,25.21,16.01,16.24,65.96-17.66,63.29Zm-13.57-5.52c22.27,1.41,39.32-2.07,39.44-28.3-.25-26.64-17.12-29.3-39.44-27.97v56.26Z"
						style={fill}
					/>
				</motion.g>
				<motion.path
					variants={ballVariants}
					d="m999.85,103.21c-.14,36.93-62.1,36.92-62.23,0,.14-36.92,62.1-36.92,62.23,0Z"
					style={fill}
				/>
				<motion.path
					variants={ballVariants}
					d="m1292.13,103.21c-.14,36.93-62.1,36.92-62.23,0,.14-36.92,62.1-36.92,62.23,0Z"
					style={fill}
				/>
			</motion.svg>
		</div>
	);
}

export default LogoSVG;
