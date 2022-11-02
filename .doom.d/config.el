;;; $DOOMDIR/config.el -*- lexical-binding: t; -*-

;; Place your private configuration here! Remember, you do not need to run 'doom
;; sync' after modifying this file!


;; Some functionality uses this to identify you, e.g. GPG configuration, email
;; clients, file templates and snippets. It is optional.
(setq user-full-name "John Doe"
      user-mail-address "john@doe.com")

;; Doom exposes five (optional) variables for controlling fonts in Doom:
;;
;; - `doom-font' -- the primary font to use
;; - `doom-variable-pitch-font' -- a non-monospace font (where applicable)
;; - `doom-big-font' -- used for `doom-big-font-mode'; use this for
;;   presentations or streaming.
;; - `doom-unicode-font' -- for unicode glyphs
;; - `doom-serif-font' -- for the `fixed-pitch-serif' face
;;
;; See 'C-h v doom-font' for documentation and more examples of what they
;; accept. For example:
;;
;(setq doom-font (font-spec :family "Fira Code" :size 12 :weight 'semi-light)
;      doom-variable-pitch-font (font-spec :family "Fira Sans" :size 13))
;;(setq doom-font (font-spec :family "JetbrainsMono Nerd Font Mono" :size 14 :weight 'Medium))

(custom-set-faces!
  '(font-lock-comment-face :slant italic)
  '(font-lock-keyword-face :slant italic))

;;
;; If you or Emacs can't find your font, use 'M-x describe-font' to look them
;; up, `M-x eval-region' to execute elisp code, and 'M-x doom/reload-font' to
;; refresh your font settings. If Emacs still can't find your font, it likely
;; wasn't installed correctly. Font issues are rarely Doom issues!

;; There are two ways to load a theme. Both assume the theme is installed and
;; available. You can either set `doom-theme' or manually load a theme with the
;; `load-theme' function. This is the default:
(setq doom-theme 'doom-one-mod)

;; This determines the style of line numbers in effect. If set to `nil', line
;; numbers are disabled. For relative line numbers, set this to `relative'.
(setq display-line-numbers-type 'relative)
(setq doom-modeline-enable-word-count nil)

;; If you use `org' and don't want your org files in the default location below,
;; change `org-directory'. It must be set before org loads!
(setq org-directory "~/org/")
(setq org-roam-directory "~/roam")

(yas-global-mode 1)
(setq yas-snippet-dirs
      '("~/.emacs.d/snippets"))
(add-hook 'yas-minor-mode-hook (lambda () (yas-activate-extra-mode 'fundamental-mode)))

(add-hook 'org-mode-hook 'turn-on-auto-fill)
(add-hook 'org-mode-hook #'rainbow-mode)
(add-hook 'org-mode-hook #'+org-pretty-mode)
(add-hook 'org-mode-hook #'org-superstar-mode)
(add-hook 'text-mode-hook 'visual-line-mode)

(setq org-roam-capture-templates
      '(("r" "reference" plain "%?"
         :if-new
         (file+head "reference/${title}.org" "#+title: ${title}\n")
         :immediate-finish t
         :unnarrowed t)
        ))

(setq org-roam-capture-templates
    '(("d" "default" plain (function org-roam--capture-get-point)
       (file "~/roam/Templates/DefaultTemplate.org")
       :file-name "%<%Y%m%d%H%M%S>-${slug}"
       :immediate-finish t
       :unnarrowed t)
      ("b" "book notes" plain (function org-roam--capture-get-point)
       (file "~/roam/Templates/BookNoteTemplate.org")
       :file-name "%<%Y%m%d%H%M%S>-book-${slug}"
       :immediate-finish t
       :unnarrowed t)
      ("r" "reference" plain (function org-roam--capture-get-point)
       (file "~/roam/Templates/ReferenceTemplate.org")
       :file-name "reference/${slug}.org"
       :immediate-finish t
       :unnarrowed t)
      ("t" "topic" plain (function org-roam--capture-get-point)
       (file "~/roam/Templates/TopicTemplate.org")
       :file-name "%<%Y%m%d%H%M%S>-topic-${slug}"
       :immediate-finish t
       :unnarrowed t)
      ("i" "individual" plain (function org-roam--capture-get-point)
       (file "~/roam/Templates/IndividualTemplate.org")
       :file-name "%<%Y%m%d%H%M%S>-individual-${slug}"
       :immediate-finish t
       :unnarrowed t)
      ("e" "entity" plain (function org-roam--capture-get-point)
       (file "~/roam/Templates/EntityTemplate.org")
       :file-name "%<%Y%m%d%H%M%S>-entity-${slug}"
       :immediate-finish t
       :unnarrowed t)
      ("v" "talk" plain (function org-roam--capture-get-point)
       (file "~/roam/Templates/Talk.org")
       :file-name "%<%Y%m%d%H%M%S>-talk-${slug}"
       :immediate-finish t
       :unnarrowed t)
      ("a" "article" plain (function org-roam--capture-get-point)
       (file "~/roam/Templates/ArticleTemplate.org")
       :file-name "%<%Y%m%d%H%M%S>-article-${slug}"
       :immediate-finish t
       :unnarrowed t)
     )
)


;(require 'nano)

;; Whenever you reconfigure a package, make sure to wrap your config in an
;; `after!' block, otherwise Doom's defaults may override your settings. E.g.
;;
;;   (after! PACKAGE
;;     (setq x y))
;;
;; The exceptions to this rule:
;;
;;   - Setting file/directory variables (like `org-directory')
;;   - Setting variables which explicitly tell you to set them before their
;;     package is loaded (see 'C-h v VARIABLE' to look up their documentation).
;;   - Setting doom variables (which start with 'doom-' or '+').
;;
;; Here are some additional functions/macros that will help you configure Doom.
;;
;; - `load!' for loading external *.el files relative to this one
;; - `use-package!' for configuring packages
;; - `after!' for running code after a package has loaded
;; - `add-load-path!' for adding directories to the `load-path', relative to
;;   this file. Emacs searches the `load-path' when you load packages with
;;   `require' or `use-package'.
;; - `map!' for binding new keys
;;
;; To get information about any of these functions/macros, move the cursor over
;; the highlighted symbol at press 'K' (non-evil users must press 'C-c c k').
;; This will open documentation for it, including demos of how they are used.
;; Alternatively, use `C-h o' to look up a symbol (functions, variables, faces,
;; etc).
;;
;; You can also try 'gd' (or 'C-c c d') to jump to their definition and see how
;; they are implemented.
