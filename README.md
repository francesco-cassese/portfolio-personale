# Portfolio Personale — Francesco Cassese

Portfolio personale realizzato con React e Vite, pensato per raccontare il mio percorso da un background nella ristorazione e pasticceria allo sviluppo software full-stack.

## Sezioni

- **Hero** — presentazione e punto d'ingresso del sito
- **Journey** — il percorso professionale: dalla cucina al corso Boolean di full-stack development, fino allo sviluppo software di oggi
- **Skills** — competenze tecniche: HTML, CSS, JavaScript, React, Node.js, MySQL, PHP, Laravel
- **Projects** — raccolta di progetti realizzati durante il percorso di formazione e come progetti personali, filtrabili per categoria (Full-Stack, Laravel, PHP, HTML/CSS)
- **Contacts** — contatti diretti (GitHub, LinkedIn, email)

Il sito include inoltre effetti di interazione come reveal-on-scroll e un effetto cursore custom (`useReveal`, `CursorGlow`).

## Stack tecnico

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- CSS Modules per lo styling scoped ai componenti
- [ESLint](https://eslint.org/) per il linting

## Avvio del progetto

```bash
pnpm install
pnpm dev
```

## Script disponibili

- `pnpm dev` — avvia il server di sviluppo
- `pnpm build` — crea la build di produzione
- `pnpm preview` — anteprima locale della build di produzione
- `pnpm lint` — esegue il linting del codice

## Struttura del progetto

```
src/
├── assets/          # immagini (hero, screenshot progetti)
├── components/       # componenti React, uno per sezione
├── data/              # dati statici (progetti, tappe del percorso)
├── hooks/             # hook custom (reveal on scroll)
├── App.jsx            # composizione delle sezioni
└── main.jsx            # entry point
```

## Contatti

- GitHub: [francesco-cassese](https://github.com/francesco-cassese)
- LinkedIn: [francesco-cassese](https://www.linkedin.com/in/francesco-cassese/)
