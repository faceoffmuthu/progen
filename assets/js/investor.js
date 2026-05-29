/* ============== Investor Page Logic ============== */

// Category icons (PNGs from investorimages folder)
const ICON_PATHS = {
  board: 'assets/investorimages/icon1.png',
  committees: 'assets/investorimages/icon2.png',
  policies: 'assets/investorimages/icon3.png',
  financial: 'assets/investorimages/icon4.png',
  ipo: 'assets/investorimages/icon5.png',
  announcements: 'assets/investorimages/icon6.png',
  shareholding: 'assets/investorimages/icon7.png',
  press: 'assets/investorimages/icon8.png',
  meetings: 'assets/investorimages/icon9.png',
  esop: 'assets/investorimages/icon10.png',
  credit: 'assets/investorimages/icon11.png',
  rta: 'assets/investorimages/icon12.png',
  investorcontact: 'assets/investorimages/icon13.png',
  annual: 'assets/investorimages/icon14.png',
  disclosure: 'assets/investorimages/icon15.png',
  moa: 'assets/investorimages/icon16.png',
};
const PDF_ICON = 'assets/investorimages/pdficon.png';
const EXCEL_ICON = 'assets/investorimages/excelicon.png';

// Helper to render a category icon as <img>
const catIcon = (id, cls = '') =>
  ICON_PATHS[id] ? `<img src="${ICON_PATHS[id]}" alt="" class="${cls}">` : '';

const ICONS = {
  pdf: `<img src="${PDF_ICON}" alt="PDF">`,
  excel: `<img src="${EXCEL_ICON}" alt="Excel">`,
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"/></svg>',
};

// Categories
const SIDEBAR_CATEGORIES = [
  { id: 'board', label: 'Board of Directors and Key Managerial Personnel', short: 'Board & KMP' },
  { id: 'committees', label: 'Board Committees', short: 'Committees' },
  { id: 'policies', label: 'Policies', short: 'Policies' },
  { id: 'financial', label: 'Financial Information', short: 'Financials' },
  { id: 'ipo', label: 'Initial Public Offer', short: 'IPO' },
  // { id: 'announcements', label: 'Corporate Announcement', short: 'Announcements' },
  { id: 'shareholding', label: 'Shareholding Pattern', short: 'Shareholding' },
  { id: 'press', label: 'Press Release', short: 'Press' },
  { id: 'meetings', label: 'Shareholders Meeting', short: 'Meetings' },
  { id: 'esop', label: 'ESOP', short: 'ESOP' },
  { id: 'credit', label: 'Credit Rating', short: 'Credit' },
  { id: 'rta', label: 'Registrar and Share Transfer Agent', short: 'RTA' },
  { id: 'investorcontact', label: 'Investor Complaints Redressal', short: 'Investor Complaints Redressal' },
  // { id: 'annual', label: 'Annual Report', short: 'Annual Report' },
  { id: 'disclosure', label: 'Disclosure - Annual Return', short: 'Disclosure' },
  { id: 'moa', label: 'Material Documents & Contracts', short: 'Material Documents & Contracts' },
];

// Director portraits (from investorimages folder)
const director1 = 'assets/investorimages/Director1.png';
const director2 = 'assets/investorimages/Director2.png';
const director3 = 'assets/investorimages/Director3.png';
const director4 = 'assets/investorimages/Director4.png';
const director5 = 'assets/investorimages/Directo5.png';
const director6 = 'assets/investorimages/Director6.png';
const director7 = 'assets/investorimages/Director7.png';

// Board of Directors and Key Managerial Personnel
const Alfred = 'assets/investorimages/BOD ENHANCED PHOTOS/1.png';
const Veena = 'assets/investorimages/BOD ENHANCED PHOTOS/4.png';
const Innocent = 'assets/investorimages/BOD ENHANCED PHOTOS/6.png';
const Karthik = 'assets/investorimages/BOD ENHANCED PHOTOS/3.png';
const Hari = 'assets/investorimages/BOD ENHANCED PHOTOS/5.png';
const Subhasree = 'assets/investorimages/BOD ENHANCED PHOTOS/7.jpeg';
const Selvakumaran = 'assets/investorimages/BOD ENHANCED PHOTOS/8.png';

const BOARD_DIRECTORS = [
  { photo: Alfred, name: 'MR. ALFRED VINOD ANTONY', role: 'MANAGING DIRECTOR', din: '02776734', email: 'alfred@progenrenewables.com' },
  { photo: Veena, name: 'MRS. VEENA JOSE', role: 'CFO - CHIEF FINANCIAL OFFICER AND WHOLE TIME DIRECTOR', din: '08017313', email: 'veena@progenrenewables.com' },
  { photo: Innocent, name: 'MR. INNOCENT JUDEJOSEPH ANTONYJOSEPH', role: 'INDEPENDENT DIRECTOR', din: '10896507', email: 'jjinnocent78@gmail.com' },
  { photo: Karthik, name: 'MR. KARTHIK VELUCHAMY KOTTUR', role: 'INDEPENDENT DIRECTOR', din: '01973367', email: 'karthik@deccanindustries.com' },
  { photo: Hari, name: 'MR. HARI BASKER', role: 'INDEPENDENT DIRECTOR', din: '11281446', email: 'r.haribhaskaran@gmail.com' },
  { photo: Subhasree, name: 'MS. G. SUBHASREE', role: 'COMPANY SECRETARY', din: '', email: 'CS@progenrenewables.com' },
  { photo: Selvakumaran, name: 'MR. SELVAKUMARAN CHANDRASEKARAN', role: 'DIRECTOR', din: '08355365', email: 'selvas.themechanicalengineer@gmail.com' },
];

const BOARD_KMPS = [
  { name: 'Mr. Rohit Jindal', role: 'Chief Financial Officer' },
  { name: 'Ms. Pankti Thakkar', role: 'Company Secretary & Compliance Officer' },
];

