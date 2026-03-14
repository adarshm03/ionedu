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
        body { font-family: Helvetica, Arial, sans-serif; background: #0f172a; min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 20px; }
        .card { background: #1e293b; border: 1px solid #334155; border-radius: 16px; padding: 52px 48px 44px; width: 100%; max-width: 480px; text-align: center; }
        .brand { font-size: 22px; font-weight: 800; color: #fff; margin-bottom: 36px; }
        .brand span { color: #e53e2b; }
        .icon-wrap { width: 64px; height: 64px; background: #0f172a; border: 1px solid #334155; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; font-size: 28px; }
        .badge { display: inline-flex; align-items: center; gap: 7px; background: rgba(239,68,68,0.10); border: 1px solid rgba(239,68,68,0.3); color: #f87171; border-radius: 20px; padding: 5px 16px; font-size: 11px; font-weight: 700; margin-bottom: 24px; letter-spacing: 0.8px; text-transform: uppercase; }
        .dot { width: 6px; height: 6px; border-radius: 50%; background: #ef4444; animation: pulse 1.5s infinite; }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.2} }
        .title { font-size: 20px; font-weight: 700; color: #f1f5f9; margin-bottom: 12px; }
        .msg { font-size: 13px; color: #64748b; line-height: 1.75; margin-bottom: 32px; }
        .info-box { background: #0f172a; border: 1px solid #334155; border-radius: 10px; padding: 16px 18px; text-align: left; margin-bottom: 24px; }
        .info-box-title { font-size: 10px; font-weight: 700; color: #475569; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px; }
        .info-row { display: flex; justify-content: space-between; font-size: 12px; padding: 6px 0; border-bottom: 1px solid #1e293b; }
        .info-row:last-child { border-bottom: none; }
        .info-row .key { color: #475569; }
        .info-row .val { color: #cbd5e1; font-weight: 600; }
        .offline { color: #f87171 !important; }
        .footer-text { font-size: 11px; color: #475569; line-height: 1.6; }
      `}</style>
      <div className="card">
        <div className="brand">ION<span>EDUCATION</span></div>
        <div className="icon-wrap">🔧</div>
        <div className="badge"><div className="dot"></div>Server Under Maintenance</div>
        <div className="title">We'll be back soon</div>
        <div className="msg">The ION Education ERP portal is currently undergoing scheduled maintenance. We apologize for the inconvenience.</div>
        <div className="info-box">
          <div className="info-box-title">System Status</div>
          <div className="info-row"><span className="key">Portal</span><span className="val offline">⛔ Offline</span></div>
          <div className="info-row"><span className="key">Institution</span><span className="val">Bangalore Institute of Technology</span></div>
          <div className="info-row"><span className="key">Support</span><span className="val">Contact Administrator</span></div>
        </div>
        <div className="footer-text">This portal is managed by ION Education.<br/>For urgent matters, contact your institution directly.</div>
      </div>
    </>
  );
}