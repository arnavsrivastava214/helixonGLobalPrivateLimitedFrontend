import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-reviews',
  imports: [CommonModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {
  activeReview = 0
  isAnimating = false
  mouseX = 0
  mouseY = 0

  reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc",
      company: "TechStart",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      rating: 5,
      review:
        "Absolutely transformative! Their digital marketing strategy increased our conversion rate by 340% in just 3 months. The team's expertise in SEO and content marketing is unmatched.",
      metrics: { conversion: "+340%", revenue: "$2.4M", roi: "580%" },
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Marketing Director, Growth Labs",
      company: "Growth Labs",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      rating: 5,
      review:
        "Working with this team has been a game-changer. Their innovative approach to social media marketing and PPC campaigns delivered results beyond our expectations.",
      metrics: { engagement: "+425%", leads: "12K+", growth: "280%" },
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Founder, Creative Studio",
      company: "Creative Studio",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
      rating: 5,
      review:
        "Exceptional service from start to finish. The analytics-driven approach helped us understand our audience better and create campaigns that truly resonate.",
      metrics: { traffic: "+520%", retention: "89%", sales: "+310%" },
    },
    {
      id: 4,
      name: "David Kim",
      position: "VP Marketing, Innovate Co",
      company: "Innovate Co",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      rating: 5,
      review:
        "The best investment we've made in digital marketing. Their expertise in email marketing and automation saved us countless hours while boosting engagement.",
      metrics: { automation: "95%", openRate: "68%", clicks: "+450%" },
    },
    {
      id: 5,
      name: "Jessica Martinez",
      position: "CMO, Digital Ventures",
      company: "Digital Ventures",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
      rating: 5,
      review:
        "Outstanding results across all channels. Their holistic approach to digital marketing transformed our brand presence and customer acquisition strategy.",
      metrics: { brandAware: "+380%", customers: "25K+", satisfaction: "96%" },
    },
    {
      id: 6,
      name: "Alex Thompson",
      position: "Director, E-commerce Plus",
      company: "E-commerce Plus",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      rating: 5,
      review:
        "Incredible team with deep expertise. They completely revamped our digital presence and the results speak for themselves. Highly recommended!",
      metrics: { orders: "+475%", avgOrder: "+125%", lifetime: "+290%" },
    },
  ]

  stats = [
    { value: "500+", label: "Happy Clients", icon: "😊" },
    { value: "98%", label: "Success Rate", icon: "🎯" },
    { value: "2.5M+", label: "Leads Generated", icon: "📈" },
    { value: "15+", label: "Years Experience", icon: "⭐" },
  ]

  autoplayInterval: any

  ngOnInit() {
    this.startAutoplay()
  }

  ngOnDestroy() {
    this.stopAutoplay()
  }

  @HostListener("mousemove", ["$event"])
  onMouseMove(event: MouseEvent) {
    this.mouseX = (event.clientX / window.innerWidth - 0.5) * 20
    this.mouseY = (event.clientY / window.innerHeight - 0.5) * 20
  }

  startAutoplay() {
    this.autoplayInterval = setInterval(() => {
      this.nextReview()
    }, 5000)
  }

  stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval)
    }
  }

  nextReview() {
    if (this.isAnimating) return
    this.isAnimating = true
    this.activeReview = (this.activeReview + 1) % this.reviews.length
    setTimeout(() => (this.isAnimating = false), 800)
  }

  prevReview() {
    if (this.isAnimating) return
    this.isAnimating = true
    this.activeReview = this.activeReview === 0 ? this.reviews.length - 1 : this.activeReview - 1
    setTimeout(() => (this.isAnimating = false), 800)
  }

  goToReview(index: number) {
    if (this.isAnimating || index === this.activeReview) return
    this.isAnimating = true
    this.activeReview = index
    setTimeout(() => (this.isAnimating = false), 800)
    this.stopAutoplay()
    this.startAutoplay()
  }

  getReviewPosition(index: number): string {
    const diff = index - this.activeReview
    if (diff === 0) return "active"
    if (diff === 1 || diff === -(this.reviews.length - 1)) return "next"
    if (diff === -1 || diff === this.reviews.length - 1) return "prev"
    return "hidden"
  }

  getStarArray(rating: number): number[] {
    return Array(rating).fill(0)
  }
}