const COMMITTEES = [
  {
    title: 'Audit Committee', members: [
      { photo: director4, name: 'Mr. Harshil Vadodariya', role: 'Non-Executive Independent Director - Chairperson', din: '07827003' },
      { photo: director5, name: 'Mr. Vivek Nathwani', role: 'Non-Executive Independent Director - Member', din: '09791653' },
      { photo: director1, name: 'Mr. Ankit Garg', role: 'Chairman & Managing Director - Member', din: '08027760' },
    ]
  },
  {
    title: 'Nomination & Remuneration Committee', members: [
      { photo: director4, name: 'Mr. Harshil Vadodariya', role: 'Non-Executive Independent Director - Chairperson', din: '07827003' },
      { photo: director1, name: 'Mr. Ankit Garg', role: 'Chairman & Managing Director - Member', din: '08027760' },
      { photo: director2, name: 'Mr. Pankaj Vallabhbhai Gothi', role: 'Whole-Time Director - Member', din: '07348565' },
    ]
  },
  {
    title: 'Stakeholder\'s Relationship Committee', members: [
      { photo: director4, name: 'Mr. Harshil Vadodariya', role: 'Non-Executive Independent Director - Chairperson', din: '07827003' },
      { photo: director5, name: 'Mr. Vivek Nathwani', role: 'Non-Executive Independent Director - Member', din: '09791653' },
      { photo: director3, name: 'Ms. Priya Bansal', role: 'Non-Executive Non-Independent Director - Member', din: '07788611' },
      { photo: director1, name: 'Mr. Ankit Garg', role: 'Chairman & Managing Director - Member', din: '08027760' },
    ]
  },
  {
    title: 'Corporate Social Responsibility (CSR) Committee', members: [
      { photo: director4, name: 'Mr. Harshil Vadodariya', role: 'Non-Executive Independent Director - Chairperson', din: '07827003' },
      { photo: director1, name: 'Mr. Ankit Garg', role: 'Chairman & Managing Director - Member', din: '08027760' },
      { photo: director2, name: 'Mr. Pankaj Vallabhbhai Gothi', role: 'Whole-Time Director - Member', din: '07348565' },
    ]
  },
];

const PDF_SAMPLE = '/pdfs/sample.pdf';

const DOCUMENT_GROUPS = {
  announcements: [
    { title: 'Corporate Announcement', docs: [], comingSoon: true },
  ],
  financial: [
    { 
      title: 'Financial Information', docs: [
        { name: 'Finanical Information 2022-2023', file: 'investor/Financial Information/Progen R Pvt Ltd - Annual Report 31-March-2023.pdf', date: '—' },
        { name: 'Finanical Information 2023-2024', file: 'investor/Financial Information/Progen R Pvt Ltd - Annual Report 31-March-2024.pdf', date: '—' },
        { name: 'Finanical Information 2024-2025', file: 'investor/Financial Information/Annual Report 2024-25.pdf', date: '—' },
      ] 
    },
  ],
  shareholding: [
    {
      title: 'Shareholding Pattern', docs: [
        { name: 'Shareholders Pattern', file: 'investor/Shareholding Pattern/Shareholders Pattern.pdf', date: '—' },
      ]
    },
  ],
  press: [
    { title: 'Press Releases', docs: [], comingSoon: true },
  ],
  policies: [
    {
      title: 'Policies', docs: [
        { name: 'Code of Conduct', file: 'pdf/Polices and Code of Conduct/Code of Conduct..pdf', date: '—' },
        { name: 'CSR Policy', file: 'pdf/Polices and Code of Conduct/CSR Policy.pdf', date: '—' },
        { name: 'Policy for Determining Material Subsidiaries', file: 'pdf/Polices and Code of Conduct/Policy for Determining Material Subsidiaries..pdf', date: '—' },
        { name: 'Policy on Determination of Materiality of Event', file: 'pdf/Polices and Code of Conduct/Policy for Determination of materiality of event..pdf', date: '—' },
        { name: 'Familiarization Programmes', file: 'pdf/Polices and Code of Conduct/Familiarization Programmes..pdf', date: '—' },
        { name: 'Risk Management Policy', file: 'pdf/Polices and Code of Conduct/Risk Management Policy..pdf', date: '—' },
        { name: 'Vigil Mechanism / Whistle Blower Policy', file: 'pdf/Polices and Code of Conduct/Vigil Machanism - whistle blower policy..pdf', date: '—' },
        { name: 'Policy on Related Party Transactions', file: 'pdf/Polices and Code of Conduct/POLICY ON RELATED PARTY TRANSACTIONS .pdf', date: '—' },
      ]
    },
  ],
  investorcontact: [
    { title: 'Investor complaints Redressal', docs: []},
  ],
  annual: [
    {
      title: 'Annual Reports', docs: [
        { name: 'Annual Report 2024-25', file: 'investor/Annual Report/Annual Report 2024-25.pdf', date: '2025' },
      ]
    },
  ],
  disclosure: [
    { title: 'Disclosure - Annual Return', docs: [], comingSoon: true },
  ],
  credit: [
    { title: 'Credit Rating', docs: [], comingSoon: true },
  ],
  moa: [
    {
      title: 'Memorandum of Association', docs: [
        { name: 'MOA - Pvt to Pub and ASC INR 17 Cr', file: 'investor/MoA- Memorandum of Association/1) MOA Pvt to Pub and ASC INR 17 Cr.pdf', date: '—' },
      ]
    },
  ],
};

/* ===== State ===== */
let activeId = 'announcements';
const path = window.location.pathname;
const page = path.split('/').pop().replace('.html', '');
if (SIDEBAR_CATEGORIES.some(c => c.id === page)) {
  activeId = page;
}
let query = '';

/* ===== Helpers ===== */
const $ = (s) => document.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const pad2 = (n) => String(n).padStart(2, '0');
const toTitleCase = (str) => str.replace(/\b\w/g, c => c.toUpperCase());

/* ===== Renderers ===== */
function renderIconNav() {
  const nav = $('#iconNav');
  // Add vertical class to the nav container
  nav.classList.add('ir-iconnav--vertical');
  nav.innerHTML = SIDEBAR_CATEGORIES.map((cat) => {
    const count = (DOCUMENT_GROUPS[cat.id] || []).reduce((s, g) => s + g.docs.length, 0);
    const isActive = cat.id === activeId;
    return `
      <button class="ir-iconnav-btn ir-iconnav-btn--list ${isActive ? 'active' : ''}" data-id="${cat.id}">
        <div class="ir-iconnav-tile ir-iconnav-tile--sm">
          ${catIcon(cat.id, 'ir-iconnav-img')}
          ${count > 0 ? `<span class="ir-iconnav-badge">${count}</span>` : ''}
        </div>
        <span class="ir-iconnav-label">${esc(cat.short)}</span>
        <span class="ir-iconnav-bar"></span>
      </button>
    `;
  }).join('');
  nav.querySelectorAll('button').forEach((b) =>
    b.addEventListener('click', () => { window.location.href = `${b.dataset.id}.html`; })
  );
}

function renderMeta() {
  const cat = SIDEBAR_CATEGORIES.find((c) => c.id === activeId);
  $('#metaShort').textContent = cat.short;
  $('#metaTitle').innerHTML = `${catIcon(cat.id, 'ir-meta-icon')}<span>${esc(cat.label)}</span>`;
  const bannerTitle = document.querySelector('.about-banner-title');
  if (bannerTitle) {
    bannerTitle.textContent = cat.short;
  }
}

function renderStats() {
  const groups = DOCUMENT_GROUPS[activeId] || [];
  const totalDocs = groups.reduce((s, g) => s + g.docs.length, 0);
  $('#statSections').textContent = SIDEBAR_CATEGORIES.length;
  $('#statDocs').textContent = totalDocs;
}

