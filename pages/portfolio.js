import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

function Portfolio() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to YouTube
    window.location.href = 'https://mature-bulb-1e8.notion.site/';
  }, []);

  return <div>Redirecting to Portfolio on Notion...</div>;
}

export default Portfolio;
