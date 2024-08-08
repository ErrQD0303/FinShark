using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace api.Models
{
    // Model for Identity User in the Database
    public class AppUser : IdentityUser
    {
        public List<Portfolio> Portfolios { get; set; } = new();
    }
}