function docRowHTML(doc, i) {
  const filename = doc.file.split('/').pop();
  return `
    <a class="ir-doc-row" href="${esc(doc.file)}" download="${esc(filename)}" target="_blank" rel="noopener noreferrer">
      <span class="ir-doc-num">${pad2(i + 1)}</span>
      <span class="ir-doc-pdf">${ICONS.pdf}</span>
      <div class="ir-doc-info">
        <p class="ir-doc-name">${esc(toTitleCase(doc.name))}</p>
        <p class="ir-doc-meta">PDF · ${esc(doc.date || 'Available')}</p>
      </div>
      <span class="ir-doc-dl">${ICONS.download}<span>Download</span></span>
      <span class="ir-doc-dl-mobile">${ICONS.download}</span>
    </a>
  `;
}

function groupCardHTML(group) {
  const docCount = group.docs.length;
  if (group.comingSoon && docCount === 0) {
    return `
      <article class="ir-coming-soon">
        <div class="ir-coming-soon-icon">📁</div>
        <h3>Coming soon</h3>
        <p>Documents for this section will be published here shortly.</p>
      </article>
    `;
  }
  return `
    <article class="ir-group-card collapsed">
      <header class="ir-group-header" role="button" tabindex="0" aria-expanded="false">
        <div>
          <h3>${esc(group.title)}</h3>
          <p>${docCount} ${docCount === 1 ? 'document' : 'documents'}</p>
        </div>
        <div class="ir-group-header-right">
          <span class="ir-group-count">${pad2(docCount)}</span>
          <span class="ir-group-chevron" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
          </span>
        </div>
      </header>
      <div class="ir-group-body">
        ${docCount === 0
      ? `<div class="ir-empty-row">No documents available at this time.</div>`
      : group.docs.map(docRowHTML).join('')}
      </div>
    </article>
  `;
}

function personCardHTML(p) {
  return `
    <div class="ir-person-card">
      ${p.photo ? `<div class="ir-person-img-wrap">
        <img src="${esc(p.photo)}" alt="${esc(p.name)}">
      </div>` : ''}
      <div class="ir-person-info">
        <p class="ir-person-name">${esc(p.name)}</p>
        <p class="ir-person-role">${esc(p.role)}</p>
        ${p.din ? `<p class="ir-person-din">DIN: ${esc(p.din)}</p>` : ''}
        ${p.email ? `<a class="ir-person-email" href="mailto:${esc(p.email)}">${esc(p.email)}</a>` : ''}
      </div>
    </div>
  `;
}

function boardSectionHTML() {
  const profiles = [
    { name: 'Profile - MR. Alfred Vinod Antony', file: 'pdf/1- Board Of Directors Key Personn/KMP/Profile - MR.Alfred Vinod Antony.pdf' },
    { name: 'Profile - MRS. Veena Jose', file: 'pdf/1- Board Of Directors Key Personn/KMP/Profile - Mrs.Veena Jose.pdf' },
    { name: 'Profile - MR. J J Innocent', file: 'pdf/1- Board Of Directors Key Personn/KMP/Profile - MR.J J Innocent.pdf' },
    { name: 'Profile - MR. Karthik', file: 'pdf/1- Board Of Directors Key Personn/KMP/Profile - MR. Karthik.pdf' },
    { name: 'Profile - MR. Hari Basker R', file: 'pdf/1- Board Of Directors Key Personn/KMP/Profile - MR.Hari Basker R.pdf' },
    { name: 'Profile - Mr. Selvakumaran Chandrasekaran', file: 'pdf/1- Board Of Directors Key Personn/KMP/Profile - Mr. Selvakumaran Chandrasekaran.pdf' },
  ];
  const appointments = [
    { name: 'Profile - Mr. A. Karthi', file: 'pdf/1- Board Of Directors Key Personn/SMP/Profile - Mr. A. Karthi.pdf' },
    { name: 'Profile - MR. A.K. Anand', file: 'pdf/1- Board Of Directors Key Personn/SMP/Profile - Mr. A.K. Anand.pdf' },
    { name: 'Profile - MR. A. Sundararajan', file: 'pdf/1- Board Of Directors Key Personn/SMP/Profile - Mr. Sundararajan.pdf' },
    // { name: 'Profile - MRS. R. Manju', file: 'pdf/1- Board Of Directors Key Personn/SMP/Profile - Mrs. Manju.pdf' },
    { name: 'Profile - Mr. Justin A V', file: 'pdf/1- Board Of Directors Key Personn/SMP/Profile - Mr. Justin A V.pdf' },
  ];

  const docList = (docs) => docs.map(d => `
    <a class="ir-doc-row" href="${esc(d.file)}" target="_blank" rel="noopener">
      <span class="ir-doc-pdf">${ICONS.pdf}</span>
      <span class="ir-doc-name">${esc(toTitleCase(d.name))}</span>
      <span class="ir-doc-download">${ICONS.download}</span>
    </a>
  `).join('');
  return `
    <div class="ir-people-block">
      <p class="ir-section-label">Details of Directors</p>
      <div class="ir-people-grid">${BOARD_DIRECTORS.map(personCardHTML).join('')}</div>
    </div>
    <!-- Director Profiles -->
    <article class="ir-group-card" style="margin-top:1.5rem;">
      <header class="ir-group-header" style="cursor:default;">
        <div>
          <h3>KMP</h3>
          <p>${profiles.length} documents</p>
        </div>
      </header>

      <div class="ir-group-body">
        ${docList(profiles)}
      </div>
    </article>

    <!-- Appointment Letters Main Folder -->
    <article class="ir-group-card" style="margin-top:1.5rem;">
      <header class="ir-group-header" style="cursor:default;">
        <div>
          <h3>SMP</h3>
          <p>${appointments.length} documents</p>
        </div>
        </header>

        <div class="ir-group-body">
          ${docList(appointments)}
      </div>
    </article>
  `;
}

