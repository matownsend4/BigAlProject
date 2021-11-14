using System;

namespace api
<<<<<<< HEAD
{
public class WeatherForecast
=======
>>>>>>> fa13e9153a15eed4ccfe8097be06e5654b9a040b
{
    public class WeatherForecast
    {
        public DateTime Date { get; set; }

        public int TemperatureC { get; set; }

        public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);

        public string Summary { get; set; }
    }
}
}
