import React from "react";

export function FadeInSection(props) {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();
    React.useEffect(() => {
        const domRefCurrent = domRef.current
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting))
        });
        observer.observe(domRefCurrent);
        return () => observer.unobserve(domRefCurrent);
    }, []);

    return (
        <div
            className={`fade-in-section ${isVisible ? "" : props.direction} ${isVisible ? 'is-visible' : ''} flex-column`}
            style={{transitionDelay : `${props.delay}ms`}}
            ref={domRef}
        >
            {props.children}
        </div>
    );
}

FadeInSection.defaultProps = {
    direction: "",
    delay: "0"
}
