import React, { useState, useEffect, useRef } from 'react';

// --- SVG Logo Components ---
type SVGProps = React.SVGProps<SVGSVGElement>;

const XLogo = (props: SVGProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const FacebookLogo = (props: SVGProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-1.79c-.75 0-1.21.47-1.21 1.2V12h3l-.5 3h-2.5v6.8c4.56-.93 8-4.96 8-9.8z" />
  </svg>
);

const LinkedInLogo = (props: SVGProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 9.94v-8.37H5.5v8.37z" />
  </svg>
);

const InstagramLogo = (props: SVGProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8c1.99 0 3.6-1.61 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
  </svg>
);

type Platform = 'twitter' | 'facebook' | 'linkedin' | 'instagram';

interface PostLogEntry {
  id: string;
  platform: Platform;
  text: string;
  timestamp: string;
}

interface DraftEntry {
  id: string;
  text: string;
  timestamp: string;
}

const PLATFORM_DETAILS: Record<Platform, {
  name: string;
  logo: (props: SVGProps) => JSX.Element;
  charLimit?: number;
  urlBase?: string;
  shareType: 'intent' | 'prep_generic' | 'prep_linkedin';
  dialClass: string
}> = {
  twitter: { name: 'X', logo: XLogo, charLimit: 280, shareType: 'intent', urlBase: 'https://twitter.com/intent/tweet?text=', dialClass: 'twitter-dial-button' },
  facebook: { name: 'FB', logo: FacebookLogo, shareType: 'intent', urlBase: 'https://www.facebook.com/sharer/sharer.php', dialClass: 'facebook-dial-button' },
  linkedin: { name: 'LI', logo: LinkedInLogo, shareType: 'prep_linkedin', urlBase: 'https://www.linkedin.com/feed/', dialClass: 'linkedin-dial-button' },
  instagram: { name: 'IG', logo: InstagramLogo, shareType: 'prep_generic', urlBase: 'https://www.instagram.com', dialClass: 'instagram-dial-button' },
};

function App() {
  const [postText, setPostText] = useState<string>('');
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>('twitter');
  const [postLogs, setPostLogs] = useState<PostLogEntry[]>([]);
  const [drafts, setDrafts] = useState<DraftEntry[]>([]);
  const [copied, setCopied] = useState<boolean>(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const X_CHAR_LIMIT = PLATFORM_DETAILS.twitter.charLimit!;

  useEffect(() => {
    try {
      const storedLogs = localStorage.getItem('socialSync_postLogs');
      if (storedLogs) setPostLogs(JSON.parse(storedLogs));
      else setPostLogs([]);

      const storedDrafts = localStorage.getItem('socialSync_drafts');
      if (storedDrafts) setDrafts(JSON.parse(storedDrafts));
      else setDrafts([]);
    } catch (error) {
      console.error('Failed to load from localStorage:', error);
      setPostLogs([]);
      setDrafts([]);
    }
  }, []);

  useEffect(() => {
    if (postLogs.length > 0 || localStorage.getItem('socialSync_postLogs') !== null) {
        localStorage.setItem('socialSync_postLogs', JSON.stringify(postLogs));
    }
  }, [postLogs]);

  useEffect(() => {
    if (drafts.length > 0 || localStorage.getItem('socialSync_drafts') !== null) {
        localStorage.setItem('socialSync_drafts', JSON.stringify(drafts));
    }
  }, [drafts]);

  const logPostAttempt = (platform: Platform, text: string) => {
    const newLog: PostLogEntry = {
      id: `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
      platform,
      text: text.substring(0, 70) + (text.length > 70 ? '...' : ''),
      timestamp: new Date().toLocaleString(),
    };
    setPostLogs(prevLogs => [newLog, ...prevLogs].slice(0, 20));
  };
  const clearPostLogs = () => {
    if (window.confirm("Are you sure you want to clear all post attempt logs?")) {
      setPostLogs([]);
    }
  };

  const saveDraft = () => {
    if (!postText.trim()) { alert("Draft is empty. Cannot save."); return; }
    const newDraft: DraftEntry = {
      id: `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
      text: postText,
      timestamp: new Date().toLocaleString(),
    };
    setDrafts(prevDrafts => [newDraft, ...prevDrafts].slice(0, 10));
    setPostText('');
    alert("Draft saved!");
  };
  const loadDraft = (draftText: string) => {
    setPostText(draftText);
  };
  const deleteDraft = (draftId: string) => {
    if (window.confirm("Are you sure you want to delete this draft?")) {
      setDrafts(prevDrafts => prevDrafts.filter(draft => draft.id !== draftId));
    }
  };
  const clearAllDrafts = () => {
    if (window.confirm("Are you sure you want to delete ALL drafts?")) {
      setDrafts([]);
    }
  };

  const handleMainAction = () => {
    const platformInfo = PLATFORM_DETAILS[selectedPlatform];
    const currentText = postText; // Keep currentText for other platforms or future use

    // Text is only required for platforms that use it in the URL and aren't Facebook (for this test)
    if (platformInfo.shareType === 'intent' && selectedPlatform !== 'facebook' && !currentText.trim()) {
        alert(`Please enter some text to post to ${platformInfo.name}.`);
        return;
    }
     // For Facebook, we're not checking postText.trim() for this specific test
     // as we are removing the quote parameter for now.

    logPostAttempt(selectedPlatform, currentText); // Still log the attempt with text

    if (platformInfo.charLimit && currentText.length > platformInfo.charLimit) {
      alert(`Your post is ${currentText.length - platformInfo.charLimit} characters over the limit for ${platformInfo.name}! Please shorten it.`);
      return;
    }

    if (platformInfo.shareType === 'intent' && platformInfo.urlBase) {
      let shareUrl = '';
      let windowFeatures = 'noopener'; // Default, noreferrer removed from previous test

      if (selectedPlatform === 'facebook') {
        const urlToShare = encodeURIComponent(window.location.href);
        shareUrl = `${platformInfo.urlBase}?u=${urlToShare}`; // SIMPLIFIED: Only 'u' parameter
      } else if (selectedPlatform === 'twitter') {
        const encodedText = encodeURIComponent(currentText);
        shareUrl = `${platformInfo.urlBase}${encodedText}`;
      } else {
        // Generic fallback for other intent types, assuming they take text
        const encodedText = encodeURIComponent(currentText);
        shareUrl = `${platformInfo.urlBase}${encodedText}`;
      }
      window.open(shareUrl, '_blank', windowFeatures);
    } else if ((platformInfo.shareType === 'prep_linkedin' || platformInfo.shareType === 'prep_generic') && platformInfo.urlBase) {
      let message = `${platformInfo.name} Post Prep:\n\n`;
      if (platformInfo.name === 'Instagram') message += "1. Remember an image/video!\n";
      if (currentText.trim()) message += `${platformInfo.name === 'Instagram' ? '2.' : '1.'} Your text (ready to copy):\n   "${currentText}"\n`;
      message += `${platformInfo.name === 'Instagram' && currentText.trim() ? '3.' : (currentText.trim() ? '2.' : '1.')} We'll open ${platformInfo.name}.`;
      alert(message);
      window.open(platformInfo.urlBase, '_blank', 'noopener,noreferrer'); // Can keep noreferrer for these
    }
  };

  const copyToClipboard = async () => {
    if (!postText.trim()) return;
    try {
      await navigator.clipboard.writeText(postText);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error('Failed to copy: ', err);
      alert('Failed to copy text to clipboard.');
    }
  };
  const handleClearText = () => setPostText('');

  const currentPlatformDetails = PLATFORM_DETAILS[selectedPlatform];
  const platformCharLimit = currentPlatformDetails.charLimit;
  let charsLeft: number | null = null;
  let charCounterStyle = { color: 'inherit' };
  let charCounterText = `${postText.length} characters`;

  if (platformCharLimit !== undefined) {
    charsLeft = platformCharLimit - postText.length;
    charCounterText = `${postText.length} / ${platformCharLimit}`;
    if (charsLeft < 0) {
      charCounterStyle.color = '#FF6347';
      charCounterText += ` (Over by ${-charsLeft})`;
    } else if (charsLeft < X_CHAR_LIMIT * 0.1) {
      charCounterStyle.color = '#FFA500';
      charCounterText += ` (${charsLeft} left)`;
    } else {
      charCounterText += ` (${charsLeft} left)`;
    }
  }

  return (
    <>
      <header className="app-header">
        <h1>SocialSync</h1>
        <p className="tagline">Connect with your favorite platforms, the old-fashioned way.</p>
      </header>

      <div className="dial-container-wrapper">
        <div className="dial-container">
          {(Object.keys(PLATFORM_DETAILS) as Platform[]).map(platformKey => {
            const platform = PLATFORM_DETAILS[platformKey];
            const LogoComponent = platform.logo;
            return (
              <button
                key={platformKey}
                className={`platform-dial-button ${platform.dialClass} ${selectedPlatform === platformKey ? 'active' : ''}`}
                onClick={() => setSelectedPlatform(platformKey)}
                title={`Select ${platform.name} for posting`}
                aria-label={`Select ${platform.name}`}
              >
                <LogoComponent className="platform-logo" />
              </button>
            );
          })}
        </div>
      </div>

      <main className="compose-area">
        <h2>Compose for {PLATFORM_DETAILS[selectedPlatform].name}</h2>
        <textarea
          ref={textareaRef}
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
          placeholder={`Craft your post... ${selectedPlatform === 'instagram' ? '(Remember images/videos!)' : ''}`}
        />
        <div className="char-counter" style={charCounterStyle}>
          {charCounterText}
        </div>

        <div className="utility-buttons-bar">
          <button className="utility-button" onClick={saveDraft} disabled={!postText.trim()}>Save Draft</button>
          <button className="utility-button" onClick={copyToClipboard} disabled={!postText.trim()}>{copied ? 'Copied!' : 'Copy Text'}</button>
          <button className="utility-button" onClick={handleClearText} disabled={!postText.trim()}>Clear Text</button>
        </div>

        <div className="action-button-container">
          <button
              className="main-action-button"
              onClick={handleMainAction}
              // For this test, the button is enabled even if text is empty for Facebook
              disabled={ (selectedPlatform !== 'facebook' && platformInfo.shareType === 'intent' && !postText.trim()) || (platformCharLimit !== undefined && postText.length > platformCharLimit) }
          >
              {PLATFORM_DETAILS[selectedPlatform].shareType === 'intent' ? 'Post to ' : 'Prep for '}
              {PLATFORM_DETAILS[selectedPlatform].name}
          </button>
        </div>
      </main>

      <div className="bottom-sections-container">
        <section className="drafts-section">
          <div className="log-header">
              <h2>Drafts ({drafts.length})</h2>
              {drafts.length > 0 && <button className="utility-button" onClick={clearAllDrafts}>Clear All</button>}
          </div>
          {drafts.length === 0 && <p>No drafts saved yet.</p>}
          {drafts.map(draft => (
            <article key={draft.id} className="draft-entry">
              <div onClick={() => loadDraft(draft.text)} style={{cursor: 'pointer', flexGrow: 1}} title="Click to load this draft">
                  <p><em>"{draft.text.substring(0, 70) + (draft.text.length > 70 ? '...' : '')}"</em></p>
                  <small style={{opacity: 0.7}}>Saved: {draft.timestamp}</small>
              </div>
              <button onClick={() => deleteDraft(draft.id)} title="Delete this draft" aria-label="Delete draft">×</button>
            </article>
          ))}
        </section>

        <section className="analytics-section">
          <div className="log-header">
              <h2>Recent Attempts ({postLogs.length})</h2>
              {postLogs.length > 0 && <button className="utility-button" onClick={clearPostLogs}>Clear Logs</button>}
          </div>
          {postLogs.length === 0 && <p>No posts initiated yet.</p>}
          {postLogs.map(log => (
            <article key={log.id} className="log-entry">
              <div>
                  <strong>{log.platform.toUpperCase()}</strong> @ {log.timestamp}
                  <p><em>"{log.text}"</em></p>
              </div>
            </article>
          ))}
        </section>
      </div>
      <footer className="app-footer">
        © {new Date().getFullYear()} SocialSync. All Rights Reserved. Not affiliated with any social media platform.
      </footer>
    </>
  );
}

export default App;