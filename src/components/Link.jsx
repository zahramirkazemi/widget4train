import React from 'react';

const Link = ({ className, href, children}) => {
    const onClick = (ev) =>{
        if(ev.metaKey || ev.ctrlKey){
            return;
        }

        ev.preventDefault();
        window.history.pushState({},'',href)

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent)
    }

    return ( 
        <a onClick={onClick} href={href} className={className}>{children}</a>
     );
}
 
export default Link;