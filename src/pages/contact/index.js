import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HeroImg from '../../../static/img/contact/AVATARZ.png';

const svgList = [
    {
        title: 'Github',
        Svg: require('../../../static/img/contact/github.svg').default,
        color: '#000',
        _link: 'https://github.com/PunGrumpy/Grumpy-wiki',
    },
    {
        title: 'Instagram',
        Svg: require('../../../static/img/contact/instagram.svg').default,
        _link: 'https://www.instagram.com/wtpp_p114/',
    },
    {
        title: 'Facebook',
        Svg: require('../../../static/img/contact/facebook.svg').default,
        color: '#2979ff',
        _link: 'https://www.facebook.com/lnoppakornl.lkaewsalabnill',
    },
];
const Svg = ({ Svg, color, title, _link }) => {
    return (
        <a href={_link} target="_blank">
            <Svg className={styles.svg} style={{ fill: color }} />
        </a>
    );
};

function MyHero() {
    return (
        <div className={styles.myHeroContainer}>
            <div className={styles.leftContainer}>
                <h1 className={styles.leftContainer_h1}>
                    Pun <br /> Grumpy 👻
                </h1>
                <p className={styles.leftContainer_p}>
                    Hello, I'm a student based in Thailand! 👨🏻‍💻
                    <br />
                    Undergraduate student - Computer Science
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
            title="Contact"
            description="Contact Me"
        >
            {/* <HomepageHeader /> */}
            <main>
                <MyHero />
                {/* <HomepageFeatures /> */}
            </main>
        </Layout>
    );
}
