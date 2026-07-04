/* ==========================================================================
   GERADOR DE PÁGINAS EXTRAS — Método Fígado Leve
   100% client-side: roda só abrindo o arquivo no navegador, sem servidor,
   sem build, sem deploy. O botão "Baixar página pronta" gera um .html
   estático que já nasce pronto pra Vercel (é só soltar na pasta build/).
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. CATÁLOGO DE IMAGENS (as 12 fotos que já existem em /images)
   -------------------------------------------------------------------------- */
const IMAGES = [
  { file: '_figado_hero_sebastiana_.jpg', label: 'Fígado · Hero — Dona Sebastiana com o chá' },
  { file: '_figado_isca_cha_.jpg', label: 'Fígado · Isca — xícara de chá' },
  { file: '_glicose_hero_sono_.jpg', label: 'Glicose · Hero — sono pós-almoço / lasanha' },
  { file: '_glicose_isca_elixir_.jpg', label: 'Glicose · Isca — elixir de beterraba' },
  { file: '_insulina_hero_pescoco_.jpg', label: 'Insulina · Hero — mancha no pescoço' },
  { file: '_insulina_isca_shot_.jpg', label: 'Insulina · Isca — shot de vinagre' },
  { file: '_mecanismo_grafico_glicose_.jpg', label: 'Mecanismo · Gráfico de glicose' },
  { file: '_mecanismo_sequenciamento_prato_.jpg', label: 'Mecanismo · Prato sequenciado' },
  { file: '_transicao_sintomas_remedios_.jpg', label: 'Transição · Gaveta de remédios' },
  { file: '_transicao_vergonha_pele_.jpg', label: 'Transição · Espelho' },
  { file: '_depoimento_antes_depois_mulher_.jpg', label: 'Depoimento · Antes/depois' },
  { file: '_depoimento_sebastiana_amigas_.jpg', label: 'Depoimento · Dona Sebastiana e amigas' },
  { file: '_mockup_kit_completo_.jpg', label: 'Mockup · Kit completo' },
  { file: '_mockup_sobremesas_glicose_.jpg', label: 'Mockup · Sobremesas' },
];

/* --------------------------------------------------------------------------
   2. RESTO DA PÁGINA POR ÂNGULO (Blocos 3–8, herdados como estão)
   Se as páginas reais mudarem, re-sincronize estas strings a partir delas.
   -------------------------------------------------------------------------- */
