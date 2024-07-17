import { MetaFunction } from "@remix-run/react";
import Markdown from "react-markdown";
import README from "../../../README.md?raw";
import { TITLE } from "../root";

export const meta: MetaFunction = () => {
  return [
    { title: `${TITLE} - About me` },
    { name: "description", content: `${TITLE}'s Portfolio - About` },
  ];
};

export default function About() {
  return (
    <div className="container prose prose-invert lg:prose-lg">
      <Markdown>{README}</Markdown>
    </div>
  );
}
