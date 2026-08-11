/**
 * animations.ts
 * Grasindopro Company Profile — GSAP Animation System
 *
 * Covers:
 *  1. Entrance animations  (fade-in, slide-up, slide-left/right, zoom-in)
 *  2. Scroll-triggered     (elements animate when entering the viewport)
 *  3. Page transitions     (fade-out on leave, fade-in on enter)
 *  4. Stagger helpers      (animate lists / grids with a delay chain)
 *  5. Hero sequence        (orchestrated hero banner entrance)
 *  6. Utility cleanup      (kill & reset for SPA page changes)
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// ─── Register GSAP plugins ──────────────────────────────────────────────────
gsap.registerPlugin(ScrollTrigger);

// ─── Shared defaults ────────────────────────────────────────────────────────
const EASE_SMOOTH  = 'power3.out';
const EASE_SPRING  = 'back.out(1.4)';
const EASE_EXPO    = 'expo.out';
const DURATION_MD  = 0.7;
const DURATION_LG  = 1.0;
const DURATION_SM  = 0.45;

// ============================================================
// 1. ENTRANCE ANIMATIONS
//    Call once (e.g. inside useEffect / componentDidMount)
// ============================================================

/** Fade in from transparent */
export const fadeIn = (
  target: string | Element | Element[],
  delay = 0,
  duration = DURATION_MD
): gsap.core.Tween =>
  gsap.fromTo(
    target,
    { opacity: 0 },
    { opacity: 1, duration, delay, ease: EASE_SMOOTH }
  );

/** Slide up and fade in */
export const slideUp = (
  target: string | Element | Element[],
  delay = 0,
  distance = 50,
  duration = DURATION_MD
): gsap.core.Tween =>
  gsap.fromTo(
    target,
    { opacity: 0, y: distance },
    { opacity: 1, y: 0, duration, delay, ease: EASE_SMOOTH }
  );

/** Slide in from left */
export const slideInLeft = (
  target: string | Element | Element[],
  delay = 0,
  distance = 80,
  duration = DURATION_MD
): gsap.core.Tween =>
  gsap.fromTo(
    target,
    { opacity: 0, x: -distance },
    { opacity: 1, x: 0, duration, delay, ease: EASE_SMOOTH }
  );

/** Slide in from right */
export const slideInRight = (
  target: string | Element | Element[],
  delay = 0,
  distance = 80,
  duration = DURATION_MD
): gsap.core.Tween =>
  gsap.fromTo(
    target,
    { opacity: 0, x: distance },
    { opacity: 1, x: 0, duration, delay, ease: EASE_SMOOTH }
  );

/** Zoom in with subtle scale */
export const zoomIn = (
  target: string | Element | Element[],
  delay = 0,
  duration = DURATION_MD
): gsap.core.Tween =>
  gsap.fromTo(
    target,
    { opacity: 0, scale: 0.88 },
    { opacity: 1, scale: 1, duration, delay, ease: EASE_SPRING }
  );

/** Pop in — elastic spring effect */
export const popIn = (
  target: string | Element | Element[],
  delay = 0,
  duration = DURATION_MD
): gsap.core.Tween =>
  gsap.fromTo(
    target,
    { opacity: 0, scale: 0.6 },
    { opacity: 1, scale: 1, duration, delay, ease: 'elastic.out(1, 0.5)' }
  );

// ============================================================
// 2. STAGGER ANIMATIONS
//    Animate a list/grid with cascading delays
// ============================================================

interface StaggerOptions {
  delay?    : number;
  stagger?  : number;
  duration? : number;
  distance? : number;
  ease?     : string;
}

/** Stagger slide-up for a list of children */
export const staggerSlideUp = (
  parent: string | Element,
  childSelector = ':scope > *',
  opts: StaggerOptions = {}
): gsap.core.Tween => {
  const {
    delay    = 0,
    stagger  = 0.12,
    duration = DURATION_MD,
    distance = 40,
    ease     = EASE_SMOOTH,
  } = opts;

  const container =
    typeof parent === 'string' ? document.querySelector(parent) : parent;
  if (!container) return gsap.to({}, {});

  const children = Array.from(container.querySelectorAll(childSelector));
  return gsap.fromTo(
    children,
    { opacity: 0, y: distance },
    { opacity: 1, y: 0, duration, delay, stagger, ease }
  );
};

/** Stagger fade-in for any NodeList */
export const staggerFadeIn = (
  targets: string | NodeListOf<Element> | Element[],
  opts: StaggerOptions = {}
): gsap.core.Tween => {
  const { delay = 0, stagger = 0.1, duration = DURATION_SM } = opts;
  return gsap.fromTo(
    targets,
    { opacity: 0 },
    { opacity: 1, duration, delay, stagger, ease: EASE_SMOOTH }
  );
};

