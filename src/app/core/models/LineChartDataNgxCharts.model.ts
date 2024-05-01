export interface LineChartSeriesData {
    value: number;
    name: number;
    athletes: number;
}

export interface LineChartDataNgxCharts {
    id: number;
    name: string;
    series: LineChartSeriesData[];
}