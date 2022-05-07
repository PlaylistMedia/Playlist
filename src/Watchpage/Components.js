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
		font-family: ${secondary_font};
		@media screen and (max-width: 1024px) {
			margin-right: 1ch;
			font-size: 3ch;
		}
		font-size: 4ch;
		margin-right: 2ch;
	}
	.profile_picture {
		border-radius: 50%;
		object-fit: cover;
		@media screen and (max-width: 1024px) {
			width: 2em;
		}
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
		margin-left: 2ch;
	}
`;

// Parent component for everything except the top bar
export const Content = styled.div`
	display: flex;
	@media screen and (max-width: 1024px) {
		flex-direction: column;
		align-items: center;
		margin-top: 2ch;
	}
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
	margin-left: 2ch;

	font-family: ${secondary_font};
	color: ${primary_white};

	font-size: x-large;

	width: calc(100% - 80%);
	max-height: calc(100vh - 4vh);

	overflow-y: scroll;
	list-style: none;

	@media screen and (max-width: 1024px) {
		align-self: auto;
		margin-top: 2ch;
		width: calc(100% - 25%);
		margin-left: 0px;
	}
`;
export const QueueItem = styled.div`
	background-color: ${background};

	color: ${primary_white};
	font-family: ${secondary_font};

	min-width: 2em;

	height: 2em;

	object-fit: cover;

	font-size: 3ch;

	display: flex;
	align-items: center;
	padding: 2rem;
	margin-bottom: 1ch;

	overflow: hidden;
	overflow-wrap: break-word;

	.thumbnail {
		margin-right: 1em;
		height: 3em;
		width: 3em;
		aspect-ratio: 1/1;
		object-fit: cover;
	}
`;

// Video Player, Container
export const PlayerContainer = styled.div`
	position: relative;
	width: calc(100% - 25%);
	height: calc(100% - 75%);

	@media screen and (max-width: 1024px) {
		width: calc(100% - 23%);
	}

	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	padding: 1em;
	background-color: ${foreground};
`;
export const VideoPlayer = styled.div`
	width: 100%;

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
	font-family: ${primary_font};
	font-size: 2ch;
	margin-bottom: 1ch;
	margin-top: 2ch;
	h3 {
		margin: 2ch;
		color: ${primary_white};
		font-size: 1em;
	}
	Button {
		margin-left: 2ch;
	}
`;
// Slider for the video player
export const SliderContainer = styled.div`
	width: 100%;
	margin-left: 2ch;
	margin-right: 2ch;
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
	padding-top: 2ch;
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
