export const siteConfig = {
  brandName: 'PROF. MOHD. SHARIM',
  brandSubtitle: 'Admissions & Placements Hub',
  consultantName: 'Prof. Mohd. Sharim',
  consultantTitle: 'Industrial QA & QMS Leader | Education & Career Strategist',
  tagline: 'Complete Career Support: Admissions, Skills & Placements',
  subTagline: 'Western UP, Uttarakhand & Pan-India Student Guidance',

  phone: '+91 8218322073',
  phoneDisplay: '+91 82183 22073',
  whatsappChatNumber: '919548156602',
  email: 'mohd.sharim@live.com',
  location: 'Jhabrera, Uttarakhand, India',
  address: 'Jhabrera, Haridwar / Roorkee Region, Uttarakhand – 247665',
  websites: ['nextdisha.com', 'sharim.webnode.in'],
  copyright: '© 2026 Prof. Mohd. Sharim — Admissions & Placements Hub. All Rights Reserved',

  navLinks: [
    { label: 'HOME', to: '/' },
    {
      label: 'ADMISSIONS',
      to: '/admissions/college-mapping',
      hasDropdown: true,
      children: [
        { label: 'College & Course Mapping', to: '/admissions/college-mapping' },
        { label: 'Form Filling & Choice Locking', to: '/admissions/choice-locking' },
        { label: 'CUET / JEECUP / NEET Support', to: '/admissions/exam-support' },
        { label: 'Admission Fee Packages', to: '/admissions/packages' },
      ],
    },
    {
      label: 'PLACEMENTS',
      to: '/placements/cv-linkedin',
      hasDropdown: true,
      children: [
        { label: 'CV & LinkedIn Makeover', to: '/placements/cv-linkedin' },
        { label: 'Mock Interviews & Grooming', to: '/placements/mock-interviews' },
        { label: 'Pharma & Corporate Job Referrals', to: '/placements/job-referrals' },
        { label: 'Placement Packages', to: '/placements/packages' },
      ],
    },
    {
      label: 'TRAININGS',
      to: '/trainings/pharma-skills',
      hasDropdown: true,
      children: [
        { label: 'Pharma QA/QC & Sales Training', to: '/trainings/pharma-skills' },
        { label: 'Soft Skills & English Fluency', to: '/trainings/soft-skills' },
        { label: 'Computer, Excel & Documentation', to: '/trainings/computer-excel' },
        { label: 'Entrance Crash Courses', to: '/trainings/crash-courses' },
      ],
    },
    { label: 'ABOUT PROF. SHARIM', to: '/about' },
    { label: 'CONTACT US', to: '/contact' },
  ],

  hero: {
    badge: '🎓 #1 ADMISSION COUNSELLING & PLACEMENT PLATFORM',
    titlePrefix: 'Start your',
    titleHighlight: 'admission & placement',
    titleSuffix: 'journey',
    titleAccent: 'Today!',
    description:
      'Complete career acceleration by Prof. Mohd. Sharim (17+ Yrs Industry & Academic Leadership). Secure verified college seats (JEECUP, CUET, NEET, B.Pharm, D.Pharm, B.Tech) and guaranteed placement support with top recruiter networks.',
    ctaText: 'EXPLORE ADMISSIONS & PLACEMENTS',
    secondaryCtaText: 'BOOK FREE COUNSELLING',
    image: '/images/her.png',
  },

  sponsors: {
    tagline: 'TRUSTED BY RECRUITERS, UNIVERSITIES & INDUSTRY ACCREDITATIONS',
    items: [
      { name: 'WHO-GMP', subtitle: 'COMPLIANCE' },
      { name: 'AICTE', subtitle: 'APPROVED' },
      { name: 'PCI', subtitle: 'PHARMACY' },
      { name: 'CUET / JEECUP', subtitle: 'PORTALS' },
      { name: 'PHARMA HR', subtitle: 'NETWORK' },
      { name: 'TOP TECH', subtitle: 'RECRUITERS' },
    ],
  },

  aboutServices: {
    tag: 'CORE ADMISSION & PLACEMENT SUPPORT',
    title: 'Admission & Placement guidance is about securing your dream seat & top job',
    description:
      'Navigating competitive exams, state counselling portals, seat allocation rounds, and job interviews can be daunting. Led by Prof. Mohd. Sharim (Ph.D. Pursuing, M.Pharm Manipal, 17+ Years Pharma QA Head), we provide end-to-end profile evaluation, error-free portal choice locking, and direct HR connections.',
    ctaText: 'VIEW PACKAGES & PRICING',
    image: '/images/coaching_workshop.jpg',
    badge: {
      title: 'Prof. Mohd. Sharim (17+ Yrs Exp)',
      description:
        'Industrial Quality Leader & Career Strategist. Mentored 2,000+ candidates across Western UP & Uttarakhand into premier universities & multinational companies.',
    },
  },

  quote: {
    title: 'The time you waste worrying about cutoffs & interviews is the enemy of your success',
    subtitle:
      'Eliminate confusion and rejection. Our structured roadmap empowers students and job seekers with verified college choices, scholarship guidance, and job interview confidence.',
  },

  services: [
    {
      id: 'admission-counselling',
      icon: 'graduation-cap',
      badge: 'TOP ADMISSION SERVICE',
      title: 'College Admission Counselling',
      description:
        'Profile assessment, Govt vs Private college mapping, online form filling, CUET/JEECUP/NEET choice locking, and seat allotment follow-ups across Western UP, Uttarakhand & Pan-India.',
      buttonText: 'GET ADMISSION SUPPORT',
      featured: false,
      packages: 'Basic (₹500-₹1.5k) • Standard (₹2k-₹5k) • Premium (₹6k-₹10k+)',
    },
    {
      id: 'placement-services',
      icon: 'briefcase',
      badge: 'FEATURED PLACEMENT PROGRAM',
      title: 'Placements & Job Acceleration',
      description:
        'ATS-compliant CV & LinkedIn building, 1:1 mock interview drills, direct HR referrals in Pharma, IT, and Corporate sectors, plus pooled campus recruitment drives.',
      buttonText: 'GET HIRED NOW',
      featured: true,
      packages: 'CV + Interview (₹500-₹1.5k) • Full Placement (₹2k-₹5k) • College Retainers',
    },
    {
      id: 'skill-trainings',
      icon: 'video',
      badge: 'JOB-READY SKILLS',
      title: 'Skill Trainings & Certifications',
      description:
        'Short-term practical modules in Soft Skills, English Communication, Pharma QA/QC, GMP documentation, Excel/Tally, and entrance crash courses.',
      buttonText: 'START TRAINING',
      featured: false,
      packages: 'Short Modules (₹1k-₹3k) • Certificate Masterclass (₹3k-₹10k)',
    },
  ],

  counselingProcess: {
    title: 'Our Proven 4-Step SOP Roadmap',
    subtitle:
      'From your first consultation to confirmed admission and successful job placement — our structured standard operating procedure ensures 100% clarity.',
    bgImage: '/images/counseling_bg.jpg',
    steps: [
      {
        number: '01',
        name: 'Listen',
        icon: 'headphones',
        text: 'Initial Counselling: In-depth assessment of your academic record, career interests, budget, and location preferences.',
      },
      {
        number: '02',
        name: 'Plan',
        icon: 'clipboard-check',
        text: 'Mapping & Shortlisting: Cutoff analytics, Govt/Private options, job roles, and customized strategy.',
      },
      {
        number: '03',
        name: 'Action',
        icon: 'target',
        text: 'Execution: Precision form filling, portal choice locking, ATS resume building, and mock interview drills.',
      },
      {
        number: '04',
        name: 'Grow',
        icon: 'trending-up',
        text: 'Outcome Confirmation: Confirmed seat allotment, scholarship assistance, and job offer letter handover.',
      },
    ],
  },

  whyChooseUs: {
    tag: 'WHY CHOOSE PROF. MOHD. SHARIM',
    title: "We're here to guarantee your education & career success",
    description:
      'Backed by 17+ years of pharmaceutical industrial quality leadership, WHO-GMP audit excellence, and deep academic networks in Western UP & Uttarakhand.',
    ctaText: 'READ FULL PROFILE',
    bullets: [
      '17+ Years of trusted industrial (Head QA) & academic leadership',
      'End-to-end admission counselling & error-free choice locking',
      'Direct hiring tie-ups with Pharma MNCs, Healthcare & Tech firms',
      'Affordable, transparent fee structure with zero hidden commissions',
    ],
    features: [
      {
        id: 'expert-coaches',
        icon: 'award',
        title: 'Master Leadership',
        description: 'Ph.D. (Pharmacy) pursuing, M.Pharm (Manipal), ASQ Certified Quality Leader & Career Strategist.',
      },
      {
        id: 'proven-results',
        icon: 'line-chart',
        title: '2,000+ Placed & Admitted',
        description: 'Proven track record of placing students in top government colleges, universities, and MNCs.',
      },
      {
        id: 'flexible-programs',
        icon: 'layout-grid',
        title: 'Clear Package Options',
        description: 'From ₹500 form assistance to full-season admission and placement packages.',
      },
      {
        id: 'ongoing-support',
        icon: 'headset',
        title: 'Direct Personal Support',
        description: 'Direct WhatsApp and phone access with Prof. Sharim till final admission & job joining.',
      },
    ],
  },

  testimonials: {
    tag: 'WHAT STUDENTS & JOB CANDIDATES SAY',
    title: 'Success stories from our admitted students & placed candidates',
    items: [
      {
        id: 'priya',
        quote:
          'Prof. Sharim guided me through the complex CUET choice-locking rounds. I secured admission in my dream B.Pharm college with a scholarship!',
        name: 'Priya Sharma',
        role: 'B.Pharm Student (Western UP)',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
        featured: false,
      },
      {
        id: 'rahul',
        quote:
          'The interview preparation, CV rebuild, and Pharma sales training gave me immense confidence. I got hired in my first campus placement drive!',
        name: 'Rahul Mehta',
        role: 'Pharma QA Executive (Solitaire Pharmacia)',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
        featured: true,
      },
      {
        id: 'anjali',
        quote:
          'Excellent step-by-step guidance from profile mapping to document verification. Prof. Sharim made the entire counselling seamless.',
        name: 'Anjali Verma',
        role: 'Software Engineer & Graduate (Delhi NCR)',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
        featured: false,
      },
    ],
  },

  stats: [
    {
      icon: 'users',
      value: '2000+',
      label: 'Students & Candidates Guided',
    },
    {
      icon: 'book-open',
      value: '50+',
      label: 'Partner Colleges & Recruiters',
    },
    {
      icon: 'shield-check',
      value: '100%',
      label: 'Admission & Placement Support',
    },
    {
      icon: 'award',
      value: '17+',
      label: 'Years Industrial & Academic Exp.',
    },
  ],

  blog: {
    tag: 'LATEST ADMISSION & CAREER INSIGHTS',
    title: 'Explore our latest articles & guides',
    ctaText: 'VIEW ALL ARTICLES',
    articles: [
      {
        id: 'mindset-shifts',
        category: 'ADMISSIONS',
        title: '5 Mindset Shifts for JEECUP, CUET & NEET Aspirants',
        image: '/images/blog_mindset.jpg',
        readTime: '4 min read',
        excerpt:
          'Transform your exam preparation and overcome rank anxiety with these 5 proven frameworks for peak academic performance.',
        content: `Academic breakthrough starts with strategic clarity.

1. **Shift from Panic to Systematic Choice Locking:** Analyze cutoffs, seat matrices, and college rankings before finalizing choice lists.
2. **Master the Counselling Timeline:** Missing a single allotment verification deadline can forfeit your allotted seat.
3. **Budget & Hostel Optimization:** Verify fee structures, hidden charges, and campus placement track records.
4. **Develop Soft Skills Early:** High scores earn interview calls; effective communication closes the deal.
5. **Get Mentored by Experienced Academicians:** Professional counselling prevents multi-year academic missteps.`,
      },
      {
        id: 'how-coaching-helps',
        category: 'PLACEMENTS',
        title: 'How Strategic Placement Coaching Lands You Top Pharma & Tech Jobs',
        image: '/images/blog_journal.jpg',
        readTime: '5 min read',
        excerpt:
          'Discover why students and fresh graduates in Western UP and Uttarakhand leverage ATS CV building and mock drills to crack competitive interviews.',
        content: `Getting hired in leading pharmaceutical and corporate organizations requires practical alignment with employer expectations:

- **ATS-Compliant Resume Architecture:** Ensure your CV passes automated screening filters for QA, QC, Sales, or Tech roles.
- **Mastering Technical & SOP Questions:** Prepare for WHO-GMP, regulatory audit, or technical coding rounds with domain leaders.
- **Personal Branding on LinkedIn:** Optimize your profile to attract direct recruiters and HR managers.`,
      },
      {
        id: 'morning-habits',
        category: 'SKILL DEVELOPMENT',
        title: 'Essential Skills That Pharma & Corporate Recruiters Look For in 2026',
        image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=80',
        readTime: '5 min read',
        excerpt:
          'A breakdown of the top technical and interpersonal competencies that give candidates an unfair advantage in placement drives.',
        content: `Leading employers look beyond degrees for high-potential candidates who understand execution:

1. **Regulatory & Quality Awareness:** Understanding GMP, SOP compliance, and basic quality management.
2. **Data & Documentation Proficiency:** Hands-on experience with Excel, reporting, and systematic record-keeping.
3. **High-Impact Communication:** Confident articulation in professional English and persuasive presentation skills.`,
      },
    ],
  },

  ctaBanner: {
    title: 'Ready to secure your dream college seat or job?',
    subtitle: 'Call Prof. Mohd. Sharim directly at +91 82183 22073 or schedule a free 1-on-1 career counselling session.',
    ctaText: 'BOOK FREE COUNSELLING SESSION',
    image: '/images/her.png',
  },

  footer: {
    description:
      'Complete career, admission counselling, skill development, and placement support by Prof. Mohd. Sharim (17+ Yrs Exp, Ph.D. Pursuing, M.Pharm Manipal). Serving Western UP, Uttarakhand & Pan-India.',
    socials: [
      { name: 'Facebook', href: 'https://facebook.com' },
      { name: 'Twitter', href: 'https://twitter.com' },
      { name: 'LinkedIn', href: 'https://linkedin.com' },
      { name: 'Instagram', href: 'https://instagram.com' },
    ],
    quickLinks: [
      { label: 'Home', to: '/' },
      { label: 'About Prof. Sharim', to: '/about' },
      { label: 'Admission Packages', to: '/admissions/packages' },
      { label: 'Placement Packages', to: '/placements/packages' },
      { label: 'Contact Us', to: '/contact' },
    ],
    servicesLinks: [
      { label: 'College & Course Mapping', to: '/admissions/college-mapping' },
      { label: 'Form Filling & Choice Locking', to: '/admissions/choice-locking' },
      { label: 'CV & LinkedIn Makeover', to: '/placements/cv-linkedin' },
      { label: 'Mock Interviews & Grooming', to: '/placements/mock-interviews' },
      { label: 'Pharma QA/QC & Sales Training', to: '/trainings/pharma-skills' },
      { label: 'Entrance Crash Courses', to: '/trainings/crash-courses' },
    ],
  },
}
