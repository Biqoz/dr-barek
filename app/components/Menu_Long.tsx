type MenuItem = {
  text: string
  href: string
  submenu?: MenuItem[]
  icon?: string
}

export const menu_superlong: MenuItem[] = [
  {
    text: 'Les Soins Proposés',
    href: '/les-soins-proposes',
    icon: '/icon/needle.png',
    submenu: [
      { text: 'All In Four', href: '/les-soins-proposes/all-in-four' },
      { text: 'Biodentine', href: '/les-soins-proposes/biodentine' },
      { text: 'Blanchiment', href: '/les-soins-proposes/blanchiment' },
      { text: 'Bridge', href: '/les-soins-proposes/bridge' },
      { text: 'Couronnes', href: '/les-soins-proposes/couronnes' },
      { text: 'Devitalisation', href: '/les-soins-proposes/devitalisation' },
      {
        text: 'Empreinte Numérique',
        href: '/les-soins-proposes/empreinte-numerique',
      },
      { text: 'Facettes', href: '/les-soins-proposes/facettes' },
      {
        text: 'Greffe Osseuse Pré Implantaire',
        href: '/les-soins-proposes/greffe-osseuse-pre-implantaire',
      },
      {
        text: 'Inlay Esthétique',
        href: '/les-soins-proposes/inlay-esthetique',
      },
      { text: 'Scanner 3D', href: '/les-soins-proposes/scanner-3d' },
      { text: 'Urgences', href: '/les-soins-proposes/urgences' },
      {
        text: 'Complet Mandibulaire sur implant',
        href: '/les-soins-proposes/complet-mandibulaire-sur-implant',
      },
      { text: 'Implant', href: '/les-soins-proposes/implant' },
    ],
  },
  { text: 'Dr Barek', href: '/dr-barek', icon: '/icon/doc.png' },
  {
    text: 'Tarifs',
    href: '/tarifs',
    icon: '/icon/euro.png',
    submenu: [
      { text: 'CMU', href: '/tarifs/cmu' },
      { text: 'Facilité De Paiement', href: '/tarifs/facilite-de-paiement' },
      { text: 'Reste A Charge Zero', href: '/tarifs/reste-a-charge-zero' },
      { text: 'Tarifs Généraux', href: '/tarifs/tarifs-generaux' },
      { text: 'Tiers Payant', href: '/tarifs/tiers-payant' },
    ],
  },
  { text: 'Le Cabinet', href: '/le-cabinet', icon: '/icon/maison.png' },
  { text: 'Prendre RDV', href: '/prendre-rdv', icon: '/icon/calendar.png' },
  { text: 'Nous Contacter', href: '/nous-contacter', icon: '/icon/mail.png' },

  {
    text: 'À Propos',
    href: '/a-propos',
    icon: '/icon/mark.png',
    submenu: [
      { text: 'FAQ', href: '/a-propos/faq' },
      {
        text: 'Gallerie Photos & Videos',
        href: '/a-propos/gallerie-photos-videos',
      },
      { text: 'Réseaux Sociaux', href: '/a-propos/reseaux-sociaux' },
    ],
  },
]
