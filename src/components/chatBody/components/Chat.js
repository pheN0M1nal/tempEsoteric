import react, { useState } from 'react'
import { Launcher } from 'react-chat-window'

const Chat = () => {
	const [messageList, setMessageList] = useState([])

	const _onMessageWasSent = message => {
		console.log(message)
		setMessageList([...messageList, message])
	}

	const onFilesSelected = fileList => {
		console.log(fileList)
	}

	return (
		<div>
			<Launcher
				agentProfile={{
					teamName: 'react-chat-window',
					imageUrl:
						'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png',
				}}
				onMessageWasSent={_onMessageWasSent}
				messageList={messageList}
				onFilesSelected={onFilesSelected}
				showEmoji
			/>
		</div>
	)
}

export default Chat
