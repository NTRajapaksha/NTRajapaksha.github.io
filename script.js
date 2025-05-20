// Intersection Observer for animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px",
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
  
        if (entry.target.classList.contains("section-card")) {
          // Animate skill progress bars
          entry.target
            .querySelectorAll(".skill-progress")
            .forEach((bar, index) => {
              setTimeout(() => {
                const style = bar.getAttribute("style");
                if (style && style.match(/width:\s*(\d+)%/)) {
                  bar.style.width = style.match(/width:\s*(\d+)%/)[1] + "%";
                }
              }, index * 200);
            });
  
          // Animate education cards
          entry.target
            .querySelectorAll(".education-card")
            .forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("visible");
              }, index * 300);
            });
  
          // Animate soft skill cards
          entry.target
            .querySelectorAll(".soft-skill-card")
            .forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("visible");
              }, index * 200);
            });
  
          // Animate project cards
          entry.target
            .querySelectorAll(".project-card")
            .forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("visible");
              }, index * 200);
            });
            
          // Animate achievement cards
          entry.target
            .querySelectorAll(".achievement-card")
            .forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("visible");
              }, index * 200);
            });
        }
      }
    });
  }, observerOptions);
  
  // Initialize observer on DOM content loaded
  document.addEventListener("DOMContentLoaded", () => {
    // Observe elements for animation
    document
      .querySelectorAll(
        ".section-card, .project-card, .education-card, .soft-skill-card, .achievement-card"
      )
      .forEach((element) => {
        observer.observe(element);
      });
  
    // Animate social buttons
    const socialBtns = document.querySelectorAll(".social-btn");
    socialBtns.forEach((btn, index) => {
      setTimeout(() => {
        btn.classList.add("visible");
      }, 1500 + index * 200);
    });
  
    // Animate profile image
    setTimeout(() => {
      const profileImg = document.querySelector(".profile-img");
      if (profileImg) {
        profileImg.classList.add("visible");
      }
    }, 800);
  
    // Certification data
    setupCertifications();
    
    // Setup smooth scrolling
    setupSmoothScroll();
    
    // Setup project reveal functionality
    setupProjectReveal();
  });
  
  // Setup certifications
  function setupCertifications() {
    const certifications = [
      "Google Data Analytics Professional Certificate",
      "Google Business Intelligence Professional Certificate",
      "Introduction to Data Science in Python - University of Michigan",
      "Mathematics for Machine Learning and Data Science Specialization - DeepLearning.AI",
      "Introduction to Statistics - Stanford University",
      "Deep Learning Specialization - DeepLearning.AI",
      "Machine Learning Specialization - Stanford University",
      "Machine Learning in Production - DeepLearning.AI",
      "Machine Learning on Google Cloud Specialization",
      "Applied Machine Learning in Python - University of Michigan",
      "Generative AI with Large Language Models - DeepLearning.AI",
      "Google AI Essentials - Google",
      "AWS Fundamentals Specialization - Amazon Web Services (AWS)",
      "Introduction to Machine Learning on AWS",
      "Azure Fundamentals - Simplilearn",
      "AI/ML Engineer - Stage 1 & 2 - SLIIT",
      "Exploratory Data Analysis for Machine Learning - IBM",
      "Databases and SQL for Data Science with Python - IBM",
      "TensorFlow - Keras Bootcamp - OpenCV University",
      "Introduction to Git and GitHub - Google",
    ];
  
    const certScroll = document.getElementById("certScroll");
    const showMoreCertsBtn = document.getElementById("showMoreCerts");
  
    if (certScroll && showMoreCertsBtn) {
      // Clear any existing content
      certScroll.innerHTML = '';
      
      // Create certification items
      certifications.forEach((cert) => {
        const certDiv = document.createElement("div");
        certDiv.className = "cert-item";
        certDiv.innerHTML = `
            <div class="d-flex align-items-center">
                <i class="fas fa-certificate text-primary me-3"></i>
                <p class="mb-0">${cert}</p>
            </div>
        `;
        certScroll.appendChild(certDiv);
      });
  
      let isExpanded = false;
  
      // Setup show more/less functionality
      showMoreCertsBtn.addEventListener("click", () => {
        isExpanded = !isExpanded;
        certScroll.classList.toggle("expanded");
  
        const certItems = document.querySelectorAll(".cert-item");
        certItems.forEach((item, index) => {
          setTimeout(() => {
            item.classList.toggle("visible", isExpanded);
          }, index * 100);
        });
  
        showMoreCertsBtn.innerHTML = isExpanded
          ? 'Show Less <i class="fas fa-chevron-up ms-2"></i>'
          : 'Show More <i class="fas fa-chevron-down ms-2"></i>';
      });
  
      // Make first two certificates visible
      const visibleCerts = Array.from(
        document.querySelectorAll(".cert-item")
      ).slice(0, 2);
      visibleCerts.forEach((cert, index) => {
        setTimeout(() => {
          cert.classList.add("visible");
        }, index * 200);
      });
    }
  }
  
  // Setup smooth scrolling
  function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    });
  }
  
  // Setup project reveal functionality
  function setupProjectReveal() {
    const showMoreBtn = document.getElementById("showMoreBtn");
    const hiddenProjects = document.querySelectorAll(".hidden-project");
    let projectsVisible = false;
  
    if (showMoreBtn && hiddenProjects.length > 0) {
      showMoreBtn.addEventListener("click", () => {
        hiddenProjects.forEach((project, index) => {
          setTimeout(() => {
            if (!projectsVisible) {
              project.classList.add("show");
            } else {
              project.classList.remove("show");
            }
          }, index * 200);
        });
  
        projectsVisible = !projectsVisible;
        showMoreBtn.innerHTML = projectsVisible
          ? 'Show Less <i class="fas fa-chevron-up ms-2"></i>'
          : 'Show More Projects <i class="fas fa-chevron-down ms-2"></i>';
  
        showMoreBtn.classList.add("animate__animated", "animate__pulse");
        setTimeout(() => {
          showMoreBtn.classList.remove("animate__animated", "animate__pulse");
        }, 1000);
      });
    }
  }