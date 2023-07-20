interface ProjectInfo {
    projectTitle: string,
    projectText: string,
    link?: string,
    image: string,
    projectSummary: string,
    gitHubLink?: string,
    projectDate: string
}
const allProjects: ProjectInfo[] = [
    {
        projectTitle: 'Chemical Kinetics Prediction',
        projectText: 'The chemical reaction kinetics of the formation of were researched and a program was written to numerically integrate the rate laws for the reaction to predict chemical composition after time. PyQt5 was used to make a user-friendly interface. This project was a transfer of a previous MATLAB program to Python.',
        image: '/assets/Beaker.jpg',
        projectSummary: 'Reaction kinetics of Peracetic Acid prediction and visualization using PyQt5 and numerical integration. Aided manufacturing to save time and money by preventing the discarding of many batches.',
        projectDate: '2022'
    },
    {
        projectTitle: 'Pressure Sensor Data Logger',
        projectText: 'An Arduino Uno board that was unable to be retrofitted with an SD card to make use of the SD output data gathered data instead using Raspberry Pi and Python libraries to output data every minute to csv files to obtain a pressure over time plot/chart.',
        image: '/assets/Arduino.jpg',
        projectSummary: 'Arduino Uno Tekscan pressure sensore interfacing with Serial recording and Raspberry Pi to record data. Consistently monitored data and output data with timestamps as long as the Raspberry Pi was connected to power.',
        projectDate: '2023'
    },
    {
        projectTitle: 'FTIR Real-time plot',
        projectText: 'An existing FTIR program outputs a csv file containing absorbance readings at many wavelengths. Only two wavelengths were desired. This Python program makes use of Python and matplotlib to output a real-time chart of those two wavelengths and how they correspond to concentration of the concerned analyte.',
        image: '/assets/Spectra.jpg',
        projectSummary: 'A Python program using matplotlib for a real-time plot of the absorbance of one wavelength with a reference wavelength as it relates to the concentration of the measured analyte.',
        projectDate: '2022'
    },
    {
        projectTitle: 'Kinetics Optimal PAA',
        projectText: 'Using the kinetics data obtained from the Chemical Kinetics Prediction project, a program was written using MATLAB for prediction of many different concentrations of starting materials given a final desired concentration and outputs a scatter plot for starting concentrations to aim for given catalyst type and temperature. Also outputs a surface plot for visualization of all nearby concentrations for more granularity. The program is written in both a command-line MATLAB program and Python PyQt6 with matplotlib for plots and numba jit for faster calculations.',
        image: '/assets/Formulation.jpg',
        projectSummary: `Want a specific concentration of PAA in your final solution but don't know where to start? Use this program to find your starting materials and conditions.`,
        projectDate: '2019'
    },
    {
        projectTitle: 'New Age Records',
        projectText: 'This website was made to be a desirable new way to discover all of the records you would ever desire to buy. New Age Records assists memoir collectors locate records simple and in a secure way. Over a mixture of owning your own individual login and an only selling records. New Age Records can provide you with the assistance you need, escalate your crate in a protected and effective way.',
        image: '/assets/NewAgeRecords.png',
        link: 'https://fast-caverns-21349.herokuapp.com',
        projectSummary: 'A full-stack application e-commerce website using express for the back-end and React for the front-end. Uses Chakra-UI css framework and react-spring for animations as well as stripe for transactions. The back-end utilizes graphql and MongoDB for the database.',
        gitHubLink: 'https://github.com/nambui17/super-sellers/tree/main',
        projectDate: '2023'
    }
]

export default allProjects