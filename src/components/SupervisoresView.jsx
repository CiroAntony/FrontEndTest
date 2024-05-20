import React, { useState, useEffect } from 'react';
import SupervisoresDropdown from './SupervisoresDropdown';
import SupervisoresData from '../data/Supervisores';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import AsesorChart from './AsesorChart';

const SupervisoresView = () => {
  const [supervisores, setSupervisores] = useState([]);
  const [selectedSupervisor, setSelectedSupervisor] = useState(null);

  useEffect(() => {
    setSupervisores(SupervisoresData);
    if (SupervisoresData.length > 0) {
      setSelectedSupervisor(SupervisoresData[0]);
    }
  }, []);

  const handleSelectSupervisor = (id) => {
    const SelectSupervisor = supervisores.find(supervisor => supervisor.id === parseInt(id));
    setSelectedSupervisor(SelectSupervisor);
  };

  const getChartData = (asesor) => {
    return [
      { name: 'Asignados', value: asesor.clientesAsignados },
      { name: 'Trabajados', value: asesor.clientesTrabajados },
      { name: 'Desembolsos', value: asesor.desembolsos },
    ];
  };

  return (
    <section>
      <h1 style={{"textAlign":"center"}}>Sistema de Seguimiento de Préstamos por Convenio</h1>
      {selectedSupervisor && (
        
        <TableContainer component={Paper}>
          <div>
          <div className='dropdown-container'>
            <h2>{selectedSupervisor.nombre}</h2>
              <SupervisoresDropdown supervisores={supervisores} onSelect={handleSelectSupervisor} selectedSupervisorId={selectedSupervisor ? selectedSupervisor.id : ''} />
            </div>

            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Nombre</TableCell>
                  <TableCell align="center">Clientes Asignados</TableCell>
                  <TableCell align="center">Clientes Trabajados</TableCell>
                  <TableCell align="center">Desembolsos</TableCell>
                  <TableCell align="center">Gráfico</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {selectedSupervisor.asesores.map(asesor => (
                  <TableRow key={asesor.id}>
                    <TableCell align="center">{asesor.nombre}</TableCell>
                    <TableCell align="center">{asesor.clientesAsignados}</TableCell>
                    <TableCell align="center">{asesor.clientesTrabajados}</TableCell>
                    <TableCell align="center">{asesor.desembolsos}</TableCell>
                    <TableCell align="center" className='chart-container'>
                      <AsesorChart data={getChartData(asesor)} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TableContainer>
      )}
    </section>
  );
};

export default SupervisoresView;
