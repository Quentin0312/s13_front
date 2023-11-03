import { Show } from "solid-js";

import { iaPrediction } from "../App";

export default function () {
  return (
    <Show when={iaPrediction()}>
      <div>{iaPrediction()}</div>
    </Show>
  );
}