const REST_FIGADO = `    <!-- BLOCO 3: TRANSIÇÃO -->
    <section id="bloco-transicao" class="reveal">
      <h2 class="text-terracota">Mas preste muita atenção aqui, minha amiga...</h2>
      <p>O chá da Dona Sebastiana é maravilhoso e ajuda muito nas primeiras horas. Mas preciso ser sincera: <strong>só o chá sozinho não faz milagre.</strong></p>

      <p>Se você toma o chá de manhã, mas continua cometendo os erros comuns ao longo do dia, o fígado vai continuar sofrendo.</p>

      <div class="photo-frame">
        <img src="images/_transicao_sintomas_remedios_.jpg" alt="Gaveta de remédios desorganizada, cheia de caixas de medicamentos para azia, fígado e diabetes, em tom cinzento e pesado." loading="lazy">
      </div>

      <div class="bullet-item">
        <div class="bullet-icon">🤢</div>
        <div class="bullet-content">Sente aquela <strong>barriga estufada</strong> e pesada logo depois de comer?</div>
      </div>
      <div class="bullet-item">
        <div class="bullet-icon">🥱</div>
        <div class="bullet-content">Aquela <strong>moleza e sono pesado</strong> que te derrubam depois do almoço?</div>
      </div>
      <div class="bullet-item">
        <div class="bullet-icon">🩺</div>
        <div class="bullet-content">Ou o médico já disse que você tem <strong>gordura no fígado</strong> e só falou <em>"você precisa emagrecer"</em>, sem te dar um caminho claro e sem te fazer passar fome?</div>
      </div>

      <p style="margin-top: 1.5rem;">Tudo isso acontece porque o fígado está sobrecarregado — trabalhando em dobro para limpar o excesso de glicose que entra do jeito errado no seu corpo.</p>
    </section>

    <!-- BLOCO 4: MECANISMO (A Sincronia Digestiva) -->
    <section id="bloco-mecanismo" class="bg-light-green reveal" style="border-radius: 24px; padding: 2.25rem 1.5rem; margin: 0.5rem 0 2rem;">
      <h2 class="text-green" style="margin-top: 0;">O segredo não é O QUE você come, mas a ORDEM em que você come</h2>

      <p>Depois dos 50 anos, o metabolismo não é mais o mesmo de quando tínhamos 20. O corpo processa o açúcar mais devagar.</p>

      <p>Comeu pão, arroz ou um doce logo no começo da refeição? O estômago digere rápido demais. O açúcar entra de uma vez na corrente sanguínea — é o chamado <strong>Pico de Glicose</strong>.</p>

      <p>Para tirar esse açúcar do sangue, o corpo produz muita insulina, e o fígado é obrigado a transformar o excesso em <strong>gordura</strong>. É assim que surge a gordura no fígado e aquela barriguinha persistente.</p>

      <div class="photo-frame">
        <img src="images/_mecanismo_sequenciamento_prato_.jpg" alt="Prato dividido em três partes numeradas: 1) salada com tomate-cereja, 2) frango grelhado, 3) arroz com feijão." loading="lazy">
      </div>

      <p>Mas quando você usa a <strong>Sincronia Digestiva</strong>, tudo muda:</p>

      <div class="bullet-item">
        <div class="bullet-icon">1️⃣</div>
        <div class="bullet-content"><strong>🥗 Primeiro as fibras:</strong> criam uma "rede de proteção" no estômago e intestino.</div>
      </div>
      <div class="bullet-item">
        <div class="bullet-icon">2️⃣</div>
        <div class="bullet-content"><strong>🍗 Depois as proteínas:</strong> atrasam a digestão, fazendo a comida descer bem mais devagar.</div>
      </div>
      <div class="bullet-item">
        <div class="bullet-icon">3️⃣</div>
        <div class="bullet-content"><strong>🍚 Por último os carboidratos:</strong> o açúcar deles entra devagarzinho e sob controle no sangue.</div>
      </div>

      <p style="margin-top: 1.5rem; margin-bottom: 0;"><strong>Resultado:</strong> você come o arroz, o feijão e até o docinho, mas a glicose não sobe de uma vez. O fígado fica em paz e começa a se desinflamar naturalmente.</p>
    </section>

    <!-- BLOCO 5: PROVAS E DEPOIMENTOS -->
    <section id="bloco-provas" class="reveal">
      <h2>Veja o que aconteceu com quem colocou a Sincronia Digestiva em prática</h2>

      <div class="testimonial-card">
        <div class="testimonial-stars">⭐⭐⭐⭐⭐</div>
        <p class="testimonial-quote">Eu tinha gordura no fígado grau 2 e sentia um cansaço que parecia que eu não tinha dormido nada. Comecei a fazer o sequenciamento dos alimentos e a tomar os goles de manhã. Duas semanas depois, a barriga estufada sumiu e meus exames de glicose melhoraram muito!</p>
        <div class="testimonial-author">— Maria das Graças, 63 anos, Belo Horizonte - MG</div>
      </div>

      <div class="testimonial-card">
        <div class="testimonial-stars">⭐⭐⭐⭐⭐</div>
        <p class="testimonial-quote">O que eu mais gostei é que não precisei cortar meu arroz e meu pãozinho. Só mudei o jeito de comer. A sensação de empanturrada depois do almoço acabou.</p>
        <div class="testimonial-author">— Tereza Souza, 67 anos, Londrina - PR</div>
      </div>

      <div class="photo-frame">
        <img src="images/_depoimento_antes_depois_mulher_.jpg" alt="Antes: senhora cansada e com a barriga inchada, sentada em uma cadeira. Depois: a mesma senhora sorridente, leve, caminhando ao ar livre." loading="lazy">
      </div>

      <h3 style="text-align: left; margin-top: 1.5rem; color: var(--ink); font-style: normal; font-weight: 700;">Por que funciona tão rápido?</h3>
      <p>O fígado é um órgão maravilhoso, com uma capacidade incrível de se regenerar. A partir do momento em que você para de jogar "combustível pesado" na ordem errada, ele começa a se limpar e a desinchar em poucos dias.</p>
    </section>

    <!-- BLOCO 6: QUEBRA DE OBJEÇÕES -->
    <section id="bloco-faq" class="reveal">
      <h2>Talvez você esteja pensando...</h2>

      <div class="photo-frame">
        <img src="images/_depoimento_sebastiana_amigas_.jpg" alt="Dona Sebastiana e duas amigas rindo à mesa em um jardim ensolarado, tomando chá e comendo biscoitos." loading="lazy">
      </div>
      <p class="photo-caption">Dona Sebastiana e as amigas, num fim de tarde qualquer.</p>

      <div class="faq-container">

        <div class="faq-item">
          <button class="faq-question">"Dona Sebastiana, eu já cortei pão, já cortei arroz e minha glicose não baixou de jeito nenhum..."</button>
          <div class="faq-answer">
            <p>Pois é, minha filha! Cortar tudo só te deixa triste, estressada e com fome. O problema não é o alimento em si, mas a ordem. Sem a Sincronia Digestiva, mesmo uma quantidade pequena de carboidrato vai direto para o fígado em forma de gordura.</p>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question">"Isso deve ser muito difícil de seguir no dia a dia..."</button>
          <div class="faq-answer">
            <p>De forma alguma! Você vai usar os alimentos que já compra na feira e no mercado perto de casa. Nada de ingredientes caros com nomes esquisitos — é comida simples de verdade.</p>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question">"Eu vou ter que passar fome ou comer folha o dia todo?"</button>
          <div class="faq-answer">
            <p>Deus me livre! Comer bem é uma das maiores alegrias da vida. No método, você vai comer pratos saborosos, carnes gostosas, sopas nutritivas e até sobremesas preparadas do jeito certo.</p>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question">"Isso é muito caro?"</button>
          <div class="faq-answer">
            <p>O acesso ao guia custa menos do que uma caixinha de remédio para o fígado ou para diabetes. E o melhor: você vai economizar no mercado, comprando comida de verdade para toda a família.</p>
          </div>
        </div>

      </div>
    </section>

    <!-- BLOCO 7: OFERTA COMPLETA -->
    <section id="bloco-oferta" class="reveal">
      <h2 class="text-center">O Método Fígado Leve</h2>
      <p class="text-center" style="font-size: 1.2rem;">Para ajudar você a desinchar o fígado, recuperar a energia e controlar a glicose sem sofrimento, organizamos todo o passo a passo neste método:</p>

      <div class="photo-frame">
        <img src="images/_mockup_kit_completo_.jpg" alt="Mockup do Guia Fígado Leve em um tablet, cercado pelos quatro bônus: Cardápio Desincha, Elixires da Roça, Tabela de Sequenciamento e Diário do Fígado Leve." loading="lazy">
      </div>

      <div style="background-color: var(--cream-deep); padding: 1.5rem; border-radius: 16px; margin: 1.5rem 0; border: 1px solid var(--color-border);">
        <h3 style="text-align: left; color: var(--oliva); margin-bottom: 0.5rem; font-style: normal; font-weight: 800;">📗 O Guia Completo Fígado Leve</h3>
        <p style="font-size: 1.15rem; margin-bottom: 0.5rem;"><em>(Baseado na Sincronia Digestiva)</em></p>
        <p style="font-size: 1.15rem; margin-bottom: 0; color: var(--text-muted);">Um manual prático, com letras grandes e leitura bem fácil, feito especialmente para quem já passou dos 50 anos e quer cuidar da saúde de forma simples.</p>
      </div>

      <h3 style="text-align: left; margin-top: 2rem; color: var(--ink); font-style: normal; font-weight: 700;">E se você aproveitar hoje, recebe estes 4 presentes de graça:</h3>

      <div class="bullet-item">
        <div class="bullet-icon">🎁</div>
        <div class="bullet-content">
          <strong>Cardápio Desincha 14 Dias</strong>
          <br><span style="font-size: 1.05rem; color: var(--text-muted);">Duas semanas de café da manhã, almoço e jantar fáceis e gostosos, para acelerar a limpeza do fígado.</span>
        </div>
      </div>

      <div class="bullet-item">
        <div class="bullet-icon">🎁</div>
        <div class="bullet-content">
          <strong>Os Elixires da Roça da Dona Sebastiana</strong>
          <br><span style="font-size: 1.05rem; color: var(--text-muted);">Mais 7 preparados, chás e shots caseiros que ajudam a baixar o açúcar e tirar o inchaço da barriga.</span>
        </div>
      </div>

      <div class="bullet-item">
        <div class="bullet-icon">🎁</div>
        <div class="bullet-content">
          <strong>Tabela de Sequenciamento Prático</strong>
          <br><span style="font-size: 1.05rem; color: var(--text-muted);">Uma tabelinha para colar na porta da geladeira e saber o que comer primeiro nas refeições.</span>
        </div>
      </div>

      <div class="bullet-item">
        <div class="bullet-icon">🎁</div>
        <div class="bullet-content">
          <strong>Diário do Fígado Leve</strong>
          <br><span style="font-size: 1.05rem; color: var(--text-muted);">Um guia de 14 dias para acompanhar os seus sintomas sumindo, dia após dia.</span>
        </div>
      </div>

      <div class="guarantee-box">
        <div class="guarantee-badge">🛡️</div>
        <div class="guarantee-text">
          <h4>Garantia incondicional de 7 dias</h4>
          <p>Confio tanto no que a roça me ensinou e na ciência da Sincronia Digestiva que o risco é todo meu. Entre hoje, leia o material, teste as receitas. Se não gostar, devolvo todo o seu dinheiro.</p>
        </div>
      </div>
    </section>

    <!-- BLOCO 8: CHECKOUT + CTA -->
    <section id="bloco-checkout" class="reveal">



      <div class="price-box">
        <div class="price-original">De R$ 197,00 por apenas:</div>
        <div class="price-installments" id="price-installments-value">3x de R$ 9,45</div>
        <div class="price-cash">ou <span id="price-cash-value">R$ 27,00</span> à vista no Pix ou Cartão</div>
      </div>

      <div class="cta-container">
        <a href="https://ggcheckout.com/figado-leve" class="cta-button" id="cta-principal-btn" data-cta-type="figado">
          <span class="cta-main-text">Quero desinchar meu fígado agora</span>
        </a>
        <div class="cta-subtitle">
          <span>📱 Acesso imediato no celular</span> • <span>✉️ Recebimento por e-mail e WhatsApp</span>
        </div>
      </div>

      <div class="security-logos">
        <div class="security-item">
          <span class="security-icon">🔒</span>
          <span>Dados 100% criptografados</span>
        </div>
        <div class="security-item">
          <span class="security-icon">🛡️</span>
          <span>Compra segura e garantida</span>
        </div>
        <div class="security-item">
          <span class="security-icon">⚡</span>
          <span>Acesso imediato</span>
        </div>
      </div>
    </section>`;

