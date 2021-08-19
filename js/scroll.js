gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const restart = 'restart';

//header
gsap.from('.main-header__header-wrapper', {
    duration: 1,
    opacity: 0,
    translateX: 200,
    transformOrigin: 'center center',
    ease: 'back',
});

//intro

gsap.timeline({
    scrollTrigger: {
        trigger: '.intro-header__content-right',
        toggleActions: restart,
    }
})
    .from('.intro-header__content-right', {
        duration: 1,
        opacity: 0,
        translateX: 100,
        stagger: 0.2,
        ease: 'back',
    })
    .from('.intro-header__title', {
        duration: 0.4,
        opacity: 0,
        translateX: -100,
        stagger: 0.2,
        ease: 'back',
    })
    .from('.intro-header__description', {
        duration: 0.4,
        opacity: 0,
        translateX: -100,
        stagger: 0.2,
        ease: 'back',
    })
    .from('.intro-header__button', {
        duration: 0.4,
        opacity: 0,
        translateX: -100,
        stagger: 0.2,
        ease: 'back',
    });

gsap.timeline({
    scrollTrigger: {
        trigger: '.intro-content',
        toggleActions: restart,
    }
})
    .from('.intro-content__progress-bar', {
        duration: 1,
        opacity: 0,
        translateX: -100,
        ease: 'back',
    })
    .from('.intro-content__point', {
        duration: 0.9,
        opacity: 0,
        translateX: -100,
        stagger: 0.5,
        ease: 'back',
    })
    .from('.intro-content__target-item', {
        duration: 0.9,
        opacity: 0,
        translateX: -100,
        stagger: 0.5,
        ease: 'back',
    });

gsap.timeline({
    scrollTrigger: {
        trigger: '.intro-content',
        toggleActions: restart,
    }
})
    .from('.intro-content__bonus-title', {
        duration: 1,
        opacity: 0,
        translateX: 100,
        ease: 'back',
    })
    .from('.intro-content__bonus-value', {
        duration: 0.4,
        opacity: 0,
        translateX: 100,
        ease: 'back',
    })
    .from('.intro-content__bonus-ownership', {
        duration: 0.4,
        opacity: 0,
        translateX: 100,
        ease: 'back',
    })
    .from('.intro-content__bonus-end-title', {
        duration: 0.4,
        opacity: 0,
        translateX: 100,
        ease: 'back',
    })
    .from('.time-section', {
        duration: 0.4,
        opacity: 0,
        translateX: 100,
        stagger: 0.4,
        ease: 'back',
    });

gsap.timeline({
    scrollTrigger: {
        trigger: '.intro-content__lower',
        toggleActions: restart,
    }
})
    .from('.intro-content__item', {
        duration: 1,
        opacity: 0,
        translateX: -100,
        stagger: 0.4,
        ease: 'back',
    })
    .from('.social-media__element._intro', {
        duration: 0.4,
        opacity: 0,
        translateX: 100,
        stagger: 0.4,
        ease: 'back',
    });

//ecosystems

gsap.from('.ecosystems__header', {
    scrollTrigger: {
        trigger: '.ecosystems__header',
        toggleActions: restart,
    },
    duration: 0.6,
    opacity: 0,
    translateY: 40,
    ease: 'back',
});

gsap.timeline({
    scrollTrigger: {
        trigger: '.ecosystems__advantages',
        start: 'top bottom',
        toggleActions: restart,
    },
    delay: 0.6
})
    .from('.ecosystems__advantage', {
        duration: 1,
        opacity: -0.5,
        translateY: 40,
        stagger: 0.1,
        ease: 'back',
    });

//platform

gsap.from('.platform__header', {
    scrollTrigger: {
        trigger: '.platform__header',
        toggleActions: restart,
    },
    duration: 0.6,
    opacity: 0,
    translateY: 40,
    ease: 'back',
});

gsap.from('.platform__complex-tabs', {
    scrollTrigger: {
        trigger: '.platform__complex-tabs',
        toggleActions: restart,
    },
    duration: 0.6,
    opacity: 0,
    translateY: 40,
    ease: 'back',
});

gsap.timeline({
    scrollTrigger: {
        trigger: '.platform__list-block',
        start: 'top bottom',
        toggleActions: restart,
    },
    delay: 0.1
})
    .from('.platform__list-title', {
        duration: 0.6,
        opacity: 0,
        scale: 0,
        ease: 'back',
    })
    .from('.platform__list-subtitle', {
        duration: 0.6,
        opacity: 0,
        scale: 0,
        ease: 'back',
    });

gsap.timeline({
    scrollTrigger: {
        trigger: '.mvp-list',
        toggleActions: restart,
    }
})
    .from('.mvp-list__item', {
        duration: 0.6,
        opacity: 0,
        stagger: 0.3,
        translateY: 40,
        ease: 'back',
    })
    .from('.platform__wrapper-rounds', {
        duration: 0.6,
        opacity: 0,
        stagger: 0.1,
        translateY: 40,
        ease: 'back',
    });

//Mvp

