import { Box, Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react";

const About =()=>{
return(
    <Box p={5} color={'black'}>
        <Box mt={6}>
            <Heading>Background</Heading>
            <Text mt={2}>
            Hello! I'm a passionate and skilled frontend developer with a robust background in creating responsive and user-friendly interfaces. My journey into the world of web development has been fueled by my love for technology and creativity. With a solid foundation in React.js, HTML, CSS, and JavaScript, I thrive on turning complex problems into elegant, user-centric solutions.
            </Text>
        </Box>
        <Box mt={6}>
            <Heading>Professional Experience</Heading>
            <Text mt={2}>I have had the pleasure of working on numerous projects where I've built and maintained web applications using React.js. My role typically involves collaborating closely with product and design teams to ensure that the user experience is not only functional but also visually appealing. Writing clean, well-documented code is a standard I hold myself to, ensuring that my work is both maintainable and scalable.</Text>
        </Box>
        <Box mt={6}>
            <Heading>Key Responsibilities</Heading>
            <UnorderedList mt={2}>
                <ListItem>Building and Maintaining Web Applications: Utilizing React.js to develop dynamic and responsive web applications.</ListItem>
                <ListItem>Working alongside product and design teams to translate user needs and design specifications into functional applications.</ListItem>
                <ListItem>Clean Code Practices: Ensuring all code is clean, well-documented, and follows best practices for maintainability.</ListItem>
                <ListItem>Performance and User Experience: Continuously working to improve the performance and user experience of web applications.</ListItem>
                <ListItem>Accessibility: Ensuring that all web applications are accessible to as many users as possible, including those with disabilities.</ListItem>
            </UnorderedList>
        </Box>
    </Box>
)
}

export default About;