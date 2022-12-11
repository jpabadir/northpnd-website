import expertiseItems from './expertise-items.json';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import './Expertise.css';
import { useEffect } from 'react';

export default function Expertise() {
  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div className='ExpertiseParent d-flex justify-content-center'>
      <div className='Expertise'>
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: 'inherit', fontSize: 'inherit', fontWeight: 'bold' }}>Author</TableCell>
                <TableCell sx={{ color: 'inherit', fontSize: 'inherit', fontWeight: 'bold' }}>Title</TableCell>
                <TableCell sx={{ color: 'inherit', fontSize: 'inherit', fontWeight: 'bold' }}>Date Started</TableCell>
                <TableCell sx={{ color: 'inherit', fontSize: 'inherit', fontWeight: 'bold' }}>Date Finished</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {expertiseItems.map((row) => (
                <TableRow key={row.title} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell sx={{ color: 'inherit', fontSize: 'inherit' }} label="Title">
                    {row.title}
                  </TableCell>
                  <TableCell sx={{ color: 'inherit', fontSize: 'inherit' }} label="Author">
                    {row.author}
                  </TableCell>
                  <TableCell sx={{ color: 'inherit', fontSize: 'inherit' }} label="Date Started">
                    {row.dateStarted}
                  </TableCell>
                  <TableCell sx={{ color: 'inherit', fontSize: 'inherit' }} label="Date Finished">
                    {row.dateFinished}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