const REST_GLICOSE = `    <!-- BLOCO 3: TRANSIÇÃO -->
    <section id="bloco-transicao" class="reveal">
      <h2 class="text-terracota">Mas atenção, minha amiga... a ordem ajuda, e muito. Só que sozinha, ela não conta a história toda.</h2>
      <p>Esse sono incontrolável depois de comer não é normal. Logo após um prato de arroz e feijão, ou um pedaço de pão, o seu açúcar sobe lá no alto — é o <strong>Pico de Glicose</strong>.</p>

      <p>Para te proteger, o corpo joga uma onda de insulina para baixar esse açúcar correndo. É aí que a glicose despenca rápido demais — o <strong>Vale de Glicose</strong>. E é nesse vale que mora o cansaço.</p>

      <div class="photo-frame">
        <img src="images/_mecanismo_grafico_glicose_.jpg" alt="Gráfico comparando duas curvas de glicose: uma vermelha, com pico alto ao comer carboidrato primeiro, e outra verde, estável, ao comer salada primeiro." loading="lazy">
      </div>

      <p>Essa <strong>queda livre</strong> é o que te dá:</p>

      <div class="bullet-item">
        <div class="bullet-icon">💤</div>
        <div class="bullet-content">Aquela <strong>fraqueza</strong> e sono pesado no meio da tarde, que te obriga a tirar uma soneca.</div>
      </div>
      <div class="bullet-item">
        <div class="bullet-icon">🍫</div>
        <div class="bullet-content">Uma <strong>vontade incontrolável de comer doce</strong> ou beliscar algo poucas horas depois do almoço.</div>
      </div>
      <div class="bullet-item">
        <div class="bullet-icon">😠</div>
        <div class="bullet-content">Aquela <strong>irritação</strong> e falta de energia mental que parecem não ter fim.</div>
      </div>

      <p style="margin-top: 1.5rem;">Viver nessa montanha-russa destrói a sua saúde, engorda a barriga e vai desgastando o seu pâncreas até ele não aguentar mais.</p>
    </section>

    <!-- BLOCO 4: MECANISMO (A Sincronia Digestiva) -->
    <section id="bloco-mecanismo" class="bg-light-green reveal" style="border-radius: 24px; padding: 2.25rem 1.5rem; margin: 0.5rem 0 2rem;">
      <h2 class="text-green" style="margin-top: 0;">O segredo não é cortar o que você ama — é comer na ORDEM certa</h2>

      <p>A maioria das pessoas acha que, para controlar a glicose, precisa cortar o arroz, o pão, as massas e nunca mais comer um doce. Isso é sofrimento desnecessário.</p>

      <p>A ciência já provou que o estômago digere os nutrientes em tempos diferentes. Quando você usa a <strong>Sincronia Digestiva</strong>, você organiza o prato:</p>

      <div class="photo-frame">
        <img src="images/_mecanismo_sequenciamento_prato_.jpg" alt="Prato dividido em três partes numeradas: 1) salada com tomate-cereja, 2) frango grelhado, 3) arroz com feijão." loading="lazy">
      </div>

      <div class="bullet-item">
        <div class="bullet-icon">1️⃣</div>
        <div class="bullet-content"><strong>🥗 Fibras primeiro:</strong> criam uma espécie de "peneira" no intestino.</div>
      </div>
      <div class="bullet-item">
        <div class="bullet-icon">2️⃣</div>
        <div class="bullet-content"><strong>🍗 Proteínas e gorduras depois:</strong> fazem o estômago esvaziar mais devagar.</div>
      </div>
      <div class="bullet-item">
        <div class="bullet-icon">3️⃣</div>
        <div class="bullet-content"><strong>🍚 Carboidratos por último:</strong> chegam com a peneira já fechada. O açúcar não entra correndo no sangue — entra aos pouquinhos, em gotas.</div>
      </div>

      <p style="margin-top: 1.5rem; margin-bottom: 0;"><strong>Sem picos de glicose = sem moleza depois do almoço = sem acúmulo de gordura na barriga.</strong></p>
    </section>

    <!-- BLOCO 5: PROVAS E DEPOIMENTOS -->
    <section id="bloco-provas" class="reveal">
      <h2>Veja a alegria de quem descobriu a Sincronia Digestiva</h2>

      <div class="testimonial-card">
        <div class="testimonial-stars">⭐⭐⭐⭐⭐</div>
        <p class="testimonial-quote">Eu não conseguia ficar acordada depois do almoço, parecia que meu corpo pesava uma tonelada. Comecei a comer a salada primeiro e tomei o elixir de beterraba de manhã. No terceiro dia, já não sentia mais aquele sono. Minha glicose, que dava 160 depois de comer, agora não passa de 110!</p>
        <div class="testimonial-author">— Sebastiana Pereira, 64 anos, Ribeirão Preto - SP</div>
      </div>

      <div class="testimonial-card">
        <div class="testimonial-stars">⭐⭐⭐⭐⭐</div>
        <p class="testimonial-quote">Sempre tive medo de comer um pedaço de bolo ou arroz com feijão. O método da Dona Sebastiana me ensinou a comer na ordem certa e usar o truque do vinagre antes. Medi na ponta do dedo duas horas depois e deu 105! Estou muito feliz em poder comer sem medo de novo.</p>
        <div class="testimonial-author">— Margarida Fonseca, 68 anos, Pelotas - RS</div>
      </div>

      <div class="photo-frame">
        <img src="images/_depoimento_antes_depois_mulher_.jpg" alt="Antes: senhora cansada e abatida sentada em uma cadeira. Depois: a mesma senhora sorridente e cheia de energia, caminhando ao ar livre." loading="lazy">
      </div>

      <h3 style="text-align: left; margin-top: 1.5rem; color: var(--ink); font-style: normal; font-weight: 700;">Por que funciona tão rápido?</h3>
      <p>O corpo tem uma capacidade incrível de se regular. A partir do momento em que ele para de receber "combustível" na ordem errada, a energia volta a ficar estável em poucos dias.</p>
    </section>

    <!-- BLOCO 6: QUEBRA DE OBJEÇÕES -->
    <section id="bloco-faq" class="reveal">
      <h2>Talvez você esteja pensando...</h2>

      <div class="photo-frame">
        <img src="images/_depoimento_sebastiana_amigas_.jpg" alt="Dona Sebastiana e duas amigas rindo à mesa em um jardim ensolarado, tomando chá e comendo biscoitos." loading="lazy">
      </div>
      <p class="photo-caption">Dona Sebastiana e as amigas, num fim de tarde qualquer.</p>

      <div class="faq-container">

        <div class="faq-item">
          <button class="faq-question">"Vou ter que parar de comer meu arroz e feijão diários?"</button>
          <div class="faq-answer">
            <p>Claro que não, minha filha! O arroz e o feijão são sagrados na nossa mesa. Você só vai aprender a comer eles no momento certo da refeição, para não dar pico de glicose.</p>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question">"Eu tenho mais de 60 anos, será que meu metabolismo ainda responde?"</button>
          <div class="faq-answer">
            <p>Responde sim, e muito bem! É justamente nesta fase da vida que a Sincronia Digestiva faz mais diferença, porque poupa o pâncreas que já trabalhou tanto a vida toda.</p>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question">"É difícil de fazer? Minha rotina é corrida..."</button>
          <div class="faq-answer">
            <p>É a coisa mais simples do mundo. Você não vai cozinhar nada diferente — só vai colocar os alimentos na ordem correta na hora de comer. Só isso.</p>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question">"Vou gastar muito dinheiro com alimentos especiais ou diets?"</button>
          <div class="faq-answer">
            <p>Pelo contrário! Alimentos "diet" industriais são cheios de química e caros. Aqui usamos comida simples de feira: salada, legumes, carnes normais e temperos caseiros.</p>
          </div>
        </div>

      </div>
    </section>

    <!-- BLOCO 7: OFERTA COMPLETA -->
    <section id="bloco-oferta" class="reveal">
      <h2 class="text-center">O Método Fígado Leve</h2>
      <p class="text-center" style="font-size: 1.2rem;">Para você dominar a Sincronia Digestiva, acabar com a moleza e controlar os picos de açúcar de uma vez por todas, organizamos tudo neste método:</p>

      <div class="photo-frame">
        <img src="images/_mockup_kit_completo_.jpg" alt="Mockup do Guia Fígado Leve em um tablet, cercado pelos quatro bônus: Cardápio Desincha, Elixires da Roça, Tabela de Sequenciamento e Diário do Fígado Leve." loading="lazy">
      </div>

      <div style="background-color: var(--cream-deep); padding: 1.5rem; border-radius: 16px; margin: 1.5rem 0; border: 1px solid var(--color-border);">
        <h3 style="text-align: left; color: var(--oliva); margin-bottom: 0.5rem; font-style: normal; font-weight: 800;">📗 O Guia Completo Fígado Leve</h3>
        <p style="font-size: 1.15rem; margin-bottom: 0.5rem;"><em>(Baseado na Sincronia Digestiva)</em></p>
        <p style="font-size: 1.15rem; margin-bottom: 0; color: var(--text-muted);">Um livro digital ricamente ilustrado, escrito com termos simples e letras grandes para facilitar a leitura de quem tem mais de 50 anos.</p>
      </div>

      <h3 style="text-align: left; margin-top: 2rem; color: var(--ink); font-style: normal; font-weight: 700;">Aproveitando hoje, você ganha de presente estes 4 bônus:</h3>

      <div class="bullet-item">
        <div class="bullet-icon">🎁</div>
        <div class="bullet-content">
          <strong>Cardápio Desincha 14 Dias</strong>
          <br><span style="font-size: 1.05rem; color: var(--text-muted);">Passo a passo para desinflamar o corpo e estabilizar a glicose em duas semanas.</span>
        </div>
      </div>

      <div class="bullet-item">
        <div class="bullet-icon">🎁</div>
        <div class="bullet-content">
          <strong>Os Elixires da Roça da Dona Sebastiana</strong>
          <br><span style="font-size: 1.05rem; color: var(--text-muted);">A receita do elixir e de mais 7 preparados caseiros potentes para controlar a glicose.</span>
        </div>
      </div>

      <div class="bullet-item">
        <div class="bullet-icon">🎁</div>
        <div class="bullet-content">
          <strong>Tabela de Sequenciamento Prático</strong>
          <br><span style="font-size: 1.05rem; color: var(--text-muted);">Um resumo visual em PDF para consultar rapidamente na hora de comer.</span>
        </div>
      </div>

      <div class="bullet-item">
        <div class="bullet-icon">🎁</div>
        <div class="bullet-content">
          <strong>Diário do Fígado Leve</strong>
          <br><span style="font-size: 1.05rem; color: var(--text-muted);">Para anotar sua energia aumentando e sua glicose baixando, dia após dia.</span>
        </div>
      </div>

      <div class="guarantee-box">
        <div class="guarantee-badge">🛡️</div>
        <div class="guarantee-text">
          <h4>Garantia incondicional de 7 dias</h4>
          <p>O risco é todo meu. Teste a ordem de comer e as receitas do guia por 7 dias inteiros. Se não sentir uma melhora nítida na sua disposição, me manda um e-mail — devolvo todo o seu dinheiro na mesma hora, sem burocracia.</p>
        </div>
      </div>
    </section>

    <!-- BLOCO 8: CHECKOUT + CTA -->
    <section id="bloco-checkout" class="reveal">



      <div class="price-box">
        <div class="price-original">De R$ 197,00 por apenas:</div>
        <div class="price-installments" id="price-installments-value">3x de R$ 9,45</div>
        <div class="price-cash">ou <span id="price-cash-value">R$ 27,00</span> à vista no Pix ou Cartão</div>
      </div>

      <div class="cta-container">
        <a href="https://ggcheckout.com/figado-leve" class="cta-button" id="cta-principal-btn" data-cta-type="glicose">
          <span class="cta-main-text">Quero controlar minha glicose agora</span>
        </a>
        <div class="cta-subtitle">
          <span>📱 Acesso imediato no celular</span> • <span>🛡️ Transação segura e criptografada</span>
        </div>
      </div>

      <div class="security-logos">
        <div class="security-item">
          <span class="security-icon">🔒</span>
          <span>Dados 100% criptografados</span>
        </div>
        <div class="security-item">
          <span class="security-icon">🛡️</span>
          <span>Compra segura e garantida</span>
        </div>
        <div class="security-item">
          <span class="security-icon">⚡</span>
          <span>Acesso imediato</span>
        </div>
      </div>
    </section>`;

