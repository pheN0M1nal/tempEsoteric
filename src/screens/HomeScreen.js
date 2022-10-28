import PdfModal from '../components/modal/PdfModal'
import MainBook from '../components/book/MainBook'
import ProfileModal from '../components/modal/ProfileModal'
import SubscriptionModal from '../components/modal/SubscriptionModal'
import BlogModal from '../components/modal/BlogModal'
import { NavigationContainer } from '../components/Global/navigation/Container'
import Login from '../components/modal/LoginModal'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FooterContainer } from '../components/Global/footer/Container'
import Chat from '../components/chatBody/components/Chat'

const HomeScreen = () => {
	return (
		<>
			<NavigationContainer />
			<MainBook />
			<FooterContainer />
			<PdfModal />
			<SubscriptionModal />
			<ProfileModal />
			<BlogModal />
			<Login />
			<ToastContainer />
			<Chat />
		</>
	)
}

export default HomeScreen
