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
      accountNumber: "05042770162",
      cle: "47",
      target: "l'Euro"
    },
    {
      bankCode: "00010",
      agentCode: "00036",
      accountNumber: "05042770161",
      cle: "50",
      target: "Dollar"
    },
  ]
  
  export default function TablePage() {
    return (
        <>
      {invoices.map((invoice) => 
        <>
        <p>reference banquaire pour {invoice.target}: </p>
        <Table className="text-white my-4">
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
            
              <TableRow key={invoice.bankCode}>
                <TableCell className="font-medium">{invoice.agentCode}</TableCell>
                <TableCell>{invoice.bankCode}</TableCell>
                <TableCell>{invoice.accountNumber}</TableCell>
                <TableCell className="text-right">{invoice.cle}</TableCell>
              </TableRow>
          </TableBody>
        </Table>
        </>
    ) 
      }
       <p className="text-xs">
        Adresse SWIFT BMCI: MBICMRMRXXX
        </p>
        <p className="text-xs">
          Adresse SWIFT (en €) : NTXFRPPXXX
        </p>

      </>
    )
  }
  