const REST_PELE = `    <!-- BLOCO 3: TRANSIÇÃO -->
    <section id="bloco-transicao" class="reveal">
      <h2 class="text-terracota">Mas atenção, minha filha... o shot ajuda, mas sozinho não basta.</h2>
      <p>Muitas mulheres sofrem em silêncio com essas manchas escuras — que os médicos chamam de <em>Acantose Nigricante</em>. Gastam fortunas com cremes clareadores, esfregam a pele até machucar no banho e sentem vergonha de usar um colar ou prender o cabelo.</p>

      <div class="photo-frame">
        <img src="images/_transicao_vergonha_pele_.jpg" alt="Senhora de 60 anos se olhando de perfil no espelho, tocando o pescoço com um olhar preocupado, tentando ajustar a gola da blusa." loading="lazy">
      </div>

      <div class="bullet-item">
        <div class="bullet-icon">👗</div>
        <div class="bullet-content">Sente vergonha de usar roupas mais abertas, prender o cabelo ou usar colares por causa das manchas?</div>
      </div>
      <div class="bullet-item">
        <div class="bullet-icon">🤰</div>
        <div class="bullet-content">Tem aquela <strong>barriga teimosa</strong> que não sai por nada — emagrece braço e rosto, mas a barriga continua?</div>
      </div>
      <div class="bullet-item">
        <div class="bullet-icon">🍩</div>
        <div class="bullet-content">Bate aquela <strong>compulsão por doces</strong> ou massas no meio da tarde, que parece maior que sua vontade?</div>
      </div>

      <p style="margin-top: 1.5rem;">Tudo isso tem a mesma causa: o excesso de <strong>insulina</strong> circulando no sangue. O corpo ficou resistente a ela — como se a fechadura das células estivesse emperrada, e o pâncreas precisasse produzir cada vez mais insulina para colocar o açúcar para dentro.</p>
      <p>Sem resolver essa resistência pela raiz, o açúcar continua se acumulando na pele e na barriga — podendo evoluir para diabetes em pouco tempo.</p>
    </section>

    <!-- BLOCO 4: MECANISMO (A Sincronia Digestiva) -->
    <section id="bloco-mecanismo" class="bg-light-green reveal" style="border-radius: 24px; padding: 2.25rem 1.5rem; margin: 0.5rem 0 2rem;">
      <h2 class="text-green" style="margin-top: 0;">O erro não é O QUE você come, é a ORDEM em que você come</h2>

      <p>Com resistência à insulina, o corpo está cansado. Toda vez que você come um carboidrato sozinho — um pãozinho de manhã, um biscoito à tarde — a glicose sobe rápido. O pâncreas se desespera e solta uma descarga enorme de insulina.</p>

      <p>Essa insulina alta impede o corpo de queimar gordura. Ela manda um sinal claro: <em>"guarde gordura na barriga e escureça a pele"</em>.</p>

      <p>Mas existe uma forma científica e simples de destravar essa "fechadura": a <strong>Sincronia Digestiva</strong>.</p>

      <div class="photo-frame">
        <img src="images/_mecanismo_grafico_glicose_.jpg" alt="Gráfico comparando duas curvas de glicose: uma vermelha, com pico alto ao comer carboidrato primeiro, e outra verde, estável, ao comer salada primeiro." loading="lazy">
      </div>

      <p>Ao comer na ordem correta:</p>

      <div class="bullet-item">
        <div class="bullet-icon">1️⃣</div>
        <div class="bullet-content"><strong>🥗 Fibras primeiro:</strong> criam uma barreira protetora no estômago.</div>
      </div>
      <div class="bullet-item">
        <div class="bullet-icon">2️⃣</div>
        <div class="bullet-content"><strong>🍗 Proteínas depois:</strong> deixam o esvaziamento do estômago mais lento.</div>
      </div>
      <div class="bullet-item">
        <div class="bullet-icon">3️⃣</div>
        <div class="bullet-content"><strong>🍚 Carboidratos por último:</strong> entram na corrente sanguínea de forma suave e controlada.</div>
      </div>

      <p style="margin-top: 1.5rem; margin-bottom: 0;">O açúcar entra tão devagar que o corpo não precisa produzir aquela montanha de insulina. A insulina começa a cair, as células voltam a respirar, a gordura da barriga começa a queimar — e as manchas na pele começam a clarear.</p>
    </section>

    <!-- BLOCO 5: PROVAS E DEPOIMENTOS -->
    <section id="bloco-provas" class="reveal">
      <h2>Veja a transformação de quem começou a aplicar a Sincronia Digestiva</h2>

      <div class="testimonial-card">
        <div class="testimonial-stars">⭐⭐⭐⭐⭐</div>
        <p class="testimonial-quote">Eu morria de vergonha de prender o cabelo, porque achava que as pessoas pensavam que meu pescoço estava sujo. Depois que comecei a seguir as orientações da Dona Sebastiana e a ordem da comida, as manchas clarearam quase tudo em menos de um mês! E aquela barriga inchada finalmente começou a secar.</p>
        <div class="testimonial-author">— Francisca Rocha, 61 anos, Campinas - SP</div>
      </div>

      <div class="testimonial-card">
        <div class="testimonial-stars">⭐⭐⭐⭐⭐</div>
        <p class="testimonial-quote">Minha insulina estava em 28 — muito alta — e eu já estava pré-diabética. Fazendo o shot de vinagre de manhã e mudando a ordem do prato no almoço e na janta, minha insulina caiu para 9 em dois meses de exames. O médico ficou impressionado e disse para eu continuar firme.</p>
        <div class="testimonial-author">— Alzira Mendes, 65 anos, Salvador - BA</div>
      </div>

      <div class="photo-frame">
        <img src="images/_depoimento_antes_depois_mulher_.jpg" alt="Antes: senhora cansada e com a barriga inchada, sentada em uma cadeira. Depois: a mesma senhora sorridente, leve, caminhando ao ar livre." loading="lazy">
      </div>
    </section>

    <!-- BLOCO 6: QUEBRA DE OBJEÇÕES -->
    <section id="bloco-faq" class="reveal">
      <h2>Talvez você tenha algumas dúvidas...</h2>

      <div class="photo-frame">
        <img src="images/_depoimento_sebastiana_amigas_.jpg" alt="Três senhoras sorridentes, sentadas no jardim, conversando enquanto tomam chá natural." loading="lazy">
      </div>
      <p class="photo-caption">Leveza, vitalidade — e nenhuma dor.</p>

      <div class="faq-container">

        <div class="faq-item">
          <button class="faq-question">"Essas manchas escuras têm cura mesmo? Já passei todo tipo de creme..."</button>
          <div class="faq-answer">
            <p>Sim, minha filha! As manchas são apenas o reflexo do que acontece por dentro. Passar creme na pele é como pintar uma parede com infiltração. Você precisa tratar a causa: baixar a insulina de forma natural, através da alimentação.</p>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question">"Eu preciso fazer uma dieta restrita e passar fome?"</button>
          <div class="faq-answer">
            <p>De jeito nenhum! Se você tentar cortar tudo, a compulsão por doces vai dobrar, porque a insulina alta causa fome. O segredo é comer o que você gosta, na ordem certa, para manter o corpo saciado e a insulina baixa.</p>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question">"Eu preciso tomar remédios caros para emagrecer e baixar a insulina?"</button>
          <div class="faq-answer">
            <p>Sempre siga as orientações do seu médico — mas o nosso método é 100% natural e focado em comida de verdade. Ele ajuda o corpo a se curar sozinho, sem os efeitos colaterais dos remédios injetáveis ou de tarja preta.</p>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question">"Funciona para a minha idade? Tenho mais de 60..."</button>
          <div class="faq-answer">
            <p>Com certeza! Foi desenhado exatamente para o metabolismo depois dos 50 e 60 anos, respeitando o ritmo natural e mais lento do corpo.</p>
          </div>
        </div>

      </div>
    </section>

    <!-- BLOCO 7: OFERTA COMPLETA -->
    <section id="bloco-oferta" class="reveal">
      <h2 class="text-center">O Método Fígado Leve</h2>
      <p class="text-center" style="font-size: 1.2rem;">Para você destravar a insulina, clarear a pele e secar a barriga de forma simples, preparamos um método passo a passo:</p>

      <div class="photo-frame">
        <img src="images/_mockup_kit_completo_.jpg" alt="Mockup do Guia Fígado Leve em um tablet, cercado pelos quatro bônus: Cardápio Desincha, Elixires da Roça, Tabela de Sequenciamento e Diário do Fígado Leve." loading="lazy">
      </div>

      <div style="background-color: var(--cream-deep); padding: 1.5rem; border-radius: 16px; margin: 1.5rem 0; border: 1px solid var(--color-border);">
        <h3 style="text-align: left; color: var(--oliva); margin-bottom: 0.5rem; font-style: normal; font-weight: 800;">📗 O Guia Completo Fígado Leve</h3>
        <p style="font-size: 1.15rem; margin-bottom: 0.5rem;"><em>(Baseado na Sincronia Digestiva)</em></p>
        <p style="font-size: 1.15rem; margin-bottom: 0; color: var(--text-muted);">Um livro digital com leitura simplificada, letras grandes e imagens ilustrativas, para ler no celular ou computador sem dificuldade.</p>
      </div>

      <h3 style="text-align: left; margin-top: 2rem; color: var(--ink); font-style: normal; font-weight: 700;">Inscrevendo-se hoje, você leva estes 4 bônus sem pagar nada a mais:</h3>

      <div class="bullet-item">
        <div class="bullet-icon">🎁</div>
        <div class="bullet-content">
          <strong>Cardápio Desincha 14 Dias</strong>
          <br><span style="font-size: 1.05rem; color: var(--text-muted);">Um cardápio simples para desinflamar o corpo rapidamente nas duas primeiras semanas.</span>
        </div>
      </div>

      <div class="bullet-item">
        <div class="bullet-icon">🎁</div>
        <div class="bullet-content">
          <strong>Os Elixires da Roça da Dona Sebastiana</strong>
          <br><span style="font-size: 1.05rem; color: var(--text-muted);">Mais de 7 receitas de chás e shots caseiros que ajudam a clarear a pele e baixar a insulina.</span>
        </div>
      </div>

      <div class="bullet-item">
        <div class="bullet-icon">🎁</div>
        <div class="bullet-content">
          <strong>Tabela de Sequenciamento Prático</strong>
          <br><span style="font-size: 1.05rem; color: var(--text-muted);">Para imprimir ou salvar no celular e consultar na hora de montar o prato.</span>
        </div>
      </div>

      <div class="bullet-item">
        <div class="bullet-icon">🎁</div>
        <div class="bullet-content">
          <strong>Diário do Fígado Leve</strong>
          <br><span style="font-size: 1.05rem; color: var(--text-muted);">Um espaço para registrar sua evolução e ver as manchas clareando, dia a dia.</span>
        </div>
      </div>

      <div class="guarantee-box">
        <div class="guarantee-badge">🛡️</div>
        <div class="guarantee-text">
          <h4>Minha garantia de 7 dias</h4>
          <p>Você não corre risco nenhum. Experimente o método por 7 dias — faça o shot de manhã, mude a ordem do almoço. Se não notar melhora ou não gostar do material, mande uma mensagem e devolvo o valor pago integralmente.</p>
        </div>
      </div>
    </section>

    <!-- BLOCO 8: CHECKOUT + CTA -->
    <section id="bloco-checkout" class="reveal">



      <div class="price-box">
        <div class="price-original">De R$ 197,00 por apenas:</div>
        <div class="price-installments" id="price-installments-value">3x de R$ 9,45</div>
        <div class="price-cash">ou <span id="price-cash-value">R$ 27,00</span> à vista no Pix ou Cartão</div>
      </div>

      <div class="cta-container">
        <a href="https://ggcheckout.com/figado-leve" class="cta-button" id="cta-principal-btn" data-cta-type="insulina">
          <span class="cta-main-text">Quero acabar com a insulina alta</span>
        </a>
        <div class="cta-subtitle">
          <span>📱 Acesso imediato no celular</span> • <span>🛡️ Pagamento seguro e garantido</span>
        </div>
      </div>

      <div class="security-logos">
        <div class="security-item">
          <span class="security-icon">🔒</span>
          <span>Dados 100% criptografados</span>
        </div>
        <div class="security-item">
          <span class="security-icon">🛡️</span>
          <span>Compra segura e garantida</span>
        </div>
        <div class="security-item">
          <span class="security-icon">⚡</span>
          <span>Acesso imediato</span>
        </div>
      </div>
    </section>`;

