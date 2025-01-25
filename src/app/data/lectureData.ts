// lecturesData.ts
import { LectureGroup } from "../types";

export const lectureGroups: LectureGroup[] = [
  {
    title: "Weeks 1-4",
    lectures: [
      {
        id: 1,
        title: "Welcome to Deep Learning",
        date: "2025-01-22",
        slidesLink: "slides/lecture1.pdf",
        recordingLink:
          "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=c83e301c-f252-49c9-98b5-b26c0177a68d",
      },
      {
        id: 2,
        title: "Intro to Machine Learning",
        date: "2025-01-24",
        slidesLink: "slides/lecture2.pdf",
        // No recording link provided
      },
      {
        id: 3,
        title: "Perceptron and MNIST",
        date: "2025-01-27",
        // slidesLink: "slides/lecture3.pdf",
        // recordingLink:
        // "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=27806295-bbba-4bc0-8add-b0fb012be3ed",
      },
      {
        id: 4,
        title: "Perceptron (continued) and Loss Functions",
        date: "2025-01-29",
        // slidesLink: "slides/lecture4.pdf",
        // recordingLink:
        // "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=498a5e27-d268-4f77-9d12-b0fb012be406",
      },
    ],
  },
  // Add more groups for Weeks 5-8, 9-12, etc. as necessary
];