function committeesSectionHTML() {
  const members = [
    { photo: 'assets/investorimages/BOD ENHANCED PHOTOS/6.png', name: 'MR. INNOCENT JUDEJOSEPH ANTONYJOSEPH', role: 'INDEPENDENT DIRECTOR', din: '10896507', email: 'jjinnocent78@gmail.com' },
    { photo: 'assets/investorimages/BOD ENHANCED PHOTOS/3.png', name: 'MR. KARTHIK VELUCHAMY KOTTUR', role: 'INDEPENDENT DIRECTOR', din: '01973367', email: 'karthik@deccanindustries.com' },
    { photo: 'assets/investorimages/BOD ENHANCED PHOTOS/4.png', name: 'MRS. VEENA JOSE', role: 'CFO - CHIEF FINANCIAL OFFICER AND WHOLE TIME DIRECTOR', din: '08017313', email: 'veena@progenrenewables.com' },
    { photo: 'assets/investorimages/BOD ENHANCED PHOTOS/5.png', name: 'MR. HARI BASKER', role: 'INDEPENDENT DIRECTOR', din: '11281446', email: 'r.haribhaskaran@gmail.com' },
  ];
  const COMMITTEES = [
    {
      title: 'Stakeholder\'s Committees',
      members: [
        { photo: Innocent, name: 'MR. INNOCENT JUDEJOSEPH ANTONYJOSEPH', role: 'Non-Executive Independent Director - Chairman', din: '10896507', email: 'jjinnocent78@gmail.com' },
        { photo: Alfred, name: 'MR. ALFRED VINOD ANTONY', role: 'Managing Director - Member', din: '02776734', email: 'alfred@progenrenewables.com' },
        { photo: Veena, name: 'MRS. VEENA JOSE', role: 'CFO - Chief Financial Officer and Whole Time Director - Member', din: '08017313', email: 'veena@progenrenewables.com' },
      ]
    },
    {
      title: 'IPO Committees',
      members: [
        { photo: Alfred, name: 'MR. ALFRED VINOD ANTONY', role: 'Managing Director - Chairman', din: '02776734', email: 'alfred@progenrenewables.com' },
        { photo: Veena, name: 'MRS. VEENA JOSE', role: 'CFO - Chief Financial Officer and Whole Time Director - Member', din: '08017313', email: 'veena@progenrenewables.com' },
        { photo: Selvakumaran, name: 'MR. SELVAKUMARAN CHANDRASEKARAN', role: 'Director - Member', din: '08355365', email: 'selvas.themechanicalengineer@gmail.com' },
      ]
    },
    {
      title: 'Audit Committees',
      members: [
        { photo: Innocent, name: 'MR. INNOCENT JUDEJOSEPH ANTONYJOSEPH', role: 'Non-Executive Independent Director - Chairman', din: '10896507', email: 'jjinnocent78@gmail.com' },
        { photo: Karthik, name: 'MR. KARTHIK VELUCHAMY KOTTUR', role: 'Non-Executive Independent Director - Member', din: '01973367', email: 'karthik@deccanindustries.com' },
        { photo: Veena, name: 'MRS. VEENA JOSE', role: 'CFO - Chief Financial Officer and Whole Time Director - Member', din: '08017313', email: 'veena@progenrenewables.com' },
      ]
    },
    {
      title: 'Nomination & Remuneration Committees',
      members: [
        { photo: Hari, name: 'MR. HARI BASKER', role: 'Non-Executive Independent Director - Chairman', din: '11281446', email: 'r.haribhaskaran@gmail.com' },
        { photo: Innocent, name: 'MR. INNOCENT JUDEJOSEPH ANTONYJOSEPH', role: 'Non-Executive Independent Director - Member', din: '10896507', email: 'jjinnocent78@gmail.com' },
        { photo: Selvakumaran, name: 'MR. SELVAKUMARAN CHANDRASEKARAN', role: 'Director - Member', din: '08355365', email: 'selvas.themechanicalengineer@gmail.com' },
      ]
    },
  ];
  const audit_committee_docs = [
    { name: 'Constitution of Audit Committee', file: 'pdf/2. Borad Committees/1.Audit Committee/1. Constitution of Audit Committee.pdf' },
  ];
  const nomination_remuneration_committee_docs = [
    { name: 'Nomination & Remuneration Committee', file: 'pdf/2. Borad Committees/2.Nomination & Remuneration Committee/Nomination and Remuneration Committee.pdf' },
  ];
  const stakeholder_committee_docs = [
    { name: 'Constitution of Stakeholder\'s Relationship Committee', file: 'pdf/2. Borad Committees/3.StakeHolders Relationship Committee/1. Constitution of stakeholders Relationship Committee.pdf' },
  ];
  const ipo_committee_docs = [
    { name: 'IPO Committee', file: 'pdf/2. Borad Committees/4.IPO-Committe/IPO - Committee.pdf' },
  ];

  const audit_committee_docList = (audit_committee_docs) => audit_committee_docs.map(d => `
    <a class="ir-doc-row" href="${esc(d.file)}" target="_blank" rel="noopener">
      <span class="ir-doc-pdf">${ICONS.pdf}</span>
      <span class="ir-doc-name">${esc(toTitleCase(d.name))}</span>
      <span class="ir-doc-download">${ICONS.download}</span>
    </a>
  `).join('');
  const nomination_remuneration_committee_docList = (nomination_remuneration_committee_docs) => nomination_remuneration_committee_docs.map(d => `
    <a class="ir-doc-row" href="${esc(d.file)}" target="_blank" rel="noopener">
      <span class="ir-doc-pdf">${ICONS.pdf}</span>
      <span class="ir-doc-name">${esc(toTitleCase(d.name))}</span>
      <span class="ir-doc-download">${ICONS.download}</span>
    </a>
  `).join('');
  const stakeholder_committee_docList = (stakeholder_committee_docs) => stakeholder_committee_docs.map(d => `
    <a class="ir-doc-row" href="${esc(d.file)}" target="_blank" rel="noopener">
      <span class="ir-doc-pdf">${ICONS.pdf}</span>
      <span class="ir-doc-name">${esc(toTitleCase(d.name))}</span>
      <span class="ir-doc-download">${ICONS.download}</span>
    </a>
  `).join('');
  const ipo_committee_docList = (ipo_committee_docs) => ipo_committee_docs.map(d => `
    <a class="ir-doc-row" href="${esc(d.file)}" target="_blank" rel="noopener">
      <span class="ir-doc-pdf">${ICONS.pdf}</span>
      <span class="ir-doc-name">${esc(toTitleCase(d.name))}</span>
      <span class="ir-doc-download">${ICONS.download}</span>
    </a>
  `).join('');

  return `
    <div class="ir-people-block">
      <p class="ir-section-label">Board Committee</p>
      <div class="ir-people-grid">${members.map(personCardHTML).join('')}</div>
    </div>
    <div class="ir-people-block">
      <p class="ir-section-label">Stakeholder's Committee</p>
      <div class="ir-people-grid">${COMMITTEES[0].members.map(personCardHTML).join('')}</div>
    </div>
    <div class="ir-people-block">
      <p class="ir-section-label">IPO Committee</p>
      <div class="ir-people-grid">${COMMITTEES[1].members.map(personCardHTML).join('')}</div>
    </div>
    <div class="ir-people-block">
      <p class="ir-section-label">Audit Committee</p>
      <div class="ir-people-grid">${COMMITTEES[2].members.map(personCardHTML).join('')}</div>
    </div>
    <div class="ir-people-block">
      <p class="ir-section-label">Nomination & Remuneration Committee</p>
      <div class="ir-people-grid">${COMMITTEES[3].members.map(personCardHTML).join('')}</div>
    </div>

    <!-- Main Folder -->
    <article class="ir-group-card" style="margin-top:1.5rem;">
      <header class="ir-group-header" style="cursor:default;">
        <div>
          <h3>Committee Constitution Documents</h3>
          <p>1 Folder</p>
        </div>
      </header>

      <div class="ir-group-body">
        <!-- Inner Folder -->
        <article class="ir-group-card" style="margin:1rem;">
          <header class="ir-group-header" style="cursor:default;">
            <div>
              <h3>Audit Committee</h3>
              <p>${audit_committee_docs.length} documents</p>
            </div>
          </header>

          <div class="ir-group-body">
            ${audit_committee_docList(audit_committee_docs)}
          </div>
        </article>
      </div>

      <div class="ir-group-body">
        <!-- Inner Folder -->
        <article class="ir-group-card" style="margin:1rem;">
          <header class="ir-group-header" style="cursor:default;">
            <div>
              <h3>Nomination & Remuneration Committee</h3>
              <p>${nomination_remuneration_committee_docs.length} documents</p>
            </div>
          </header>

          <div class="ir-group-body">
            ${nomination_remuneration_committee_docList(nomination_remuneration_committee_docs)}
          </div>
        </article>
      </div>

      <div class="ir-group-body">
        <!-- Inner Folder -->
        <article class="ir-group-card" style="margin:1rem;">
          <header class="ir-group-header" style="cursor:default;">
            <div>
              <h3>Stakeholder\'s Relationship Committee</h3>
              <p>${stakeholder_committee_docs.length} documents</p>
            </div>
          </header>

          <div class="ir-group-body">
            ${stakeholder_committee_docList(stakeholder_committee_docs)}
          </div>
        </article>
      </div>

      <div class="ir-group-body">
        <!-- Inner Folder -->
        <article class="ir-group-card" style="margin:1rem;">
          <header class="ir-group-header" style="cursor:default;">
            <div>
              <h3>IPO Committee</h3>
              <p>${ipo_committee_docs.length} documents</p>
            </div>
          </header>

          <div class="ir-group-body">
            ${ipo_committee_docList(ipo_committee_docs)}
          </div>
        </article>
      </div>
    </article>
  `;
}

