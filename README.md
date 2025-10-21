<h1 align="center">Respira</h1>
<p align="center">Projeto desenvolvido para promover momentos de calma e reconexão através de uma experiência digital suave e guiada por respiração.</p>

<h1 align="center">Tabela de Conteúdos</h1>
<p align="center">
 <a href="#objetivo">Objetivo</a> •
 <a href="#funcionalidades">Funcionalidades</a> • 
 <a href="#uso">Uso</a> • 
 <a href="#instalação">Instalação</a> • 
 <a href="#tecnologias">Tecnologias</a>
</p>

---

### Objetivo

O objetivo deste projeto é criar uma aplicação de **respiração guiada**, onde o usuário é convidado a desacelerar e acompanhar um ciclo visual e sonoro que estimula o bem-estar e a calma.

Cada fase da respiração (inspirar, segurar e expirar) é acompanhada por **animações suaves** e **sons relaxantes**, criando uma experiência imersiva e acolhedora.

---

### Funcionalidades

- **Ciclo de Respiração Guiada:** Transições suaves entre inspirar, segurar e expirar.
- **Sons Relaxantes:** Utiliza *Howler.js* para tocar sons sincronizados em cada fase.
- **Animações Fluidas:** Criadas com *Framer Motion* para representar visualmente o movimento da respiração.
- **Design Responsivo:** Interface adaptada para diferentes tamanhos de tela.
- **Paleta Suave e Acolhedora:** Tons personalizados via sistema `@theme` do Tailwind v4.
- **Acessibilidade:** Elementos com `aria-label` e foco visível.

---

### Uso

1. **Inicie a sessão:** Clique no botão "Iniciar sessão" para começar o ciclo de respiração.  
2. **Respire junto:** Observe o círculo expandindo e contraindo conforme as instruções ("Inspira", "Segura", "Expira").  
3. **Ative ou desative o som:** Use o botão de som para controlar os efeitos sonoros.  
4. **Pare quando quiser:** Clique novamente em "Parar sessão" para encerrar o ciclo.  

---

### Instalação

Para executar este projeto localmente, siga estas etapas:

1. **Clone o repositório**:
    ```bash
    git clone https://github.com/seu-usuario/nome-do-repositorio.git
    ```

2. **Navegue até o diretório do projeto**:
    ```bash
    cd nome-do-repositorio
    ```
3. **Instale as dependências**:
    ```bash
    npm install
    ```

4. **Inicie o servidor:
    ```bash
    npm run dev
    ```

5. **Abra no navegador**.
   ```bash
   http://localhost:5173
    ```

###  Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- React + Typescript -> Estrutura do app
- Tailwind -> Estilização com váriaveis @theme
- Framer Motion -> Animações de transição
- Howler.js -> Gerenciamento e reprodução de sons
- Vite -> Build e servidor local 
