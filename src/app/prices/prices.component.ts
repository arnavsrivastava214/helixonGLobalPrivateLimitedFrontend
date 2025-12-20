import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface PricingPlan {
  id: number;
  name: string;
  tagline: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  popular: boolean;
  features: string[];
  ctaText: string;
  ctaVariant: 'primary' | 'secondary';
  icon: string;
}
@Component({
  selector: 'app-prices',
  imports: [CommonModule],
  templateUrl: './prices.component.html',
  styleUrl: './prices.component.scss'
})
export class PricesComponent {
  isYearlyBilling = false;
  selectedPlan: number | null = null;
  
  plans: PricingPlan[] = [
    {
      id: 1,
      name: 'Essential',
      tagline: 'Start Your Journey',
      description: 'Perfect for startups and small businesses',
      monthlyPrice: 99,
      yearlyPrice: 79,
      popular: false,
      icon: '🚀',
      features: [
        'Up to 5 Campaigns',
        'Basic Analytics Dashboard',
        'Email Support',
        'SEO Keyword Research (50/mo)',
        'Social Media Scheduling',
        'Monthly Performance Report',
        '3 Team Members'
      ],
      ctaText: 'Get Started',
      ctaVariant: 'secondary'
    },
    {
      id: 2,
      name: 'Growth',
      tagline: 'Most Popular',
      description: 'Advanced features for scaling businesses',
      monthlyPrice: 299,
      yearlyPrice: 239,
      popular: true,
      icon: '📈',
      features: [
        'Everything in Essential',
        'Unlimited Campaigns',
        'Advanced Analytics & AI Insights',
        'Priority Support',
        'A/B Testing Tools',
        'Competitor Analysis',
        'Google Ads Integration',
        'Custom Reporting',
        '10 Team Members',
        'API Access'
      ],
      ctaText: 'Start Free Trial',
      ctaVariant: 'primary'
    },
    {
      id: 3,
      name: 'Enterprise',
      tagline: 'Maximum Performance',
      description: 'Complete suite for large organizations',
      monthlyPrice: 799,
      yearlyPrice: 639,
      popular: false,
      icon: '🏢',
      features: [
        'Everything in Growth',
        'Dedicated Account Manager',
        'Custom AI Models',
        '24/7 Phone & Chat Support',
        'Multi-channel Attribution',
        'Predictive Analytics',
        'Custom Integrations',
        'SLA Guarantee',
        'Unlimited Team Members',
        'White-label Reports',
        'Onboarding & Training'
      ],
      ctaText: 'Contact Sales',
      ctaVariant: 'secondary'
    }
  ];

  getPrice(plan: PricingPlan): number {
    return this.isYearlyBilling ? plan.yearlyPrice : plan.monthlyPrice;
  }

  getBillingPeriod(): string {
    return this.isYearlyBilling ? 'year' : 'month';
  }

  getSavings(plan: PricingPlan): number {
    if (this.isYearlyBilling) {
      const monthlyTotal = plan.monthlyPrice * 12;
      const yearlyTotal = plan.yearlyPrice;
      return Math.round(((monthlyTotal - yearlyTotal) / monthlyTotal) * 100);
    }
    return 0;
  }

  getMonthlyEquivalent(plan: PricingPlan): number {
    if (this.isYearlyBilling) {
      return Math.round(plan.yearlyPrice / 12);
    }
    return plan.monthlyPrice;
  }

  toggleBilling(): void {
    this.isYearlyBilling = !this.isYearlyBilling;
  }

  selectPlan(plan: PricingPlan): void {
    this.selectedPlan = plan.id;
    console.log('Selected plan:', plan.name);
    // Add your plan selection logic here
  }

  isPlanSelected(planId: number): boolean {
    return this.selectedPlan === planId;
  }
}
