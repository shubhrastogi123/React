import Component from "./component1"

function App() {
  const username = "Shubham"

  return (
    <>
    <Component />
    {/* here {username} is an evaluated expression means done after evaluated the js */}
    <h1>React on vite with {username}</h1>
    </>
  )
}

export default App
