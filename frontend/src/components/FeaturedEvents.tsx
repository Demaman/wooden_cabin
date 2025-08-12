// components/FeaturedEvents.tsx
'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Box, Heading, Text, SimpleGrid, Icon, VStack, HStack, Flex } from '@chakra-ui/react';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

// The full list of events you provided
const allEventsData = {
  "events": [
    // ... (full JSON array of events)
    { "date": "19 de junho de 2025", "subject": "Festa de Corpus Christi Valsugana", "location": "Localidade Valsugana" },
    { "date": "20 de junho de 2025", "subject": "Festa de São Virgílio", "location": "Centro da cidade" },
    { "date": "26 de junho de 2025", "subject": "Café com Debate", "location": "Salão de Festa da Igreja São José" },
    { "date": "3 de julho de 2025", "subject": "Campanha Julho Amarelo/UBS Besenelo", "location": "UBS Besenelo" },
    { "date": "5 de julho de 2025", "subject": "Campanha Julho Amarelo/Praça Del Cumune", "location": "Posto Santa Paulina" },
    { "date": "9 de julho de 2025", "subject": "Festa Litúrgica Santa Paulina", "location": "Santuário Santa Paulina" },
    { "date": "11 de julho de 2025", "subject": "Palestra Primeiros Socorros", "location": "Sociedade Humaita" },
    { "date": "13 de julho de 2025", "subject": "Piazza In Festa - Quermesse Julina", "location": "Praça Getúlio Vargas" },
    { "date": "14 de julho de 2025", "subject": "Curso/Palestra sobre Nutrição Animal", "location": "Casa Dei Nonni do São Valentim" },
    { "date": "16 de julho de 2025", "subject": "Palestra sobre a Campanha Julho Amarelo", "location": "Salão Paroquial Paróquia São Virgílio" },
    { "date": "17 de julho de 2025", "subject": "Campanha Julho Amarelo/UBS Claraiba", "location": "UBS Claraiba" },
    { "date": "24 de julho de 2025", "subject": "Campanha Julho Amarelo/UBS Aguti", "location": "UBS Aguti" },
    { "date": "25 de julho de 2025", "subject": "Festa do Colono Major Gercino", "location": "Centro da cidade" },
    { "date": "27 de julho de 2025", "subject": "Copa Challenge de Mountain Bike", "location": "Ginásio de Esporte" },
    { "date": "28 de julho de 2025", "subject": "Campanha Julho Amarelo/UBS do Pitanga", "location": "UBS Pitanga" },
    { "date": "31 de julho de 2025", "subject": "Incanto Trentino", "location": "Centro de Eventos Cremilda Tridapalli" },
    { "date": "31 de julho de 2025", "subject": "Campanha Julho Amarelo/UBS do Trinta Reis", "location": "UBS do Trinta Reis" },
    { "date": "1 de agosto de 2025", "subject": "Incanto Trentino", "location": "Centro de Eventos Cremilda Tridapalli" },
    { "date": "2 de agosto de 2025", "subject": "Incanto Trentino", "location": "Centro de Eventos Cremilda Tridapalli" },
    { "date": "3 de agosto de 2025", "subject": "Desfile Cultural - Incanto Trentino", "location": "Centro de Eventos Cremilda Tridapalli" },
    { "date": "7 de agosto de 2025", "subject": "Incanto Trentino", "location": "Centro de Eventos Cremilda Tridapalli" },
    { "date": "8 de agosto de 2025", "subject": "Incanto Trentino", "location": "Centro de Eventos Cremilda Tridapalli" },
    { "date": "9 de agosto de 2025", "subject": "Incanto Trentino", "location": "Centro de Eventos Cremilda Tridapalli" },
    { "date": "9 de agosto de 2025", "subject": "Curso de Hidromel", "location": "Centro de Eventos Cremilda Tridapalli" },
    { "date": "10 de agosto de 2025", "subject": "Incanto Trentino", "location": "Centro de Eventos Cremilda Tridapalli" },
    { "date": "16 de agosto de 2025", "subject": "Piazza in Festa", "location": "Praça Getúlio Vargas" },
    { "date": "16 de agosto de 2025", "subject": "Encontro de Apicultores em Major Gercino", "location": "Major Gercino" },
    { "date": "30 de agosto de 2025", "subject": "Viagem Técnica para a Expointer", "location": "Parque Exposições Assis Brasil, Rio Grande do Sul" },
    { "date": "6 de setembro de 2025", "subject": "Feira de Negócios Viacredi", "location": "Centro de Eventos Cremilda Tridapalli" },
    { "date": "13 de setembro de 2025", "subject": "Festa do Colono/Agricultor", "location": "Centro de Eventos Cremilda Tridapalli" },
    { "date": "12 de outubro de 2025", "subject": "Piazza in Festa Per Bambini", "location": "Praça Getúlio Vargas" },
    { "date": "16 de outubro de 2025", "subject": "Piazza in Festa Literário", "location": "Praça Getúlio Vargas" },
    { "date": "13 de novembro de 2025", "subject": "5ª Sicoob Mons Ultra Trail", "location": "Centro de Eventos Cremilda Tridapalli" },
    { "date": "29 de novembro de 2025", "subject": "Acendimento das Luzes de Natal", "location": "Praça Getúlio Vargas" },
    { "date": "6 de dezembro de 2025", "subject": "Natal Luz com Santa Paulina", "location": "Santuário Santa Paulina" },
    { "date": "14 de dezembro de 2025", "subject": "Incanto di Natale", "location": "Centro de Eventos Cremilda Tridapalli" }
  ]
};

