// Utility functions for departments and schemes

export interface Department {
  id: string;
  name: {
    en: string;
    hi: string;
  };
  icon: string;
  description: {
    en: string;
    hi: string;
  };
  website: string;
  contact: {
    phone: string;
    email: string;
    helpline: string;
  };
  office: {
    address: {
      en: string;
      hi: string;
    };
    pincode: string;
  };
  personsOfContact: Array<{
    name: string;
    designation: {
      en: string;
      hi: string;
    };
    phone: string;
    email: string;
  }>;
}

export interface Scheme {
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
  process: {
    en: string[];
    hi: string[];
  };
  contact: {
    phone: string;
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
  guidelines: {
    en: string;
    hi: string;
  };
  applicationForm: {
    en: string;
    hi: string;
  };
  website: string;
  status: string;
  lastUpdated: string;
  notices: {
    en: string[];
    hi: string[];
  };
}

export interface SchemeData {
  schemes: Scheme[];
}

// Fetch all departments
export const fetchDepartments = async (): Promise<{ departments: Department[] }> => {
  try {
    // const response = await fetch('/data/departments.json');
    const response = await fetch('http://localhost:8000/api/departments')
    if (!response.ok) {
      throw new Error('Failed to fetch departments');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching departments:', error);
    return { departments: [] };
  }
};

// Fetch schemes for a specific department
export const fetchSchemes = async (departmentId: string): Promise<SchemeData> => {
  try {
    // const response = await fetch(`/data/schemes/${departmentId}.json`);
    const response = await fetch(`http://localhost:8000/api/schemes/${departmentId}`)
    if (!response.ok) {
      throw new Error(`Failed to fetch schemes for ${departmentId}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching schemes for ${departmentId}:`, error);
    return { schemes: [] };
  }
};

// Get a specific department by ID
export const getDepartmentById = async (departmentId: string): Promise<Department | null> => {
  const data = await fetchDepartments();
  return data.departments.find(dept => dept.id === departmentId) || null;
};

// Get a specific scheme by department ID and scheme ID
export const getSchemeById = async (departmentId: string, schemeId: string): Promise<Scheme | null> => {
  const data = await fetchSchemes(departmentId);
  return data.schemes.find(scheme => scheme.id === schemeId) || null;
};

// Get total number of schemes across all departments
export const getTotalSchemeCount = async (): Promise<number> => {
  const departments = await fetchDepartments();
  let totalCount = 0;
  
  for (const department of departments.departments) {
    const schemes = await fetchSchemes(department.id);
    totalCount += schemes.schemes.length;
  }
  
  return totalCount;
};
