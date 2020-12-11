import React, { useState } from 'react'
import { FaAddressCard, FaCreditCard, FaRegCreditCard } from 'react-icons/fa'
import { Col, Row, Tooltip } from 'reactstrap'

const items = [
    {
        icon: <FaAddressCard className='w-100' size={30} />
    },
    {
        icon: <FaCreditCard className='w-100' size={30} />
    },
    {
        icon: <FaRegCreditCard className='w-100' size={30} />
    },
]

const Sidebar = () => {
    const [tooltipOpen, setTooltipOpen] = useState({
        show: false,
        index: null
    });


    const toggle = (index = null) => {
        const { show } = tooltipOpen
        setTooltipOpen({ show: !show, index: index });
    }
    return (
        <div className='sticky-top h-100 pt-3'>
            {items.map((a, i) => (
                <>
                    <div id={'Tooltip-' + i} key={i} className='w-100 my-5'>
                        {a.icon}
                    </div>
                    <Tooltip container={'body'} innerClassName={'bg-white d-flex flex-column shadow-lg'} autohide={false} placement='right' isOpen={tooltipOpen.show && tooltipOpen.index === i} target={'Tooltip-' + i} toggle={() => toggle(i)}>
                        <Row noGutters className='row-cols-1 align-items-center h-100'>
                            <Col className='border-bottom text-secondary py-3'>
                                Products
                                </Col>
                            <Col className='border-bottom text-dark py-3'>
                                Linesheets
                                </Col>
                            <Col className='text-secondary py-3'>
                                Categories
                                </Col>
                        </Row>
                    </Tooltip>
                </>
            ))}
        </div>
    )
}

export default Sidebar
