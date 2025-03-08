document.addEventListener("DOMContentLoaded", () => {
    // Scroll indicator functionality
    const scrollIndicator = document.querySelector(".arrow-down")
    const projectsSection = document.getElementById("projects")
  
    scrollIndicator.addEventListener("click", () => {
      // Scroll to projects section
      projectsSection.scrollIntoView({ behavior: "smooth" })
    })
  
    // Optional: Add parallax effect to the wave
    window.addEventListener("mousemove", (e) => {
      const wave = document.querySelector(".wave")
      const moveX = (e.clientX - window.innerWidth / 2) * 0.01
      const moveY = (e.clientY - window.innerHeight / 2) * 0.01
  
      if (wave) {
        wave.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.5)`
      }
    })
  
    // Add scroll animation for project cards
    const projectCards = document.querySelectorAll(".project-card")
  
    function checkScroll() {
      projectCards.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top
        const windowHeight = window.innerHeight
  
        if (cardTop < windowHeight * 0.8) {
          setTimeout(() => {
            card.style.opacity = "1"
            card.style.transform = "translateY(0)"
          }, index * 100)
        }
      })
    }
  
    // Initial style for project cards
    projectCards.forEach((card) => {
      card.style.opacity = "0"
      card.style.transform = "translateY(50px)"
      card.style.transition = "opacity 0.5s ease, transform 0.5s ease"
    })
  
    // Check on scroll
    window.addEventListener("scroll", checkScroll)
  
    // Check on load
    checkScroll()
  })
  
  