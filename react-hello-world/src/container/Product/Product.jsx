import React, { Fragment, Component } from "react";
import "./Product.css";
import CardProduct from "../CardProduct/CardProduct";

class Product extends Component {
	state = {
		order: 0,
	};

	handleCounterChange = (newValue) => {
		this.setState({
			order: newValue,
		});
	};

	render() {
		return (
			<Fragment>
				<div className="header">
					<div className="logo">
						<img
							className="logo"
							src="https://www.freepnglogos.com/uploads/google-logo-png/file-google-logo-svg-wikimedia-commons-23.png"
							alt=""
						/>
					</div>
					<div className="troley">
						<img src="/icons/cart.png" alt="" />
						<div className="count">{this.state.order}</div>
					</div>
				</div>
				<CardProduct onCounterChange={(value) => this.handleCounterChange(value)} />
			</Fragment>
		);
	}
}

export default Product;
