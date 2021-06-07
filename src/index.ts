import { dotenv } from '@config/dotenv'
import { app } from '@src/app'

app.listen(dotenv.PORT || 3333, () => {
	console.log(`Server is running. Port: ${dotenv.PORT || 3333}`)
})
