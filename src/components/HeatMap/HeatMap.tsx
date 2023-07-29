import ReactFrappeChart from 'react-frappe-charts';
import { Experience } from '../../types';

interface HeatMapProps {
  experience: Experience[];
}

const getDataPoints = (experience: Experience[]) => {
  return experience.reduce((acc, exp) => {
    const startDate = new Date(exp.date.from);
    const endDate = new Date(
      exp.date.to === 'Present' ? new Date().toISOString() : exp.date.to
    );

    const startYear = startDate.getFullYear();
    const endYear = endDate.getFullYear();

    const startMonth = startDate.getMonth();
    const endMonth = endDate.getMonth();

    const startDay = startDate.getDate();
    const endDay = endDate.getDate();

    const start = new Date(startYear, startMonth, startDay);
    const end = new Date(endYear, endMonth, endDay);

    const diff = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diff / (1000 * 3600 * 24));

    const days = Array.from({ length: diffDays }, (_, i) => {
      const d = new Date(start.getTime());
      d.setDate(d.getDate() + i);
      return d;
    });

    const dataPoints = days.reduce<Record<string, number>>((acc, day) => {
      const key = `${day.valueOf()}`.slice(0, -3);
      acc[key] = 1;

      return acc;
    }, {});

    return {
      ...acc,
      ...dataPoints,
    };
  }, {});
};

export const HeatMap = ({ experience }: HeatMapProps) => {
  const dataPoints = getDataPoints(experience);

  console.log(dataPoints);

  const props: any = {
    type: 'heatmap',
    start: new Date(2019, 0, 1),
    end: new Date(2020, 0, 1),
    colors: ['#ebedf0', '#c0ddf9', '#73b3f3', '#3886e1', '#17459e'],
    discreteDomains: 0,
    data: {
      dataPoints,
    },
  };
  return <ReactFrappeChart {...props} />;
};
