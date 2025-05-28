import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {  CheckCircle } from "lucide-react"; //AlertCircle, AlertTriangle,

export default function Success() {
  return (     
    <div>
      <Alert className="border-green-500/50 text-green-700 dark:border-green-500 dark:text-green-400 [&>svg]:text-green-500 border-l-4 pl-4 shadow-sm">
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Success Alert</AlertTitle>
        <AlertDescription>
          This alert has an accent border on the left side.
        </AlertDescription>
      </Alert>
    </div> 
  )
}

