const BETWEEN_ROLES_HEADLINE = 'Senior Software Engineer | Technical Lead';

const YAHOO_URL = 'https://www.yahooinc.com/';

const aboutCopy = {
  employedConnector: ' at ',
  pastConnector: ', most recently at ',
  noEmployer: '.',
  closing: ' I work across the stack with a focus on backend architecture, distributed systems, and building reliable, maintainable services in production.',
};

function defaultAboutBlurb(role) {
  return {
    role: role ? `I'm a ${role.title}` : 'I\'m a software engineer',
    employed: '.',
    past: '.',
  };
}

const entries = [
  {
    type: 'work',
    start: 'Jan 2024',
    end: 'Sep 2026',
    title: 'Senior Software Engineer (Squad Lead)',
    headline: 'Senior Software Engineer | AI Applications Squad Lead',
    organization: 'Yahoo',
    organizationUrl: YAHOO_URL,
    aboutBlurb: {
      role: 'I\'m a Senior Software Engineer and Squad Lead',
      employed: ', delivering scalable, high-performance systems that are core to our advertising platform.',
      past: ', where I delivered scalable, high-performance systems core to their advertising platform.',
    },
    description: 'I led a feature squad within Yahoo\'s Ads Engineering division delivering reliable and performant AI application solutions at scale for Yahoo\'s core Ad business',
  },
  {
    type: 'work',
    start: 'Apr 2023',
    end: 'Dec 2023',
    title: 'Software Dev Engineer II (Technical Lead)',
    headline: 'Senior Software Engineer | Technical Lead',
    organization: 'Yahoo',
    organizationUrl: YAHOO_URL,
    description: 'Leading technical initiatives and engineering teams within Yahoo\'s Ads Engineering division',
  },
  {
    type: 'education',
    start: '2022',
    end: '2024',
    title: '(1st) M.Sc. Computing',
    organization: 'Dublin City University',
    description: 'First class honours Master\'s degree in Computing with major in Secure Software Engineering. Awarded best M.Sc. Computing Practicum by PwC across all majors (140+ students) in my year. Thesis: The Impact of Verification Feedback on Code Correctness in LLM-Generated Dafny Programs',
  },
  {
    type: 'work',
    start: 'Sep 2021',
    end: 'Apr 2023',
    title: 'Software Dev Engineer II',
    organization: 'Yahoo',
    organizationUrl: YAHOO_URL,
    description: 'Mid-level full stack development (Company transitioned from Verizon Media to Yahoo)',
  },
  {
    type: 'work',
    start: 'Aug 2021',
    end: 'Sep 2021',
    title: 'Software Dev Engineer II',
    organization: 'Verizon Media',
    description: 'Mid-level full stack development',
  },
  {
    type: 'work',
    start: 'Oct 2019',
    end: 'Aug 2021',
    title: 'Software Dev Engineer I',
    organization: 'Verizon Media',
    description: 'Junior-level full stack development',
  },
  {
    type: 'work',
    start: 'Aug 2018',
    end: 'Sep 2019',
    title: 'Associate Software Dev Engineer',
    organization: 'Verizon Media',
    description: 'Entry-level full stack development. First role out of university',
  },
  {
    type: 'work',
    start: 'Apr 2017',
    end: 'Sep 2017',
    title: 'Software Engineering Intern',
    organization: 'CoderDojo Foundation',
    description: 'Full stack development of the CoderDojo community platform (Zen)',
  },
  {
    type: 'education',
    start: '2014',
    end: '2018',
    title: '(1st) B.Sc. Computer Applications',
    organization: 'Dublin City University',
    description: 'First class honours Bachelor\'s degree in Software Engineering',
  },
];

export function formatPeriod(entry) {
  return `${entry.start} - ${entry.end || 'Present'}`;
}

export function findCurrentRole(timelineEntries) {
  return timelineEntries.find((entry) => entry.type === 'work' && !entry.end) || null;
}

export function findMostRecentRole(timelineEntries) {
  return timelineEntries.find((entry) => entry.type === 'work') || null;
}

export function buildHeadline(currentRole) {
  if (!currentRole) {
    return BETWEEN_ROLES_HEADLINE;
  }
  return `${currentRole.headline || currentRole.title} @ ${currentRole.organization}`;
}

export function buildAboutIntro(currentRole, mostRecentRole) {
  const role = currentRole || mostRecentRole;
  const blurb = (role && role.aboutBlurb) || defaultAboutBlurb(role);
  if (!role) {
    return { before: blurb.role + aboutCopy.noEmployer, employer: null, after: aboutCopy.closing };
  }
  const employed = Boolean(currentRole);
  return {
    before: blurb.role + (employed ? aboutCopy.employedConnector : aboutCopy.pastConnector),
    employer: { name: role.organization, url: role.organizationUrl || null },
    after: (employed ? blurb.employed : blurb.past) + aboutCopy.closing,
  };
}

export function buildTimeline(timelineEntries) {
  return timelineEntries.map((entry) => ({
    period: formatPeriod(entry),
    title: entry.title,
    organization: entry.organization,
    description: entry.description,
  }));
}

export const employmentEntries = entries;
export const currentRole = findCurrentRole(entries);
export const mostRecentRole = findMostRecentRole(entries);
export const headline = buildHeadline(currentRole);
export const aboutIntro = buildAboutIntro(currentRole, mostRecentRole);
export const timeline = buildTimeline(entries);