// ============================================================
// 3. SCROLL-TRIGGERED ANIMATIONS
//    Elements animate when they enter the viewport
// ============================================================

export type ScrollAnimationType =
  | 'fade'
  | 'slide-up'
  | 'slide-left'
  | 'slide-right'
  | 'zoom'
  | 'stagger-up';

interface ScrollAnimateOptions {
  type?     : ScrollAnimationType;
  distance? : number;
  duration? : number;
  delay?    : number;
  stagger?  : number;
  start?    : string;
  markers?  : boolean;
}

/**
 * Attach a scroll-triggered animation to one or more elements.
 *
 * @param target  CSS selector, Element, or array of Elements
 * @param opts    Animation options
 */
export const scrollAnimate = (
  target: string | Element | Element[],
  opts: ScrollAnimateOptions = {}
): ScrollTrigger[] => {
  const {
    type     = 'slide-up',
    distance = 50,
    duration = DURATION_MD,
    delay    = 0,
    stagger  = 0,
    start    = 'top 88%',
    markers  = false,
  } = opts;

  const elements: Element[] =
    typeof target === 'string'
      ? Array.from(document.querySelectorAll(target))
      : Array.isArray(target)
      ? target
      : [target];

  if (!elements.length) return [];

  const triggers: ScrollTrigger[] = [];
  const animGroups: Element[][] =
    stagger > 0 ? [elements] : elements.map((el) => [el]);

  animGroups.forEach((group) => {
    const hiddenState = getHiddenState(type, distance);
    gsap.set(group, hiddenState);

    const tween = buildScrollTween(group, { type, distance, duration, delay, stagger });

    const st = ScrollTrigger.create({
      trigger       : group[0],
      start,
      markers,
      // 'play none none reverse' = play on enter, reverse on scroll back up
      onEnter       : () => tween.play(),
      onLeaveBack   : () => tween.reverse(),
    });

    triggers.push(st);
  });

  return triggers;
};

const buildScrollTween = (
  targets: Element[],
  opts: Required<Pick<ScrollAnimateOptions, 'type' | 'distance' | 'duration' | 'delay' | 'stagger'>>
): gsap.core.Tween => {
  const { type, distance, duration, delay, stagger } = opts;
  const from = getHiddenState(type, distance);
  const to: gsap.TweenVars = {
    opacity : 1,
    x       : 0,
    y       : 0,
    scale   : 1,
    duration,
    delay,
    ease    : EASE_SMOOTH,
    stagger : stagger > 0 ? stagger : undefined,
    paused  : true,
  };
  return gsap.fromTo(targets, from, to);
};

const getHiddenState = (
  type: ScrollAnimationType,
  distance: number
): gsap.TweenVars => {
  switch (type) {
    case 'fade'        : return { opacity: 0 };
    case 'slide-up'    : return { opacity: 0, y: distance };
    case 'slide-left'  : return { opacity: 0, x: -distance };
    case 'slide-right' : return { opacity: 0, x: distance };
    case 'zoom'        : return { opacity: 0, scale: 0.85 };
    case 'stagger-up'  : return { opacity: 0, y: distance };
    default            : return { opacity: 0, y: distance };
  }
};

// ============================================================
// 4. PAGE TRANSITIONS
// ============================================================

/** Animate page container OUT (before navigating away) */
export const pageLeave = (
  container: string | Element = '#root',
  duration = DURATION_SM
): Promise<void> =>
  new Promise((resolve) => {
    gsap.to(container, {
      opacity  : 0,
      y        : -20,
      duration,
      ease     : 'power2.in',
      onComplete: resolve,
    });
  });

/** Animate page container IN (after mounting new page) */
export const pageEnter = (
  container: string | Element = '#root',
  duration = DURATION_MD
): gsap.core.Tween =>
  gsap.fromTo(
    container,
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration, ease: EASE_EXPO }
  );

/**
 * Combined page-transition wrapper for SPA navigation.
 *
 * Usage:
 *   await pageTransition(() => setCurrentPage('contact'));
 */
export const pageTransition = async (
  navigate: () => void,
  container: string | Element = '#root'
): Promise<void> => {
  await pageLeave(container);
  navigate();
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      pageEnter(container);
    });
  });
};

// ============================================================
// 5. HERO SEQUENCE
// ============================================================

interface HeroAnimateOptions {
  badge?    : string | Element | null;
  title?    : string | Element | null;
  subtitle? : string | Element | null;
  cta?      : string | Element | null;
  image?    : string | Element | null;
}

