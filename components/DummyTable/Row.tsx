import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import React, { FC } from 'react'
import { RowI } from './types'

type RowProps = {
  row: RowI
}

const Row: FC<RowProps> = ({ row }): JSX.Element => (
  <TableRow>
    <TableCell component="th" scope="row">
      {row.id}
    </TableCell>
    <TableCell align="right">{row.title}</TableCell>
  </TableRow>
)

export default Row
