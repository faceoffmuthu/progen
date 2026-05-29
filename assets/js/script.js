document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu toggle
    const hamburger = document.querySelector('.nav-hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navGroup = document.querySelector('.nav-group');

    if (navGroup) {
        navGroup.addEventListener('mouseenter', () => {
            navGroup.classList.add('is-hovering');
        });
        navGroup.addEventListener('mouseleave', () => {
            navGroup.classList.remove('is-hovering');
        });
    }

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            navLinks.classList.toggle('open');
        });

        navLinks.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('open');
                navLinks.classList.remove('open');
            });
        });
    }

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);

    // Handle cross-page scroll target via sessionStorage (no hash in URL)
    const scrollTargetId = sessionStorage.getItem('scrollTarget');
    if (scrollTargetId) {
        sessionStorage.removeItem('scrollTarget');
        const scrollToTarget = () => {
            const el = document.getElementById(scrollTargetId);
            if (!el) return;
            ScrollTrigger.refresh();
            requestAnimationFrame(() => {
                lenis.scrollTo(el, { offset: 0, immediate: false, duration: 1 });
            });
        };
        window.addEventListener('load', () => setTimeout(scrollToTarget, 800));
    }

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    const canvas = document.querySelector('.canvas');
    const context = canvas.getContext('2d');

    const setCanvasSize = () => {
        const pixelRatio = window.devicePixelRatio || 1;
        canvas.width = window.innerWidth * pixelRatio;
        canvas.height = window.innerHeight * pixelRatio;
        canvas.style.width = window.innerWidth + 'px';
        canvas.style.height = window.innerHeight + 'px';
        context.scale(pixelRatio, pixelRatio);
    };

    setCanvasSize();

    const frameCount = 502;
    const currentFrame = (index) => {
        return `./frames2/frame1 (${index + 1}).jpg`;
    };

    let images = [];
    let videoFrames = { frame: 0 };
    let imagesToLoad = frameCount;

    const render = () => {
        const canvasWidth = window.innerWidth;
        const canvasHeight = window.innerHeight;

        context.clearRect(0, 0, canvasWidth, canvasHeight);

        const img = images[videoFrames.frame];
        if (img && img.complete && img.naturalWidth > 0) {
            const imageAspect = img.naturalWidth / img.naturalHeight;
            const canvasAspect = canvasWidth / canvasHeight;

            let drawWidth, drawHeight, drawX, drawY;

            if (imageAspect > canvasAspect) {
                drawHeight = canvasHeight;
                drawWidth = canvasHeight * imageAspect;
                drawX = (canvasWidth - drawWidth) / 2;
                drawY = 0;
            } else {
                drawWidth = canvasWidth;
                drawHeight = canvasWidth / imageAspect;
                drawX = 0;
                drawY = (canvasHeight - drawHeight) / 2;
            }

            context.drawImage(img, drawX, drawY, drawWidth, drawHeight);
        }
    };

    const onLoad = () => {
        imagesToLoad--;
        if (!imagesToLoad) {
            render();
            setupScrollTrigger();
        }
    };

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.onload = onLoad;
        img.onerror = function () {
            console.warn('Failed to load:', this.src);
            onLoad();
        };
        img.src = currentFrame(i);
        images.push(img);
    }

    const header = document.querySelector('.header');
    const heroImg = document.querySelector('.hero-img');

    const setupScrollTrigger = () => {
        ScrollTrigger.create({
            trigger: '.hero',
            start: 'top top',
            end: `+=${window.innerHeight * 7}px`,
            pin: true,
            pinSpacing: true,
            scrub: 1,
            onUpdate: (self) => {
                const progress = self.progress;
                const animationProgress = Math.min(progress / 0.9, 1);
                const targetFrame = Math.round(animationProgress * (frameCount - 1));
                videoFrames.frame = targetFrame;
                render();


                if (progress <= 0.25) {
                    const navProgress = progress / 0.25;
                    const translateZ = navProgress * -500;

                    let opacity = 1;
                    if(progress >=0.2){
                        const fadeProgress = Math.min((progress - 0.2) / 0.05, 1);
                        opacity = 1 - fadeProgress;
                    }

                    gsap.set(header, {
                        transform : `translate(-50%,-50%) translateZ(${translateZ}px)`,
                        opacity: opacity
                    })
                }else{
                    gsap.set(header, {
                        opacity: 0
                    })
                }

                if(progress < 0.6){
                    gsap.set(heroImg, {
                        transform:"translateY(1000px)",
                        opacity: 0
                    })
                }else if (progress >= 0.6 && progress < 0.9){
                    const imgProgress = (progress - 0.6) / 0.3;
                    const translateZ = 1000 - imgProgress * 1000;

                    let opacity = 0;
                    if(progress <=0.8 ){
                        const opacityProgress = (progress - 0.6) / 0.2;
                        opacity = opacityProgress;
                    }else{
                        opacity = 1;
                    }
                    
                    gsap.set(heroImg, {
                        transform:`translateY(${translateZ}px)`,
                        opacity
                    })
                }else{
                    gsap.set(heroImg, {
                        transform:"translateY(0px)",
                        opacity: 1,
                    })
                }
            }
        });
    };

    window.addEventListener('resize', () => {
        setCanvasSize();
        render();
        initGalleryWheel();
        ScrollTrigger.refresh();
    });

    const initGalleryWheel = () => {
        const wheel = document.querySelector('.wheel');
        if (!wheel) return;

        const cards = gsap.utils.toArray('.wheel__card');
        const totalCards = cards.length;
        const radius = wheel.offsetWidth / 2;

        if (!radius || !totalCards) return;

        cards.forEach((card, index) => {
            const angle = (index / totalCards) * 360;
            const radian = (angle * Math.PI) / 180;
            const x = radius + radius * Math.sin(radian) - card.offsetWidth / 2;
            const y = radius - radius * Math.cos(radian) - card.offsetHeight / 2;

            gsap.set(card, {
                x,
                y,
                rotation: angle,
            });
        });

        ScrollTrigger.getById('gallery-wheel-spin')?.kill();

        gsap.to(wheel, {
            rotation: 360,
            ease: 'none',
            scrollTrigger: {
                id: 'gallery-wheel-spin',
                trigger: '.gallery-section',
                start: 'top top',
                end: `+=${window.innerHeight * 4}`,
                pin: '.gallery-inner',
                pinSpacing: true,
                scrub: 1,
            },
        });
    };

    requestAnimationFrame(() => {
        requestAnimationFrame(initGalleryWheel);
    });

    // Team Slider
    const teamData = [
        {
            img: 'assets/investorimages/BOD ENHANCED PHOTOS/1.png',
            name: 'Mr. Alfred Vinod Antony',
            location: 'Managing Director',
            din: 'DIN: 02776734',
            email: 'alfred@progenrenewables.com',
            bio1: 'As Managing Director, Alfred steers ProGen Renewables\' strategic vision, guiding the company\'s growth across solar EPC, project development, and long-term renewable energy partnerships.',
            bio2: 'His leadership combines deep industry insight with a commitment to delivering high-performance, sustainable solar solutions for clients across India.'
        },
        {
            img: 'assets/investorimages/BOD ENHANCED PHOTOS/4.png',
            name: 'Mrs. Veena Jose',
            location: 'CFO - Chief Financial Officer and Whole Time Director',
            din: 'DIN: 08017313',
            email: 'veena@progenrenewables.com',
            bio1: 'Veena drives day-to-day execution and corporate governance at ProGen, ensuring operational excellence across project delivery, finance, and stakeholder engagement.',
            bio2: 'Her hands-on approach and disciplined oversight have been instrumental in scaling the organisation while maintaining strong compliance and quality standards.'
        },
        {
            img: 'assets/investorimages/BOD ENHANCED PHOTOS/6.png',
            name: 'Mr. Innocent Judejoseph Antonyjoseph',
            location: 'Independent Director',
            din: 'DIN: 10896507',
            email: 'jjinnocent78@gmail.com',
            bio1: 'Innocent brings independent perspective and seasoned business judgement to the board, supporting ProGen on governance, risk, and long-term strategy.',
            bio2: 'His experience across enterprise and infrastructure sectors strengthens the board\'s oversight of growth initiatives and shareholder interests.'
        },
        {
            img: 'assets/investorimages/BOD ENHANCED PHOTOS/3.png',
            name: 'Mr. Karthik Veluchamy Kottur',
            location: 'Independent Director',
            din: 'DIN: 01973367',
            email: 'karthik@deccanindustries.com',
            bio1: 'Karthik contributes broad commercial and advisory expertise, helping ProGen evaluate opportunities in solar EPC, project finance, and capital markets.',
            bio2: 'As an independent director, he reinforces the board\'s focus on transparency, accountability, and disciplined value creation.'
        },
        {
            img: 'assets/investorimages/BOD ENHANCED PHOTOS/5.png',
            name: 'Mr. Hari Basker',
            location: 'Independent Director',
            din: 'DIN: 11281446',
            email: 'r.haribhaskaran@gmail.com',
            bio1: 'Hari brings extensive industry experience to ProGen\'s board, advising on project execution standards, operational risk, and strategic partnerships.',
            bio2: 'His independent counsel supports the company\'s commitment to sound governance and sustainable, high-quality solar deployment.'
        },
        {
            img: 'assets/investorimages/BOD ENHANCED PHOTOS/8.png',
            name: 'MR. Selvakumaran Chandrasekaran',
            location: 'Director',
            din: 'DIN: 08355365',
            email: 'selvas.themechanicalengineer@gmail.com',
            bio1: 'Selvakumaran Chandrasekaran is a construction and infrastructure professional with 12+ years of experience in project execution, quality management, and renewable energy projects.',
            bio2: 'With a strong engineering background and hands-on site expertise, he contributes operational and strategic value to infrastructure and sustainable energy initiatives.'
        }
    ];

    let currentSlide = 0;
    let isAnimating = false;
    const slider = document.querySelector('.team-slider');

    const updateSlide = (index) => {
        if (!slider || isAnimating) return;
        isAnimating = true;

        slider.classList.add('animating');

        setTimeout(() => {
            const data = teamData[index];
            slider.querySelector('.team-image img').src = data.img;
            slider.querySelector('.team-name').textContent = data.name;
            slider.querySelector('.team-location').textContent = data.location;
            slider.querySelector('.team-din').textContent = data.din;
            const emailEl = slider.querySelector('.team-email');
            if (emailEl) {
                if (data.email) {
                    emailEl.style.display = '';
                    emailEl.textContent = data.email;
                    emailEl.href = 'mailto:' + data.email;
                } else {
                    emailEl.style.display = 'none';
                }
            }
            const bios = slider.querySelectorAll('.team-bio p');
            bios[0].textContent = data.bio1;
            bios[1].textContent = data.bio2;

            slider.classList.remove('animating');
            isAnimating = false;
        }, 500);
    };

    const nextBtn = document.querySelector('.team-next');
    const prevBtn = document.querySelector('.team-prev');

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % teamData.length;
            updateSlide(currentSlide);
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + teamData.length) % teamData.length;
            updateSlide(currentSlide);
        });
    }

    // About video play toggle
    const aboutVideo = document.querySelector('.about-video');
    const aboutPlay = document.querySelector('.about-play');
    if (aboutVideo && aboutPlay) {
        aboutPlay.addEventListener('click', () => {
            if (aboutVideo.paused) {
                aboutVideo.muted = false;
                aboutVideo.play();
                aboutPlay.classList.add('playing');
            } else {
                aboutVideo.pause();
                aboutPlay.classList.remove('playing');
            }
        });
    }

    // About section - image slide up animation
    gsap.from('.about-bg img, .about-bg video', {
        y: 300,
        opacity: 0,
        scale: 1.1,
        duration: 1.8,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.about',
            start: 'top 85%',
            end: 'top 10%',
            scrub: 1,
        }
    });

    // Footer SVG hover effect
    const footerSvg = document.getElementById('footerSvg');
    const revealMask = document.getElementById('revealMask');
    if (footerSvg && revealMask) {
        footerSvg.addEventListener('mousemove', (e) => {
            const rect = footerSvg.getBoundingClientRect();
            const cx = ((e.clientX - rect.left) / rect.width) * 100;
            const cy = ((e.clientY - rect.top) / rect.height) * 100;
            revealMask.setAttribute('cx', cx + '%');
            revealMask.setAttribute('cy', cy + '%');
        });
    }

});

// Handle mobile dropdown toggle
document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.nav-dropdown');
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');
        if(link) {
            link.addEventListener('click', (e) => {
                if(window.innerWidth <= 768) {
                    dropdown.classList.toggle('active');
                }
            });
        }
    });
});