// Helper function to parse Portuguese dates
const parseDate = (dateString: string) => {
  const months: { [key: string]: number } = {
    'janeiro': 0, 'fevereiro': 1, 'março': 2, 'abril': 3, 'maio': 4, 'junho': 5,
    'julho': 6, 'agosto': 7, 'setembro': 8, 'outubro': 9, 'novembro': 10, 'dezembro': 11
  };
  const parts = dateString.split(' de ');
  if (parts.length < 3) return null;
  const day = parseInt(parts[0], 10);
  const month = months[parts[1].toLowerCase()];
  const year = parseInt(parts[2], 10);
  if (isNaN(day) || month === undefined || isNaN(year)) return null;
  return new Date(year, month, day);
};

export default function FeaturedEvents() {
  const t = useTranslations('HomePage.events');
  const [upcomingEvents, setUpcomingEvents] = useState<any[]>([]);

  useEffect(() => {
    const now = new Date(); // Uses the current date
    now.setHours(0, 0, 0, 0); // Normalize to the start of the day

    const futureEvents = allEventsData.events
      .map(event => ({
        ...event,
        dateObject: parseDate(event.date),
      }))
      .filter(event => event.dateObject && event.dateObject >= now)
      .sort((a, b) => a.dateObject!.getTime() - b.dateObject!.getTime());

    // CHANGED: Show the next 6 events
    setUpcomingEvents(futureEvents.slice(0, 6));
  }, []);

  if (upcomingEvents.length === 0) {
    return null; // Or render a "no events" message
  }

  return (
    <Box as="section" py={16} bg="gray.50">
      <Box maxW="6xl" mx="auto" px={4}>
        <Heading as="h2" size="xl" textAlign="center" mb={12} color="gray.800">
          {t('title')}
        </Heading>
        {/* CHANGED: Replaced `spacing` with `gap` */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
          {upcomingEvents.map((event, index) => (
            <Box
              key={index}
              p={6}
              bg="white"
              borderRadius="lg"
              shadow="md"
              borderTop="4px"
              borderColor="green.500"
              transition="all 0.3s"
              _hover={{ shadow: 'xl', transform: 'translateY(-4px)' }}
            >
              {/* CHANGED: Replaced `VStack` with `Flex` and `gap` for more control */}
              <Flex direction="column" h="full" gap={4}>
                <Heading as="h3" size="md" color="gray.800">
                  {event.subject}
                </Heading>
                
                {/* CHANGED: Replaced Divider with a bordered Box */}
                <Box borderTopWidth="1px" borderColor="gray.200" w="full" />

                <VStack align="start" w="full" gap={2}>
                  <HStack>
                    <Icon as={FaCalendarAlt} color="green.600" />
                    <Text fontSize="sm" color="gray.700" fontWeight="medium">
                      {event.date}
                    </Text>
                  </HStack>
                  <HStack>
                    <Icon as={FaMapMarkerAlt} color="green.600" />
                    <Text fontSize="sm" color="gray.700">
                      {event.location}
                    </Text>
                  </HStack>
                </VStack>
              </Flex>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}