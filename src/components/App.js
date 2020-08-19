import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import styles from './App.module.css';
import myImage from './image.png';

const options = {
	loop: true,
	margin: 10,
	nav: true,
	dots: false,
	spacePadding: 15,
	responsive: {
		500: {
			items: 1,
		},
		768: {
			items: 2,
		},
		964: {
			items: 3,
		},
		1200: {
			items: 4,
		},
	},
};

const App = () => {
	return (
		<React.Fragment>
			{/* navbar */}
			<nav className={`${styles.customnav}`}>
				<div>
					<span className={`${styles.brand}`}>Brand</span>
					<span className={`${styles.showlarge}`}>Real reviews that help you choose</span>
				</div>
				<div className="nav-item dropdown">
					<a
						className="nav-link dropdown-toggle"
						href="#"
						id="navbarDropdown"
						role="button"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					>
						Dropdown
					</a>
					<div className={`dropdown-menu`} aria-labelledby="navbarDropdown">
						<a className="dropdown-item" href="#">
							Action
						</a>
						<a className="dropdown-item" href="#">
							Another action
						</a>
						<div className="dropdown-divider"></div>
						<a className="dropdown-item" href="#">
							Something else here
						</a>
					</div>
				</div>
			</nav>

			{/* main page carousel */}
			<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
				<ol className="carousel-indicators">
					<li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
					<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
					<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
				</ol>
				<div className="carousel-inner">
					<div className={`carousel-item active`} style={{ height: '95vh' }}>
						<img src="https://picsum.photos/200/300" className={`d-block w-100`} alt="..." />
						<div className="carousel-caption d-sm-block">
							<h5>First slide label</h5>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</div>
					</div>
					<div className="carousel-item" style={{ height: '95vh' }}>
						<img src="https://picsum.photos/200/300" className="d-block w-100" alt="..." />
						<div className="carousel-caption d-sm-block ">
							<h5>First slide label</h5>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</div>
					</div>
					<div className="carousel-item" style={{ height: '95vh' }}>
						<img src="https://picsum.photos/200/300" className="d-block w-100" alt="..." />
						<div className="carousel-caption d-sm-block">
							<h5>First slide label</h5>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</div>
					</div>
				</div>
				<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="sr-only">Previous</span>
				</a>
				<a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="sr-only">Next</span>
				</a>
			</div>

			{/* about us section */}

			<div className={`container mt-5`}>
				<div className={`row`}>
					<div className="col-sm-12 d-md-none text-center">
						<img src={myImage} className={`img img-fluid`} />
					</div>
					<div className={`col-md-7 col-sm-12 text-justify`}>
						<h1>Brand</h1>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione quasi inventore minus
							cupiditate, dolore tenetur dolor exercitationem nulla. Obcaecati corrupti natus voluptatem
							quae corporis adipisci incidunt consectetur officia dicta unde assumenda, iste eos ullam
							mollitia sequi, eum optio itaque quis nam vitae molestias laboriosam nobis. Ducimus earum
							magnam beatae sunt sit quae quia eos similique rem hic enim suscipit accusamus, aperiam
							natus repellat ex adipisci eligendi.
						</p>
						<button className={`btn btn-success btn-lg`}>Review button</button>
					</div>
					<div className={`col-md-5 d-sm-none d-md-block`}>
						<img src={myImage} className={`img img-fluid`} />
					</div>
				</div>
			</div>

			{/* services section */}
			<section id="hiring">
				<div className="container">
					<div className="row hiring">
						<div className="col-md-3 text-center">
							<div className="icon">
								<i className="fa fa-gift"></i>
							</div>
							<br />
							<h3> &nbsp;&nbsp;&nbsp;+675</h3>
							<p> &nbsp; &nbsp; &nbsp; Products</p>
						</div>
						<div className="col-md-3 text-center">
							<div className="icon">
								<i className="fa fa-apple"></i>
							</div>
							<br />
							<h3> &nbsp;&nbsp;&nbsp;+936</h3>
							<p> &nbsp; &nbsp; &nbsp; Brands</p>
						</div>
						<div className="col-md-3 text-center">
							<div className="icon">
								<i className="fa fa-user"></i>
							</div>
							<br />
							<h3> &nbsp;&nbsp;&nbsp;+378</h3>
							<p> &nbsp; &nbsp; &nbsp; Customers</p>
						</div>
						<div className="col-md-3 text-center">
							<div className="icon">
								<i className="fa fa-shopping-cart"></i>
							</div>
							<br />
							<h3> &nbsp;&nbsp;&nbsp;+524</h3>
							<p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Business Partners</p>
						</div>
					</div>
				</div>
			</section>

			{/* buyers section */}
			<div className="buyer_profile">
				<div className="container">
					<OwlCarousel className="owl-theme" {...options}>
						<div className="item" style={{ margin: '0rem 1rem' }}>
							<div className="pro_slide">
								<div className="img_part">
									<img
										src="https://image.my.ratemyagent.com/lib/fe3415707564067b771379/m/1/d0644b3b-37df-4fbc-8a31-81e7ebebc00d.png"
										alt=""
										title=""
										style={{ height: '150px', width: '150px' }}
									/>
								</div>
								<h6>
									Jane
									<br />
									South Morang, VIC
								</h6>
								<div className="content_part">
									<p>
										“Without the objective information from RateMyAgent, I could have got 10 agents
										in to do appraisals, and I still would have had no idea who was the best one to
										go with.”
									</p>
								</div>
								<div className="btn_part">
									<a href="https://cloud.my.ratemyagent.com/real-reviews-real-people-Jane">
										Read more
									</a>
								</div>
							</div>
						</div>
						<div className="item">
							<div className="pro_slide">
								<div className="img_part">
									<img
										src="https://image.my.ratemyagent.com/lib/fe3415707564067b771379/m/1/d0644b3b-37df-4fbc-8a31-81e7ebebc00d.png"
										alt=""
										title=""
										style={{ height: '150px', width: '150px' }}
									/>
								</div>
								<h6>
									Jane
									<br />
									South Morang, VIC
								</h6>
								<div className="content_part">
									<p>
										“Without the objective information from RateMyAgent, I could have got 10 agents
										in to do appraisals, and I still would have had no idea who was the best one to
										go with.”
									</p>
								</div>
								<div className="btn_part">
									<a href="https://cloud.my.ratemyagent.com/real-reviews-real-people-Jane">
										Read more
									</a>
								</div>
							</div>
						</div>
						<div className="item">
							<div className="pro_slide">
								<div className="img_part">
									<img
										src="https://image.my.ratemyagent.com/lib/fe3415707564067b771379/m/1/d0644b3b-37df-4fbc-8a31-81e7ebebc00d.png"
										alt=""
										title=""
										style={{ height: '150px', width: '150px' }}
									/>
								</div>
								<h6>
									Jane
									<br />
									South Morang, VIC
								</h6>
								<div className="content_part">
									<p>
										“Without the objective information from RateMyAgent, I could have got 10 agents
										in to do appraisals, and I still would have had no idea who was the best one to
										go with.”
									</p>
								</div>
								<div className="btn_part">
									<a href="https://cloud.my.ratemyagent.com/real-reviews-real-people-Jane">
										Read more
									</a>
								</div>
							</div>
						</div>
						<div className="item">
							<div className="pro_slide">
								<div className="img_part">
									<img
										src="https://image.my.ratemyagent.com/lib/fe3415707564067b771379/m/1/d0644b3b-37df-4fbc-8a31-81e7ebebc00d.png"
										alt=""
										title=""
										style={{ height: '150px', width: '150px' }}
									/>
								</div>
								<h6>
									Jane
									<br />
									South Morang, VIC
								</h6>
								<div className="content_part">
									<p>
										“Without the objective information from RateMyAgent, I could have got 10 agents
										in to do appraisals, and I still would have had no idea who was the best one to
										go with.”
									</p>
								</div>
								<div className="btn_part">
									<a href="https://cloud.my.ratemyagent.com/real-reviews-real-people-Jane">
										Read more
									</a>
								</div>
							</div>
						</div>
						<div className="item">
							<div className="pro_slide">
								<div className="img_part">
									<img
										src="https://image.my.ratemyagent.com/lib/fe3415707564067b771379/m/1/d0644b3b-37df-4fbc-8a31-81e7ebebc00d.png"
										alt=""
										title=""
										style={{ height: '150px', width: '150px' }}
									/>
								</div>
								<h6>
									Jane
									<br />
									South Morang, VIC
								</h6>
								<div className="content_part">
									<p>
										“Without the objective information from RateMyAgent, I could have got 10 agents
										in to do appraisals, and I still would have had no idea who was the best one to
										go with.”
									</p>
								</div>
								<div className="btn_part">
									<a href="https://cloud.my.ratemyagent.com/real-reviews-real-people-Jane">
										Read more
									</a>
								</div>
							</div>
						</div>
						<div className="item">
							<div className="pro_slide">
								<div className="img_part">
									<img
										src="https://image.my.ratemyagent.com/lib/fe3415707564067b771379/m/1/d0644b3b-37df-4fbc-8a31-81e7ebebc00d.png"
										alt=""
										title=""
										style={{ height: '150px', width: '150px' }}
									/>
								</div>
								<h6>
									Jane
									<br />
									South Morang, VIC
								</h6>
								<div className="content_part">
									<p>
										“Without the objective information from RateMyAgent, I could have got 10 agents
										in to do appraisals, and I still would have had no idea who was the best one to
										go with.”
									</p>
								</div>
								<div className="btn_part">
									<a href="https://cloud.my.ratemyagent.com/real-reviews-real-people-Jane">
										Read more
									</a>
								</div>
							</div>
						</div>
						<div className="item">
							<div className="pro_slide">
								<div className="img_part">
									<img
										src="https://image.my.ratemyagent.com/lib/fe3415707564067b771379/m/1/d0644b3b-37df-4fbc-8a31-81e7ebebc00d.png"
										alt=""
										title=""
										style={{ height: '150px', width: '150px' }}
									/>
								</div>
								<h6>
									Jane
									<br />
									South Morang, VIC
								</h6>
								<div className="content_part">
									<p>
										“Without the objective information from RateMyAgent, I could have got 10 agents
										in to do appraisals, and I still would have had no idea who was the best one to
										go with.”
									</p>
								</div>
								<div className="btn_part">
									<a href="https://cloud.my.ratemyagent.com/real-reviews-real-people-Jane">
										Read more
									</a>
								</div>
							</div>
						</div>
					</OwlCarousel>
				</div>
			</div>
			{/* footer section */}

			<section id="footer">
				<div id="contact" className="py-7">
					<div className="container">
						<h1 className="text-center mb-5">Get In Touch</h1>
						<div className="row">
							<div className="col-sm text-center">
								<i className="fa fa-hourglass" style={{ fontSize: '30px' }}></i>
								<h3 className="mt-3">Operating Hours</h3>
								<time datetime="2008-02-14">
									<p>
										Monday to Saturday
										<br />
										08h00 - 17h00 (UTC+02:00)
									</p>
								</time>
							</div>
							<div className="col-sm text-center">
								<i className="fa fa-road" style={{ fontSize: '30px' }}></i>
								<h3 className="mt-3">Physical Address</h3>
								<address>
									<p>
										{' '}
										Office: 3 Good street
										<br />
										Parramatta, NSW 2150
									</p>
								</address>
							</div>
							<div className="col-sm text-center">
								<i className="fa fa-phone" style={{ fontSize: '30px' }}></i>
								<h3 className="mt-3">Contact Details</h3>
								<p>
									+61-044-968-4905
									<br />
									contact@BusinessTechLabs.com
								</p>
							</div>
						</div>
					</div>
				</div>
				<br />
				<footer className="main-footer">
					<div className="container">
						<p className="text-center">
							<a href="https://github.com/naveendahiya/">
								<i className="fa fa-github" style={{ fontSize: '30px', color: 'white' }}></i>
							</a>
						</p>
						<p className="text-center">Copyright © Business Tech AU PTY LTD</p>
					</div>
				</footer>
			</section>
		</React.Fragment>
	);
};

export default App;
