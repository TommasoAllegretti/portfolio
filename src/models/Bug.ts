import { GRID_ROW_SIZE, GRID_SIZE, MOVE_SPEED } from '@/lib/globals'
import { Entity } from './Entity'
import { checkIfBlockIsOccupied } from '@/lib/utils'

export class Bug extends Entity {
  private constructor(
    domElement: HTMLElement,
    xPos: number = 0,
    yPos: number = 0,
  ) {
    super(domElement, xPos, yPos)
  }

  static create(): Bug | null {
    let startPoint = document
      .getElementById('td-grid')
      ?.querySelector('#start-point')

    if (startPoint?.childNodes.length && startPoint?.childNodes.length > 0)
      return null

    let bugElem = document.createElement('div')

    bugElem.style.position = 'absolute'
    bugElem.style.width = '1vw'
    bugElem.style.height = '1vw'
    bugElem.style.backgroundColor = 'red'
    bugElem.style.borderRadius = '50%'
    bugElem.style.transition = 'transform 0.5s linear'
    bugElem.style.zIndex = '100'

    startPoint?.appendChild(bugElem)

    return new Bug(bugElem, 0, 0)
  }

  public moveDomElement(
    from: { x: number; y: number },
    to: { x: number; y: number },
  ) {
    let grid = document.getElementById('td-grid')

    let fromBlock = from.y * GRID_ROW_SIZE + from.x

    let toBlock = to.y * GRID_ROW_SIZE + to.x

    let newDomBlock = grid?.querySelector(`#block${toBlock}`)

    // this.domElement.style.translate = `100%`

    setTimeout(() => {
      this.domElement.style.removeProperty('transform')
      if (
        this.domElement.parentElement?.attributes.getNamedItem('id')?.value ===
        `block${GRID_SIZE - 1}`
      )
        this.delete()
      else newDomBlock?.appendChild(this.domElement)
    }, MOVE_SPEED)
  }

  public moveRight() {
    if (
      checkIfBlockIsOccupied(this.xPos + 1, this.yPos) ||
      this.deletedAt !== null
    )
      return false

    let tmp = this.xPos

    // x position is not at the end of the grid
    if (
      (this.yPos * GRID_ROW_SIZE + this.xPos + 1) % GRID_ROW_SIZE !== 0 ||
      this.yPos * GRID_ROW_SIZE + this.xPos + 1 === GRID_SIZE - 1
    ) {
      if (!(this.yPos * GRID_ROW_SIZE + this.xPos + 1 >= GRID_SIZE))
        this.domElement.style.transform = `translate(140%, 0)`

      this.xPos++

      this.moveDomElement(
        { y: this.yPos, x: tmp },
        { y: this.yPos, x: this.xPos },
      )

      return true
    }

    return false
  }

  public moveDown() {
    if (
      checkIfBlockIsOccupied(this.xPos, this.yPos + 1) ||
      this.deletedAt !== null
    )
      return false

    let tmp = this.yPos

    // y position is not at the end of the grid
    if ((this.yPos + 1) * GRID_ROW_SIZE + this.xPos < GRID_SIZE) {
      if (!(this.yPos * GRID_ROW_SIZE + this.xPos + 1 >= GRID_SIZE))
        this.domElement.style.transform = `translate(0, 140%)`

      this.yPos++
      this.moveDomElement(
        { y: tmp, x: this.xPos },
        { y: this.yPos, x: this.xPos },
      )

      return true
    }

    return false
  }

  public moveLeft() {
    if (
      checkIfBlockIsOccupied(this.xPos - 1, this.yPos) ||
      this.deletedAt !== null
    )
      return false

    let tmp = this.xPos

    // x position is not at the start of the grid
    if ((this.yPos * GRID_ROW_SIZE + this.xPos) % GRID_ROW_SIZE !== 0) {
      if (!(this.yPos * GRID_ROW_SIZE + this.xPos + 1 >= GRID_SIZE))
        this.domElement.style.transform = `translate(-140%, 0)`

      this.xPos--
      this.moveDomElement(
        { y: this.yPos, x: tmp },
        { y: this.yPos, x: this.xPos },
      )

      return true
    }

    return false
  }

  public runPath() {
    let state = this.moveRight()

    if (state === false) {
      state = this.moveDown()
    }

    if (state === false) {
      state = this.moveLeft()
    }
  }
}
