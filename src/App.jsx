import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GetComponent from './GetComponent';
import DelComponent from './DelComponent';
import PostComponent from './PostComponent';
import PutComponent from './PutComponenet';

function App() {
  const queryClient = new QueryClient(); 

  return (
    <QueryClientProvider client={queryClient}>
      <PostComponent/>
      <PutComponent/>
      <DelComponent/>
      <GetComponent/>
    </QueryClientProvider>
  );
}

export default App;