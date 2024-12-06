// DZ - 2 №5

// 1

import {
  alert,
  notice,
  info,
  success,
  error,
} from "@pnotify/core";
import "@pnotify/core/dist/BrightTheme.css";

const keys = {
  keyO: "Натисніть на O - щоб зробити класне фото",
  keyS: "Натисніть на S - щоб почати навчатись в нього",
  keyH: "Натисніть на H - щоб допомогти зібрати все для зілля",
  keyT: "Натисніть на T - щоб зібрати все для зілля",
  keyP: "Натисніть на P - щоб допомогти зробити зілля",
  keyG: "Натисніть на G - щоб забрати зілля",
  keyC: "Натисніть на C - щоб вкрасти чарівну палочку...",
  keyFinish:
    "Ви дуже погано закінчили знайомство... Красти погано... Натисніть Enter якщо ви хочете почати знову!",
};

const keyHtm = document.getElementById("key");

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "l":
      success({
        text: "Ви поговорили з котиком та стали друзями!",
      });
      keyHtm.innerHTML = keys.keyO;
      break;
    case "o":
      success({
        text: "Ви сфотографувалися з котиком, тепер у вас є класне фото з котиком!",
      });
      keyHtm.innerHTML = keys.keyS;
      break;
    case "s":
      success({
        text: "Ви почали навчання і у вас все вийшло!",
      });
      keyHtm.innerHTML = keys.keyH;
      break;
    case "h":
      success({
        text: "Ви вдвох почали збирати!",
      });
      keyHtm.innerHTML = keys.keyT;
      break;
    case "t":
      success({
        text: "Ви все зібрали!",
      });
      keyHtm.innerHTML = keys.keyP;
      break;
    case "p":
      success({
        text: "Ви разом зварили зілля!",
      });
      keyHtm.innerHTML = keys.keyG;
      break;
    case "g":
      success({
        text: "Ви взяли зілля!",
      });
      keyHtm.innerHTML = keys.keyC;
      break;
    case "c":
      success({
        text: "Навіщо ви вкрали палочку у котика?...",
      });
      keyHtm.innerHTML = keys.keyFinish;
      break;
    case "Enter":
      success({
        text: "Починаємо!",
      });
      keyHtm.innerHTML = "Натисніть на L - щоб підійти та почати розмову";
      break;
    default:
      error({
        text: "Ви натиснули неправильну клавішу",
      });
  }
  // if (event.key === "l") {
  // success({
  //   text: "Ви почали навчання і у вас все вийшло!",
  // });
  // key.innerHTML = keys.keyS;
  // } else {
  //   error({
  //     text: "Неправильна клавіша!",
  //   });
  // }
  // if (event.key === "s") {
  // success({
  //   text: "Ви поговорили з котиком та стали друзями!",
  // });
  // key.innerHTML = keys.keyO;
  // } else {
  //   error({
  //     text: "Неправильна клавіша!",
  //   });
  // }
});
