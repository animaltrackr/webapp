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
						The current animal tracking collars on the market are a heavy duty
						design, for tracking in difficult terrain. The lack of development
						in this space has forced vastly different user groups to settle on a
						"one-size-fits-all" solution. Wildlife tracking in urban
						environments require a different product, which is cheaper, lighter,
						and more reliable in an industrial setting.
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
							Unlike the trackers on the market, our collars are reliable in an
							urban setting. Urban settings provide an asset that remote
							tracking areas can not: blanket cell coverage. We provide a
							mechanism for users to configure the maximum acceptable error
							radius, using LTE if it meets accuracy settings, otherwise falling
							back to traditional GPS. This enables our collars to save power,
							lasting longer for your study's needs.
						</p>
					</Col>
				</Row>

				<Row type="flex" justify="space-between" className="desc-area">
					<Col span={16} className="desc-area">
						<h1 className="text title-text">How did we make them?</h1>
						<p className="text highlight-text">
							Just like any sound structure, our trackers are built with a solid
							foundation. Our server runs in a AWS EC2 instance, using a
							Postresql database with a Django backend. Our backend is the hub
							for communication between our tracker and our frontend, providing
							a RESTful API service. The frontend is written using in React and
							all of our code is hosted in Github configured with CircleCI to
							automate deployments and ensure code quality.
						</p>
					</Col>
					<figure className="svg desc-img house-img" />
				</Row>

				<Row type="flex" justify="space-between" className="desc-area">
					<figure className="svg desc-img partner-img" />
					<Col span={16} className="desc-area">
						<h1 className="text title-text">Why partner with us?</h1>
						<p className="text highlight-text">
							We're a group of passionate students who enjoy solving interesting
							problems. We offer an affordable, and flexible option suitable for
							your needs.
						</p>
					</Col>
				</Row>
			</Content>

			<Footer>
				<Row type="flex" justify="space-between">
					<p>we're ready to be production ready</p>
					<p>and here</p>
				</Row>
			</Footer>
		</Layout>
	);
};

export default MainPage;
