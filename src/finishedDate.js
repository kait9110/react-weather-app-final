import React from "react";

export default function FinishedDate(props) {
  let day = props.data.getDay();
  let hours = props.data.getHours();
  let minutes = props.data.getMinutes();

  return (
    <div>
      {day} {hours}:{minutes}
    </div>
  );
}
