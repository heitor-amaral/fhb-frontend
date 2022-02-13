/* eslint-disable react/jsx-no-constructed-context-values */
import * as React from 'react';

type State = { email: string | null };
type AuthProviderProps = { children: React.ReactNode };

const AuthStateContext = React.createContext<
  | {
      state: State;
      setState: React.Dispatch<React.SetStateAction<State>>;
    }
  | undefined
>(undefined);

function AuthProvider({ children }: AuthProviderProps) {
  const [state, setState] = React.useState<State>({ email: null });

  const value = React.useMemo(() => ({ state, setState }), [state, setState]);
  return (
    <AuthStateContext.Provider value={value}>
      {children}
    </AuthStateContext.Provider>
  );
}

function useAuth() {
  const context = React.useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuth };
