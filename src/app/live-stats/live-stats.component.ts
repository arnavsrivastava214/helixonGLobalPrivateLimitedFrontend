import { Component, OnInit, AfterViewInit, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface StatItem {
  id: number;
  title: string;
  value: number;
  suffix: string;
  prefix: string;
  description: string;
  icon: string;
  color: string;
  duration: number;
}

@Component({
  selector: 'app-live-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './live-stats.component.html',
  styleUrls: ['./live-stats.component.scss']
})
export class LiveStatsComponent implements OnInit, AfterViewInit {
  stats: StatItem[] = [
    {
      id: 1,
      title: 'Campaigns Run',
      value: 245,
      suffix: '+',
      prefix: '',
      description: 'Successful digital campaigns',
      icon: '📊',
      color: '#4f46e5',
      duration: 2000
    },
    {
      id: 2,
      title: 'Leads Generated',
      value: 15360,
      suffix: '+',
      prefix: '',
      description: 'Qualified marketing leads',
      icon: '🎯',
      color: '#10b981',
      duration: 2200
    },
    {
      id: 3,
      title: 'Average ROI',
      value: 325,
      suffix: '%',
      prefix: '',
      description: 'Return on investment',
      icon: '📈',
      color: '#f59e0b',
      duration: 1800
    },
    {
      id: 4,
      title: 'Happy Clients',
      value: 98,
      suffix: '%',
      prefix: '',
      description: 'Client satisfaction rate',
      icon: '⭐',
      color: '#ef4444',
      duration: 1600
    }
  ];

  animatedValues: number[] = [];
  hasAnimated = false;
  inViewport = false;

  constructor(private elementRef: ElementRef) {
    // Initialize all values at 0
    this.stats.forEach(() => this.animatedValues.push(0));
  }

  ngOnInit(): void {
    // Initial setup
    this.checkViewport();
  }

  ngAfterViewInit(): void {
    // Small delay to ensure DOM is ready
    setTimeout(() => {
      this.checkViewport();
      this.setupIntersectionObserver();
    }, 100);
  }

  setupIntersectionObserver(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.hasAnimated) {
            this.inViewport = true;
            this.startAnimations();
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    observer.observe(this.elementRef.nativeElement);
  }

  checkViewport(): void {
    const rect = this.elementRef.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    this.inViewport = (
      rect.top <= windowHeight * 0.8 &&
      rect.bottom >= windowHeight * 0.2
    );

    if (this.inViewport && !this.hasAnimated) {
      this.startAnimations();
    }
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (!this.hasAnimated) {
      this.checkViewport();
    }
  }

  startAnimations(): void {
    if (this.hasAnimated) return;
    
    this.hasAnimated = true;
    
    this.stats.forEach((stat, index) => {
      this.animateCounter(
        index,
        0,
        stat.value,
        stat.duration
      );
    });
  }

  animateCounter(index: number, start: number, end: number, duration: number): void {
    const startTime = performance.now();
    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      const currentValue = Math.floor(start + (end - start) * easeOutQuart);
      this.animatedValues[index] = currentValue;
      
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    
    requestAnimationFrame(step);
  }

  formatNumber(value: number): string {
    return value.toLocaleString();
  }
  getCurrentTime(): string {
    return new Date().toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  }
}