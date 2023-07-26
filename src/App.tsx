import { Experience, experience, personalDetails, socials } from './data/cv';

const Header = () => (
  <div>
    <div>
      <span className="text size-20">
        <span className="text bold">{personalDetails.name}</span> |{' '}
        {personalDetails.position}
      </span>
    </div>

    <div className="spacer size-3" />

    <div>
      <span>
        {socials.map((social, index) => (
          <span key={index}>
            <a href={social.url}>{social.text}</a>
            {index !== socials.length - 1 && ' • '}
          </span>
        ))}
      </span>
    </div>
  </div>
);

const ExperienceItem = ({
  company,
  type,
  locationType,
  position,
  date,
  description,
}: Experience) => {
  const ExperienceHeadline = () => (
    <span className="text bold">
      {[position, company.name].filter(Boolean).join(' @ ')} |{' '}
      {[type, locationType].filter(Boolean).join(' - ')}
    </span>
  );

  return (
    <div className="section">
      <div className="stack">
        <ExperienceHeadline />
        <span className="text bold">{date}</span>
      </div>

      <div className="spacer size-6" />

      <ul>
        {description.map((paragraph, index) => (
          <li key={index}>
            <span>{paragraph}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const App = () => (
  <div className="paper a4">
    <div className="paper inner">
      <Header />
      <div className="spacer" />
      <div className="spacer" />
      {experience.map((experienceItem, index) => (
        <>
          {!!index && <div className="spacer size-16" />}
          <ExperienceItem key={index} {...experienceItem} />
        </>
      ))}
    </div>
  </div>
);
