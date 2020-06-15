import React, {Component} from 'react';

class ServiceSubscribe extends Component {
    render(){
        let {sClass} = this.props;
        return(
                 <div className={`subscribe_form_info text-center ${sClass}`}>
                     <h2 className="f_600 f_size_30 l_height30 t_color3 mb_50">Sign up for more information and registration</h2>
                     <h4>View course descriptions, sign up for classes, use tools, and more.</h4>
                     <form className="subscribe-form" action="https://account.codefycs.org/">
                         <button type="submit" className="btn_hover btn_four mt_40">Sign up</button>
                     </form>
                 </div>
         )
    }
}
export default ServiceSubscribe;