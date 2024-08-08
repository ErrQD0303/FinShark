using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using api.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace api.Data
{
    public class ApplicationDbContext : IdentityDbContext<AppUser>
    {
        public ApplicationDbContext(DbContextOptions dbContextOptions) : base(dbContextOptions)
        {

        }

        public DbSet<Stock> Stocks { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<Portfolio> Portfolios { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            // Set Primary Key for Portfolio
            builder.Entity<Portfolio>(x => x.HasKey(p => new { p.AppUserId, p.StockId }));

            // Set Foreign Key for Portfolio
            // Map One to Many Relationship between Porfolio and AppUser
            builder.Entity<Portfolio>()
                .HasOne(u => u.AppUser) // Portfolio
                .WithMany(u => u.Portfolios) // AppUser
                .HasForeignKey(u => u.AppUserId);

            // Map One to Many Relationship between Stock and AppUser
            builder.Entity<Portfolio>()
                .HasOne(u => u.Stock) // Stock
                .WithMany(u => u.Portfolios) // AppUser
                .HasForeignKey(u => u.StockId);

            List<IdentityRole> roles = new()
            {
                new IdentityRole{
                    Name = "Admin",
                    NormalizedName = "ADMIN"
                },
                new IdentityRole{
                    Name = "User",
                    NormalizedName = "USER"
                },
            };
            builder.Entity<IdentityRole>().HasData(roles);
        }
    }
}