import React from 'react';
import { Link } from 'react-router-dom';

import { Layout, Row, Col, Button } from 'antd';

import './index.less';

const { Content, Footer } = Layout;

const MainPage = () => {
	return (
		<Layout id="antd-override-bg-color">
			<section className="svg hero-image">
				<div className="text hero-text">
					<h1 className="text title-text animated-fade-up">
						Be on the right track.
					</h1>
					<p className="text highlight-text animated-fade-up">
						Our collars are fuckin’ bomb, like, so good. You wish you had our
						collars. Imagine a world where you could track animals cheaper and
						more efficently. Deer? Hell yeah. Cats? Uh, duh. Humans? No, but
						secretly yes.
					</p>
					<Link to="app">
						<Button
							type="primary"
							size="large"
							className="antd-override-button-color animated-fade-up"
						>
							Visit Our Tracking Page
						</Button>
					</Link>
				</div>
			</section>

			<Content id="description">
				<Row type="flex" justify="space-between" className="desc-area">
					<figure className="svg desc-img deer-img" />
					<Col span={16} className="desc-area">
						<h1 className="text title-text">What do our collars do?</h1>
						<p className="text highlight-text">
							Doggo ipsum pupper maximum borkdrive much ruin diet very hand that
							feed shibe porgo he made many woofs, the neighborhood pupper stop
							it fren yapper heckin good boys length boy, long woofer shooberino
							lotsa pats doggorino.
						</p>
					</Col>
				</Row>

				<Row type="flex" justify="space-between" className="desc-area">
					<Col span={16} className="desc-area">
						<h1 className="text title-text">How did we make them?</h1>
						<p className="text highlight-text">
							Clouds floofs tungg mlem yapper, heckin ruff he made many woofs
							pupper waggy wags, shoob heckin good boys and girls borking doggo.
							Maximum borkdrive very hand that feed shibe floofs shibe heckin
							good boys and girls long doggo, I am bekom fat fat boi yapper
							corgo. Doggorino long woofer the neighborhood pupper pupperino,
							shoob. Very jealous pupper yapper clouds vvv, ur givin me a spook.
						</p>
					</Col>
					<figure className="svg desc-img house-img" />
				</Row>

				<Row type="flex" justify="space-between" className="desc-area">
					<figure className="svg desc-img partner-img" />
					<Col span={16} className="desc-area">
						<h1 className="text title-text">Why partner with us?</h1>
						<p className="text highlight-text">
							You are doing me a frighten vvv smol puggo very hand that feed
							shibe woofer, h*ck shooberino aqua doggo h*ck. wow such tempt
							heckin good boys and girls pupper. Wrinkler corgo long water shoob
							borkdrive length boy, yapper very good spot ur givin me a spook I
							am bekom fat shooberino, most angery pupper I have ever seen
							adorable doggo boofers.
						</p>
					</Col>
				</Row>
			</Content>

			<Footer>
				<Row type="flex" justify="space-between">
					<p>idk maybe link to something?</p>
					<p>and here</p>
				</Row>
			</Footer>
		</Layout>
	);
};

export default MainPage;
