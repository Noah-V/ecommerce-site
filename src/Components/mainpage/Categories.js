import React from 'react'
import shoes from '../../assets/images/shoes.png'

export const Categories = () => {

    const categoryData = [
        {
            cateImg: require("../../assets/images/shoes.png"),
            cateName: "Fashion",
        },

        {
            cateImg: require("../../assets/images/cars.png"),
            cateName: "Cars",
        },

        {
            cateImg: require("../../assets/images/electronic.png"),
            cateName: "Electronic",
        }, 
        
        {
            cateImg: require("../../assets/images/groceries.jpg"),
            cateName: "Groceries",
        },

        {
            cateImg: require("../../assets/images/health.png"),
            cateName: "Health and Beauty",
        },

        {
            cateImg: require("../../assets/images/music.png"),
            cateName: "Music",
        },

        {
            cateImg: require("../../assets/images/babies.png"),
            cateName: "Baby Toys",
        },
    ]
  return (
    <>
        <div className="category">
            {
                categoryData.map((value, index) => {
                    return(
                        <div className="box f_flex" key={index}>
                            <img src={value.cateImg} alt="" />
                            <span>{value.cateName}</span>
                        </div>
                    )
                }) 
            }
        </div>
    </>
  )
}
