import { Component, AfterViewInit } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { GrowthGraphComponent } from "../growth-graph/growth-graph.component";
import { ReviewsComponent } from "../../reviews/reviews.component";
import { OurServicesComponent } from "../../our-services/our-services.component";
import { PricesComponent } from "../../prices/prices.component";
import { OurProcessComponent } from "../../our-process/our-process.component";
import { LiveStatsComponent } from "../../live-stats/live-stats.component";
import { FooterComponent } from "../../footer/footer.component";
import { LiveClientImpactComponent } from "../../live-client-impact/live-client-impact.component";
import { WhoWeAreComponent } from "../../who-we-are/who-we-are.component";
import { TechStackDigitalMarketingComponent } from "../../tech-stack-digital-marketing/tech-stack-digital-marketing.component";

@Component({
  selector: 'app-public-dashboard',
  imports: [
    HeaderComponent, 
    GrowthGraphComponent, 
    ReviewsComponent, 
    OurServicesComponent, 
    PricesComponent, 
    OurProcessComponent, 
    LiveStatsComponent, 
    FooterComponent, 
    LiveClientImpactComponent, 
    WhoWeAreComponent, 
    TechStackDigitalMarketingComponent
  ],
  templateUrl: './public-dashboard.component.html',
  styleUrl: './public-dashboard.component.scss'
})
export class PublicDashboardComponent implements AfterViewInit {
  
  ngAfterViewInit(): void {
    this.initScrollAnimations();
  }
  
  private initScrollAnimations(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
        }
      });
    }, {
      threshold: 0.1, // 10% visible
      rootMargin: '0px 0px -50px 0px'
    });
    
    setTimeout(() => {
      document.querySelectorAll('.scroll-hidden, .fade-up, .fade-down, .fade-left, .fade-right, .zoom-in, .stagger-children')
        .forEach(element => {
          observer.observe(element);
        });
    }, 100);
  }
}