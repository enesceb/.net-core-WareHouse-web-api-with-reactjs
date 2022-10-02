using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WareHouseAPI.Data;
using WareHouseAPI.Models;



namespace WareHouseAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class tblInventoryController : Controller
    {
        private readonly WareHouseAPIDbContext dbContext;

        public tblInventoryController(WareHouseAPIDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetInventories()
        {
            return Ok(await dbContext.tblInventory.ToListAsync());

        }

        [HttpGet]
        [Route("{id:guid}")]
        public async Task<IActionResult> GetInventoriesByWarhouseId([FromRoute] Guid id)
        {
          var inventory = await dbContext.tblInventory.Where(w => w.wareHouseID == id.ToString()).FirstAsync();
            if (inventory == null)
            {
                return NotFound();
            }

            return Ok(inventory);

        }


        [HttpPost]
        public async Task<IActionResult> AddInventory(tblInventory addTblInventories)
        {
            var inventory = new tblInventory()
            {
                Id = Guid.NewGuid(),
                wareHouseID = addTblInventories.wareHouseID,
                inventoryName = addTblInventories.inventoryName
            };
            await dbContext.tblInventory.AddAsync(inventory);
            await dbContext.SaveChangesAsync();

            return Ok(inventory);
        }

        [HttpPut]
        [Route("{id:guid}")]
        public async Task<IActionResult> UpdateInventory([FromRoute] Guid id, tblInventory updateTblInventories)
        {
            var inventory = await dbContext.tblInventory.FindAsync(id);

            if (inventory != null)
            {
                inventory.inventoryName = updateTblInventories.inventoryName;
              

                await dbContext.SaveChangesAsync();

                return Ok(inventory);
            }

            return NotFound();

        }

        [HttpDelete]
        [Route("{id:guid}")]
        public async Task<IActionResult> DeleteInventory([FromRoute] Guid id)
        {
            var inventory = await dbContext.tblInventory.Where(w => w.Id == id).FirstAsync();


            if (inventory != null)
            {
                dbContext.Remove(inventory);
                await dbContext.SaveChangesAsync();
                return Ok(inventory);
            }

            return NotFound();
        }
    }
}
