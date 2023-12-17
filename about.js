// our-domain.com/aboutus

import { Fragment } from "react";

function AboutPage() {
    return (
        <Fragment>
            <ul>
                <li><Link href='aboutus/1'>Yash</Link></li>
                <li><Link href='aboutus/2'>Vaibhav</Link></li>
                <li><Link href='aboutus/2'>Suresh</Link></li>
            </ul>
        </Fragment>
    )
}

export default AboutPage;
