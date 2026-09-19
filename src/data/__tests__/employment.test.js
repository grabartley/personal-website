import { describe, it, expect } from 'vitest';
import {
  aboutIntro,
  buildAboutIntro,
  buildHeadline,
  buildTimeline,
  currentRole,
  employmentEntries,
  findCurrentRole,
  findMostRecentRole,
  formatPeriod,
  headline,
  mostRecentRole,
  timeline,
} from '../employment';

const squadLeadBlurb = {
  role: 'I\'m a Senior Software Engineer and Squad Lead',
  employed: ', delivering scalable, high-performance systems that are core to our advertising platform.',
  past: ', where I delivered scalable, high-performance systems core to their advertising platform.',
};

const employedRole = {
  type: 'work',
  start: 'Oct 2026',
  title: 'Staff Software Engineer',
  headline: 'Staff Software Engineer | Platform Lead',
  organization: 'Acme',
  organizationUrl: 'https://acme.example/',
  aboutBlurb: squadLeadBlurb,
  description: 'Leading platform work',
};

const pastRole = {
  type: 'work',
  start: 'Jan 2024',
  end: 'Sep 2026',
  title: 'Senior Software Engineer (Squad Lead)',
  headline: 'Senior Software Engineer | AI Applications Squad Lead',
  organization: 'Yahoo',
  organizationUrl: 'https://www.yahooinc.com/',
  aboutBlurb: squadLeadBlurb,
  description: 'Led a squad',
};

const educationEntry = {
  type: 'education',
  start: '2022',
  end: '2024',
  title: '(1st) M.Sc. Computing',
  organization: 'Dublin City University',
};

describe('formatPeriod', () => {
  it('joins start and end with a dash', () => {
    expect(formatPeriod(pastRole)).toBe('Jan 2024 - Sep 2026');
  });

  it('renders a missing end date as Present', () => {
    expect(formatPeriod(employedRole)).toBe('Oct 2026 - Present');
  });

  it('renders an empty end date as Present', () => {
    expect(formatPeriod({ start: '2020', end: '' })).toBe('2020 - Present');
  });

  it('formats year-only education periods', () => {
    expect(formatPeriod(educationEntry)).toBe('2022 - 2024');
  });
});

describe('findCurrentRole', () => {
  it('returns null when every work entry has an end date', () => {
    expect(findCurrentRole([pastRole, educationEntry])).toBeNull();
  });

  it('returns the work entry with no end date', () => {
    expect(findCurrentRole([employedRole, pastRole])).toBe(employedRole);
  });

  it('ignores an education entry with no end date', () => {
    const ongoingStudy = { type: 'education', start: '2026', organization: 'DCU' };
    expect(findCurrentRole([ongoingStudy, pastRole])).toBeNull();
  });

  it('returns null for an empty timeline', () => {
    expect(findCurrentRole([])).toBeNull();
  });
});

describe('findMostRecentRole', () => {
  it('returns the first work entry, skipping education', () => {
    expect(findMostRecentRole([educationEntry, pastRole])).toBe(pastRole);
  });

  it('returns the current role when one exists', () => {
    expect(findMostRecentRole([employedRole, pastRole])).toBe(employedRole);
  });

  it('returns null when there is no work history', () => {
    expect(findMostRecentRole([educationEntry])).toBeNull();
  });
});

describe('buildHeadline', () => {
  it('falls back to the employer-neutral headline when between roles', () => {
    expect(buildHeadline(null)).toBe('Senior Software Engineer | Technical Lead');
  });

  it('appends the employer when a current role exists', () => {
    expect(buildHeadline(employedRole)).toBe('Staff Software Engineer | Platform Lead @ Acme');
  });

  it('falls back to a bare title, not the between-roles headline, when a role has no headline', () => {
    const noHeadline = { ...employedRole, headline: undefined };
    expect(buildHeadline(noHeadline)).toBe('Senior Software Engineer @ Acme');
    expect(buildHeadline(noHeadline)).not.toContain('Technical Lead');
  });
});

