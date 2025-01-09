import { Suspense, lazy } from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import { WindowedChat } from 'utils/Chat/ChatWindowed/WindowedChat';
import { Loader } from './SharedLayout/Loaders/Loader';

const Streams = lazy(() =>
  import(/* webpackChunkName: "Streams page" */ '../pages/Streams/Streams')
);

const Stream = lazy(() =>
  import(/* webpackChunkName: "Stream page" */ '../pages/Streams/Stream/Stream')
);

const MyWSBMiR = lazy(() =>
  import(/* webpackChunkName: "My WSBMiR Page" */ '../pages/MyWSBMiR/MyWSBMiR')
);

const NotFound = lazy(() =>
  import(/* webpackChunkName: "Not Found" */ '../pages/NotFound/NotFound')
);

export const App = () => {
  return (
    <>
      <Toaster
        containerStyle={{
          top: '10%',
        }}
      />
      <Suspense fallback={Loader}>
        <Routes>
          <Route path="/" element={<MyWSBMiR />} noindex={true}>
            <Route path="*" element={<NotFound />} noindex={true} />
          </Route>
          <Route path="lesson" element={<Streams />} noindex={true}>
            <Route path="logistics" element={<Stream />} noindex={true} />
            <Route path="logistics-chat" element={<WindowedChat />} />
            <Route path="prep" element={<Stream />} noindex={true} />
            <Route path="prep-chat" element={<WindowedChat />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
