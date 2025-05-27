document.addEventListener('DOMContentLoaded', function() {
  // Navegação entre telas
  const navItems = document.querySelectorAll('.nav-item');
  const screens = document.querySelectorAll('.screen');
  
  navItems.forEach(item => {
    item.addEventListener('click', function() {
      const targetScreen = this.getAttribute('data-screen');
      
      // Atualizar navegação
      navItems.forEach(nav => nav.classList.remove('active'));
      this.classList.add('active');
      
      // Mostrar tela
      screens.forEach(screen => screen.classList.remove('active'));
      document.getElementById(targetScreen).classList.add('active');
    });
  });
  
  // Animações de hover para cards
  const cards = document.querySelectorAll('.client-card, .appointment-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-4px)';
      this.style.boxShadow = '0 8px 16px rgba(0,0,0,0.15)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
    });
  });
  
  // Simulação de seleção de data no calendário
  const calendarDays = document.querySelectorAll('.calendar-day:not(.disabled)');
  calendarDays.forEach(day => {
    day.addEventListener('click', function() {
      calendarDays.forEach(d => d.classList.remove('active'));
      this.classList.add('active');
    });
  });
  
  // Simulação de seleção de tabs
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      tabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
    });
  });
  
  // Simulação de dropdown de busca
  const searchInputs = document.querySelectorAll('input[type="text"][placeholder*="Buscar"]');
  const dropdownResults = document.querySelectorAll('.dropdown-results');
  
  searchInputs.forEach((input, index) => {
    input.addEventListener('focus', function() {
      if (dropdownResults[index]) {
        dropdownResults[index].style.display = 'block';
      }
    });
    
    input.addEventListener('blur', function() {
      setTimeout(() => {
        if (dropdownResults[index]) {
          dropdownResults[index].style.display = 'none';
        }
      }, 200);
    });
  });
  
  // Simulação de chips
  const chips = document.querySelectorAll('.chip');
  chips.forEach(chip => {
    const closeIcon = chip.querySelector('i');
    if (closeIcon) {
      closeIcon.addEventListener('click', function(e) {
        e.stopPropagation();
        chip.style.display = 'none';
      });
    }
  });
  
  // Simulação de variáveis de mensagem
  const variables = document.querySelectorAll('.variable');
  const messageTextarea = document.getElementById('mensagem');
  
  if (variables.length > 0 && messageTextarea) {
    variables.forEach(variable => {
      variable.addEventListener('click', function() {
        const variableText = this.textContent;
        const cursorPos = messageTextarea.selectionStart;
        const textBefore = messageTextarea.value.substring(0, cursorPos);
        const textAfter = messageTextarea.value.substring(cursorPos);
        
        messageTextarea.value = textBefore + variableText + textAfter;
        messageTextarea.focus();
        messageTextarea.selectionStart = cursorPos + variableText.length;
        messageTextarea.selectionEnd = cursorPos + variableText.length;
      });
    });
  }
  
  // Efeitos de hover para botões de ação
  const actionButtons = document.querySelectorAll('.action-btn, .action-icon');
  actionButtons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.1)';
    });
    
    button.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });
});
