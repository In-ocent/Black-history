 // Theme Toggle
 const body = document.body;
 const toggleBtn = document.querySelector('.theme-toggle');

 function setTheme(mode) {
   body.className = mode;
   localStorage.setItem('theme', mode);
   toggleBtn.textContent = mode === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode';
 }

 function toggleTheme() {
   const newMode = body.classList.contains('light') ? 'dark' : 'light';
   setTheme(newMode);
 }

 // On page load
 window.addEventListener('DOMContentLoaded', () => {
   const savedTheme = localStorage.getItem('theme') || 'dark';
   setTheme(savedTheme);
 });

 // Fade-in effect
 const fadeInElements = document.querySelectorAll('.fade-in');
 const observer = new IntersectionObserver((entries) => {
   entries.forEach(entry => {
     if(entry.isIntersecting){
       entry.target.classList.add('visible');
     }
   });
 });
 fadeInElements.forEach(el => observer.observe(el));