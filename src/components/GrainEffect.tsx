import React from 'react';

export const GrainEffect: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none opacity-5 z-50"
      style={{
        backgroundImage: `
          url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' seed='2' /%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23noise)' /%3E%3C/svg%3E")
        `,
        backgroundRepeat: 'repeat',
        animation: 'grain 8s steps(10) infinite',
      }}
    >
      <style>
        {`
          @keyframes grain {
            0% { transform: translate(0, 0); }
            10% { transform: translate(-2px, -1px); }
            20% { transform: translate(-2px, 2px); }
            30% { transform: translate(2px, -2px); }
            40% { transform: translate(2px, 1px); }
            50% { transform: translate(-1px, -1px); }
            60% { transform: translate(-1px, 2px); }
            70% { transform: translate(1px, -2px); }
            80% { transform: translate(1px, 1px); }
            90% { transform: translate(-2px, -2px); }
            100% { transform: translate(0, 0); }
          }
        `}
      </style>
    </div>
  );
};
