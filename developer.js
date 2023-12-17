// our-domain.com/aboutus/developer

import { useRouter } from "next/router";

function DeveloperPage() {
    const router = useRouter()

    let details = [

        { id : 1, name: 'Yash', role: 'Senior Developer'},
        
        { id : 2, name: 'Vaibhav', role: 'Backend Developer'},
        
        { id : 3, name: 'Suresh', role: 'Frontend Developer'},
        
    ]

    let index = Number(router.query.aboutus) - 1;

    return <label>{details[index].name} {details[index].role}</label>
}

export default DeveloperPage;
