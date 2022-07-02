import React from "react";
import CardForProjects from "../../../components/Elements/Cards/CardsForJourneyPage/CardForProjects/CardForProjects";

export default function Projects() {
  return (
    <div className="profession">
      <CardForProjects
        time={"July, 2021 - Runing"}
        ProjectTitle={"Old Portfolio"}
        methodology={"Waterfall"}
        paragraph={
          " I have learned Full stack Web Development from this course, I have learned HTML5, CSS3, SCSS, JavaScript, jquery, NodeJs, KoaJs, MongoDb, and so many Technology from this course. they have taken an exam after completing the course, and i have successfully passed the exam."
        }
        usedTechnology={"HTML5, CSS3, Javascript, Jquery, Scss"}
      />
    </div>
  );
}
