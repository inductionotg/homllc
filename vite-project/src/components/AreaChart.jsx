


import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const dataset = [1, 21, 3, 42, 51,61];

const AreaChart = () => {
    
    const data = {
        labels: dataset.map((_, index) => index + 1), 
        datasets: [
            {
                label: 'Temperature', 
                data: dataset,
                backgroundColor: ['rgba(255, 159, 64, 0.5)', 'rgba(255, 255, 255, 0.5)'], 
                //borderColor: 'rgba(255, 159, 64, 1)',
                pointRadius: 0, 
                fill: {                    
                    target: 'origin',       
                    above: 'rgb(255, 165, 0)',   
                    below: 'rgb(255, 165, 0)'    
                }
            },
            {  
              label: 'Adjusted Temperature', 
              data: dataset.map(value => value + 5), 
              backgroundColor: 'rgba(54, 162, 235, 0.5)', 
              //borderColor: 'rgba(54, 162, 235, 1)',
              fill: {
                target: 'origin',
                above: 'rgb(255,217,177)',   
                below: 'rgb(0, 0, 255)'    
              },
              pointRadius: 0,
          },
        ],
    };
    const options = {
      scales: {
          x: { 
              display: false  
          },
          y: {
              display: false   
          }
      },
      plugins: {
      legend: {
        display: false 
      }
    },
    elements: {
      line: {
           tension: 0.4 
      }
  }
  };


    return (
        <div>
            
            <Line data={data} options={options} />
            
        </div>
    );
};
export default AreaChart