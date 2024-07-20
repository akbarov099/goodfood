import React from 'react'
import { Header } from '../../Components/Header/Header'
import Recom from './Recom/Recom'
import { Slider } from "./Slider/Slider";

export const Home = () => {
  return (
    <div>
      <Header />
      <Slider />
      <Recom />
    </div>
  );
};
