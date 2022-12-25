import { FieldError, UseFormRegisterReturn } from 'react-hook-form'

export interface iButtonProps{
  onClick: MouseEvent;
  id: number;
  name: string;
  type: string;
}

export interface MouseEvent {
  altKey: boolean;
  button: number;
  buttons: number;
  clientX: number;
  clientY: number;
  ctrlKey: boolean;
  movementX: number;
  movementY: number;
  pageX: number;
  pageY: number;
  relatedTarget: EventTarget | null;
  screenX: number;
  screenY: number;
  shiftKey: boolean;
}