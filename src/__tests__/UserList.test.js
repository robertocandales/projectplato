import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import UserList from '../pages/OnboardingTracker/components/UserList';
import generateStore from '../redux/store';
import { Text } from '../shared/globalStyles';

const store = generateStore();
describe('rendering component', () => {
  it('renders user list component without crashing', () => {
    shallow(
      <Provider store={store}>
        <UserList />
      </Provider>,
    );
  });
  it('renders user list component title without crashing', () => {
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <UserList />
        </BrowserRouter>
      </Provider>,
    );
    const title = (
      <Text fontWeight='600' fontsize='20px' padding='0px 0 10px 0'>
        User list
      </Text>
    );

    expect(wrapper.contains(title)).toEqual(true);
  });
});
