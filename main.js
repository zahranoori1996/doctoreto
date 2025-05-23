document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuOpenBtn = document.getElementById('menu-open');
    const menuCloseBtn = document.getElementById('menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuOpenBtn && menuCloseBtn && mobileMenu) {
      menuOpenBtn.addEventListener('click', function() {
        mobileMenu.classList.add('active');
        menuOpenBtn.style.display = 'none';
        menuCloseBtn.style.display = 'block';
      });
      
      menuCloseBtn.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        menuOpenBtn.style.display = 'block';
        menuCloseBtn.style.display = 'none';
      });
    }
    
    // Search tabs functionality
    const searchTabs = document.querySelectorAll('.tab');
    const searchField = document.getElementById('search-field');
    
    if (searchTabs.length && searchField) {
      searchTabs.forEach(tab => {
        tab.addEventListener('click', function() {
          // Remove active class from all tabs
          searchTabs.forEach(tab => tab.classList.remove('active'));
          
          // Add active class to clicked tab
          this.classList.add('active');
          
          // Update placeholder based on the tab
          if (this.dataset.tab === 'doctor') {
            searchField.placeholder = 'نام پزشک یا تخصص...';
          } else if (this.dataset.tab === 'hospital') {
            searchField.placeholder = 'نام بیمارستان یا کلینیک...';
          }
        });
      });
    }
    
    // Add scroll effect to header
    const header = document.querySelector('.header');
    
    if (header) {
      window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          header.style.boxShadow = 'var(--shadow-md)';
        } else {
          header.style.boxShadow = 'var(--shadow-sm)';
        }
      });
    }
    
    // Add hover effect to specialty cards
    const specialtyCards = document.querySelectorAll('.specialty-card');
    
    if (specialtyCards.length) {
      specialtyCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
          this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
          this.style.transform = 'translateY(0)';
        });
      });
    }
    
    // Add simple form validation
    const searchBtn = document.querySelector('.search-btn');
    
    if (searchBtn && searchField) {
      searchBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (searchField.value.trim() === '') {
          alert('لطفاً عبارت جستجو را وارد کنید');
          return;
        }
        
        // Here would be the actual search functionality
        alert('در حال جستجو برای: ' + searchField.value);
      });
    }
  });