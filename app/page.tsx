'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import './animations.css';

export default function Home() {
  const [clickedBubble, setClickedBubble] = useState<number | null>(null);
  const [bubblePositions] = useState([
    { x: 85, y: 15, delay: 0, size: 180 }, 
    { x: 5, y: 50, delay: 0.5, size: 200 }, 
    { x: 90, y: 85, delay: 1, size: 190 }, 
  ]);

  const projects = [
    {
      title: 'AI-Powered Analytics Platform',
      description: 'A full-stack web application built with Next.js and modern technologies. Features include real-time updates, machine learning predictions, and responsive design.',
      github: 'https://github.com/username/project1',
      video: 'https://youtube.com/watch?v=example1',
      research: null,
      image: '/images/market-research-tool.jpg',
      skills: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Machine Learning'],
    },
    {
      title: 'Mobile Health Tracker',
      description: 'An innovative mobile app solution that solves real-world health problems. Built with React Native and integrated with cloud services for seamless data sync.',
      github: 'https://github.com/username/project2',
      video: null,
      research: 'https://arxiv.org/abs/example2',
      image: '/images/health-hive.png',
      skills: ['React Native', 'TypeScript', 'Firebase', 'Cloud Services', 'Mobile Development'],
    },
    {
      title: 'Microservices API Gateway',
      description: 'A powerful API platform with microservices architecture. Handles millions of requests with high performance and reliability, featuring auto-scaling and load balancing.',
      github: 'https://github.com/username/project3',
      video: 'https://youtube.com/watch?v=example3',
      research: null,
      image: '/images/secure-sign.png',
      skills: ['Microservices', 'API Gateway', 'Docker', 'Kubernetes', 'Load Balancing', 'Auto-scaling'],
    },
    {
      title: "What's in my fridge?",
      description: "What's in My Fridge? is an AI-powered app that analyzes food photos to detect spoilage and estimate shelf life, helping users reduce waste and make smarter food choices.",
      video: 'https://www.youtube.com/watch?v=_NHohmufBJA',
      github: 'https://github.com/Praneetha35/whats-in-my-fridge',
      image: '/images/fridge.png',
      skills: ['Python', 'TypeScript', 'Next.js', 'Flask', 'MongoDB', 'OpenAI'],
    },
    {
      title: 'Medication Verification System',
      description:'Medicine Verification System uses YOLOv11m for real-time vial detection, with a YOLOv8 + Roboflow pipeline enabling reliable small-object detection in real-world settings.',
      github: 'https://github.com/username/project5',
      video: 'https://youtube.com/watch?v=example5',
      research: null,
      image: '/images/vial.png',
      skills: ['Python', 'YOLOv11', 'YOLOv8', 'Computer Vision', 'Roboflow', 'Deep Learning'],
    },
    {
      title: 'Machine Learning Model Hub',
      description: 'A platform for sharing and deploying machine learning models. Features model versioning, A/B testing, and automated deployment pipelines.',
      github: 'https://github.com/username/project6',
      video: null,
      research: 'https://arxiv.org/abs/example6',
      image: '/images/fin-bert.png',
      skills: ['Python', 'Machine Learning', 'MLOps', 'Docker', 'Kubernetes', 'A/B Testing'],
    },
  ];

  const [currentProject, setCurrentProject] = useState(Math.floor(projects.length / 2));
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const handleBubbleClick = (index: number) => {
    setClickedBubble(index);
    setTimeout(() => setClickedBubble(null), 2000);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollLeft(currentProject);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = (x - startX) * 2; 
    setDragOffset(walk);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const threshold = 100;
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0 && currentProject > 0) {
        setCurrentProject(currentProject - 1);
      } else if (dragOffset < 0 && currentProject < projects.length - 1) {
        setCurrentProject(currentProject + 1);
      }
    }
    setDragOffset(0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setDragOffset(0);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentProject((prev) => (prev + 1) % projects.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, projects.length]);

  const journeyMilestones = [
    {
      type: 'education',
      title: 'Bachelors of Engineering in Electrical and Electronics',
      area: 'Loyola ICAM',
      location: 'Chennai, India',
      period: 'Aug 2018 - Apr 2022',
      startDate: 'Aug 2018',
      endDate: 'Apr 2022',
    },
    {
      type: 'work',
      title: 'Software Engineer',
      area: 'Calibraint Technologies',
      location: 'Chennai, India',
      period: 'Sept 2021 - Jun 2023',
      startDate: 'Sept 2021',
      endDate: 'Jun 2023',
    },
    {
      type: 'education',
      title: 'Master of Science in Computer Science',
      area: 'Western Michigan University',
      location: 'Chennai, India',
      period: 'Aug 2023 - June 2025',
      startDate: 'Aug 2023',
      endDate: 'June 2025',
    },
    {
      type: 'work',
      title: 'Software QA Intern',
      area: 'Oigetit',
      location: 'Los Gatos, CA, USA',
      period: 'Jun 2024 - Aug 2024',
      startDate: 'Jun 2024',
      endDate: 'Aug 2024',
    },
    {
      type: 'work',
      title: 'Software Engineering Fellow',
      area: 'Headstarter',
      location: 'Long Island City, NY, USA',
      period: 'Jul 2024 - Sept 2024',
      startDate: 'Jul 2024',
      endDate: 'Sept 2024',
    },
    {
      type: 'work',
      title: 'Graduate Teaching Assistant',
      area: 'Western Michigan University',
      location: 'Kalamazoo, MI, USA',
      period: 'Aug 2024 - April 2025',
      startDate: 'Aug 2024',
      endDate: 'April 2025',
    },
    {
      type: 'work',
      title: 'Software Engineer',
      area: 'Spectrum Net Designs Inc',
      location: 'Grand Rapids, MI, USA',
      period: 'Aug 2025 - Present',
      startDate: 'Aug 2025',
      endDate: 'Present',
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.backgroundPatterns}>
        <div className={styles.dottedPattern1}></div>
        <div className={styles.dottedPattern2}></div>
      </div>

      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <a href="#about" className={styles.navButton}>About</a>
          <a href="#experience" className={styles.navButton}>Experience</a>
          <a href="#projects" className={styles.navButton}>Projects</a>
          <a href="#memories" className={styles.navButton}>Memories</a>
          <a href="#contact" className={styles.navButton}>Contact</a>
        </div>
      </nav>

      <section id="about" className={styles.aboutSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutLeft}>
              <h1 className={styles.aboutTitle}>Software Engineer.</h1>
              <p className={styles.aboutDescription}>
              Just love building software that makes people’s lives simple              </p>
              <div className={styles.aboutFeature}>
                <div className={styles.aboutFeatureIcon}>
                  <div className={styles.aboutFeatureIconInner}></div>
                </div>
                <div className={styles.aboutFeatureText}>
                  <p>Highly skilled at progressive enhancement, design systems & UI Engineering.</p>
                  <p>Over a decade of experience building products for clients across several countries.</p>
                </div>
              </div>
            </div>

            <div className={styles.profileImageContainer}>
              <div className={styles.profileImage}>
                <Image
                  src="/image-1.jpeg"
                  alt="Profile"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>

            <div className={styles.aboutRight}>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className={`${styles.section} ${styles.journeySection}`}>
        <div className={styles.journeyContainer}>
          <h2 className={styles.journeyTitle}>Journey into Tech</h2>
          <div className={styles.routeMap}>
            <svg className={styles.routePath} viewBox="0 0 100 100" preserveAspectRatio="none">
              <path
                d={`M 5 60 
                   ${journeyMilestones.slice(1).map((_, index) => {
                     const total = journeyMilestones.length;
                     const progress = (index + 1) / (total - 1);
                     const x = 5 + (progress * 90);
                     const prevProgress = index / (total - 1);
                     const prevX = 5 + (prevProgress * 90);
                     const midX = (prevX + x) / 2;
                     const curveAmount = 3;
                     return `Q ${midX + curveAmount} 60, ${x} 60`;
                   }).join(' ')}`}
                fill="none"
                stroke="#a5d6a7"
                strokeWidth="0.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="none"
                className={styles.routeLine}
              />
            </svg>
            
            
            <div className={styles.routeItems}>
              {journeyMilestones.map((milestone, index) => {
                const total = journeyMilestones.length;
                const progress = index / (total - 1);
                
                const y = 60;
                
                const x = 5 + (progress * 90);
                
                const isTop = index % 2 === 0;
                
                return (
                  <div 
                    key={index} 
                    className={styles.routeItem}
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                    }}
                  >
                    <div className={styles.routeDot}>
                      <div className={styles.routeDotInner}></div>
                    </div>
                    
                    <div className={`${styles.routeCard} ${isTop ? styles.routeCardTop : styles.routeCardBottom}`}>
                      <div className={styles.routeCardContent}>
                        <h3 className={styles.routeCardTitle}>{milestone.title}</h3>
                        <p className={styles.routeCardArea}>{milestone.area}</p>
                        {milestone.location && (
                          <p className={styles.routeCardLocation}>{milestone.location}</p>
                        )}
                        <div className={styles.routeCardDates}>
                          <span className={styles.routeCardDate}>{milestone.startDate}</span>
                          <span className={styles.routeCardArrow}>→</span>
                          <span className={styles.routeCardDate}>{milestone.endDate}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className={`${styles.section} ${styles.projectsSection}`}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.projectsTitle}>Projects</h2>
          
          <div 
            className={styles.carouselContainer}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => {
              setIsAutoPlaying(true);
              handleMouseLeave();
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
          >
            <div className={styles.carouselInner}>
              {projects.map((project, index) => {
                const offset = index - currentProject;
                const absOffset = Math.abs(offset);
                const isVisible = absOffset <= 2; 
                
                if (!isVisible) return null;
                
                return (
                  <div
                    key={index}
                    className={styles.projectCard}
                    style={{
                      left: `calc(50% + ${(offset * 35) + (dragOffset / 20)}%)`,
                      transform: `
                        translateX(-50%) 
                        translateY(${absOffset * 20}px)
                        scale(${1 - absOffset * 0.15})
                        rotateY(${offset * 10}deg)
                      `,
                      opacity: 1 - absOffset * 0.3,
                      zIndex: projects.length - absOffset,
                      pointerEvents: absOffset === 0 ? 'auto' : 'none',
                    }}
                  >
                    <div 
                      className={`${styles.projectCardContent} ${absOffset !== 0 ? styles.projectCardContentInactive : ''}`}
                    >
                      <div className={styles.projectCardInner}>
                        <div className={styles.projectCardImageSection}>
                          <div className={styles.projectCardImage}>
                            {project.image ? (
                              <img
                                src={project.image}
                                alt={project.title}
                                className={styles.projectImage}
                              />
                            ) : (
                              <div className={styles.projectImagePlaceholder}>
                                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                                  <circle cx="8.5" cy="8.5" r="1.5"/>
                                  <polyline points="21 15 16 10 5 21"/>
                                </svg>
                              </div>
                            )}
                          </div>
                        </div>
                        <h3 className={styles.projectCardTitle}>{project.title}</h3>
                        <div className={styles.projectCardDescriptionSection}>
                          <p className={styles.projectCardDescription}>{project.description}</p>
                        </div>
                        {project.skills && (
                          <div className={styles.projectSkillsSection}>
                            <div className={styles.projectSkills}>
                              {project.skills.map((skill, skillIndex) => (
                                <span key={skillIndex} className={styles.skillTag}>
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        <div className={styles.projectCardIcons}>
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={styles.projectCardIcon}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <svg fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                              </svg>
                            </a>
                          )}
                          
                          {project.video && (
                            <a
                              href={project.video}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={styles.projectCardIcon}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <svg fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                              </svg>
                            </a>
                          )}
                          
                          {project.research && (
                            <a
                              href={project.research}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={styles.projectCardIcon}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <svg fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className={styles.carouselDots}>
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentProject(index);
                    setIsAutoPlaying(false);
                    setTimeout(() => setIsAutoPlaying(true), 5000);
                  }}
                  className={`${styles.carouselDot} ${index === currentProject ? styles.carouselDotActive : styles.carouselDotInactive}`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={() => {
                setCurrentProject((prev) => Math.max(0, prev - 1));
                setIsAutoPlaying(false);
                setTimeout(() => setIsAutoPlaying(true), 5000);
              }}
              disabled={currentProject === 0}
              className={`${styles.carouselArrow} ${styles.carouselArrowLeft}`}
              aria-label="Previous project"
            >
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={() => {
                setCurrentProject((prev) => Math.min(projects.length - 1, prev + 1));
                setIsAutoPlaying(false);
                setTimeout(() => setIsAutoPlaying(true), 5000);
              }}
              disabled={currentProject === projects.length - 1}
              className={`${styles.carouselArrow} ${styles.carouselArrowRight}`}
              aria-label="Next project"
            >
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section id="memories" className={`${styles.section} ${styles.memoriesSection}`}>
        <div className={styles.memoriesContainer}>
          <h2 className={styles.memoriesTitle}>Memories & Moments</h2>
          <div className={styles.memoriesGrid}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className={`${styles.memoryCard} ${i % 2 === 0 ? styles.memoryCardEven : styles.memoryCardOdd}`}
              >
                <div className="w-full h-full flex items-center justify-center">
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className={`${styles.section} ${styles.contactSection}`}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.contactTitle}>Let's Connect</h2>
          <div className={styles.contactLinks}>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              <span className={styles.contactLinkText}>LinkedIn</span>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              <span className={styles.contactLinkText}>GitHub</span>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              <span className={styles.contactLinkText}>YouTube</span>
            </a>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>© 2026 Portfolio. Built by Praneetha</p>
      </footer>
    </div>
  );
}
