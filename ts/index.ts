import { myId } from "./myIdWeather.ts";

const form = document.querySelector("form#select-location");
const input: HTMLInputElement | null = document.querySelector("input#location");
const sectionInfosWeather = document.querySelector("section#infos-weather");

form?.addEventListener("submit", async (Event) => {
  Event.preventDefault();

  if (!sectionInfosWeather || !input) return;

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${
        input.value
      },br&APPID=${myId()}&lang=pt_br&units=metric`
    );
    const data = await response.json();

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
});