function financialSectionHTML() {
  const annualDocs = [
    { name: 'Annual Report - 2024-2025', file: 'pdf/4. Financial Information/Annual Report - 2024-2025/Annual Report 2024-25.pdf' },
    { name: 'Financial Statements', file: 'pdf/4. Financial Information/Annual Report - 2024-2025/Financial Statements.xlsx' },
  ];
  const otherDocs = [
    { name: 'Accounting Policies', file: 'pdf/4. Financial Information/Annual Report - 2024-2025/Other Document Information/Accounting Policies.pdf' },
    { name: 'Addendum to the Notice - 8th AGM', file: 'pdf/4. Financial Information/Annual Report - 2024-2025/Other Document Information/Addendum to the Notice - 8th AGM.pdf' },
    { name: 'Assets and Liabilities', file: 'pdf/4. Financial Information/Annual Report - 2024-2025/Other Document Information/Assets and liablaities.pdf' },
    { name: 'Benefit, Plan, Cost', file: 'pdf/4. Financial Information/Annual Report - 2024-2025/Other Document Information/Benefit , Plan, Cost.pdf' },
    { name: 'Contingent Liabilities and Commitment', file: 'pdf/4. Financial Information/Annual Report - 2024-2025/Other Document Information/contingent liabilities and commitement.pdf' },
    { name: 'Corporate Information', file: 'pdf/4. Financial Information/Annual Report - 2024-2025/Other Document Information/Corporate Information.pdf' },
    { name: 'Disclosure Requirement', file: 'pdf/4. Financial Information/Annual Report - 2024-2025/Other Document Information/Disclosure requirement.pdf' },
    { name: 'Foreign Exchange Transaction', file: 'pdf/4. Financial Information/Annual Report - 2024-2025/Other Document Information/foreign Exchange Transaction.pdf' },
    { name: 'Goods and Services Tax', file: 'pdf/4. Financial Information/Annual Report - 2024-2025/Other Document Information/Goods and Services Tax.pdf' },
    { name: 'Impairment Assets', file: 'pdf/4. Financial Information/Annual Report - 2024-2025/Other Document Information/Impairment Assets.pdf' },
    { name: 'Other Disclosure', file: 'pdf/4. Financial Information/Annual Report - 2024-2025/Other Document Information/Other Disclosure.pdf' },
    { name: 'Prior Period Comparatives', file: 'pdf/4. Financial Information/Annual Report - 2024-2025/Other Document Information/Prior Period Comparatives.pdf' },
    { name: 'Raw Materials - Total Consumption', file: 'pdf/4. Financial Information/Annual Report - 2024-2025/Other Document Information/Raw Materials - Total consumption.pdf' },
    { name: 'Segment Reporting', file: 'pdf/4. Financial Information/Annual Report - 2024-2025/Other Document Information/Segment Reporting.pdf' },
    { name: 'Significant Accounting Ratio', file: 'pdf/4. Financial Information/Annual Report - 2024-2025/Significant Accounting Ratio.pdf' },
    { name: 'Tax and Cash Flow Statement', file: 'pdf/4. Financial Information/Annual Report - 2024-2025/Other Document Information/Tax and Cash flow Statement.pdf' },
    { name: 'Transaction with Relative Parties', file: 'pdf/4. Financial Information/Annual Report - 2024-2025/Other Document Information/Transaction with Relative Parties.pdf' },
  ];
  const audit2023Docs = [
    { 
      name: 'Progen R Pvt Ltd - Annual Report 2023', 
      file: 'pdf/4. Financial Information/Financials Prior to Conversion/2022-2023 Audit Report/Progen R Pvt Ltd - Annual Report 2023.pdf' 
    },
    { 
      name: 'Progen R Pvt Ltd - Financial Statement 2023', 
      file: 'pdf/4. Financial Information/Financials Prior to Conversion/2022-2023 Audit Report/Progen R Pvt Ltd - Financial Statement.xlsx' 
    },
  ];

  const audit2024Docs = [
    { 
      name: 'Progen R Pvt Ltd - Annual Report 31-March-2024', 
      file: 'pdf/4. Financial Information/Financials Prior to Conversion/2023-2024 Audit Report/Progen R Pvt Ltd - Annual Report 31-March-2024.pdf' 
    },
    { 
      name: 'Progen R Pvt Ltd - Financial Statement 31.03.2024', 
      file: 'pdf/4. Financial Information/Financials Prior to Conversion/2023-2024 Audit Report/Progen R Pvt Ltd - Financial Statement 31.03.2024.xls' 
    },
  ];

  const docList = (docs) => docs.map(d => {
    const file = d.file.toLowerCase();
    let icon = ICONS.pdf;
    if (file.endsWith('.xls') || file.endsWith('.xlsx')) {
      icon = ICONS.excel;
    }
    return `
      <a class="ir-doc-row" href="${esc(d.file)}" target="_blank" rel="noopener">
        <span class="ir-doc-pdf">
          ${icon}
        </span>
        <span class="ir-doc-name">
          ${esc(toTitleCase(d.name))}
        </span>
      </a>
    `;
  }).join('');
  return `

    <!-- Annual Report Folder -->
    <article class="ir-group-card" style="margin-top:1.5rem;">
      <header class="ir-group-header" style="cursor:default;">
        <div>
          <h3>Annual Report - 2024-2025</h3>
          <p>${annualDocs.length} documents</p>
        </div>
      </header>
      <div class="ir-group-body">
        ${docList(annualDocs)}
      </div>

      <div class="ir-group-body">
        <!-- Other Document Information -->
        <article class="ir-group-card" style="margin:1rem;">
          <header class="ir-group-header" style="cursor:default;">
            <div>
              <h3>Other Document Information</h3>
              <p>${otherDocs.length} documents</p>
            </div>
          </header>
          <div class="ir-group-body">
            ${docList(otherDocs)}
          </div>
        </article>
      </div>
    </article>

    <!-- Financial Prior Conversion -->
    <article class="ir-group-card" style="margin-top:1rem;">
      <header class="ir-group-header" style="cursor:default;">
        <div>
          <h3>Financials Prior to Conversion</h3>
          <p>2 Folders</p>
        </div>
      </header>

      <div class="ir-group-body">
        <!-- 2023-2024 -->
        <article class="ir-group-card" style="margin:1rem;">
          <header class="ir-group-header" style="cursor:default;">
            <div>
              <h3>2023-2024 Annual Report</h3>
              <p>${audit2024Docs.length} documents</p>
            </div>
          </header>
          <div class="ir-group-body">
            ${docList(audit2024Docs)}
          </div>
        </article>

        <!-- 2022-2023 -->
        <article class="ir-group-card" style="margin:1rem;">
          <header class="ir-group-header" style="cursor:default;">
            <div>
              <h3>2022-2023 Annual Report</h3>
              <p>${audit2023Docs.length} documents</p>
            </div>
          </header>
          <div class="ir-group-body">
            ${docList(audit2023Docs)}
          </div>
        </article>
      </div>
    </article>
  `;
}

