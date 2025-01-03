import { Bug } from '../models/Bug'
import { MouseEventHandler } from 'react'

function createElement(text: string) {
  const newDiv = document.createElement('div')

  const newContent = document.createTextNode(text)

  newDiv.appendChild(newContent)

  return newDiv
}

function createBug(event: MouseEventHandler<HTMLDivElement>) {
  // console.log(event)
  // let elem = event.target
  // if (elem) {
  //   let newDiv = createElement('Bug')
  //   newDiv.style.position = 'absolute'
  //   elem.appendChild(newDiv)
  // }

  let newBug = Bug.create()

  console.log(newBug)

  window.setInterval(() => {
    newBug?.runPath()
  }, 1000)
}

function Home() {
  return (
    <div
      id="td-grid"
      className="h-[93vh] border border-solid border-neutral-400 grid grid-cols-12 divide-x divide-y overflow-auto"
    >
      <div id="start-point" className="bg-green-600"></div>
      {[...Array(82)].map((val, index) => {
        return (
          <div
            key={index + 1}
            id={`block${index + 1}`}
            className="bg-blue-400"
            onClick={createBug}
          ></div>
        )
      })}
      <div id="block83" className="bg-red-600"></div>
    </div>
  )
}

export default Home
