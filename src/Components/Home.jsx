import React from 'react'
import BarChart from '../Charts/BarChart';
import DoughnutChart from '../Charts/DoughnutChart';
import LineChart from '../Charts/LineChart';
import PieChart from '../Charts/PieChart';
import RadarChart from '../Charts/RadarChart';
import  { ResponsiveContainer } from 'recharts';

import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill} from 'react-icons/bs'

function Home() {

    return (
      <main className='main-container'>
      <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>COINS</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>10</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>CATEGORIES</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>5</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>CUSTOMERS</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>33</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>ALERTS</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>0</h1>
            </div>
        </div>

      <div className='charts'>
          <ResponsiveContainer width="100%" height="100%">
          <LineChart/>
          </ResponsiveContainer>

          <ResponsiveContainer width="100%" height="100%">
             <BarChart/>
          </ResponsiveContainer>

          <ResponsiveContainer width="100%" height="100%">
             <DoughnutChart/>
          </ResponsiveContainer>

          <ResponsiveContainer width="100%" height="100%">
             <PieChart/>
          </ResponsiveContainer>

          <ResponsiveContainer width="100%" height="100%">
             <RadarChart/>
          </ResponsiveContainer>

      </div>
  </main>
        );
}

export default Home