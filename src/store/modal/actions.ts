export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export interface CustomModalProps {
  content?: any
  closeOnOverlayPress?: boolean
  closable?: boolean
}

interface IShowModalAction {
  type: typeof SHOW_MODAL
  payload: CustomModalProps
}

interface IHideModalAction {
  type: typeof HIDE_MODAL
}

export type ModalActionTypes = IShowModalAction | IHideModalAction

export function showModal(props: CustomModalProps): IShowModalAction {
  return {
    type: SHOW_MODAL,
    payload: props
  };
}

export function hideModal(): IHideModalAction {
  return {
    type: HIDE_MODAL
  };
}