/* --------------------------------------------------------------------------
   3. METADADOS POR ÂNGULO
   -------------------------------------------------------------------------- */
const ANGLES = {
  figado: {
    label: 'Fígado',
    ctaType: 'figado',
    ctaHref: 'https://ggcheckout.com/figado-leve',
    ctaTexto: 'Quero desinchar meu fígado agora',
    rest: REST_FIGADO,
    kicker: '🌿 O Método da Dona Sebastiana',
    h1: 'O Chá da Dona Sebastiana Que Ajuda a Desinchar o Fígado Gorduroso e Baixar a Glicose — Sem Dieta Difícil',
    h3: 'Usado há décadas na roça, esse preparo simples ajuda a aliviar o inchaço do fígado e estabilizar o açúcar no sangue, quando feito do jeito certo.',
    heroImg: '_figado_hero_sebastiana_.jpg',
    heroAlt: 'Dona Sebastiana, 65 anos, sorrindo em sua cozinha rústica, segurando uma caneca de barro com chá fumegante.',
    heroCaption: 'Dona Sebastiana, com o chá que aprendeu ainda menina.',
    iscaImg: '_figado_isca_cha_.jpg',
    iscaNome: 'chá',
    title: 'Método Fígado Leve - Como Desinchar o Fígado e Baixar a Glicose de Forma Natural',
    description: 'Descubra o segredo simples da Sincronia Digestiva para desinchar o fígado gorduroso e controlar o açúcar no sangue sem dietas restritivas.',
  },
  glicose: {
    label: 'Glicose',
    ctaType: 'glicose',
    ctaHref: 'https://ggcheckout.com/figado-leve',
    ctaTexto: 'Quero controlar minha glicose agora',
    rest: REST_GLICOSE,
    kicker: '🌿 O Método da Dona Sebastiana',
    h1: 'A Moleza Que Te Derruba Depois do Almoço Não é Idade — é o Pico de Açúcar no Sangue',
    h3: 'Dona Sebastiana mostra a ordem de comer que segura esse pico — sem cortar o arroz, o pão ou o docinho de domingo.',
    heroImg: '_glicose_hero_sono_.jpg',
    heroAlt: 'À esquerda, uma senhora exausta e sonolenta à mesa depois do almoço. À direita, Dona Sebastiana sorridente segurando uma lasanha de berinjela quentinha.',
    heroCaption: 'É a mesma refeição. A diferença é só a ordem do prato.',
    iscaImg: '_glicose_isca_elixir_.jpg',
    iscaNome: 'elixir',
    title: 'Método Fígado Leve - Como Evitar Picos de Glicose e Acabar com o Sono Pós-Almoço',
    description: 'Aprenda o segredo simples da Sincronia Digestiva para estabilizar o açúcar no sangue, reter sua energia após as refeições e emagrecer sem restrições.',
  },
  insulina: {
    label: 'Insulina / Pele',
    ctaType: 'insulina',
    ctaHref: 'https://ggcheckout.com/figado-leve',
    ctaTexto: 'Quero acabar com a insulina alta',
    rest: REST_PELE,
    kicker: '🌿 O Método da Dona Sebastiana',
    h1: 'As Manchas Escuras no Pescoço Não São Sujeira — São o Aviso Que o Corpo Dá Antes da Diabetes',
    h3: 'Esse shot caseiro de vinagre com canela ajuda a melhorar a sensibilidade à insulina e clarear a pele com o tempo — sem remédio caro e sem dieta de sofrimento.',
    heroImg: '_insulina_hero_pescoco_.jpg',
    heroAlt: 'À esquerda, close respeitoso da nuca com acantose nigricante. À direita, Dona Sebastiana sorridente segurando um shot caseiro de vinagre com canela.',
    heroCaption: 'Não é sujeira. É insulina alta pedindo socorro.',
    iscaImg: '_insulina_isca_shot_.jpg',
    iscaNome: 'shot',
    title: 'Método Fígado Leve - Como Reverter a Resistência à Insulina e Clarear a Pele de Forma Natural',
    description: 'Descubra como combater as manchas escuras no pescoço e a gordura abdominal revertendo a resistência à insulina com o segredo da Sincronia Digestiva.',
  },
};

