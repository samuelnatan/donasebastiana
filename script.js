/* ==========================================================================
   INTERATIVIDADE - PÁGINAS DE VENDAS (MÉTODO FÍGADO LEVE)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initFaqAccordions();
  initOrderBump();
  initSmoothScroll();
  initRevealOnScroll();
});

/**
 * Revela suavemente os blocos de conteúdo ao rolar a página.
 */
function initRevealOnScroll() {
  const targets = document.querySelectorAll('.reveal');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!targets.length || !('IntersectionObserver' in window) || prefersReducedMotion) {
    return;
  }

  // Só esconde o conteúdo depois de confirmar que o observador está pronto,
  // para que quem não tem JS (ou está lendo antes do carregamento) sempre veja o texto.
  document.body.classList.add('reveal-armed');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

  targets.forEach(el => observer.observe(el));
}

/**
 * Inicializa os acordeões de perguntas frequentes / objeções (Bloco 6)
 */
function initFaqAccordions() {
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const item = question.parentElement;
      const isActive = item.classList.contains('active');
      
      // Fecha todos os acordeões antes de abrir o clicado (opcional, mas bom para focar)
      document.querySelectorAll('.faq-item').forEach(otherItem => {
        otherItem.classList.remove('active');
        const otherAnswer = otherItem.querySelector('.faq-answer');
        if (otherAnswer) {
          otherAnswer.style.maxHeight = null;
        }
      });
      
      // Abre o acordeão clicado se ele não estava ativo
      if (!isActive) {
        item.classList.add('active');
        const answer = item.querySelector('.faq-answer');
        if (answer) {
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      }
    });
  });
}

/**
 * Inicializa a lógica do Order Bump (Bloco 8)
 * Atualiza preços e parâmetros do link de checkout em tempo real.
 */
function initOrderBump() {
  const bumpCheckbox = document.getElementById('order-bump-checkbox');
  const priceInstallments = document.getElementById('price-installments-value');
  const priceCash = document.getElementById('price-cash-value');
  const ctaLinks = document.querySelectorAll('.cta-button');
  
  // Definições de preços
  const PRECOS = {
    normal: {
      aVista: 'R$ 27,00',
      parcelado: '3x de R$ 9,45',
      url: 'https://ggcheckout.com/figado-leve'
    },
    comBump: {
      aVista: 'R$ 36,90',
      parcelado: '3x de R$ 12,90',
      url: 'https://ggcheckout.com/figado-leve?bump=sobremesas-glicose'
    }
  };
  
  if (!bumpCheckbox) return;
  
  bumpCheckbox.addEventListener('change', () => {
    const isSelected = bumpCheckbox.checked;
    
    if (isSelected) {
      // Atualiza os preços com o Order Bump selecionado
      if (priceInstallments) priceInstallments.textContent = PRECOS.comBump.parcelado;
      if (priceCash) priceCash.textContent = PRECOS.comBump.aVista;
      
      // Atualiza o link do botão de CTA
      ctaLinks.forEach(link => {
        link.href = PRECOS.comBump.url;
        const mainText = link.querySelector('.cta-main-text');
        if (mainText) {
          // Atualiza texto se necessário
          if (link.dataset.ctaType === 'figado') {
            mainText.textContent = 'Quero o guia completo + sobremesas';
          } else if (link.dataset.ctaType === 'insulina') {
            mainText.textContent = 'Quero o guia completo + sobremesas';
          } else {
            mainText.textContent = 'Quero o guia completo + sobremesas';
          }
        }
      });

      // Animação visual sutil no card do Order Bump
      const bumpBox = document.querySelector('.order-bump-box');
      if (bumpBox) {
        bumpBox.style.borderColor = '#2F5233';
        bumpBox.style.backgroundColor = '#E9F0E3';
      }
    } else {
      // Restaura os preços normais
      if (priceInstallments) priceInstallments.textContent = PRECOS.normal.parcelado;
      if (priceCash) priceCash.textContent = PRECOS.normal.aVista;
      
      // Restaura o link do botão de CTA
      ctaLinks.forEach(link => {
        link.href = PRECOS.normal.url;
        const mainText = link.querySelector('.cta-main-text');
        if (mainText) {
          if (link.dataset.ctaType === 'figado') {
            mainText.textContent = 'Quero desinchar meu fígado agora';
          } else if (link.dataset.ctaType === 'insulina') {
            mainText.textContent = 'Quero acabar com a insulina alta';
          } else {
            mainText.textContent = 'Quero controlar minha glicose agora';
          }
        }
      });
      
      // Restaura estilo original do card do Order Bump
      const bumpBox = document.querySelector('.order-bump-box');
      if (bumpBox) {
        bumpBox.style.borderColor = 'var(--color-terracota)';
        bumpBox.style.backgroundColor = 'var(--bg-accent-terracota)';
      }
    }
  });
}

/**
 * Gerencia a rolagem suave para âncoras internas
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}
