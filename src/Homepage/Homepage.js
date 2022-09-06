import { useNavigate } from "react-router-dom";
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
import { Peer } from "peerjs";
import "./Modal.scss";

const ListItem = styled.li`
	margin: 2ch;
`;

export const ModalContentContainer = styled.div`
	padding: 2ch;
`;

export const TitleModal = styled.h1`
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
		font-size: 3ch;
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
	let navigate = useNavigate();
	ReactModal.defaultStyles.overlay.backgroundColor = "rgba(1.0,1.0,1.0,0.8)";

	return (
		<div class="background">
			<Logo center title>
				P<span>LA</span>YLISt
			</Logo>
			<CenteredDiv>
				<ListItem>
					<Button
						size="large"
						onClick={() => {
							let peer = new Peer();

							peer.on("open", (id) => {
								navigate(`/watch/${id}`);
							});
						}}
					>
						H<span>OS</span>T
					</Button>
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
									Signup is currently disabled.
								</TitleModal>
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
								<InputBox>
									<h1>Room ID</h1>

									<TextInput
										type="text"
										placeholder="ID of the other room"
										onKeyDown={(event) => {
											if (event.key === "Enter") {
												// TODO
											}
										}}
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
