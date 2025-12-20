import { Component, ElementRef, HostListener, ViewChild, type OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

interface MenuItem {
  label: string
  id: string
  icon: string
  columns: MenuColumn[]
}

interface MenuColumn {
  title: string
  icon: string
  image: string
  links: MenuLink[]
}

interface MenuLink {
  name: string
  url: string
  description: string
  icon: string
}
@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @ViewChild("magneticLogo") magneticLogo?: ElementRef

  activeDropdown: string | null = null
  mobileMenuOpen = false
  scrolled = false
  mouseX = 0
  mouseY = 0
  logoTransform = { x: 0, y: 0 }

  menuItems: MenuItem[] = [
    {
      label: "Services",
      id: "services",
      icon: "🚀",
      columns: [
        {
          title: "SEO & Content",
          icon: "📊",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
          links: [
            { name: "SEO Optimization", url: "/seo", description: "Rank higher on search engines", icon: "🔍" },
            { name: "Content Marketing", url: "/content", description: "Engaging content that converts", icon: "✍️" },
            { name: "Keyword Research", url: "/keywords", description: "Find profitable keywords", icon: "🎯" },
            { name: "Link Building", url: "/link-building", description: "Quality backlinks", icon: "🔗" },
            { name: "Local SEO", url: "/local-seo", description: "Dominate local search", icon: "📍" },
            { name: "Technical SEO", url: "/technical-seo", description: "Optimize site structure", icon: "⚙️" },
          ],
        },
        {
          title: "Paid Advertising",
          icon: "💰",
          image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=400&h=300&fit=crop",
          links: [
            { name: "Google Ads", url: "/google-ads", description: "Reach customers on Google", icon: "🎯" },
            { name: "Facebook Ads", url: "/facebook-ads", description: "Social advertising", icon: "👥" },
            { name: "Instagram Ads", url: "/instagram-ads", description: "Visual storytelling", icon: "📸" },
            { name: "LinkedIn Ads", url: "/linkedin-ads", description: "B2B lead generation", icon: "💼" },
            { name: "TikTok Ads", url: "/tiktok-ads", description: "Viral video campaigns", icon: "🎬" },
            { name: "YouTube Ads", url: "/youtube-ads", description: "Video advertising", icon: "▶️" },
          ],
        },
        {
          title: "Social Media",
          icon: "📱",
          image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop",
          links: [
            { name: "Social Strategy", url: "/social-strategy", description: "Comprehensive planning", icon: "🎲" },
            { name: "Community Management", url: "/community", description: "Build loyal followers", icon: "👨‍👩‍👧‍👦" },
            { name: "Influencer Marketing", url: "/influencer", description: "Partner with creators", icon: "⭐" },
            { name: "Social Analytics", url: "/social-analytics", description: "Track performance", icon: "📈" },
            { name: "Content Creation", url: "/content-creation", description: "Professional media", icon: "🎨" },
            { name: "Brand Management", url: "/brand", description: "Protect reputation", icon: "🛡️" },
          ],
        },
        {
          title: "Email & CRM",
          icon: "📧",
          image: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=400&h=300&fit=crop",
          links: [
            { name: "Email Campaigns", url: "/email-campaigns", description: "Automated workflows", icon: "✉️" },
            { name: "Newsletter Design", url: "/newsletter", description: "Beautiful templates", icon: "📄" },
            { name: "CRM Integration", url: "/crm", description: "Manage relationships", icon: "🤝" },
            { name: "Marketing Automation", url: "/automation", description: "Save time", icon: "🤖" },
            { name: "Lead Nurturing", url: "/lead-nurturing", description: "Convert leads", icon: "🌱" },
            { name: "Customer Segmentation", url: "/segmentation", description: "Target precisely", icon: "🎭" },
          ],
        },
      ],
    },
    {
      label: "Solutions",
      id: "solutions",
      icon: "💡",
      columns: [
        {
          title: "By Industry",
          icon: "🏢",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
          links: [
            { name: "E-commerce", url: "/ecommerce", description: "Boost online sales", icon: "🛒" },
            { name: "SaaS", url: "/saas", description: "Scale your software", icon: "💻" },
            { name: "Healthcare", url: "/healthcare", description: "Patient acquisition", icon: "🏥" },
            { name: "Finance", url: "/finance", description: "Build trust", icon: "💳" },
            { name: "Real Estate", url: "/real-estate", description: "Sell properties faster", icon: "🏠" },
            { name: "Education", url: "/education", description: "Attract students", icon: "🎓" },
          ],
        },
        {
          title: "By Business Size",
          icon: "📐",
          image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop",
          links: [
            { name: "Startups", url: "/startups", description: "Growth strategies", icon: "🚀" },
            { name: "Small Business", url: "/small-business", description: "Affordable solutions", icon: "🏪" },
            { name: "Enterprise", url: "/enterprise", description: "Scale operations", icon: "🏛️" },
            { name: "Agencies", url: "/agencies", description: "White-label services", icon: "🤝" },
            { name: "Freelancers", url: "/freelancers", description: "Personal branding", icon: "👤" },
            { name: "Non-Profit", url: "/non-profit", description: "Mission-driven", icon: "❤️" },
          ],
        },
        {
          title: "Tools & Platforms",
          icon: "🛠️",
          image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
          links: [
            { name: "Analytics Dashboard", url: "/analytics", description: "Real-time insights", icon: "📊" },
            { name: "Landing Page Builder", url: "/landing-pages", description: "No-code editor", icon: "🎨" },
            { name: "A/B Testing", url: "/ab-testing", description: "Optimize conversions", icon: "🧪" },
            { name: "Heatmap Tool", url: "/heatmap", description: "User behavior", icon: "🔥" },
            { name: "Form Builder", url: "/forms", description: "Capture leads", icon: "📝" },
            { name: "Chatbot", url: "/chatbot", description: "24/7 support", icon: "💬" },
          ],
        },
      ],
    },
    {
      label: "Resources",
      id: "resources",
      icon: "📚",
      columns: [
        {
          title: "Learn",
          icon: "🎓",
          image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
          links: [
            { name: "Blog", url: "/blog", description: "Latest insights", icon: "📝" },
            { name: "Case Studies", url: "/case-studies", description: "Success stories", icon: "📖" },
            { name: "Webinars", url: "/webinars", description: "Live training", icon: "🎥" },
            { name: "E-books", url: "/ebooks", description: "Free downloads", icon: "📚" },
            { name: "Guides", url: "/guides", description: "Step-by-step", icon: "🗺️" },
            { name: "Templates", url: "/templates", description: "Ready to use", icon: "📄" },
          ],
        },
        {
          title: "Support",
          icon: "🆘",
          image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop",
          links: [
            { name: "Help Center", url: "/help", description: "Find answers", icon: "❓" },
            { name: "Documentation", url: "/docs", description: "Technical guides", icon: "📋" },
            { name: "API Reference", url: "/api", description: "Developer docs", icon: "⚡" },
            { name: "Video Tutorials", url: "/tutorials", description: "Watch & learn", icon: "📹" },
            { name: "Community Forum", url: "/forum", description: "Ask questions", icon: "💭" },
            { name: "Contact Support", url: "/support", description: "Get help now", icon: "📞" },
          ],
        },
        {
          title: "Company",
          icon: "🏢",
          image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
          links: [
            { name: "About Us", url: "/about", description: "Our story", icon: "👋" },
            { name: "Careers", url: "/careers", description: "Join our team", icon: "💼" },
            { name: "Press Kit", url: "/press", description: "Media resources", icon: "📰" },
            { name: "Partners", url: "/partners", description: "Collaboration", icon: "🤝" },
            { name: "Testimonials", url: "/testimonials", description: "Client reviews", icon: "⭐" },
            { name: "Awards", url: "/awards", description: "Recognition", icon: "🏆" },
          ],
        },
      ],
    },
  ]

  @HostListener("window:scroll")
  onWindowScroll() {
    this.scrolled = window.scrollY > 50
  }

  @HostListener("mousemove", ["$event"])
  onMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX
    this.mouseY = event.clientY
  }

  onLogoMouseMove(event: MouseEvent) {
    if (!this.magneticLogo) return

    const logo = this.magneticLogo.nativeElement
    const rect = logo.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const deltaX = (event.clientX - centerX) * 0.3
    const deltaY = (event.clientY - centerY) * 0.3

    this.logoTransform = { x: deltaX, y: deltaY }
  }

  onLogoMouseLeave() {
    this.logoTransform = { x: 0, y: 0 }
  }

  toggleDropdown(id: string) {
    this.activeDropdown = this.activeDropdown === id ? null : id
  }

  closeDropdown() {
    this.activeDropdown = null
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen
    if (this.mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false
    this.activeDropdown = null
    document.body.style.overflow = ""
  }

  getLogoTransform(): string {
    return `translate(${this.logoTransform.x}px, ${this.logoTransform.y}px)`
  }

  dropdownTimer: any = null

openDropdown(id: string) {
  clearTimeout(this.dropdownTimer)
  this.activeDropdown = id
}

closeDropdownDelayed() {
  this.dropdownTimer = setTimeout(() => {
    this.activeDropdown = null
  }, 200)
}

}
