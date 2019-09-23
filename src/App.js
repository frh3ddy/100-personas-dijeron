import React from 'react'
import './App.css'
import RemarkContext, {Panel} from 'remarkui'

function App() {
  return (
    <RemarkContext>
            <Panel alignment='center' width={300} height={300} color='red'>
              <Panel alignment='bottomRight' width={100} height={100} color='tomato'>
                <Panel width={25} height={25} color='blue'/>
              </Panel>
            </Panel>
            <Panel width={300} height={300} color='red'>
              <Panel alignment='bottomRight' width={100} height={100} color='tomato'>
                <Panel width={25} height={25} color='blue'/>
              </Panel>
            </Panel>
            <Panel alignment='bottomRight' width={300} height={300} color='red'>
              <Panel alignment='bottomRight' width={100} height={100} color='tomato'>
                <Panel width={25} height={25} color='blue'/>
              </Panel>
            </Panel>
    </RemarkContext>
  );
}

export default App
