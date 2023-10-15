import './App.css'
import React from 'react'
import Graph from './components/Graph'
import Form from './components/Form'
import { TransactionProvider } from './components/AppContext'

function App() {

  return (
    <TransactionProvider>
    <div className="App">
    <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800">
      <h1 className="text-4xl mt-4 py-8 mb-10 bg-slate-800 text-white rounded-xl">Expense Tracker</h1>
      <div className="grid md:grid-cols-2 gap-4">
          <Graph></Graph>
          <Form></Form>
      </div>
    </div>
  </div>
  </TransactionProvider>
  )
}

export default App
