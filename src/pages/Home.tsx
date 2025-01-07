import { Turret } from '@/models/Turret'
import { Bug } from '../models/Bug'
import { MouseEventHandler } from 'react'
import { MOVE_SPEED } from '@/lib/globals'

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

  // console.log(newBug)

  window.setInterval(() => {
    newBug?.runPath()
  }, MOVE_SPEED + 50)
}

function createTurret(event: MouseEventHandler<HTMLDivElement>) {
  let elem = event.target

  if (elem) {
    // console.log(elem)

    Turret.create(elem as HTMLElement)
  }
}

function Home() {
  return (
    <div>
      <div className="h-[5vh] mx-12 mt-6">Credits: 1200</div>
      <div
        id="td-grid"
        className="border border-solid border-neutral-400 grid grid-cols-64 divide-x divide-y overflow-auto mx-12"
      >
        <div
          id="start-point"
          className="bg-green-600 aspect-square"
          onClick={createBug}
        ></div>
        {[...Array(1406)].map((val, index) => {
          return (
            <div
              key={index + 1}
              id={`block${index + 1}`}
              className="bg-blue-400 cursor-pointer hover:bg-blue-500 aspect-square"
              onClick={createTurret}
            ></div>
          )
        })}
        <div id="block1407" className="bg-red-600 aspect-square"></div>
      </div>
    </div>
  )
}

export default Home
