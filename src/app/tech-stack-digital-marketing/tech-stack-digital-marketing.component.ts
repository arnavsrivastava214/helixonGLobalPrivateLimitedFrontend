import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface StackItem {
  name: string;
  icon: string;
  color: string;
}

interface ResultItem {
  text: string;
  icon: string;
  type: 'negative' | 'positive';
}
@Component({
  selector: 'app-tech-stack-digital-marketing',
  imports: [CommonModule],
  templateUrl: './tech-stack-digital-marketing.component.html',
  styleUrl: './tech-stack-digital-marketing.component.scss'
})
export class TechStackDigitalMarketingComponent {
  techStack: StackItem[] = [
    { name: 'Angular', icon: 'fab fa-angular', color: '#dd0031' },
    { name: 'Node.js', icon: 'fab fa-node-js', color: '#68a063' },
    { name: 'MySQL', icon: 'fas fa-database', color: '#00758f' },
    { name: 'AWS', icon: 'fab fa-aws', color: '#ff9900' },
    { name: 'Nginx', icon: 'fas fa-server', color: '#009639' },
    { name: 'PHP Hosting', icon: 'fab fa-php', color: '#777bb4' }
  ];

  marketingStack: StackItem[] = [
    { name: 'Google Ads', icon: 'fab fa-google', color: '#4285f4' },
    { name: 'Meta Ads', icon: 'fab fa-facebook', color: '#1877f2' },
    { name: 'GA4', icon: 'fas fa-chart-line', color: '#f9ab00' },
    { name: 'Search Console', icon: 'fas fa-search', color: '#34a853' },
    { name: 'HubSpot', icon: 'fas fa-cogs', color: '#ff7a59' }
  ];

  beforeResults: ResultItem[] = [
    { text: 'No leads', icon: 'fas fa-times-circle', type: 'negative' },
    { text: 'Slow website', icon: 'fas fa-tachometer-alt', type: 'negative' },
    { text: 'No tracking', icon: 'fas fa-ban', type: 'negative' }
  ];

  afterResults: ResultItem[] = [
    { text: 'Daily leads', icon: 'fas fa-bullseye', type: 'positive' },
    { text: 'Fast website', icon: 'fas fa-bolt', type: 'positive' },
    { text: 'ROI dashboard', icon: 'fas fa-chart-pie', type: 'positive' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getIconClass(icon: string): string {
    return icon;
  }

  getResultClass(type: 'negative' | 'positive'): string {
    return type === 'negative' ? 'result-negative' : 'result-positive';
  }
}
