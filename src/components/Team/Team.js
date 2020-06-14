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
                        <Teamitem teamImage="team_01.jpg" memberN="Lucy Chen" memberd="co-founder / executive director / python director"/>
                    </div>
                    <div className="col-lg-2 col-sm-3">
                        <Teamitem teamImage="team_02.jpg" memberN="Anaum Khan" memberd="co-founder / finance director / hackathon director"/>
                    </div>
                    <div className="col-lg-2 col-sm-3">
                        <Teamitem teamImage="team_03.jpg" memberN="Nihal Shah" memberd="operations manager"/>
                    </div>
                    <div className="col-lg-2 col-sm-3">
                        <Teamitem teamImage="team_04.jpg" memberN="Joseph Semrai" memberd="web apps director / web designer"/>
                    </div>
                    <div className="col-lg-2 col-sm-3">
                        <Teamitem teamImage="team_04.jpg" memberN="Michael Fatmi" memberd="web designer"/>
                    </div>
                    <div className="col-lg-2 col-sm-3">
                        <Teamitem teamImage="team_5.jpg" memberN="Jack Ellinger" memberd="zoom coordinator / web-dev co-director"/>
                    </div>
                    <div className="col-lg-2 col-sm-3">
                        <Teamitem teamImage="team_6.jpg" memberN="Emily Yu" memberd="outreach coordinator / java (basic) co-director"/>
                    </div>
                    <div className="col-lg-2 col-sm-3">
                        <Teamitem teamImage="team_7.jpg" memberN="Alison Buckler" memberd="java (advanced) director"/>
                    </div>
                    <div className="col-lg-2 col-sm-3">
                        <Teamitem teamImage="team_8.jpg" memberN="Leena Bacha" memberd="java (advanced) co-director"/>
                    </div>
                    <div className="col-lg-2 col-sm-3">
                        <Teamitem teamImage="team_9.jpg" memberN="Amber Garcha" memberd="python (advanced) director"/>
                    </div>
                    <div className="col-lg-2 col-sm-3">
                        <Teamitem teamImage="team_10.jpg" memberN="Sophia Powell" memberd="python (basic) co-director / assistant outreach coordinator"/>
                    </div>
                    <div className="col-lg-2 col-sm-3">
                        <Teamitem teamImage="team_9.jpg" memberN="Leena Bacha" memberd="java (advanced) co-director"/>
                    </div>
                    <div className="col-lg-2 col-sm-3">
                        <Teamitem teamImage="team_12.jpg" memberN="Amber Garcha" memberd="python (advanced) director"/>
                    </div>
                </div>
            </div>
        </section>
        
    )
}
export default Team;