import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HooksApp } from './HooksApp'
import { CounterApp } from './01-useState/CounterApp'
import { CustomHookCounter } from './01-useState/CustomHookCounter'
import { SimpleForm } from './02-useffect/SimpleForm'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HooksApp/>
    <CounterApp/>
    <CustomHookCounter/>
    <SimpleForm/>
  </React.StrictMode>,
)
