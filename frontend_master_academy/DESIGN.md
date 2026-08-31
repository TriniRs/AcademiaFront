---
name: Frontend Master Academy
colors:
  surface: '#141218'
  surface-dim: '#141218'
  surface-bright: '#3b383e'
  surface-container-lowest: '#0f0d13'
  surface-container-low: '#1d1b20'
  surface-container: '#211f24'
  surface-container-high: '#2b292f'
  surface-container-highest: '#36343a'
  on-surface: '#e6e0e9'
  on-surface-variant: '#cbc4d2'
  inverse-surface: '#e6e0e9'
  inverse-on-surface: '#322f35'
  outline: '#948e9c'
  outline-variant: '#494551'
  surface-tint: '#cfbcff'
  primary: '#cfbcff'
  on-primary: '#381e72'
  primary-container: '#6750a4'
  on-primary-container: '#e0d2ff'
  inverse-primary: '#6750a4'
  secondary: '#cdc0e9'
  on-secondary: '#342b4b'
  secondary-container: '#4d4465'
  on-secondary-container: '#bfb2da'
  tertiary: '#e7c365'
  on-tertiary: '#3e2e00'
  tertiary-container: '#c9a74d'
  on-tertiary-container: '#503d00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e9ddff'
  primary-fixed-dim: '#cfbcff'
  on-primary-fixed: '#22005d'
  on-primary-fixed-variant: '#4f378a'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#cdc0e9'
  on-secondary-fixed: '#1f1635'
  on-secondary-fixed-variant: '#4b4263'
  tertiary-fixed: '#ffdf93'
  tertiary-fixed-dim: '#e7c365'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#594400'
  background: '#141218'
  on-background: '#e6e0e9'
  surface-variant: '#36343a'
typography:
  display:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.4'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 0.5rem
  sm: 1rem
  md: 1.5rem
  lg: 2.5rem
  xl: 4rem
  container-max: 1280px
  gutter: 24px
---

## Brand & Style
The design system for this academy is built on the pillars of **precision, clarity, and technical fluency**. It targets aspiring and professional frontend engineers, requiring an interface that reflects the very standards they are learning to implement.

The style is **Modern/Tech-Forward with a "Glass-Code" aesthetic**. It utilizes high-contrast color palettes to define different learning tracks while maintaining a consistent structural skeleton. The UI leverages subtle translucent layers and crisp borders to evoke the feeling of a sophisticated IDE (Integrated Development Environment), ensuring the user feels immersed in a professional coding atmosphere.

## Colors
This design system utilizes a multi-theme architecture. Each theme is defined by a primary accent and a secondary grounding color, supporting both Light and Dark modes.

- **Tech Neon**: Designed for high-energy advanced tracks (React, WebGL). Use Electric Blue for primary actions and Deep Violet for deep-space depth.
- **Minimalist**: The standard academic path. Focuses on Stark White and Deep Black for maximum legibility with Professional Blue for semantic focus.
- **Warm/Code**: Evokes the "late night coding" vibe. Vibrant Orange provides high visibility for calls-to-action against a Dark Charcoal base.
- **Fresh/Nature**: Used for introductory or "Clean Code" modules. Emerald Green promotes a calm, growth-oriented learning environment.

**Implementation Note:** All semantic tokens (e.g., `--surface-primary`) must map to these hex values based on the active data-attribute on the root element.

## Typography
The typography system prioritizes the reading of technical documentation and code. 

- **Geist** is used for headlines to provide a modern, geometric tech feel. 
- **Inter** handles the bulk of the instructional content due to its exceptional legibility and neutral character.
- **JetBrains Mono** is utilized for labels, progress indicators, and metadata to reinforce the developer-centric nature of the platform.

For mobile devices, `display` text should scale down to `32px` and `headline-lg` should scale to `24px` to maintain visual hierarchy without overflowing narrow viewports.

## Layout & Spacing
The design system employs a **12-column fluid grid** for desktop and a **4-column grid** for mobile.

- **Rhythm**: All spacing follows a 4px base unit. 
- **Course Grid**: On desktop, course cards should span 3 or 4 columns (3-up or 4-up layout). On mobile, they occupy a full 4-column span.
- **Section Margins**: Use `xl` spacing to separate major content blocks to ensure the UI feels expansive and professional.
- **Quiz Layout**: Centered single-column layout (max-width 720px) to minimize eye travel and increase focus.

## Elevation & Depth
Depth is expressed through **Tonal Layering** rather than heavy shadows.

- **Level 0 (Base)**: The main background.
- **Level 1 (Cards)**: A slightly offset background color with a 1px solid border (low-contrast).
- **Level 2 (Dropdowns/Modals)**: Use a `backdrop-filter: blur(12px)` with a semi-transparent surface color.
- **Interactive Elements**: Elements should transition from a flat state to a subtle glow (using the primary theme color) on hover, simulating a "powered-on" technical component.

## Shapes
The shape language is **Soft (0.25rem)**. This provides a professional, engineered look that avoids the "childishness" of overly rounded corners while remaining more approachable than sharp 90-degree angles.

- **Buttons**: 4px radius.
- **Course Cards**: 8px (rounded-lg) for a more substantial container feel.
- **Inputs**: 4px radius.
- **Certificates**: 0px (Sharp) to convey traditional authority and prestige.

## Components

### Course Cards
- **Structure**: Image/Thumbnail header, followed by a category tag (in `code-sm`), course title (`headline-md`), and a difficulty indicator.
- **Interactive State**: On hover, the 1px border changes from the neutral color to the theme's `primary_color`.

### Navigation Header
- **Layout**: Sticky positioning with a `glassmorphism` background. 
- **Links**: Use `label-caps` for navigation items with a 2px bottom border that appears on active/hover states.

### Quiz UI
- **Progress Bar**: A thin 4px track with a glowing `primary_color` fill.
- **Option Buttons**: Large, block-level buttons. In Dark mode, they use a subtle dark-grey fill; on selection, they transition to a solid `primary_color` with high-contrast text.

### Certificate of Achievement
- **Aesthetic**: Minimalist and authoritative. Uses `ebGaramond` (or a similar classic serif) for the student's name to contrast the tech-focused UI.
- **Border**: A thin, double-line border.
- **Seal**: A vector geometric seal using the `primary_color` of the theme in which the course was completed.

### Inputs & Fields
- **Styling**: Monospaced text for input to mimic code editors. Focus state uses a 2px outer glow in the primary theme color.