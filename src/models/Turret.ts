import { checkIfBlockIsOccupied } from '@/lib/utils'
import { Entity } from './Entity'
import { Position } from './types'

export class Turret extends Entity {
  public shotReady: boolean
  public shotCooldown: number
  private constructor(domElement: HTMLElement, xPos: number = 0, yPos: number = 0, shotCooldown: number = 1000) {
    super(Turret.generateId(), domElement, xPos, yPos)

    this.shotReady = true
    this.shotCooldown = shotCooldown

    setInterval(() => this.checkAdjacentBlocks(), 100)
  }

  static create(blockElement: HTMLElement): Turret | null {
    let idStr = blockElement.getAttribute('id')

    if (blockElement?.childNodes.length && blockElement?.childNodes.length > 0) return null

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

    return new Turret(turretElem, blockX, blockY)
  }

  static generateId() {
    return 'Turret' + Math.random().toString(36).substr(2, 9)
  }

  public checkAdjacentBlocks() {
    let adjacentBlocks = [this.topLeft, this.top, this.topRight, this.left, this.right, this.bottomLeft, this.bottom, this.bottomRight]

    let targetId = null
    let targetPosition = null

    adjacentBlocks.forEach((pos) => {
      if (
        pos !== null &&
        checkIfBlockIsOccupied(pos) !== null &&
        checkIfBlockIsOccupied(pos)?.includes('Bug') &&
        Number(document.getElementById(checkIfBlockIsOccupied(pos)!)!.style.opacity) > 0
      ) {
        targetId = checkIfBlockIsOccupied(pos)
        targetPosition = pos
      }
    })

    if (this.shotReady && this.xPos - 1 >= 0 && targetId !== null) {
      this.shoot(targetId, targetPosition!)
    }
  }

  public shoot(targetId: string, targetPosition: Position) {
    this.shotReady = false
    this.shootDOM(targetPosition)

    const targetElement: HTMLElement = document.getElementById('td-grid')!.querySelector(`#${targetId}`)!

    let targetOpacity = Number(targetElement?.style.opacity)

    targetElement.style.opacity = `${targetOpacity - 0.1}`

    setTimeout(() => {
      this.shotReady = true
    }, this.shotCooldown)
  }

  public shootDOM(target: Position) {
    let bullet = document.createElement('div')

    bullet.style.position = 'absolute'
    bullet.style.width = '0.5vw'
    bullet.style.height = '0.5vw'
    bullet.style.backgroundColor = 'white'
    bullet.style.borderRadius = '50%'
    bullet.style.transition = 'transform 0.05s linear'

    this.domElement.appendChild(bullet)

    const xTransform = (target.x - this.xPos) * 350
    const yTransform = (target.y - this.yPos) * 350

    setTimeout(() => {
      bullet.style.transform = `translate(${xTransform}%, ${yTransform}%)`
      setTimeout(() => {
        bullet.remove()
      }, 100)
    }, 50)
  }
}
