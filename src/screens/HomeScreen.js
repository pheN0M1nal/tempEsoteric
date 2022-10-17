import PdfModal from '../components/modal/PdfModal'
import MainBook from '../components/book/MainBook'
import Login from '../components/Login-Signup/Login'
import { NavigationContainer } from '../components/Global/navigation/Container'

const HomeScreen = () => {
	return (
		<>
			<NavigationContainer />
			<MainBook />
			<PdfModal />
			<Login />
		</>
	)
}

export default HomeScreen
