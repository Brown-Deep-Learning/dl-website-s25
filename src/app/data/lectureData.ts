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
        recordingLink:
          "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=7eba1cc4-0a87-4b7e-b8bc-b26c0177a6cb",
      },
      {
        id: 3,
        title: "Perceptron and MNIST",
        date: "2025-01-27",
        slidesLink: "slides/lecture3.pdf",
        recordingLink:
          "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=d09d79e7-b6a1-4f59-a14c-b26c0177a6ef",
      },
      {
        id: 4,
        title: "Perceptrons (continued), MNIST, and MLPs",
        date: "2025-01-29",
        slidesLink: "slides/lecture4.pdf",
        recordingLink:
          "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=d8fb8f55-a37e-4ad8-b161-b26c0177a70d",
      },
      {
        id: 5,
        title: "Loss Functions and Gradient Descent",
        date: "2025-01-31",
        slidesLink: "slides/lecture5.pdf",
        recordingLink:
        "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=f3257416-cb60-4f5a-afda-b26c0177a736",
      },
      {
        id: 6,
        title: "Backpropagation and SGD",
        date: "2025-02-5",
        slidesLink: "slides/lecture6.pdf",
        // recordingLink:
        // "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=d8fb8f55-a37e-4ad8-b161-b26c0177a70d",
      },
      {
        id: 7,
        title: "Tensorflow and Autodiff",
        date: "2025-02-7",
        // slidesLink: "slides/lecture4.pdf",
        // recordingLink:
        // "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=d8fb8f55-a37e-4ad8-b161-b26c0177a70d",
      },
      {
        id: 8,
        title: "Linear Algebra, Matrices, and GPUs",
        date: "2025-02-10",
        // slidesLink: "slides/lecture4.pdf",
        // recordingLink:
        // "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=d8fb8f55-a37e-4ad8-b161-b26c0177a70d",
      },
      // {
      //   id: 9,
      //   title:
      //     "Building Blocks of Deep Learning: Activation functions and multi-layer networks",
      //   date: "2025-02-12",
      //   // slidesLink: "slides/lecture4.pdf",
      //   // recordingLink:
      //   // "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=d8fb8f55-a37e-4ad8-b161-b26c0177a70d",
      // },
      {
        id: 10,
        title: "Hyperparameter Tuning and Practical Advice for Training",
        date: "2025-02-12",
        // slidesLink: "slides/lecture4.pdf",
        // recordingLink:
        // "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=d8fb8f55-a37e-4ad8-b161-b26c0177a70d",
      },
      {
        id: 11,
        title: "Convolutions Day 1",
        date: "2025-02-14",
        // slidesLink: "slides/lecture4.pdf",
        // recordingLink:
        // "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=d8fb8f55-a37e-4ad8-b161-b26c0177a70d",
      },
    ],
  },
  // Add more groups for Weeks 5-8, 9-12, etc. as necessary
];