/* --------------------------------------------------------------------------
   4. UTILITÁRIOS
   -------------------------------------------------------------------------- */
function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function slugify(str) {
  return String(str || 'pagina-nova')
    .toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '') || 'pagina-nova';
}

const FLORAL_SVG = `<svg viewBox="0 0 64 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M32 78C30 55 34 40 32 20" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M32 55C20 50 14 40 16 30" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M32 45C44 40 50 30 48 20" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
        <g transform="translate(32 14)">
          <circle r="4" fill="currentColor"/>
          <circle cx="0" cy="-9" r="5" fill="currentColor" opacity="0.85"/>
          <circle cx="8" cy="-5" r="5" fill="currentColor" opacity="0.85"/>
          <circle cx="8" cy="5" r="5" fill="currentColor" opacity="0.85"/>
          <circle cx="-8" cy="5" r="5" fill="currentColor" opacity="0.85"/>
          <circle cx="-8" cy="-5" r="5" fill="currentColor" opacity="0.85"/>
        </g>
      </svg>`;

/* --------------------------------------------------------------------------
   5. PARSER — Método (Protocolo de N dias)
   Formato esperado (blocos separados por linha em branco):
     DIA 1 — Título do dia
     Frase de contexto (opcional, pode ter mais de uma linha).
     COMO FAZER: o passo a passo.
     NOTA: por que funciona (opcional).
   -------------------------------------------------------------------------- */
