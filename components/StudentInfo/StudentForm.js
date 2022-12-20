import React, { useEffect, useState } from "react";
import { Box, Input, Flex, Heading, FormControl, FormLabel, Button, InputGroup, InputLeftElement, Select, Textarea, InputRightElement, RadioGroup, Radio, Stack, Checkbox } from "@chakra-ui/react"
import { PhoneIcon } from "@chakra-ui/icons";
import { useStudentStore } from "./StudentStore";
import { CSVDownload, CSVLink} from "react-csv";


const StudentForm = () => {
    const addStudent = useStudentStore((state) => state.addStudent)
    const students = useStudentStore((state => state.students))

    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    const [DATA, setData] = useState();
    const [regForm, setRegForm] = useState([]);
    const [subjects, setSubjects] = useState([])
    const [isChecked, setIsChecked] = useState(false)

    const onChangeHandleSub = (value, keyData, id) => {
        let subs = [...subjects]
        if (!value) {
            subs = subs.filter((subject, index, self) => subject !== keyData);
        } else {
            subs = [...subs, keyData]
        }
        setSubjects(subs)
    }

    const onChangeHandle = (value, keyData) => {
        let subjectList = subjects.toString();
        setData(d => ({
            ...d,
            Subjects: subjectList,
            id: Math.random(),
            [keyData]: value
        }));
    }

    
    console.log(students)

    const handelSubmit = (e) => {
        e.preventDefault();
        setRegForm([
            ...regForm,
            DATA
        ])
        addStudent(DATA);
    }

    const studentData = useStudentStore((state => state.studentData))

    useEffect(()=>{
        setData(studentData);
    }, [studentData])
    


    return <Box>
        <Flex width="full" align="center" justifyContent="center">
            <Box p={2}>
                <Box textAlign="center">
                    <Heading>Student Registration </Heading>
                </Box>
                <Box my={4} textAlign="left">
                    <form onSubmit={handelSubmit}>

                        <FormControl isRequired>
                            <FormLabel >Name:</FormLabel>
                            <Input value={DATA?.Name} onChange={(e) => onChangeHandle(e.target.value, 'Name')} flex={2} type='text' size='sm' placeholder='Student Name' />
                        </FormControl>
                        <FormControl isRequired >
                            <FormLabel >Father Name:</FormLabel>
                            <Input value={DATA?.Father} onChange={(e) => onChangeHandle(e.target.value, 'Father')} flex={2} type='text' size='sm' placeholder='Father Name' />
                        </FormControl>
                        <FormControl isRequired mt={2}>
                            <FormLabel >Address:</FormLabel>
                            <Textarea value={DATA?.Address} onChange={(e) => onChangeHandle(e.target.value, 'Address')} placeholder='Address....' />
                        </FormControl>
                        <FormControl mt={2} display={'flex'}>
                            <FormLabel>Gender:</FormLabel>
                            <RadioGroup value={DATA?.Gender} >
                                <Stack direction={'row'}>
                                    <Radio value='Male' onChange={
                                        (e) => onChangeHandle(e.target.value, 'Gender')
                                    }>Male</Radio>
                                    <Radio value='Female' onChange={
                                        (e) => onChangeHandle(e.target.value, 'Gender')
                                    }>Female</Radio>
                                    <Radio value='Other' onChange={
                                        (e) => onChangeHandle(e.target.value, 'Gender')
                                    }>Other</Radio>
                                </Stack>
                            </RadioGroup>
                        </FormControl>
                        <FormControl mt={2}>
                            <FormLabel>Subjects:</FormLabel>
                            <Stack spacing={4} direction='row'>
                                <Checkbox value={regForm.Physics} id={1} checked={isChecked}
                                    onChange={(e) => onChangeHandleSub(e.target.checked, 'Physics', 1)}>
                                    Physics
                                </Checkbox>
                                <Checkbox value={regForm.Chemistry} id={3} checked={isChecked}
                                    onChange={(e) => onChangeHandleSub(e.target.checked, 'Chemistry', 2)} >
                                    Chemistry
                                </Checkbox>
                                <Checkbox value={regForm.Math} id={4} checked={isChecked}
                                    onChange={(e) => onChangeHandleSub(e.target.checked, 'Math', 3)}>
                                    Math
                                </Checkbox>
                            </Stack>
                        </FormControl>
                        <FormControl mt={2} isRequired>
                            <FormLabel>Email</FormLabel>
                            <Input value={DATA?.Email} onChange={(e) => onChangeHandle(e.target.value, 'Email')} type="email" size='sm' placeholder="test@test.com" />
                        </FormControl>
                        <FormControl isRequired mt={4}>
                            <FormLabel >Phone Number</FormLabel>
                            <InputGroup >
                                <InputLeftElement
                                    // pointerEvents='none'
                                    // eslint-disable-next-line react/no-children-prop
                                    children={<PhoneIcon color='gray.300' />}
                                />
                                <Input value={DATA?.Phone} onChange={(e) => onChangeHandle(e.target.value, 'Phone')} type='tel' size='sm' minLength={"10"} maxLength="10" placeholder='Phone number' />
                            </InputGroup>
                        </FormControl>
                        <FormControl mt={2}>
                            <FormLabel>Country</FormLabel>
                            <Select value={regForm.Country} onChange={(e) => onChangeHandle(e.target.value, 'Country')} placeholder='Select country' size='sm'>
                                <option>United Arab Emirates</option>
                                <option>Nigeria</option>
                                <option>India</option>
                                <option>Pakisthan</option>
                            </Select>
                        </FormControl>
                        <FormControl mt={2}>
                            <FormLabel>Date:</FormLabel>
                            <Input
                                value={regForm.Date} onChange={(e) => onChangeHandle(e.target.value, 'Date')}
                                placeholder="Select Date and Time"
                                size="md"
                                type="date"
                            />
                        </FormControl>
                        <FormControl mt={2} isRequired>
                            <FormLabel>Password</FormLabel>
                            <InputGroup size='md'>
                                <Input
                                    value={regForm.Password}
                                    onChange={(e) => onChangeHandle(e.target.value, 'Password')}
                                    pr='4.5rem'
                                    type={show ? 'text' : 'password'}
                                    placeholder='Enter password'
                                />
                                <InputRightElement width='70px'>
                                    <Button h='32px' size='sm' onClick={handleClick}>
                                        {show ? 'Hide' : 'Show'}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <Button mt={2} type="submit">
                            submit
                        </Button>
                    </form>
                </Box>
            </Box>
        </Flex>
        <CSVLink data={students}>Download CSV File</CSVLink>
        {/* <CSVDownload data={students} target="_blank" /> */}
    </Box>
}
export default StudentForm;



// onChange={(e)=> !isChecked ? onChangeHandle('Physics','Subjects'): onChangeHandle('','Subjects')}