export const menuItemsData = [
  { name: 'Home', url: '/' },

  {
    name: 'about',
    url: '/about',
    submenu: [
      { name: 'Editorial Team', url: 'editorial-team' },
      { name: 'Peer Review', url: 'peer-review' },
      // { name: 'Open Access', url: 'open-access' },
    ],
  },
  {
    name: 'policies',
    url: '/policies',
    submenu: [
      { name: 'Authors Guide', url: 'authors-guide' },
      { name: 'Reviewers Guide', url: 'reviewers-guide' },
      { name: 'Open Access', url: 'open-access' },
      { name: 'Copyright', url: 'copyright' },
      { name: 'Publication Ethics', url: 'publication-ethics' },
      { name: 'Plagiarism Policy', url: 'plagiarism-policy' },
      // { name: 'Terms', url: 'terms' },
    ],
  },
  {
    name: 'journal',
    url: '/journal',
    submenu: [
      { name: 'Current', url: 'current' },
      { name: 'Archive', url: 'archive' },
      { name: 'Editorial Process', url: 'editorial-process' },
      { name: 'Submission Guide', url: 'submission-guide' },
      // { name: 'Manuscript Format', url: 'manuscript-format' },
      { name: 'Publication Fee', url: 'publication-fee' },
    ],
  },
  { name: 'contact', url: '/contact' },
  { name: 'login', url: `/auth/login` },
]