function parseMetodo(raw) {
  const blocks = String(raw || '').replace(/\r\n/g, '\n').split(/\n\s*\n/).map(b => b.trim()).filter(Boolean);
  const days = [];

  blocks.forEach((block, index) => {
    const lines = block.split('\n').map(l => l.trim()).filter(Boolean);
    if (!lines.length) return;

    let dayNum = index + 1;
    let dayTitle = lines[0];
    const dayMatch = lines[0].match(/^dia\s*(\d+)\s*[—\-:]\s*(.+)$/i);
    let bodyLines = lines.slice(1);
    if (dayMatch) {
      dayNum = parseInt(dayMatch[1], 10);
      dayTitle = dayMatch[2].trim();
    } else {
      bodyLines = lines.slice(1);
    }

    const introLines = [];
    let howToLabel = 'Como fazer';
    let howToText = '';
    let note = '';

    bodyLines.forEach(line => {
      const howToMatch = line.match(/^(como fazer|como comer|a ação|como usar|o que fazer)\s*:\s*(.+)$/i);
      const noteMatch = line.match(/^(nota|obs|observação)\s*:\s*(.+)$/i);
      if (howToMatch) {
        howToLabel = howToMatch[1][0].toUpperCase() + howToMatch[1].slice(1).toLowerCase();
        howToText = howToMatch[2].trim();
      } else if (noteMatch) {
        note = noteMatch[2].trim();
      } else if (!howToText) {
        introLines.push(line);
      } else if (!note) {
        // linha extra depois do "como fazer" sem rótulo: gruda no próprio passo a passo
        howToText += ' ' + line;
      }
    });

    days.push({
      dayNum,
      dayTitle: dayTitle || `Dia ${dayNum}`,
      intro: introLines.join(' '),
      howToLabel,
      howToText: howToText || bodyLines.join(' '),
      note,
    });
  });

  return days;
}

/* --------------------------------------------------------------------------
   6. PARSER — Receita (1 card só)
   Formato esperado:
     TÍTULO: nome da receita
     INGREDIENTES:
     - item 1
     - item 2
     MODO DE PREPARO:
     1. passo 1
     2. passo 2
   -------------------------------------------------------------------------- */
function parseReceita(raw) {
  const text = String(raw || '').replace(/\r\n/g, '\n');
  const lines = text.split('\n').map(l => l.trim());

  let titulo = '';
  const ingredientes = [];
  const preparo = [];
  let section = null;
  const leftover = [];

  lines.forEach(line => {
    if (!line) return;
    const tituloMatch = line.match(/^t[íi]tulo\s*:\s*(.+)$/i);
    if (tituloMatch) { titulo = tituloMatch[1].trim(); return; }
    if (/^ingredientes\s*:?\s*$/i.test(line)) { section = 'ingredientes'; return; }
    if (/^modo de preparo\s*:?\s*$/i.test(line)) { section = 'preparo'; return; }

    if (section === 'ingredientes') {
      const item = line.replace(/^[-*•]\s*/, '');
      ingredientes.push(item);
    } else if (section === 'preparo') {
      const item = line.replace(/^\d+[.)]\s*/, '');
      preparo.push(item);
    } else {
      leftover.push(line);
    }
  });

  if (!titulo && leftover.length) titulo = leftover[0];

  return { titulo: titulo || 'Receita', ingredientes, preparo, leftover };
}

/* --------------------------------------------------------------------------
   7. RENDERIZADORES — geram exatamente o mesmo HTML/CSS das páginas reais
   -------------------------------------------------------------------------- */
function renderHero({ kicker, h1, h3, heroImg, heroAlt, heroCaption }) {
  return `    <!-- BLOCO 1: HERO -->
    <section id="bloco-hero">
      <div class="kicker-row">
        <span class="kicker">${escapeHtml(kicker)}</span>
      </div>
      <h1>${escapeHtml(h1)}</h1>
      <h3>${escapeHtml(h3)}</h3>

      <div class="photo-frame photo-hero reveal">
        <img src="images/${heroImg}" alt="${escapeHtml(heroAlt)}" loading="eager">
      </div>
      ${heroCaption ? `<p class="photo-caption">${escapeHtml(heroCaption)}</p>` : ''}
    </section>

    <div class="floral-divider">
      ${FLORAL_SVG}
    </div>`;
}

function renderMetodoTop({ heading, intro, iscaImg, iscaAlt, iscaCaption, days }) {
  const cards = days.map(d => `      <div class="protocol-box">
        <span class="protocol-day">Dia ${d.dayNum}</span>
        <strong>✅ ${escapeHtml(d.dayTitle)}</strong>
        ${d.intro ? `<p style="margin: 0.5rem 0;">${escapeHtml(d.intro)}</p>` : ''}
        <div class="recipe-subbox">
          <strong>${escapeHtml(d.howToLabel)}:</strong> ${escapeHtml(d.howToText)}
          ${d.note ? `<br><small><em>*${escapeHtml(d.note)}</em></small>` : ''}
        </div>
      </div>`).join('\n\n');

  return `    <!-- BLOCO 2: ENTREGA IMEDIATA (Método) -->
    <section id="bloco-checklist" class="bg-cream-dark reveal" style="border-radius: 24px; padding: 2.25rem 1.5rem; margin: 0 0 2rem;">
      <h2 class="text-center" style="margin-top: 0;">${escapeHtml(heading)}</h2>
      <p class="text-center notebook-intro">
        ${escapeHtml(intro)}
      </p>

      <div class="photo-frame">
        <img src="images/${iscaImg}" alt="${escapeHtml(iscaAlt)}" loading="lazy">
      </div>
      ${iscaCaption ? `<p class="photo-caption">${escapeHtml(iscaCaption)}</p>` : ''}

${cards}

      <div class="disclaimer-box">
        ⚠️ <strong>Importante:</strong> este mini-protocolo é uma ajuda natural para o seu bem-estar, e não substitui de forma alguma o acompanhamento do seu médico ou as medicações prescritas por ele.
      </div>
    </section>`;
}

