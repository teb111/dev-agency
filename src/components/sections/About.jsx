import React from "react";
import { motion } from "framer-motion";
import { Heart, Star, Users, Trophy, Rocket, Target } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion-Driven",
      description:
        "We pour our hearts into every project, treating your vision as our own.",
    },
    {
      icon: Star,
      title: "Excellence First",
      description:
        "Quality isn't negotiable. We deliver nothing short of exceptional results.",
    },
    {
      icon: Users,
      title: "Collaborative Spirit",
      description:
        "Success comes from working together, combining diverse perspectives and expertise.",
    },
    {
      icon: Trophy,
      title: "Results Focused",
      description:
        "We measure success by the impact we create for your business and users.",
    },
  ];

  const stats = [
    { number: "50+", label: "Projects Completed", icon: Rocket },
    { number: "4", label: "Team Members", icon: Users },
    { number: "98%", label: "Client Satisfaction", icon: Star },
    { number: "24/7", label: "Support Available", icon: Target },
  ];

  return (
    <section id="about" style={{
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
            <Heart style={{ width: '16px', height: '16px', color: '#667eea' }} />
            <span style={{
              fontSize: '0.875rem',
              fontWeight: '500',
              color: '#334155',
              fontFamily: "'Inter', sans-serif"
            }}>
              About Us
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
            Crafting Digital
            <span style={{
              display: 'block',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Excellence Together</span>
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(1, 1fr)',
          gap: '4rem',
          alignItems: 'center',
          marginBottom: '5rem'
        }} className="lg:grid-cols-2">
          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 style={{
              fontSize: '1.875rem',
              fontFamily: "'Playfair Display', serif",
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              color: '#0f172a'
            }}>
              We're Problem Solvers at Heart
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              fontSize: '1.125rem',
              color: '#475569',
              lineHeight: '1.6',
              fontFamily: "'Inter', sans-serif"
            }}>
              <p>
                Our journey began with a simple belief: that great digital
                solutions come from understanding real problems and crafting
                thoughtful answers. We're not just developers – we're your
                partners in transformation.
              </p>
              <p>
                With expertise spanning product management, mobile development,
                frontend engineering, and backend architecture, we bring a
                comprehensive approach to every challenge. Our diverse team
                ensures that every angle is covered, every detail is considered.
              </p>
              <p>
                From startup MVPs to enterprise solutions, we've helped
                businesses of all sizes turn their visions into reality. Our
                collaborative approach means you're involved every step of the
                way.
              </p>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1.5rem'
            }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                style={{
                  textAlign: 'center',
                  padding: '1.5rem',
                  background: 'linear-gradient(to bottom right, #f8fafc, white)',
                  borderRadius: '16px',
                  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                  transition: 'box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
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
                  <stat.icon style={{ width: '24px', height: '24px', color: 'white' }} />
                </div>
                <div style={{
                  fontSize: '1.875rem',
                  fontWeight: 'bold',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '8px'
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontSize: '0.875rem',
                  color: '#475569',
                  fontWeight: '500',
                  fontFamily: "'Inter', sans-serif"
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Values Section */}
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
          }}>Our Values</h3>
          <p style={{
            fontSize: '1.125rem',
            color: '#475569',
            maxWidth: '32rem',
            margin: '0 auto',
            lineHeight: '1.6',
            fontFamily: "'Inter', sans-serif"
          }}>
            The principles that guide everything we do and shape how we work
            with you
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: '1.5rem'
          }}
          className="md:grid-cols-2 lg:grid-cols-4"
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                textAlign: 'center',
                padding: '1.5rem',
                borderRadius: '16px',
                transition: 'background-color 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#f8fafc';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
              }}
            >
              <div style={{
                width: '64px',
                height: '64px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem auto',
                transition: 'transform 0.3s ease'
              }}>
                <value.icon style={{ width: '32px', height: '32px', color: 'white' }} />
              </div>
              <h4 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: '#0f172a',
                marginBottom: '12px',
                fontFamily: "'Inter', sans-serif"
              }}>
                {value.title}
              </h4>
              <p style={{
                color: '#475569',
                lineHeight: '1.6',
                fontFamily: "'Inter', sans-serif"
              }}>
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20 p-12 bg-gradient rounded-3xl text-white"
        >
          <h3 className="text-3xl font-display font-bold mb-4">
            Ready to Start Your Digital Journey?
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let's work together to turn your ideas into powerful digital
            solutions that drive real results for your business.
          </p>
          <button
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn bg-white text-neutral-900 hover:bg-neutral-100 text-lg px-8 py-4"
          >
            Let's Talk
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
