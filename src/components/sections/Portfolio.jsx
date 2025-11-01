import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Smartphone,
  Globe,
  ShoppingCart,
  Users,
  ArrowRight,
} from "lucide-react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Mobile App",
      category: "mobile",
      description:
        "A cross-platform shopping app with seamless payment integration and real-time inventory management.",
      image: "mobile-app",
      technologies: ["React Native", "Node.js", "MongoDB", "Stripe"],
      features: [
        "Push Notifications",
        "Payment Gateway",
        "Real-time Chat",
        "Order Tracking",
      ],
      gradient: "bg-gradient",
      icon: Smartphone,
    },
    {
      id: 2,
      title: "SaaS Dashboard Platform",
      category: "web",
      description:
        "A comprehensive analytics dashboard for businesses to track performance metrics and generate insights.",
      image: "dashboard",
      technologies: ["React", "TypeScript", "Python", "PostgreSQL"],
      features: [
        "Real-time Analytics",
        "Custom Reports",
        "API Integration",
        "Role Management",
      ],
      gradient: "bg-secondary-gradient",
      icon: Globe,
    },
    {
      id: 3,
      title: "Food Delivery Platform",
      category: "mobile",
      description:
        "End-to-end food delivery solution connecting restaurants, drivers, and customers seamlessly.",
      image: "food-delivery",
      technologies: ["Flutter", "Firebase", "Google Maps API", "PayPal"],
      features: [
        "GPS Tracking",
        "Multi-vendor Support",
        "Rating System",
        "Live Chat",
      ],
      gradient: "bg-accent-gradient",
      icon: Smartphone,
    },
    {
      id: 4,
      title: "Corporate Website Redesign",
      category: "web",
      description:
        "Modern, responsive website redesign that increased conversion rates by 150% and improved user engagement.",
      image: "corporate-site",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Netlify"],
      features: [
        "SEO Optimized",
        "Fast Loading",
        "Contact Forms",
        "Blog System",
      ],
      gradient: "bg-gradient",
      icon: Globe,
    },
    {
      id: 5,
      title: "Healthcare Consultation App",
      category: "mobile",
      description:
        "Telemedicine platform enabling secure video consultations between patients and healthcare providers.",
      image: "healthcare",
      technologies: ["React Native", "WebRTC", "AWS", "HIPAA Compliance"],
      features: [
        "Video Calls",
        "Appointment Booking",
        "Medical Records",
        "Prescription Management",
      ],
      gradient: "bg-secondary-gradient",
      icon: Users,
    },
    {
      id: 6,
      title: "Marketplace Web Platform",
      category: "web",
      description:
        "Multi-vendor marketplace with advanced search, seller management, and secure payment processing.",
      image: "marketplace",
      technologies: ["React", "Node.js", "Redis", "Elasticsearch"],
      features: [
        "Advanced Search",
        "Seller Dashboard",
        "Review System",
        "Payment Processing",
      ],
      gradient: "bg-accent-gradient",
      icon: ShoppingCart,
    },
  ];

  const filters = [
    { id: "all", label: "All Projects", count: projects.length },
    {
      id: "mobile",
      label: "Mobile Apps",
      count: projects.filter((p) => p.category === "mobile").length,
    },
    {
      id: "web",
      label: "Web Platforms",
      count: projects.filter((p) => p.category === "web").length,
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="portfolio" style={{
      padding: '8rem 0',
      backgroundColor: 'white'
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
            backgroundColor: '#f1f5f9',
            border: '1px solid #e2e8f0',
            borderRadius: '9999px',
            padding: '12px 24px',
            marginBottom: '1.5rem'
          }}>
            <ExternalLink style={{ width: '16px', height: '16px', color: '#667eea' }} />
            <span style={{
              fontSize: '0.875rem',
              fontWeight: '500',
              color: '#334155',
              fontFamily: "'Inter', sans-serif"
            }}>
              Our Work
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
            Portfolio of
            <span style={{
              display: 'block',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Success Stories</span>
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: '#64748b',
            maxWidth: '32rem',
            margin: '0 auto',
            lineHeight: '1.7',
            fontFamily: "'Inter', sans-serif"
          }}>
            Explore our recent projects and see how we've helped businesses
            transform their ideas into powerful digital solutions.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '3rem'
          }}
        >
          <div style={{
            display: 'inline-flex',
            backgroundColor: '#f1f5f9',
            borderRadius: '1rem',
            padding: '8px'
          }}>
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                style={{
                  padding: '12px 24px',
                  borderRadius: '12px',
                  fontWeight: '500',
                  transition: 'all 0.3s ease',
                  fontSize: '0.875rem',
                  fontFamily: "'Inter', sans-serif",
                  backgroundColor: activeFilter === filter.id ? 'white' : 'transparent',
                  color: activeFilter === filter.id ? '#1e293b' : '#64748b',
                  boxShadow: activeFilter === filter.id ? '0 1px 3px rgba(0, 0, 0, 0.1)' : 'none',
                  cursor: 'pointer',
                  border: 'none'
                }}
                onMouseEnter={(e) => {
                  if (activeFilter !== filter.id) {
                    e.target.style.color = '#1e293b';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeFilter !== filter.id) {
                    e.target.style.color = '#64748b';
                  }
                }}
              >
                {filter.label}
                <span style={{
                  marginLeft: '8px',
                  fontSize: '0.75rem',
                  opacity: '0.6'
                }}>
                  ({filter.count})
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{
            gap: '2rem',
            marginBottom: '4rem'
          }}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                  border: '1px solid #f1f5f9',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 25px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
                }}
              >
                {/* Project Image Placeholder */}
                <div
                  style={{
                    height: '16rem',
                    background: project.gradient,
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    inset: '0',
                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                    transition: 'background-color 0.3s ease'
                  }} />
                  <div style={{
                    position: 'absolute',
                    inset: '0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <div style={{ textAlign: 'center', color: 'white' }}>
                      <project.icon style={{ 
                        width: '4rem', 
                        height: '4rem', 
                        margin: '0 auto 1rem auto', 
                        opacity: '0.8' 
                      }} />
                      <div style={{
                        fontSize: '0.875rem',
                        fontWeight: '500',
                        opacity: '0.6',
                        fontFamily: "'Inter', sans-serif"
                      }}>
                        {project.category.toUpperCase()}
                      </div>
                    </div>
                  </div>
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    display: 'flex',
                    gap: '8px',
                    opacity: '0',
                    transition: 'opacity 0.3s ease'
                  }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = '1';
                    }}
                  >
                    <button style={{
                      width: '2.5rem',
                      height: '2.5rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(8px)',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'background-color 0.3s ease',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                      }}
                    >
                      <ExternalLink style={{ width: '1.25rem', height: '1.25rem', color: 'white' }} />
                    </button>
                    <button style={{
                      width: '2.5rem',
                      height: '2.5rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(8px)',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'background-color 0.3s ease',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                      }}
                    >
                      <Github style={{ width: '1.25rem', height: '1.25rem', color: 'white' }} />
                    </button>
                  </div>
                </div>

                {/* Project Content */}
                <div style={{ padding: '2rem' }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: '#1e293b',
                    marginBottom: '0.75rem',
                    fontFamily: "'Playfair Display', serif"
                  }}>
                    {project.title}
                  </h3>
                  <p style={{
                    color: '#64748b',
                    marginBottom: '1.5rem',
                    lineHeight: '1.6',
                    fontFamily: "'Inter', sans-serif"
                  }}>
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <div style={{
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      color: '#1e293b',
                      marginBottom: '0.75rem',
                      fontFamily: "'Inter', sans-serif"
                    }}>
                      Technologies:
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          style={{
                            backgroundColor: '#f1f5f9',
                            color: '#475569',
                            fontSize: '0.75rem',
                            padding: '4px 12px',
                            borderRadius: '9999px',
                            fontFamily: "'Inter', sans-serif"
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <div style={{
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      color: '#1e293b',
                      marginBottom: '0.75rem',
                      fontFamily: "'Inter', sans-serif"
                    }}>
                      Key Features:
                    </div>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(2, 1fr)',
                      gap: '8px'
                    }}>
                      {project.features.map((feature) => (
                        <div
                          key={feature}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            fontSize: '0.875rem',
                            color: '#64748b',
                            fontFamily: "'Inter', sans-serif"
                          }}
                        >
                          <div style={{
                            width: '6px',
                            height: '6px',
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            borderRadius: '9999px',
                            marginRight: '8px'
                          }} />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <button style={{
                    display: 'flex',
                    alignItems: 'center',
                    color: '#667eea',
                    fontWeight: '500',
                    transition: 'color 0.3s ease',
                    fontFamily: "'Inter', sans-serif",
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '0'
                  }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#764ba2';
                      const arrow = e.target.querySelector('.arrow');
                      if (arrow) arrow.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#667eea';
                      const arrow = e.target.querySelector('.arrow');
                      if (arrow) arrow.style.transform = 'translateX(0)';
                    }}
                  >
                    View Case Study
                    <ArrowRight 
                      className="arrow"
                      style={{
                        width: '1rem',
                        height: '1rem',
                        marginLeft: '8px',
                        transition: 'transform 0.3s ease'
                      }}
                    />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            textAlign: 'center',
            background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)',
            borderRadius: '1.5rem',
            padding: '3rem',
            border: '1px solid #f1f5f9'
          }}
        >
          <h3 style={{
            fontSize: '1.875rem',
            fontFamily: "'Playfair Display', serif",
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: '#0f172a'
          }}>
            Ready to Build Something Amazing?
          </h3>
          <p style={{
            fontSize: '1.125rem',
            color: '#64748b',
            marginBottom: '2rem',
            maxWidth: '32rem',
            margin: '0 auto 2rem auto',
            lineHeight: '1.7',
            fontFamily: "'Inter', sans-serif"
          }}>
            Every great project starts with a conversation. Let's discuss how we
            can bring your vision to life with our expertise and passion.
          </p>
          <button
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '1.125rem',
              padding: '1rem 2rem',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '9999px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontFamily: "'Inter', sans-serif",
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
              const arrow = e.target.querySelector('.arrow');
              if (arrow) arrow.style.transform = 'translateX(4px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
              const arrow = e.target.querySelector('.arrow');
              if (arrow) arrow.style.transform = 'translateX(0)';
            }}
          >
            Start Your Project
            <ArrowRight 
              className="arrow"
              style={{
                width: '1.25rem',
                height: '1.25rem',
                transition: 'transform 0.3s ease'
              }}
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
