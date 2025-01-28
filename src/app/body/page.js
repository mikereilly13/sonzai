'use client'

import HealtCard from './healthCard';
import PageHeader from '../_components/page-header';
import HealthDataTable from './healthTable';
import { PiBowlFoodThin } from "react-icons/pi";


function HealthPage() {

    const title = "Body";
    const links = [
        {
            title: 'Food',
            url: '/body/food',
            icon: <PiBowlFoodThin />,
        }
    ]

    return ( 
        <>
        <PageHeader title={title} links={links}/>
        <HealthDataTable />
        </>
     );
}

export default HealthPage;