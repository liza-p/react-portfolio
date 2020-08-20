import React from "react";
import Jumbotron from "../Jumbotron";
import Footer from "../Footer";
import portfolios from '../../portfolios.json'

const PortfolioItem = ({ portfolio }) => {
    return (
        <div className="col-12 col-sm-4">
            <div className="card mb-4" >
                <div className="text-center">
                    <img
                        src={portfolio.img}
                        className="card-img-top p-2"
                        alt={portfolio.name}
                        style={{width: "150px", height: "150px;"}}
                    />
                </div>
                <div className="card-body">
                    <div className="text-center">
                    <h5 className="card-title">{portfolio.name}</h5>
                    <a href={portfolio.github} className="card-link" target="_blank">Github</a>
                    {
                        portfolio.app_url ? (<a href={portfolio.app_url} className="card-link" target="_blank">Live site</a>) : null
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};

const Portfolio = () => {
    return (
        <div className="container-fluid p-0">
            <Jumbotron page="portfolio" />
            <div className="container">
                <div className="row">
                    {portfolios.map((portfolio, index) => (
                        <PortfolioItem key={index} portfolio={portfolio} />
                    ))}
                </div>
            </div>        
            <Footer/>           
        </div>
    );
};

export default Portfolio;