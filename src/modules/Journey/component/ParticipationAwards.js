import React from "react";
import CardForParticipationAwards from "../../../components/Elements/CardForParticipationAwards/CardForParticipationAwards";

export default function ParticipationAwards() {
  return (
    <div className="profession">
      <CardForParticipationAwards 
      time={"Fall Semester, 2017"}
      participationTitle={"BAUET Scholership"}
      hostedBy={"Bangladesh Army University of Engineering & Technology"}
      hostedPlace={"Quadirabad Cantonment, Natore"}
      something={"Achived 1st Position in Semester Final, CSE 5th Batch"}
      certificateUrl={"www.google.com"}
      />
      <CardForParticipationAwards 
      time={"Fall Semester, 2017"}
      participationTitle={"BAUET Scholership"}
      hostedBy={"Bangladesh Army University of Engineering & Technology"}
      hostedPlace={"Quadirabad Cantonment, Natore"}
      something={"Achived 1st Position in Semester Final, CSE 5th Batch"}
      certificateUrl={"www.google.com"}
      />
    </div>
  );
}
