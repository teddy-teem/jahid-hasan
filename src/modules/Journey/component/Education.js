import React from "react";
import CardForEducation from "../../../components/Elements/Cards/CardsForJourneyPage/CardViewForEducation/CardForEducation";

export default function () {
  return (
    <div className="profession">
      <CardForEducation
        institutoin={"Bangladesh Army University of Engineering & Technology"}
        certification={"Bachelor of Scinence in Engineering"}
        discipline={"Computer Science & Engineering"}
        result={"3.83 out of 4.00"}
        time={"March, 2017 - July, 2021"}
        institutoinWebsiteUrl={"google.com"}
        certificateUrl={"google.com"}
      />
      <CardForEducation
        institutoin={"Bangladesh Army University of Engineering & Technology"}
        certification={"Bachelor of Scinence in Engineering"}
        discipline={"Computer Science & Engineering"}
        result={"3.83 out of 4.00"}
        time={"March, 2017 - July, 2021"}
        institutoinWebsiteUrl={"google.com"}
        certificateUrl={"google.com"}
      />
    </div>
  );
}
