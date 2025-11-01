import React from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  LinkedinIcon,
  TwitterIcon,
  GithubIcon,
  DribbbleIcon,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const footerLinks = {
    Services: [
      { name: "Mobile App Development", href: "#services" },
      { name: "Web Development", href: "#services" },
      { name: "Consultation Services", href: "#services" },
      { name: "Problem Solving", href: "#services" },
    ],
    Company: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#team" },
      { name: "Portfolio", href: "#portfolio" },
      { name: "Contact", href: "#contact" },
    ],
    Resources: [
      { name: "Case Studies", href: "#portfolio" },
      { name: "Free Consultation", href: "#contact" },
      { name: "Project Planner", href: "#contact" },
      { name: "Tech Blog", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: LinkedinIcon, href: "#", name: "LinkedIn" },
    { icon: TwitterIcon, href: "#", name: "Twitter" },
    { icon: GithubIcon, href: "#", name: "GitHub" },
    { icon: DribbbleIcon, href: "#", name: "Dribbble" },
  ];

  return (
    <footer style={{ backgroundColor: '#0f172a', color: 'white' }}>
      {/* Main Footer */}
      <div style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '4rem 1.5rem'
      }}>
        <div className="grid grid-cols-1 lg:grid-cols-4" style={{ gap: '3rem' }}>
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '1.5rem'
            }}>
              <div style={{
                width: '2.5rem',
                height: '2.5rem',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Smartphone style={{ width: '1.5rem', height: '1.5rem', color: 'white' }} />
              </div>
              <span style={{
                fontSize: '1.5rem',
                fontFamily: "'Playfair Display', serif",
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                DevAgency
              </span>
            </div>
            <p style={{
              color: '#9ca3af',
              marginBottom: '1.5rem',
              lineHeight: '1.6',
              fontFamily: "'Inter', sans-serif"
            }}>
              We're a passionate team of product managers, developers, and
              engineers dedicated to creating digital solutions that make a
              difference.
            </p>

            {/* Contact Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                color: '#9ca3af',
                fontFamily: "'Inter', sans-serif"
              }}>
                <Mail style={{ width: '1rem', height: '1rem' }} />
                <span>hello@devagency.com</span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                color: '#9ca3af',
                fontFamily: "'Inter', sans-serif"
              }}>
                <Phone style={{ width: '1rem', height: '1rem' }} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                color: '#9ca3af',
                fontFamily: "'Inter', sans-serif"
              }}>
                <MapPin style={{ width: '1rem', height: '1rem' }} />
                <span>Remote Team, Worldwide</span>
              </div>
            </div>
          </motion.div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h4 style={{
                fontWeight: '600',
                color: 'white',
                marginBottom: '1.5rem',
                fontFamily: "'Inter', sans-serif"
              }}>{category}</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {links.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      style={{
                        color: '#9ca3af',
                        transition: 'color 0.2s ease',
                        backgroundColor: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '0',
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.875rem',
                        textAlign: 'left'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = '#9ca3af';
                      }}
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            marginTop: '4rem',
            paddingTop: '3rem',
            borderTop: '1px solid #374151'
          }}
        >
          <div style={{ maxWidth: '32rem' }}>
            <h4 style={{
              fontSize: '1.5rem',
              fontFamily: "'Playfair Display', serif",
              fontWeight: 'bold',
              marginBottom: '1rem',
              color: 'white'
            }}>
              Stay Updated
            </h4>
            <p style={{
              color: '#9ca3af',
              marginBottom: '1.5rem',
              fontFamily: "'Inter', sans-serif"
            }}>
              Get the latest insights on development trends, project tips, and
              our newest work.
            </p>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }} className="sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  flex: '1',
                  padding: '12px 16px',
                  backgroundColor: '#374151',
                  border: '1px solid #4b5563',
                  borderRadius: '12px',
                  color: 'white',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                  fontFamily: "'Inter', sans-serif"
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#667eea';
                  e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#4b5563';
                  e.target.style.boxShadow = 'none';
                }}
              />
              <button style={{
                padding: '12px 32px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: "'Inter', sans-serif"
              }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >Subscribe</button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid #374151' }}>
        <div style={{
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '1.5rem'
        }}>
          <div className="flex flex-col md:flex-row justify-between items-center" style={{
            gap: '1rem'
          }}>
            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                color: '#9ca3af',
                fontSize: '0.875rem',
                fontFamily: "'Inter', sans-serif"
              }}
            >
              © {new Date().getFullYear()} DevAgency. All rights reserved. Built
              with passion and purpose.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}
            >
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    backgroundColor: '#374151',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                    color: '#9ca3af'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                    e.target.style.transform = 'scale(1.1)';
                    e.target.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = '#374151';
                    e.target.style.transform = 'scale(1)';
                    e.target.style.color = '#9ca3af';
                  }}
                  aria-label={social.name}
                >
                  <social.icon style={{ width: '1.25rem', height: '1.25rem' }} />
                </a>
              ))}

              {/* Back to Top */}
              <button
                onClick={scrollToTop}
                style={{
                  width: '2.5rem',
                  height: '2.5rem',
                  backgroundColor: '#374151',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  border: 'none',
                  cursor: 'pointer',
                  marginLeft: '1rem',
                  color: '#9ca3af'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                  e.target.style.transform = 'scale(1.1)';
                  e.target.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#374151';
                  e.target.style.transform = 'scale(1)';
                  e.target.style.color = '#9ca3af';
                }}
                aria-label="Back to top"
              >
                <ArrowUp style={{ width: '1.25rem', height: '1.25rem' }} />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
