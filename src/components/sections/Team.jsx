import React from "react";
import { motion } from "framer-motion";
import {
  User,
  Lightbulb,
  Smartphone,
  Monitor,
  Database,
  LinkedinIcon,
  TwitterIcon,
  GithubIcon,
} from "lucide-react";

const Team = () => {
  const team = [
    {
      name: "Alex Chen",
      role: "Product Manager",
      avatar: "AC",
      bio: "Strategic thinker who transforms complex requirements into clear product roadmaps and user-centered solutions.",
      skills: [
        "Product Strategy",
        "User Research",
        "Agile Management",
        "Data Analysis",
      ],
      color: "bg-gradient",
      icon: Lightbulb,
    },
    {
      name: "Sarah Kim",
      role: "Mobile Developer",
      avatar: "SK",
      bio: "Expert in cross-platform mobile development with a passion for creating smooth, intuitive user experiences.",
      skills: ["React Native", "iOS/Android", "Flutter", "Mobile UI/UX"],
      color: "bg-secondary-gradient",
      icon: Smartphone,
    },
    {
      name: "Marcus Johnson",
      role: "Frontend Engineer",
      avatar: "MJ",
      bio: "Creative developer who brings designs to life with modern frameworks and pixel-perfect attention to detail.",
      skills: [
        "React/Next.js",
        "TypeScript",
        "UI/UX Design",
        "Performance Optimization",
      ],
      color: "bg-accent-gradient",
      icon: Monitor,
    },
    {
      name: "Elena Rodriguez",
      role: "Backend Engineer",
      avatar: "ER",
      bio: "Architecture specialist focused on building scalable, secure systems that power exceptional user experiences.",
      skills: ["Node.js", "Python", "Cloud Architecture", "Database Design"],
      color: "bg-gradient",
      icon: Database,
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
    <section id="team" style={{
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
            <User style={{ width: '16px', height: '16px', color: '#667eea' }} />
            <span style={{
              fontSize: '0.875rem',
              fontWeight: '500',
              color: '#334155',
              fontFamily: "'Inter', sans-serif"
            }}>
              Our Team
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
            Meet the
            <span style={{
              display: 'block',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Dream Team</span>
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: '#64748b',
            maxWidth: '32rem',
            margin: '0 auto',
            lineHeight: '1.7',
            fontFamily: "'Inter', sans-serif"
          }}>
            A diverse group of passionate professionals united by our commitment
            to excellence and innovation in digital solutions.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          style={{
            gap: '2rem',
            marginBottom: '4rem'
          }}
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              style={{
                backgroundColor: 'white',
                borderRadius: '1rem',
                overflow: 'hidden',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                border: '1px solid #f1f5f9',
                transition: 'all 0.3s ease',
                textAlign: 'center',
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
              <div style={{ padding: '2rem' }}>
                {/* Avatar */}
                <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
                  <div
                    style={{
                      width: '6rem',
                      height: '6rem',
                      background: member.color === 'bg-gradient' ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' :
                                 member.color === 'bg-secondary-gradient' ? 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' :
                                 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                      borderRadius: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1rem auto',
                      transition: 'transform 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1)';
                    }}
                  >
                    <span style={{
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      color: 'white',
                      fontFamily: "'Inter', sans-serif"
                    }}>
                      {member.avatar}
                    </span>
                  </div>
                  <div style={{
                    position: 'absolute',
                    bottom: '-8px',
                    right: '-8px',
                    width: '2rem',
                    height: '2rem',
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                  }}>
                    <member.icon style={{ width: '1rem', height: '1rem', color: '#64748b' }} />
                  </div>
                </div>

                {/* Info */}
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  color: '#1e293b',
                  marginBottom: '0.25rem',
                  fontFamily: "'Playfair Display', serif"
                }}>
                  {member.name}
                </h3>
                <p style={{
                  color: '#667eea',
                  fontWeight: '500',
                  marginBottom: '1rem',
                  fontFamily: "'Inter', sans-serif"
                }}>
                  {member.role}
                </p>
                <p style={{
                  color: '#64748b',
                  fontSize: '0.875rem',
                  marginBottom: '1.5rem',
                  lineHeight: '1.6',
                  fontFamily: "'Inter', sans-serif"
                }}>
                  {member.bio}
                </p>

                {/* Skills */}
                <div style={{ marginBottom: '1.5rem' }}>
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        display: 'inline-block',
                        backgroundColor: '#f1f5f9',
                        color: '#475569',
                        fontSize: '0.75rem',
                        padding: '4px 12px',
                        borderRadius: '9999px',
                        marginRight: '8px',
                        marginBottom: '8px',
                        fontFamily: "'Inter', sans-serif"
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Social Links */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '12px',
                  opacity: '0',
                  transition: 'opacity 0.3s ease'
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '1';
                  }}
                >
                  <button style={{
                    width: '2rem',
                    height: '2rem',
                    backgroundColor: '#f1f5f9',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s ease',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#667eea';
                      e.target.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#f1f5f9';
                      e.target.style.color = '#64748b';
                    }}
                  >
                    <LinkedinIcon style={{ width: '1rem', height: '1rem' }} />
                  </button>
                  <button style={{
                    width: '2rem',
                    height: '2rem',
                    backgroundColor: '#f1f5f9',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s ease',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#667eea';
                      e.target.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#f1f5f9';
                      e.target.style.color = '#64748b';
                    }}
                  >
                    <TwitterIcon style={{ width: '1rem', height: '1rem' }} />
                  </button>
                  <button style={{
                    width: '2rem',
                    height: '2rem',
                    backgroundColor: '#f1f5f9',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s ease',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#667eea';
                      e.target.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#f1f5f9';
                      e.target.style.color = '#64748b';
                    }}
                  >
                    <GithubIcon style={{ width: '1rem', height: '1rem' }} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Culture */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            textAlign: 'center',
            backgroundColor: 'white',
            borderRadius: '1.5rem',
            padding: '3rem',
            border: '1px solid #f1f5f9'
          }}
        >
          <h3 style={{
            fontSize: '1.875rem',
            fontFamily: "'Playfair Display', serif",
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            color: '#0f172a'
          }}>
            Why We Work Great Together
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3" style={{
            gap: '2rem',
            maxWidth: '64rem',
            margin: '0 auto'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '4rem',
                height: '4rem',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem auto'
              }}>
                <Lightbulb style={{ width: '2rem', height: '2rem', color: 'white' }} />
              </div>
              <h4 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                marginBottom: '0.75rem',
                color: '#1e293b',
                fontFamily: "'Inter', sans-serif"
              }}>
                Diverse Perspectives
              </h4>
              <p style={{
                color: '#64748b',
                lineHeight: '1.6',
                fontFamily: "'Inter', sans-serif"
              }}>
                Our varied backgrounds and expertise create innovative solutions
                through collaborative thinking.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '4rem',
                height: '4rem',
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                borderRadius: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem auto'
              }}>
                <User style={{ width: '2rem', height: '2rem', color: 'white' }} />
              </div>
              <h4 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                marginBottom: '0.75rem',
                color: '#1e293b',
                fontFamily: "'Inter', sans-serif"
              }}>Shared Values</h4>
              <p style={{
                color: '#64748b',
                lineHeight: '1.6',
                fontFamily: "'Inter', sans-serif"
              }}>
                United by our commitment to quality, innovation, and putting
                clients first in everything we do.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '4rem',
                height: '4rem',
                background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                borderRadius: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem auto'
              }}>
                <Database style={{ width: '2rem', height: '2rem', color: 'white' }} />
              </div>
              <h4 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                marginBottom: '0.75rem',
                color: '#1e293b',
                fontFamily: "'Inter', sans-serif"
              }}>
                Complementary Skills
              </h4>
              <p style={{
                color: '#64748b',
                lineHeight: '1.6',
                fontFamily: "'Inter', sans-serif"
              }}>
                Each team member brings unique strengths that complement others,
                creating a powerful collective capability.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
