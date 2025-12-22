import { Component, type OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms"

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
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm: FormGroup;
  submitting: boolean = false;
  submitSuccess: boolean = false;
  submitError: boolean = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      company: [''],
      service: [''],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {
    // Add Font Awesome CDN dynamically
    this.loadFontAwesome();
  }

  private loadFontAwesome(): void {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(link);
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.markFormGroupTouched(this.contactForm);
      return;
    }

    this.submitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', this.contactForm.value);
      
      // Simulate success (90% chance)
      if (Math.random() > 0.1) {
        this.submitSuccess = true;
        this.contactForm.reset();
      } else {
        this.submitError = true;
      }
      
      this.submitting = false;

      // Hide success/error messages after 5 seconds
      setTimeout(() => {
        this.submitSuccess = false;
        this.submitError = false;
      }, 5000);
    }, 1500);
  }

  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
    }
  
}
