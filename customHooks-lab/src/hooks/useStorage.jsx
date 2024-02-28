import { useState } from "react"

function useStorage(parameter) {
    const [state, setState] = useState(parameter)
    const handleSetter = (value) => {
        setState(value)
    }
  return [state,handleSetter]
}

export default useStorage
