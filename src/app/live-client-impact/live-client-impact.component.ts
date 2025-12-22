import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-live-client-impact',
  imports: [CommonModule],
  templateUrl: './live-client-impact.component.html',
  styleUrl: './live-client-impact.component.scss'
})
export class LiveClientImpactComponent {
  activeCard: string = 'traffic';
  autoUpdate: boolean = true;
  updateTime: Date = new Date();

  metrics = {
    leads: {
      value: 127,
      trend: 8.5,
      progress: 85,
      isLive: true,
      target: 150
    },
    ads: {
      value: 42,
      trend: 12.3,
      progress: 70,
      isLive: true,
      platforms: 6,
      budget: 12500
    },
    websites: {
      value: 89,
      trend: 4.2,
      progress: 95,
      isLive: true,
      uptime: 99.9
    },
    traffic: {
      value: 124390,
      trend: 12,
      progress: 90,
      growth: 15.7,
      countries: 42
    }
  };

  performanceChart = [
    { day: 'Mon', leads: 85, traffic: 65 },
    { day: 'Tue', leads: 92, traffic: 72 },
    { day: 'Wed', leads: 78, traffic: 68 },
    { day: 'Thu', leads: 110, traffic: 85 },
    { day: 'Fri', leads: 127, traffic: 92 },
    { day: 'Sat', leads: 95, traffic: 78 }
  ];

  platforms = [
    { name: 'Google Ads', icon: '🔍', value: '18 Campaigns', trend: 15 },
    { name: 'Facebook', icon: '📱', value: '12 Campaigns', trend: 8 },
    { name: 'Instagram', icon: '📸', value: '8 Campaigns', trend: 12 },
    { name: 'LinkedIn', icon: '💼', value: '4 Campaigns', trend: 5 }
  ];

  recentUpdates = [
    { time: new Date(Date.now() - 300000), icon: '🎯', message: 'New lead captured from Google Ads', source: 'Marketing' },
    { time: new Date(Date.now() - 600000), icon: '🚀', message: 'Campaign optimization completed', source: 'Automation' },
    { time: new Date(Date.now() - 900000), icon: '📈', message: 'Traffic spike detected (+25%)', source: 'Analytics' },
    { time: new Date(Date.now() - 1200000), icon: '🛡️', message: 'Security update deployed', source: 'IT' }
  ];

  get totalPlatforms(): number {
    return this.platforms.length;
  }

  ngOnInit() {
    this.startAutoUpdate();
    // Rotate active card
    setInterval(() => {
      const cards = ['leads', 'ads', 'websites', 'traffic'];
      const currentIndex = cards.indexOf(this.activeCard);
      this.activeCard = cards[(currentIndex + 1) % cards.length];
    }, 3000);
  }

  startAutoUpdate() {
    if (this.autoUpdate) {
      setInterval(() => {
        this.refreshData();
      }, 30000); // Update every 30 seconds
    }
  }

  toggleAutoUpdate() {
    this.autoUpdate = !this.autoUpdate;
    if (this.autoUpdate) {
      this.startAutoUpdate();
    }
  }

  refreshData() {
    // Simulate data updates
    this.updateTime = new Date();
    
    // Update metrics with slight variations
    this.metrics.leads.value += Math.floor(Math.random() * 3) - 1;
    this.metrics.ads.value += Math.floor(Math.random() * 2);
    this.metrics.traffic.value += Math.floor(Math.random() * 1000);
    
    // Add new update
    const messages = [
      { icon: '📊', message: 'Analytics data refreshed', source: 'System' },
      { icon: '⚡', message: 'Performance metrics updated', source: 'Dashboard' },
      { icon: '🔔', message: 'New notification received', source: 'Alert' }
    ];
    const newUpdate = messages[Math.floor(Math.random() * messages.length)];
    this.recentUpdates.unshift({
      time: new Date(),
      ...newUpdate
    });
    
    // Keep only 4 updates
    if (this.recentUpdates.length > 4) {
      this.recentUpdates.pop();
    }
  }
}
