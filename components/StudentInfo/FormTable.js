import { Box, Button, Table, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';
import React, {useReducer, useState } from 'react';  


import {
    ColumnDef,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useStudentStore } from './StudentStore';

// type Person = {
//   firstName: string
//   lastName: string
//   age: number
//   visits: number
//   status: string
//   progress: number
// }

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor('Name', {
    cell: info => info.getValue(),
    // footer: info => info.column.id,
  }),
  columnHelper.accessor(row => row.Father, {
    id: 'Father',
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>Father</span>,
    // footer: info => info.column.id,
  }),
  columnHelper.accessor('Address', {
    header: () => 'Address',
    cell: info => info.renderValue(),
    // footer: info => info.column.id,
  }),
  columnHelper.accessor('Gender', {
    header: () => <span>Gender</span>,
    // footer: info => info.column.id,
  }),
  columnHelper.accessor('Email', {
    header: 'Email',
    // footer: info => info.column.id,
  }),
  columnHelper.accessor('Phone', {
    header: 'Phone',
    // footer: info => info.column.id,
  }),
]

const FormTable = () => {
    const students = useStudentStore((state => state.students))
  const [data, setData] = useState(() => [...students])
  console.log(students)
  console.log(data)
  const rerender = useReducer(() => ({}), {})[1]

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <Box className="p-2">
      <Table>
        <Thead>
          {table.getHeaderGroups().map(headerGroup => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <Th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody>
          {table.getRowModel().rows.map(row => (
            <Tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <Td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
        {/* <Tfoot>
          {table.getFooterGroups().map(footerGroup => (
            <Tr key={footerGroup.id}>
              {footerGroup.headers.map(header => (
                <Th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </Th>
              ))}
            </Tr>
          ))}
        </Tfoot> */}
      </Table>
      <Box className="h-4" />
      <Button onClick={() => rerender()} className="border p-2">
        Rerender
      </Button>
    </Box>
  )
}

export default FormTable;






// import { Box } from "@chakra-ui/react";
// import ReactTable from "react-table";  
// import useStudentStore from "../../store/StudentStore";


// const FormTable = () => {
//     const registrationData = [
//         {Name: 'Name'},
//         {Father: 'Father'}
//     ]

//     const columns = [{
//         Header: 'Name',
//         accessor: 'Name'
//     }, {
//         Header: 'Father',
//         accessor: 'Father'
//     },
//     // {
//     //     Header: 'Phone',
//     //     accessor: 'Phone'
//     // }, {
//     //     Header: 'Email',
//     //     accessor: 'Email'
//     // }, {
//     //     Header: 'Country',
//     //     accessor: 'Country'
//     // }, {
//     //     Header: 'Address',
//     //     accessor: 'Address'
//     // }, {
//     //     Header: 'Date',
//     //     accessor: 'Date'
//     // }, {
//     //     Header: 'Gender',
//     //     accessor: 'Gender'
//     // }, {
//     //     Header: 'Password',
//     //     accessor: 'Password'
//     // }, {
//     //     Header: 'Physics',
//     //     accessor: 'Physics'
//     // }, {
//     //     Header: 'Chemistry',
//     //     accessor: 'Chemistry'
//     // }, {
//     //     Header: 'Math',
//     //     accessor: 'Math'
//     // }
//     ]
    
//     return <Box>
//             <ReactTable
//                   data={registrationData}  
//                   columns={columns}  
//                   defaultPageSize = {2}  
//                   pageSizeOptions = {[2,4, 6]}  
//               />  
//     </Box>;
// }

// export default FormTable;


// const columns = [
//     columnHelper.accessor('firstName', {
//       cell: info => info.getValue(),
//       footer: info => info.column.id,
//     }),
//     columnHelper.accessor(row => row.lastName, {
//       id: 'lastName',
//       cell: info => <i>{info.getValue()}</i>,
//       header: () => <span>Last Name</span>,
//       footer: info => info.column.id,
//     }),
//     columnHelper.accessor('age', {
//       header: () => 'Age',
//       cell: info => info.renderValue(),
//       footer: info => info.column.id,
//     }),
//     columnHelper.accessor('visits', {
//       header: () => <span>Visits</span>,
//       footer: info => info.column.id,
//     }),
//     columnHelper.accessor('status', {
//       header: 'Status',
//       footer: info => info.column.id,
//     }),
//     columnHelper.accessor('progress', {
//       header: 'Profile Progress',
//       footer: info => info.column.id,
//     }),
//   ]
  