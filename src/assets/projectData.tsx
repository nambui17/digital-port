interface ProjectInfo {
    projectTitle: string,
    projectText: string,
    link?: string,
    image: string,
    projectSummary: string
}
const allProjects: ProjectInfo[] = [
    {
        projectTitle: 'Chemical Kinetics Prediction',
        projectText: 'The chemical reaction kinetics of the formation of were researched and a program was written to numerically integrate the rate laws for the reaction to predict chemical composition after time. PyQt5 was used to make a user-friendly interface',
        image: 'N/A',
        projectSummary: 'Reaction kinetics of Peracetic Acid prediction and visualization using PyQt5 and numerical integration. Aided manufacturing to save time and money by preventing the discard of many batches.'
    },
    {
        projectTitle: 'Pressure Sensor Interface',
        projectText: 'An Arduino Uno board that was unable to be retrofitted with an SD card to make use of the SD output data gathered data instead using Raspberry Pi and Python libraries to output data every minute to csv files to obtain a pressure over time plot/chart.',
        image: '',
        projectSummary: 'Arduino Uno Tekscan pressure sensore interfacing with Serial recording and Raspberry Pi to record data. Consistently monitored data and output data with timestamps as long as the Raspberry Pi was connected to power.'
    },
    {
        projectTitle: 'FTIR Real-time plot',
        projectText: 'An existing FTIR program outputs a csv file containing absorbance readings at many wavelengths. Only two wavelengths were desired. This Python program makes use of Python and matplotlib to output a real-time chart of those two wavelengths and how they correspond to concentration of the concerned analyte',
        image: '',
        projectSummary: 'A Python program using matplotlib for a real-time plot of the absorbance of one wavelength with a reference wavelength as it relates to the concentration of the measured analyte.'
    },
    {
        projectTitle: 'Kinetics Optimal PAA',
        projectText: 'Using the kinetics data obtained from the Chemical Kinetics Prediction project, a program was written using MATLAB for prediction of many different concentrations of starting materials given a final desired concentration and outputs a scatter plot for starting concentrations to aim for given catalyst type and temperature. Also outputs a surface plot for visualization of all nearby concentrations for more granularity.',
        image: '',
        projectSummary: `Want a specific concentration of PAA in your final solution but don't know where to start? Use this program to find your starting materials and conditions.`
    },
]

export default allProjects