# DESIGN.md — HORS CHAMP · Drop 01

Source de vérité visuelle de la landing page. Les textes vivent dans `content.yaml`.

## Direction

**Quiet utility × worn precision**

Parisian restraint × elevated essentials × worn-in imperfection × technical protection × old-school futurism.

La page doit être élégante, calme, précise, éditoriale et mobile-first. Elle ne doit ressembler ni à un site SaaS, ni à une boutique e-commerce générique, ni à une marque de luxe classique. Les références (A.P.C., Fear of God, Golden Goose, New Balance Protection Pack, Yeezy old school) servent à comprendre des tensions, jamais à copier des codes visuels.

## Palette

| Token    | Hex       | Usage                                                  |
|----------|-----------|--------------------------------------------------------|
| Chalk    | `#E8E7E2` | Texte sur fond sombre, fond des sections claires       |
| Carbon   | `#151515` | Fond principal, texte sur fond clair                   |
| Concrete | `#898985` | Labels secondaires sur Carbon uniquement               |
| Steel    | `#B8BBB7` | Texte secondaire sur Carbon, filets sur Chalk          |
| Signal   | `#D6FF3F` | CTA principal, détails réfléchissants — avec parcimonie |
| Rust     | `#8D4936` | Accent éditorial, mentions « à confirmer » sur Chalk   |

Sur fond Chalk, les labels gris utilisent `#5C5C58` (Concrete n'y atteint pas le contraste 4.5:1).

## Typographie

- **Titres** : Barlow Condensed 700–800, uppercase, interlignage serré (0.84–0.9)
- **Textes** : Inter 400–500
- **Labels** : JetBrains Mono, uppercase, interlettrage 0.08–0.14em

## Image

- Silhouettes en mouvement, cadrages partiels, détails de matières
- Flash direct ou lumière froide
- Béton, métal, bitume, vestiaires, architecture urbaine
- Imperfections visibles ; éviter les shootings trop propres ou trop luxueux
- **Tant qu'aucune photo réelle n'est fournie** : placeholders étiquetés « [ Visuel à venir ] ». Ne jamais présenter une image générée comme une photographie réelle de la marque.

## Structure

1. Announcement bar
2. Header (sticky)
3. Hero du Drop 01
4. Manifeste
5. Lookbook
6. Produits
7. Détails de construction
8. Accès anticipé
9. Footer

## Règles

- Pas de backend, pas de paiement, pas de compte utilisateur
- Pas de faux stock, faux prix, faux avis, fausse rareté, fausse urgence
- Formulaire d'inscription visuel uniquement
- Cibles tactiles ≥ 44px, contraste texte ≥ 4.5:1, `prefers-reduced-motion` respecté
