import { Component, type OnInit, type OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Metric {
  label: string;
  value: number;
  target: number;
  prefix?: string;
  suffix?: string;
  growth: number;
  color: string;
}

@Component({
  selector: 'app-growth-graph',
  imports: [CommonModule],
  templateUrl: './growth-graph.component.html',
  styleUrl: './growth-graph.component.scss',
})
export class GrowthGraphComponent {
  metrics: Metric[] = [
    {
      label: 'Active Users',
      value: 0,
      target: 24567,
      suffix: '',
      growth: 23.5,
      color: '#6366f1',
    },
    {
      label: 'Conversion Rate',
      value: 0,
      target: 8.7,
      suffix: '%',
      growth: 12.3,
      color: '#10b981',
    },
    {
      label: 'ROI',
      value: 0,
      target: 342,
      suffix: '%',
      growth: 45.2,
      color: '#f59e0b',
    },
    {
      label: 'Engagement',
      value: 0,
      target: 87.3,
      suffix: '%',
      growth: 18.7,
      color: '#ec4899',
    },
    {
      label: 'Monthly Traffic',
      value: 0,
      target: 156789,
      suffix: '',
      growth: 34.1,
      color: '#8b5cf6',
    },
    {
      label: 'Leads Generated',
      value: 0,
      target: 4523,
      suffix: '',
      growth: 28.9,
      color: '#06b6d4',
    },
  ];

  chartData: number[] = [45, 52, 48, 65, 70, 68, 85, 90, 88, 95, 100, 98];
  animatedChartData: number[] = new Array(12).fill(0);
  liveDataPoints: number[] = [45, 52, 48, 65, 70, 68, 85, 90, 88, 95, 100, 98];
  currentDataIndex = 0;
  isGraphRunning = true;

  private intervals: any[] = [];

  ngOnInit() {
    this.animateMetrics();
    this.animateChart();
    this.startRealTimeUpdates();
  }

  ngOnDestroy() {
    this.intervals.forEach((interval) => clearInterval(interval));
  }

  animateMetrics() {
    this.metrics.forEach((metric, index) => {
      const duration = 2000;
      const steps = 60;
      const increment = metric.target / steps;
      let currentStep = 0;

      const interval = setInterval(() => {
        if (currentStep < steps) {
          metric.value += increment;
          currentStep++;
        } else {
          metric.value = metric.target;
          clearInterval(interval);
        }
      }, duration / steps);

      this.intervals.push(interval);
    });
  }

  animateChart() {
    this.chartData.forEach((value, index) => {
      setTimeout(() => {
        const duration = 500;
        const steps = 30;
        const increment = value / steps;
        let currentStep = 0;

        const interval = setInterval(() => {
          if (currentStep < steps) {
            this.animatedChartData[index] += increment;
            currentStep++;
          } else {
            this.animatedChartData[index] = value;
            clearInterval(interval);
          }
        }, duration / steps);

        this.intervals.push(interval);
      }, index * 100);
    });
  }

  startRealTimeUpdates() {
    const metricsInterval = setInterval(() => {
      if (this.isGraphRunning) {
        this.metrics.forEach((metric) => {
          const variation = (Math.random() - 0.5) * (metric.target * 0.05);
          metric.value = Math.max(
            0,
            Math.min(metric.target * 1.2, metric.value + variation)
          );
          metric.growth = Number((15 + Math.random() * 30).toFixed(1));
        });
      }
    }, 3000);
    this.intervals.push(metricsInterval);

    const chartInterval = setInterval(() => {
      if (this.isGraphRunning) {
        this.chartData.shift();
        this.animatedChartData.shift();

        const newValue = 70 + Math.random() * 30; // Random value between 70-100 showing growth
        this.chartData.push(newValue);
        this.animatedChartData.push(0);

        setTimeout(() => {
          this.animatedChartData[this.animatedChartData.length - 1] = newValue;
        }, 50);
      }
    }, 2000);
    this.intervals.push(chartInterval);
  }

  formatNumber(num: number): string {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toFixed(num % 1 === 0 ? 0 : 1);
  }

  generateLinePoints(): string {
    const width = 100 / this.animatedChartData.length;
    return this.animatedChartData
      .map((value, index) => {
        const x = index * width + width / 2;
        const y = 100 - value;
        return `${x},${y}`;
      })
      .join(' ');
  }
}
