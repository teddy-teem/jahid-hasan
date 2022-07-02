import React from "react";
import CommonCard from "../../../components/Elements/Cards/CommonCard";

export default function Training() {
  return (
    <div className="profession">
       <CommonCard
        supHeader={"May-2021 to July-2021"}
        header={"Career Development Program"}
        subHeader={"Spring Rain Ltd, Dhaka"}
        extraSubHeader={"Trainee"}
        paragraph={
          "I have learned Full stack Web Development from this course, I have learned HTML5, CSS3, SCSS, JavaScript, jquery, NodeJs, KoaJs, MongoDb, and so many Technology from this course. they have taken an exam after completing the course, and i have successfully passed the exam."
        }
        websiteLink={"google.com"}
        certificateLink={"google.com"}
      />
    </div>
  );
}
