import React from "react";
import { Establishment } from "../types/typeIndex";

const getEstablishmentNameFromId = ( allEstablishments: Establishment[], establishmentId: number ) => {
  return allEstablishments.map((establishment: Establishment) => {
    if (establishment.establishment_id === establishmentId) {
      return establishment.establishment_name;
    }
  });
};

export default getEstablishmentNameFromId;
