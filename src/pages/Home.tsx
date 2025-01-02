import { MouseEventHandler } from 'react'

function createElement(text: string) {
  const newDiv = document.createElement('div')

  const newContent = document.createTextNode(text)

  newDiv.appendChild(newContent)

  return newDiv
}

function createBug(event: MouseEventHandler<HTMLDivElement>) {
  console.log(event)

  let elem = event.target

  if (elem) {
    let newDiv = createElement('Bug')

    elem.appendChild(newDiv)
  }
}

function Home() {
  return (
    <div className="h-[95vh] border border-solid border-neutral-400 grid grid-cols-12 divide-x divide-y overflow-auto">
      <div id="block0" className="bg-green-600">
        X
      </div>
      {[...Array(82)].map((val, index) => {
        return (
          <div
            key={index + 1}
            id={`block${index + 1}`}
            className="bg-blue-400"
            onClick={createBug}
          >
            {index + 1}
          </div>
        )
      })}
      <div id="block83" className="bg-red-600">
        X
      </div>
    </div>
  )
}

export default Home
