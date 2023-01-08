import { FC, useInsertionEffect } from 'react';
import Toolbar from './components/toolbar/toolbar';
import apiKeyInterceptor from './interceptors/api-key.interceptor';
import errorInterceptor from './interceptors/erros.interceptor';
import AppRouting from './app-routing';
import * as S from './app.style';
import { useSnackbar } from './providers/snackbar/snackbar.hook';
import { GlobalStyle } from './styles/global';
import { useLocale } from './hooks/locale.hook';

const App: FC = () => {
  const openSnackbar = useSnackbar();

  useLocale();

  useInsertionEffect(() => {
    apiKeyInterceptor();
    errorInterceptor(openSnackbar);
  }, []);

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
