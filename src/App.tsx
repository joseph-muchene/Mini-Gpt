import { Dispatch, SetStateAction, useState } from 'react'
import Input from './Components/Input'
import Navbar from './Components/Navbar'
import Output from './Components/Output'
import axios, { AxiosError } from 'axios'
import Loading from './Components/Loading'
function App() {
  const [sourceText, setSourceText] = useState<string>("")
  const [targetText, setTargetText] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)



  const handleState = async (e: React.FormEvent<InputEvent>) => {
    e.preventDefault()
    setLoading(!loading)
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Origin, Content-Type, Authorization",
        "Authorization": `Bearer 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`,

      },
    }
    try {

      const response = await axios.post("https://api.openai.com/v1/chat/completions",
        {

          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: sourceText }],


        },
        config)

      setTargetText(response.data.choices[0].message.content)
      setLoading(false)
      setSourceText("")
    } catch (error) {
      console.log(error)
      if (error instanceof AxiosError) {
        console.log(error.message)
      }
      return error
    }
  }



  const propData: {
    sourceText: string,
    setSourceText: Dispatch<SetStateAction<string>>,
    handleState: any
  } = {
    sourceText,
    setSourceText, handleState

  }
  const targetData: { targetText: string, } = {
    targetText,

  }


  return (
    <>
      <Navbar />

      <Output {...targetData} />
      {loading && <Loading />}
      <Input {...propData} />

    </>
  )
}

export default App
