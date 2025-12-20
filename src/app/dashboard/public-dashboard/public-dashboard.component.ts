import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { GrowthGraphComponent } from "../growth-graph/growth-graph.component";
import { ReviewsComponent } from "../../reviews/reviews.component";
import { OurServicesComponent } from "../../our-services/our-services.component";
import { PricesComponent } from "../../prices/prices.component";
import { OurProcessComponent } from "../../our-process/our-process.component";
import { LiveStatsComponent } from "../../live-stats/live-stats.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-public-dashboard',
  imports: [HeaderComponent, GrowthGraphComponent, ReviewsComponent, OurServicesComponent, PricesComponent, OurProcessComponent, LiveStatsComponent, FooterComponent],
  templateUrl: './public-dashboard.component.html',
  styleUrl: './public-dashboard.component.scss'
})
export class PublicDashboardComponent {

}
