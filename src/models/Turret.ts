import { Entity } from './Entity'
import { pathBuilder } from './PathBuilder'

export class Turret extends Entity {
  private constructor(
    domElement: HTMLElement,
    xPos: number = 0,
    yPos: number = 0,
  ) {
    super(domElement, xPos, yPos)
  }

  static create(blockElement: HTMLElement): Turret | null {
    let idStr = blockElement.getAttribute('id')

    if (blockElement?.childNodes.length && blockElement?.childNodes.length > 0)
      return null

    let turretElem = document.createElement('div')

    turretElem.style.position = 'absolute'
    turretElem.style.width = '1vw'
    turretElem.style.height = '1vw'
    turretElem.style.backgroundColor = 'green'
    turretElem.style.borderRadius = '50%'

    blockElement?.appendChild(turretElem)

    let idNum = Number(idStr?.replace('block', ''))

    let blockY = Math.floor(idNum / 64)

    let blockX = idNum % 64

    // console.log(blockX, blockY)

    // console.log(pathBuilder.limitIsTouched(blockX, blockY))

    console.log(pathBuilder.checkIfLimitsPath(blockX, blockY))

    return new Turret(turretElem, blockX, blockY)
  }
}
