"use client"
import SectionTitle3 from "../Common/SectionTitle3";
import data from '../../Data/home5/skill.json';
import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Image from "next/image";

const Skill1 = () => {

    useEffect(() => {
        loadBackgroudImages();
      }, []);
      

    return (
        <div className="skill7 sp" data-background="/assets/img/bg/skill7-bg.jpg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="heading6-w">
                        <SectionTitle3
                                SubTitle="Our Skills"
                                Title="See Our Work in Action <br/> Featured Projects"
                                content="Explore our diverse portfolio of successful projects & client engagements. From implementing robust cybersecurity solutions to developing cutting-edge software applications and optimizing network infrastructure,"
                            ></SectionTitle3>

                            <div className="porgress-line-all">
                            {data.map((item, i) => (
                                <div key={i}  className="progress-line" data-aos="fade-right" data-aos-duration="900">
                                  <div className="heading">
                                    <h6>{item.title}</h6>
                                    <p>{item.desc}</p>
                                  </div>
                                  <div className="progress">
                                    <div className="progress-bar w-75" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                  </div>
                                </div>
                                ))}
                              </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill1;