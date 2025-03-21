import {
    Table,
    TableBody,
    TableCell,

    TableRow,
  } from "@/components/ui/table"
  
  const invoices = [
    {
      bankCode: "00010",
      agentCode: "00036",
      accountNumber: "0504277016",
      cle: "50",
    },
  ]
  
  export default function TablePage() {
    return (
        <>
      <Table className="text-white">
        {/* <TableCaption>les coordonnes banquaire</TableCaption> */}
        {/* <TableHeader> */}
          <TableRow>
            <TableCell className="w-[100px] text-white">Code Banque</TableCell>
            <TableCell>Code Agence</TableCell>
            <TableCell>N Compte</TableCell>
            <TableCell className="text-right">Cle RIB</TableCell>
          </TableRow>
        {/* </TableHeader> */}
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.bankCode}>
              <TableCell className="font-medium">{invoice.agentCode}</TableCell>
              <TableCell>{invoice.bankCode}</TableCell>
              <TableCell>{invoice.accountNumber}</TableCell>
              <TableCell className="text-right">{invoice.cle}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <p className="text-xs">
      Adresse SWIFT BMCI: MBICMRMRXXX
      </p>
      <p className="text-xs">
        Adresse SWIFT (en €) : NTXFRPPXXX
      </p>
     

      </>
    )
  }
  