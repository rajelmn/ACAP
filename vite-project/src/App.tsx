import Header from "./components/header"
import Main from "./components/mainContent"
import { useState } from "react";
import './App.css'

function App() {
  const [lang, setLang] = useState<string>("");
  return (
    <>
  <Header setLang={setLang}/>
  <Main lang={lang}/>
    </>
  )
}

export default App
