import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({  
    color: 'black',
    borderRadius: '18px',
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    background: `linear-gradient(to right, #87CEEB, #D8BFD8)`, // Adjusted color values
    borderRadius: '8px', 
    borderBottom: '1px solid #fff',
    color: 'white',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));


const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderRadius: '10px',
}));

const FAQ = () => {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    return (
        <div className="lg:mt-20 p-8 lg:p-16">
            <div className="lg:mt-24 lg:my-20 my-8">
                <h1 className="text-black text-start text-[22px] lg:text-6xl font-extrabold">
                    <span className="bg-gradient-to-r text-center from-blue-500 to-purple-500 text-transparent bg-clip-text">Frequently Asked Questions
                    </span>
                </h1>
            </div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>How does the inventory management system work?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    The inventory management system works by keeping track of all products and goods in stock within an organization. It monitors inventory levels, tracks item movements, and provides real-time updates on stock availability. Users can perform various tasks such as adding new products, updating quantities, and generating reports to optimize stock control and streamline operations.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>Question: Can the inventory management system handle multiple warehouse locations?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    Yes, our inventory management system is designed to support multiple warehouse locations. Users can assign products to specific warehouses, track stock levels individually for each location, and manage transfers between warehouses. This feature ensures accurate stock monitoring across different facilities, enabling businesses to efficiently manage inventory distributed across various geographical locations.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography> Question: How does the system help prevent overstock or stockouts?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    The system employs intelligent forecasting algorithms and historical data analysis to predict demand and recommend optimal reorder points. Notifications and alerts are configured to notify users when inventory levels approach predefined thresholds. This proactive approach helps prevent both overstock and stockouts, allowing businesses to maintain a balanced inventory, minimize holding costs, and meet customer demand consistently.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default FAQ;