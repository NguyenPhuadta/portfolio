const filters = document.querySelectorAll('.filter');
const projects = document.querySelectorAll('.project-card');
const floatingNav = document.querySelector('.floating-nav');
const scrollPercent = document.querySelector('.scroll-state b');
const cursorGlow = document.querySelector('.cursor-glow');
const projectOpenCursor = document.querySelector('.project-open-cursor');
const projectColumn = document.querySelector('.project-list');
let scrollTimer;

const avatar = document.querySelector('.avatar');
const avatarEyes = document.querySelectorAll('.avatar-eye');
const avatarMessage = document.querySelector('.avatar-message');
const avatarMessageText = document.querySelector('.avatar-message-text');
const avatarMessages = ['Hello, Glad to see u here!', 'Have a good day bro!'];

const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
let avatarSpeechTimer;
let avatarSpeechActive = false;
let avatarSpeechBeat = 0;
let avatarSpeechPauseAfter = 4;
let avatarMessageTimer;
let avatarMessageIndex = 0;

const randomBetween = (minimum, maximum) => Math.round(minimum + Math.random() * (maximum - minimum));
const setAvatarMouth = (state) => {
  if (avatar) avatar.dataset.mouth = state;
};

const scheduleAvatarSpeech = () => {
  if (!avatarSpeechActive || reducedMotionQuery.matches) return;

  avatarSpeechBeat += 1;
  if (avatarSpeechBeat >= avatarSpeechPauseAfter) {
    setAvatarMouth('closed');
    avatarSpeechBeat = 0;
    avatarSpeechPauseAfter = randomBetween(3, 6);
    avatarSpeechTimer = window.setTimeout(scheduleAvatarSpeech, randomBetween(180, 320));
    return;
  }

  const currentState = avatar.dataset.mouth;
  const nextState = currentState === 'open' ? 'small' : (Math.random() < 0.58 ? 'open' : 'small');
  setAvatarMouth(nextState);
  avatarSpeechTimer = window.setTimeout(scheduleAvatarSpeech, randomBetween(80, 150));
};

const startAvatarSpeech = () => {
  if (!avatar || avatarSpeechActive || reducedMotionQuery.matches) {
    setAvatarMouth('closed');
    return;
  }

  avatarSpeechActive = true;
  avatarSpeechBeat = 0;
  avatarSpeechPauseAfter = randomBetween(3, 6);
  scheduleAvatarSpeech();
};

const stopAvatarSpeech = () => {
  avatarSpeechActive = false;
  window.clearTimeout(avatarSpeechTimer);
  avatarSpeechTimer = undefined;
  setAvatarMouth('closed');
};

setAvatarMouth('closed');
window.avatarSpeech = { start: startAvatarSpeech, stop: stopAvatarSpeech };

const scheduleAvatarMessage = (callback, delay) => {
  window.clearTimeout(avatarMessageTimer);
  avatarMessageTimer = window.setTimeout(callback, delay);
};

const showReducedMotionMessage = () => {
  if (!avatarMessage || !avatarMessageText) return;

  const message = avatarMessages[avatarMessageIndex];
  avatarMessage.classList.add('is-visible');
  avatarMessageText.textContent = message;
  avatarMessage.setAttribute('aria-label', message);
  avatarMessage.style.width = `${Math.ceil(avatarMessageText.scrollWidth) + 24}px`;
  avatarMessageIndex = (avatarMessageIndex + 1) % avatarMessages.length;
  scheduleAvatarMessage(showReducedMotionMessage, 3500);
};

const resizeAvatarMessage = () => {
  if (!avatarMessage || !avatarMessageText) return;
  avatarMessage.style.width = `${Math.max(36, Math.ceil(avatarMessageText.scrollWidth) + 24)}px`;
};

const appendAvatarMessageCharacter = (character) => {
  const characterNode = document.createElement('span');
  characterNode.className = 'avatar-message-character';
  characterNode.textContent = character;
  avatarMessageText.appendChild(characterNode);
  resizeAvatarMessage();
  requestAnimationFrame(() => characterNode.classList.add('is-visible'));
};

const typeAvatarMessage = () => {
  if (!avatarMessage || !avatarMessageText || reducedMotionQuery.matches) return;

  const message = avatarMessages[avatarMessageIndex];
  let characterIndex = 0;
  avatarMessage.setAttribute('aria-label', message);
  window.avatarSpeech.start();

  const typeNextCharacter = () => {
    const character = message[characterIndex];
    appendAvatarMessageCharacter(character);
    characterIndex += 1;

    if (characterIndex < message.length) {
      const delay = /[,!.]/.test(character) ? 170 : 72;
      scheduleAvatarMessage(typeNextCharacter, delay);
      return;
    }

    window.avatarSpeech.stop();
    scheduleAvatarMessage(eraseAvatarMessage, 3500);
  };

  typeNextCharacter();
};

