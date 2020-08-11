import {
  AccountDelete,
  AccountPassword,
  AccountRequest,
  AccountOther
  //AccountPhone
} from '../components'
export const allServices = ['Change', 'Other', 'Options', 'Delete']
export default service => {
  switch (service) {
    case 'Change':
      return AccountPassword
    case 'Other':
      return AccountOther
    // case 'Add':
    //   return AccountPhone
    case 'Options':
      return AccountRequest
    case 'Delete':
      return AccountDelete
    default: {
      return ''
    }
  }
}
