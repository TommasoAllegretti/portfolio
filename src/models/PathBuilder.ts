import { GRID_ROW_SIZE, GRID_SIZE } from '@/lib/globals'
import { checkIfBlockIsOccupied } from '@/lib/utils'

class PathBuilder {
  private static _instance: PathBuilder
  public grid: HTMLElement | null = document.getElementById('td-grid')

  private constructor() {
    this.grid = document.getElementById('td-grid')
  }

  public static Instance(): PathBuilder {
    return this._instance || (this._instance = new this())
  }

  public positionIsInsideGrid(x: number, y: number) {
    return (
      x >= 0 && x < GRID_ROW_SIZE && y >= 0 && y < GRID_SIZE / GRID_ROW_SIZE
    )
  }

  public limitIsTouched(x: number, y: number) {
    let limitsTouched = {
      top: false,
      right: false,
      bottom: false,
      left: false,
    }

    if (y === 0) {
      limitsTouched.top = true
    }

    if (x === GRID_ROW_SIZE - 1) {
      limitsTouched.right = true
    }

    if (x === 0) {
      limitsTouched.left = true
    }

    if (y >= GRID_SIZE / GRID_ROW_SIZE - 1) {
      limitsTouched.bottom = true
    }

    return limitsTouched
  }

  public checkIfLimitsPath(
    x: number,
    y: number,
    alreadyChecked: number[][] = [],
    limitsTouched: {
      top: boolean
      right: boolean
      bottom: boolean
      left: boolean
    } = { top: false, right: false, bottom: false, left: false },
  ) {
    console.log(x, y, alreadyChecked, limitsTouched)

    console.log(
      alreadyChecked.some(
        (elem) => JSON.stringify(elem) === JSON.stringify([x, y]),
      ),
    )

    if (
      !alreadyChecked.some(
        (elem) => JSON.stringify(elem) === JSON.stringify([x, y]),
      ) &&
      this.positionIsInsideGrid(x, y)
    ) {
      alreadyChecked.push([x, y])

      let newLimits = this.limitIsTouched(x, y)

      limitsTouched = {
        top: limitsTouched.top || newLimits.top,
        right: limitsTouched.right || newLimits.right,
        bottom: limitsTouched.bottom || newLimits.bottom,
        left: limitsTouched.left || newLimits.left,
      }

      let adjacentBlocks = [
        [x - 1, y - 1],
        [x, y - 1],
        [x + 1, y - 1],
        [x - 1, y],
        [x + 1, y],
        [x - 1, y + 1],
        [x, y + 1],
        [x + 1, y + 1],
      ]

      adjacentBlocks.forEach((block) => {
        if (
          checkIfBlockIsOccupied(block[0], block[1]) &&
          !alreadyChecked.some(
            (elem) =>
              JSON.stringify(elem) === JSON.stringify([block[0], block[1]]),
          )
        ) {
          alreadyChecked.push([block[0], block[1]])

          let newlimitsTouchedFromAdj = this.checkIfLimitsPath(
            block[0],
            block[1],
            alreadyChecked,
            limitsTouched,
          )

          limitsTouched = {
            top: limitsTouched.top || newlimitsTouchedFromAdj.top,
            right: limitsTouched.right || newlimitsTouchedFromAdj.right,
            bottom: limitsTouched.bottom || newlimitsTouchedFromAdj.bottom,
            left: limitsTouched.left || newlimitsTouchedFromAdj.left,
          }
        }
      })
    }

    return limitsTouched
  }
}

export const pathBuilder = PathBuilder.Instance()