const eraseAvatarMessage = () => {
  if (!avatarMessageText || reducedMotionQuery.matches) return;

  const eraseNextCharacter = () => {
    const characterNode = avatarMessageText.lastElementChild;

    if (characterNode) {
      characterNode.classList.remove('is-visible');
      scheduleAvatarMessage(() => {
        characterNode.remove();
        resizeAvatarMessage();
        eraseNextCharacter();
      }, 48);
      return;
    }

    avatarMessageIndex = (avatarMessageIndex + 1) % avatarMessages.length;
    scheduleAvatarMessage(typeAvatarMessage, 260);
  };

  eraseNextCharacter();
};

const startAvatarMessageLoop = () => {
  if (!avatarMessage || !avatarMessageText) return;

  window.clearTimeout(avatarMessageTimer);
  window.avatarSpeech.stop();
  avatarMessage.classList.add('is-visible');

  if (reducedMotionQuery.matches) {
    showReducedMotionMessage();
  } else {
    avatarMessageText.replaceChildren();
    resizeAvatarMessage();
    typeAvatarMessage();
  }
};

reducedMotionQuery.addEventListener('change', startAvatarMessageLoop);

if (reducedMotionQuery.matches) {
  startAvatarMessageLoop();
} else {
  scheduleAvatarMessage(startAvatarMessageLoop, 320);
}

if (avatar && avatarEyes.length) {
  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  let gazeFrame;

  const renderGaze = () => {
    currentX += (targetX - currentX) * 0.18;
    currentY += (targetY - currentY) * 0.18;
    avatarEyes.forEach((eye) => eye.setAttribute('transform', `translate(${currentX.toFixed(2)} ${currentY.toFixed(2)})`));

    if (Math.abs(targetX - currentX) > 0.08 || Math.abs(targetY - currentY) > 0.08) {
      gazeFrame = requestAnimationFrame(renderGaze);
    } else {
      gazeFrame = undefined;
    }
  };

  const lookAt = (clientX, clientY) => {
    const rect = avatar.getBoundingClientRect();
    const deltaX = clientX - (rect.left + rect.width / 2);
    const deltaY = clientY - (rect.top + rect.height / 2);
    const distance = Math.hypot(deltaX, deltaY) || 1;
    const strength = Math.min(1, distance / 240);
    targetX = (deltaX / distance) * 29 * strength;
    targetY = (deltaY / distance) * 18 * strength;
    if (!gazeFrame) gazeFrame = requestAnimationFrame(renderGaze);
  };

  window.addEventListener('pointermove', (event) => lookAt(event.clientX, event.clientY), { passive: true });
  window.addEventListener('blur', () => {
    targetX = 0;
    targetY = 0;
    if (!gazeFrame) gazeFrame = requestAnimationFrame(renderGaze);
  });
}

const alignFloatingNavToContent = () => {
  const projectRect = projectColumn.getBoundingClientRect();
  floatingNav.style.left = `${projectRect.left + (projectRect.width / 2)}px`;
};

requestAnimationFrame(alignFloatingNavToContent);
window.addEventListener('load', alignFloatingNavToContent, { once: true });
window.addEventListener('resize', alignFloatingNavToContent, { passive: true });

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px' });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const applyProjectFilter = (selection, shouldAnimate = false) => {
  projects.forEach((project, index) => {
    const visible = project.dataset.category === selection;
    project.classList.toggle('hidden', !visible);
    if (visible && shouldAnimate) {
      project.animate(
        [
          { opacity: 0, transform: 'translateY(12px) scale(.98)' },
          { opacity: 1, transform: 'translateY(0) scale(1)' }
        ],
        { duration: 420, delay: index * 35, easing: 'cubic-bezier(.2,.8,.2,1)' }
      );
    }
  });
};

filters.forEach((filter) => {
  filter.addEventListener('click', () => {
    const selection = filter.dataset.filter;
    filters.forEach((item) => {
      const active = item === filter;
      item.classList.toggle('active', active);
      item.setAttribute('aria-selected', String(active));
    });
    applyProjectFilter(selection, true);
  });
});

applyProjectFilter(document.querySelector('.filter.active').dataset.filter);

window.addEventListener('scroll', () => {
  const top = window.scrollY;
  const total = document.documentElement.scrollHeight - window.innerHeight;
  const percent = Math.max(0, Math.min(100, Math.round((top / total) * 100)));
  scrollPercent.textContent = `${percent}%`;

  if (top > 430) floatingNav.classList.add('scrolling');
  else floatingNav.classList.remove('scrolling');

  clearTimeout(scrollTimer);
  scrollTimer = setTimeout(() => {
    if (top < 430) floatingNav.classList.remove('scrolling');
  }, 950);
}, { passive: true });

window.addEventListener('mousemove', (event) => {
  cursorGlow.style.left = `${event.clientX}px`;
  cursorGlow.style.top = `${event.clientY}px`;
});

if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  document.querySelectorAll('.project-card .cover').forEach((cover) => {
    cover.addEventListener('pointerenter', () => projectOpenCursor.classList.add('visible'));
    cover.addEventListener('pointermove', (event) => {
      projectOpenCursor.style.left = `${event.clientX}px`;
      projectOpenCursor.style.top = `${event.clientY}px`;
    });
    cover.addEventListener('pointerleave', () => projectOpenCursor.classList.remove('visible'));
  });
}
