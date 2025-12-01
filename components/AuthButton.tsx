import React from 'react';

type Provider = 'google' | 'github' | 'facebook' | 'twitter';

type Props = {
  provider: Provider;
  label: string;
  baseStyles: string;
  styles?: Record<Provider, string>;
};

const GoogleSvg = '/google.svg';

export default function AuthButton({ provider, label, baseStyles, styles }: Props) {
  const icons: Record<Provider, React.ReactNode> = {
    google: <img src={GoogleSvg} alt="Google icon" width={20} height={20} />,
    github: '⚡',
    facebook: '📘',
    twitter: '🐦',
  };

  return (
    <button
      className={`${baseStyles} ${styles?.[provider] ?? ''}`}
      aria-label={`Sign in with ${label || provider}`}
    >
      <span className="text-xl">{icons[provider]}</span>
      {label}
    </button>
  );
}