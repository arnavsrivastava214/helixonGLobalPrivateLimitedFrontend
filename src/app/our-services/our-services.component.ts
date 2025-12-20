import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Service {
  id: number;
  title: string;
  description: string;
  category: string;
  icon: string;
  color: string;
  gradient: string;
  metricValue: string;
  metricUnit: string;
  metricPercent: number;
  features: string[];
  impact: string;
  featured: boolean;
  trend: 'up' | 'stable';
}


@Component({
  selector: 'app-our-services',
  imports: [CommonModule],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.scss',
})
export class OurServicesComponent {

  activeServiceIndex: number | null = null;
  
  services: Service[] = [
    {
      id: 1,
      title: 'Conversion Intelligence',
      description: 'AI-powered funnel optimization that identifies drop-off points and implements real-time conversion fixes.',
      category: 'Analytics',
      icon: '📈',
      color: '#6366f1',
      gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
      metricValue: '317%',
      metricUnit: 'ROI Increase',
      metricPercent: 85,
      features: ['A/B Testing Automation', 'User Journey Mapping', 'Real-time Optimization'],
      impact: 'High Impact',
      featured: true,
      trend: 'up'
    },
    {
      id: 2,
      title: 'Growth Content Engine',
      description: 'Strategic content distribution that drives qualified traffic and builds authority in your niche.',
      category: 'Content',
      icon: '🚀',
      color: '#10b981',
      gradient: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
      metricValue: '4.2x',
      metricUnit: 'More Traffic',
      metricPercent: 78,
      features: ['SEO-Optimized Content', 'Content Amplification', 'Performance Analytics'],
      impact: 'Scalable',
      featured: false,
      trend: 'up'
    },
    {
      id: 3,
      title: 'Social Momentum',
      description: 'Algorithm-aware social campaigns that maximize engagement and drive measurable conversions.',
      category: 'Social',
      icon: '⚡',
      color: '#f59e0b',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
      metricValue: '89%',
      metricUnit: 'Engagement Rate',
      metricPercent: 92,
      features: ['Platform Analytics', 'Community Building', 'Influencer Integration'],
      impact: 'Viral Potential',
      featured: false,
      trend: 'up'
    },
    {
      id: 4,
      title: 'Data-Driven PPC',
      description: 'Machine learning-based ad buying that optimizes spend and maximizes conversion value.',
      category: 'Advertising',
      icon: '🎯',
      color: '#ef4444',
      gradient: 'linear-gradient(135deg, #ef4444 0%, #f87171 100%)',
      metricValue: '63%',
      metricUnit: 'Lower CPA',
      metricPercent: 88,
      features: ['Bid Optimization', 'Cross-Channel Tracking', 'ROI Forecasting'],
      impact: 'Cost Efficient',
      featured: false,
      trend: 'up'
    },
    {
      id: 5,
      title: 'Brand Authority Suite',
      description: 'Comprehensive brand positioning that establishes thought leadership and market dominance.',
      category: 'Branding',
      icon: '🏆',
      color: '#8b5cf6',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)',
      metricValue: '2.5x',
      metricUnit: 'Brand Recognition',
      metricPercent: 75,
      features: ['Media Placement', 'Expert Positioning', 'Industry Authority'],
      impact: 'Long-term Value',
      featured: false,
      trend: 'stable'
    },
    {
      id: 6,
      title: 'Automation Hub',
      description: 'End-to-end marketing automation that nurtures leads and accelerates sales cycles.',
      category: 'Automation',
      icon: '🤖',
      color: '#06b6d4',
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #22d3ee 100%)',
      metricValue: '41%',
      metricUnit: 'Faster Sales Cycle',
      metricPercent: 82,
      features: ['Workflow Automation', 'Lead Scoring', 'Personalization Engine'],
      impact: 'Efficiency Boost',
      featured: true,
      trend: 'up'
    }
  ];

  ngOnInit(): void {
    // Initial animation delay
    setTimeout(() => {
      this.activeServiceIndex = 0;
    }, 500);
  }

  setActiveService(index: number | null): void {
    this.activeServiceIndex = index;
  }
}
