import { isRouteErrorResponse, Link, useRouteError } from 'react-router';
import '../styles/error-page.css';

export default function ErrorPage() {

    const error = useRouteError();
    const is404 = !error || (isRouteErrorResponse(error) && error.status === 404);

    return (
        <main className='error-page'>
            <div className="error-info">
                {is404 ? (
                    <>
                        <p className="error-eyebrow">Error 404</p>
                        <h1 className="error-title">Page not found</h1>
                        <p className='error-text'>
                            The page you're looking for doesn't exist or may have moved. Your cart is still saved.
                        </p>
                    </>
                ) : (
                    <>
                        <p className="error-eyebrow">
                            {isRouteErrorResponse(error) ? `Error ${error.status}` : 'Unexpected error'}
                        </p>
                        <h1 className="error-title">Something went wrong</h1>
                        <p className='error-text'>
                            We hit a problem loading this page. Please try again in a moment. Your cart is still saved.
                        </p>
                        {import.meta.env.DEV && (
                            <pre className='error-details'>
                                {isRouteErrorResponse(error)
                                    ? error.statusText || error.data
                                    : error instanceof Error
                                        ? error.message
                                        : String(error)}
                            </pre>
                        )}
                    </>
                )}
                <div className="error-action">
                    <Link to='/' className='btn btn-primary'>Back to home</Link>
                    <Link to='/shop' className='btn btn-secondary'>Go to shop</Link>
                </div>
            </div>
        </main>
    );
}