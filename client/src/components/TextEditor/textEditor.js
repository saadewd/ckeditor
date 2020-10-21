import React, { useState } from "react";
import PropTypes from "prop-types";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";

const TextEditor = (props) => {
  const [state, setstate] = useState({
    Editor: "",
  });

  return (
    <div>
      <CKEditor
      
        editor={ClassicEditor}
        data=""
        onInit={(editor) => {
          // You can store the "editor" and use when it is needed.
          //   console.log("Editor is ready to use!", editor);
        }}
        // config={{
        //   ckfinder: {
        //     uploadUrl: axios.post("/upload"),
        //   },
        // }}
        onChange={(event, editor) => {
          const data = editor.getData();
          //   console.log(editor.getData());
          //   console.log('--------------')
          setstate({
            editorData: data,
          });
          //   console.log(state,">>>>>");
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
      />
      <div>{state.editorData}</div>
    </div>
  );
};

TextEditor.propTypes = {};

export default TextEditor;
