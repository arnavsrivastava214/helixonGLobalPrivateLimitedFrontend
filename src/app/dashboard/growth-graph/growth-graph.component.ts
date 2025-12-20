import { Component, type OnInit, type OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
interface Slide {
  id: number
  title: string
  description: string
  imageUrl: string
}

@Component({
  selector: 'app-growth-graph',
  imports: [CommonModule],
  templateUrl: './growth-graph.component.html',
  styleUrl: './growth-graph.component.scss',
})
export class GrowthGraphComponent {
  slides: Slide[] = [
    {
      id: 1,
      title: "Digital Strategy",
      description: "Transform your business with data-driven digital marketing strategies",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    },
    {
      id: 2,
      title: "Brand Growth",
      description: "Accelerate your brand presence across all digital channels",
      imageUrl: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=1200&h=800&fit=crop",
    },
    {
      id: 3,
      title: "Content Marketing",
      description: "Engage your audience with compelling content that converts",
      imageUrl: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=1200&h=800&fit=crop",
    },
    {
      id: 4,
      title: "Analytics & Insights",
      description: "Make informed decisions with powerful analytics and reporting",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
    },
    {
      id: 5,
      title: "Social Media",
      description: "Build meaningful connections with your audience on social platforms",
      imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=800&fit=crop",
    },
  ]

  currentIndex = 0
  autoplayInterval: any
  touchStartX = 0
  touchEndX = 0

  ngOnInit(): void {
    this.startAutoplay()
  }

  ngOnDestroy(): void {
    this.stopAutoplay()
  }

  goToSlide(index: number): void {
    this.currentIndex = index
    this.resetAutoplay()
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length
    this.resetAutoplay()
  }

  prevSlide(): void {
    this.currentIndex = this.currentIndex === 0 ? this.slides.length - 1 : this.currentIndex - 1
    this.resetAutoplay()
  }

  getSlideClass(index: number): string {
    const diff = index - this.currentIndex

    if (diff === 0) return "active"
    if (diff === 1 || diff === -(this.slides.length - 1)) return "next"
    if (diff === -1 || diff === this.slides.length - 1) return "prev"
    if (diff === 2 || diff === -(this.slides.length - 2)) return "next-2"
    if (diff === -2 || diff === this.slides.length - 2) return "prev-2"

    return "hidden"
  }

  startAutoplay(): void {
    this.autoplayInterval = setInterval(() => {
      this.nextSlide()
    }, 5000)
  }

  stopAutoplay(): void {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval)
    }
  }

  resetAutoplay(): void {
    this.stopAutoplay()
    this.startAutoplay()
  }

  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.changedTouches[0].screenX
  }

  onTouchEnd(event: TouchEvent): void {
    this.touchEndX = event.changedTouches[0].screenX
    this.handleSwipe()
  }

  handleSwipe(): void {
    const swipeThreshold = 50
    const diff = this.touchStartX - this.touchEndX

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        this.nextSlide()
      } else {
        this.prevSlide()
      }
    }
  }

  onMouseEnter(): void {
    this.stopAutoplay()
  }

  onMouseLeave(): void {
    this.startAutoplay()
  }
}
