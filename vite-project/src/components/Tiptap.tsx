import { EditorProvider, FloatingMenu, BubbleMenu, useEditor, Editor } from "@tiptap/react";
import { EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import * as Icons from "./Icons"
// import Document from "@tiptap/extension-document";
// import Paragraph from "@tiptap/extension-paragraph";
// import Text from "@tiptap/extension-text";
// import Link from "@tiptap/extension-link";
// import Bold from "@tiptap/extension-bold";
// import Italic from "@tiptap/extension-italic";
// import Strike from "@tiptap/extension-strike";
// import Code from "@tiptap/extension-code";
// import History from "@tiptap/extension-history";
import { useCallback, useEffect } from "react";
const extensions = [StarterKit];
const content = '<p>Hello World!</p>';

export const Tiptap = ({setEditor}: {setEditor: (arg: Editor) => void}) => {
    const editor = useEditor({
        extensions,
        content: content
    }) as Editor;

    const toggleBold = useCallback(() => {
        editor.chain().focus().toggleBold().run();
    }, [editor])

    useEffect(() => {
      setEditor(editor)

      return () => {
        if(editor) {
          editor.destroy()
        }
      }
    }, [editor]) 
    
    return(
        <div className="editor">
        <div className="menu">
            <button onClick={() => console.log(editor.getHTML())}>submit</button>
          <button
            className="menu-button"
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().undo()}
          >
            <Icons.RotateLeft />
          </button>
          <button
            className="menu-button"
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().redo()}
          >
            <Icons.RotateRight />
          </button>
    
          <button
            // className={classNames("menu-button", {
            //   "is-active": editor.isActive("bold"),
            // })}
            className="menu-button"
            onClick={toggleBold}
          >
            <Icons.Bold />
          </button>
         

   
        </div>
  
       <BubbleMenu
         className="bubble-menu-light"
         tippyOptions={{ duration: 150 }}
         editor={editor}
         shouldShow={( {editor} ) => {
            return editor.state.selection.empty === false;
         }}

       >
             <button
    onClick={() => editor.chain().focus().toggleBold().run()}
    className={editor.isActive("bold") ? "is-active" : ""}
  >
    <Icons.Bold />
  </button>
  <button
    onClick={() => editor.chain().focus().toggleItalic().run()}
    className={editor.isActive("italic") ? "is-active" : ""}
  >
    <Icons.Italic />
  </button>
      </ BubbleMenu>
    
        <EditorContent editor={editor} />

      </div>
  
    )
}