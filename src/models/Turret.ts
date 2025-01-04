import { Entity } from './Entity'

export class Turret extends Entity {
  private constructor(
    domElement: HTMLElement,
    xPos: number = 0,
    yPos: number = 0,
  ) {
    super(domElement, xPos, yPos)
  }

  static create(blockElement: HTMLElement): Turret | null {
    if (blockElement?.childNodes.length && blockElement?.childNodes.length > 0)
      return null

    let turretElem = document.createElement('div')

    turretElem.style.position = 'absolute'
    turretElem.style.width = '1vw'
    turretElem.style.height = '1vw'
    turretElem.style.backgroundColor = 'green'
    turretElem.style.borderRadius = '50%'

    blockElement?.appendChild(turretElem)

    return new Turret(turretElem, 0, 0)
  }
}
