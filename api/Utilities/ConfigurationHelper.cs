using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using dotenv.net;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace api.Utilities
{
    public static class ConfigurationHelper
    {
        static ConfigurationHelper()
        {
            DotEnv.Load();
        }

        public static string? GetConnectionString(ConfigurationManager configuration)
        {
            List<string> envKeys = ["DB_HOST", "DB_NAME", "DB_USER", "DB_PASSWORD"];

            var connectionString = configuration.GetConnectionString("DefaultConnection");

            envKeys.ForEach((key) =>
            {
                connectionString = connectionString?.Replace($"{{{key}}}", Environment.GetEnvironmentVariable(key));
            });

            // Construct the connection string
            return connectionString;
        }
    }
}