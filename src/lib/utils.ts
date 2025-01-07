import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { GRID_ROW_SIZE } from './globals'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function checkIfBlockIsOccupied(x: number, y: number) {
  if (y * GRID_ROW_SIZE + x < 0) return false

  let grid = document.getElementById('td-grid')

  let block = grid?.querySelector(`#block${y * GRID_ROW_SIZE + x}`)

  if (block?.childNodes.length && block?.childNodes.length > 0) return true

  return false
}
