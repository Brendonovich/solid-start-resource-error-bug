import {
  redirect,
  RouteLoadFuncArgs,
  useSearchParams,
  action,
  useAction,
  useSubmission,
} from '@solidjs/router';
import { isServer } from 'solid-js/web';
import {
  createContext,
  createEffect,
  createResource,
  ErrorBoundary,
  onCleanup,
  onMount,
  Show,
  Suspense,
  useContext,
} from 'solid-js';

// actual page
export default function Home() {
  const [resourcebar] = createResource(async () => {
    throw Error('ERROR MAE');
    return 'Good Resources are hard to find';
  });

  createEffect(() => {
    console.debug(
      'DEBUG testResource: ',
      resourcebar.state,
      resourcebar(),
      resourcebar.error?.message
    );
  });

  return (
    <ErrorBoundary fallback={<div>Inside Error Boundary</div>}>
      <div>Hello {resourcebar()}</div>
    </ErrorBoundary>
  );
}
