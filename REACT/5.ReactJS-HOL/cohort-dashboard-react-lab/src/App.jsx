import React from 'react';
import CohortDetails from './components/CohortDetails.jsx';

const cohorts = [
  {
    cohortCode: 'INTADMDF10 - .NET FSD',
    startDate: '22-Feb-2022',
    currentStatus: 'Scheduled',
    coachName: 'John Doe',
    trainerName: 'Ms. Raksha',
  },
  {
    cohortCode: 'ADM21JF014 - Java FSD',
    startDate: '10-Sep-2021',
    currentStatus: 'Ongoing',
    coachName: 'Ms. Sneha',
    trainerName: 'Mr. Vikram',
  },
  {
    cohortCode: 'CDBJF21025 - Java FSD',
    startDate: '24-Dec-2021',
    currentStatus: 'Ongoing',
    coachName: 'Mr. Raman',
    trainerName: 'Ms. Lavanya',
  },
];

function App() {
  return (
    <main className="dashboard">
      <h1>Cohorts Details</h1>
      <section aria-label="Cohort details">
        {cohorts.map((cohort) => (
          <CohortDetails key={cohort.cohortCode} cohort={cohort} />
        ))}
      </section>
    </main>
  );
}

export default App;