/**
 * Orchestrated hero banner entrance.
 *
 * Usage:
 *   animateHero({
 *     badge   : badgeRef.current,
 *     title   : titleRef.current,
 *     subtitle: subtitleRef.current,
 *     cta     : ctaRef.current,
 *     image   : imageRef.current,
 *   });
 */
export const animateHero = (els: HeroAnimateOptions = {}): gsap.core.Timeline => {
  const tl = gsap.timeline({ defaults: { ease: EASE_SMOOTH } });

  if (els.badge) {
    tl.fromTo(els.badge,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: DURATION_SM }
    );
  }
  if (els.title) {
    tl.fromTo(els.title,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: DURATION_LG },
      els.badge ? '-=0.2' : 0
    );
  }
  if (els.subtitle) {
    tl.fromTo(els.subtitle,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: DURATION_MD },
      '-=0.5'
    );
  }
  if (els.cta) {
    tl.fromTo(els.cta,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: DURATION_SM },
      '-=0.4'
    );
  }
  if (els.image) {
    tl.fromTo(els.image,
      { opacity: 0, x: 60 },
      { opacity: 1, x: 0, duration: DURATION_LG, ease: EASE_SPRING },
      '-=0.8'
    );
  }

  return tl;
};

// ============================================================
// 6. HELPER ANIMATIONS
// ============================================================

/** Animate the navbar sliding down on first mount */
export const animateNavbar = (navEl: string | Element): gsap.core.Tween =>
  gsap.fromTo(
    navEl,
    { y: -80, opacity: 0 },
    { y: 0, opacity: 1, duration: DURATION_MD, ease: EASE_EXPO, delay: 0.1 }
  );

/** Card lift on hover (attach to onMouseEnter) */
export const cardHoverIn = (el: Element): gsap.core.Tween =>
  gsap.to(el, {
    y        : -6,
    scale    : 1.02,
    boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
    duration : DURATION_SM,
    ease     : EASE_SPRING,
  });

/** Card reset on hover leave (attach to onMouseLeave) */
export const cardHoverOut = (el: Element): gsap.core.Tween =>
  gsap.to(el, {
    y        : 0,
    scale    : 1,
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
    duration : DURATION_SM,
    ease     : EASE_SMOOTH,
  });

/**
 * Animate a number counter from 0 to endValue.
 * Writes the result directly to el.innerText.
 */
export const animateCounter = (
  el: HTMLElement,
  endValue: number,
  duration = 2,
  suffix = ''
): gsap.core.Tween => {
  const obj = { val: 0 };
  return gsap.to(obj, {
    val     : endValue,
    duration,
    ease    : 'power1.out',
    onUpdate: () => {
      el.innerText = Math.round(obj.val).toLocaleString('id-ID') + suffix;
    },
  });
};

// ============================================================
// 7. CLEANUP UTILITIES
// ============================================================

/**
 * Kill ALL active ScrollTriggers and tweens.
 * Call before unmounting a page to prevent memory leaks.
 */
export const killAllAnimations = (): void => {
  ScrollTrigger.getAll().forEach((st) => st.kill());
  gsap.globalTimeline.clear();
};

/** Kill ScrollTriggers attached to a specific element. */
export const killScrollTrigger = (triggerEl: Element): void => {
  ScrollTrigger.getAll()
    .filter((st) => st.trigger === triggerEl)
    .forEach((st) => st.kill());
};

// ============================================================
// 8. CLIP-PATH IMAGE REVEAL  (ala Squarespace)
//    Image "opens" from bottom -> top as it enters the viewport
// ============================================================

interface ClipRevealOptions {
  duration?  : number;
  delay?     : number;
  start?     : string;
  direction? : 'up' | 'down' | 'left' | 'right';
  scrub?     : boolean | number;
}

/**
 * Animate an element with a clip-path reveal (Squarespace style).
 * Direction 'up' = reveals from bottom upward (most common).
 *
 * Usage:
 *   clipPathReveal(imgRef.current);
 *   clipPathReveal('.gallery-img', { direction: 'left', scrub: true });
 */
