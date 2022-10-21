import PdfModal from '../components/modal/PdfModal'
import MainBook from '../components/book/MainBook'
import { NavigationContainer } from '../components/Global/navigation/Container'
import Login from '../components/modal/LoginModal'

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
