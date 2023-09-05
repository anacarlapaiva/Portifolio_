import React from 'react';
import {
  ProgressBar,
  ProgressBarActived,
} from './styles'; 

interface SkillProps {
  icon: React.ReactNode;
  percentage: string; 
}

export const SkillItem = ({ icon, percentage }: SkillProps) => {
  return (
    <div>
      {icon}
      <ProgressBar>
        <ProgressBarActived actived={percentage} />
      </ProgressBar>
    </div>
  );
};

