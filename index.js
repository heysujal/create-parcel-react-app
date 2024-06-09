import React from "react"
import ReactDOM from 'react-dom'

const heading = React.createElement("h1", {}, "Parcel-React-App is now Running ⚡")

const root = ReactDOM.createRoot(document.querySelector("#root"))

root.render(heading)


