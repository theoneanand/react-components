import appcss from './app.module.css'
import Accordion from "./components/accordion/Accordion"
import ColorGenerator from './components/random-color/ColorGenerator'
function App() {

  return (
    <>
    <article className={appcss.faqs}>
      <div className={appcss.container}>
          <h1 className="text-center">FAQs</h1>
          <Accordion />
      </div>
    </article>
    <article className={appcss.faqs}>
      <div className={appcss.container}>
          <h1 className="text-center">FAQs</h1>
          <Accordion multiselect={true} />
      </div>
    </article>
    <ColorGenerator />
    </>
  )
}

export default App
