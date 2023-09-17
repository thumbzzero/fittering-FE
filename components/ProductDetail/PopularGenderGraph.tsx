import { ArcElement, Chart, ChartOptions, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import GraphLabel from './GraphLabel';

type Props = {
  popularGenderPercents: number[];
};

export default function PopularGenderGraph({ popularGenderPercents }: Props) {
  Chart.register(ArcElement, Legend);
  const data = {
    labels: [
      `남성 ${popularGenderPercents ? popularGenderPercents[0] : ''}%`,
      `여성 ${popularGenderPercents ? popularGenderPercents[1] : ''}%`,
    ],
    datasets: [
      {
        label: '인기 성별 정보',
        data: popularGenderPercents,
        backgroundColor: ['#49B286', '#EC6868'],
        hoverOffset: 4,
      },
    ],
  };

  const options: ChartOptions<'doughnut'> = {
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          color: 'gray',
          padding: 10,
          usePointStyle: true,
        },
      },
    },
    responsive: true,
  };

  return (
    <div className="w-full md:w-1/3">
      <GraphLabel label="성별" />
      <div className="w-1/2 md:w-full mt-2 mx-auto">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
}
