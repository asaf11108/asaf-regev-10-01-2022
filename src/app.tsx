import { VFC } from 'react';
import Toolbar from './components/toolbar/toolbar';
import apiKeyInterceptor from './interceptors/api-key.interceptor';
import errorInterceptor from './interceptors/erros.interceptor';
import { useFirstMountState } from 'react-use';
import AppRouting from './app-routing';
import { Content, ContentWrapper } from './app.style';
import { useSnackbar } from './providers/snackbar/snackbar.hook';
import { GlobalStyle } from './styles/global';

const App: VFC = () => {
  const isFirstMount = useFirstMountState();
  const openSnackbar = useSnackbar();

  if (isFirstMount) {
    apiKeyInterceptor();
    errorInterceptor(openSnackbar);
  }

  return (
    <>
      <GlobalStyle />
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
