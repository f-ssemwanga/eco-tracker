import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import FrancisSemwanga from "../images/francis-semwanga.png";
import ViktoriaMoskalenko from "../images/viktoria-moskalenko.jpg";

export const AboutUs = () => {
  return (
    <Paper elevation={3}>
      <Stack spacing={5} sx={{ p: 5, backgroundColor: "#f6f6f6" }}>
        <Typography component="h2" variant="h4" sx={{ textAlign: "center" }}>
          About Us
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "column", md: "row" }}
          justifyContent="space-evenly"
          alignItems={{ xs: "center", sm: "center", md: "flex-start" }}
          spacing={3}
        >
          <Stack alignItems="center" spacing={2}>
            <Link href="https://github.com/f-ssemwanga">
              <Avatar
                alt="Francis Ssemwanga"
                src={FrancisSemwanga}
                sx={{ width: 112, height: 112, marginBottom: 2 }}
              />
              <Typography variant="caption" sx={{ textAlign: "center" }}>
                Francis Ssemwanga
              </Typography>
            </Link>
          </Stack>

          <Stack alignItems="center" spacing={2}>
            <Link href="https://github.com/f-ssemwanga">
              <Avatar
                alt="Francis Ssemwanga"
                src={ViktoriaMoskalenko}
                sx={{ width: 112, height: 112, marginBottom: 2 }}
              />
              <Typography variant="caption" sx={{ textAlign: "center" }}>
                Francis Ssemwanga
              </Typography>
            </Link>
          </Stack>

          <Stack alignItems="center" spacing={2}>
            <Link href="https://github.com/f-ssemwanga">
              <Avatar
                alt="Francis Ssemwanga"
                src={FrancisSemwanga}
                sx={{ width: 112, height: 112, marginBottom: 2 }}
              />
              <Typography variant="caption" sx={{ textAlign: "center" }}>
                Francis Ssemwanga
              </Typography>
            </Link>
          </Stack>

          <Stack alignItems="center" spacing={2}>
            <Link href="https://github.com/f-ssemwanga">
              <Avatar
                alt="Francis Ssemwanga"
                src={FrancisSemwanga}
                sx={{ width: 112, height: 112, marginBottom: 2 }}
              />
              <Typography variant="caption" sx={{ textAlign: "center" }}>
                Francis Ssemwanga
              </Typography>
            </Link>
          </Stack>

          <Stack alignItems="center" spacing={2}>
            <Link href="https://github.com/f-ssemwanga">
              <Avatar
                alt="Francis Ssemwanga"
                src={FrancisSemwanga}
                sx={{ width: 112, height: 112, marginBottom: 2 }}
              />
              <Typography variant="caption" sx={{ textAlign: "center" }}>
                Francis Ssemwanga
              </Typography>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
};
