# HORS CHAMP — Drop 01 · Outside System

Landing page de lancement du premier drop de **HORS CHAMP**, marque streetwear parisienne fictive (cas pratique Atelier Parallèle).

> Des vêtements essentiels, construits pour vivre dehors.

## Lancer en local

```bash
git clone https://github.com/aminasanhaji51-ui/hors-champ-drop-01.git
cd hors-champ-drop-01
npm install
npm run dev
```

## Structure

| Fichier          | Rôle                                                        |
|------------------|-------------------------------------------------------------|
| `content.yaml`   | Source de vérité éditoriale : textes, produits, CTA, footer |
| `DESIGN.md`      | Source de vérité visuelle : palette, typo, image, règles    |
| `index.html`     | Point d'entrée                                              |
| `src/main.js`    | Rendu de la page à partir de `content.yaml` + formulaire    |
| `src/style.css`  | Styles (tokens de la palette dans `:root`)                  |
| `src/icons.js`   | Dessins au trait des produits, placeholder du hero          |
| `netlify.toml`   | Build Netlify (`npm run build` → `dist/`)                   |

**Modifier un texte** : édite `content.yaml`, le dev server se recharge tout seul.
**Ajouter une vraie photo** : place-la dans `public/` et renseigne le champ `image` correspondant (`lookbook.looks[].image`, `products[].image` ou `drop.hero_image`) — le placeholder est remplacé automatiquement.

## Itérer

```bash
git checkout -b iteration/drop-hero
# … modifications …
git add .
git commit -m "Update drop hero"
git push -u origin iteration/drop-hero
```

Netlify génère une preview pour chaque branche poussée, et une nouvelle production à chaque push sur `main`.

## Contraintes

Pas de backend, pas de paiement, pas de compte, pas de faux stock / prix / avis / rareté. Le formulaire d'accès anticipé est visuel uniquement (`backend_required: false`). Prix, matières exactes, stocks et dates restent à confirmer.
