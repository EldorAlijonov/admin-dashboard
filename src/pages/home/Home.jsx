import React from "react";
import "./home.scss";
import { Chart, Featured, Navbar, Sidebar, Widget, TableComponent } from "../../components";
const Home = () => {

    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                    <Widget type={"user"} />
                    <Widget type={"order"} />
                    <Widget type={"earning"} />
                    <Widget type={"balance"} />
                </div>
                <div className="charts">
                    <Featured />
                    <Chart aspect={2 / 1} title="User Spending ( Last 6 Months)" />
                </div>
                <div className="listContainer">
                    <div className="listTitle">Latest Transaction</div>
                    <TableComponent />
                </div>
            </div>

        </div>
    );
}

export default Home;