import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { GRID_ROW_SIZE } from './globals'
import { Position } from '@/models/types'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function checkIfBlockIsOccupied(position: Position) {
  if (position.y * GRID_ROW_SIZE + position.x < 0) return null

  let block = getCellFromPosition(position)

  if (block?.childNodes.length && block?.childNodes.length > 0) return block.children[0].id

  return null
}

export function getCellFromPosition(position: Position) {
  return document.getElementById('td-grid')?.querySelector(`#block${position.y * GRID_ROW_SIZE + position.x}`)
}
