import React from "react";

export default function DisplayDate(props) {
  console.log(props.date);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[props.date.getDay()];
  let hour = props.date.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let min = props.date.getMinutes();
  if (min < 10) {
    min = `0${min}`;
  }

  return <div>{day}, {hour}:{min}</div>;
}
