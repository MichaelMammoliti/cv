import clsx from 'clsx';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Stack } from './components/Grid/Stack';
import { experience, personalDetails, socials } from './data/cv';
import { Experience } from './types';

interface SkillPillProps {
  children: string;
}

const SkillPill = ({ children }: SkillPillProps) => (
  <div className="pill">
    <Text size={0.7} block>
      {children}
    </Text>
  </div>
);

interface TextProps {
  size?: number;
  weight?: number;
  block?: boolean;
  children: React.ReactNode;
}

const Text = ({ size, children, weight, block }: TextProps) => (
  <span
    style={{
      fontSize: `${size}rem`,
      display: block ? 'block' : 'inline',
    }}
    className={clsx('text', {
      [`weight-${weight}`]: weight,
    })}
  >
    {children}
  </span>
);

interface LinkProps {
  href: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  children: React.ReactNode;
}

const Link = ({ href, target, children }: LinkProps) => (
  <a href={href} target={target}>
    {children}
  </a>
);

const Socials = () => (
  <div>
    {socials.map((social, index) => (
      <Text key={index}>
        <Link href={social.url} target={social.target}>
          {social.text}
        </Link>
        {index !== socials.length - 1 && ' • '}
      </Text>
    ))}
  </div>
);

const Header = () => (
  <Stack gap={0.4}>
    <Text size={2.2}>
      <Text weight={800}>{personalDetails.name}</Text> |{' '}
      {personalDetails.position}
    </Text>

    <Socials />
  </Stack>
);

const displayDate = (dateStr: string) => {
  if (dateStr.toLocaleLowerCase() === 'present') {
    return dateStr;
  }

  const d = new Date(dateStr);

  if (d.toString() === 'Invalid Date') {
    return 'Invalid Date';
  }

  const month = d.toLocaleString('default', { month: 'short' });
  const year = d.getFullYear();

  return `${month} ${year}`;
};

const ExperienceSkills = ({ skills }: Experience) => (
  <div>
    <Stack direction="row" gap={0.2}>
      {skills?.map((skill, index) => (
        <SkillPill key={index}>{skill}</SkillPill>
      ))}
    </Stack>
  </div>
);

const ExperienceHeadline = ({
  company,
  type,
  locationType,
  position,
  project,
}: Experience) => (
  <Text weight={800}>
    {[position, company?.name || project?.name].filter(Boolean).join(' @ ')} |{' '}
    {[type, locationType].filter(Boolean).join(' - ')}
  </Text>
);

export interface BulletPointsProps {
  items: string[];
}

const BulletPoints = ({ items }: BulletPointsProps) => (
  <ul>
    {items.map((item, index) => (
      <li key={index}>
        <Text>
          {item}
          {index === items.length - 1 ? '.' : ';'}
        </Text>
      </li>
    ))}
  </ul>
);

const ExperienceDescription = ({ description }: Experience) => (
  <BulletPoints items={description} />
);

const ExperienceDates = ({ date }: Experience) => (
  <Text weight={800}>
    {displayDate(date?.from)} - {displayDate(date?.to)}
  </Text>
);

const ExperienceItem = (props: Experience) => (
  <div className="section">
    <Stack gap={0.4} fullWidth>
      <Stack direction="row" fullWidth justifyContent="space-between">
        <ExperienceHeadline {...props} />
        <ExperienceDates {...props} />
      </Stack>

      <ExperienceSkills {...props} />
      <ExperienceDescription {...props} />
    </Stack>
  </div>
);

const getTitle = () => {
  const year = new Date().getFullYear();
  const lastExperienceCompanyOrProject =
    experience[0].company?.name || experience[0].project?.name;

  return [
    `${personalDetails.name.replace(' ', '')}CV`,
    year,
    lastExperienceCompanyOrProject,
  ]
    .filter(Boolean)
    .join('_');
};

export const App = () => (
  <>
    <Helmet>
      <title>{getTitle()}</title>
    </Helmet>

    <Stack gap={2}>
      <Header />

      <Stack gap={2}>
        {experience.map((experienceItem, index) => (
          <div key={index}>
            <ExperienceItem key={index} {...experienceItem} />
          </div>
        ))}
      </Stack>
    </Stack>
  </>
);
