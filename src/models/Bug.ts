import { Entity } from './entity'

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
    bugElem.style.width = '20px'
    bugElem.style.height = '20px'
    bugElem.style.backgroundColor = 'red'
    bugElem.style.borderRadius = '50%'

    startPoint?.appendChild(bugElem)

    return new Bug(bugElem, 0, 0)
  }

  public checkIfBlockIsOccupied(x: number, y: number) {
    let grid = document.getElementById('td-grid')

    let block = grid?.querySelector(`#block${y * 12 + x}`)

    if (block?.childNodes.length && block?.childNodes.length > 0) return true

    return false
  }

  public moveDomElement(
    from: { x: number; y: number },
    to: { x: number; y: number },
  ) {
    let grid = document.getElementById('td-grid')

    let fromBlock = from.y * 12 + from.x

    let toBlock = to.y * 12 + to.x

    let newDomBlock = grid?.querySelector(`#block${toBlock}`)

    // this.domElement.style.translate = `100%`

    // setTimeout(() => {
    newDomBlock?.appendChild(this.domElement)
    // }, 1000)
  }

  public moveRight() {
    if (this.checkIfBlockIsOccupied(this.xPos + 1, this.yPos)) return false

    let tmp = this.xPos

    // x position is not at the end of the grid
    if ((this.yPos * 12 + this.xPos + 1) % 12 !== 0) {
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
    if (this.checkIfBlockIsOccupied(this.xPos, this.yPos + 1)) return false

    let tmp = this.yPos

    // y position is not at the end of the grid
    if (this.yPos + 1 * 12 + this.xPos < 83) {
      this.yPos++
      this.moveDomElement(
        { y: tmp, x: this.xPos },
        { y: this.yPos, x: this.xPos },
      )

      return true
    }

    return false
  }

  public runPath() {
    let state = this.moveRight()

    if (state === false) {
      this.moveDown()
    }
  }
}
