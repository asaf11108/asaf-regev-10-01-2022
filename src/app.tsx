import { VFC } from 'react';
import Toolbar from './components/toolbar/toolbar';
import apiKeyInterceptor from './interceptors/api-key.interceptor';
import errorInterceptor from './interceptors/erros.interceptor';
import { useFirstMountState } from 'react-use';
import AppRouting from './app-routing';
import * as S from './app.style';
import { useSnackbar } from './providers/snackbar/snackbar.hook';
import { GlobalStyle } from './styles/global';
import { useLocale } from './hooks/locale.hook';

const App: VFC = () => {
  const isFirstMount = useFirstMountState();
  const openSnackbar = useSnackbar();

  useLocale();

  if (isFirstMount) {
    apiKeyInterceptor();
    errorInterceptor(openSnackbar);
  }

  return (
    <>
      <GlobalStyle />
      <Toolbar />

      <S.ContentWrapper>
        <S.Content>

          <AppRouting />

        </S.Content>
      </S.ContentWrapper>
    </>
  );
}

export default App;
