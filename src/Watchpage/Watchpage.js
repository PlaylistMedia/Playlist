import {
	background,
	Button,
	foreground,
	Logo,
	primary_font,
	primary_red,
	primary_white,
	secondary_font,
} from "../Common/Common";
import styled from "styled-components";
import { Link } from "react-router-dom";
import React from "react";
import ReactPlayer from "react-player";
import { IoPause, IoPlay, IoPlayForward } from "react-icons/io5";

// Root component
const PageWrapper = styled.div`
	margin: 1em;
	display: flex;
	flex-direction: column;
`;

// Top Bar
const TopBar = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;
const BarRight = styled.div`
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
const BarLeft = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	.invite-button {
		margin-left: 20px;
	}
`;

// Parent component for everything except the top bar
const Content = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	height: 100%;
	width: 100%;
`;

// Components for the queue on the right side of the screen
const QueueContainer = styled.div`
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
const QueueItem = styled.div`
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
const PlayerContainer = styled.div`
	position: relative;
	width: calc(100% - 30%);
	height: calc(100% - 30%);

	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	padding: 1em;
	background-color: ${foreground};
`;
const VideoPlayer = styled.div`
	width: 100%;
	margin-bottom: 1em;
	.video {
		height: 100%;
		width: 100%;
		aspect-ratio: 16/9;
	}
`;
const Timeline = styled.div`
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
const SliderContainer = styled.div`
	width: 100%;
	margin-left: 20px;
	margin-right: 20px;
	flex-direction: row;
	justify-content: space-around;
`;
const Slider = styled.input`
	accent-color: #f55050;
	width: 100%;
	height: 4px;
`;

// Adding links bar
const LinkContainer = styled.div`
	display: flex;
	padding-top: 20px;
	padding-bottom: 20px;
	flex-direction: row;
	justify-content: space-around;
`;
const LinkBar = styled.div`
	background-color: ${background};
	width: 100%;

	display: flex;
	align-items: center;
	justify-content: space-between;

	font-size: 1em;
	font-family: ${primary_font};
`;
const LinkAdd = styled.button`
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
const LinkInput = styled.input`
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

const Icon = styled.div`
	margin-left: 20px;
	display: flex;
`;

function Duration({ className, seconds }) {
	return (
		<time dateTime={`P${Math.round(seconds)}S`} className={className}>
			{format(seconds)}
		</time>
	);
}

function format(seconds) {
	const date = new Date(seconds * 1000);
	const hh = date.getUTCHours();
	const mm = date.getUTCMinutes();
	const ss = pad(date.getUTCSeconds());
	if (hh) {
		return `${hh}:${pad(mm)}:${ss}`;
	}
	return `${mm}:${ss}`;
}

function pad(string) {
	return ("0" + string).slice(-2);
}

class Watchpage extends React.Component {
	state = {
		url: null,
		pip: false,
		playing: false,
		controls: false,
		light: false,
		volume: 0.8,
		muted: false,
		played: 0,
		loaded: 0,
		duration: 0,
		playbackRate: 1.0,
		loop: false,
		index: 1,
	};

	load = (url) => {
		this.setState({
			url: url,
			played: 0,
			loaded: 0,
			pip: false,
		});
	};

	handleSeekMouseDown = (e) => {
		this.setState({ seeking: true });
	};

	handleSeekChange = (e) => {
		this.setState({ played: parseFloat(e.target.value) });
	};

	handlePlayPause = () => {
		this.setState({ playing: !this.state.playing });
	};
	handlePause = () => {
		console.log("onPause");
		this.setState({ playing: false });
	};

	handleSeekMouseUp = (e) => {
		this.setState({ seeking: false });
		this.player.seekTo(parseFloat(e.target.value));
	};

	handleProgress = (state) => {
		console.log("onProgress", state);
		// We only want to update time slider if we are not currently seeking
		if (!this.state.seeking) {
			this.setState(state);
		}
	};

	handleDuration = (duration) => {
		console.log("onDuration", duration);
		this.setState({ duration });
	};

	ref = (player) => {
		this.player = player;
	};

	render() {
		const {
			url,
			playing,
			controls,
			light,
			volume,
			muted,
			duration,
			loop,
			played,
			playbackRate,
			pip,
		} = this.state;
		return (
			<PageWrapper>
				<TopBar>
					<BarLeft>
						<Link to="/">
							<Logo>
								P<span>LA</span>YLISt
							</Logo>
						</Link>
						<Button size="small" className="invite-button">
							I<span>NV</span>ITE
						</Button>
					</BarLeft>
					<BarRight>
						<h1 className="username">Hello, Jesse!</h1>
						<img
							src="https://i.pinimg.com/736x/20/ea/28/20ea2869f5bd0b48d31864bfeba1d54d.jpg"
							alt="Girl in a jacket"
							className="profile_picture"
						/>
					</BarRight>
				</TopBar>

				<Content>
					<PlayerContainer>
						<VideoPlayer>
							<ReactPlayer
								ref={this.ref}
								className="video"
								width={"100%"}
								height={"100%"}
								url={url}
								playing={playing}
								pip={pip}
								controls={controls}
								light={light}
								loop={loop}
								playbackRate={playbackRate}
								volume={volume}
								onStart={() => this.setState({ playing: true })}
								muted={muted}
								onBuffer={() => console.log("onBuffer")}
								onPause={this.handlePause}
								onPlaybackRateChange={
									this.handleOnPlaybackRateChange
								}
								onSeek={(e) => console.log("onSeek", e)}
								onEnded={this.handleEnded}
								onError={(e) => console.log("onError", e)}
								onProgress={this.handleProgress}
								onDuration={this.handleDuration}
							/>
						</VideoPlayer>
						<Timeline>
							<Icon>
								{playing ? (
									<IoPause
										color="white"
										onClick={this.handlePlayPause}
									/>
								) : (
									<IoPlay
										color="white"
										onClick={this.handlePlayPause}
									/>
								)}
							</Icon>
							<Icon>
								<IoPlayForward color="white" />
							</Icon>
							<SliderContainer>
								<Slider
									type="range"
									min={0}
									max={0.999999}
									step="any"
									value={played}
									onMouseDown={this.handleSeekMouseDown}
									onChange={this.handleSeekChange}
									onMouseUp={this.handleSeekMouseUp}
								></Slider>
							</SliderContainer>
							<h3>
								<Duration seconds={duration * played} />
							</h3>
						</Timeline>
						<LinkContainer>
							<LinkBar>
								<LinkInput
									type="text"
									placeholder="Enter a URL here"
									ref={(input) => {
										this.urlInput = input;
									}}
								></LinkInput>
								<LinkAdd
									onClick={() =>
										this.setState({
											url: this.urlInput.value,
										})
									}
								>
									ADD
								</LinkAdd>
							</LinkBar>
						</LinkContainer>
					</PlayerContainer>

					<QueueContainer>
						<h1>queue:</h1>
						<li>
							<QueueItem>
								<img
									src="https://townsquare.media/site/442/files/2018/01/breaking-bad-hank-death-pic.jpg"
									alt="Girl in a jacket"
									className="thumbnail"
								/>
								Walter White Dies.
							</QueueItem>
						</li>
					</QueueContainer>
				</Content>
			</PageWrapper>
		);
	}
}

export default Watchpage;
