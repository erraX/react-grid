import ReactDOM from 'react-dom'
import React from 'react'
import ReactGrid from '../lib/ReactGrid'

ReactDOM.render(
    <ReactGrid>
        <div key="halo1"><span>1</span></div>
        <div key="halo2"><span>2</span></div>
        <div key="halo3"><span>3</span></div>
        <div key="halo4"><span>4</span></div>
        <div key="halo5"><span>5</span></div>
        <div key="halo6"><span>6</span></div>
    </ReactGrid>,
    document.getElementById('main')
)
