import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-our-process',
  imports: [CommonModule],
  templateUrl: './our-process.component.html',
  styleUrl: './our-process.component.scss',
})
export class OurProcessComponent {
  processSteps: ProcessStep[] = [
    {
      id: 1,
      title: 'Research & Audit',
      description: 'We analyze your current digital presence, competitors, and market opportunities to identify key growth areas.',
      icon: '🔍'
    },
    {
      id: 2,
      title: 'Strategy Planning',
      description: 'Developing a tailored digital marketing strategy with clear objectives, KPIs, and implementation roadmap.',
      icon: '📊'
    },
    {
      id: 3,
      title: 'Execution',
      description: 'Implementing the strategy across all channels with precision, from content creation to campaign management.',
      icon: '⚡'
    },
    {
      id: 4,
      title: 'Optimization',
      description: 'Continuous monitoring, testing, and refining to maximize ROI and improve campaign performance.',
      icon: '📈'
    },
    {
      id: 5,
      title: 'Scaling',
      description: 'Expanding successful strategies and scaling campaigns to drive exponential growth and market leadership.',
      icon: '🚀'
    }
  ];

  hoveredStep: number | null = null;

  ngOnInit(): void {
  }

  setHoverState(stepId: number, isHovered: boolean): void {
    this.hoveredStep = isHovered ? stepId : null;
  }
}
