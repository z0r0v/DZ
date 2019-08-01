import "./jquery-1.12.4.js";
import "./jquery-ui.js";

// $(function () {
//     $("#accordion").accordion(
//       {
//         collapsible: true,
//         heightStyle: "content",
//         collapsible: true,
//       }
//     );
//   });


//   $(function () {
//     $("#accordion2").accordion(
//       {
//         collapsible: true,
//         heightStyle: "content",
//         collapsible: true,
//       }
//     );
//   });

const htmlElements = {
  accordion1: document.querySelector("#accordion"),
  accordion2: document.querySelector("#accordion2"),

};

(()=>{
  htmlElements.accordion1.accordion(
    {
            collapsible: true,
            heightStyle: "content",
            collapsible: true,
    }
  );
});

(()=>{
  htmlElements.accordion2.accordion(
    {
            collapsible: true,
            heightStyle: "content",
            collapsible: true,
    }
  );
});


  // $(function () {
  //   $("#accordion").accordion(
  //     {
  //       collapsible: true,
  //       heightStyle: "content",
  //       collapsible: true,
  //     }
  //   );
  // });


  // $(function () {
  //   $("#accordion2").accordion(
  //     {
  //       collapsible: true,
  //       heightStyle: "content",
  //       collapsible: true,
  //     }
  //   );
  // });
