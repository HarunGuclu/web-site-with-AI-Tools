// Add some interactivity to the 3D scene
document.addEventListener('mousemove', (e) => {
    const scene = document.querySelector('.scene');
    const orb = document.querySelector('.orb');
    
    // Calculate mouse position relative to the center of the screen
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;
    
    // Subtle movement of the orb based on mouse position
    if (orb) {
        orb.style.transform = `translate(${mouseX * 20}px, ${mouseY * 20}px)`;
    }
    
    // Subtle rotation of the cubes based on mouse position
    const cubes = document.querySelectorAll('.cube');
    cubes.forEach((cube, index) => {
        const factor = (index + 1) * 5;
        cube.style.transform = `rotateX(${45 + mouseY * factor}deg) rotateY(${45 + mouseX * factor}deg)`;
    });
});