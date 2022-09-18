import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">About Us</h1>
                        <p className="lead mb-4">
                        At its core, electronic commerce or e-commerce is simply the buying and selling of goods and services using the internet, when shopping online. However, the term is often used to describe all of a seller’s efforts, when selling products directly to consumers. It starts when a potential customer learns about a product and continues through purchase, use, and, ideally, ongoing customer loyalty. Data powers the most successful e-commerce operations, which take advantage of best practices such as targeted email marketing, audience segmentation, and marketing automation. For example, following up with a customer when selling online after they have placed an item in an online shopping cart but didn’t complete the transaction can significantly increase your likelihood of making the sale.
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="https://img.freepik.com/free-vector/worldwide-buying-online-symbols-flat-icons-collection-with-e-shop-basket-filling-paying-home-delivery_1284-33082.jpg?w=826&t=st=1663449741~exp=1663450341~hmac=9ccadec3f73a83916dfb722be866d3935bcda3825c8eeb52b5f0916a778d5547" alt="About Us" height="400px" width="400px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
