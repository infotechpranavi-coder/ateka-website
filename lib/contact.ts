export const contact = {
  person: 'Jabi Ahmed',
  phones: [{ display: '77770 62143', tel: '+917777062143' }],
  phonesDisplay: '77770 62143',
  phonesDisplayIntl: '+91 77770 62143',
  primaryPhone: { display: '77770 62143', tel: '+917777062143' },
  email: 'javedahmed@atekalogistics.com',
  address: {
    full: 'Dishma Bldg, Office no - 8, 3rd Floor, Kalamboli – 410218',
    short: 'Dishma Bldg, Office no - 8, 3rd Floor, Kalamboli – 410218',
    city: 'Kalamboli',
    pincode: '410218',
  },
  location: null,
  mapEmbedUrl:
    'https://maps.google.com/maps?q=Dishma+Bldg,+Office+no+8,+3rd+Floor,+Kalamboli+410218&z=16&hl=en&output=embed',
  mapDirectionsUrl:
    'https://www.google.com/maps/search/?api=1&query=Dishma+Bldg,+Office+no+8,+3rd+Floor,+Kalamboli+410218',
  hours: 'Dedicated operations support',
  whatsapp: {
    number: '917777062143',
    url: 'https://wa.me/917777062143?text=Hi%20Ateka%20Logistics%2C%20I%27d%20like%20a%20quote%20for%20road%20freight%20transport.',
  },
} as const;
