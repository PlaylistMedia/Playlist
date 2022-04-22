import { Logo, Button, CenteredDiv } from "../Common/Common";

const Homepage = () => {
	return (
		<div class="background">
			<Logo center title>
				P<span>LA</span>YLISt
			</Logo>
			<CenteredDiv>
				<li>
					<Button large>
						H<span>OS</span>T
					</Button>
				</li>
				<li>
					<Button large>
						SIG<span>NU</span>P
					</Button>
				</li>
				<li>
					<Button large>
						J<span>OI</span>N
					</Button>
				</li>
			</CenteredDiv>
		</div>
	);
};

export default Homepage;
