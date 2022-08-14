import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HeroImg from '../../static/img/Hero.png';

const svgList = [
    {
        title: 'Github',
        Svg: require('../../static/img/github.svg').default,
        color: 'black',
        link: 'https://github.com/7Wate/wiki',
    },
    {
        title: 'Instagram',
        Svg: require('../../static/img/instagram.svg').default,
        link: 'https://www.instagram.com/wtpp_p114/',
    },
    {
        title: 'Facebook',
        Svg: require('../../static/img/facebook.svg').default,
        color: '#2979ff',
        link: 'https://www.facebook.com/lnoppakornl.lkaewsalabnill',
    },
];
const Svg = ({ Svg, color, title, link }) => {
    return (
        <a href={link} target="_blank">
            <Svg className={styles.svg} style={{ fill: color }} />
        </a>
    );
};

function MyHero() {
    return (
        <div className={styles.myHeroContainer}>
            <div className={styles.leftContainer}>
                <h1 className={styles.leftContainer_h1}>
                    Always <br /> For Freedom.
                </h1>
                <p className={styles.leftContainer_p}>
                    A guy who tried of coding 💨
                    <br />
                    Records the knowledge here, I hope it will help you.
                </p>
                <div className={styles.buttonContainer}>
                    <div className={styles.svgContainer}>
                        {svgList.map((item, index) => {
                            return <Svg {...item} key={item.title} />;
                        })}
                    </div>
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
            description="Wiki/vscode/javascript"
        >
            {/* <HomepageHeader /> */}
            <main>
                <MyHero />
                {/* <HomepageFeatures /> */}
            </main>
        </Layout>
    );
}
