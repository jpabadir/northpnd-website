import { items as expertiseItems, tagColors } from './expertise-items';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import './Expertise.css';
import { useEffect, useState } from 'react';

export default function Expertise() {
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedTech, setSelectedTech] = useState([]);
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const showFilterMenu = () => {
    setShowFilter(!showFilter);
  };

  const filterByTags = (checked, tag) => {
    if (checked) {
      setSelectedTags([...selectedTags, tag]);
    } else {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    }
  };

  const filterByTech = (checked, tech) => {
    if (checked) {
      setSelectedTech([...selectedTech, tech]);
    } else {
      setSelectedTech(selectedTech.filter((t) => t !== tech));
    }
  };

  const filteredItems = expertiseItems.filter((item) => {
    if (selectedTags.length === 0 && selectedTech.length === 0) {
      return true;
    }
    const tagFilter = selectedTags.every((tag) => item.tags && item.tags.includes(tag));
    const techFilter = selectedTech.every((tech) => item.tech && item.tech.includes(tech));
    return tagFilter && techFilter;
  });
  
  return (
    <div className="StandalonePageParent d-flex justify-content-center">
    <div className="Expertise">
      <div className="TagFilter">
        <div className="FilterButton" onClick={showFilterMenu}>
          Filter options {showFilter ? '▲' : '▼'}
        </div>
        <div className="OptionsContainer" style={{ display: showFilter ? 'flex' : 'none' }}>
           <div className='OptionGroup'> 
            <div className="FilterGroupTitle">Tags</div>
            <div className="FilterGroup">
              {Object.keys(tagColors).map((tag) => (
                <label key={tag}>
                  <input
                    type="checkbox"
                    value={tag}
                    checked={selectedTags.includes(tag)}
                    onChange={(e) => filterByTags(e.target.checked, e.target.value)}
                  />
                  <span className="checkmark" style={{ background: tagColors[tag] ?? 'grey' }}></span>
                  {tag}
                </label>
              ))}
            </div>
          </div>
          <div className='OptionGroup'>
            <div className="FilterGroupTitle">Tech</div>
            <div className="FilterGroup">
              {expertiseItems
                .reduce((techs, item) => {
                  if (item.tech) {
                    item.tech.forEach((tech) => {
                      if (!techs.includes(tech)) {
                        techs.push(tech);
                      }
                    });
                  }
                  return techs;
                }, [])
                .map((tech) => (
                  <label key={tech}>
                    <input
                      type="checkbox"
                      value={tech}
                      checked={selectedTech.includes(tech)}
                      onChange={(e) => filterByTech(e.target.checked, e.target.value)}
                    />
                    <span className="checkmark2"></span>
                    {tech}
                  </label>
                ))}
            </div>
          </div>
        </div>
      </div>
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="text-center" sx={{ color: 'inherit', fontSize: 'inherit', fontWeight: 'bold' }}>Client</TableCell>
                <TableCell className="text-center" sx={{ color: 'inherit', fontSize: 'inherit', fontWeight: 'bold' }}>Tech Stack</TableCell>
                <TableCell className="text-center" sx={{ color: 'inherit', fontSize: 'inherit', fontWeight: 'bold' }}>Description</TableCell>
                <TableCell className="text-center" sx={{ color: 'inherit', fontSize: 'inherit', fontWeight: 'bold' }}>Tags</TableCell>
                <TableCell className="text-center" sx={{ color: 'inherit', fontSize: 'inherit', fontWeight: 'bold' }}>Dates</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredItems.map((row) => (
                <TableRow key={row.description} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell sx={{ color: 'inherit', fontSize: 'inherit' }} label="Client" className="text-center justify-content-center ClientNameCell">
                    {row.client}
                    {/* <Link to={`/clients/${row['client-id']}`}>{row.client}</Link> */}
                  </TableCell>
                  <TableCell sx={{ color: 'inherit', fontSize: 'inherit' }} label="Tech Stack" className="text-center justify-content-center">
                    <div className='d-flex justify-content-center' style={{ flexWrap: 'wrap', maxWidth: '400px' }}>
                      {row.tech ? row.tech.map((tech) => (<span key={tech} className='pill darkpill'>{tech}</span>)) : '-'}
                    </div>
                  </TableCell>
                  <TableCell sx={{ color: 'inherit', fontSize: 'inherit' }} label="Description" dangerouslySetInnerHTML={{ __html: row.description }}>
                  </TableCell>
                  <TableCell sx={{ color: 'inherit', fontSize: 'inherit' }} label="Tags" className="text-center justify-content-center">
                    <div className='d-flex justify-content-center' style={{ flexWrap: 'wrap', maxWidth: '200px' }}>
                      {row.tags ? row.tags.map((tag) => (<span key={tag} className='pill' style={{ background: tagColors[tag]?? 'grey' }}>{tag}</span>)) : '-'}
                    </div>
                  </TableCell>
                  <TableCell sx={{ color: 'inherit', fontSize: 'inherit' }} label="Dates" className="text-center justify-content-center">
                    <div className='d-flex justify-content-center' style={{ flexWrap: 'wrap', maxWidth: '400px' }}>
                      {row.dates}
                    </div>
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