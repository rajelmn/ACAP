import { BubbleMenu, useEditor, Editor } from "@tiptap/react";
import { EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import * as Icons from "./Icons"
import TextDirection from "tiptap-text-direction";
import { useCallback, useEffect } from "react";
// const extensions = [StarterKit];
const content = '<p>Hello World!</p>';

export const Tiptap = ({setEditor, blogContent}: {setEditor: (arg: Editor) => void, blogContent?: string}) => {
    const editor = useEditor({
       extensions: [
      StarterKit,
      TextDirection.configure({
        types: ["heading", "paragraph"],
      }),
    ],
        content: blogContent || content,
    }) as Editor;

    const toggleBold = useCallback(() => {
        editor.chain().focus().toggleBold().run();
    }, [editor])

    // Fixed heading toggle - specifying level 1
    const toggleH1 = useCallback(() => {
        editor.chain().focus().toggleHeading({ level: 1 }).run();
    }, [editor])
    
    // Added H2 toggle function
    const toggleH2 = useCallback(() => {
        editor.chain().focus().toggleHeading({ level: 2 }).run();
    }, [editor])

    useEffect(() => {
      setEditor(editor)

      return () => {
        if(editor) {
          editor.destroy()
        }
      }
    }, [setEditor, editor]) 
    
    return(
        <div className="editor">
        <div className="menu">
          <button
            className="menu-button"
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().undo()}
            type="button"
          >
            <Icons.RotateLeft />
          </button>
          <button
            className="menu-button"
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().redo()}
            type="button"
          >
            <Icons.RotateRight />
          </button>
    
          <button
            className={`menu-button ${editor.isActive('bold') ? 'is-active' : ''}`}
            onClick={toggleBold}
            type="button"
          >
            <Icons.Bold />
          </button>
         
          {/* Fixed H1 button with active state */}
          <button
            className={`menu-button ${editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}`}
            onClick={toggleH1}
            type="button"
          >
            H1
          </button>
    
          {/* Added H2 button with active state */}
          <button
            className={`menu-button ${editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}`}
            onClick={toggleH2}
            type="button"
          >
            H2
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
            type="button"
          >
            <Icons.Bold />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor.isActive("italic") ? "is-active" : ""}
            type="button"
          >
            <Icons.Italic />
          </button>
          
          {/* Added heading options to bubble menu */}
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            className={editor.isActive("heading", { level: 1 }) ? "is-active" : ""}
            type="button"
          >
            H1
          </button>
          <button
          type="button"
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}
          >
            H2
          </button>
      </BubbleMenu>
    
      <EditorContent editor={editor}  />

      </div>
    )
}