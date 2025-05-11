import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Instant CPT Code Lookup',
    description: (
      <>
        Get accurate CPT codes instantly by describing procedures in plain English.
        No more searching through code books!
      </>
    ),
  },
  {
    title: 'Smart Recommendations',
    description: (
      <>
        Receive AI-powered suggestions for modifiers, documentation requirements,
        and coding best practices.
      </>
    ),
  },
  {
    title: 'Learn While You Code',
    description: (
      <>
        Understand the reasoning behind each code recommendation with detailed
        explanations and references.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}