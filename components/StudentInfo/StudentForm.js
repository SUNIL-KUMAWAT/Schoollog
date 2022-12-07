import React, { useState } from "react";
import { Box, Input, Flex, Heading, FormControl, FormLabel, Button, InputGroup, InputLeftElement, Select, Textarea, InputRightElement, RadioGroup, Radio, Stack, Checkbox } from "@chakra-ui/react"
import { PhoneIcon } from "@chakra-ui/icons";
import { useStudentStore } from "./StudentStore";

const StudentForm = () => {
    const [show, setShow] = useState(false);
    const [value, setValue] = useState('');
    const handleClick = () => setShow(!show);
    const [isChecked, setIsChecked] = useState(false);
    const [data, setData] = useState();
    const [regForm, setRegForm] = useState([]);
    
    const onChangeHandle = (value,keyData) => {
        setIsChecked(!isChecked);
        setData(d => ({
            ...d,
            id: Math.random(),
            [keyData]: value
        }));
        setIsChecked(isChecked);
    }

    const addStudent = useStudentStore((state) => state.addStudent)
    const students = useStudentStore((state => state.students))
    const handelSubmit = (e) => {
        e.preventDefault()
        setRegForm([
            ...regForm,
            data
        ])    
        addStudent(regForm);        
    }
   
    
     
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
                                <Input value={regForm.Name} onChange={(e)=>onChangeHandle(e.target.value,'Name')} flex={2} type='text' size='sm' placeholder='Student Name' />
                            </FormControl>
                            <FormControl isRequired >
                                <FormLabel >Father Name:</FormLabel>
                                <Input  value={regForm.Father} onChange={(e)=>onChangeHandle(e.target.value,'Father')} flex={2} type='text' size='sm' placeholder='Father Name' />
                            </FormControl>
                        
                        <FormControl isRequired mt={2}>
                            <FormLabel >Address:</FormLabel>
                            <Textarea  value={regForm.Address} onChange={(e)=>onChangeHandle(e.target.value,'Address')} placeholder='Address....' />
                        </FormControl>
                        <FormControl mt={2} display={'flex'}>
                            <FormLabel>Gender:</FormLabel>
                            <RadioGroup value={regForm.Gender} >
                                <Stack direction={'row'}>
                                    <Radio value='Male'  onChange={
                                (e) => onChangeHandle( e.target.value,'Gender')
                            }>Male</Radio>
                                    <Radio value='Female'  onChange={
                                (e) => onChangeHandle(e.target.value,'Gender')
                            }>Female</Radio>
                                    <Radio value='Other'  onChange={
                                (e) => onChangeHandle(e.target.value,'Gender')
                            }>Other</Radio>
                                </Stack>
                            </RadioGroup>
                        </FormControl>
                        <FormControl mt={2}>
                            <FormLabel>Subjects:</FormLabel>
                            <Stack spacing={4} direction='row'>
                                <Checkbox value={regForm.Physics} checked={isChecked} onChange={(e)=> !isChecked ? onChangeHandle('Physics','Physics'): onChangeHandle('','Physics')}>
                                    Physics
                                </Checkbox>
                                <Checkbox value={regForm.Chemistry} checked={isChecked} onChange={(e)=> !isChecked ? onChangeHandle('Chemistry','Chemistry'): onChangeHandle('','Chemistry')}>
                                    Chemistry
                                </Checkbox>
                                <Checkbox value={regForm.Math} checked={isChecked} onChange={(e)=> !isChecked ? onChangeHandle('Math','Math'): onChangeHandle('','Math')}>
                                    Math
                                </Checkbox>
                            </Stack>
                        </FormControl>
                        <FormControl mt={2} isRequired>
                            <FormLabel>Email</FormLabel>
                            <Input  value={regForm.Email} onChange={(e)=>onChangeHandle(e.target.value,'Email')} type="email" size='sm' placeholder="test@test.com" />
                        </FormControl>
                        <FormControl isRequired mt={4}>
                            <FormLabel >Phone Number</FormLabel>
                            <InputGroup >
                                <InputLeftElement
                                    // pointerEvents='none'
                                    // eslint-disable-next-line react/no-children-prop
                                    children={<PhoneIcon color='gray.300' />}
                                />
                                <Input  value={regForm.Phone} onChange={(e)=>onChangeHandle(e.target.value, 'Phone')} type='tel' size='sm' maxLength="10" placeholder='Phone number' />
                            </InputGroup>
                        </FormControl>
                        <FormControl mt={2}>
                            <FormLabel>Country</FormLabel>
                            <Select  value={regForm.Country} onChange={(e)=>onChangeHandle(e.target.value,'Country')} placeholder='Select country' size='sm'>
                                <option>United Arab Emirates</option>
                                <option>Nigeria</option>
                                <option>India</option>
                                <option>Pakisthan</option>
                            </Select>
                        </FormControl>
                        <FormControl mt={2}>
                            <FormLabel>Date:</FormLabel>
                            <Input
                                value={regForm.Date} onChange={(e)=>onChangeHandle(e.target.value,'Date')}
                                placeholder="Select Date and Time"
                                size="md"
                                type="datetime-local"
                            />
                        </FormControl>
                        <FormControl mt={2} isRequired>
                            <FormLabel>Password</FormLabel>
                            <InputGroup size='md'>
                                <Input
                                  value={regForm.Password}
                                   onChange={(e)=>onChangeHandle(e.target.value,'Password')}
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
                        <Button  mt={2} type="submit">
                            submit
                        </Button>
                    </form>
                </Box>
            </Box>
        </Flex>
    </Box>
}
export default StudentForm;