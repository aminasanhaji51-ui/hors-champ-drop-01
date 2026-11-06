/* Dessins au trait des produits et scène placeholder du hero.
   Ce ne sont pas des photos : ils restent en place tant qu'aucune image réelle n'est fournie. */

const SIGNAL = "#D6FF3F";

export const grain = (opacity = 0.2) =>
  `<svg class="grain" aria-hidden="true"><rect width="100%" height="100%" filter="url(#hc-grain)" opacity="${opacity}"></rect></svg>`;

const paths = {
  hoodie: `
    <path d="M70 42 Q100 14 130 42 L152 54 L182 78 L172 124 L152 114 L152 178 L48 178 L48 114 L28 124 L18 78 L48 54 Z"/>
    <path d="M80 44 Q100 74 120 44"/>
    <path d="M92 60 L92 84 M108 60 L108 84"/>
    <path d="M70 134 L130 134 L122 160 L78 160 Z"/>
    <path d="M48 168 L152 168"/>
    <rect x="156" y="104" width="12" height="4" fill="${SIGNAL}" stroke="none"/>`,
  shell: `
    <path d="M76 30 L100 40 L124 30 L154 46 L184 142 L162 148 L150 104 L150 180 L50 180 L50 104 L38 148 L16 142 L46 46 Z"/>
    <path d="M76 30 L80 18 L120 18 L124 30"/>
    <path d="M100 40 L100 180"/>
    <path d="M62 120 L84 120 M116 120 L138 120"/>
    <rect x="104" y="58" width="22" height="4" fill="${SIGNAL}" stroke="none"/>`,
  tee: `
    <path d="M70 40 Q100 56 130 40 L174 60 L162 98 L146 90 L146 176 L54 176 L54 90 L38 98 L26 60 Z"/>
    <path d="M76 42 Q100 62 124 42"/>
    <rect x="84" y="92" width="32" height="18"/>
    <path d="M90 101 L110 101" stroke="#898985"/>
    <path d="M54 166 L146 166"/>`,
  cap: `
    <path d="M40 124 Q44 62 100 58 Q156 62 160 124 Z"/>
    <path d="M40 124 Q100 114 160 124 Q186 128 192 142 Q120 136 40 132 Z"/>
    <path d="M100 58 L100 124 M70 66 Q64 94 66 122 M130 66 Q136 94 134 122"/>
    <circle cx="100" cy="58" r="3"/>
    <rect x="54" y="106" width="26" height="4" fill="${SIGNAL}" stroke="none"/>`,
};

export const productIcon = (name) =>
  `<svg class="product__icon" aria-hidden="true" viewBox="0 0 200 200" fill="none" stroke="#E8E7E2" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round">${paths[name] || paths.tee}</svg>`;

export const heroScene = () => `
  <svg class="bg" aria-hidden="true" viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice">
    <rect width="600" height="800" fill="#1C1C1B"/>
    <rect y="520" width="600" height="280" fill="#232322"/>
    <rect x="60" y="120" width="190" height="400" fill="#2A2A29"/>
    <rect x="250" y="60" width="120" height="460" fill="#252524"/>
    <rect x="370" y="200" width="230" height="320" fill="#2F2F2E"/>
    <line x1="0" y1="520" x2="600" y2="520" stroke="#3A3A38"/>
    <line x1="0" y1="610" x2="600" y2="580" stroke="#2E2E2D"/>
    <rect x="300" y="290" width="58" height="230" fill="#151515"/>
    <rect x="286" y="250" width="86" height="120" fill="#151515"/>
    <circle cx="329" cy="226" r="22" fill="#151515"/>
    <rect x="296" y="330" width="66" height="7" fill="${SIGNAL}"/>
  </svg>`;