function shareholdingSectionHTML() {
  const shareholdingDocs = [
    { name: 'Shareholders Pattern', file: 'pdf/6. ShareHolding Pattern/ShareHolding Pattern/Shareholders Pattern (4).pdf' },
  ];

  const docList = (docs) => docs.map(d => `
    <a class="ir-doc-row" href="${esc(d.file)}" target="_blank" rel="noopener">
      <span class="ir-doc-pdf">${ICONS.pdf}</span>
      <span class="ir-doc-name">${esc(toTitleCase(d.name))}</span>
    </a>
  `).join('');

  return `
    <!-- ShareHolding Pattern Folder -->
    <article class="ir-group-card" style="margin-top:1.5rem;">
      <header class="ir-group-header" style="cursor:default;">
        <div>
          <h3>ShareHolding Pattern</h3>
          <p>${shareholdingDocs.length} document</p>
        </div>
      </header>
      <div class="ir-group-body">
        ${docList(shareholdingDocs)}
      </div>
    </article>
  `;
}

function contactSectionHTML() {
  return `
    <!-- Contact Pattern Folder -->
    <article class="ir-group-card" style="margin-top:1.5rem;">
      <header class="ir-group-header" style="cursor:default;">
        <div>
          <h3>Grievances Redressal Officer</h3>
        </div>
      </header>

      <div class="ir-group-body" style="padding:1.5rem 1rem; line-height:1.9;">
        <div style="margin-bottom:1rem;">
          <strong>NAME:</strong> MR. Hari Basker
        </div>
        <div style="margin-bottom:1rem;">
          <strong>ADDRESS:</strong> No 57-59 Durgalal Street Fort Coimbatore - 641001
        </div>
        <div style="margin-bottom:1rem;">
          <strong>PHONE NO:</strong>  90476 39395
        </div>
        <div>
          <strong>MAIL ID:</strong>  r.haribhaskaran@gmail.com
        </div>
      </div>
    </article>
  `;
}

function moaSectionHTML() {
  const moaDocs1 = [
    {
      name: 'Certificate of Incorporation - PLC',
      file: 'pdf/5. Material Documents and Contracts/Material Documents/Certification Of Incorporation/Certificate of Incorporation - PLC.pdf'
    },
    {
      name: 'Certificate of incorporation - Pvt Ltd',
      file: 'pdf/5. Material Documents and Contracts/Material Documents/Certification Of Incorporation/Certificate of incorporation - Pvt Ltd.pdf'
    },
    {
      name: 'Form -Z Registration certificate',
      file: 'pdf/5. Material Documents and Contracts/Material Documents/Certification Of Incorporation/Form -Z Registration certificate.pdf'
    },
  ];
  const moaDocs2 = [
    {
      name: 'MR. Hari Basker Independent Director Ceritificate',
      file: 'pdf/5. Material Documents and Contracts/Material Documents/ID Certificate/Haribaskhar Independent Director Ceritificate.pdf'
    },
    {
      name: 'MR. Innocent Independent Director Ceritificate',
      file: 'pdf/5. Material Documents and Contracts/Material Documents/ID Certificate/JJ Innocent Independent Director Ceritificate.pdf'
    },
    {
      name: 'MR. Karthik Independent Director Ceritificate',
      file: 'pdf/5. Material Documents and Contracts/Material Documents/ID Certificate/Karthik Independent Director Ceritificate.pdf'
    },
  ];
  const moaDocs3 = [
    {
      name: 'AOA of PRL',
      file: 'pdf/5. Material Documents and Contracts/Material Documents/MOA & AOA/AOA of PRL.pdf'
    },
    {
      name: 'MOA OF PRL',
      file: 'pdf/5. Material Documents and Contracts/Material Documents/MOA & AOA/MOA OF PRL.pdf'
    },
  ];

  const docList = (docs) => docs.map(d => {
    const file = d.file.toLowerCase();
    let icon = ICONS.pdf;

    if (file.endsWith('.xls') || file.endsWith('.xlsx')) {
      icon = ICONS.excel;
    }

    return `
      <a class="ir-doc-row" href="${esc(d.file)}" target="_blank" rel="noopener">
        <span class="ir-doc-pdf">
          ${icon}
        </span>
        <span class="ir-doc-name">
          ${esc(toTitleCase(d.name))}
        </span>
      </a>
    `;
  }).join('');

  return `

    <!-- Main Folder -->
    <article class="ir-group-card" style="margin-top:1rem;">
      <header class="ir-group-header" style="cursor:default;">
        <div>
          <h3>Material Documents</h3>
          <p>3 Folders</p>
        </div>
      </header>

      <div class="ir-group-body">
        <!-- Folder 1 -->
        <article class="ir-group-card" style="margin:1rem;">
          <header class="ir-group-header" style="cursor:default;">
            <div>
              <h3>Certification Of Incorporation</h3>
              <p>${moaDocs1.length} documents</p>
            </div>
          </header>
          <div class="ir-group-body">
            ${docList(moaDocs1)}
          </div>
        </article>

        <!-- Folder 2 -->
        <article class="ir-group-card" style="margin:1rem;">
          <header class="ir-group-header" style="cursor:default;">
            <div>
              <h3>ID Certificate</h3>
              <p>${moaDocs2.length} documents</p>
            </div>
          </header>
          <div class="ir-group-body">
            ${docList(moaDocs2)}
          </div>
        </article>

        <!-- Folder 3 -->
        <article class="ir-group-card" style="margin:1rem;">
          <header class="ir-group-header" style="cursor:default;">
            <div>
              <h3>MOA & AOA</h3>
              <p>${moaDocs3.length} documents</p>
            </div>
          </header>
          <div class="ir-group-body">
            ${docList(moaDocs3)}
          </div>
        </article>
      </div>
    </article>
  `;
}

