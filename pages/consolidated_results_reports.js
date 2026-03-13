import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Results() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const auth = sessionStorage.getItem('ion_auth');
      if (!auth) router.replace('/login');
    }
  }, []);

  const downloadPDF = () => {
    const now = new Date();
    const dd = String(now.getDate()).padStart(2, '0');
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const yyyy = now.getFullYear();
    const hh = String(now.getHours()).padStart(2, '0');
    const min = String(now.getMinutes()).padStart(2, '0');
    const ss = String(now.getSeconds()).padStart(2, '0');
    const filename = `Results_${dd}-${mm}-${yyyy}_${hh}-${min}-${ss}`;
    const original = document.title;
    document.title = filename;
    window.print();
    document.title = original;
  };

  const logout = () => {
    sessionStorage.removeItem('ion_auth');
    router.replace('/login');
  };

  return (
    <>
      <Head>
        <title>Ion ERP WWW</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
          font-family: Helvetica, Arial, sans-serif;
          background: #f0f0f0;
          color: #000;
          font-size: 13px;
        }

        /* TOP BAR */
        .topbar {
          background: #fff;
          border-bottom: 1px solid #ddd;
          padding: 10px 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 1px 4px rgba(0,0,0,0.08);
        }
        .topbar-brand { font-size: 15px; font-weight: 800; }
        .topbar-brand span { color: #e53e2b; }
        .topbar-actions { display: flex; gap: 8px; align-items: center; }
        .download-btn {
          background: #3d7a7a;
          color: #fff;
          border: none;
          border-radius: 6px;
          padding: 7px 14px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          white-space: nowrap;
        }
        .download-btn:hover { background: #2f6262; }
        .logout-btn {
          background: #fff;
          color: #e53e2b;
          border: 1.5px solid #e53e2b;
          border-radius: 6px;
          padding: 7px 14px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          white-space: nowrap;
        }
        .logout-btn:hover { background: #fff5f5; }

        /* WRAPPER */
        .screen-wrapper {
          padding: 20px 12px 40px 12px;
        }

        /* STUDENT INFO CARD - mobile */
        .info-card {
          background: #fff;
          border-radius: 8px;
          padding: 14px 16px;
          margin-bottom: 14px;
          box-shadow: 0 1px 4px rgba(0,0,0,0.08);
          display: none;
        }
        .info-card-row {
          display: flex;
          justify-content: space-between;
          font-size: 12.5px;
          padding: 3px 0;
          border-bottom: 1px solid #f0f0f0;
        }
        .info-card-row:last-child { border-bottom: none; }
        .info-card-row .lbl { color: #666; }
        .info-card-row .val { font-weight: bold; color: #000; }
        .sgpa-badge {
          display: inline-block;
          background: #3d7a7a;
          color: #fff;
          border-radius: 20px;
          padding: 4px 14px;
          font-size: 13px;
          font-weight: 700;
          margin-top: 10px;
        }

        /* PAGE (desktop result sheet) */
        .page {
          max-width: 900px;
          margin: 0 auto;
          background: #fff;
          padding: 24px 30px 30px 30px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.12);
        }

        .header {
          display: flex;
          align-items: center;
          margin-bottom: 18px;
        }
        .header-logo { width: 80px; flex-shrink: 0; }
        .header-logo img { width: 80px; height: 80px; object-fit: contain; display: block; }
        .header-text { flex: 1; text-align: center; line-height: 1.4; }
        .header-text .t1 { font-size: 20px; font-weight: bold; }
        .header-text .t2 { font-size: 12px; }
        .header-text .t3 { font-size: 13px; font-weight: bold; }

        .info-block {
          display: flex;
          justify-content: space-between;
          margin-bottom: 12px;
          font-size: 12.5px;
        }
        .info-row { line-height: 1.7; }
        .info-row .val { font-weight: bold; }

        .sem-heading { font-size: 13px; font-weight: bold; margin-bottom: 6px; }

        /* TABLE SCROLL WRAPPER */
        .table-scroll {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          font-size: 12px;
          table-layout: fixed;
          min-width: 620px;
        }
        th {
          background: #eeeeee;
          border: 1px solid #000;
          padding: 5px 6px;
          font-weight: bold;
          text-align: center;
          vertical-align: middle;
          line-height: 1.3;
        }
        td {
          background: #fff;
          border: 1px solid #000;
          padding: 4px 6px;
          text-align: center;
          vertical-align: middle;
          line-height: 1.3;
        }
        .c1 { width: 90px; text-align:left!important; font-weight:bold; }
        .c2 { text-align:left!important; font-weight:bold; }
        .c3 { width: 56px; }
        .c4 { width: 56px; }
        .c5 { width: 48px; }
        .c6 { width: 48px; }
        .c7 { width: 56px; }
        .c8 { width: 48px; }
        .c9 { width: 48px; }

        .grade-box {
          background: #f5f5f5;
          border: 1px solid #ccc;
          padding: 8px 12px 10px 12px;
          margin-top: 10px;
          font-size: 11px;
          line-height: 1.65;
        }
        .grade-box .gb-title { font-weight: bold; font-size: 11.5px; margin-bottom: 2px; }

        .footer {
          display: flex;
          justify-content: space-between;
          font-size: 11.5px;
          font-weight: bold;
          margin-top: 80px;
        }

        /* MOBILE */
        @media (max-width: 640px) {
          .info-card { display: block; }
          .page {
            padding: 14px 12px 20px 12px;
          }
          .header-logo img { width: 48px; height: 48px; }
          .header-text .t1 { font-size: 12px; }
          .header-text .t2 { font-size: 10px; }
          .header-text .t3 { font-size: 10px; }
          .info-block { display: none; }
          .sem-heading { font-size: 11px; }
          table { font-size: 10px; min-width: 560px; }
          th, td { padding: 3px 4px; }
          .c1 { width: 72px; }
          .c3, .c4 { width: 46px; }
          .c5, .c6, .c8, .c9 { width: 36px; }
          .c7 { width: 44px; }
          .grade-box { font-size: 9px; line-height: 1.5; }
          .footer { font-size: 9px; margin-top: 30px; }
        }

        /* PRINT */
        @media print {
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          body { background: #fff !important; margin: 0; padding: 0; }
          .topbar { display: none !important; }
          .info-card { display: none !important; }
          .screen-wrapper { padding: 0; }
          .page {
            max-width: 100%;
            box-shadow: none;
            padding: 16px 20px 20px 20px;
          }
          .info-block { display: flex !important; }
          th { background: #eeeeee !important; }
          .grade-box { background: #f5f5f5 !important; }
          .table-scroll { overflow: visible; }
        }
      `}</style>

      {/* TOP BAR */}
      <div className="topbar">
        <div className="topbar-brand">ION<span>EDUCATION</span></div>
        <div className="topbar-actions">
          <button className="download-btn" onClick={downloadPDF}>⬇ PDF</button>
          <button className="logout-btn" onClick={logout}>Logout</button>
        </div>
      </div>

      <div className="screen-wrapper">

        {/* MOBILE INFO CARD */}
        <div className="info-card">
          <div className="info-card-row"><span className="lbl">Name</span><span className="val">ADITYA R</span></div>
          <div className="info-card-row"><span className="lbl">Father</span><span className="val">T N RAMESHA</span></div>
          <div className="info-card-row"><span className="lbl">USN</span><span className="val">1BI24IS010</span></div>
          <div className="info-card-row"><span className="lbl">Branch</span><span className="val">ISE</span></div>
          <div className="info-card-row"><span className="lbl">Credits</span><span className="val">20/20</span></div>
          <div style={{marginTop:'8px'}}>
            <span className="sgpa-badge">SGPA: 7.71</span>
          </div>
        </div>

        {/* RESULT SHEET */}
        <div className="page">
          <div className="header">
            <div className="header-logo"><img src="/logo.png" alt="Logo" /></div>
            <div className="header-text">
              <div className="t1">BANGALORE INSTITUTE OF TECHNOLOGY</div>
              <div className="t2">An Autonomous Institution under VTU</div>
              <div className="t3">Provisional Results of Semester 3</div>
            </div>
          </div>

          <div className="info-block">
            <div>
              <div className="info-row">Name of the Student&nbsp;&nbsp;:&nbsp;&nbsp;<span className="val">ADITYA R</span></div>
              <div className="info-row">Name of the Father&nbsp;&nbsp;:&nbsp;&nbsp;<span className="val">T N RAMESHA</span></div>
            </div>
            <div style={{textAlign:'right'}}>
              <div className="info-row">Branch:&nbsp;<span className="val">ISE</span></div>
              <div className="info-row">USN&nbsp;&nbsp;:&nbsp;&nbsp;<span className="val">1BI24IS010</span></div>
            </div>
          </div>

          <div className="sem-heading">Semester 3 &nbsp;|&nbsp; Credits Earned: 20/20 &nbsp;|&nbsp; SGPA: 7.71</div>

          <div className="table-scroll">
            <table>
              <colgroup>
                <col className="c1"/><col className="c2"/><col className="c3"/><col className="c4"/>
                <col className="c5"/><col className="c6"/><col className="c7"/><col className="c8"/><col className="c9"/>
              </colgroup>
              <thead>
                <tr>
                  <th className="c1">Course Code</th>
                  <th className="c2">Course Title</th>
                  <th className="c3">Credits<br/>Reg</th>
                  <th className="c4">Credits<br/>Earned</th>
                  <th className="c5">CIA</th>
                  <th className="c6">SEE</th>
                  <th className="c7">Total</th>
                  <th className="c8">GR</th>
                  <th className="c9">GP</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="c1">BCS301</td><td className="c2">Mathematics -III</td><td>3</td><td>3</td><td>39</td><td>32</td><td>71</td><td>A</td><td>08</td></tr>
                <tr><td className="c1">BCS302</td><td className="c2">Digital Design &amp; Computer Organization</td><td>4</td><td>4</td><td>40</td><td>20</td><td>60</td><td>B+</td><td>07</td></tr>
                <tr><td className="c1">BCS303</td><td className="c2">Operating Systems</td><td>4</td><td>4</td><td>42</td><td>33</td><td>75</td><td>A</td><td>08</td></tr>
                <tr><td className="c1">BCS304</td><td className="c2">Data Structures and Applications</td><td>3</td><td>3</td><td>30</td><td>33</td><td>63</td><td>B+</td><td>07</td></tr>
                <tr><td className="c1">BCSL305</td><td className="c2">Data Structures Lab</td><td>1</td><td>1</td><td>33</td><td>29</td><td>72</td><td>A</td><td>08</td></tr>
                <tr><td className="c1">BCS306A</td><td className="c2">Object Oriented Programming with Java</td><td>3</td><td>3</td><td>31</td><td>31</td><td>62</td><td>B+</td><td>07</td></tr>
                <tr><td className="c1">BUH307</td><td className="c2">Social Connect and Responsibility</td><td>1</td><td>1</td><td>96</td><td>NA</td><td>96</td><td>O</td><td>10</td></tr>
                <tr><td className="c1">BCSL308D</td><td className="c2">Data Visualization with Python</td><td>1</td><td>1</td><td>46</td><td>44</td><td>90</td><td>O</td><td>10</td></tr>
                <tr><td className="c1">BPEK309B</td><td className="c2">Physical Education</td><td>0</td><td>0</td><td>90</td><td>NA</td><td>90</td><td>PP</td><td>0</td></tr>
              </tbody>
            </table>
          </div>

          <div className="grade-box">
            <div className="gb-title">UG - Grade Pattern</div>
            <div>CIA - Continous Internal Assesment, SEE - Semester End Exam Marks, &nbsp;GP - Grade Point, &nbsp;GR- Grade</div>
            <div>O=Outstanding(90-100) ,A+=Excellent(80-89) ,A=Very Good(70-79) ,B+=Good(60-69) ,B=Above Average(55-59) ,C=Average(50-54) ,P=Poor(40-49) ,F=Fail(0-39)</div>
            <div>PP - Passed, NP - Not Passed, X - Failed in SEE but eligible for Make up Examination, I - Failed to attend SEE due Illness</div>
            <div>DX – NSAR / NSSR &nbsp;&nbsp;&nbsp; WH - Results Withheld</div>
            <div>SGPA = SUM(Grade Point * Credits)/SUM(Credits) | CGPA = SUM(Grade Point*Credits Earned)/SUM(Credit Earned)</div>
          </div>

          <div className="footer">
            <span>CONTROLLER OF EXAMINATIONS</span>
            <span>PRINCIPAL</span>
          </div>
        </div>
      </div>
    </>
  );
}