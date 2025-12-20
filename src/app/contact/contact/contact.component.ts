import { Component, type OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"

interface ContactForm {
  name: string
  email: string
  phone: string
  company: string
  service: string
  message: string
}
@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
    formData: ContactForm = {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "SEO",
      message: "",
    }
  
    services = [
      "SEO",
      "Social Media Marketing",
      "Content Marketing",
      "PPC Advertising",
      "Email Marketing",
      "Web Development",
    ]
  
    isSubmitting = false
    showSuccess = false
    formErrors: { [key: string]: string } = {}
  
    contactInfo = [
      {
        icon: "📧",
        title: "Email Us",
        content: "info@helixsonglobal.com",
        link: "mailto:info@helixsonglobal.com",
      },
      {
        icon: "📞",
        title: "Call Us",
        content: "+1 (555) 123-4567",
        link: "tel:+15551234567",
      },
      {
        icon: "📍",
        title: "Visit Us",
        content: "123 Digital Avenue, Tech City",
        link: "https://maps.google.com",
      },
    ]
  
    socialLinks = [
      { name: "LinkedIn", icon: "💼", url: "#" },
      { name: "Twitter", icon: "🐦", url: "#" },
      { name: "Facebook", icon: "👥", url: "#" },
      { name: "Instagram", icon: "📸", url: "#" },
    ]
  
    ngOnInit(): void {
      this.addScrollAnimations()
    }
  
    addScrollAnimations(): void {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible")
            }
          })
        },
        { threshold: 0.1 },
      )
  
      setTimeout(() => {
        const animatedElements = document.querySelectorAll(".animate-on-scroll")
        animatedElements.forEach((el) => observer.observe(el))
      }, 100)
    }
  
    validateForm(): boolean {
      this.formErrors = {}
      let isValid = true
  
      if (!this.formData.name.trim()) {
        this.formErrors["name"] = "Name is required"
        isValid = false
      }
  
      if (!this.formData.email.trim()) {
        this.formErrors["email"] = "Email is required"
        isValid = false
      } else if (!this.isValidEmail(this.formData.email)) {
        this.formErrors["email"] = "Please enter a valid email"
        isValid = false
      }
  
      if (!this.formData.phone.trim()) {
        this.formErrors["phone"] = "Phone is required"
        isValid = false
      }
  
      if (!this.formData.message.trim()) {
        this.formErrors["message"] = "Message is required"
        isValid = false
      }
  
      return isValid
    }
  
    isValidEmail(email: string): boolean {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(email)
    }
  
    onSubmit(): void {
      if (!this.validateForm()) {
        return
      }
  
      this.isSubmitting = true
  
      // Simulate API call
      setTimeout(() => {
        console.log("Form submitted:", this.formData)
        this.isSubmitting = false
        this.showSuccess = true
        this.resetForm()
  
        setTimeout(() => {
          this.showSuccess = false
        }, 5000)
      }, 2000)
    }
  
    resetForm(): void {
      this.formData = {
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "SEO",
        message: "",
      }
      this.formErrors = {}
    }
  
    hasError(field: string): boolean {
      return !!this.formErrors[field]
    }
  
    getError(field: string): string {
      return this.formErrors[field] || ""
    }
  
}
