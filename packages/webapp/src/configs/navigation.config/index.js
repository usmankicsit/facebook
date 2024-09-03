import { 
    NAV_ITEM_TYPE_TITLE, 
    NAV_ITEM_TYPE_COLLAPSE, 
    NAV_ITEM_TYPE_ITEM 
} from '@/constants/navigation.constant'

const navigationConfig = [
    {
        key: 'home',
		path: '/home',
		title: 'Home',
		translateKey: 'nav.home',
		icon: 'home',
		type: NAV_ITEM_TYPE_ITEM,
		authority: [],
        subMenu: []
    },
	{
		key: "account-settings",
		path: `/account-settings`,
		title: "Account Settings",
		translateKey: "nav.accountsetting",
		icon: "accountSettings",
		authority: [],
		all:true,
		type: NAV_ITEM_TYPE_ITEM,
		subMenu: [],
	},
]

export default navigationConfig