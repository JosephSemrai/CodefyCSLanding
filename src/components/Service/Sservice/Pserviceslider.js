import React, {Component} from 'react';
import Slider from 'react-slick'

class Pserviceslider extends Component{
    render(){
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 5000,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '100px',
            responsive: [
                {
                  breakpoint: 1250,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '100px',
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                    centerPadding: '0px',
                  }
                },
                {
                  breakpoint: 576,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    centerPadding: '0px',
                  }
                }
              ]
        };
        return(
            <Slider className="service_carousel" {...settings}>
                <div className="service_item">
                    <div className="icon s_icon_one"><i className="ti-check"></i></div>
                    <h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">Scratch Basic</h4>
                    <p>Learn the basics of coding in scratch.</p>
                    <img className="float-right" src={require('../../../img/home2/undraw.png')} alt=""/>
                </div>
                <div className="service_item">
                    <div className="icon s_icon_two"><i className="ti-location-arrow"></i></div>
                    <h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">Web Applications</h4>
                    <p>Learn to build web applications like Twitter and Facebook.</p>
                    <img className="float-right" src={require('../../../img/home2/inbox.png')} alt=""/>
                </div>
                <div className="service_item">
                    <div className="icon s_icon_three"><i className="ti-search"></i></div>
                    <h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">Java Basic</h4>
                    <p>Learn the fundementals of the Java language!</p>
                    <img className="float-right" src={require('../../../img/home2/file.png')} alt=""/>
                </div>
                <div className="service_item">
                    <div className="icon s_icon_four"><i className="ti-stats-up"></i></div>
                    <h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">Java Advanced
</h4>
                    <p>​Build on your knowledge of Java with more advanced content and material!</p>
                    <img className="float-right" src={require('../../../img/home2/report.png')} alt=""/>
                </div>
                <div className="service_item">
                    <div className="icon s_icon_one"><i className="ti-check"></i></div>
                    <h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">Python Basic
</h4>
                    <p>Learn the fundamentals of the Python language!</p>
                    <img className="float-right" src={require('../../../img/home2/undraw.png')} alt=""/>
                </div>
                <div className="service_item">
                    <div className="icon s_icon_two"><i className="ti-location-arrow"></i></div>
                    <h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">Python Advanced
</h4>
                    <p>Build on your knowledge of Python with more advanced content and material!</p>
                    <img className="float-right" src={require('../../../img/home2/inbox.png')} alt=""/>
                </div>
                <div className="service_item">
                    <div className="icon s_icon_three"><i className="ti-search"></i></div>
                    <h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">Web Development</h4>
                    <p>Learn the fundamentals of Website Development!</p>
                    <img className="float-right" src={require('../../../img/home2/file.png')} alt=""/>
                </div>
                <div className="service_item">
                    <div className="icon s_icon_four"><i className="ti-stats-up"></i></div>
                    <h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">Machine Learning</h4>
                    <p>Explore the exciting, cutting-edge fields of artificial intelligence and machine learning.</p>
                    <img className="float-right" src={require('../../../img/home2/report.png')} alt=""/>
                </div>
                <div className="service_item">
                    <div className="icon s_icon_four"><i className="ti-stats-up"></i></div>
                    <h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">C++ Basic</h4>
                    <p>Learn the fundamentals of programming in a language that helped build many modern technologies.</p>
                    <img className="float-right" src={require('../../../img/home2/report.png')} alt=""/>
                </div>
                <div className="service_item">
                    <div className="icon s_icon_four"><i className="ti-stats-up"></i></div>
                    <h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">Java Data Structures</h4>
                    <p>Go farther into the language of Java than most AP classes do to learn about efficiency and more.</p>
                    <img className="float-right" src={require('../../../img/home2/report.png')} alt=""/>
                </div>
            </Slider>
        )
    }
}
export default Pserviceslider;