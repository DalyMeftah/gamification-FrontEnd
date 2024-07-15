import React from 'react';
import Input from '../common/Input';
import Button from '../common/Button';

interface AuthFormProps {
  onSubmit: (data: any) => void;
  fields: Array<{
    name: string;
    label: string;
    type: string;
  }>;
  submitText: string;
}

const AuthForm: React.FC<AuthFormProps> = ({
  onSubmit,
  fields,
  submitText,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {fields.map((field) => (
        <Input
          key={field.name}
          id={field.name}
          name={field.name}
          type={field.type}
          label={field.label}
          required
        />
      ))}
      <div>
        <Button type="submit">{submitText}</Button>
      </div>
    </form>
  );
};

export default AuthForm;
