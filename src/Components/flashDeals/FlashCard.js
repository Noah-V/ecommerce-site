import React from 'react'
import Slider from "react-slick";

export const FlashCard = ({ productItems }) => {

    const NextArrow = (props) => {
        const { onClick } = props;
        return(
            <div className="control-btn" onClick={onClick}>
                <button className="next">
                    <i className="fa fa-long-arrow-alt-right"></i>
                </button>
            </div>
        )
    }

    const PrevArrow = (props) => {
        const { onClick } = props;
        return(
            <div className="control-btn" onClick={onClick}>
                <button className="prev">
                    <i className="fa fa-long-arrow-alt-left"></i>
                </button>
            </div>
        )
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
    };
    return (
        <>
        <Slider {...settings}>
            {
                productItems.map((productItems, index) => {
                    return(
                        <div className="box">
                            <div className="product mtop" key={index}>
                                <div className="img">
                                    <span className="discount">{productItems.discount}% Off</span>
                                    <img src={productItems.cover} alt="" />
                                    <div className="product-like">
                                        <label>0</label> 
                                        <br />
                                        <i className="fa-regular fa-heart"></i>
                                    </div>
                                </div>
                                <div className="product-details">
                                    <h3>{productItems.name}</h3>
                                    <div className="rate">
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="price">
                                        <h4>{productItems.price}.00</h4>
                                        <button>
                                            <i className="fa fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </Slider>
        </>
    )
}
