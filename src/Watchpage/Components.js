import {
	background,
	foreground,
	primary_font,
	primary_red,
	primary_white,
	secondary_font,
} from "../Common/Common";
import styled from "styled-components";

// Top Bar
export const TopBar = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;
export const BarRight = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	.username {
		color: ${primary_white};
		font-family: ${primary_font};
		margin-right: 20px;
	}
	.profile_picture {
		border-radius: 50%;
		object-fit: cover;
		width: 4em;
		height: fit-content;
	}
`;
export const BarLeft = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	.invite-button {
		margin-left: 20px;
	}
`;

// Parent component for everything except the top bar
export const Content = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	height: 100%;
	width: 100%;
`;

// Components for the queue on the right side of the screen
export const QueueContainer = styled.div`
	display: flex list-item;
	align-self: flex-start;
	align-items: center;
	background-color: ${foreground};
	padding: 0em 1em 1em 1em;
	scroll-behavior: smooth;

	font-family: ${secondary_font};
	color: ${primary_white};
	font-size: x-large;

	width: auto;
	max-height: calc(100vh - 5vh);

	overflow-y: scroll;
	list-style: none;
`;
export const QueueItem = styled.div`
	background-color: ${background};

	color: ${primary_white};
	font-family: ${secondary_font};
	width: 12em;
	height: 2em;

	object-fit: cover;
	aspect-ratio: 1/1;
	font-size: 28px;

	display: flex;
	align-items: center;
	padding: 2rem;
	margin-bottom: 10px;

	overflow: hidden;
	overflow-wrap: break-word;

	.thumbnail {
		margin-right: 1em;
		height: 3em;
	}
`;

// Video Player, Container
export const PlayerContainer = styled.div`
	position: relative;
	width: calc(100% - 25%);
	height: auto;

	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	padding: 1em;
	background-color: ${foreground};
`;
export const VideoPlayer = styled.div`
	width: 100%;
	margin-bottom: 1em;
	.video {
		height: 100%;
		width: 100%;
		aspect-ratio: 16/9;
	}
`;
export const Timeline = styled.div`
	background-color: ${background};
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	width: 100%;
	h3 {
		margin: 20px;
		color: ${primary_white};
		font-size: 1em;
	}
	Button {
		margin-left: 20px;
	}
`;
// Slider for the video player
export const SliderContainer = styled.div`
	width: 100%;
	margin-left: 20px;
	margin-right: 20px;
	flex-direction: row;
	justify-content: space-around;
`;
export const Slider = styled.input`
	accent-color: #f55050;
	width: 100%;
	height: 4px;
`;

// Adding links bar
export const LinkContainer = styled.div`
	display: flex;
	padding-top: 20px;
	padding-bottom: 20px;
	flex-direction: row;
	justify-content: space-around;
`;
export const LinkBar = styled.div`
	background-color: ${background};
	width: 100%;

	display: flex;
	align-items: center;
	justify-content: space-between;

	font-size: 1em;
	font-family: ${primary_font};
`;
export const LinkAdd = styled.button`
	font-family: ${secondary_font};
	color: ${primary_white};
	background-color: ${primary_red};
	border-radius: 0;
	font-weight: 300;

	font-size: 2em;
	text-align: center;

	border: none;
	width: 5em;
	height: 2em;
`;
export const LinkInput = styled.input`
	width: 100%;
	height: 80%;
	padding-left: 20px;
	background: transparent;
	font-size: 2rem;
	letter-spacing: 1px;
	color: ${primary_white};
	border: none;
	&:focus {
		outline: none;
	}
`;

// Icon container
export const Icon = styled.div`
	margin-left: 20px;
	display: flex;
`;
