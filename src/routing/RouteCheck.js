export function getRouteRep(roleName) {

    const role = roles.find(role => role.role.toLowerCase() === roleName.toLowerCase());
    return role ? role.routeRep : "not-found";
  }
  const roles = [
    {
      role : "site admin",
      routeRep : "site"
    },
    {
      role : "sponsor admin",
      routeRep : "sponsor"
    },
    {
      role : "vendor admin",
      routeRep : "vendor"
    },
    {
      role : "individual admin",
      routeRep : "individual"
    },
    {
      role : "Fraud Prevention Officer",
      routeRep : "fraud"
    },
    {
      role : "Compliance officer",
      routeRep : "compliance"
    },
    {
      role : "Finance Manager",
      routeRep : "finance"
    },
    {
      role : "Report Manager",
      routeRep : "report"
    },
  ]
