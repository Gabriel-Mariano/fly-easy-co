export interface IFlightsProps {
    id:string,
    logo: ImageProps,
    code:string,
    company:string,
    status:FlightStatus,
    startDate:string,
    endDate:string,
    origin:string,
    destination:string,
    acronymOrigin:string,
    acronymDestination:string,
    departureTime:string,
    landingTime:string  
}