import { Container, Typography } from "@mui/material";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full mt-5 text-black border-t-2 border-black">
      <Container
        maxWidth="lg"
        className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 "
      >
        <div>
          <Typography variant="h6">Ideation</Typography>
          <Typography variant="body1">ChatGPT</Typography>
        </div>

        <div>
          <Typography variant="h6">Contact us</Typography>
          <Typography variant="body1">info@function.com</Typography>
        </div>

        <div>
          <Typography variant="h6">Production</Typography>
          <Typography variant="body1">KEA Copenahgen</Typography>
        </div>

        <div>
          <Typography variant="h6">Web and Design</Typography>
          <Typography variant="body1">Function Agency</Typography>
        </div>

        <div>
          <Typography variant="h6">Production partner</Typography>
          <Typography variant="body1">Jonas Holbeck</Typography>
        </div>
      </Container>
    </footer>
  );
}
