import styled from "styled-components";
import "./Common.scss";

const primary_red = "#ca2525";
const primary_white = "#ffffff";
const background = "#020202";
const foreground = "#151515";
const primary_font = "'Ubuntu', sans-serif";
const secondary_font = "'Ubuntu Condensed', sans-serif";
const logo_font = "Unica One";

const fontsize = {
	TITLE: "12em",
	H1FONTSIZE: "4em",
	H2FONTSIZE: "2em",
	H3FONTSIZE: "1em",
};

const Logo = styled.h1`
	font-family: "${logo_font}";
	font-weight: 400;

	color: ${primary_white};
	text-align: ${(props) => (props.center ? "center" : "unset")};
	margin: 0;
	padding: 0;

	font-size: ${(props) =>
		props.title ? fontsize.TITLE : fontsize.H1FONTSIZE};
	@media screen and (max-width: 1366px) {
		font-size: ${(props) => (props.title ? "8em" : "2em")};
	}

	span {
		color: ${primary_red};
		font-size: inherit;
		font-family: ${logo_font};
		display: inline-block;
	}
	.link {
		text-decoration: none;
		color: ${primary_white};
	}
`;

const CenteredDiv = styled.div`
	margin: 0;
	position: absolute;
	top: 50%;
	left: 50%;
	-ms-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);

	display: list-item;
`;

const Button = styled.button`
	font-family: ${secondary_font};
	color: ${primary_white};
	background-color: ${foreground};
	border-radius: 0;
	font-weight: 300;

	font-size: ${({ size }) =>
		(size === "small" && fontsize.H2FONTSIZE) ||
		(size === "large" && fontsize.H1FONTSIZE) ||
		(size === "tiny" && fontsize.H3FONTSIZE)};

	@media screen and (max-width: 1366px) {
		font-size: ${({ size }) =>
			(size === "small" && "1em") ||
			(size === "large" && "2em") ||
			(size === "tiny" && "1em")};
	}

	border: none;
	width: 5em;
	height: 2em;

	span {
		color: ${primary_red};
		font-size: inherit;
		font-family: inherit;
		display: inline-block;
	}
`;

export {
	// Variables
	primary_red,
	primary_white,
	background,
	foreground,
	primary_font,
	secondary_font,
	logo_font,
	// Styled components
	Logo,
	Button,
	CenteredDiv,
};
