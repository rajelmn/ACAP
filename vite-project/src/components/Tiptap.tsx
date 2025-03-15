import { EditorProvider, FloatingMenu, BubbleMenu, useEditor, Editor } from "@tiptap/react";
import { EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import * as Icons from "./Icons"
import TextDirection from "tiptap-text-direction";
import { useCallback, useEffect } from "react";
const extensions = [StarterKit];
const content = '<p>Hello World!</p>';

export const Tiptap = ({setEditor}: {setEditor: (arg: Editor) => void}) => {
    const editor = useEditor({
       extensions: [
      StarterKit,
      TextDirection.configure({
        types: ["heading", "paragraph"],
      }),
    ],
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