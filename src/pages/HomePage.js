import React from 'react';

import { Intro } from '../components/home/Intro';
import { Users } from '../components/home/Users';
import { Benefits } from '../components/home/Benefits';
import { Productivity } from '../components/home/Productivity';
import { WhyChooseUS } from '../components/home/WhyChooseUs';
import { Versatile } from '../components/home/Versatile';
import { Modes } from '../components/home/Modes';
import { MultiLanguage } from '../components/home/MultiLanguage';
import { FileWizard } from '../components/home/FileWizard';
import { Integration } from '../components/home/Integration';
import { Unquestionable } from '../components/home/Unquestionable';
import { Feedback } from '../components/home/Feedback';
import { FAQs } from '../components/home/FAQ';
import { Promises } from '../components/home/Promises';
import { StartToday } from '../components/home/StartToday';

export const Home = () => {
  return (
    <div className='d-flex flex-column'>
      <Intro />
      <Users />
      <Benefits />
      <Productivity />
      <WhyChooseUS />
      <Versatile />
      <Modes />
      <MultiLanguage />
      <FileWizard />
      <Integration />
      <Unquestionable />
      <Feedback />
      <Promises />
      <StartToday />
      <FAQs />
    </div>
  )
};