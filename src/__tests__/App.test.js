import { shallow } from 'enzyme'
import App from '../App'

describe('rendering component', () => {
    it('renders App component without crashing', () => {
        shallow(<App />)
    })
})
