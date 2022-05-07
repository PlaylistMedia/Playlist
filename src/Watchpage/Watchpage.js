import { Button, Logo } from "../Common/Common";
import styled from "styled-components";
import { Link } from "react-router-dom";
import React from "react";
import ReactPlayer from "react-player";
import { Duration } from "./Duration";
import { IoPause, IoPlay, IoPlayForward } from "react-icons/io5";
import {
	TopBar,
	BarLeft,
	BarRight,
	Content,
	PlayerContainer,
	VideoPlayer,
	Timeline,
	Icon,
	SliderContainer,
	Slider,
	LinkContainer,
	LinkBar,
	LinkInput,
	LinkAdd,
	QueueContainer,
	QueueItem,
} from "./Components";

// Root component
const PageWrapper = styled.div`
	margin: 1em;
	display: flex;
	flex-direction: column;
`;

class Watchpage extends React.Component {
	state = {
		url: "https://youtu.be/dQw4w9WgXcQ",
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
		this.setState({ playing: false });
	};

	handleSeekMouseUp = (e) => {
		this.setState({ seeking: false });
		this.player.seekTo(parseFloat(e.target.value));
	};

	handleProgress = (state) => {
		if (!this.state.seeking) {
			this.setState(state);
		}
	};

	handleDuration = (duration) => {
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
						<Logo>
							<Link to="/" className="link">
								P<span>LA</span>YLISt
							</Link>
						</Logo>

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
								onPause={this.handlePause}
								onPlaybackRateChange={
									this.handleOnPlaybackRateChange
								}
								onEnded={this.handleEnded}
								onError={(e) => console.log("Error: ", e)}
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
							<QueueItem>
								<img
									src="https://townsquare.media/site/442/files/2018/01/breaking-bad-hank-death-pic.jpg"
									alt="Girl in a jacket"
									className="thumbnail"
								/>
								Walter White Dies.
							</QueueItem>
							<QueueItem>
								<img
									src="https://townsquare.media/site/442/files/2018/01/breaking-bad-hank-death-pic.jpg"
									alt="Girl in a jacket"
									className="thumbnail"
								/>
								Walter White Dies.
							</QueueItem>
							<QueueItem>
								<img
									src="https://townsquare.media/site/442/files/2018/01/breaking-bad-hank-death-pic.jpg"
									alt="Girl in a jacket"
									className="thumbnail"
								/>
								Walter White Dies.
							</QueueItem>
							<QueueItem>
								<img
									src="https://townsquare.media/site/442/files/2018/01/breaking-bad-hank-death-pic.jpg"
									alt="Girl in a jacket"
									className="thumbnail"
								/>
								Walter White Dies.
							</QueueItem>
							<QueueItem>
								<img
									src="https://townsquare.media/site/442/files/2018/01/breaking-bad-hank-death-pic.jpg"
									alt="Girl in a jacket"
									className="thumbnail"
								/>
								Walter White Dies.
							</QueueItem>
							<QueueItem>
								<img
									src="https://townsquare.media/site/442/files/2018/01/breaking-bad-hank-death-pic.jpg"
									alt="Girl in a jacket"
									className="thumbnail"
								/>
								Walter White Dies.
							</QueueItem>
							<QueueItem>
								<img
									src="https://townsquare.media/site/442/files/2018/01/breaking-bad-hank-death-pic.jpg"
									alt="Girl in a jacket"
									className="thumbnail"
								/>
								Walter White Dies.
							</QueueItem>
							<QueueItem>
								<img
									src="https://townsquare.media/site/442/files/2018/01/breaking-bad-hank-death-pic.jpg"
									alt="Girl in a jacket"
									className="thumbnail"
								/>
								Walter White Dies.
							</QueueItem>
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
