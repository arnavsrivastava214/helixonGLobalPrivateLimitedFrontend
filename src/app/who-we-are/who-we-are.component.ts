import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-who-we-are',
  imports: [CommonModule],
  templateUrl: './who-we-are.component.html',
  styleUrl: './who-we-are.component.scss'
})
export class WhoWeAreComponent {
  activeCard: string = 'startups';
  activeWarning: string = 'cheap';
  showModal: boolean = false;

  ngOnInit() {
    // Auto rotate active cards
    setInterval(() => {
      const cards = ['startups', 'local', 'coaches', 'ecommerce'];
      const currentIndex = cards.indexOf(this.activeCard);
      this.activeCard = cards[(currentIndex + 1) % cards.length];
    }, 3000);
  }

  setActiveCard(card: string) {
    this.activeCard = card;
  }

  setActiveWarning(warning: string) {
    this.activeWarning = warning;
  }

  showMore(type: string) {
    console.log(`Showing more info for: ${type}`);
    this.showModal = true;
  }

  startConversation() {
    console.log('Starting conversation...');
    this.showModal = true;
  }

  viewCaseStudies() {
    console.log('Viewing case studies...');
    // Navigate to case studies page
  }

  scheduleCall() {
    console.log('Scheduling call...');
    // Open scheduling modal or redirect
    window.open('https://calendly.com/helixson-global', '_blank');
  }

  closeModal() {
    this.showModal = false;
  }
}
