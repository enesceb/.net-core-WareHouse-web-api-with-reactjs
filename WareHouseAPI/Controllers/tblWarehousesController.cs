using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WareHouseAPI.Data;
using WareHouseAPI.Models;

namespace WareHouseAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class tblWarehousesController : Controller
    {
        private readonly WareHouseAPIDbContext dbContext;

        public tblWarehousesController(WareHouseAPIDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetWareHouses()
        {
            return Ok(await dbContext.tblWarehouses.ToListAsync());

        }

        [HttpGet]
        [Route("{id:guid}")]
        public async Task<IActionResult> GetWareHouse([FromRoute] Guid id)
        {
            var wareHouse = await dbContext.tblWarehouses.FindAsync(id);

            if (wareHouse == null)
            {
                return NotFound();
            }

            return Ok(wareHouse);
        }

        [HttpPost]
        public async Task<IActionResult> AddWareHouse(tblWarehouses addtblWarehouses)
        {
            var warehouse = new tblWarehouses()
            {
                Id = Guid.NewGuid(),
                wareHouseName = addtblWarehouses.wareHouseName
            };
            await dbContext.tblWarehouses.AddAsync(warehouse);
            await dbContext.SaveChangesAsync();

            return Ok(warehouse);
        }

        [HttpPut]
        [Route("{id:guid}")]
        public async Task<IActionResult> UpdateWareHouse([FromRoute] Guid id, tblWarehouses updatetblWarehouses)
        {
            var wareHouse = await dbContext.tblWarehouses.FindAsync(id);

            if(wareHouse != null)
            {
                wareHouse.wareHouseName = updatetblWarehouses.wareHouseName;

                await dbContext.SaveChangesAsync();

                return Ok(wareHouse);
            }

            return NotFound();

        }

        [HttpDelete]
        [Route("{id:guid}")]
        public async Task<IActionResult> DeleteWareHouse([FromRoute] Guid id)
        {
            var wareHouse = await dbContext.tblWarehouses.FindAsync();

            if (wareHouse != null)
            {
                dbContext.Remove(wareHouse);
                await dbContext.SaveChangesAsync();
                return Ok(wareHouse);
            }

            return NotFound();
        }
    }
}
