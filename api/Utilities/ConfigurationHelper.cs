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

        public static string? CombineWithEnv(string? connectionString)
        {
            List<string> envKeys = ["DB_HOST", "DB_NAME", "DB_USER", "DB_PASSWORD"];

            envKeys.ForEach((key) =>
            {
                connectionString = connectionString?.Replace($"{{{key}}}", GetEnvValue(key));
            });

            // Construct the connection string
            return connectionString;
        }

        public static string? GetEnvValue(string key)
        {
            return Environment.GetEnvironmentVariable(key);
        }
    }
}