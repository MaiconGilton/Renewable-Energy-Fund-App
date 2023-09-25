import { type CustomModalProps, HIDE_MODAL, type ModalActionTypes, SHOW_MODAL } from './actions';

const initialState: CustomModalProps = {
  content: null,
  closeOnOverlayPress: true,
  closable: false
};

function userReducer(state = initialState, action: ModalActionTypes): CustomModalProps {
  switch (action.type) {
    case SHOW_MODAL:
      return action.payload

    case HIDE_MODAL:
      return {}

    default:
      return state;
  }
}

export default userReducer;
