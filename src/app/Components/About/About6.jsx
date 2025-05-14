import parse from 'html-react-parser';
import Image from 'next/image';
import Link from 'next/link';

const About6 = ({image1,experienceNum,experienceTitle,subTitle,title,content,counName1,CounNum1,counName2,CounNum2}) => {
    return (
        <div className="about2 about-page-sec sp">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="about2-images">
                 
                  <div className="image2 image-anime">
                  <Image src={image1} alt="img" width={470} height={400}   />
                  </div>
                
                  <div className="counter-box" data-aos="flip-left" data-aos-duration="700">
                    <h3>{experienceNum}</h3>
                    <p>{parse(experienceTitle)}</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="heading1">
                  <span className="span" data-aos="zoom-in-left" data-aos-duration="700">
                  <Image src="/assets/img/logo/logo.png" alt="img" width={100} height={16}   />
                     {subTitle}</span>
                  <h2 className="title tg-element-title">{title}</h2>
                  <div className="space16"></div>
                  <p data-aos="fade-up-left" data-aos-duration="700">{content}</p>

                  <div className="space10"></div>

                  <div className="porgress-line-all">
                    <div className="progress-line">
                      <h6>{counName1}</h6>
                      <div id="progress1">
                      <div className="percentCount percentCount6">{CounNum1}</div>
                      <div className="progressbar"><div className="proggress2"></div></div>
                      </div>
                    </div>
                    <div className="progress-line">
                      <h6>{counName2}</h6>
                      <div id="progress2" >
                      <div className="percentCount percentCount6">{CounNum2}</div>
                      <div className="progressbar"><div className="proggress2"></div></div>
                      </div>
                    </div>
                  </div>

                  <div className="space30"></div>
                 

                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default About6;