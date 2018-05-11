import React, { Component } from 'react';
import Isometric from './../Isometric/Isometric';
import './About.css';

class About extends Component {
    render () {
        return (
          <div className="about">
              <div class="card">
                <img src="https://media.licdn.com/media-proxy/ext?w=800&h=800&hash=GLMV3oUC4jKsUM53ZKKWY%2FalW7Q%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6nlh8Tw1It6a2FowGz60oISIfYC2G8G2f1spyfNT-tdoDSeLKhpEtOdS0BkAQkKeL2VmiwUcuxWdGtI60G6O2abdaSbikkZTY_sGF19oUBMxUj8MeCQ-TiYXMfl757bAmfEI3RY1kNBzUQ0b6FO7btD38h6BPebsDAL9hEB5JwoLRxjlVS__nSIZsokNsn_XpPmg_lrb3dBDcJ2LScNBeMIFQgGzDoAtEUtLyBwgK_ln_dyRDF_7m8Lf2HBKMazVu9sLTqeyiZuml9tGJC4Bcdr8IlCHD73Pkc6EiAIPohbyyapbHBGVT41rQA-wQEqpapNkWWSm5ivlc-c5747moaPaaY4lfG-SJTI8x-L2E6u-Cza8O05FGiN0ZnOHPsaA8OtsvUnfmUN_lvU6k8yuN2bt4LbBgLStQnJCOus-8" alt="Avatar" />
                <div class="container">
                  <h4><b>idean.com</b></h4>
                  <p>Part of the team in charge of development for idean.com - a project
                  built with React and Next.js, using a CMS to pull data for the website.
                  Closely worked with designers and other developers in order to build
                  reusable components and compose pages.</p>
                </div>
              </div>
              <div class="card">
                <img src="https://media.licdn.com/media-proxy/ext?w=800&h=800&hash=GLMV3oUC4jKsUM53ZKKWY%2FalW7Q%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6nlh8Tw1It6a2FowGz60oISIfYC2G8G2f1spyfNT-tdoDSeLKhpEtOdS0BkAQkKeL2VmiwUcuxWdGtI60G6O2abdaSbikkZTY_sGF19oUBMxUj8MeCQ-TiYXMfl757bAmfEI3RY1kNBzUQ0b6FO7btD38h6BPebsDAL9hEB5JwoLRxjlVS__nSIZsokNsn_XpPmg_lrb3dBDcJ2LScNBeMIFQgGzDoAtEUtLyBwgK_ln_dyRDF_7m8Lf2HBKMazVu9sLTqeyiZuml9tGJC4Bcdr8IlCHD73Pkc6EiAIPohbyyapbHBGVT41rQA-wQEqpapNkWWSm5ivlc-c5747moaPaaY4lfG-SJTI8x-L2E6u-Cza8O05FGiN0ZnOHPsaA8OtsvUnfmUN_lvU6k8yuN2bt4LbBgLStQnJCOus-8" alt="Avatar" />
                <div class="container">
                  <h4><b>idean.com</b></h4>
                  <p>Part of the team in charge of development for idean.com - a project
                  built with React and Next.js, using a CMS to pull data for the website.
                  Closely worked with designers and other developers in order to build
                  reusable components and compose pages.</p>
                </div>
              </div>
          </div>
        )
    }
};

export default About;
