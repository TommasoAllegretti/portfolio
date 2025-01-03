export abstract class Entity {
  private readonly id: string
  public createdAt: Date
  public deletedAt: Date | null
  public domElement: HTMLElement
  public xPos: number
  public yPos: number

  public constructor(
    domElement: HTMLElement,
    xPos: number = 0,
    yPos: number = 0,
  ) {
    this.id = this.generateId()
    this.createdAt = new Date()
    this.deletedAt = null
    this.domElement = domElement
    this.xPos = xPos
    this.yPos = yPos
  }

  private generateId() {
    return Math.random().toString(36).substr(2, 9)
  }

  public delete() {
    this.deletedAt = new Date()
  }
}
