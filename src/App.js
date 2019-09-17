import React from 'react'
import './App.css'
import RemarkContext, {Panel} from 'remarkui'

function App() {
  return (
    <RemarkContext>
            <Panel alignment='center' width={300} height={300} color='red'/>
    </RemarkContext>
  );
}

export default App
