const carbonData = [
  {
    co2e: 1696.85311503512,
    co2e_unit: "kg",
    legs: [
      {
        co2e: 1696.85311503512,
        co2e_unit: "kg",
        co2e_calculation_method: "ar4",
        co2e_calculation_origin: "source",
        emission_factor: {
          activity_id:
            "passenger_flight-route_type_outside_uk-aircraft_type_na-distance_na-class_economy-rf_included-distance_uplift_included",
          uuid: "7038fb45-d601-421e-b795-0a0a57737c98",
          id: "passenger_flight-route_type_outside_uk-aircraft_type_na-distance_na-class_economy-rf_included-distance_uplift_included",
          access_type: "public",
          source: "BEIS",
          year: "2022",
          region: "GLOBAL",
          category: "Air Travel",
          lca_activity: "fuel_combustion",
          data_quality_flags: [],
        },
        constituent_gases: {
          co2e_total: 1696.85311503512,
          co2e_other: null,
          co2: 1688.2861967980798,
          ch4: 0.004826432809599999,
          n2o: 0.0283552927564,
        },
      },
    ],
  },
];

export default carbonData;
