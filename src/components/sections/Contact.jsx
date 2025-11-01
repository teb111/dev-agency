import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  MessageCircle,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
    timeline: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create email content
    const subject = `New Project Inquiry from ${formData.name}`;
    const body = `
Project Details:
- Name: ${formData.name}
- Email: ${formData.email}
- Company: ${formData.company}
- Project Type: ${formData.projectType}
- Budget Range: ${formData.budget}
- Timeline: ${formData.timeline}

Message:
${formData.message}

---
This inquiry was submitted through the DevAgency website contact form.
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:hello@devagency.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open default email client
    window.location.href = mailtoLink;

    // Show success message
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        projectType: "",
        budget: "",
        message: "",
        timeline: "",
      });
    }, 3000);
  };

  const projectTypes = [
    { value: "mobile-app", label: "Mobile App Development" },
    { value: "web-app", label: "Web Application" },
    { value: "website", label: "Website Design & Development" },
    { value: "consultation", label: "Technical Consultation" },
    { value: "other", label: "Other / Not Sure" },
  ];

  const budgetRanges = [
    { value: "5k-15k", label: "$5,000 - $15,000" },
    { value: "15k-30k", label: "$15,000 - $30,000" },
    { value: "30k-50k", label: "$30,000 - $50,000" },
    { value: "50k+", label: "$50,000+" },
    { value: "discuss", label: "Let's Discuss" },
  ];

  const timelineOptions = [
    { value: "asap", label: "ASAP" },
    { value: "1-3months", label: "1-3 Months" },
    { value: "3-6months", label: "3-6 Months" },
    { value: "6months+", label: "6+ Months" },
    { value: "flexible", label: "Flexible" },
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "hello@devagency.com",
      description: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+1 (555) 123-4567",
      description: "Mon-Fri 9AM-6PM EST",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "Remote Team",
      description: "Serving clients worldwide",
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "< 24 Hours",
      description: "We respond quickly",
    },
  ];

  return (
    <section id="contact" style={{
      padding: '8rem 0',
      backgroundColor: '#f8fafc'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1.5rem'
      }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            textAlign: 'center',
            marginBottom: '4rem'
          }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'white',
            border: '1px solid #e2e8f0',
            borderRadius: '9999px',
            padding: '12px 24px',
            marginBottom: '1.5rem'
          }}>
            <MessageCircle style={{ width: '16px', height: '16px', color: '#667eea' }} />
            <span style={{
              fontSize: '0.875rem',
              fontWeight: '500',
              color: '#334155',
              fontFamily: "'Inter', sans-serif"
            }}>
              Get In Touch
            </span>
          </div>
          <h2 style={{
            fontSize: 'clamp(3rem, 8vw, 4rem)',
            fontFamily: "'Playfair Display', serif",
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            lineHeight: '1.1',
            color: '#0f172a'
          }}>
            Let's Build
            <span style={{
              display: 'block',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Something Great</span>
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: '#64748b',
            maxWidth: '32rem',
            margin: '0 auto',
            lineHeight: '1.7',
            fontFamily: "'Inter', sans-serif"
          }}>
            Ready to turn your idea into reality? We'd love to hear about your
            project and discuss how we can help bring your vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3" style={{ gap: '3rem' }}>
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <h3 style={{
              fontSize: '1.5rem',
              fontFamily: "'Playfair Display', serif",
              fontWeight: 'bold',
              marginBottom: '2rem',
              color: '#0f172a'
            }}>
              Get in Touch
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {contactInfo.map((info) => (
                <div key={info.title} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem'
                }}>
                  <div style={{
                    width: '3rem',
                    height: '3rem',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: '0'
                  }}>
                    <info.icon style={{ width: '1.5rem', height: '1.5rem', color: 'white' }} />
                  </div>
                  <div>
                    <h4 style={{
                      fontWeight: '600',
                      color: '#1e293b',
                      marginBottom: '0.25rem',
                      fontFamily: "'Inter', sans-serif"
                    }}>
                      {info.title}
                    </h4>
                    <p style={{
                      color: '#667eea',
                      fontWeight: '500',
                      marginBottom: '0.25rem',
                      fontFamily: "'Inter', sans-serif"
                    }}>
                      {info.value}
                    </p>
                    <p style={{
                      fontSize: '0.875rem',
                      color: '#64748b',
                      fontFamily: "'Inter', sans-serif"
                    }}>
                      {info.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Why Choose Us */}
            <div style={{
              marginTop: '3rem',
              padding: '1.5rem',
              backgroundColor: 'white',
              borderRadius: '1rem',
              boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
              border: '1px solid #f1f5f9'
            }}>
              <h4 style={{
                fontWeight: '600',
                color: '#1e293b',
                marginBottom: '1rem',
                fontFamily: "'Inter', sans-serif"
              }}>
                Why Work With Us?
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  "Expert team across all technologies",
                  "Transparent communication throughout",
                  "On-time delivery and quality assurance",
                  "Post-launch support and maintenance",
                ].map((benefit) => (
                  <div
                    key={benefit}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      fontSize: '0.875rem',
                      color: '#64748b',
                      fontFamily: "'Inter', sans-serif"
                    }}
                  >
                    <CheckCircle style={{
                      width: '1rem',
                      height: '1rem',
                      color: '#22c55e',
                      marginRight: '0.75rem',
                      flexShrink: '0'
                    }} />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div style={{
              backgroundColor: 'white',
              borderRadius: '1.5rem',
              padding: '2rem',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
              border: '1px solid #f1f5f9'
            }}>
              {!isSubmitted ? (
                <>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 'bold',
                    marginBottom: '0.5rem',
                    color: '#0f172a'
                  }}>
                    Start Your Project
                  </h3>
                  <p style={{
                    color: '#64748b',
                    marginBottom: '2rem',
                    fontFamily: "'Inter', sans-serif"
                  }}>
                    Fill out the form below and we'll get back to you within 24
                    hours.
                  </p>

                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {/* Name and Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '1.5rem' }}>
                      <div>
                        <label style={{
                          display: 'block',
                          fontSize: '0.875rem',
                          fontWeight: '500',
                          color: '#374151',
                          marginBottom: '0.5rem',
                          fontFamily: "'Inter', sans-serif"
                        }}>
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          style={{
                            width: '100%',
                            padding: '12px 16px',
                            border: '1px solid #d1d5db',
                            borderRadius: '12px',
                            outline: 'none',
                            transition: 'all 0.3s ease',
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '0.875rem'
                          }}
                          placeholder="John Doe"
                          onFocus={(e) => {
                            e.target.style.borderColor = '#667eea';
                            e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = '#d1d5db';
                            e.target.style.boxShadow = 'none';
                          }}
                        />
                      </div>
                      <div>
                        <label style={{
                          display: 'block',
                          fontSize: '0.875rem',
                          fontWeight: '500',
                          color: '#374151',
                          marginBottom: '0.5rem',
                          fontFamily: "'Inter', sans-serif"
                        }}>
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          style={{
                            width: '100%',
                            padding: '12px 16px',
                            border: '1px solid #d1d5db',
                            borderRadius: '12px',
                            outline: 'none',
                            transition: 'all 0.3s ease',
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '0.875rem'
                          }}
                          placeholder="john@company.com"
                          onFocus={(e) => {
                            e.target.style.borderColor = '#667eea';
                            e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = '#d1d5db';
                            e.target.style.boxShadow = 'none';
                          }}
                        />
                      </div>
                    </div>

                    {/* Company */}
                    <div>
                      <label style={{
                        display: 'block',
                        fontSize: '0.875rem',
                        fontWeight: '500',
                        color: '#374151',
                        marginBottom: '0.5rem',
                        fontFamily: "'Inter', sans-serif"
                      }}>
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: '1px solid #d1d5db',
                          borderRadius: '12px',
                          outline: 'none',
                          transition: 'all 0.3s ease',
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '0.875rem'
                        }}
                        placeholder="Your Company Name"
                        onFocus={(e) => {
                          e.target.style.borderColor = '#667eea';
                          e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = '#d1d5db';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                    </div>

                    {/* Project Type and Budget */}
                    <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '1.5rem' }}>
                      <div>
                        <label style={{
                          display: 'block',
                          fontSize: '0.875rem',
                          fontWeight: '500',
                          color: '#374151',
                          marginBottom: '0.5rem',
                          fontFamily: "'Inter', sans-serif"
                        }}>
                          Project Type *
                        </label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          required
                          style={{
                            width: '100%',
                            padding: '12px 16px',
                            border: '1px solid #d1d5db',
                            borderRadius: '12px',
                            outline: 'none',
                            transition: 'all 0.3s ease',
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '0.875rem',
                            backgroundColor: 'white'
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = '#667eea';
                            e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = '#d1d5db';
                            e.target.style.boxShadow = 'none';
                          }}
                        >
                          <option value="">Select a project type</option>
                          {projectTypes.map((type) => (
                            <option key={type.value} value={type.value}>
                              {type.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                          Budget Range
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-purple focus:border-transparent outline-none transition-all"
                        >
                          <option value="">Select budget range</option>
                          {budgetRanges.map((range) => (
                            <option key={range.value} value={range.value}>
                              {range.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Timeline */}
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Preferred Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-purple focus:border-transparent outline-none transition-all"
                      >
                        <option value="">Select timeline</option>
                        {timelineOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Project Description *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-purple focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full btn btn-primary text-lg py-4 group"
                    >
                      Send Project Details
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                    Thank You!
                  </h3>
                  <p className="text-lg text-neutral-600 mb-6">
                    Your project details have been prepared. Your default email
                    client should open with a pre-filled message.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                    <div className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                      <div className="text-sm text-blue-800">
                        <p className="font-medium mb-1">
                          Email client didn't open?
                        </p>
                        <p>
                          Please send your inquiry to:{" "}
                          <strong>hello@devagency.com</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
