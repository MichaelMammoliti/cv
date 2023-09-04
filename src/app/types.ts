export interface PersonalDetails {
  name: string;
  position: string;
}

export interface Link {
  name: string;
  url: string;
  text: string;
  target?: string;
}

export interface DateRange {
  from: string;
  to: string;
}

export interface Experience {
  company?: {
    name: string;
    url: string;
  };
  project?: {
    name: string;
    url: string;
  };
  type: string;
  locationType: string;
  position: string;
  date: DateRange;
  description: string[];
  skills: string[];
}
