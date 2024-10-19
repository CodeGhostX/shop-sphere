// @ts-nocheck

import { FUNDING, PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { defaultMaxListeners } from "events";

const PayPalButton = ({amount, onSuccess}) => {
  
  return (
    <PayPalScriptProvider options={{
      clientId:process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!,
      currency:"USD",
    }}>
      <PayPalButtons fundingSource={FUNDING.PAYPAL} createOrder={(data, action)=>{
        return action.order.create({
          purchase_units:[
            {
              amount:{
                value: amount
              }
            }
          ]
        })
      }}
      onApprove = {(data, actions)=>{
        return actions.order.capture().then(details=>{
          onSuccess(details)
        })
      }}
      />
    </PayPalScriptProvider>
  )
}

export default PayPalButton