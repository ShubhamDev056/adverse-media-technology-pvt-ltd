import Image from "next/image";
import Link from "next/link";

const HeroBanner5 = ({subtitle,title,content,btnone,btnoneurl,btntwo,btntwourl,shape2,shape3,shape4,shape5}) => {
    return (
        <div className="hero7">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="main-heading">
                            <span className="span" data-aos="zoom-in-left" data-aos-duration="700">{subtitle}</span>
                            <h1>{title}</h1>
                            <div className="space16"></div>
                            <p>{content}</p>
                            <div className="space30"></div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="images-all">
                            {/* <div className="shape1 round-circle2">
                            <Image src={shape2} alt="img" width={101} height={101}   />
                            </div> */}
                            <div className="shape2 shape-animaiton3">
                            <Image src={shape3} alt="img" width={230} height={60}   />
                            </div>
                            <div className="shape3 animate3">
                            <Image src={shape4} alt="img" width={220} height={60}   />
                            </div>
                            <div className="shape4 animate1">
                            <Image src={shape5} alt="img" width={225} height={60}   />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner5;