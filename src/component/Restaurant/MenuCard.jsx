import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'

const options = [
    {
        category: 'Nuts & seeds',
        options: ['Cashews']
    },
    {
        category: 'Protein',
        options: ['Ground beef', 'Bacon strips']
    },
]

export const MenuCard = () => {
    const handleCheckboxChange = (value) => {
        console.log(value)
    }
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <div className='lg:flex items-center justify-between'>
                    <div className='lg:flex items-center lg:gap-5'>
                        <img className='w-[7rem] h-[7rem] object-cover'
                            src="https://phuclong.com.vn/uploads/dish/cef6d3083f2459-tralaimangcau.png"
                        />
                        <div className='space-y-1 lg:space-y-5 lg:maw-w-2xl'>
                            <p className='font-semibold text-xl'>Trà đào</p>
                            <p>499.000 VND</p>
                            <p className='text-gray-400'>Nice food</p>
                        </div>
                    </div>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <form>
                    <div className='flex gap-5 flex-wrap'>
                        {
                            options.map((item, index) => (
                                <div key={index}>
                                    <p>{item.category}</p>
                                    <FormGroup >
                                        {
                                            item.options.map((e, i) => (
                                                <FormControlLabel key={i} control={<Checkbox onChange={() => handleCheckboxChange(e)} />} label={e} />
                                            ))
                                        }
                                    </FormGroup>
                                </div>
                            ))
                        }
                    </div>
                    <div className='pt-5'>
                        <Button variant='contained' disabled={false} type="submit"
                        >
                            {true ? "Thêm vào giỏ hàng" : "Sản phẩm tạm thời hết hàng"}
                        </Button>
                    </div>
                </form>
            </AccordionDetails>
        </Accordion>
    )
}