function policiesSectionHTML() {
  const policiesDocs = [
    { name: 'CSR Policy', file: 'pdf/3. Policies/Policies/CSR Policy.pdf' },
    { name: 'Policy On Determination Of Materiality Of Event', file: 'pdf/3. Policies/Policies/Policy for Determination of Materiality of Event - Print.pdf' },
    { name: 'Policy On Related Party Transactions', file: 'pdf/3. Policies/Policies/Policy On Related Party Transactions  .pdf' },
    { name: 'Risk Management Policy', file: 'pdf/3. Policies/Policies/Risk Management Policy.pdf' },
    { name: 'Anti-Sexual Harassment Policy', file: 'pdf/3. Policies/Policies/Sexual Harassment Policy.pdf' },
    { name: 'Policy On Identification Of Material Creditors And Material Litigations', file: 'pdf/3. Policies/Policies/Policy on Identification of Material Creditors and Material Litigations .pdf' },
    { name: 'Vigil Mechanism Whistle Blower Policy', file: 'pdf/3. Policies/Policies/Vigil Mechanism Whistle Blower Policy.pdf' },
    { name: 'Nomination And Remuneration Policy', file: 'pdf/3. Policies/Policies/Nomination-and-Remuneration-Policy.pdf' },
    { name: 'Familiarisation Programme For Independent Directors', file: 'pdf/3. Policies/Policies/FAMILIARISATION PROGRAMME FOR INDEPENDENT DIRECTORS_ (1).pdf' },
  ];
  const mdDocs = [
    { name: 'MR. Alfred Vinod Antony - Appointment', file: 'pdf/3. Policies/Terms of Conditions for appointment of independent directors/1. Appointment of Mananging Director/Alfred -  Appointment.pdf' },
  ];
  const wtdDocs = [
    { name: 'MRS. Veena Jose - Appointment', file: 'pdf/3. Policies/Terms of Conditions for appointment of independent directors/2. Appointment of Whole Time Director/Veena Jose - Appointment  .pdf' },
  ];
  const idDocs = [
    { name: 'MR. Hari Basker - Appointment', file: 'pdf/3. Policies/Terms of Conditions for appointment of independent directors/3. Appointment of Independent Directors/Hari Basker -  Appointment (1).pdf' },
    { name: 'MR. Innocent - Appointment', file: 'pdf/3. Policies/Terms of Conditions for appointment of independent directors/3. Appointment of Independent Directors/Innocent -  Appointment.pdf' },
    { name: 'MR. Karthik - Appointment', file: 'pdf/3. Policies/Terms of Conditions for appointment of independent directors/3. Appointment of Independent Directors/Karthik - Appointment.pdf' },
  ];
  const directorDocs = [
    { name: 'MR. Selvakumaran Appointment Letter', file: 'pdf/3. Policies/Terms of Conditions for appointment of independent directors/Appointment of director/MR. Selvakumaran Appointment Letter.pdf' },
  ];
  const kmpDocs = [
    { name: 'Code of Conduct  For Directors', file: 'pdf/3. Policies/Code of Conduct for Kmp/Code of Conduct  For Directors.pdf' },
  ];
  const smpDocs = [
    { name: 'Code of Conduct For Senior Management', file: 'pdf/3. Policies/SMP-Senior Management/Code of Conduct For Senior Management.pdf' },
  ];


  const docList = (docs) => docs.map(d => `
    <a class="ir-doc-row" href="${esc(d.file)}" target="_blank" rel="noopener">
      <span class="ir-doc-pdf">${ICONS.pdf}</span>
      <span class="ir-doc-name">${esc(toTitleCase(d.name))}</span>
    </a>
  `).join('');

  return `
    <!-- Policies Folder -->
    <article class="ir-group-card" style="margin-top:1.5rem;">
      <header class="ir-group-header" style="cursor:default;">
        <div>
          <h3>Policies</h3>
          <p>${policiesDocs.length} documents</p>
        </div>
      </header>
      <div class="ir-group-body">
        ${docList(policiesDocs)}
      </div>
    </article>

    <!-- Terms and Conditions Main Folder -->
    <article class="ir-group-card" style="margin-top:1rem;">
      <header class="ir-group-header" style="cursor:default;">
        <div>
          <h3>Terms and Conditions of Appointment of Independent Directors</h3>
          <p>3 Folders</p>
        </div>
      </header>
      <div class="ir-group-body">
        <!-- Sub-folder 1 -->
        <article class="ir-group-card" style="margin:1rem;">
          <header class="ir-group-header" style="cursor:default;">
            <div>
              <h3>Appointment of Managing Director</h3>
              <p>${mdDocs.length} document</p>
            </div>
          </header>
          <div class="ir-group-body">
            ${docList(mdDocs)}
          </div>
        </article>

        <!-- Sub-folder 2 -->
        <article class="ir-group-card" style="margin:1rem;">
          <header class="ir-group-header" style="cursor:default;">
            <div>
              <h3>Appointment of Whole Time Director</h3>
              <p>${wtdDocs.length} document</p>
            </div>
          </header>
          <div class="ir-group-body">
            ${docList(wtdDocs)}
          </div>
        </article>

        <!-- Sub-folder 3 -->
        <article class="ir-group-card" style="margin:1rem;">
          <header class="ir-group-header" style="cursor:default;">
            <div>
              <h3>Appointment of Independent Directors</h3>
              <p>${idDocs.length} documents</p>
            </div>
          </header>
          <div class="ir-group-body">
            ${docList(idDocs)}
          </div>
        </article>

        <!-- Sub-folder 4 -->
        <article class="ir-group-card" style="margin:1rem;">
          <header class="ir-group-header" style="cursor:default;">
            <div>
              <h3>Appointment of Director</h3>
              <p>${directorDocs.length} document</p>
            </div>
          </header>
          <div class="ir-group-body">
            ${docList(directorDocs)}
          </div>
        </article>
      </div>
    </article>

    <!-- Code Of Conduct for Directors -KMP -->
    <article class="ir-group-card" style="margin-top:1.5rem;">
      <header class="ir-group-header" style="cursor:default;">
        <div>
          <h3>Code Of Conduct for Directors - KMP</h3>
          <p>${kmpDocs.length} documents</p>
        </div>
      </header>
      <div class="ir-group-body">
        ${docList(kmpDocs)}
      </div>
    </article>

    <!-- SMP- Senior Management -->
    <article class="ir-group-card" style="margin-top:1.5rem;">
      <header class="ir-group-header" style="cursor:default;">
        <div>
          <h3>SMP - Senior Management</h3>
          <p>${smpDocs.length} documents</p>
        </div>
      </header>
      <div class="ir-group-body">
        ${docList(smpDocs)}
      </div>
    </article>
  `;
}

