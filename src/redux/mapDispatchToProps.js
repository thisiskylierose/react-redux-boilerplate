import { bindActionCreators } from 'redux';

// import * as counterActions from './counter/actions';
import * as greetingActions from './greeting/actions';

const mapDispatchToProps = dispatch => ({
  actions: {
    // counter: {
    //   ...bindActionCreators(counterActions, dispatch)
    // },
    greeting: {
      ...bindActionCreators(greetingActions, dispatch)
    }
  }
});

export default mapDispatchToProps;
