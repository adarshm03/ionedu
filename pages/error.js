import Head from 'next/head';
import { useRouter } from 'next/router';

export default function ErrorPage() {
  const router = useRouter();

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
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
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
        .brand { font-size: 26px; font-weight: 800; margin-bottom: 28px; }
        .brand span { color: #e53e2b; }
        .icon { font-size: 48px; margin-bottom: 16px; }
        .title { font-size: 18px; font-weight: 700; color: #1a1a1a; margin-bottom: 10px; }
        .msg { font-size: 13.5px; color: #555; line-height: 1.6; margin-bottom: 28px; }
        .back-btn {
          background: #3d7a7a;
          color: #fff;
          border: none;
          border-radius: 6px;
          padding: 10px 28px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
        }
        .back-btn:hover { background: #2f6262; }
      `}</style>

      <div className="card">
        <div className="brand">ION<span>EDUCATION</span></div>
        <div className="icon">⚠️</div>
        <div className="title">Feature Unavailable</div>
        <div className="msg">
          Password reset is not available at this time.<br />
          Please contact your administrator for assistance.
        </div>
        <button className="back-btn" onClick={() => router.replace('/login')}>
          Back to Login
        </button>
      </div>
    </>
  );
}