import React from 'react';
import { EOPage } from './EOPage';

interface EOmainProps {
  onNavigate?: (page: string) => void;
  onContactClick?: () => void;
  initialCategory?: string;
}

export const EOmain: React.FC<EOmainProps> = ({ onNavigate, onContactClick }) => {
  return <EOPage onNavigate={onNavigate} onContactClick={onContactClick} />;
};
