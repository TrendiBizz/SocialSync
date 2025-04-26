import React from 'react';

const ErrorPage = ({ statusCode }: { statusCode: number }) => {
  const renderError = (statusCode: number) => {
    return (
      <div>
        <h1>***{statusCode}*** An error occurred: An error occurred {statusCode}</h1>
      </div>
    );
  };

  return renderError(statusCode);
};

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
