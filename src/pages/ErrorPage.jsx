import PageLayout from "../components/PageLayout";

import { useRouteError } from 'react-router-dom';
export default function ErrorPage() {
  const error = useRouteError();

  let title = 'An error occurred!';
  // let message = 'Something went wrong!'
  let message = error.data.message;

  if (error.status === 500) {
    message = error.data.message;
  }

  
  if (error.status === 404) {
    title = 'Not found!';
    message = 'Could not find resource or page.';
  }

  if (error.status === 401) {
    message = 'Unauthorized error';
  }

  return (
    <>
      <PageLayout>
        <h3>{title}</h3>
        <p>{message}</p>
      </PageLayout>
    </>
  );
}


