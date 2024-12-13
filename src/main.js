// DZ - 2 №5

// 1

// import {
//   alert,
//   notice,
//   info,
//   success,
//   error,
// } from "@pnotify/core";
// import "@pnotify/core/dist/BrightTheme.css";

// const keys = {
//   keyO: "Натисніть на O - щоб зробити класне фото",
//   keyS: "Натисніть на S - щоб почати навчатись в нього",
//   keyH: "Натисніть на H - щоб допомогти зібрати все для зілля",
//   keyT: "Натисніть на T - щоб зібрати все для зілля",
//   keyP: "Натисніть на P - щоб допомогти зробити зілля",
//   keyG: "Натисніть на G - щоб забрати зілля",
//   keyC: "Натисніть на C - щоб вкрасти чарівну палочку...",
//   keyFinish:
//     "Ви дуже погано закінчили знайомство... Красти погано... Натисніть Enter якщо ви хочете почати знову!",
// };

// const keyHtm = document.getElementById("key");

// document.addEventListener("keydown", (event) => {
//   switch (event.key) {
//     case "l":
//       success({
//         text: "Ви поговорили з котиком та стали друзями!",
//       });
//       keyHtm.innerHTML = keys.keyO;
//       break;
//     case "o":
//       success({
//         text: "Ви сфотографувалися з котиком, тепер у вас є класне фото з котиком!",
//       });
//       keyHtm.innerHTML = keys.keyS;
//       break;
//     case "s":
//       success({
//         text: "Ви почали навчання і у вас все вийшло!",
//       });
//       keyHtm.innerHTML = keys.keyH;
//       break;
//     case "h":
//       success({
//         text: "Ви вдвох почали збирати!",
//       });
//       keyHtm.innerHTML = keys.keyT;
//       break;
//     case "t":
//       success({
//         text: "Ви все зібрали!",
//       });
//       keyHtm.innerHTML = keys.keyP;
//       break;
//     case "p":
//       success({
//         text: "Ви разом зварили зілля!",
//       });
//       keyHtm.innerHTML = keys.keyG;
//       break;
//     case "g":
//       success({
//         text: "Ви взяли зілля!",
//       });
//       keyHtm.innerHTML = keys.keyC;
//       break;
//     case "c":
//       success({
//         text: "Навіщо ви вкрали палочку у котика?...",
//       });
//       keyHtm.innerHTML = keys.keyFinish;
//       break;
//     case "Enter":
//       success({
//         text: "Починаємо!",
//       });
//       keyHtm.innerHTML = "Натисніть на L - щоб підійти та почати розмову";
//       break;
//     default:
//       error({
//         text: "Ви натиснули неправильну клавішу",
//       });
//   }
// });

// 2

// import Chart from "./chart.js/auto";

// const ctx = document.getElementById("sales-chart");

// const data = {
//   labels: [
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "10",
//     "11",
//     "12",
//     "13",
//     "14",
//     "15",
//     "16",
//     "17",
//     "18",
//     "19",
//     "20",
//     "21",
//     "22",
//     "23",
//     "24",
//     "25",
//     "26",
//     "27",
//     "28",
//     "29",
//     "30",
//   ],
//   datasets: [
//     {
//       label: "Продажі за останній місяць",
//       data: [
//         150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550,
//         600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200,
//         1250, 1300, 1350,
//       ],
//       backgroundColor: "#2196f3",
//       borderColor: "#2196f3",
//       borderWidth: 1,
//     },
//   ],
// };

// Chart.defaults.backgroundColor = "#000";

// const salesChart = new Chart(ctx, {
//   type: "line",
//   data: data,
//   options: {
//     scales: {
//       x: {
//         display: true,
//         title: {
//           display: true,
//           text: "Кожен день місяця",
//         },
//         labels: [
//           "1 день",
//           "2 день",
//           "3 день",
//           "4 день",
//           "5 день",
//           "6 день",
//           "7 день",
//           "8 день",
//           "9 день",
//           "10 день",
//           "11 день",
//           "12 день",
//           "13 день",
//           "14 день",
//           "15 день",
//           "16 день",
//           "17 день",
//           "18 день",
//           "19 день",
//           "20 день",
//           "21 день",
//           "22 день",
//           "23 день",
//           "24 день",
//           "25 день",
//           "26 день",
//           "27 день",
//           "28 день",
//           "29 день",
//           "30 день",
//         ],
//         position: "right",
//       },
//       y: {
//         display: true,
//         labels: [
//           500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600,
//           1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700,
//           2800, 2900, 3000, 3100, 3200, 3300, 3400,
//         ],
//         title: {
//           display: true,
//           text: "Продажі за останній місяць",
//         },
//       },
//     },
//     layout: {},
//     plugins: {
//       legend: {
//         labels: {
//           font: {
//             weight: 900,
//             size: 14,
//           },
//         },
//       },
//     },
//   },
// });

// Dz 6

import { saveFormData, formData } from "./modules/handler.js";

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("input-name").value;
  const email = document.getElementById("input-email").value;

  saveFormData(name, email);

  console.log(formData);

  document.getElementById("success-message").classList.remove("hidden");
});
