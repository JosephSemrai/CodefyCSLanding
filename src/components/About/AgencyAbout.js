import React, {Component} from 'react';
import Slider from 'react-slick';
class AgencyAbout extends Component {
    render(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 1500,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 4000,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        let ServiceData = this.props.ServiceData;
        return(
            <section className="agency_about_area d-flex bg_color">
                <div className="col-lg-6 about_content_left ">
                    <div className="about_content mb_30">
                        <h2 className="f_size_30 f_700 l_height45 mb_20">We hope to maximize our ability to educate.</h2>
                        <p className="f_size_15 f_400 mb_40">Codefy is dedicated to providing equal educational opportunities to students who want to learn more about computer science, regardless of their grade or age. In light of current events, we are hoping to give back to our community by offering free workshops for students who want to learn how to code. Our workshops are run by experienced mentors who aim to provide free and quality education to our participants. The goal is to provide students with one-on-one or one-on-two mentoring because we understand that it is often difficult for students to teach themselves how to code.</p>
                        <a href="/team" className="about_btn">Meet The Team</a>
                    </div>
                </div>
                {/* <div className="col-lg-6 about_img">
                    <a href=".#" className="pluse_icon"><i className="ti-plus"></i></a>
                    <Slider className="about_img_slider" {...settings}>
                        <div className="item">
                            <div className="about_item w45">
                                <img src={require('../../img/home4/team1.jpg')} alt=""/>
                                <div className="about_text">
                                    <span className="br"></span>
                                    <h5 className="f_size_18 l_height28 mb-0">{ServiceData.agtext1}</h5>
                                </div>
                            </div>
                            
                        </div>
                        <div className="item">
                            <div className="about_item w45">
                                <img src={require('../../img/home4/team1.jpg')} alt=""/>
                                <div className="about_text">
                                    <span className="br"></span>
                                    <h5 className="f_size_18 l_height28 mb-0">{ServiceData.agtext1}</h5>
                                </div>
                            </div>
                            <div className="about_item w55">
                                <img src={require('../../img/home4/team2.jpg')} alt=""/>
                                <div className="about_text text_two">
                                    <span className="br"></span>
                                    <h5 className="f_size_18 l_height28 mb-0">{ServiceData.agtext2}</h5>
                                </div>
                            </div>
                            <div className="about_item w55">
                                <img src={require('../../img/home4/team2.jpg')} alt=""/>
                                <div className="about_text text_two">
                                    <span className="br"></span>
                                    <h5 className="f_size_18 l_height28 mb-0">{ServiceData.agtext3}</h5>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div> */}
            </section>
        )
    }
}
export default AgencyAbout;
