using Microsoft.EntityFrameworkCore;
using WareHouseAPI.Models;

namespace WareHouseAPI.Data
{
    public class WareHouseAPIDbContext : DbContext
    {
        public WareHouseAPIDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<tblWarehouses> tblWarehouses { get; set; }
        public DbSet<tblInventory> tblInventory { get; set; }
        public DbSet<InventoryItems> InventoryItems { get; set; }
    }
}
