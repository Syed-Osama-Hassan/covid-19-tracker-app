import React, {useState, useEffect} from 'react'
import {fetchGlobalData} from '../../api';
import {Line, Bar} from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = ({data, country}) => {
    const [globalData, setGlobalData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setGlobalData(await fetchGlobalData());
            
        }
        fetchAPI();
        
    },[]);

    const lineChart =(
        globalData.length ?
        (<Line data={{
            labels: globalData.map(({date}) => date),
            datasets: [{
                data: globalData.map(({confirmed}) => confirmed),
                label: 'Infected',
                borderColor: '#3333ff',
                fill: true,
            }, {
                data: globalData.map(({deaths}) => deaths),
                label: 'Deaths',
                borderColor: 'red',
                backgroundColor: 'rgba(255,0,0,0.5)',
                fill: true,
            }]
        }}/>) : null
    );

    const barChart = (
        data.confirmed ?
        (
            <Bar 
            data={{
                labels: ['Infected', 'Recoverd', 'Deaths'],
                datasets: [{
                    label: 'People',
                    backgroundColor: ['rgba(0,0,255,0.5)', 'rgba(0,255,0,0.5)', 'rgba(255,0,0,0.5)'],
                    data:[data.confirmed.value, data.recovered.value, data.deaths.value]
                }]
            }}
            options ={{
                legend: {display: false},
                title: {display: true, text: `Current country: ${country}`},
            }}
            />
        ):null
    );

    return (
        <div className={styles.container}>
            {
                country ? 
                barChart : 
                lineChart
            }
        </div>
    )
}

export default Chart;