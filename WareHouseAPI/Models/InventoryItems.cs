using System.ComponentModel.DataAnnotations;

namespace WareHouseAPI.Models
{
    public class InventoryItems
    {
        [Key]
        public Guid Id { get; set; }
        [Required]
        public string InventoryID { get; set; }
        [Required]
        public string Item { get; set; }
        [Required]
        public int Quantity { get; set; }
        
    }
}
