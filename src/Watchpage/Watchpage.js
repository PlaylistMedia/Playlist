import {
	background,
	Button,
	foreground,
	Logo,
	primary_font,
	primary_white,
	secondary_font,
} from "../Common/Common";
import styled from "styled-components";

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

	font-family: ${secondary_font};
	color: ${primary_white};
	font-size: x-large;

	width: auto;
	max-height: calc(100vh - 15vh);

	overflow-y: scroll;
	list-style: none;
`;
const QueueItem = styled.div`
	background-color: ${background};

	color: ${primary_white};
	font-family: ${secondary_font};
	width: 10em;
	height: 3em;

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
	width: calc(100% - 32em);
	display: flex;
	flex-direction: column;
	padding: 1em;
	background-color: ${foreground};
`;
const VideoPlayer = styled.div`
	align-items: flex-start;
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
		color: ${primary_white};
		font-size: 1em;
		margin-right: 20px;
	}
`;
// Slider for the video player
const SliderContainer = styled.div`
	width: 100%;
	margin-left: 20px;
	margin-right: 20px;
`;
const Slider = styled.input`
	accent-color: #f55050;
	width: 100%;
	height: 4px;
`;

const Watchpage = () => {
	return (
		<PageWrapper>
			<TopBar>
				<BarLeft>
					<Logo>
						P<span>LA</span>YLISt
					</Logo>
					<Button small className="invite-button">
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
						<img
							src="https://wallpaperaccess.com/full/1091882.jpg"
							alt="Walt."
							className="video"
						/>
					</VideoPlayer>
					<Timeline>
						<SliderContainer>
							<Slider
								type="range"
								min={0}
								max={0.999999}
								step="any"
								value={0.05}
							></Slider>
						</SliderContainer>
						<h3>1:23:22</h3>
					</Timeline>
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
};

export default Watchpage;
