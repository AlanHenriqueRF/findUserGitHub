export function formatDate(date: string): string {
    const dateObj = new Date(date);
    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",    
        month: "2-digit",   
        day: "2-digit",     
        hour: "2-digit",    
        minute: "2-digit",  
        second: "2-digit",  
        timeZone: "America/Sao_Paulo",
        hour12: false,      
        timeZoneName: "short" 
    };

    const formattedDate = dateObj.toLocaleString('pt-BR', options);

    return formattedDate;
}