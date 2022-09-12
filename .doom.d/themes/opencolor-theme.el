;;; opencolor-theme.el --- inspired by gko's plain theme for VSCode -*- lexical-binding: t; no-byte-compile: t; -*-

(require 'doom-themes)

(defgroup opencolor-theme nil
  "Options for the `opencolor' theme."
  :group 'doom-themes)

(defcustom opencolor-brighter-modeline nil
  "If non-nil, more vivid colors will be used to style the mode-line."
  :group 'opencolor-theme
  :type 'boolean)

(defcustom opencolor-padded-modeline doom-themes-padded-modeline
  "If non-nil, adds a 4px padding to the mode-line. Can be an integer to
determine the exact padding."
  :group 'opencolor-theme
  :type '(or integer boolean))

(def-doom-theme opencolor
  "Theme inspired by gko's plain dark."

  ;; name        default   256       16
  ((bg         '("#212529" nil       nil ))
   (bg-alt     (doom-lighten bg 0.01))
   (base0      '("#ffffff" nil nil ))
   (base1      '("#343a40" nil nil ))
   (base2      '("#ffe066" nil nil ))
   (base3      '("#495057" nil nil ))
   (base4      '("#343a40" nil nil ))
   (base5      '("#868e96" nil nil )) ; comments
   (base6      '("#343a40" nil nil ))
   (base7      '("#74c0fc" nil nil ))
   (base8      '("#343a40" nil nil ))
   (fg         '("#e9ecef" nil nil ))
   (fg-alt     '("#f1f3f5" nil nil ))

   ;;(blue       '("#4dabf7" nil nil))
   (blue fg)
   (red        '("#ff8787" nil nil))
   (green      '("#69db7c" nil nil))
   (yellow     '("#ffe066" nil nil))

   (grey       fg) ;
   (dark-blue  fg) ;
   (orange     '("#ffc078" nil nil)) ;
   (teal       fg) ;
   (magenta    fg) ;
   (violet     fg) ;
   (cyan       fg) ;
   (dark-cyan  fg) ;

   ;; face categories -- required for all themes
   (highlight      base2)
   (vertical-bar   fg)
   (selection      base1)
   (builtin        base0)
   (comments       base5)
   (doc-comments   base5)
   (constants      base0)
   (functions      fg-alt)
   (keywords       yellow)
   (methods        red)
   (operators      fg)
   (type           fg)
   (strings        yellow)
   (variables      fg)
   (numbers        orange)
   (region         base1)
   (error          red)
   (warning        yellow)
   (success        green)

   (vc-modified    yellow)
   (vc-added       green)
   (vc-deleted     red)

   ;; custom categories
   (hidden     `(,(car bg) "black" "black"))
   (-modeline-bright opencolor-brighter-modeline)
   (-modeline-pad
    (when opencolor-padded-modeline
      (if (integerp opencolor-padded-modeline) opencolor-padded-modeline 4)))

   (modeline-bg
    (if -modeline-bright
        (doom-darken blue 0.475)
      `(,(doom-darken (car bg-alt) 0.15) ,@(cdr base0))))
   (modeline-bg-l
    (if -modeline-bright
        (doom-darken blue 0.45)
      `(,(doom-darken (car bg-alt) 0.1) ,@(cdr base0))))
   (modeline-bg-inactive   (doom-darken bg-alt 0.25))
   (modeline-bg-inactive-l `(,(car bg-alt) ,@(cdr base1)))
   (modeline-fg     nil)
   (modeline-fg-alt (doom-lighten modeline-bg-inactive 0.3)))


  ;;;; Base theme face overrides
  (((font-lock-constant-face &override)      :slant 'italic)
   ((font-lock-comment-face &override)       :slant 'italic)
   ((font-lock-function-name-face &override) :slant 'italic)
   ((font-lock-type-face &override)          :slant 'italic)
   (hl-line :background base8)
   ((line-number &override) :foreground base3)
   ((line-number-current-line &override) :foreground base2)
   (mode-line
    :background modeline-bg :foreground modeline-fg
    :box (if -modeline-pad `(:line-width ,-modeline-pad :color ,modeline-bg)))
   (mode-line-inactive
    :background modeline-bg-inactive :foreground modeline-fg-alt
    :box (if -modeline-pad `(:line-width ,-modeline-pad :color ,modeline-bg-inactive)))
   (mode-line-emphasis :foreground (if -modeline-bright base8 highlight))

   ;;;; doom-modeline
   (doom-modeline-bar :background (if -modeline-bright modeline-bg highlight))
   ;;;; lsp-mode
   (lsp-headerline-breadcrumb-symbols-face :foreground keywords :weight 'bold)
   ;;;; outline <built-in>
   (outline-1 :slant 'italic :foreground fg-alt)
   (outline-2 :inherit 'outline-1 :foreground base2)
   (outline-3 :inherit 'outline-2)
   (outline-4 :inherit 'outline-3)
   (outline-5 :inherit 'outline-4)
   (outline-6 :inherit 'outline-5)
   (outline-7 :inherit 'outline-6)
   (outline-8 :inherit 'outline-7)
   ;;;; org <built-in>
   (org-block-begin-line :foreground base2 :background base3)
   (org-block-end-line :foreground base2 :background base3)
   ;;;; solaire-mode
   (solaire-mode-line-face
    :inherit 'mode-line
    :background modeline-bg-l
    :box (if -modeline-pad `(:line-width ,-modeline-pad :color ,modeline-bg-l)))
   (solaire-mode-line-inactive-face
    :inherit 'mode-line-inactive
    :background modeline-bg-inactive-l
    :box (if -modeline-pad `(:line-width ,-modeline-pad :color ,modeline-bg-inactive-l)))))

;;; opencolor-theme.el ends here
