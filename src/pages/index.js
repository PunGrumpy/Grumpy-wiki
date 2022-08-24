import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HeroImg from '../../static/img/forest.png';

function MyHero() {
    return (
        <div className={styles.myHeroContainer}>
            <div className={styles.leftContainer}>
                <h1 className={styles.leftContainer_h1}>
                    Freedom <br /> Through Education.
                </h1>
                <p className={styles.leftContainer_p}>
                    A guy who exhausted with coding 💨
                    <br />
                    Records the knowledge here, I hope it will help you.
                </p>
                <div className={styles.buttonContainer}>
                    <button className={styles.button}>
                        <a className={styles.hero_a} href="/programming-languages">
                            Click
                        </a>
                    </button>
                    <span className={styles.buttonLeftText}>
                        Get Started. <br /> Start a learning journey.
                    </span>
                </div>
            </div>
            <div className={styles.rightContainer}>
                <img src={HeroImg} alt="HeroImg" />
            </div>
        </div>
    );
}
export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            // title={`${siteConfig.title}`}
            title="Home"
            description="Wiki | Coding | JavaScript"
        >
            <main>
                <MyHero />
            </main>
        </Layout>
    );
}
