import React from 'react';
import Sidebar from '../components/Sidebar';
import Detail from '../components/Detail';
import News from '../components/News';

const BlogDetail = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Wrapper Layout */}
      <div className="flex mx-auto" style={{ maxWidth: '1216px' }}>
        {/* Space Kiri */}
        <div style={{ width: '32px' }}></div>

        {/* Kolom Kiri (Sidebar) */}
        <div style={{ width: '342px' }}>
          <Sidebar />
        </div>

        {/* Space Tengah */}
        <div style={{ width: '32px' }}></div>

        {/* Kolom Kanan */}
        <div style={{ width: '778px' }}>
          {/* Bagian Detail */}
          <div className="mb-8">
            <Detail />
          </div>

          {/* Bagian News */}
          <div>
            <News />
          </div>
        </div>

        {/* Space Kanan */}
        <div style={{ width: '32px' }}></div>
      </div>
    </div>
  );
};

export default BlogDetail;
