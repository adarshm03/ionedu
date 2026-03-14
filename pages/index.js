import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ion ERP WWW</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          font-family: Helvetica, Arial, sans-serif;
          background: #eceff1;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        .card {
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.10);
          padding: 48px 48px 40px 48px;
          width: 100%;
          max-width: 440px;
          text-align: center;
        }
        .brand { font-size: 24px; font-weight: 800; margin-bottom: 28px; }
        .brand span { color: #e53e2b; }
        .icon { font-size: 44px; margin-bottom: 16px; }
        .title { font-size: 18px; font-weight: 700; color: #1a1a1a; margin-bottom: 10px; }
        .msg { font-size: 13.5px; color: #64748b; line-height: 1.7; }
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #fff8e1;
          border: 1px solid #ffe082;
          color: #b45309;
          border-radius: 20px;
          padding: 5px 16px;
          font-size: 12px;
          font-weight: 700;
          margin-bottom: 24px;
          text-transform: uppercase;
          letter-spacing: 0.4px;
        }
        .dot { width: 7px; height: 7px; border-radius: 50%; background: #f59e0b; animation: pulse 1.5s infinite; }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.2} }
      `}</style>
      <div className="card">
        <div className="brand">ION<span>EDUCATION</span></div>
        <div className="badge"><div className="dot"></div>Server Under Maintenance</div>
        <div className="icon">🔧</div>
        <div className="title">We'll Be Back Soon</div>
        <div className="msg">
          The ION Education ERP portal is currently under maintenance.<br />
          Please try again later or contact your administrator.
        </div>
      </div>
    </>
  );
}