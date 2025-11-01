import React from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  Globe,
  MessageCircle,
  Lightbulb,
  Code2,
  Database,
  Palette,
  Settings,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android platforms.",
      features: [
        "iOS & Android Development",
        "React Native",
        "Flutter",
        "App Store Optimization",
      ],
      gradient: "bg-gradient",
    },
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Modern, responsive websites and web applications built with cutting-edge technologies for optimal performance.",
      features: [
        "React & Next.js",
        "E-commerce Solutions",
        "Progressive Web Apps",
        "API Development",
      ],
      gradient: "bg-secondary-gradient",
    },
    {
      icon: MessageCircle,
      title: "Consultation Services",
      description:
        "Expert guidance and strategic consulting to help you make informed decisions about your digital transformation.",
      features: [
        "Technical Architecture",
        "Product Strategy",
        "Digital Transformation",
        "Technology Audit",
      ],
      gradient: "bg-accent-gradient",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description:
        "Custom solutions tailored to your unique business challenges, from concept to implementation.",
      features: [
        "Custom Software",
        "System Integration",
        "Process Automation",
        "Performance Optimization",
      ],
      gradient: "bg-gradient",
    },
  ];

  const teamExpertise = [
    {
      icon: Lightbulb,
      title: "Product Management",
      description: "Strategic product planning and roadmap development",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile solutions",
    },
    {
      icon: Palette,
      title: "Frontend Engineering",
      description: "Beautiful, responsive user interfaces",
    },
    {
      icon: Database,
      title: "Backend Engineering",
      description: "Scalable server-side architecture and APIs",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="services" style={{
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
            <Code2 style={{ width: '16px', height: '16px', color: '#667eea' }} />
            <span style={{
              fontSize: '0.875rem',
              fontWeight: '500',
              color: '#334155',
              fontFamily: "'Inter', sans-serif"
            }}>
              Our Services
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
            What We
            <span style={{
              display: 'block',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Create Together</span>
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: '#475569',
            maxWidth: '32rem',
            margin: '0 auto',
            lineHeight: '1.6',
            fontFamily: "'Inter', sans-serif"
          }}>
            Our diverse team brings together expertise in product management,
            development, and engineering to deliver comprehensive digital
            solutions.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: '2rem',
            marginBottom: '5rem'
          }}
          className="lg:grid-cols-2"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              style={{
                backgroundColor: 'white',
                borderRadius: '16px',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                overflow: 'hidden'
              }}
              whileHover={{
                y: -8,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
              }}
            >
              <div style={{ padding: '2rem' }}>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    background: service.gradient === 'bg-gradient' ? 
                      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' :
                      service.gradient === 'bg-secondary-gradient' ?
                      'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' :
                      'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    transition: 'transform 0.3s ease'
                  }}
                >
                  <service.icon style={{ width: '32px', height: '32px', color: 'white' }} />
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 'bold',
                  marginBottom: '1rem',
                  color: '#0f172a'
                }}>
                  {service.title}
                </h3>
                <p style={{
                  color: '#475569',
                  marginBottom: '1.5rem',
                  lineHeight: '1.6',
                  fontFamily: "'Inter', sans-serif"
                }}>
                  {service.description}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: '0.875rem',
                        color: '#475569',
                        marginBottom: '8px',
                        fontFamily: "'Inter', sans-serif"
                      }}
                    >
                      <div style={{
                        width: '8px',
                        height: '8px',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        borderRadius: '50%',
                        marginRight: '12px'
                      }} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            textAlign: 'center',
            marginBottom: '3rem'
          }}
        >
          <h3 style={{
            fontSize: '1.875rem',
            fontFamily: "'Playfair Display', serif",
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            color: '#0f172a'
          }}>
            Our Team Expertise
          </h3>
          <p style={{
            fontSize: '1.125rem',
            color: '#475569',
            marginBottom: '3rem',
            maxWidth: '32rem',
            margin: '0 auto',
            lineHeight: '1.6',
            fontFamily: "'Inter', sans-serif"
          }}>
            A multidisciplinary team working together to bring your vision to
            life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: '1.5rem'
          }}
          className="md:grid-cols-2 lg:grid-cols-4"
        >
          {teamExpertise.map((expertise) => (
            <motion.div
              key={expertise.title}
              variants={itemVariants}
              style={{
                textAlign: 'center',
                padding: '1.5rem',
                backgroundColor: 'white',
                borderRadius: '16px',
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                transition: 'box-shadow 0.3s ease'
              }}
              whileHover={{
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
              }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem auto'
              }}>
                <expertise.icon style={{ width: '24px', height: '24px', color: 'white' }} />
              </div>
              <h4 style={{
                fontWeight: '600',
                color: '#0f172a',
                marginBottom: '8px',
                fontFamily: "'Inter', sans-serif"
              }}>
                {expertise.title}
              </h4>
              <p style={{
                fontSize: '0.875rem',
                color: '#475569',
                fontFamily: "'Inter', sans-serif"
              }}>
                {expertise.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
