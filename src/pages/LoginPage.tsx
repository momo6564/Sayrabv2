import React from 'react';
import {motion} from 'motion/react';
import {ArrowRight, Lock, LogOut, ShieldCheck} from 'lucide-react';
import {Link, useLocation, useNavigate} from 'react-router';

import {clearStoredUser, decodeGoogleCredential, getStoredUser, storeUser, type AuthUser} from '../auth';

const DEFAULT_GOOGLE_CLIENT_ID = '534863953723-0pvaogamvnnt5hspj7egrvp929epn3v0.apps.googleusercontent.com';
const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || DEFAULT_GOOGLE_CLIENT_ID;
const GOOGLE_SCRIPT_ID = 'google-identity-services';

function loadGoogleScript() {
  return new Promise<void>((resolve, reject) => {
    const existingScript = document.getElementById(GOOGLE_SCRIPT_ID) as HTMLScriptElement | null;

    if (existingScript) {
      if (window.google?.accounts?.id) {
        resolve();
      } else {
        existingScript.addEventListener('load', () => resolve(), {once: true});
        existingScript.addEventListener('error', () => reject(new Error('Failed to load Google script.')), {once: true});
      }
      return;
    }

    const script = document.createElement('script');
    script.id = GOOGLE_SCRIPT_ID;
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load Google script.'));
    document.head.appendChild(script);
  });
}

