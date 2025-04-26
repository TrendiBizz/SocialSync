import React from 'react';

const ErrorPage = ({ statusCode }: { statusCode: number }) => {
  return (
    <div>
      <h1>{statusCode ? An error  occurred : 'An error occurred'}</h1>
    </div>
  );
};

ErrorPage.getInitialProps = async (context: any) => {
  const statusCode = context.res ? context.res.statusCode : context.err ? context.err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
