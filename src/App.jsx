import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import parse from "html-react-parser"

function App() {
  const [markdown, setMarkdown] = useState("");
  const [html, setHtml] = useState('');

  useEffect(() => {
    const convertMarkdownToHtml = async () => {
      try {
        if (!markdown) {
          return setHtml("")
        }
        const response = await axios.post('http://localhost:5000/api/convert', { markdown });
        setHtml(response.data.html);
      } catch (error) {
        console.error('Error converting markdown to HTML:', error);
      }
    };

    convertMarkdownToHtml();
  }, [markdown]);

  return (

    <section className="markdown">
      <textarea
        className="input"
        value={markdown}
        placeholder="Type your markdown here..."
        onChange={(e) => setMarkdown(e.target.value)}
      ></textarea>
      <article className="result">
        {parse(html)}
      </article>
    </section>

  );
}

export default App;