/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */

//Modals
export {default as Raport} from './modal/Raport'

//MainPage
export {default as Main} from './mainPage'
export {default as Dashboard} from './home-page/dashboard'

//Infobar
export {default as Infobar} from './infobar/infobar_component'
export {default as InfobarNavigation} from './infobar/infobar_navigtion'

//Sidebar
export {default as Sidebar} from './sidebar/sidebar_component'
export {default as SidebarNavigation} from './sidebar/sidebar_navigation'

//Toolbar
export {default as Toolbar} from './toolbar/toolbar_component'
export {default as ToolbarNavigation} from './toolbar/toolbar_navigation'
export {default as ToolbarSearch} from './toolbar/toolbar_search'
export {default as ToolbarUser} from './toolbar/toolbar_user'

export {default as Logo} from './logo'

//Display
export {default as Display} from './display/routes'
export {default as LogIn} from './display/login'
export {default as SignUp} from './display/signup'

//Display/maintenance
export {default as Home} from './display/main/home_index'
export {default as Calendar} from './display/calendar/calendar_index'
export {default as Payments} from './display/payments/payments_index'

//Display/Account
export {default as Account} from './display/account/account_index'
export {default as UserProfile} from './display/account/account_profile'
export {default as AccountServices} from './display/account/account_services'
export {default as UploadImage} from './display/account/account-uploadImage'
//Display/Account/Account_forms
export {
  default as AccountPassword
} from './display/account/account_forms/account_password'
export {
  default as AccountOther
} from './display/account/account_forms/account_other'
export {
  default as AccountPhone
} from './display/account/account_forms/account_phone'
export {
  default as AccountRequest
} from './display/account/account_forms/account_request'
export {
  default as AccountDelete
} from './display/account/account_forms/account_delete'

export {default as Maintenance} from './display/maintenance/maintenance_index'
export {default as IconBox} from './display/maintenance/maintenance_icons'
export {
  default as MaintenanceForm
} from './display/maintenance/maintenance_form'

//Display/folder
export {default as Folder} from './display/folder/folder_index'
export {default as FolderDisplay} from './display/folder/folder_display'
//Display/folder/folder_options
export {default as RentLog} from './display/folder/folder_logs/rent_log'
export {default as ServiceLog} from './display/folder/folder_logs/service_log'
export {
  default as FolderNavigation
} from './display/folder/folder_logs/navigation'
