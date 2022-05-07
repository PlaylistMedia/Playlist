import { Link } from "react-router-dom";
import {
	Logo,
	Button,
	CenteredDiv,
	primary_font,
	primary_white,
	foreground,
	primary_red,
} from "../Common/Common";
import styled from "styled-components";
import ReactModal from "react-modal";
import React, { useState } from "react";
import "./Modal.scss";

const ListItem = styled.li`
	margin: 2ch;
`;

const ModalContentContainer = styled.div`
	padding: 2ch;
`;

const TitleModal = styled.h1`
	font-family: ${primary_font};
	font-size: 8ch;

	color: ${primary_white};
`;

const InputBox = styled.div`
	background-color: ${foreground};
	display: flex;
	flex-direction: column;
	padding-left: 2ch;
	padding-right: 2ch;

	margin-bottom: 2ch;
	h1 {
		font-size: 5ch;
		font-family: ${primary_font};
		color: ${primary_white};
	}
`;

const TextInput = styled.input`
	background: transparent;
	font-size: 5ch;
	padding-bottom: 1ch;
	letter-spacing: 1px;

	color: ${primary_red};
	border: none;
	&:focus {
		outline: none;
	}
`;

const Homepage = () => {
	const [loginModalState, toggleLoginModal] = useState();
	const [signupModalState, toggleSignupModal] = useState();
	ReactModal.defaultStyles.overlay.backgroundColor = "rgba(1.0,1.0,1.0,0.8)";

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
					<div>
						<Button size="large" onClick={toggleSignupModal}>
							SI<span>GN</span>UP
						</Button>
						<ReactModal
							isOpen={signupModalState}
							shouldCloseOnOverlayClick={true}
							onRequestClose={() => toggleSignupModal(false)}
							className="Modal"
							overlayClassName="Overlay"
						>
							<ModalContentContainer>
								<TitleModal>
									Si<span>gn</span>up
								</TitleModal>

								<InputBox>
									<h1>Username</h1>
									<TextInput
										type="text"
										placeholder="Enter your Username"
									></TextInput>
								</InputBox>

								<InputBox>
									<h1>Password</h1>
									<TextInput
										type="text"
										placeholder="Enter your Password"
									></TextInput>
								</InputBox>

								<InputBox>
									<h1>Email</h1>
									<TextInput
										type="text"
										placeholder="Enter your Email"
									></TextInput>
								</InputBox>
							</ModalContentContainer>
						</ReactModal>
					</div>
				</ListItem>

				<ListItem>
					<div>
						<Button size="large" onClick={toggleLoginModal}>
							J<span>OI</span>N
						</Button>
						<ReactModal
							isOpen={loginModalState}
							shouldCloseOnOverlayClick={true}
							onRequestClose={() => toggleLoginModal(false)}
							className="Modal"
							overlayClassName="Overlay"
						>
							<ModalContentContainer>
								<TitleModal>
									Lo<span>gi</span>n
								</TitleModal>

								<InputBox>
									<h1>Username</h1>
									<TextInput
										type="text"
										placeholder="Enter your Username"
									></TextInput>
								</InputBox>

								<InputBox>
									<h1>Password</h1>
									<TextInput
										type="text"
										placeholder="Enter your Password"
									></TextInput>
								</InputBox>
							</ModalContentContainer>
						</ReactModal>
					</div>
				</ListItem>
			</CenteredDiv>
		</div>
	);
};

export default Homepage;
