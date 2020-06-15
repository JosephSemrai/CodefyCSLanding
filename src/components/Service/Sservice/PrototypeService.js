import React, {Component} from 'react';
import Sectitle from '../../Title/Sectitle'
import Pserviceslider from './Pserviceslider';

class Sservice extends Component{
    render(){
        return(
            <section className="prototype_service_area_two">
                <div className="container custom_container">
                    <Sectitle Title="Our Course Offerings" TitleP="We offer a wide variety of quality, interesting courses."
                    tClass="t_color3" sClass="sec_title text-center mb_70"/>
                    <Pserviceslider showAll/>
                </div>
            </section>
        )
    }
}
export default Sservice;