import { FallbackProps } from 'react-error-boundary';

export const fallbackRender = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div role='alert'>
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};
