"use client";

import React from 'react'
import {Chart, ArcElement, Tooltip, Legend} from 'chart.js'
// import {Chart as chartJS, ArcElement, Tooltip, Legend} from "chart.js"
Chart.register(ArcElement);
Chart.register(Tooltip);
Chart.register(Legend);
import { Doughnut } from "react-chartjs-2"

const DoughnutChart = ({accounts}: DoughnutChartProps) => {
    const data = {
        datasets: [
            {
                label: 'Blanks',
                data: [1234, 2345, 3456],
                backgroundColor: ['#0747b6', '#2265d8', '#2f91fa']
            }
        ],
        labels: ['Bank 1', 'Bank 2', 'Bank 3']
    }
    return <Doughnut
    data={data}
    options={{
        cutout: '60%',
        plugins: {
            legend: {
                display: false
            }
        }
    }}/>
}

export default DoughnutChart