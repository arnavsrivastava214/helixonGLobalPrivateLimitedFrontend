import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { GrowthGraphComponent } from "../growth-graph/growth-graph.component";

@Component({
  selector: 'app-public-dashboard',
  imports: [HeaderComponent, GrowthGraphComponent],
  templateUrl: './public-dashboard.component.html',
  styleUrl: './public-dashboard.component.scss'
})
export class PublicDashboardComponent {

}
