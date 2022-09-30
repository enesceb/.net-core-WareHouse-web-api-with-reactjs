using System.ComponentModel.DataAnnotations;

namespace WareHouseAPI.Models
{
    public class tblInventory
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public int wareHouseID { get; set; }
        
        [Required]
        
        public string inventoryName { get; set; }    
       
    }
}
