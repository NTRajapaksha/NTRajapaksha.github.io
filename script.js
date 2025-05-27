:root {
  --primary-color: #4f46e5;
  --secondary-color: #818cf8;
  --accent-color: #6366f1;
  --dark-color: #1e293b;
  --light-color: #f8fafc;
  --gradient-1: linear-gradient(135deg, #4f46e5 0%, #818cf8 100%);
  --gradient-2: linear-gradient(135deg, #6366f1 0%, #a5b4fc 100%);
}

body {
  background: linear-gradient(135deg, var(--light-color) 0%, #e2e8f0 100%);
  color: var(--dark-color);
  font-weight: 500;
}

.gradient-bg {
  background: var(--gradient-1);
}

.gradient-text {
  background: var(--gradient-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.lead.text-muted {
  font-weight: 500;
  color: #4b5563 !important; /* Darker shade for better readability */
  font-size: 1.1rem;
  line-height: 1.8;
}

/* Home section title enhancements */
.hero-name {
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  letter-spacing: -0.5px;
  text-transform: none;
}

.hero-title {
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 1.25rem;
}

/* Improved typography */
.section-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.card-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
}

.card-text {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #4b5563;
}

/* Specific card text improvements */
.project-card h3 {
  font-weight: 600;
  font-size: 1.3rem; /* Reduced from 1.4rem */
}

.project-card p {
  font-weight: 500;
  color: #4b5563;
  font-size: 0.9rem; /* Added specific size */
}

.education-card h4 {
  font-weight: 600;
  font-size: 1.2rem; /* Added specific size */
}

.skill-bar h5 {
  font-weight: 600;
  font-size: 1rem; /* Added specific size */
}

/* Enhanced text for project cards */
.project-card h3 {
  font-weight: 600;
  font-size: 1.4rem;
}

.project-card p {
  font-weight: 500;
  color: #4b5563;
}

/* Enhanced text for education cards */
.education-card h4 {
  font-weight: 600;
}

.education-card p {
  font-weight: 500;
  color: #4b5563;
}

/* Enhanced text for skill sections */
.skill-bar h5 {
  font-weight: 600;
}

/* Enhanced text for certification items */
.cert-item p {
  font-weight: 500;
  color: #4b5563;
}

/* Enhanced section headers */
.gradient-text {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
}

.section-card {
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  transform: translateY(30px);
  overflow: hidden;
  max-width: 1111px;
  margin: 0 auto 2rem auto;
  padding: 2.5rem;
}

.section-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.section-card:hover {
  transform: translateY(-5px) scale(1.01);
  box-shadow: 0 20px 40px rgba(79, 70, 229, 0.15);
}

.project-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  transform: translateY(20px);
}

.project-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.project-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 15px 30px rgba(79, 70, 229, 0.15);
}

.floating-nav {
  position: fixed;
  top: 50%;
  right: 2rem;
  transform: translateY(-50%);
  z-index: 1000;
  background: white;
  padding: 1rem;
  border-radius: 30px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  opacity: 0;
  animation: fadeIn 0.5s ease forwards 1s;
}

.floating-nav a {
  color: var(--dark-color);
  transition: all 0.3s;
  position: relative;
}

.floating-nav a:hover {
  color: var(--primary-color);
  transform: scale(1.1);
}

.skill-bar {
  height: 30px;
  border-radius: 15px;
  overflow: hidden;
  background: #e2e8f0;
  position: relative;
}

.skill-progress {
  height: 100%;
  background: var(--gradient-1);
  border-radius: 15px;
  width: 0;
  transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Enhanced Skills Section Styles */
.skill-category {
  margin-bottom: 3rem;
}

.skill-category-title {
  font-weight: 600;
  color: var(--dark-color);
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e2e8f0;
  position: relative;
}

.skill-category-title::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 60px;
  height: 2px;
  background: var(--gradient-1);
}

.skill-category-title i {
  color: var(--primary-color);
  font-size: 1.2rem;
}

/* Skill Logo Styles */
.skill-logo {
  width: 40px;
  height: 40px;
  object-fit: contain;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  transition: all 0.3s ease;
}

.skill-logo:hover {
  transform: scale(1.1);
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
}

.skill-tag-logo {
  width: 20px;
  height: 20px;
  object-fit: contain;
  margin-right: 8px;
  vertical-align: middle;
}

.skill-tag-icon {
  font-size: 16px;
  margin-right: 8px;
  color: var(--primary-color);
  vertical-align: middle;
}

.skill-item {
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  border-left: 4px solid transparent;
}

.skill-item:hover {
  background: white;
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.1);
  border-left-color: var(--primary-color);
  transform: translateX(5px);
}

.skill-item:hover .skill-logo {
  transform: scale(1.15) rotate(5deg);
}

.skill-name {
  font-weight: 600;
  color: var(--dark-color);
  font-size: 1rem;
}

.skill-percentage {
  font-weight: 600;
  color: var(--primary-color);
  font-size: 0.9rem;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.skill-tag {
  background: white;
  color: var(--dark-color);
  padding: 0.8rem 1.2rem;
  border-radius: 25px;
  font-weight: 500;
  font-size: 0.9rem;
  border: 2px solid #e2e8f0;
  transition: all 0.3s ease;
  cursor: default;
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
}

.skill-tag:hover {
  background: var(--gradient-1);
  color: white;
  border-color: var(--primary-color);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.2);
}

.skill-tag:hover .skill-tag-logo {
  transform: scale(1.1);
  filter: brightness(0) invert(1);
}

.skill-tag:hover .skill-tag-icon {
  color: white;
  transform: scale(1.1);
}

/* Mobile responsiveness for skills */
@media (max-width: 768px) {
  .skill-category-title {
    font-size: 1.2rem;
  }

  .skill-item {
    padding: 1rem;
  }

  .skill-tag {
    padding: 0.6rem 1rem;
    font-size: 0.85rem;
  }

  .skill-logo {
    width: 32px;
    height: 32px;
  }

  .skill-tag-logo {
    width: 16px;
    height: 16px;
    margin-right: 6px;
  }

  .skill-tag-icon {
    font-size: 14px;
    margin-right: 6px;
  }
}

@media (max-width: 576px) {
  .skill-tags {
    gap: 0.5rem;
  }

  .skill-logo {
    width: 28px;
    height: 28px;
  }

  .skill-tag-logo {
    width: 14px;
    height: 14px;
    margin-right: 4px;
  }

  .skill-tag-icon {
    font-size: 12px;
    margin-right: 4px;
  }

  .skill-tag {
    padding: 0.5rem 0.8rem;
    font-size: 0.8rem;
  }
}

.education-card {
  border-left: 4px solid var(--primary-color);
  padding-left: 1.5rem;
  margin-bottom: 2rem;
  position: relative;
  opacity: 0;
  transform: translateX(-20px);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.education-card.visible {
  opacity: 1;
  transform: translateX(0);
}

.education-card::before {
  content: "";
  position: absolute;
  left: -10px;
  top: 0;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--primary-color);
  transform: scale(0);
  transition: transform 0.3s ease;
}

.education-card.visible::before {
  transform: scale(1);
}

.soft-skill-card {
  background: white;
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  transform: scale(0.9);
}

.soft-skill-card.visible {
  opacity: 1;
  transform: scale(1);
}

.soft-skill-card:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 10px 20px rgba(79, 70, 229, 0.1);
}

