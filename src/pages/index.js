import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <style>
          @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
      </style>
        <div className="customContainer">
            <div className="headerBlock">
                <span className="headerText">Sceyt  Docs and API References</span>
                <span className="aboutText">Examples, tutorials, and API references to help you build your business with Sceyt.</span>
                <Link
                    className="getStartedButton"
                    to={useBaseUrl('docs/')}>
                    Get Started
                </Link>
            </div>
            <img src="../../static/img/Frame.svg"/>
        </div>
      <main className="main">
          <span className="mainHeaderText">Product Documentation</span>
          <span className="mainHeaderDesc">Helpful articles and guides to support you in using Sceyt. Check them</span>
          <div className="cardContainer">
              <div className="card">
                  <div className="cardIconContainer"><img src="../../static/img/chat.svg"/></div>
                  <div className="detailsContainer">
                      <span className="cardHead">Chat SDK</span>
                      <span className="cardDesc">
                          Our messaging experiences will promote meaningful client relationships,
                          improve your customers’ banking experience and  maintain their.
                      </span>
                      <div className="subHeadsContainer">
                          <div className="subHead">
                              <img src="../../static/img/apple.svg"/>
                              <span className="subHeaderText">iOS</span>
                          </div>
                          <div className="subHead">
                              <img src="../../static/img/android.svg"/>
                              <span className="subHeaderText">Android</span>
                          </div>
                          <div className="subHead">
                              <img src="../../static/img/js.svg"/>
                              <span className="subHeaderText">Javascript</span>
                          </div>
                          <div className="subHead">
                              <img src="../../static/img/apple.svg"/>
                              <span className="subHeaderText">Platform Api</span>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="card">
                  <div className="cardIconContainer"><img src="../../static/img/uikit.svg"/></div>
                  <div className="detailsContainer">
                      <span className="cardHead">UI Kit</span>
                      <span className="cardDesc">
                          Our messaging experiences will promote meaningful client relationships,
                          improve your customers’ banking.
                      </span>
                      <div className="subHeadsContainer">
                          <div className="subHead">
                              <img src="../../static/img/apple.svg"/>
                              <span className="subHeaderText">iOS</span>
                          </div>
                          <div className="subHead">
                              <img src="../../static/img/android.svg"/>
                              <span className="subHeaderText">Android</span>
                          </div>
                          <div className="subHead">
                              <img src="../../static/img/js.svg"/>
                              <span className="subHeaderText">Javascript</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </main>
    </Layout>
  );
}

export default Home;
