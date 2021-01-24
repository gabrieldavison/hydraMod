import { h } from "https://unpkg.com/preact?module";
import { useRef, useEffect } from "https://cdn.skypack.dev/preact/hooks";
import htm from "https://unpkg.com/htm?module";
const html = htm.bind(h);

const Editor = ({
  editorContent,
  handleChangeEditorContent,
  editorRef,
  setDisplayState,
}) => {
  return html`
    <textarea
      ref=${editorRef}
      value=${editorContent ? editorContent : ""}
      onInput=${(e) => handleChangeEditorContent(e.target.value)}
      onFocus=${() => setDisplayState("visibleFocusEditor")}
      onBlur=${() => setDisplayState("visibleFocusKeyboard")}
    ></textarea>
  `;
};

export default Editor;
