import Chart from 'react-apexcharts';

export default function RequestsChart() {
    const options: ApexCharts.ApexOptions = {
        chart: {
            type: 'bar',
            toolbar: { show: false },
        },
        plotOptions: {
            bar: {
                borderRadius: 6,
                columnWidth: '45%',
            },
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        },
        colors: ['#10b981'],
    };

    const series = [
        {
            name: 'Requests',
            data: [30, 45, 28, 80, 49, 60],
        },
    ];

    return (
        <div className="rounded-2xl border bg-card p-4 shadow-sm">
            <h2 className="mb-4 text-sm font-medium text-muted-foreground">
                Document Requests
            </h2>

            <Chart options={options} series={series} type="bar" height={250} />
        </div>
    );
}
