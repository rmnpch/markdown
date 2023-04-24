import ReactMarkdown from "react-markdown";
import React from "react";


export default function Test() {
  const [input, setInput] = React.useState({
    md: '# Sample Markdown Heading\n\nEdit or replace this\n-----------\n\n### Another deeper heading\n\nParagraphs are separated by a blank line.\n\nLeave 2 spaces at the end of a line to do a  line break\n\nText attributes *italic*, **bold**,\n`monospace`, ~~strikethrough~~ .\n\n\n> Block Quotes!\n\nUnordered list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\n---\n\n#### \n[Ramon Pacheco](https://google.com \"")\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)'
  });

  return (
    <div className='sideBySide' >
      <textarea
      autoFocus
        id= 'editor'
        value={input.md}
        onChange={(e) => setInput({md: e.target.value})}
      ></textarea>
      <div id="preview">

      <ReactMarkdown  children={input.md} className="markdown" 
      />
      </div>
    </div>
  );
}
