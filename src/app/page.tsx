import { experience, personalDetails, socials } from './_data/data/cv';
import { Experience } from './types';

interface SkillPillProps {
  children: string;
}

const SkillPill = ({ children }: SkillPillProps) => (
  <span className="pill">{children}</span>
);

const Header = () => (
  <div>
    <div>
      <span className="text size-20">
        <span className="text bold">{personalDetails.name}</span> |{' '}
        {personalDetails.position}
      </span>
    </div>

    <div className="spacer size-4" />

    <div>
      <span>
        {socials.map((social, index) => (
          <span key={index}>
            <a href={social.url} target={social.target}>
              {social.text}
            </a>
            {index !== socials.length - 1 && ' • '}
          </span>
        ))}
      </span>
    </div>
  </div>
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

const ExperienceItem = ({
  company,
  type,
  locationType,
  position,
  date,
  description,
  skills,
  project,
}: Experience) => {
  const ExperienceHeadline = () => (
    <span className="text bold">
      {[position, company?.name || project?.name].filter(Boolean).join(' @ ')} |{' '}
      {[type, locationType].filter(Boolean).join(' - ')}
    </span>
  );

  return (
    <div className="section">
      <div className="flex space-between">
        <ExperienceHeadline />

        <span className="text bold">
          {displayDate(date?.from)} - {displayDate(date?.to)}
        </span>
      </div>

      <div className="spacer size-4" />

      <div className="flex gap">
        {skills.map((skill, index) => (
          <SkillPill key={index}>{skill}</SkillPill>
        ))}
      </div>

      <div className="spacer size-4" />

      <ul>
        {description.map((paragraph, index) => (
          <li key={index}>
            <span>
              {paragraph}
              {index === description.length - 1 ? '.' : ';'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

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

    <div className="paper a4">
      <div className="paper inner">
        <Header />

        <div className="spacer size-16" />

        {experience.map((experienceItem, index) => (
          <div key={index}>
            {!!index && <div className="spacer size-12" />}
            <ExperienceItem key={index} {...experienceItem} />
          </div>
        ))}
      </div>
    </div>
  </>
);
