import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import React, { FC } from 'react'
import { RowI } from './types'

type RowProps = {
  row: RowI
  action: () => void
  actionImg: string
}

const Row: FC<RowProps> = ({ row, action, actionImg }): JSX.Element => (
  <TableRow>
    <TableCell component="th" scope="row">
      {row.id}
    </TableCell>
    <TableCell align="right">{row.title}</TableCell>
    <TableCell align="right">
      <img src={actionImg} alt="Action" onClick={() => action()} style={{ width: 24, height: 24 }} />
    </TableCell>
  </TableRow>
)

export default Row
