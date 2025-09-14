"use client";

import { useState, useEffect } from "react";
import { X, ArrowRight, ArrowLeft, MessageCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  fullName: string;
  companyName: string;
  email: string;
  description: string;
  projectType: string;
}

const projectTypes = [
  { id: "mvp", label: "MVP Project", icon: "🚀", description: "Get your idea to market fast" },
  { id: "webapp", label: "Full-Stack Web App", icon: "🌐", description: "Complete web application" },
  { id: "mobile", label: "Mobile Application", icon: "📱", description: "iOS & Android apps" },
  { id: "ecommerce", label: "E-Commerce Platform", icon: "🛒", description: "Online store solution" },
  { id: "enterprise", label: "Enterprise Solution", icon: "🏢", description: "Custom business software" },
  { id: "api", label: "API Development", icon: "🔗", description: "Backend services & APIs" },
  { id: "partnership", label: "Agency Partnership", icon: "🤝", description: "Long-term collaboration" }
];

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    companyName: "",
    email: "",
    description: "",
    projectType: ""
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  // Reset form when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setCurrentStep(1);
      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        description: "",
        projectType: ""
      });
      setErrors({});
    }
  }, [isOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const validateStep1 = () => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    
    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.description.trim()) {
      newErrors.description = "Project description is required";
    }
    
    if (!formData.projectType) {
      newErrors.projectType = "Please select a project type";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2);
    } else if (currentStep === 2 && validateStep2()) {
      setCurrentStep(3);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleWhatsAppSend = () => {
    const selectedProject = projectTypes.find(p => p.id === formData.projectType);
    
    const message = `New Project Inquiry:

Name: ${formData.fullName}
Company: ${formData.companyName}
Email: ${formData.email}
Project: ${selectedProject?.label || formData.projectType}
Description: ${formData.description}

I'm interested in your development services. Can you help me get started?`;

    const phoneNumber = "+6281234567890"; // PT. DCPH Digital Consulting WhatsApp
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Dark overlay */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal content */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl animate-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border/50">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Let's Build Something Amazing</h2>
            <p className="text-muted-foreground">Step {currentStep} of 3</p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="h-8 w-8 p-0"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Progress bar */}
        <div className="px-6 py-4">
          <div className="flex items-center gap-2">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  step <= currentStep 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {step < currentStep ? <CheckCircle className="w-4 h-4" /> : step}
                </div>
                {step < 3 && (
                  <div className={`w-12 h-1 mx-2 rounded-full ${
                    step < currentStep ? 'bg-primary' : 'bg-muted'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step content */}
        <div className="p-6">
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Tell us about yourself</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <Input
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      className={errors.fullName ? 'border-destructive' : ''}
                    />
                    {errors.fullName && (
                      <p className="text-sm text-destructive mt-1">{errors.fullName}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Company Name *</label>
                    <Input
                      type="text"
                      placeholder="Enter your company name"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange('companyName', e.target.value)}
                      className={errors.companyName ? 'border-destructive' : ''}
                    />
                    {errors.companyName && (
                      <p className="text-sm text-destructive mt-1">{errors.companyName}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={errors.email ? 'border-destructive' : ''}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3">What can we build for you?</h3>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Project Description *</label>
                  <Textarea
                    placeholder="Tell us what your project is about in a few sentences"
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    className={`min-h-[80px] ${errors.description ? 'border-destructive' : ''}`}
                  />
                  {errors.description && (
                    <p className="text-sm text-destructive mt-1">{errors.description}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Project Type *</label>
                  <div className="grid grid-cols-2 gap-2">
                    {projectTypes.map((project) => (
                      <button
                        key={project.id}
                        type="button"
                        className={`p-3 rounded-lg border text-left transition-all duration-200 ${
                          formData.projectType === project.id
                            ? 'border-primary bg-primary/5 text-primary'
                            : 'border-border hover:bg-muted/50'
                        }`}
                        onClick={() => handleInputChange('projectType', project.id)}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{project.icon}</span>
                          <span className="font-medium text-sm">{project.label}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                  {errors.projectType && (
                    <p className="text-sm text-destructive mt-2">{errors.projectType}</p>
                  )}
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Review & Send</h3>
                <div className="bg-muted/30 rounded-lg p-4 space-y-3">
                  <div>
                    <span className="font-medium text-foreground">Name:</span> {formData.fullName}
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Company:</span> {formData.companyName}
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Email:</span> {formData.email}
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Project:</span> {projectTypes.find(p => p.id === formData.projectType)?.label}
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Description:</span>
                    <p className="text-muted-foreground mt-1">{formData.description}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-border/50">
          <div>
            {currentStep > 1 && (
              <Button
                variant="outline"
                onClick={handlePrevious}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Previous
              </Button>
            )}
          </div>
          
          <div>
            {currentStep < 3 ? (
              <Button
                onClick={handleNext}
                className="flex items-center gap-2"
              >
                Next
                <ArrowRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button
                onClick={handleWhatsAppSend}
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white"
              >
                <MessageCircle className="w-4 h-4" />
                Send via WhatsApp
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
