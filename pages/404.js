import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Custom404() {
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
          background: #f0f2f5;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        .card {
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.10);
          padding: 52px 48px 44px 48px;
          width: 100%;
          max-width: 480px;
          text-align: center;
        }
        .brand { font-size: 22px; font-weight: 800; margin-bottom: 32px; letter-spacing: 0.3px; }
        .brand span { color: #e53e2b; }
        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #fff8e1;
          border: 1px solid #ffe082;
          color: #b45309;
          border-radius: 20px;
          padding: 5px 16px;
          font-size: 12px;
          font-weight: 600;
          margin-bottom: 24px;
          letter-spacing: 0.3px;
        }
        .dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #f59e0b;
          animation: pulse 1.5s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        .code {
          font-size: 72px;
          font-weight: 900;
          color: #e2e8f0;
          line-height: 1;
          margin-bottom: 12px;
          letter-spacing: -2px;
        }
        .title {
          font-size: 20px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 12px;
        }
        .msg {
          font-size: 13.5px;
          color: #64748b;
          line-height: 1.7;
          margin-bottom: 32px;
        }
        .divider {
          border: none;
          border-top: 1px solid #f1f5f9;
          margin-bottom: 24px;
        }
        .info-box {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 14px 16px;
          margin-bottom: 28px;
          text-align: left;
        }
        .info-box-title {
          font-size: 11px;
          font-weight: 700;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          margin-bottom: 8px;
        }
        .info-row {
          display: flex;
          justify-content: space-between;
          font-size: 12.5px;
          padding: 3px 0;
          color: #475569;
        }
        .info-row .key { color: #94a3b8; }
        .info-row .val { font-weight: 600; color: #334155; }
        .back-btn {
          background: #3d7a7a;
          color: #fff;
          border: none;
          border-radius: 6px;
          padding: 11px 32px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          width: 100%;
          letter-spacing: 0.2px;
        }
        .back-btn:hover { background: #2f6262; }
        .footer-text {
          margin-top: 20px;
          font-size: 11.5px;
          color: #94a3b8;
        }
        @media (max-width: 520px) {
          .card { padding: 36px 24px 32px 24px; }
          .code { font-size: 56px; }
        }
      `}</style>

      <div className="card">
        <div className="brand">ION<span>EDUCATION</span></div>

        <div className="status-badge">
          <div className="dot"></div>
          SERVER UNDER MAINTENANCE
        </div>

        <div className="code">404</div>
        <div className="title">Page Not Found</div>
        <div className="msg">
          The page you are looking for is currently unavailable.<br />
          Our team is working to restore services as soon as possible.
        </div>

        <hr className="divider" />

        <div className="info-box">
          <div className="info-box-title">Incident Details</div>
          <div className="info-row"><span className="key">Status</span><span className="val">🔧 Under Maintenance</span></div>
          <div className="info-row"><span className="key">Affected</span><span className="val">ERP Portal</span></div>
          <div className="info-row"><span className="key">Support</span><span className="val">admin@ion-education.in</span></div>
        </div>

        <button className="back-btn" onClick={() => router.replace('/login')}>
          ← Back to Login
        </button>

        <div className="footer-text">
          If this issue persists, please contact your system administrator.
        </div>
      </div>
    </>
  );
}