export const clipPathReveal = (
  target: string | Element | Element[],
  opts: ClipRevealOptions = {}
): ScrollTrigger[] => {
  const {
    duration  = 1.1,
    delay     = 0,
    start     = 'top 90%',
    direction = 'up',
    scrub     = false,
  } = opts;

  const elements: Element[] =
    typeof target === 'string'
      ? Array.from(document.querySelectorAll(target))
      : Array.isArray(target)
      ? target
      : [target];

  if (!elements.length) return [];

  const getClips = (dir: typeof direction) => {
    switch (dir) {
      case 'up'    : return { from: 'inset(100% 0% 0% 0%)', to: 'inset(0% 0% 0% 0%)' };
      case 'down'  : return { from: 'inset(0% 0% 100% 0%)', to: 'inset(0% 0% 0% 0%)' };
      case 'left'  : return { from: 'inset(0% 100% 0% 0%)', to: 'inset(0% 0% 0% 0%)' };
      case 'right' : return { from: 'inset(0% 0% 0% 100%)', to: 'inset(0% 0% 0% 0%)' };
    }
  };

  const { from, to } = getClips(direction);
  const triggers: ScrollTrigger[] = [];

  elements.forEach((el) => {
    gsap.set(el, { clipPath: from, opacity: 1 });

    if (scrub) {
      const animation = gsap.fromTo(el,
        { clipPath: from },
        { clipPath: to, ease: 'none' }
      );
      const st = ScrollTrigger.create({
        trigger  : el,
        start,
        end      : 'bottom 20%',
        scrub    : typeof scrub === 'number' ? scrub : 1,
        animation,
      });
      triggers.push(st);
    } else {
      const tween = gsap.fromTo(
        el,
        { clipPath: from },
        { clipPath: to, duration, delay, ease: 'power4.inOut', paused: true }
      );
      const st = ScrollTrigger.create({
        trigger     : el,
        start,
        onEnter     : () => tween.play(),
        onLeaveBack : () => tween.reverse(),
      });
      triggers.push(st);
    }
  });

  return triggers;
};

// ============================================================
// 9. SPLIT TEXT REVEAL  (ala Squarespace word-by-word)
//    Each word slides up and fades in sequentially.
//    No external SplitText plugin required.
// ============================================================

interface SplitTextOptions {
  stagger?  : number;
  duration? : number;
  delay?    : number;
  start?    : string;
  distance? : number;
  byChar?   : boolean;
}

/**
 * Split element text into word (or char) spans and reveal them
 * one by one with a slide-up + fade animation.
 *
 * ⚠️ Overwrites the element's innerHTML — best for headings.
 *
 * Usage:
 *   splitTextReveal(headingRef.current, { stagger: 0.05 });
 *   splitTextReveal('.hero-title', { byChar: true, stagger: 0.03 });
 */
export const splitTextReveal = (
  target: string | HTMLElement | HTMLElement[],
  opts: SplitTextOptions = {}
): ScrollTrigger[] => {
  const {
    stagger  = 0.06,
    duration = 0.7,
    delay    = 0,
    start    = 'top 90%',
    distance = 40,
    byChar   = false,
  } = opts;

  const elements: HTMLElement[] =
    typeof target === 'string'
      ? Array.from(document.querySelectorAll<HTMLElement>(target))
      : Array.isArray(target)
      ? (target as HTMLElement[])
      : [target as HTMLElement];

  if (!elements.length) return [];

  const triggers: ScrollTrigger[] = [];

  elements.forEach((el) => {
    const text = el.innerText;
    const units = byChar ? text.split('') : text.split(' ');

    el.innerHTML = units
      .map(
        (u, i) =>
          `<span style="display:inline-block;overflow:hidden;vertical-align:bottom">` +
          `<span class="sqs-inner" style="display:inline-block">${u}</span>` +
          `</span>` +
          (!byChar && i < units.length - 1 ? ' ' : '')
      )
      .join('');

    const inners = Array.from(el.querySelectorAll<HTMLElement>('.sqs-inner'));
    gsap.set(inners, { y: distance, opacity: 0 });

    const tween = gsap.to(inners, {
      y       : 0,
      opacity : 1,
      duration,
      delay,
      stagger,
      ease    : 'power3.out',
      paused  : true,
    });

    const st = ScrollTrigger.create({
      trigger     : el,
      start,
      onEnter     : () => tween.play(),
      onLeaveBack : () => tween.reverse(),
    });

    triggers.push(st);
  });

  return triggers;
};

// ─── Default export: convenience object ─────────────────────
const Animations = {
  fadeIn,
  slideUp,
  slideInLeft,
  slideInRight,
  zoomIn,
  popIn,
  staggerSlideUp,
  staggerFadeIn,
  scrollAnimate,
  pageLeave,
  pageEnter,
  pageTransition,
  animateHero,
  animateNavbar,
  cardHoverIn,
  cardHoverOut,
  animateCounter,
  killAllAnimations,
  killScrollTrigger,
  clipPathReveal,
  splitTextReveal,
};

export default Animations;
