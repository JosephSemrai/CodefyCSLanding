import React from 'react';

const SupportItem = () => {
    return(
        <section className="support_help_area sec_pad">
            <div className="container">
                <h2 className="f_p f_size_30 l_height50 f_600 t_color text-center wow fadeInUp mb_60">What can we do for you?</h2>
                <div className="d-flex">
                    <div className="support_item">
                        <img src={require ('../../img/new-home/ticket-support.png')} alt=""/>
                        <h4>Ready to learn?</h4>
                        <a href="/Courses" className="software_banner_btn btn_submit f_size_15 f_500">Browse Our Courses</a>
                    </div>
                    <div className="support_item">
                        <img src={require ('../../img/new-home/email.png')} alt=""/>
                        <h4>Want to help out?</h4>
                        <a href="mailto:joseph@semrai.com" className="software_banner_btn btn_submit f_size_15 f_500">Contact Us</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SupportItem;

