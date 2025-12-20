import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  
})
export class FooterComponent implements OnInit {
  currentYear: number = new Date().getFullYear();
  
  brand = {
    name: 'Helixson Global Private Limited',
    tagline: 'Data-Driven Growth Partners',
    description: 'Transforming digital presence with AI-powered marketing solutions that deliver measurable ROI and sustainable growth.',
    email: 'hello@nexusdigital.com',
    phone: '+1 (555) 123-4567'
  };

  services = [
    { name: 'Search Engine Optimization', link: '/services/seo' },
    { name: 'PPC & Digital Advertising', link: '/services/ads' },
    { name: 'Social Media Marketing', link: '/services/social' },
    { name: 'Performance Marketing', link: '/services/performance' },
    { name: 'Conversion Rate Optimization', link: '/services/cro' },
    { name: 'Marketing Automation', link: '/services/automation' }
  ];

  company = [
    { name: 'About Us', link: '/about' },
    { name: 'Careers', link: '/careers' },
    { name: 'Blog & Insights', link: '/blog' },
    { name: 'Contact Us', link: '/contact' },
    { name: 'Case Studies', link: '/cases' },
    { name: 'Our Process', link: '/process' }
  ];

  legal = [
    { name: 'Privacy Policy', link: '/privacy' },
    { name: 'Terms of Service', link: '/terms' },
    { name: 'Cookie Policy', link: '/cookies' },
    { name: 'GDPR Compliance', link: '/gdpr' },
    { name: 'Security', link: '/security' },
    { name: 'Accessibility', link: '/accessibility' }
  ];

  socialLinks = [
    { platform: 'LinkedIn', icon: 'linkedin', link: 'https://linkedin.com/company/nexusdigital', color: '#0077B5' },
    { platform: 'Twitter', icon: 'twitter', link: 'https://twitter.com/nexusdigital', color: '#1DA1F2' },
    { platform: 'Instagram', icon: 'instagram', link: 'https://instagram.com/nexusdigital', color: '#E4405F' },
    { platform: 'Facebook', icon: 'facebook', link: 'https://facebook.com/nexusdigital', color: '#1877F2' },
    { platform: 'YouTube', icon: 'youtube', link: 'https://youtube.com/c/nexusdigital', color: '#FF0000' },
    { platform: 'Dribbble', icon: 'dribbble', link: 'https://dribbble.com/nexusdigital', color: '#EA4C89' }
  ];

  newsletterEmail: string = '';
  isSubscribed: boolean = false;
  isLoading: boolean = false;

  ngOnInit(): void {
    // Initialize any data if needed
  }

  subscribeNewsletter(): void {
    if (this.newsletterEmail && this.validateEmail(this.newsletterEmail)) {
      this.isLoading = true;
      // Simulate API call
      setTimeout(() => {
        this.isSubscribed = true;
        this.isLoading = false;
        this.newsletterEmail = '';
        
        // Reset after 5 seconds
        setTimeout(() => {
          this.isSubscribed = false;
        }, 5000);
      }, 1000);
    }
  }

  validateEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  getPhoneLink(phone: string): string {
    const sanitized = phone.replace(/[^0-9+]/g, '');
    return `tel:${sanitized}`;
  }
  
}