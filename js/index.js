var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
import { myId } from "./myIdWeather.js";
const form = document.querySelector("form#select-location");
const input = document.querySelector("input#location");
const sectionInfosWeather = document.querySelector("section#infos-weather");
form === null || form === void 0
  ? void 0
  : form.addEventListener("submit", (Event) =>
      __awaiter(void 0, void 0, void 0, function* () {
        Event.preventDefault();
        if (!sectionInfosWeather || !input) return;
        try {
          const response = yield fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${
              input.value
            },br&APPID=${myId()}&lang=pt_br&units=metric`
          );
          const data = yield response.json();
          sectionInfosWeather.innerHTML = `<div>
    <h2>${data.name}</h2>
    <p>${Math.round(data.main.temp)}°C</p>
  </div>
  <img src="https://openweathermap.org/img/wn/${
    data.weather[0].icon
  }@2x.png" alt="" />`;
        } catch (err) {
          console.log(`Ocorreu um erro na requisição fetch: ${err}`);
        }
      })
    );
