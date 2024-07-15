export const validateEmail = (email: string): boolean => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
};

export const validatePassword = (password: string): boolean => {
  // Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character
  const re =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return re.test(password);
};

export const validateName = (name: string): boolean => {
  return name.length >= 2 && name.length <= 50;
};

export const validateRequired = (value: string): boolean => {
  return value.trim().length > 0;
};

export interface ValidationError {
  [key: string]: string;
}

export const validateForm = (values: {
  [key: string]: string;
}): ValidationError => {
  const errors: ValidationError = {};

  if (!validateRequired(values.email)) {
    errors.email = 'Email is required';
  } else if (!validateEmail(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!validateRequired(values.password)) {
    errors.password = 'Password is required';
  } else if (!validatePassword(values.password)) {
    errors.password =
      'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character';
  }

  if (values.firstName && !validateName(values.firstName)) {
    errors.firstName = 'First name must be between 2 and 50 characters';
  }

  if (values.lastName && !validateName(values.lastName)) {
    errors.lastName = 'Last name must be between 2 and 50 characters';
  }

  return errors;
};