describe('buildAboutIntro', () => {
  it('uses present tense and links the current employer', () => {
    const intro = buildAboutIntro(employedRole, employedRole);
    expect(intro.before).toBe('I\'m a Senior Software Engineer and Squad Lead at ');
    expect(intro.employer).toEqual({ name: 'Acme', url: 'https://acme.example/' });
    expect(intro.after).toContain('delivering scalable');
    expect(intro.after).toContain('I work across the stack');
  });

  it('uses past tense and names the most recent employer when between roles', () => {
    const intro = buildAboutIntro(null, pastRole);
    expect(intro.before).toBe('I\'m a Senior Software Engineer and Squad Lead, most recently at ');
    expect(intro.employer).toEqual({ name: 'Yahoo', url: 'https://www.yahooinc.com/' });
    expect(intro.after).toContain('where I delivered');
    expect(intro.after).not.toContain('delivering scalable');
  });

  it('never claims a current employer when between roles', () => {
    const intro = buildAboutIntro(null, pastRole);
    expect(intro.before).not.toMatch(/Lead at $/);
  });

  it('carries a null url when the employer has no link', () => {
    const noUrl = { ...pastRole, organizationUrl: undefined };
    expect(buildAboutIntro(null, noUrl).employer).toEqual({ name: 'Yahoo', url: null });
  });

  it('drops the employer clause entirely when there is no work history', () => {
    const intro = buildAboutIntro(null, null);
    expect(intro.before).toBe('I\'m a Senior Software Engineer.');
    expect(intro.employer).toBeNull();
    expect(intro.after).toContain('I work across the stack');
  });

  it('takes its prose from the role, so a new employer never inherits stale copy', () => {
    const newRole = {
      ...employedRole,
      organization: 'Acme',
      aboutBlurb: {
        role: 'I\'m a Staff Software Engineer',
        employed: ', building developer platforms.',
        past: ', where I built developer platforms.',
      },
    };
    const intro = buildAboutIntro(newRole, newRole);
    expect(intro.before).toBe('I\'m a Staff Software Engineer at ');
    expect(intro.after).toContain('building developer platforms');
    expect(intro.after).not.toContain('advertising platform');
  });

  it('falls back to neutral prose when a role carries no blurb', () => {
    const noBlurb = { ...pastRole, aboutBlurb: undefined };
    const intro = buildAboutIntro(null, noBlurb);
    expect(intro.before).toBe('I\'m a Senior Software Engineer, most recently at ');
    expect(intro.after).toBe('. I work across the stack with a focus on backend architecture, distributed systems, and building reliable, maintainable services in production.');
  });
});

describe('buildTimeline', () => {
  it('maps entries to rendered period, title, organization and description', () => {
    expect(buildTimeline([pastRole])).toEqual([{
      period: 'Jan 2024 - Sep 2026',
      title: 'Senior Software Engineer (Squad Lead)',
      organization: 'Yahoo',
      description: 'Led a squad',
    }]);
  });

  it('renders an open-ended role as Present', () => {
    expect(buildTimeline([employedRole])[0].period).toBe('Oct 2026 - Present');
  });

  it('preserves entry order', () => {
    const periods = buildTimeline([employedRole, pastRole, educationEntry]).map((item) => item.period);
    expect(periods).toEqual(['Oct 2026 - Present', 'Jan 2024 - Sep 2026', '2022 - 2024']);
  });
});

describe('shipped employment data', () => {
  it('has no current role', () => {
    expect(currentRole).toBeNull();
  });

  it('names Yahoo as the most recent employer', () => {
    expect(mostRecentRole.organization).toBe('Yahoo');
  });

  it('exposes an employer-neutral headline', () => {
    expect(headline).toBe('Senior Software Engineer | Technical Lead');
    expect(headline).not.toContain('@');
  });

  it('reads the about intro in past tense', () => {
    expect(aboutIntro.before).toContain('most recently at');
    expect(aboutIntro.employer.name).toBe('Yahoo');
  });

  it('ends the most recent Yahoo role in Sep 2026', () => {
    expect(timeline[0].period).toBe('Jan 2024 - Sep 2026');
  });

  it('renders no timeline entry as Present', () => {
    expect(timeline.some((item) => item.period.includes('Present'))).toBe(false);
  });

  it('keeps the full historic timeline', () => {
    expect(timeline).toHaveLength(employmentEntries.length);
    expect(timeline[timeline.length - 1].title).toBe('(1st) B.Sc. Computer Applications');
  });

  it('has at most one open-ended work entry, so only one role can read as current', () => {
    const openRoles = employmentEntries.filter((entry) => entry.type === 'work' && !entry.end);
    expect(openRoles.length).toBeLessThanOrEqual(1);
  });

  it('gives every work entry a headline for the hero', () => {
    employmentEntries
      .filter((entry) => entry.type === 'work' && !entry.end)
      .forEach((entry) => expect(entry.headline).toBeTruthy());
  });

  it('gives every entry a start date and a type', () => {
    employmentEntries.forEach((entry) => {
      expect(entry.start).toBeTruthy();
      expect(['work', 'education']).toContain(entry.type);
    });
  });
});
