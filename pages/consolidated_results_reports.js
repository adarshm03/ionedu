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

        .screen-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 30px 20px;
        }

        .download-btn {
          margin-bottom: 20px;
          background: #3d7a7a;
          color: #fff;
          border: none;
          border-radius: 6px;
          padding: 10px 32px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          letter-spacing: 0.3px;
        }

        .download-btn:hover { background: #2f6262; }

        /* ── THE RESULT SHEET ── */
        .page {
          width: 900px;
          background: #fff;
          padding: 24px 30px 30px 30px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.12);
        }

        .header {
          display: flex;
          align-items: center;
          margin-bottom: 18px;
        }
        .header-logo {
          width: 80px;
          height: 80px;
          flex-shrink: 0;
          object-fit: contain;
        }
        .header-text {
          flex: 1;
          text-align: center;
          line-height: 1.4;
        }
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

        .sem-heading {
          font-size: 13px;
          font-weight: bold;
          margin-bottom: 6px;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          font-size: 12px;
          table-layout: fixed;
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
          border: 1px solid #000;
          padding: 4px 6px;
          text-align: center;
          vertical-align: middle;
          line-height: 1.3;
          background: #fff;
        }
        .cl { text-align: left !important; font-weight: bold; }
        .ccode { width: 90px; }
        .ctitle {}
        .cnum { width: 58px; }
        .csml { width: 52px; }

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

        /* ── PRINT STYLES ── */
        @media print {
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }

          body {
            background: #fff !important;
            margin: 0;
            padding: 0;
          }

          .screen-wrapper {
            display: block;
            padding: 0;
          }

          .download-btn { display: none !important; }

          .page {
            width: 100%;
            box-shadow: none;
            margin: 0;
            padding: 16px 20px 20px 20px;
          }

          th { background: #eeeeee !important; }
          .grade-box { background: #f5f5f5 !important; }
        }
      `}</style>

      <div className="screen-wrapper">
        <button className="download-btn" onClick={downloadPDF}>⬇ Download PDF</button>

        <div className="page">
          {/* HEADER */}
          <div className="header">
            <img src="/logo.png" alt="Logo" className="header-logo" />
            <div className="header-text">
              <div className="t1">BANGALORE INSTITUTE OF TECHNOLOGY</div>
              <div className="t2">An Autonomous Institution under VTU</div>
              <div className="t3">Provisional Results of Semester 3</div>
            </div>
          </div>

          {/* STUDENT INFO */}
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

          {/* SEM HEADING */}
          <div className="sem-heading">
            Semester 3 &nbsp;|&nbsp; Credits Earned: 13/20 &nbsp;&nbsp;&nbsp; SGPA: 3.9 &nbsp;|&nbsp; CGPA: 6.38
          </div>

          {/* TABLE */}
          <table>
            <colgroup>
              <col className="ccode" />
              <col className="ctitle" />
              <col className="cnum" />
              <col className="cnum" />
              <col className="csml" />
              <col className="csml" />
              <col className="cnum" />
              <col className="csml" />
              <col className="csml" />
            </colgroup>
            <thead>
              <tr>
                <th className="cl ccode">Course Code</th>
                <th className="cl">Course Title</th>
                <th>Credits<br/>Reg</th>
                <th>Credits<br/>Earned</th>
                <th>CIA</th>
                <th>SEE</th>
                <th>Total</th>
                <th>GR</th>
                <th>GP</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="cl">BCS301</td>
                <td className="cl">Mathematics -III</td>
                <td>3</td><td>3</td><td>33</td><td>18</td><td>51</td><td>C</td><td>05</td>
              </tr>
              <tr>
                <td className="cl">BCS302</td>
                <td className="cl">Digital Design &amp; Computer Organization</td>
                <td>4</td><td>0</td><td>30</td><td>11</td><td>41</td><td>F</td><td>00</td>
              </tr>
              <tr>
                <td className="cl">BCS303</td>
                <td className="cl">Operating Systems</td>
                <td>4</td><td>4</td><td>34</td><td>23</td><td>57</td><td>B</td><td>06</td>
              </tr>
              <tr>
                <td className="cl">BCS304</td>
                <td className="cl">Data Structures and Applications</td>
                <td>3</td><td>3</td><td>22</td><td>25</td><td>47</td><td>P</td><td>04</td>
              </tr>
              <tr>
                <td className="cl">BCSL305</td>
                <td className="cl">Data Structures Lab</td>
                <td>1</td><td>1</td><td>25</td><td>41</td><td>66</td><td>B+</td><td>07</td>
              </tr>
              <tr>
                <td className="cl">BCS306A</td>
                <td className="cl">Object Oriented Programming with Java</td>
                <td>3</td><td>0</td><td>33</td><td>13</td><td>46</td><td>F</td><td>00</td>
              </tr>
              <tr>
                <td className="cl">BUH307</td>
                <td className="cl">Social Connect and Responsibility</td>
                <td>1</td><td>1</td><td>96</td><td>NA</td><td>96</td><td>O</td><td>10</td>
              </tr>
              <tr>
                <td className="cl">BCSL308D</td>
                <td className="cl">Data Visualization with Python</td>
                <td>1</td><td>1</td><td>46</td><td>44</td><td>90</td><td>O</td><td>10</td>
              </tr>
              <tr>
                <td className="cl">BPEK309B</td>
                <td className="cl">Physical Education</td>
                <td>0</td><td>0</td><td>90</td><td>NA</td><td>90</td><td>PP</td><td>0</td>
              </tr>
            </tbody>
          </table>

          {/* GRADE BOX */}
          <div className="grade-box">
            <div className="gb-title">UG - Grade Pattern</div>
            <div>CIA - Continous Internal Assesment, SEE - Semester End Exam Marks, &nbsp;GP - Grade Point, &nbsp;GR- Grade</div>
            <div>O=Outstanding(90-100) ,A+=Excellent(80-89) ,A=Very Good(70-79) ,B+=Good(60-69) ,B=Above Average(55-59) ,C=Average(50-54) ,P=Poor(40-49) ,F=Fail(0-39)</div>
            <div>PP - Passed, NP - Not Passed, X - Failed in SEE but eligible for Make up Examination, I - Failed to attend SEE due Illness</div>
            <div>DX – NSAR / NSSR &nbsp;&nbsp;&nbsp; WH - Results Withheld</div>
            <div>SGPA = SUM(Grade Point * Credits)/SUM(Credits) | CGPA = SUM(Grade Point*Credits Earned)/SUM(Credit Earned)</div>
          </div>

          {/* FOOTER */}
          <div className="footer">
            <span>CONTROLLER OF EXAMINATIONS</span>
            <span>PRINCIPAL</span>
          </div>
        </div>
      </div>
    </>
  );
}