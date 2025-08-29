import React, { useState, useEffect, useRef } from "react";
import styles from "../css/Terminal.module.css";
import CommandHandler from "./CommandHandler";

const Terminal: React.FC = () => {
  const [history, setHistory] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const [dateTime, setDateTime] = useState(new Date());
  
  const initialMessage = [
    "Hi, I'm Piyush Kumar, a Software & Full Stack Developer.",
    "",
    "Welcome to my interactive 'React powered' portfolio terminal!",
    "Type 'help' to see available commands.",
    ""
  ];

  useEffect(() => {
    setHistory(initialMessage);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
  const interval = setInterval(() => {
    setDateTime(new Date());
  }, 1000);
  return () => clearInterval(interval);
}, []);


  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim();
    
    if (trimmedCmd.toLowerCase() === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    const output = CommandHandler(trimmedCmd);
    setHistory(prev => [
      ...prev,
      `piyush@portfolio:~$ ${trimmedCmd}`,
      output,
      ""
    ]);
    setInput("");
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCommand(input);
    }
  };

  const handleNavClick = (command: string) => {
    setInput(command);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <div className={styles.header}>
          <h1 className={styles.name}>Piyush Kumar</h1>
          <p className={styles.title}>Software Engineer</p>
        </div>
        
        <div className={styles.profileSection}>
          <div className={styles.terminalWindow}>
            <div className={styles.windowHeader}>
              <div className={styles.windowButtons}>
                <span className={styles.closeBtn}></span>
                <span className={styles.minimizeBtn}></span>
                <span className={styles.maximizeBtn}></span>
              </div>
              <span className={styles.windowTitle}>piyushkumar</span>
            </div>
            <div className={styles.profileImageContainer}>
              <div className={styles.profileImage}>
                <div className={styles.avatarPlaceholder}>PK</div>
              </div>
            </div>
          </div>
          
          <div className={styles.interactiveCard}>
            <span className={styles.cardLabel}>[Interactive 3D Card]</span>
          </div>
        </div>
      </div>

      <div className={styles.rightPanel}>
        <div className={styles.commandNavigation}>
          <span className={styles.navCommands}>
            <span className={styles.navLink} onClick={() => handleNavClick("help")}>help</span> | 
            <span className={styles.navLink} onClick={() => handleNavClick("about")}> about</span> | 
            <span className={styles.navLink} onClick={() => handleNavClick("projects")}> projects</span> | 
            <span className={styles.navLink} onClick={() => handleNavClick("skills")}> skills</span> | 
            <span className={styles.navLink} onClick={() => handleNavClick("experience")}> experience</span> | 
            <span className={styles.navLink} onClick={() => handleNavClick("contact")}> contact</span> | 
            <span className={styles.navLink} onClick={() => handleNavClick("education")}> education</span> | 
            <span className={styles.navLink} onClick={() => handleNavClick("certifications")}> certifications</span> | 
            <span className={styles.navLink} onClick={() => handleNavClick("leadership")}> leadership</span> |
            <span className={styles.navLink} onClick={() => handleNavClick("sudo")}> sudo</span> | 
            <span className={styles.navLink} onClick={() => handleNavClick("clear")}> clear</span>
          </span>
        </div>

        <div className={styles.terminalContainer}>
          <div className={styles.terminal} ref={terminalRef}>
            <div className={styles.terminalContent}>
              {history
                .filter(line => line !== null && line !== undefined)
                .map((line, i) => (
                  <div key={i} className={styles.terminalLine}>
                    {typeof line === 'string' && line.startsWith('piyush@portfolio:~$') ? (
                      <span className={styles.prompt}>{line}</span>
                    ) : (
                      <span className={styles.output}>{line || ""}</span>
                    )}
                  </div>
                ))}
              
              <div className={styles.inputLine}>
                <span className={styles.currentPrompt}>piyush@portfolio:~$</span>
                {/* <span className={styles.cursor}>█</span> */}
                <span className={styles.inputWrapper}>
                <input
                  ref={inputRef}
                  className={styles.terminalInput}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKeyDown}
                  spellCheck={false}
                />
                {/* <span className={styles.cursor}>█</span> */}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.statusBar}>
          <span className={styles.timestamp}>{dateTime.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
