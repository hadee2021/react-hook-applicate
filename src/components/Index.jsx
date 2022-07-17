import { useReducer } from "react"
import { indexReducer, indexInitialState, IndexContext} from '../reducer/IndexReducer'
import Box from './Box'
function Index() {
  return (
    <div>
      <IndexContext.Provider value={useReducer(indexReducer, indexInitialState)}>
        <Box />
      </IndexContext.Provider>
    </div>
  )
}

export default Index