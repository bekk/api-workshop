import React from "react";
import { Spinner, SimpleGrid, Box, Text, Button } from "@chakra-ui/react";
import { TilsynDetailsType } from "./types";
import { mapSmilefjesToEmoji } from "./utils";

type TilsynDetailsProps = {
  tilsynId: string;
  onClear: () => void;
};

export const TilsynDetails = (props: TilsynDetailsProps) => {
  const [tilsynDetails, setTilsynDetails] = React.useState<TilsynDetailsType>();

  React.useEffect(() => {
    const fetchTilsynDetails = async () => {
      const response = await fetch(
        `https://smilefjes.herokuapp.com/tilsyn/${props.tilsynId}`
      );
      const tilsyn = await response.json();
      setTilsynDetails(tilsyn);
    };
    fetchTilsynDetails();
  }, []);

  if (tilsynDetails) {
    return (
      <>
        <Button
          justifySelf={"flex-end"}
          width={100}
          colorScheme="blue"
          onClick={props.onClear}
        >
          Gå tilbake
        </Button>
        <SimpleGrid minChildWidth="260px" spacing="40px">
          <Box bg="gray.100" height="200px">
            <Text>{`Adresse: ${tilsynDetails.adresse}`}</Text>
            <Text>{`Postnummer: ${tilsynDetails.postnummer}`}</Text>
            <Text>{`Poststed: ${tilsynDetails.poststed}`}</Text>
          </Box>
          <Box bg="gray.100" height="200px">
            <Text>{`Dato: ${tilsynDetails.dato}`}</Text>
          </Box>
          <Box bg="gray.100" height="200px">
            <Text>{`Lokaler og utstyr: ${tilsynDetails.lokalerOgUtstyr}`}</Text>
          </Box>
          <Box bg="gray.100" height="200px">
            <Text>{`Mathåndtering og tilbredning: ${tilsynDetails.mathåndteringOgTilberedning}`}</Text>
          </Box>
          <Box bg="gray.100" height="200px">
            <Text>{`Merking og sporbarhet: ${tilsynDetails.merkingOgSporbarhet}`}</Text>
          </Box>
          <Box bg="gray.100" height="200px">
            <Text>{`Navn: ${tilsynDetails.navn}`}</Text>
          </Box>
          <Box bg="gray.100" height="200px">
            <Text>{`Rutiner og ledelse: ${tilsynDetails.rutinerOgLedelse}`}</Text>
          </Box>
          <Box bg="gray.100" height="200px">
            <Text>{`Smilefjes: ${mapSmilefjesToEmoji(
              tilsynDetails.smilefjes
            )}`}</Text>
          </Box>
          <Box bg="gray.100" height="200px">
            <Text>{`Tilsynsid: ${tilsynDetails.tilsynsId}`}</Text>
          </Box>
        </SimpleGrid>
      </>
    );
  } else {
    return <Spinner />;
  }
};