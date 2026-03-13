import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

// ── CREDENTIALS ────────────────────────────────────────────
const VALID_USERNAME = '1bi24is010';
const VALID_PASSWORD = '14122005'; // ← replace this with your number
// ──────────────────────────────────────────────────────────

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      username.trim().toLowerCase() === VALID_USERNAME &&
      password === VALID_PASSWORD
    ) {
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('ion_auth', 'true');
      }
      router.push('/consolidated_results_reports');
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <>
<Head>
  <title>Ion ERP WWW</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="/logo.png" />
</Head>

      <div style={styles.page}>
        <div style={styles.card}>
          {/* Logo / Brand */}
          <div style={styles.brand}>
            <span style={styles.brandIon}>ION</span>
            <span style={styles.brandEdu}>EDUCATION</span>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={styles.form}>
            {/* Username */}
            <div style={styles.field}>
              <label style={styles.label}>
                Username <span style={styles.required}>*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => { setUsername(e.target.value); setError(''); }}
                style={styles.input}
                autoComplete="username"
                spellCheck={false}
              />
            </div>

            {/* Password */}
            <div style={styles.field}>
              <label style={styles.label}>
                Password <span style={styles.required}>*</span>
              </label>
              <div style={styles.inputWrap}>
                <input
                  type={showPass ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(''); }}
                  style={{ ...styles.input, paddingRight: 44 }}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPass((v) => !v)}
                  style={styles.eyeBtn}
                  aria-label="Toggle password visibility"
                >
                  {showPass ? <EyeOff /> : <EyeOn />}
                </button>
              </div>
            </div>

            {/* Error */}
            {error && <p style={styles.error}>{error}</p>}

            {/* Sign In */}
            <button type="submit" style={styles.signInBtn}>
              Sign In
            </button>

            {/* Forgot Password */}
            <a href="#" style={styles.forgot} onClick={(e) => e.preventDefault()}>
              Forgot Password?
            </a>
          </form>
        </div>
      </div>
    </>
  );
}

/* ── Inline SVG Eye Icons ──────────────────────────────── */
function EyeOn() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
function EyeOff() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" />
      <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}

/* ── Styles ─────────────────────────────────────────────── */
const styles = {
  page: {
    minHeight: '100vh',
    background: '#eceff1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  card: {
    background: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
    padding: '48px 48px 40px 48px',
    width: '100%',
    maxWidth: '440px',
  },
  brand: {
    textAlign: 'center',
    fontSize: '26px',
    fontWeight: '800',
    letterSpacing: '0.5px',
    marginBottom: '32px',
    fontFamily: 'Helvetica, Arial, sans-serif',
  },
  brandIon: {
    color: '#1a1a1a',
  },
  brandEdu: {
    color: '#e53e2b',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0px',
  },
  field: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    fontSize: '13.5px',
    fontWeight: '500',
    color: '#374151',
    marginBottom: '6px',
  },
  required: {
    color: '#e53e2b',
    marginLeft: '2px',
  },
  inputWrap: {
    position: 'relative',
  },
  input: {
    width: '100%',
    border: '1px solid #d1d5db',
    borderRadius: '6px',
    padding: '10px 14px',
    fontSize: '14px',
    color: '#111827',
    outline: 'none',
    transition: 'border-color 0.15s',
    background: '#fff',
  },
  eyeBtn: {
    position: 'absolute',
    right: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '0',
    display: 'flex',
    alignItems: 'center',
  },
  error: {
    color: '#e53e2b',
    fontSize: '12.5px',
    marginBottom: '12px',
    marginTop: '-8px',
  },
  signInBtn: {
    background: '#3d7a7a',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    padding: '10px 22px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    width: 'fit-content',
    marginBottom: '16px',
  },
  forgot: {
    color: '#3b82f6',
    fontSize: '13px',
    textDecoration: 'none',
    cursor: 'pointer',
  },
};
