import React, { Component } from "react";
// import YoutubeComponent from '../../component/YoutubeComponent/YoutubeComponent';
import Product from "../Product/Product";

class Home extends Component {
	render() {
		return (
			<div>
				{/* <p>Youtube Componet</p>
                <hr/>
                <YoutubeComponent 
                    time="7.12" 
                    title="React JS - 1"
                    desc = "2x ditonton, 10 Hari Yang Lalu"/>
                <YoutubeComponent 
                    time="8.04" 
                    title="React JS - 2"
                    desc = "20x ditonton, 20 Hari Yang Lalu"/>
                <YoutubeComponent 
                    time="5.23" 
                    title="React JS - 3"
                    desc = "200x ditonton, 25 Hari Yang Lalu"/>
                <YoutubeComponent 
                    time="9.45" 
                    title="React JS - 4"
                    desc = "2000x ditonton, 35 Hari Yang Lalu"/>
                <YoutubeComponent/>
                <br/>
                <br/>
                <br/> */}
				<p>Counter</p>
				<hr />
				<Product />
			</div>
		);
	}
}

export default Home;
