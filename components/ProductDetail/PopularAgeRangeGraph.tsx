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
    <div className="flex-1 w-full md:w-2/3 mt-2">
      <GraphLabel label="연령" />
      <div className="w-full sm:w-4/5 md:w-full mt-2 mx-auto">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
