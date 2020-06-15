import React from 'react';
import Sectitle from '../Title/Sectitle';
import Teamitem from '../Team/Teamitem';


// const teamMembers = [
//   {
//     name: "Lucy Chen",
//     description: "co-founder / executive director / python director"
//   },

// ]
const Team = ()=>{
    return(
        <section className="experts_team_area sec_pad">
            <div className="container">
                <Sectitle sClass="sec_title text-center mb_70" Title="Leadership Team" tClass="t_color3" TitleP=""/>
                <div className="row">
                    <div className="col-lg-2 col-sm-3">
                        <Teamitem teamImage="placeholder.jpg" memberN="Lucy Chen" memberd="co-founder / executive director / python director"/>
                    </div>
                    <div className="col-lg-2 col-sm-3">
                        <Teamitem teamImage="placeholder.jpg" memberN="Anaum Khan" memberd="co-founder / finance director / hackathon director"/>
                    </div>
                    <div className="col-lg-2 col-sm-3">
                        <Teamitem teamImage="placeholder.jpg" memberN="Nihal Shah" memberd="operations manager"/>
                    </div>
                    <div className="col-lg-2 col-sm-3">
                        <Teamitem teamImage="placeholder.jpg" memberN="Joseph Semrai" memberd="web apps director / web designer"/>
                    </div>
                    <div className="col-lg-2 col-sm-3">
                        <Teamitem teamImage="placeholder.jpg" memberN="Michael Fatmi" memberd="web designer"/>
                    </div>
                    <div className="col-lg-2 col-sm-3">
                        <Teamitem teamImage="placeholder.jpg" memberN="Jack Ellinger" memberd="zoom coordinator / web-dev co-director"/>
                    </div>
                    <div className="col-lg-2 col-sm-3">
                        <Teamitem teamImage="placeholder.jpg" memberN="Emily Yu" memberd="outreach coordinator / java (basic) co-director"/>
                    </div>
                    <div className="col-lg-2 col-sm-3">
                        <Teamitem teamImage="placeholder.jpg" memberN="Alison Buckler" memberd="java (advanced) director"/>
                    </div>
                    <div className="col-lg-2 col-sm-3">
                        <Teamitem teamImage="placeholder.jpg" memberN="Leena Bacha" memberd="java (advanced) co-director"/>
                    </div>
                    <div className="col-lg-2 col-sm-3">
                        <Teamitem teamImage="placeholder.jpg" memberN="Amber Garcha" memberd="python (advanced) director"/>
                    </div>
                    <div className="col-lg-2 col-sm-3">
                        <Teamitem teamImage="placeholder.jpg" memberN="Sophia Powell" memberd="python (basic) co-director / assistant outreach coordinator"/>
                    </div>
                    <div className="col-lg-2 col-sm-3">
                        <Teamitem teamImage="placeholder.jpg" memberN="Leena Bacha" memberd="java (advanced) co-director"/>
                    </div>
                    <div className="col-lg-2 col-sm-3">
                        <Teamitem teamImage="placeholder.jpg" memberN="Amber Garcha" memberd="python (advanced) director"/>
                    </div>
                    <div className="col-lg-2 col-sm-3">
                        <Teamitem teamImage="placeholder.jpg" memberN="Sophia Powell" memberd="python (basic) co-director / assistant outreach coordinator"/>
                    </div>
                    <div className="col-lg-2 col-sm-3">
                        <Teamitem teamImage="placeholder.jpg" memberN="Albert Tang" memberd="assistant volunteer coordinator"/>
                    </div>
                    <div className="col-lg-2 col-sm-3">
                        <Teamitem teamImage="placeholder.jpg" memberN="Alisha Qian" memberd="secretary"/>
                    </div>
                    <div className="col-lg-2 col-sm-3">
                        <Teamitem teamImage="placeholder.jpg" memberN="Brayden Huang" memberd="curriculum director"/>
                    </div>
                    <div className="col-lg-2 col-sm-3">
                        <Teamitem teamImage="placeholder.jpg" memberN="snehal oberai" memberd="java director"/>
                    </div>
                    <div className="col-lg-2 col-sm-3">
                        <Teamitem teamImage="placeholder.jpg" memberN="kaavya radhakrishnan" memberd="assistant curriculum director"/>
                    </div>
                    <div className="col-lg-2 col-sm-3">
                        <Teamitem teamImage="placeholder.jpg" memberN="amauri hampton" memberd="scratch director"/>
                    </div>
                    <div className="col-lg-2 col-sm-3">
                        <Teamitem teamImage="placeholder.jpg" memberN="Varshini Subramanian" memberd="social media manager / media outreach director"/>
                    </div>
                    <div className="col-lg-2 col-sm-3">
                        <Teamitem teamImage="placeholder.jpg" memberN="Lydia Yang" memberd="web dev co-director"/>
                    </div>
                    <div className="col-lg-2 col-sm-3">
                        <Teamitem teamImage="placeholder.jpg" memberN="Eshna Parth" memberd="website manager"/>
                    </div>
                    <div className="col-lg-2 col-sm-3">
                        <Teamitem teamImage="placeholder.jpg" memberN="Michelle Ru" memberd="zoom coordinator"/>
                    </div>
                    <div className="col-lg-2 col-sm-3">
                        <Teamitem teamImage="placeholder.jpg" memberN="Caroline Chen" memberd="zoom coordinator (part-time)"/>
                    </div>
                    <div className="col-lg-2 col-sm-3">
                        <Teamitem teamImage="placeholder.jpg" memberN="Francesca Lee" memberd="scratch co-director"/>
                    </div>
                    <div className="col-lg-2 col-sm-3">
                        <Teamitem teamImage="placeholder.jpg" memberN="Nitin Kanchinadam" memberd="zoom coordinator (part-time) / r&d director"/>
                    </div>
                    <div className="col-lg-2 col-sm-3">
                        <Teamitem teamImage="placeholder.jpg" memberN="Spencer Nash" memberd="scheduling coordinator"/>
                    </div>
                    <div className="col-lg-2 col-sm-3">
                        <Teamitem teamImage="placeholder.jpg" memberN="Crystal Shi" memberd="volunteer director"/>
                    </div>
                    <div className="col-lg-2 col-sm-3">
                        <Teamitem teamImage="placeholder.jpg" memberN="Aishwarya Chakravarthy" memberd="staff writer"/>
                    </div>
                    <div className="col-lg-2 col-sm-3">
                        <Teamitem teamImage="placeholder.jpg" memberN="Lauren Delwiche" memberd="website content manager"/>
                    </div>
                    <div className="col-lg-2 col-sm-3">
                        <Teamitem teamImage="placeholder.jpg" memberN="Kashika Dhanjal" memberd="assistant sponsorship coordinator"/>
                    </div>
                    <div className="col-lg-2 col-sm-3">
                        <Teamitem teamImage="placeholder.jpg" memberN="Carolina Xu" memberd="staff writer"/>
                    </div>
                    <div className="col-lg-2 col-sm-3">
                        <Teamitem teamImage="placeholder.jpg" memberN="Anwitha Kollipara" memberd="customer relationship coordinator"/>
                    </div>
                    <div className="col-lg-2 col-sm-3">
                        <Teamitem teamImage="placeholder.jpg" memberN="Ananda Kalukin" memberd="editorial director"/>
                    </div>
                    <div className="col-lg-2 col-sm-3">
                        <Teamitem teamImage="placeholder.jpg" memberN="Ishan Dogra" memberd="editorial co-director"/>
                    </div>
                    <div className="col-lg-2 col-sm-3">
                        <Teamitem teamImage="placeholder.jpg" memberN="Sydney Belt" memberd="communications director"/>
                    </div>
                    <div className="col-lg-2 col-sm-3">
                        <Teamitem teamImage="placeholder.jpg" memberN="Onur Gunduz" memberd="sponsorship outreach director"/>
                    </div>
                    <div className="col-lg-2 col-sm-3">
                        <Teamitem teamImage="placeholder.jpg" memberN="Dhriti Posa" memberd="social media manager / web content"/>
                    </div>
                    <div className="col-lg-2 col-sm-3">
                        <Teamitem teamImage="placeholder.jpg" memberN="James Ramos" memberd="machine learning director"/>
                    </div>
                    <div className="col-lg-2 col-sm-3">
                        <Teamitem teamImage="placeholder.jpg" memberN="Meghana Gopannagari" memberd="zoom coordinator (part-time) / staff writer"/>
                    </div>


                </div>
            </div>
        </section>
        
    )
}
export default Team;