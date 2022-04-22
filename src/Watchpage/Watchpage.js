import { foreground, primary_white, secondary_font } from "../Common/Common";
import styled from "styled-components";

const QueueContainer = styled.div`
	display: list-item;
`;

const QueueItem = styled.div`
	background-color: ${foreground};
	color: ${primary_white};
	font-family: ${secondary_font};
	font-size: 2vmax;

	max-width: 10em;
	max-height: 4em;

	display: flex;
	align-items: center;
	overflow: hidden;
	padding: 20px;

	.thumbnail {
		justify-content: space-between;
		align-self: flex-end;
		margin-right: 20px;

		width: 3em;
		height: 3em;
	}
`;

const Watchpage = () => {
	return (
		<div>
			<QueueContainer>
				<li>
					<QueueItem>
						<img
							src="https://www.w3schools.com/css/pineapple.jpg"
							alt="Girl in a jacket"
							className="thumbnail"
						/>
						MAX LENGTH: 38 CHARACTERS
					</QueueItem>
				</li>
			</QueueContainer>
		</div>
	);
};

export default Watchpage;