.profile-img {
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  width: 300px;
  height: 300px;
}

.profile-img.visible {
  opacity: 1;
  transform: scale(1);
}

.social-btn {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.social-btn.visible {
  opacity: 1;
  transform: translateY(0);
}

.social-btn:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(79, 70, 229, 0.2);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.hidden-project {
  display: none;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.hidden-project.show {
  display: block;
  opacity: 1;
  transform: translateY(0);
}

#showMoreBtn {
  transition: all 0.3s ease;
}

#showMoreBtn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(79, 70, 229, 0.2);
}

.certification-card {
  background: #f8f9fa;
  border-radius: 15px;
  padding: 20px;
  transition: all 0.3s ease;
}

.certification-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.certification-scroll {
  max-height: 400px;
  overflow: hidden;
  transition: max-height 0.6s ease-in-out;
  position: relative;
}

.certification-scroll.expanded {
  max-height: 1500px;
}

.certification-scroll:not(.expanded)::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40px;
  background: linear-gradient(transparent, white);
  pointer-events: none;
}

.cert-item {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.4s ease;
  background: white;
  border-radius: 12px;
  padding: 18px;
  margin-bottom: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  border-left: 4px solid var(--primary-color);
}

.cert-item.visible {
  opacity: 1;
  transform: translateY(0);
}

.certification-badge {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.badge {
  font-size: 0.85rem;
  padding: 0.5em 1em;
  border-radius: 20px;
}

.cert-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.1);
}

.cert-item p {
  font-weight: 500;
  color: #374151;
  line-height: 1.5;
}

.cert-item i {
  font-size: 1.2rem;
  opacity: 0.8;
}

/* Show More/Less Button Styling */
#showMoreCerts {
  transition: all 0.3s ease;
  background: var(--gradient-1);
  border: none;
  border-radius: 25px;
  padding: 12px 24px;
  color: white;
  font-weight: 600;
  margin-top: 20px;
}

#showMoreCerts:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(79, 70, 229, 0.3);
}

