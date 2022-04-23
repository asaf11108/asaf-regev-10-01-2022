import { VFC } from 'react';
import './app.scss';
import Toolbar from './components/toolbar/toolbar';
import apiKeyInterceptor from './interceptors/api-key.interceptor';
import errorInterceptor from './interceptors/erros.interceptor';
import { useFirstMountState } from 'react-use';
import AppRouting from './app-routing';
import { Content, ContentWrapper } from './app.style';
import { useSnackbar } from './providers/snackbar/snackbar.hook';

const App: VFC = () => {
  const isFirstMount = useFirstMountState();
  const openSnackbar = useSnackbar();

  if (isFirstMount) {
    apiKeyInterceptor();
    errorInterceptor(openSnackbar);
  }

  return (
    <>
      <Toolbar />

      <ContentWrapper>
        <Content>

          <AppRouting />

        </Content>
      </ContentWrapper>
    </>
  );
}

export default App;
