// src/app/page.tsx

import ShareModal from '@/components/ShareModal';  // Ensure default import

const Page = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <ShareModal />
    </div>
  );
};

export default Page;
