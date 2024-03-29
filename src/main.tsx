import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HooksApp } from './HooksApp'
import { CounterApp } from './01-useState/CounterApp'
import { CustomHookCounter } from './01-useState/CustomHookCounter'
//import { SimpleForm } from './02-useffect/SimpleForm'
import { FormWithCustomHook } from './02-useffect/FormWithCustomHook'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <HooksApp/>
    <CounterApp/>
    <CustomHookCounter/>
    {/* <SimpleForm/> */}
    <FormWithCustomHook/>
    <MultipleCustomHooks/>
  </>,
)

