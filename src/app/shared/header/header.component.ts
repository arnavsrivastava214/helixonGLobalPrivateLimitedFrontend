import { Component, HostListener, type OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

interface NavLink {
  id: string;
  title: string;
  href: string;
  description: string;
  icon: string;
  category: string;
}
interface MenuItem {
  label: string;
  link?: string;
  children?: NavLink[];
}
@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isMenuOpen = false;
  activeDropdown: string | null = null;
  isMobile = false;
  navLinksCache: NavLink[] = [];
  categorizedLinksCache: { category: string; links: NavLink[] }[] = [];

  menuItems: MenuItem[] = [
    {
      label: 'Product & Solutions',
      children: this.getNavLinks(),
    },
    { label: 'Partners', link: '/pricing' },
    { label: 'Resources', link: '/about' },
    { label: 'Company', link: '/contact' },
    { label: 'Contact', link: '/contact' },
  ];

  getNavLinks(): NavLink[] {
    return [
      {
        id: 'seo1',
        title: 'Keyword Research',
        href: '#',
        description: 'Find profitable keywords with search volume data',
        icon: '🔍',
        category: 'SEO & Search',
      },
      {
        id: 'seo2',
        title: 'Rank Tracking',
        href: '#',
        description: 'Monitor search rankings across locations',
        icon: '📈',
        category: 'SEO & Search',
      },
      {
        id: 'seo3',
        title: 'Technical SEO Audit',
        href: '#',
        description: 'Comprehensive site health analysis',
        icon: '🔧',
        category: 'SEO & Search',
      },
      {
        id: 'seo4',
        title: 'Backlink Analysis',
        href: '#',
        description: 'Track and analyze link building efforts',
        icon: '🔗',
        category: 'SEO & Search',
      },
      {
        id: 'seo5',
        title: 'Local SEO',
        href: '#',
        description: 'Optimize for local search results',
        icon: '📍',
        category: 'SEO & Search',
      },
      {
        id: 'seo6',
        title: 'SEO Content',
        href: '#',
        description: 'AI-powered content improvement',
        icon: '✍️',
        category: 'SEO & Search',
      },
      {
        id: 'seo7',
        title: 'Site Speed',
        href: '#',
        description: 'Performance audit and optimization',
        icon: '⚡',
        category: 'SEO & Search',
      },

      {
        id: 'content1',
        title: 'Content Strategy',
        href: '#',
        description: 'Plan and execute content roadmap',
        icon: '🎯',
        category: 'Content Marketing',
      },
      {
        id: 'content2',
        title: 'Blog Management',
        href: '#',
        description: 'Schedule, publish, and analyze',
        icon: '📝',
        category: 'Content Marketing',
      },
      {
        id: 'content3',
        title: 'Content Calendar',
        href: '#',
        description: 'Visual planning and collaboration',
        icon: '📅',
        category: 'Content Marketing',
      },
      {
        id: 'content4',
        title: 'AI Content Generator',
        href: '#',
        description: 'Create content with AI assistance',
        icon: '🤖',
        category: 'Content Marketing',
      },
      {
        id: 'content5',
        title: 'Content Distribution',
        href: '#',
        description: 'Amplify reach across channels',
        icon: '📢',
        category: 'Content Marketing',
      },
      {
        id: 'content6',
        title: 'Content Performance',
        href: '#',
        description: 'Track engagement and conversions',
        icon: '📊',
        category: 'Content Marketing',
      },
      {
        id: 'content7',
        title: 'Video Content',
        href: '#',
        description: 'Create and optimize video marketing',
        icon: '🎥',
        category: 'Content Marketing',
      },

      {
        id: 'ads1',
        title: 'Google Ads',
        href: '#',
        description: 'PPC campaign optimization',
        icon: '🎨',
        category: 'Advertising',
      },
      {
        id: 'ads2',
        title: 'Facebook Ads',
        href: '#',
        description: 'Social media advertising suite',
        icon: '📱',
        category: 'Advertising',
      },
      {
        id: 'ads3',
        title: 'Programmatic Display',
        href: '#',
        description: 'Automated display advertising',
        icon: '🖥️',
        category: 'Advertising',
      },
      {
        id: 'ads4',
        title: 'Retargeting',
        href: '#',
        description: 'Win back lost visitors',
        icon: '↩️',
        category: 'Advertising',
      },
      {
        id: 'ads5',
        title: 'Ad Creative Studio',
        href: '#',
        description: 'Design and test ad variations',
        icon: '🎨',
        category: 'Advertising',
      },
      {
        id: 'ads6',
        title: 'Conversion Tracking',
        href: '#',
        description: 'ROI measurement and attribution',
        icon: '💸',
        category: 'Advertising',
      },
      {
        id: 'ads7',
        title: 'Bidding Strategies',
        href: '#',
        description: 'AI-powered bid optimization',
        icon: '⚖️',
        category: 'Advertising',
      },

      {
        id: 'social1',
        title: 'Social Scheduling',
        href: '#',
        description: 'Post across all platforms',
        icon: '⏰',
        category: 'Social Media',
      },
      {
        id: 'social2',
        title: 'Social Listening',
        href: '#',
        description: 'Monitor brand mentions',
        icon: '👂',
        category: 'Social Media',
      },
      {
        id: 'social3',
        title: 'Influencer Marketing',
        href: '#',
        description: 'Find and manage influencers',
        icon: '🌟',
        category: 'Social Media',
      },
      {
        id: 'social4',
        title: 'Social Analytics',
        href: '#',
        description: 'Track engagement and growth',
        icon: '📈',
        category: 'Social Media',
      },
      {
        id: 'social5',
        title: 'Community Management',
        href: '#',
        description: 'Engage with your audience',
        icon: '👥',
        category: 'Social Media',
      },
      {
        id: 'social6',
        title: 'Social Commerce',
        href: '#',
        description: 'Sell directly on social',
        icon: '🛒',
        category: 'Social Media',
      },
      {
        id: 'social7',
        title: 'Content Moderation',
        href: '#',
        description: 'AI comment management',
        icon: '🛡️',
        category: 'Social Media',
      },

      {
        id: 'analytics1',
        title: 'Dashboard Builder',
        href: '#',
        description: 'Custom analytics dashboards',
        icon: '📊',
        category: 'Analytics',
      },
      {
        id: 'analytics2',
        title: 'Multi-Channel Attribution',
        href: '#',
        description: 'Track customer journey',
        icon: '🛤️',
        category: 'Analytics',
      },
      {
        id: 'analytics3',
        title: 'Real-Time Analytics',
        href: '#',
        description: 'Live data and insights',
        icon: '⚡',
        category: 'Analytics',
      },
      {
        id: 'analytics4',
        title: 'Custom Reports',
        href: '#',
        description: 'Create branded reports',
        icon: '📑',
        category: 'Analytics',
      },
      {
        id: 'analytics5',
        title: 'Predictive Analytics',
        href: '#',
        description: 'Forecast trends',
        icon: '🔮',
        category: 'Analytics',
      },
      {
        id: 'analytics6',
        title: 'Data Visualization',
        href: '#',
        description: 'Interactive charts',
        icon: '📈',
        category: 'Analytics',
      },

      {
        id: 'creative1',
        title: 'Graphic Design',
        href: '#',
        description: 'Create marketing visuals',
        icon: '🎨',
        category: 'Creative',
      },
      {
        id: 'creative2',
        title: 'Video Editing',
        href: '#',
        description: 'Produce marketing videos',
        icon: '🎬',
        category: 'Creative',
      },
      {
        id: 'creative3',
        title: 'Brand Asset Management',
        href: '#',
        description: 'Organize brand files',
        icon: '📁',
        category: 'Creative',
      },
      {
        id: 'creative4',
        title: 'Template Library',
        href: '#',
        description: 'Marketing templates',
        icon: '📋',
        category: 'Creative',
      },
      {
        id: 'creative5',
        title: 'Image Optimization',
        href: '#',
        description: 'Compress and format images',
        icon: '🖼️',
        category: 'Creative',
      },

      {
        id: 'auto1',
        title: 'Workflow Automation',
        href: '#',
        description: 'Automate repetitive tasks',
        icon: '⚙️',
        category: 'Automation',
      },
      {
        id: 'auto2',
        title: 'Email Marketing',
        href: '#',
        description: 'Automated email campaigns',
        icon: '📧',
        category: 'Automation',
      },
      {
        id: 'auto3',
        title: 'Lead Scoring',
        href: '#',
        description: 'AI-powered lead qualification',
        icon: '🎯',
        category: 'Automation',
      },
      {
        id: 'auto4',
        title: 'CRM Integration',
        href: '#',
        description: 'Sync with customer data',
        icon: '🔌',
        category: 'Automation',
      },
      {
        id: 'auto5',
        title: 'Chatbots',
        href: '#',
        description: 'AI customer support',
        icon: '💬',
        category: 'Automation',
      },
    ];
  }

  getCategorizedLinks(): { category: string; links: NavLink[] }[] {
    const links = this.getNavLinks();
    const categories = [...new Set(links.map((link) => link.category))];
    return categories.map((category) => ({
      category,
      links: links.filter((link) => link.category === category),
    }));
  }

  ngOnInit() {
    this.checkScreenSize();
    this.navLinksCache = this.getNavLinks();
    this.categorizedLinksCache = this.getCategorizedLinks(); 
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.header')) {
      this.activeDropdown = null;
      if (this.dropdownCloseTimeout) {
        clearTimeout(this.dropdownCloseTimeout);
        this.dropdownCloseTimeout = null;
      }
      if (this.isMobile) {
        this.isMenuOpen = false;
      }
    }
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth < 768;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (!this.isMenuOpen) {
      this.activeDropdown = null;
    }
  }

  toggleDropdown(label: string, event: MouseEvent) {
    event.stopPropagation();
    if (this.isMobile) {
      this.activeDropdown = this.activeDropdown === label ? null : label;
    } else {
      this.activeDropdown = label;
    }
  }

  private dropdownCloseTimeout: any = null;
  closeDelay = 150; // ms (tweakable)

  onMouseEnter(label: string) {
    if (!this.isMobile) {
      if (this.dropdownCloseTimeout) {
        clearTimeout(this.dropdownCloseTimeout);
        this.dropdownCloseTimeout = null;
      }
      this.activeDropdown = label;
    }
  }

  onMouseLeave() {
    if (!this.isMobile) {
      if (this.dropdownCloseTimeout) clearTimeout(this.dropdownCloseTimeout);
      this.dropdownCloseTimeout = setTimeout(() => {
        this.activeDropdown = null;
        this.dropdownCloseTimeout = null;
      }, this.closeDelay);
    }
  }

  isDropdownActive(label: string): boolean {
    return this.activeDropdown === label;
  }
}
