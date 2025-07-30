interface SakshamScheme {
  id: string;
  name: {
    en: string;
    hi: string;
  };
  description: {
    en: string;
    hi: string;
  };
  benefits: {
    en: string[];
    hi: string[];
  };
  eligibility: {
    en: string[];
    hi: string[];
  };
  contact: {
    phone: string[];
    email: string;
    office: {
      en: string;
      hi: string;
    };
  };
  documents: {
    en: string[];
    hi: string[];
  };
  website: string;
  status: string;
  lastUpdated: string;
  notices: {
    en: string[];
    hi: string[];
  };
}