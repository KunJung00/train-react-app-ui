import LockRoundedIcon from "@mui/icons-material/LockRounded";
import { Box, Button, Container, Stack, TextField } from "@mui/material";

export default function LoginCp() {
  return (
    <Box
      sx={{
        p: 0,
        m: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        bgcolor: "rgba(0, 0, 0, 0.2)",
      }}
    >
      <Box
        sx={{
          width: "40vw",
          height: "55vh",
          borderRadius: 5,
          bgcolor: "white",
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LockRoundedIcon></LockRoundedIcon> <h1>LoginPage</h1>
        </Container>
        <Stack spacing={2} sx={{ marginX: "2vw" ,py:2}}>
          <h4>Plese enter your username and password</h4>
          <TextField id="outlined-basic" label="Username" variant="outlined" />
          <TextField id="outlined-basic" label="Password" variant="outlined" type="password" />
        </Stack>
        <Stack direction="row" sx={{pt:2, marginX: "2vw", display: "flex",justifyContent:'space-between' }}>
          <Button variant="outlined">SIGNIN</Button>
          <Button variant="contained">LOGIN</Button>
        </Stack>
      </Box>
    </Box>
  );
}
