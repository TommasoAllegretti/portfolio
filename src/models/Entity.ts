import { GRID_ROW_SIZE, GRID_SIZE } from '@/lib/globals'
import { Position } from './types'

export abstract class Entity {
  private readonly id: string
  public createdAt: Date
  public deletedAt: Date | null
  public domElement: HTMLElement
  public xPos: number
  public yPos: number
  public topLeft: Position | null
  public top: Position | null
  public topRight: Position | null
  public left: Position | null
  public bottomLeft: Position | null
  public right: Position | null
  public bottom: Position | null
  public bottomRight: Position | null

  public constructor(domElement: HTMLElement, xPos: number = 0, yPos: number = 0) {
    this.id = this.generateId()
    this.createdAt = new Date()
    this.deletedAt = null
    this.domElement = domElement
    domElement.setAttribute('id', this.id)
    this.xPos = xPos
    this.yPos = yPos

    this.topLeft = yPos > 0 && xPos > 0 ? { x: xPos - 1, y: yPos - 1 } : null

    this.top = yPos > 0 ? { x: xPos, y: yPos - 1 } : null

    this.topRight = yPos > 0 && xPos < GRID_ROW_SIZE - 1 ? { x: xPos + 1, y: yPos - 1 } : null

    this.left = xPos > 0 ? { x: xPos - 1, y: yPos } : null

    this.right = xPos < GRID_ROW_SIZE - 1 ? { x: xPos + 1, y: yPos } : null

    this.bottomLeft = xPos > 0 && yPos < GRID_SIZE / GRID_ROW_SIZE ? { x: xPos - 1, y: yPos + 1 } : null

    this.bottom = yPos < GRID_SIZE / GRID_ROW_SIZE ? { x: xPos, y: yPos + 1 } : null

    this.bottomRight = xPos < GRID_ROW_SIZE - 1 && yPos < GRID_SIZE / GRID_ROW_SIZE ? { x: xPos + 1, y: yPos + 1 } : null
  }

  private generateId() {
    return Math.random().toString(36).substr(2, 9)
  }

  public delete() {
    this.deletedAt = new Date()
    this.domElement.remove()
  }
}
