import React from 'react';
import { Button, CardActionArea } from '@mui/material';
import { BsCartPlus, BsCartDash } from "react-icons/bs";


export default function Recom() {
    return (
        <section className='recom'>
            <div className="container">
                <h2 className='recom_title'>Products</h2>

                <ul className='recom_wrapper'>
                    <li className='recom_item'>
                        <CardActionArea>
                            <img className='item_img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmZrYaAUFja9oCPgsqXQMWRXQzVKm0zeq_Tal1cfOxp2CGgArh9MRXmjp-XSweulDFz4c&usqp=CAU" alt="" />

                            <div className="item_content">
                                <h3 className='item_title'>Hamburger</h3>
                                <p className="item_suptitle">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, molestias.
                                </p>

                                <div className="item_price_cart">
                                    <p className='item_price'>Price: <span className='num'>150</span><span>сом</span></p>

                                    <div className='item_cart'>
                                        <BsCartPlus />
                                    </div>
                                </div>
                            </div>
                        </CardActionArea>
                    </li>

                    <li className='recom_item'>
                        <CardActionArea>
                            <img className='item_img' src="https://myastoriya.com.ua/upload/medialibrary/6f4/qo0by2qp5ceiic0upzyy36y07ikrglja.jpg" alt="" />

                            <div className="item_content">
                                <h3 className='item_title'>Hamburger</h3>
                                <p className="item_suptitle">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, molestias.
                                </p>

                                <div className="item_price_cart">
                                    <p className='item_price'>Price: <span className='num'>220</span><span>сом</span></p>

                                    <div className='item_cart'>
                                        <BsCartPlus />
                                    </div>
                                </div>
                            </div>
                        </CardActionArea>
                    </li>

                    <li className='recom_item'>
                        <CardActionArea>
                            <img className='item_img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyeMnN6hvRhQz0B_n6wQARXBpUf9lIlE3Vjg&s" alt="" />

                            <div className="item_content">
                                <h3 className='item_title'>Hamburger</h3>
                                <p className="item_suptitle">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, molestias.
                                </p>

                                <div className="item_price_cart">
                                    <p className='item_price'>Price: <span className='num'>550</span><span>сом</span></p>

                                    <div className='item_cart'>
                                        <BsCartPlus />
                                    </div>
                                </div>
                            </div>
                        </CardActionArea>
                    </li>

                    <li className='recom_item'>
                        <CardActionArea>
                            <img className='item_img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTOwwr1Ec5gcDAheZkEp90Au8wQoSQCw98Zg&s" alt="" />

                            <div className="item_content">
                                <h3 className='item_title'>Hamburger</h3>
                                <p className="item_suptitle">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, molestias.
                                </p>

                                <div className="item_price_cart">
                                    <p className='item_price'>Price: <span className='num'>340</span><span>сом</span></p>

                                    <div className='item_cart'>
                                        <BsCartPlus />
                                    </div>
                                </div>
                            </div>
                        </CardActionArea>
                    </li>
                </ul>

            </div>
        </section>
    )
}
