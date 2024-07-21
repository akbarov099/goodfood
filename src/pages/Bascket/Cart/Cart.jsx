import React from 'react'
import { CardActionArea } from '@mui/material';
import { BsPlus } from "react-icons/bs";
import { LiaMinusSolid } from "react-icons/lia";
import { BsCartPlus, BsCartDash } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";

export default function Cart() {
    return (
        <section className='cart'>
            <div className="container">
                <ul className="cart_wrapper">

                    <li className='cart_item'>
                        <img className='item_img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmZrYaAUFja9oCPgsqXQMWRXQzVKm0zeq_Tal1cfOxp2CGgArh9MRXmjp-XSweulDFz4c&usqp=CAU" alt="" />

                        <div className="item_content">
                            <h2 className='item_title'>Hamburger</h2>
                            <p className='item_suptitle'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, molestias.
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, molestias.
                            </p>
                            <p className='item_price'>Price: <span className='num'>150</span><span>сом</span></p>

                            <div className="item_count_buy">
                                <div className="item_count">
                                    <CardActionArea className='item_count_minus'><LiaMinusSolid /></CardActionArea>
                                    <input type="text" value={"1"} />
                                    <CardActionArea className='item_count_plus'><BsPlus /></CardActionArea>
                                </div>
                                <CardActionArea className='item_buy'>Order</CardActionArea>
                            </div>
                        </div>

                        <CardActionArea className='item_canсel'><BsCartDash /></CardActionArea>

                    </li>

                    <li className='cart_item'>
                        <img className='item_img' src="https://myastoriya.com.ua/upload/medialibrary/6f4/qo0by2qp5ceiic0upzyy36y07ikrglja.jpg" alt="" />

                        <div className="item_content">
                            <h2 className='item_title'>Shawarma</h2>
                            <p className='item_suptitle'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, molestias.
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, molestias.
                            </p>
                            <p className='item_price'>Price: <span className='num'>220</span><span>сом</span></p>

                            <div className="item_count_buy">
                                <div className="item_count">
                                    <CardActionArea className='item_count_minus'><LiaMinusSolid /></CardActionArea>
                                    <input type="text" value={"1"} />
                                    <CardActionArea className='item_count_plus'><BsPlus /></CardActionArea>
                                </div>
                                <CardActionArea className='item_buy'>Order</CardActionArea>
                            </div>
                        </div>

                        <CardActionArea className='item_canсel'><BsCartDash /></CardActionArea>

                    </li>

                    <li className='cart_item'>
                        <img className='item_img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyeMnN6hvRhQz0B_n6wQARXBpUf9lIlE3Vjg&s" alt="" />

                        <div className="item_content">
                            <h2 className='item_title'>Pizza</h2>
                            <p className='item_suptitle'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, molestias.
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, molestias.
                            </p>
                            <p className='item_price'>Price: <span className='num'>550</span><span>сом</span></p>

                            <div className="item_count_buy">
                                <div className="item_count">
                                    <CardActionArea className='item_count_minus'><LiaMinusSolid /></CardActionArea>
                                    <input type="text" value={"1"} />
                                    <CardActionArea className='item_count_plus'><BsPlus /></CardActionArea>
                                </div>
                                <CardActionArea className='item_buy'>Order</CardActionArea>
                            </div>
                        </div>

                        <CardActionArea className='item_canсel'><BsCartDash /></CardActionArea>

                    </li>

                    <li className='cart_item'>
                        <img className='item_img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTOwwr1Ec5gcDAheZkEp90Au8wQoSQCw98Zg&s" alt="" />

                        <div className="item_content">
                            <h2 className='item_title'>Hamburger</h2>
                            <p className='item_suptitle'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, molestias.
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, molestias.
                            </p>
                            <p className='item_price'>Price: <span className='num'>340</span><span>сом</span></p>

                            <div className="item_count_buy">
                                <div className="item_count">
                                    <CardActionArea className='item_count_minus'><LiaMinusSolid /></CardActionArea>
                                    <input type="text" value={"1"} />
                                    <CardActionArea className='item_count_plus'><BsPlus /></CardActionArea>
                                </div>
                                <CardActionArea className='item_buy'>Order</CardActionArea>
                            </div>
                        </div>

                        <CardActionArea className='item_canсel'><BsCartDash /></CardActionArea>

                    </li>

                </ul>

                <CardActionArea className="cart_order_all">Orders all <TbTruckDelivery className='cart_order_all_icon' /></CardActionArea>
            </div>
        </section>
    )
}