function renderReceitaTop({ heading, intro, iscaImg, iscaAlt, iscaCaption, recipe }) {
  const ingredientesHtml = recipe.ingredientes.length
    ? `<ul style="margin: 0.5rem 0 0; padding-left: 1.4rem;">${recipe.ingredientes.map(i => `<li style="margin-bottom: 0.4rem;">${escapeHtml(i)}</li>`).join('')}</ul>`
    : '';
  const preparoHtml = recipe.preparo.length
    ? `<ol style="margin: 0.5rem 0 0; padding-left: 1.4rem;">${recipe.preparo.map(i => `<li style="margin-bottom: 0.4rem;">${escapeHtml(i)}</li>`).join('')}</ol>`
    : '';
  const fallback = (!recipe.ingredientes.length && !recipe.preparo.length && recipe.leftover.length)
    ? `<p style="margin-top: 0.5rem;">${escapeHtml(recipe.leftover.join(' '))}</p>` : '';

  return `    <!-- BLOCO 2: ENTREGA IMEDIATA (Receita) -->
    <section id="bloco-checklist" class="bg-cream-dark reveal" style="border-radius: 24px; padding: 2.25rem 1.5rem; margin: 0 0 2rem;">
      <h2 class="text-center" style="margin-top: 0;">${escapeHtml(heading)}</h2>
      <p class="text-center notebook-intro">
        ${escapeHtml(intro)}
      </p>

      <div class="photo-frame">
        <img src="images/${iscaImg}" alt="${escapeHtml(iscaAlt)}" loading="lazy">
      </div>
      ${iscaCaption ? `<p class="photo-caption">${escapeHtml(iscaCaption)}</p>` : ''}

      <div class="protocol-box">
        <span class="protocol-day">Receita</span>
        <strong>✅ ${escapeHtml(recipe.titulo)}</strong>
        <div class="recipe-subbox">
          <strong>🧺 Ingredientes:</strong>
          ${ingredientesHtml}
        </div>
        <div class="recipe-subbox" style="margin-top: 0.75rem;">
          <strong>🍵 Modo de preparo:</strong>
          ${preparoHtml}
        </div>
        ${fallback}
      </div>

      <div class="disclaimer-box">
        ⚠️ <strong>Importante:</strong> esta receita é uma sugestão natural de bem-estar, e não substitui de forma alguma o acompanhamento do seu médico ou nutricionista.
      </div>
    </section>`;
}

/* --------------------------------------------------------------------------
   8. MONTAGEM DA PÁGINA FINAL
   -------------------------------------------------------------------------- */
function assembleFullPage(state) {
  const angle = ANGLES[state.baseAngle];
  const topBarWord = state.iscaNome || angle.iscaNome;
  const topBarText = state.modo === 'metodo'
    ? `⬇️ Seu checklist grátis de ${state.dias ? state.dias.length : 3} dias e a receita do ${escapeHtml(topBarWord)} estão logo abaixo`
    : `⬇️ Sua receita grátis de ${escapeHtml(topBarWord)} está logo abaixo`;

  const heroHtml = renderHero({
    kicker: state.kicker,
    h1: state.h1,
    h3: state.h3,
    heroImg: state.heroImg,
    heroAlt: state.heroAlt,
    heroCaption: state.heroCaption,
  });

  const topSectionHtml = state.modo === 'metodo'
    ? renderMetodoTop({
        heading: state.heading,
        intro: state.intro,
        iscaImg: state.iscaImg,
        iscaAlt: state.iscaAlt,
        iscaCaption: state.iscaCaption,
        days: state.dias,
      })
    : renderReceitaTop({
        heading: state.heading,
        intro: state.intro,
        iscaImg: state.iscaImg,
        iscaAlt: state.iscaAlt,
        iscaCaption: state.iscaCaption,
        recipe: state.receita,
      });

  const ctaHtml = angle.rest
    .replace(/data-cta-type="[a-z]+"/g, `data-cta-type="${angle.ctaType}"`)
    .replace(/https:\/\/ggcheckout\.com\/figado-leve[^"]*/g, angle.ctaHref)
    .replace(/<span class="cta-main-text">[^<]*<\/span>/, `<span class="cta-main-text">${escapeHtml(state.ctaTexto || angle.ctaTexto)}</span>`);

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(state.pageTitle)}</title>
  <meta name="description" content="${escapeHtml(state.pageDescription)}">
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <!-- TOPO / AVISO -->
  <div class="top-bar" id="topo-aviso">
    ${topBarText}
  </div>

  <div class="container">

${heroHtml}

${topSectionHtml}

${ctaHtml}

  </div>

  <!-- RODAPÉ -->
  <footer>
    <div class="container">
      <p><strong>Método Fígado Leve</strong> © 2026. Todos os direitos reservados.</p>
      <p style="font-size: 0.85rem; color: #8c7b70;">Aviso: as informações apresentadas neste site possuem fins estritamente educativos e de informação geral, não substituindo aconselhamento médico profissional.</p>
      <p style="font-size: 0.85rem; margin-top: 1rem;">
        <a href="#">Políticas de Privacidade</a> | <a href="#">Termos de Uso</a>
      </p>
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>
`;
}

/* --------------------------------------------------------------------------
   9. EXEMPLOS (pré-preenchem a caixa de colar texto)
   -------------------------------------------------------------------------- */
const EXEMPLO_METODO = `DIA 1 — O Gole Purificador
Logo ao acordar, ainda em jejum, prepare o Chá de Canela, Cúrcuma e Cravo.
COMO FAZER: Ferva 200ml de água. Desligue o fogo e adicione 1 pedaço de canela, 3 cravos-da-índia e meia colher de café de cúrcuma. Abafe 5 minutos e tome morno.
NOTA: Esse gole ajuda a acordar o fígado e a diminuir a inflamação logo cedo.

DIA 2 — A Regra de Ouro no Almoço
Na hora do almoço, mude a ordem de colocar os alimentos na boca.
COMO COMER: Primeiro a salada, depois a proteína, por último o carboidrato.
NOTA: Isso impede que o açúcar suba rápido demais.

DIA 3 — O Descanso da Janta
Jante no máximo até as 19h30 e prefira um prato leve.
COMO FAZER: Uma sopa de legumes com frango desfiado, ou uma salada com proteína.
NOTA: O fígado precisa da noite para se limpar.`;

const EXEMPLO_RECEITA = `TÍTULO: Chá de Canela, Cúrcuma e Cravo

INGREDIENTES:
- 200ml de água
- 1 pedaço pequeno de canela em casca
- 3 cravos-da-índia
- meia colher de café de cúrcuma
- meio limão

MODO DE PREPARO:
1. Ferva a água.
2. Desligue o fogo e adicione a canela, os cravos e a cúrcuma.
3. Abafe por 5 minutos.
4. Esprema o limão na hora de beber e tome morno.`;

window.GERADOR = {
  IMAGES, ANGLES, parseMetodo, parseReceita, assembleFullPage, slugify,
  EXEMPLO_METODO, EXEMPLO_RECEITA,
};