/* Mobile responsiveness for certifications */
@media (max-width: 768px) {
  .certification-scroll {
    max-height: 350px;
  }

  .certification-scroll.expanded {
    max-height: 1200px;
  }

  .cert-item {
    padding: 15px;
    margin-bottom: 10px;
  }

  .cert-item i {
    font-size: 1rem;
  }

  #showMoreCerts {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
}

@media (max-width: 576px) {
  .cert-item .d-flex {
    flex-direction: column;
    align-items: flex-start;
  }

  .cert-item i {
    margin-bottom: 8px;
    margin-right: 0 !important;
  }
}

.project-card {
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.project-card:hover {
  border-color: var(--primary-color);
}

.achievement-card {
  background: white;
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  transform: translateY(20px);
}

.achievement-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.achievement-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(79, 70, 229, 0.1);
}

/* Responsive Styles - Add to your existing styles.css */

/* Mobile Navigation */
@media (max-width: 768px) {
  .floating-nav {
    top: auto;
    bottom: 0;
    right: 0;
    left: 0;
    transform: none;
    display: flex;
    justify-content: center;
    border-radius: 15px 15px 0 0;
    padding: 0.5rem;
  }

  .floating-nav .d-flex {
    flex-direction: row !important;
    gap: 1rem !important;
  }

  /* Profile image for mobile */
  .profile-img {
    width: 120px;
    height: 120px;
  }

  /* Adjust hero section text */
  #home h1.display-3 {
    font-size: calc(1.5rem + 1.5vw);
  }

  /* Adjust section headers */
  .display-4 {
    font-size: calc(1.4rem + 1.2vw);
  }

  /* Skill bars and cards adjustment */
  .skill-bar {
    height: 20px;
  }

  /* Adjust padding for smaller screens */
  .section-card {
    padding: 1.5rem !important;
  }

  /* Adjust project and skill cards */
  .project-card,
  .soft-skill-card,
  .achievement-card {
    padding: 1rem;
  }

  /* Social buttons for mobile */
  .social-btn {
    padding: 0.5rem 1rem !important;
    font-size: 0.9rem !important;
  }
}

/* Small screens (phones) */
@media (max-width: 576px) {
  /* Further adjustments for very small screens */
  #home .container .section-card {
    padding: 1rem !important;
  }

  .social-btn {
    padding: 0.4rem 0.8rem !important;
    font-size: 0.8rem !important;
  }

  /* Stack social buttons on very small screens */
  #home .d-flex.justify-content-center {
    flex-direction: column;
    align-items: center;
  }

  /* Better spacing for stacked elements */
  .mb-4 {
    margin-bottom: 1rem !important;
  }

  /* Ensure icons in project cards don't overflow */
  .project-card .d-flex {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .project-card .gradient-bg {
    margin-bottom: 1rem;
    margin-right: 0 !important;
  }

  /* Make sure detail buttons stay visible */
  .project-card .btn {
    width: 100%;
    margin-top: 0.5rem;
  }
}

/* Tablet adjustments */
@media (min-width: 769px) and (max-width: 992px) {
  .floating-nav {
    right: 1rem;
  }

  .section-card {
    padding: 2rem !important;
  }
}

/* Achievement icon in floating nav */
.nav-icon {
  vertical-align: middle;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.nav-icon:hover {
  background-color: rgba(79, 70, 229, 0.1);
}

.nav-icon.active {
  color: var(--primary-color);
  background-color: rgba(79, 70, 229, 0.1);
}

@media (max-width: 768px) {
  .floating-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0.8rem 0.5rem;
    border-radius: 15px 15px 0 0;
    background: white;
    box-shadow: 0 -5px 20px rgba(0, 0, 0, 0.1);
  }

  .floating-nav .d-flex {
    width: 100%;
    display: flex !important;
    flex-direction: row !important;
    justify-content: space-between !important;
    align-items: center !important;
    gap: 0 !important;
    padding: 0 1rem;
  }

  .nav-icon {
    font-size: 1.4rem;
    margin: 0;
    padding: 8px;
  }
}

@media (max-width: 576px) {
  .nav-icon {
    font-size: 1.2rem;
    padding: 6px;
  }
}

@media (max-width: 768px) {
  .section-card {
    max-width: 100%;
    margin: 0 1rem 2rem 1rem;
    padding: 1.5rem !important;
  }
  .section-title {
    font-size: 2rem;
  }

  .card-title {
    font-size: 1.1rem;
  }

  .card-text {
    font-size: 0.9rem;
  }
}

@media (max-width: 576px) {
  .section-card {
    margin: 0 0.5rem 1.5rem 0.5rem;
    padding: 1rem !important;
  }

  .section-title {
    font-size: 1.8rem;
  }
}
