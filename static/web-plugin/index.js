const logo = '<path d="M17.24,8.7a1.94,1.94,0,0,1-1.38-3.3,1.94,1.94,0,0,1,3.31,1.36,1.86,1.86,0,0,1-.57,1.38A1.9,1.9,0,0,1,17.24,8.7Zm0,5.17a1.84,1.84,0,0,1-1.38-.58,1.93,1.93,0,1,1,3.31-1.36,2,2,0,0,1-1.93,1.94Zm0,5.17a1.84,1.84,0,0,1-1.38-.58,1.94,1.94,0,0,1,0-2.73,1.93,1.93,0,1,1,2.74,2.73A1.84,1.84,0,0,1,17.24,19ZM6.9,8.7A1.92,1.92,0,0,1,5.54,5.4a1.92,1.92,0,0,1,2.73,0,1.86,1.86,0,0,1,.56,1.36A1.91,1.91,0,0,1,6.9,8.7Zm0,5.17a1.82,1.82,0,0,1-1.36-.58A1.93,1.93,0,0,1,6.9,10a1.93,1.93,0,0,1,1.93,1.93,1.84,1.84,0,0,1-.56,1.36A1.81,1.81,0,0,1,6.9,13.87ZM6.9,19a1.82,1.82,0,0,1-1.36-.58,1.9,1.9,0,0,1,0-2.73,1.84,1.84,0,0,1,1.36-.56,1.93,1.93,0,0,1,1.37,3.29A1.81,1.81,0,0,1,6.9,19ZM21.11.32H3a2.47,2.47,0,0,0-1.82.76A2.48,2.48,0,0,0,.46,2.89V21a2.5,2.5,0,0,0,.75,1.82A2.5,2.5,0,0,0,3,23.54H21.11A2.58,2.58,0,0,0,23.68,21V2.89a2.45,2.45,0,0,0-.76-1.81A2.45,2.45,0,0,0,21.11.32Z"/>'
const libraryUrl = 'web-plugin/dicemaster.html'
const libraryTitle = 'Dice Master'

miro.onReady(() => {
	miro.initialize({
		extensionPoints: {
			bottomBar: {
				title: libraryTitle,
				svgIcon: logo,
				onClick: async () => {
					const authorized = await miro.isAuthorized()
					if (authorized) {
						miro.board.ui.openLibrary(libraryUrl, {title: libraryTitle})	
					} else {
						miro.board.ui.openModal('web-plugin/not-authorized.html')
							.then(res => {
								if (res === 'success') {
									miro.board.ui.openLibrary(libraryUrl, {title: libraryTitle})	
								}
							})
					}
				}
			}
		}
	})
})
