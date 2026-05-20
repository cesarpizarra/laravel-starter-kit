import Chart from 'react-apexcharts';

export default function UsersChart() {
    const options: ApexCharts.ApexOptions = {
        chart: {
            type: 'line',
            toolbar: { show: false },
        },
        stroke: {
            curve: 'smooth',
            width: 3,
        },
        grid: {
            borderColor: '#e5e7eb',
        },
        xaxis: {
            categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        colors: ['#3b82f6'],
    };

    const series = [
        {
            name: 'Users',
            data: [10, 25, 18, 40, 32, 55, 70],
        },
    ];

    return (
        <div className="rounded-2xl border bg-card p-4 shadow-sm">
            <h2 className="mb-4 text-sm font-medium text-muted-foreground">
                Weekly Users
            </h2>

            <Chart options={options} series={series} type="line" height={250} />
        </div>
    );
}
