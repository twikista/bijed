export const menuItemsData = [
  { name: 'Home', url: '/' },
  {
    name: 'about',
    url: '/about',
    submenu: [
      { name: 'Editor in Chief', url: 'editor-in-chief' },
      { name: 'Editorial Board', url: 'editor-board' },
      { name: 'Peer Review', url: 'peer-review' },
      { name: 'Reviewers Guide', url: 'reviewers-guide' },
    ],
  },
  {
    name: 'policy',
    url: '/policy',
    submenu: [
      { name: 'Open Access', url: 'open-access' },
      { name: 'Copyright', url: 'copyright' },
      { name: 'Plagiarism', url: 'plagiarism' },
      { name: 'Editorial Policy', url: 'editor-policy' },
      { name: 'Publication Ethics', url: 'publication-ethics' },
    ],
  },
  {
    name: 'journal',
    url: '/journal',
    submenu: [
      { name: 'Current', url: 'current' },
      { name: 'Archive', url: 'archive' },
      { name: 'Authors Guide', url: 'authors-guide' },
      { name: 'Submission Guide', url: 'submission-guide' },
      { name: 'Manuscript Format', url: 'manuscript-format' },
      { name: 'Publication Fee', url: 'publication-fee' },
    ],
  },
  { name: 'contact', url: '/contact' },
]
