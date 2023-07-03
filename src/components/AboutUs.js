import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Icon from "@mui/material/Icon";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";

export const AboutUs = () => {
  return (
    <Container >
      {/* to be centred later */}
      <h1>About Us</h1>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-evenly"
        spacing={2}
      >
        <Stack alignItems="center">
          <Avatar alt="Francis Ssemwanga " src="/static/images/avatar/2.jpg" />
          <Link href="https://github.com/f-ssemwanga">Francis Ssemwanga</Link>
        </Stack>

        <Stack alignItems="center">
          <Avatar alt="Kourtney Queeley " src="/static/images/avatar/2.jpg" />
          <Link href="https://github.com/Kourtneyq2">Kourtney Queeley</Link>
        </Stack>

        <Stack alignItems="center">
          <Avatar alt="Luke Craven" src="/static/images/avatar/2.jpg" />
          <Link href="https://github.com/N20-Dev">Luke Craven </Link>
        </Stack>

        <Stack alignItems="center">
          <Avatar alt="Rosh Rai " src="/static/images/avatar/2.jpg" />
          <Link href="https://github.com/LordNinth">Rosh Rai</Link>
        </Stack>

        <Stack alignItems="center">
          <Avatar alt="Viktoria Moskalenko" src="/static/images/avatar/2.jpg" />
          <Link href="https://github.com/Vikkk111">Viktoria Moskalenko</Link>
        </Stack>
      </Stack>
    </Container>
  );
};