function renderGroups() {
  const area = $('#groupsArea');
  const search = document.querySelector('.ir-search');
  if (search) search.style.display = (activeId === 'board' || activeId === 'committees' || activeId === 'policies' || activeId === 'shareholding' || activeId === 'financial' || activeId === 'moa') ? 'none' : '';
  if (activeId === 'board') { area.innerHTML = boardSectionHTML(); return; }
  if (activeId === 'committees') { area.innerHTML = committeesSectionHTML(); return; }
  if (activeId === 'policies') { area.innerHTML = policiesSectionHTML(); return; }
  if (activeId === 'financial') { area.innerHTML = financialSectionHTML(); return; }
  if (activeId === 'shareholding') { area.innerHTML = shareholdingSectionHTML(); return; }
  if (activeId === 'investorcontact') { area.innerHTML = contactSectionHTML(); return; }
  if (activeId === 'moa') { area.innerHTML = moaSectionHTML(); return; }

  const groups = DOCUMENT_GROUPS[activeId] || [];
  let filtered = groups;
  if (query.trim()) {
    const q = query.toLowerCase();
    filtered = groups
      .map((g) => ({ ...g, docs: g.docs.filter((d) => d.name.toLowerCase().includes(q)) }))
      .filter((g) => g.docs.length > 0 || g.title.toLowerCase().includes(q));
  }

  if (filtered.length === 0) {
    area.innerHTML = `
      <div class="ir-empty">
        <div class="ir-empty-icon">📂</div>
        <h3>${query ? 'No results found' : 'Coming soon'}</h3>
        <p>${query
        ? `Try a different search term — nothing matched "${esc(query)}".`
        : 'Documents for this section will be published here shortly.'}</p>
      </div>
    `;
    return;
  }

  area.innerHTML = filtered.map(groupCardHTML).join('');
}

function renderAside() {
  const aside = $('#asideArea');
  const groups = DOCUMENT_GROUPS[activeId] || [];
  const totalDocs = groups.reduce((s, g) => s + g.docs.length, 0);

  let topPanel = '';
  if (activeId === 'committees') {
    topPanel = `
      <div class="ir-panel-dark">
        <p class="ir-panel-title">Committees Overview</p>
        <ul class="ir-panel-list">
          ${COMMITTEES.map((c) => `
            <li><span class="lbl">${esc(c.title)}</span></li>
          `).join('')}
        </ul>
        <p class="ir-panel-note">Board Committees operate under defined terms of reference in compliance with the Companies Act, 2013 and SEBI (LODR) Regulations.</p>
      </div>
    `;
  } else if (activeId === 'board') {
    topPanel = `
      <div class="ir-panel-dark">
        <p class="ir-panel-title">Governance Principles</p>
        <ul class="ir-principles">
          <li><span class="num">1</span><span>Transparency in disclosures and timely communication with stakeholders.</span></li>
          <li><span class="num">2</span><span>Accountability through independent oversight and committee structure.</span></li>
          <li><span class="num">3</span><span>Ethical conduct guided by our Code of Conduct and SEBI regulations.</span></li>
          <li><span class="num">4</span><span>Long-term value creation for shareholders and the wider community.</span></li>
        </ul>
        <a class="ir-panel-btn" href="contact.html">View Board Committees →</a>
      </div>
    `;
  } else {
    topPanel = `
      <div class="ir-panel-dark">
        <p class="ir-panel-title">Quick Stats</p>
        <div class="ir-stats-rows">
          <div class="ir-stats-row"><span class="lbl">Document Groups</span><span class="val">${groups.length}</span></div>
          <div class="ir-stats-row"><span class="lbl">Total Files</span><span class="val green">${totalDocs}</span></div>
          <div class="ir-stats-row"><span class="lbl">Format</span><span class="pdf-tag">PDF</span></div>
        </div>
      </div>
    `;
  }

  const otherSections = SIDEBAR_CATEGORIES.filter((c) => c.id !== activeId).slice(0, 6);
  const otherList = `
    <div class="ir-panel-light">
      <p class="ir-panel-title">Other Sections</p>
      <ul class="ir-other-list">
        ${otherSections.map((c) => `
          <li>
            <button data-goto="${c.id}">
              ${catIcon(c.id, 'ir-other-img')}
              <span class="name">${esc(c.short)}</span>
              <span class="arrow">→</span>
            </button>
          </li>
        `).join('')}
      </ul>
    </div>
  `;

  const helpCard = `
    <div class="ir-help-card">
      <h4>Need help?</h4>
      <p>For investor queries, reach out to our grievance officer.</p>
      <a class="ir-help-btn" href="contact.html">Contact Investor Relations</a>
    </div>
  `;

  aside.innerHTML = topPanel + otherList + helpCard;

  aside.querySelectorAll('[data-goto]').forEach((b) =>
    b.addEventListener('click', () => { window.location.href = `${b.dataset.goto}.html`; })
  );
}

function renderAll() {
  renderIconNav();
  renderMeta();
  renderStats();
  renderGroups();
  renderAside();
}

/* ===== Init ===== */
document.addEventListener('DOMContentLoaded', () => {
  $('#year').textContent = new Date().getFullYear();
  $('#searchInput').addEventListener('input', (e) => { query = e.target.value; renderGroups(); });

  // Collapsible group cards
  $('#groupsArea').addEventListener('click', (e) => {
    const header = e.target.closest('.ir-group-header');
    if (!header) return;
    const card = header.closest('.ir-group-card');
    const open = card.classList.toggle('collapsed');
    header.setAttribute('aria-expanded', String(!open));
  });
  const burger = document.querySelector('.nav-hamburger');
  const navEl  = document.querySelector('nav');
  const navGroup = document.querySelector('.nav-group');
  if (navGroup) {
    navGroup.addEventListener('mouseenter', () => navGroup.classList.add('is-hovering'));
    navGroup.addEventListener('mouseleave', () => navGroup.classList.remove('is-hovering'));
  }
  if (burger && navEl) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('open');
      navEl.classList.toggle('open');
    });
  }
  renderAll();
});

// Handle mobile dropdown toggle
document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.nav-dropdown');
  dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector('a');
    if (link) {
      link.addEventListener('click', (e) => {
        if (window.innerWidth <= 1000) {
          e.preventDefault();
          dropdown.classList.toggle('active');
        }
      });
    }
  });
});
