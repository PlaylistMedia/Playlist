import { Button, Logo } from "../Common/Common";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
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
import PlayPNG from "./Play.png";
import "../Homepage/Modal.scss";

// Root component
const PageWrapper = styled.div`
	margin: 1em;
	display: flex;
	flex-direction: column;
`;

const Watching = (props) => {
	const watching = props.watching;
	const watchers = watching.map((watching) => {
		return (
			<img
				src="https://i.pinimg.com/736x/20/ea/28/20ea2869f5bd0b48d31864bfeba1d54d.jpg"
				alt="walter white"
				className="profile_picture"
			/>
		);
	});
	return watchers;
};

class Watchpage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			roomID: this.props.params.id,
			url: "",
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
			index: 0,
			watching: ["currentuser"],
			data: [],
		};
	}

	removeItemFromArray = (arr, value) => {
		var index = arr.indexOf(value);
		if (index > -1) {
			arr.splice(index, 1);
		}
		return arr;
	};

	Queue = (props) => {
		const links = props.links;
		const queue = links.map((links) => {
			return (
				<QueueItem>
					<img
						onClick={async () => {
							await this.setState({
								url: links.toString(),
							});
							this.removeItemFromArray(
								this.state.data,
								links.toString(),
							);
						}}
						src={PlayPNG}
						alt="No thumbnail found."
						className="thumbnail"
					/>
					<text>{`${links.toString().substring(0, 18)}...`}</text>
				</QueueItem>
			);
		});
		return queue;
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

	validURL(str) {
		var pattern = new RegExp(
			"^(https?:\\/\\/)?" + // protocol
				"((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
				"((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
				"(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
				"(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
				"(\\#[-a-z\\d_]*)?$",
			"i",
		); // fragment locator
		return !!pattern.test(str);
	}

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

						<Button
							size="small"
							className="invite-button"
							onClick={() => {
								navigator.clipboard.writeText(
									`${this.state.roomID}`,
								);
								alert(
									"The invite has been copied to your clipboard.",
								);
							}}
						>
							I<span>NV</span>ITE
						</Button>
					</BarLeft>
					<BarRight>
						<Watching watching={this.state.watching} />
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
								<IoPlayForward
									color="white"
									onClick={async () => {
										await this.setState({
											url: this.state.data.shift(),
										});
									}}
								/>
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
									onClick={() => {
										if (this.urlInput.value.length > 0) {
											if (
												this.validURL(
													this.urlInput.value,
												)
											) {
												this.setState({
													data: [
														...this.state.data,
														this.urlInput.value,
													],
												});
											}
										}
									}}
								>
									ADD
								</LinkAdd>
							</LinkBar>
						</LinkContainer>
					</PlayerContainer>

					<QueueContainer>
						<h1>queue:</h1>
						{/* Moved it to the class so 
						that I could add the click to play functionality */}
						<this.Queue links={this.state.data} />
					</QueueContainer>
				</Content>
			</PageWrapper>
		);
	}
}

function withParams(Component) {
	return (props) => <Component {...props} params={useParams()} />;
}
export default withParams(Watchpage);
