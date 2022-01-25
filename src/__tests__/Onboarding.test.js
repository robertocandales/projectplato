import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import OnboardingTracker from '../pages/OnboardingTracker';
import generateStore from '../redux/store';
import { Text } from '../shared/globalStyles';

const store = generateStore();
describe('rendering component', () => {
  it('renders Onboarding component without crashing', () => {
    shallow(
      <Provider store={store}>
        <OnboardingTracker />
      </Provider>,
    );
  });
  it('renders Onboarding component title without crashing', () => {
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <OnboardingTracker />
        </BrowserRouter>
      </Provider>,
    );
    const title = (
      <Text fontWeight='800' fontsize='26px' padding='5vh 0 0 0'>
        Onboarding Tracker
      </Text>
    );

    expect(wrapper.contains(title)).toEqual(true);
  });
});
