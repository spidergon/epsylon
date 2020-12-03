const coursLink = '/contact/?s=cours';
const correctionsLink = '/contact/?s=corrections';

export default () => ({
  title: 'Epsylon Guyane',
  description:
    "Cours particulier de Mathématiques, aide aux devoirs, correction des devoirs et initiation à l'outils informatique.",
  headerMenu: [
    { label: 'Services', link: '/services' },
    { label: 'À propos', link: '/a-propos' },
    { label: 'Contact', link: '/contact' },
  ],
  socials: {
    twitter: 'chrisservius',
    fb: '',
    email: 'hello@example.com',
  },
  data: {
    home: {
      hero: {
        title: `Progresser en<br /><span>Mathématiques</span>`,
        subTitle:
          "Vous avez des difficultés en Mathématiques ? Besoin d'aide pour un devoir ? Vous pouvez nous faire confiance et combler vos lacunes à l'aide de nos profs certifiés !",
        action1: { label: 'Réserver un cours', link: coursLink },
        action2: { label: 'Commander une correction', link: correctionsLink },
        img: '/images/hero.jpg',
        alt: "matheuse portant livres en face d'un tableau",
      },
      about: {
        title: 'Bienvenue !',
        text: `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quaerat sed, perferendis voluptatibus et ipsum est! Vitae quo maiores quis nisi eligendi sit quisquam dignissimos sequi ipsum alias? Earum, laudantium?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quaerat sed, perferendis voluptatibus et ipsum est! Vitae quo maiores quis nisi eligendi sit quisquam dignissimos sequi ipsum alias? Earum, laudantium?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quaerat sed, perferendis voluptatibus et ipsum est! Vitae quo maiores quis nisi eligendi sit quisquam dignissimos sequi ipsum alias? Earum, laudantium?</p>`,
        img: '/images/about.jpg',
        alt: 'trois jeunes qui étudient les mathématiques en ligne',
      },
      services: {
        title: 'Une meilleur façon de progresser en Maths',
        subTitle:
          'Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.',
        items: [
          {
            title: 'Cours particuliers en ligne',
            text:
              'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
            action: { label: 'Réserver un cours en ligne', link: coursLink },
          },
          {
            title: 'Correction des devoirs',
            text:
              'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
            action: { label: 'Commander une correction', link: correctionsLink },
          },
          {
            title: "Initiation à l'outil informatique",
            text:
              'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
            action: { label: "Réserver un cours d'informatique en ligne", link: coursLink },
          },
          {
            title: 'Nos fiches de révision à porter de clic',
            text:
              'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
          },
        ],
      },
      cta: `Prêt à dompter les<br /><span>Mathématiques ?</span>`,
      cayenne: {
        img: '/images/cayenne.jpg',
        alt: 'progresser en mathématiques à cayenne',
      },
    },
    cours: {
      text:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias nihil reprehenderit pariatur error delectus, corrupti, perspiciatis cum, aliquam officia vero odit sit sapiente voluptas architecto quibusdam similique dolor dolorem? Et.',
      action: { label: 'Réservez votre cours', link: '/connexion' },
    },
    devoirs: {
      text:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias nihil reprehenderit pariatur error delectus, corrupti, perspiciatis cum, aliquam officia vero odit sit sapiente voluptas architecto quibusdam similique dolor dolorem? Et.',
      action: { label: 'Commandez votre correction', link: '/connexion' },
    },
  },
});
