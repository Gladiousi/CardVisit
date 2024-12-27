import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="lines-animation">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="line"></div>
          ))}
        </div>
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Layout;
