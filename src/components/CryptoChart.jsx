import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import Container from "./Container";

function CryptoChart() {
  const data = generateData("Day");
  const maxPrice = 100;

  return (
    <Container className='crypto-chart'>
      <div className='chart-infos flex'>
        <p>Lower: $4.895</p>
        <p>Higher: $6.857</p>
      </div>

      <div className='chart-container'>
        <ResponsiveContainer width='99%' height='100%'>
          <AreaChart
            data={data}
            margin={{
              top: 0,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey='day' hide='true' />
            <YAxis hide='true' domain={[0, maxPrice]} />
            <Tooltip />
            <defs>
              <linearGradient id='gradient' x1='0%' y1='0%' x2='0%' y2='100%'>
                <stop offset='0%' stopColor='rgb(255, 200, 67)' />
                <stop offset='100%' stopColor='rgb(255, 143, 23)' />
              </linearGradient>
            </defs>
            <Area
              type='monotone'
              dataKey='price'
              stroke='url(#gradient)'
              strokeWidth={2}
              fill='#fff7ee'
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <p className='exchange-rate'> 1 BTC = $5.483</p>
    </Container>
  );
}

function generateData() {
  const numOfPoints = 10;
  const data = [];

  for (let date = 1; date <= numOfPoints; date++) {
    let price;
    price = Math.floor(Math.random() * (90 - 35)) + 35;
    data.push({ date, price });
  }

  return data;
}

export default CryptoChart;
