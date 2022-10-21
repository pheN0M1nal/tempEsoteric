import PdfModal from '../components/modal/PdfModal'
import MainBook from '../components/book/MainBook'
import ProfileModal from '../components/modal/ProfileModal'
import SubscriptionModal from '../components/modal/SubscriptionModal'

import { NavigationContainer } from '../components/Global/navigation/Container'
import Login from '../components/modal/LoginModal'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const HomeScreen = () => {
	return (
		<>
			<NavigationContainer />
			<MainBook />
			<PdfModal />
			<SubscriptionModal />

			<ProfileModal />
			<Login />
			<ToastContainer />
		</>
	)
}

export default HomeScreen
