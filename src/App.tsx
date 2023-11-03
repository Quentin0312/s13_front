import { Show, createEffect, createSignal } from "solid-js";

import CommentInput from "./component/CommentInput";
import IaPrediction from "./component/IaPrediction";

export const [comment, setComment] = createSignal("");
export const [iaPrediction, setIaPrediction] = createSignal<string>();

export default function () {
  createEffect(() => {
    console.log("effect", comment());

    if (comment() != "") {
      // requete api
    }
  });
  return (
    <>
      <CommentInput />
      <IaPrediction />
    </>
  );
}