export const LoginPage: React.FC = () => {
  const buttonRef = React.useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = React.useMemo(() => new URLSearchParams(location.search), [location.search]);
  const mode = searchParams.get('mode') === 'signup' ? 'signup' : 'signin';
  const requestedNext = searchParams.get('next');
  const redirectTo = requestedNext || (typeof location.state?.from === 'string' ? location.state.from : '/dashboard');
  const postAuthLabel = redirectTo === '/launch' ? 'Continue to Campaign Setup' : 'Continue to Dashboard';
  const buttonText = mode === 'signup' ? 'signup_with' : 'signin_with';

  const [user, setUser] = React.useState<AuthUser | null>(() => getStoredUser());
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'ready'>('idle');
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (user || !buttonRef.current) {
      return;
    }

    let cancelled = false;
    setStatus('loading');

    loadGoogleScript()
      .then(() => {
        if (cancelled || !buttonRef.current || !window.google?.accounts?.id) {
          return;
        }

        window.google.accounts.id.initialize({
          client_id: GOOGLE_CLIENT_ID,
          callback: (response) => {
            const nextUser = decodeGoogleCredential(response.credential);

            if (!nextUser) {
              setError('Google returned a credential, but the user profile could not be read.');
              return;
            }

            storeUser(nextUser);
            setUser(nextUser);
            navigate(redirectTo, {replace: true});
          },
        });

        buttonRef.current.innerHTML = '';
        window.google.accounts.id.renderButton(buttonRef.current, {
          theme: 'outline',
          size: 'large',
          text: buttonText,
          shape: 'pill',
          width: 320,
        });

        setStatus('ready');
      })
      .catch((scriptError) => {
        if (!cancelled) {
          setError(scriptError instanceof Error ? scriptError.message : 'Google sign-in failed to initialize.');
        }
      });

    return () => {
      cancelled = true;
    };
  }, [buttonText, navigate, redirectTo, user]);

  const handleSignOut = () => {
    window.google?.accounts?.id.disableAutoSelect();
    clearStoredUser();
    setUser(null);
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center px-4 py-20">
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 bg-editorial-bg border border-editorial-ink shadow-[24px_24px_0px_0px_#1A1A1A] overflow-hidden">
        <div className="hidden lg:flex flex-col justify-between p-16 bg-editorial-ink text-white relative overflow-hidden h-full min-h-[600px]">
          <div className="flex items-center gap-4 border-b border-white/10 pb-8">
            <span className="text-4xl font-serif italic tracking-tighter">SAYRAB</span>
            <div className="h-6 w-[1px] bg-white/20" />
            <span className="editorial-label text-[9px] text-white/40 tracking-[0.4em]">Internal Access</span>
          </div>

          <div className="relative">
            <h2 className="text-6xl font-serif italic tracking-tighter leading-[0.8] mb-10">
              The Creator <br />
              <span className="text-editorial-accent">Nexus.</span>
            </h2>
            <p className="font-serif text-lg text-white/50 leading-relaxed italic max-w-xs">
              Secure internal access for campaign management, production, and reporting.
            </p>
          </div>

          <div className="pt-8 border-t border-white/10">
            <span className="editorial-label text-white/30 italic">VOL. 24 // CORE</span>
          </div>
        </div>

        <div className="p-10 md:p-20 flex flex-col justify-center bg-editorial-bg">
          <div className="mb-12">
            <span className="editorial-label block mb-4 italic">Identification</span>
            <h1 className="text-5xl font-serif text-editorial-ink tracking-tighter italic">
              {mode === 'signup' ? 'Create Access' : 'Entry Portal'}
            </h1>
            <div className="mt-6 flex gap-3">
              <Link
                to={`/login?mode=signin&next=${encodeURIComponent(redirectTo)}`}
                className={`px-5 py-2 border text-[10px] font-bold uppercase tracking-[0.25em] transition-all ${
                  mode === 'signin'
                    ? 'bg-editorial-ink text-white border-editorial-ink'
                    : 'border-editorial-ink/20 text-editorial-ink/50 hover:border-editorial-ink'
                }`}
              >
                Sign In
              </Link>
              <Link
                to={`/login?mode=signup&next=${encodeURIComponent(redirectTo)}`}
                className={`px-5 py-2 border text-[10px] font-bold uppercase tracking-[0.25em] transition-all ${
                  mode === 'signup'
                    ? 'bg-editorial-ink text-white border-editorial-ink'
                    : 'border-editorial-ink/20 text-editorial-ink/50 hover:border-editorial-ink'
                }`}
              >
                Sign Up
              </Link>
            </div>
          </div>

          {!user ? (
            <motion.div initial={{opacity: 0, y: 12}} animate={{opacity: 1, y: 0}} className="space-y-8">
              <div className="border border-editorial-ink/20 bg-white/50 p-6">
                <div className="flex items-start gap-4">
                  <ShieldCheck className="w-5 h-5 text-editorial-ink mt-0.5" />
                  <div className="space-y-2">
                    <p className="text-sm font-bold uppercase tracking-[0.25em] text-editorial-ink/50">
                      {mode === 'signup' ? 'Create Your Account' : 'Google Sign-In'}
                    </p>
                    <p className="text-sm text-editorial-ink/70 leading-7">
                      {mode === 'signup'
                        ? 'Create your SAYRAB account with Google, then continue straight into campaign setup.'
                        : 'Use your Google account to access protected SAYRAB internal screens and continue where you left off.'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label className="editorial-label text-editorial-ink/30 italic">Secure Session</label>
                <div ref={buttonRef} className="min-h-11 flex items-center" />
                {status === 'loading' && (
                  <p className="text-[10px] font-bold uppercase tracking-widest text-editorial-ink/30">
                    Initializing Google sign-in...
                  </p>
                )}
                {error && (
                  <p className="text-sm text-red-600 leading-6">
                    {error}
                  </p>
                )}
              </div>

              <div className="border-t border-editorial-ink/10 pt-8 space-y-3">
                <p className="text-[10px] font-bold uppercase tracking-widest text-editorial-ink/30">
                  In Google Cloud Console, add `http://localhost` and `http://localhost:3000` as Authorized JavaScript origins.
                </p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-editorial-ink/30">
                  Client secret is only needed for a backend or server-side token exchange.
                </p>
              </div>

              <div className="text-center pt-4">
                <p className="text-[10px] font-bold text-editorial-ink/30 uppercase tracking-widest">
                  {mode === 'signup' ? 'Already have access?' : "Don't have an account yet?"}
                  <Link
                    to={
                      mode === 'signup'
                        ? `/login?mode=signin&next=${encodeURIComponent(redirectTo)}`
                        : `/login?mode=signup&next=${encodeURIComponent('/launch')}`
                    }
                    className="text-editorial-ink underline underline-offset-4 ml-1"
                  >
                    {mode === 'signup' ? 'Sign in here' : 'Create one here'}
                  </Link>
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div initial={{opacity: 0, y: 12}} animate={{opacity: 1, y: 0}} className="space-y-10">
              <div className="border border-editorial-ink bg-white p-8">
                <div className="flex items-center gap-5">
                  {user.imageUrl ? (
                    <img src={user.imageUrl} alt={user.fullName} className="w-16 h-16 rounded-full object-cover border border-editorial-ink/10" />
                  ) : (
                    <div className="w-16 h-16 rounded-full border border-editorial-ink flex items-center justify-center">
                      <Lock className="w-6 h-6 text-editorial-ink/50" />
                    </div>
                  )}
                  <div className="min-w-0">
                    <p className="editorial-label text-editorial-ink/30 italic">Authenticated Identity</p>
                    <h2 className="text-3xl font-serif italic text-editorial-ink truncate">{user.fullName}</h2>
                    <p className="mt-2 text-sm text-editorial-ink/60 break-all">{user.email}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <button
                  onClick={() => navigate(redirectTo, {replace: true})}
                  className="w-full h-20 bg-editorial-ink text-white font-bold uppercase tracking-[0.4em] text-[11px] shadow-xl hover:bg-editorial-accent transition-all flex items-center justify-center gap-4 group"
                >
                  {postAuthLabel}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={handleSignOut}
                  className="w-full h-14 border border-editorial-ink text-editorial-ink font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-editorial-muted transition-all flex items-center justify-center gap-3"
                >
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};
