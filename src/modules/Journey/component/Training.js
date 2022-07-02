import React from "react";
import CardForTraining from "../../../components/Elements/Cards/CardsForJourneyPage/CardForTraining/CardForTraining";

export default function Training() {
  return (
    <div className="profession">
      <CardForTraining
        organization={"Spring Rain Ltd, Dhaka"}
        trainingTitle={"Career Development Program"}
        jobType={"Trainee, May-2021 to July-2021"}
        paragraph={
          "I have learned Full stack Web Development from this course, I have learned HTML5, CSS3, SCSS, JavaScript, jquery, NodeJs, KoaJs, MongoDb, and so many Technology from this course. they have taken an exam after completing the course, and i have successfully passed the exam."
        }
        organizationUrl={"google.com"}
      />
      <CardForTraining
        organization={"Spring Rain Ltd, Dhaka"}
        trainingTitle={"Career Development Program"}
        jobType={"Trainee, May-2021 to July-2021"}
        paragraph={
          "I have learned Full stack Web Development from this course, I have learned HTML5, CSS3, SCSS, JavaScript, jquery, NodeJs, KoaJs, MongoDb, and so many Technology from this course. they have taken an exam after completing the course, and i have successfully passed the exam."
        }
        organizationUrl={"google.com"}
      />
    </div>
  );
}
