import { checkIfBlockIsOccupied } from '@/lib/utils'
import { Entity } from './Entity'
import { Position } from './types'

export class Turret extends Entity {
  public shotReady: boolean
  public shotCooldown: number
  private constructor(domElement: HTMLElement, xPos: number = 0, yPos: number = 0, shotCooldown: number = 1000) {
    super(domElement, xPos, yPos)

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

  public checkAdjacentBlocks() {
    let adjacentBlocks = [this.topLeft, this.top, this.topRight, this.left, this.right, this.bottomLeft, this.bottom, this.bottomRight]

    let target = adjacentBlocks.find((pos) => pos !== null && checkIfBlockIsOccupied(pos) !== null)

    if (this.shotReady && this.xPos - 1 >= 0 && target) {
      console.log(target)
      this.shoot(target)
    }
  }

  public shoot(target: Position) {
    console.log('shoot')
    this.shotReady = false
    this.shootDOM(target)

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
    bullet.style.transition = 'transform 0.1s linear'

    this.domElement.appendChild(bullet)

    setTimeout(() => {
      bullet.style.transform = `translate(350%, 0)`
      setTimeout(() => {
        bullet.remove()
      }, 1000)
    }, 100)
  }
}
