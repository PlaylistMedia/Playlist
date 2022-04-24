import { Link } from "react-router-dom";
import { Logo, Button, CenteredDiv } from "../Common/Common";
import styled from "styled-components";

const ListItem = styled.li`
	margin: 20px;
`;

const Homepage = () => {
	return (
		<div class="background">
			<Logo center title>
				P<span>LA</span>YLISt
			</Logo>
			<CenteredDiv>
				<ListItem>
					<Link to="/watch">
						<Button size="large">
							H<span>OS</span>T
						</Button>
					</Link>
				</ListItem>
				<ListItem>
					<Button size="large">
						SIG<span>NU</span>P
					</Button>
				</ListItem>
				<ListItem>
					<Button size="large">
						J<span>OI</span>N
					</Button>
				</ListItem>
			</CenteredDiv>
		</div>
	);
};

export default Homepage;
