import { AGE_RANGE } from '@/constants/ageRange';
import { BarElement, CategoryScale, Chart, LinearScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import GraphLabel from './GraphLabel';

type Props = {
  popularAgeRange: number;
  popularAgeRangePercents: number[];
};

export default function PopularAgeRangeGraph({
  popularAgeRange,
  popularAgeRangePercents,
}: Props) {
  Chart.register(CategoryScale, LinearScale, BarElement);

  const labels = AGE_RANGE.map((ageRange) => ageRange.name);
  let backgroundColors = new Array(labels.length).fill('#d9d9d9');
  backgroundColors[popularAgeRange] = '#8fb357';

  const data = {
    labels: labels,
    datasets: [
      {
        data: popularAgeRangePercents,
        backgroundColor: backgroundColors,
        borderWidth: 0,
        barThickness: 17,
        borderRadius: 4,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="">
      <GraphLabel label="연령" />
      <div className="md:flex-[0.7] mt-2 mx-auto">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
