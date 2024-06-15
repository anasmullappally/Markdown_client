import { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./App.css";

function App() {
  //   const markdowna = `A paragraph with *emphasis* and **strong importance**.

  // > A block quote with ~strikethrough~ and a URL: https://reactjs.org.

  // * Lists
  // * [ ] todo
  // * [x] done

  // A table:

  // | a | b |
  // | - | - |
  // `
  const [markdown, setMarkdown] = useState("# Markdown Preview");
  return (

    <section className="markdown">
      <textarea
        className="input"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      ></textarea>
      <article className="result">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </article>
    </section>

  );
}

export default App;