gsap.timeline({
    scrollTrigger: {
        trigger: '.mvp__header',
        toggleActions: restart,
    }
})
    .from('.mvp__header', {
        duration: 1,
        opacity: 0,
        translateY: 40,
        ease: 'back',
    })
    .from('.mvp__description', {
        duration: 0.6,
        opacity: 0,
        translateY: 40,
        ease: 'back',
    });

gsap.timeline({
    scrollTrigger: {
        trigger: '.mvp__content-right',
        toggleActions: restart,
    }
})
    .from('.mvp__item', {
        duration: 0.6,
        opacity: 0,
        stagger: 0.3,
        translateY: 40,
        ease: 'back',
    })
    .from('.mvp__button', {
        duration: 0.6,
        opacity: 0,
        stagger: 0.1,
        translateY: 40,
        ease: 'back',
    })
    .from('.mvp__content-left', {
        duration: 0.6,
        opacity: 0,
        stagger: 0.1,
        translateY: 40,
        ease: 'back',
    });

//tokens

gsap.timeline({
    scrollTrigger: {
        trigger: '.tokens__header',
        toggleActions: restart,
    }
})
    .from('.tokens__header', {
        duration: 1,
        opacity: 0,
        translateY: 40,
        ease: 'back'
    })
    .from('.tokens_breakdown', {
        duration: 0.6,
        opacity: 0,
        translateY: 40,
        ease: 'back',
    });

gsap.timeline({
    scrollTrigger: {
        trigger: '.tokens__description-block',
        toggleActions: restart,
    }
})
    .from('.tokens__tokens-card', {
        duration: 1,
        stagger: 0.5,
        opacity: 0,
        translateX: -140,
        ease: 'back',
    });

gsap.timeline({
    scrollTrigger: {
        trigger: '.tokens__type-wrapper',
        toggleActions: restart,
    }
})
    .from('.tokens-type', {
        duration: 1,
        stagger: 0.2,
        opacity: 0,
        translateX: 140,
        ease: 'back',
    });

//roadmap

gsap.timeline({
    scrollTrigger: {
        trigger: '.road-map__header',
        toggleActions: restart,
    }
})
    .from('.road-map__header', {
        duration: 1,
        opacity: 0,
        translateY: 40,
        ease: 'back',
    })
    .from('.road-map-header__description', {
        duration: 0.6,
        opacity: 0,
        translateY: 40,
        ease: 'back',
    });

gsap.timeline({
    scrollTrigger: {
        trigger: '.road-map-content',
        toggleActions: restart,
    }
})
    .from('.road-map-content__item', {
        duration: 1,
        opacity: 0,
        translateX: -100,
        stagger: 0.2,
        ease: 'power2'
    })
    .from('.road-map-content__btn__buttons', {
        duration: 1,
        opacity: 0,
        translateX: -100,
        stagger: 0.2,
        ease: 'power2',
    });

//our-team
gsap.timeline({
    scrollTrigger: {
        trigger: '.team__header',
        toggleActions: restart,
    }
})
    .from('.team__title', {
        duration: 1.5,
        opacity: 0.5,
        x: -250,
        stagger: 0.2,
        ease: 'power4'
    });

gsap.timeline({
    scrollTrigger: {
        trigger: '.team__header',
        toggleActions: restart,
    }
})
    .from('.team__description', {
        duration: 1.5,
        opacity: 0.5,
        x: 250,
        stagger: 0.2,
        ease: 'power4',
    });

gsap.from('.employee-card._left', {
    scrollTrigger: {
        trigger: '.team__header',
        toggleActions: restart,
    },
    duration: 2,
    opacity: 0.5,
    x: -1000,
    stagger: 0.2,
    ease: 'power4',
});

gsap.from('.employee-card._right', {
    scrollTrigger: {
        trigger: '.team__header',
        toggleActions: restart,
    },
    duration: 2,
    opacity: 0.5,
    x: 1000,
    stagger: 0.2,
    ease: 'power4',
});

gsap.from('.team-content__btn._left', {
    scrollTrigger: {
        trigger: '.team-content__buttons',
        toggleActions: restart,
    },
    duration: 1,
    x: -75,
    opacity: 0.5,
    ease: 'power4',
});

gsap.from('.team-content__btn._right', {
    scrollTrigger: {
        trigger: '.team-content__buttons',
        toggleActions: restart,
    },
    duration: 1,
    x: 75,
    opacity: 0.5,
    ease: 'power4',
});

//board-member

gsap.from('.board-member__title', {
    scrollTrigger: {
        trigger: '.board-member__header',
        toggleActions: restart,
    },
    duration: 1,
    x: 250,
    opacity: 0.5,
    ease: 'power4',
});

gsap.from('.board-member__description', {
    scrollTrigger: {
        trigger: '.board-member__header',
        toggleActions: restart,
    },
    duration: 1,
    x: -250,
    opacity: 0.5,
    ease: 'power4',
});

gsap.from('.board-member-card', {
    scrollTrigger: {
        trigger: '.board-member__list',
        toggleActions: restart,
    },
    duration: 1,
    x: -1500,
    opacity: 0.5,
    stagger: 0.25,
    ease: 'power4',
});

