'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import './animations.css';

export default function Home() {
  const [clickedBubble, setClickedBubble] = useState<number | null>(null);
  const [bubblePositions] = useState([
    { x: 85, y: 15, delay: 0, size: 180 }, // Top right (not too corner)
    { x: 5, y: 50, delay: 0.5, size: 200 }, // Left side
    { x: 90, y: 85, delay: 1, size: 190 }, // Bottom right corner
  ]);

  const [currentProject, setCurrentProject] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const handleBubbleClick = (index: number) => {
    setClickedBubble(index);
    setTimeout(() => setClickedBubble(null), 2000);
  };

  const projects = [
    {
      title: 'AI-Powered Analytics Platform',
      description: 'A full-stack web application built with Next.js and modern technologies. Features include real-time updates, machine learning predictions, and responsive design.',
      github: 'https://github.com/username/project1',
      video: 'https://youtube.com/watch?v=example1',
      research: null,
    },
    {
      title: 'Mobile Health Tracker',
      description: 'An innovative mobile app solution that solves real-world health problems. Built with React Native and integrated with cloud services for seamless data sync.',
      github: 'https://github.com/username/project2',
      video: null,
      research: 'https://arxiv.org/abs/example2',
    },
    {
      title: 'Microservices API Gateway',
      description: 'A powerful API platform with microservices architecture. Handles millions of requests with high performance and reliability, featuring auto-scaling and load balancing.',
      github: 'https://github.com/username/project3',
      video: 'https://youtube.com/watch?v=example3',
      research: null,
    },
    {
      title: 'Blockchain Voting System',
      description: 'Secure and transparent voting system using blockchain technology. Ensures immutability and verifiability of votes with smart contracts.',
      github: null,
      video: 'https://youtube.com/watch?v=example4',
      research: 'https://arxiv.org/abs/example4',
    },
    {
      title: 'Real-Time Collaboration Tool',
      description: 'A collaborative workspace platform with real-time synchronization. Built with WebSockets and modern web technologies for seamless team collaboration.',
      github: 'https://github.com/username/project5',
      video: 'https://youtube.com/watch?v=example5',
      research: null,
    },
    {
      title: 'Machine Learning Model Hub',
      description: 'A platform for sharing and deploying machine learning models. Features model versioning, A/B testing, and automated deployment pipelines.',
      github: 'https://github.com/username/project6',
      video: null,
      research: 'https://arxiv.org/abs/example6',
    },
  ];

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollLeft(currentProject);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    setDragOffset(walk);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    // Determine if we should change project based on drag distance
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

  const experiences = [
    {
      company: 'Spectrum Net Designs Inc',
      role: 'Software Engineer (Front End)',
      location: 'Grand Rapids, MI, USA',
      period: 'Aug 2025 - Present',
      achievements: [
        'Optimized build performance, cutting build time by 38% through code-splitting and bundle optimization for faster deployments',
        'Improved accessibility across 4+ client web apps by standardizing HTML/CSS, semantic markup, and WCAG, enhancing usability for 10k+ users',
        'Reduced state-related bugs by 40% and improved onboarding speed by 25% by standardizing React apps with Hooks, Context API, and Redux',
        'Improved lot search API speed by 30% under peak load by parallelizing GraphQL resolvers in Apollo Server and caching queries in Redis',
        'Built dynamic admin settings for fonts, header, and tile layouts, enabling non-technical customization and cutting turnaround time by 50%',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      company: 'Headstarter',
      role: 'Software Engineering Fellow',
      location: 'Long Island City, NY, USA',
      period: 'Jul 2024 - Sept 2024',
      achievements: [
        'Built and deployed 5 projects in 5 weeks using React, Next.js, Firebase, and OpenAI using agile, MVC, and CI/CD practices',
        'Led a team of 3 to develop AI-driven solutions with OpenAI and AWS Bedrock, and built a dynamic SaaS application',
        'Published an open-source React form validation library with real-time synchronous and asynchronous checks, reaching 400+ downloads on npm',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      company: 'Oigetit',
      role: 'Software Quality Assurance Intern',
      location: 'Los Gatos, CA, USA',
      period: 'Jun 2024 - Aug 2024',
      achievements: [
        'Validated data and automated tests, identifying 20+ bugs weekly across frontend and backend systems, ensuring seamless releases',
        'Collaborated with developers to troubleshoot issues related to API functionality, data integrity, and user interface performance',
        'Analyzed test results and created detailed reports to optimize overall software quality and enhance full-stack application reliability',
      ],
      color: 'from-orange-500 to-red-500',
    },
    {
      company: 'Calibraint Technologies',
      role: 'Software Engineer',
      location: 'Chennai, India',
      period: 'Sept 2021 - Jun 2023',
      achievements: [
        'Architected and maintained scalable and high-performance web applications using React, TypeScript, Express.js, Node.js, NestJS and MongoDB',
        'Developed scalable RESTful APIs for vendor search and analytics, integrating ElasticSearch to improve retrieval efficiency by 6.5x across 3.2B records',
        'Designed and deployed a cost-efficient NFT metadata storage system using AWS Lambda and S3, cutting transaction overhead and saving ~$5,000/year',
        'Automated deployment workflows with GitHub Actions, CircleCI, and Docker, achieving 20% faster release cycles and ensuring consistent staging',
        'Optimized PostgreSQL queries and indexing on 1M+ hospital records, enabling sub-100ms access to diverse clinical data',
        'Engineered reusable React components with Redux, cutting redundant code by 30% and streamlining cross-team development',
        'Ensured 100% unit test coverage with Jest and Mocha reducing production bugs and enhancing overall code quality',
        'Enhanced reporting dashboard performance and data visualization through optimized Mongo queries and efficient indexing strategies',
      ],
      color: 'from-green-500 to-teal-500',
    },
    {
      company: 'Western Michigan University',
      role: 'Graduate Teaching Assistant',
      location: 'Kalamazoo, MI, USA',
      period: 'Aug 2024 - April 2025',
      achievements: [
        'Boosted grading efficiency by over 50% by integrating C language test scripts into github workflows for automated testing',
        'Facilitated 60+ C programming sessions on memory management, file I/O and UNIX IPC, reinforcing essential system-level programming skills',
        'Mentored 50+ students in python programming, focusing on clean code practices, debugging techniques and algorithm design',
        'Configured Docker-based environments for deploying and testing assignments on github, streamlining workflows and reducing setup issues for students',
      ],
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <div className={styles.container}>
      {/* Abstract Geometric Shapes Background - Removed criss-cross patterns */}
      <div className={styles.backgroundPatterns}>
        {/* Simple dotted patterns only */}
        <div className={styles.dottedPattern1}></div>
        <div className={styles.dottedPattern2}></div>
      </div>

      {/* Navigation - Buttons Top Right - Static */}
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <a href="#about" className={styles.navButton}>About</a>
          <a href="#experience" className={styles.navButton}>Experience</a>
          <a href="#projects" className={styles.navButton}>Projects</a>
          <a href="#memories" className={styles.navButton}>Memories</a>
          <a href="#contact" className={styles.navButton}>Contact</a>
        </div>
      </nav>

      {/* About Me Section */}
      <section id="about" className={styles.aboutSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.aboutGrid}>
            {/* Left Section - Purple Background */}
            <div className={styles.aboutLeft}>
              <h1 className={styles.aboutTitle}>Software Engineer.</h1>
              <p className={styles.aboutDescription}>
                I like to craft solid and scalable frontend products with great user experiences.
              </p>
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

            {/* Circular Photo at Border - Bigger */}
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

            {/* Right Section - Soft Green Background */}
            <div className={styles.aboutRight}>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section - Timeline */}
      <section id="experience" className={`${styles.section} ${styles.experienceSection}`}>
        <div className={styles.timelineContainer}>
          <h2 className={styles.experienceTitle}>Experience</h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className={styles.timelineLine}></div>

            {/* Timeline Items */}
            <div className={styles.timelineItems}>
              {experiences.map((exp, index) => (
                <div key={index} className={styles.timelineItem}>
                  {/* Timeline Dot */}
                  <div className={styles.timelineDot}></div>

                  {/* Content Card */}
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineCard}>
                      <div className={styles.timelineCardHeader}>
                        <h3 className={styles.timelineCardTitle}>{exp.role}</h3>
                        <p className={styles.timelineCardCompany}>{exp.company}</p>
                        <p className={styles.timelineCardLocation}>{exp.location}</p>
                        <p className={styles.timelineCardPeriod}>{exp.period}</p>
                      </div>
                      <ul className={styles.timelineCardList}>
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className={styles.timelineCardListItem}>
                            <span>●</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Modern Carousel with Multiple Cards */}
      <section id="projects" className={`${styles.section} ${styles.projectsSection}`}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.projectsTitle}>Projects</h2>
          
          {/* Carousel Container with Drag Support */}
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
            {/* Project Cards - Show 3-4 at once */}
            <div className={styles.carouselInner}>
              {projects.map((project, index) => {
                const offset = index - currentProject;
                const absOffset = Math.abs(offset);
                const isVisible = absOffset <= 2; // Show up to 3 cards (current + 2 on each side)
                
                if (!isVisible) return null;
                
                return (
                  <div
                    key={index}
                    className={styles.projectCard}
                    style={{
                      left: `calc(50% + ${(offset * 30) + (dragOffset / 20)}%)`,
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
                        {/* Title */}
                        <h3 className={styles.projectCardTitle}>{project.title}</h3>
                        
                        {/* Description */}
                        <p className={styles.projectCardDescription}>{project.description}</p>
                        
                        {/* Icons Row - No Text */}
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
            
            {/* Navigation Dots */}
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
            
            {/* Navigation Arrows */}
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

      {/* Memories Section */}
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
                  {/* Photo placeholder */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
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

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© 2024 Portfolio. Built with Next.js</p>
      </footer>
    </div>
  );
}
