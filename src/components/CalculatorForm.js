import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const CalculatorForm = () => {
  const [initialAmount, setInitialAmount] = useState(0);
  const [months, setMonths] = useState(0);
  const [withdrawalMonths, setWithdrawalMonths] = useState(0);
  const [refundAmount, setRefundAmount] = useState(0);

  const handleCalculate = (e) => {
    e.preventDefault();
    const monthlyAmount = initialAmount / months;
    const refund = monthlyAmount * withdrawalMonths;
    const refundAmount = initialAmount - refund;
    setRefundAmount(refundAmount.toFixed(2)); // Limitamos a 2 decimales
  };

  return (
    <Box sx={{ maxWidth: 400, margin: "0 auto" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Calculadora de Devolución
      </Typography>
      <Box component="form" onSubmit={handleCalculate}>
        <TextField
          type="number"
          label="Monto inicial"
          value={initialAmount}
          onChange={(e) => setInitialAmount(parseFloat(e.target.value))}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          type="number"
          label="Duración del servicio en meses"
          value={months}
          onChange={(e) => setMonths(parseInt(e.target.value))}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          type="number"
          label="Meses Utilizados"
          value={withdrawalMonths}
          onChange={(e) => setWithdrawalMonths(parseInt(e.target.value))}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Calcular
        </Button>
      </Box>
      {refundAmount > 0 && (
        <Box mt={3}>
          <Typography variant="h6" align="center">
            Monto a devolver: {refundAmount}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default CalculatorForm;