gsap.from('.our-partners__header', {
    scrollTrigger: {
        trigger: '.our-partners__title',
        toggleActions: restart,
    },
    duration: 1.2,
    opacity: 0,
    scale: 0,
    ease: 'power4',
});

gsap.from('.our-partners__slider', {
    scrollTrigger: {
        trigger: '.our-partners__title',
        toggleActions: restart,
    },
    duration: 1.2,
    opacity: 0.5,
    scale: 1.33,
    ease: 'power4',
});

//documents

gsap.from('.documents__header', {
    scrollTrigger: {
        trigger: '.documents__header',
        toggleActions: restart,
    },
    duration: 1,
    x: 100,
    opacity: 0,
    ease: 'power4',
});

gsap.from('.documents__description', {
    scrollTrigger: {
        trigger: '.documents__header',
        toggleActions: 'restart',
    },
    duration: 1,
    x: -100,
    opacity: 0,
    ease: 'power4',
});

gsap.from('.documents-list__block._left', {
    scrollTrigger: {
        trigger: '.documents-list',
        toggleActions: restart,
    },
    duration: 1.5,
    x: -100,
    y: 100,
    scale: 0.8,
    ease: 'circ',
});

gsap.from('.documents-list__block._right', {
    scrollTrigger: {
        trigger: '.documents-list',
        toggleActions: 'restart',
    },
    duration: 1.5,
    x: 100,
    y: 100,
    scale: 0.8,
    ease: 'circ',
});

gsap.from('.in-press__title', {
    scrollTrigger: {
        trigger: '.in-press__title',
        toggleActions: restart,
    },
    duration: 1.5,
    x: -100,
    scale: 0.8,
    ease: 'circ',
});

gsap.timeline({
    scrollTrigger: {
        trigger: '.in-press__content',
        toggleActions: restart,
    }
})
    .from('.in-press__item._first', {
        x: -100,
        opacity: 0,
        stagger: 0.25,
        ease: 'power1',
    })
    .from('.in-press__buttons', {
        duration: 0.9,
        y: 100,
        opacity: 0,
        ease: 'power4',
    });

gsap.from('.news__title', {
    scrollTrigger: {
        trigger: '.news__title',
        toggleActions: restart,
    },
    duration: 1.5,
    x: 100,
    scale: 0.8,
    ease: 'circ',
});

gsap.timeline({
    scrollTrigger: {
        trigger: '.in-press__content',
        toggleActions: restart,
    }
})
    .from('.news-card._first', {
        x: 100,
        opacity: 0,
        stagger: 0.8,
        delay: 1.2,
        ease: 'power1',
    })
    .from('.news__buttons', {
        duration: 0.9,
        y: 100,
        opacity: 0,
        ease: 'power4',
    });

//faqs

gsap.from('.faqs__header', {
    scrollTrigger: {
        trigger: '.faqs__container',
        toggleActions: restart,
    },
    duration: 1,
    x: 100,
    opacity: 0,
    ease: 'power4',
});

gsap.from('.faqs__description', {
    scrollTrigger: {
        trigger: '.faqs__container',
        toggleActions: 'restart',
    },
    duration: 1,
    x: -100,
    opacity: 0,
    ease: 'power4',
});

gsap.timeline({
    scrollTrigger: {
        trigger: '.faqs__animate-rounds',
        toggleActions: 'restart',
    }
})
    .from('.faqs__animate-rounds', {
        duration: 1,
        x: -100,
        opacity: 0.0,
        ease: 'power1',
    })
    .from('.social-media__element._faqs', {
        x: -100,
        stagger: 0.3,
        opacity: 0,
        ease: 'power4',
    });

gsap.from('.form__title', {
    scrollTrigger: {
        trigger: '.faqs__description',
        toggleActions: restart,
    },
    duration: 1,
    x: 50,
    opacity: 0.5,
    ease: 'power4',
});

gsap.from('.form__description', {
    scrollTrigger: {
        trigger: '.faqs__description',
        toggleActions: restart,
    },
    duration: 1,
    x: 100,
    opacity: 0,
    ease: 'power4',
});

gsap.timeline({
    scrollTrigger: {
        trigger: '.form__description',
        toggleActions: restart,
    }
})
    .from('.form__input-wrapper._name', {
        duration: 1,
        x: 200,
        opacity: 0,
        ease: 'power1',
    })
    .from('.form__input-wrapper._mail', {
        duration: 0.4,
        x: 50,
        opacity: 0,
        ease: 'power1',
    })
    .from('.form__wrap-message', {
        duration: 0.4,
        x: 50,
        opacity: 0,
        ease: 'power1',
    })
    .from('.form__primary-button', {
        duration: 0.4,
        x: 50,
        opacity: 0,
        ease: 'power1',
    });

gsap.timeline({
    scrollTrigger: {
        trigger: '.footer',
        toggleActions: restart,
    }
})
    .from('.footer__copyright', {
        duration: 0.4,
        opacity: 0,
        ease: 'power1',
    })
    .from('.footer__policy', {
        duration: 0.4,
        opacity: 0,
        ease: 'power1',
    })
    .from('.footer__terms', {
        duration: 0.4,
        opacity: 0,
        ease: 'power1',
    });
