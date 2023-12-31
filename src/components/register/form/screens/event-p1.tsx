import React from 'react';
import clsx from 'clsx';

import Checkboxes from 'components/form/Checkboxes';
import Select from 'components/form/Select';
import Scrollbars from 'react-custom-scrollbars-2';
import styles from './styles.module.scss';

const interestOptions = [
  { label: 'Attending technical workshops', value: 'Attending technical workshops' },
  { label: 'Submitting a project to win prizes', value: 'Submitting a project to win prizes' },
  { label: 'Mini-Events (e.g. game tournaments)', value: 'Mini-Events (e.g. game tournaments)' },
  { label: 'Meeting new people', value: 'Meeting new people' },
  { label: 'Working with mentors to get feedback', value: 'Working with mentors to get feedback' },
  { label: 'Company Q&As and Networking events', value: 'Company Q&As and Networking events' },
  { label: 'Pitching Shark Tank projects', value: 'Pitching Shark Tank projects' },
  { label: 'Other', value: 'Other', isOther: true },
];

const Event = (): JSX.Element => (
  <Scrollbars className={clsx(styles.screen, styles.eventQuestions)} renderView={(props) => <div className={styles.scrollbox} {...props} />} renderTrackHorizontal={(props) => <div className={styles.horizontalScrollbar} {...props} />}>
    <h1 className={styles.title}>HackIllinois Questions</h1>
    <p className={styles.text}>Which of these aspects of the hackathon would you most be interested in engaging in?</p>
    <Checkboxes
      className={styles.checkboxes}
      name="interests"
      options={interestOptions}
    />
    <br />
  </Scrollbars>
);

export default Event;
