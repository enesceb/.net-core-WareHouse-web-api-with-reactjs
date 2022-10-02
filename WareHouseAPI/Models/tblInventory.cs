using System.ComponentModel.DataAnnotations;

namespace WareHouseAPI.Models
{
    public class tblInventory
    {
        [Key]
        public Guid Id { get; set; }
        [Required]
        public string wareHouseID { get; set; }
        
        [Required]
        public string inventoryName { get; set; }   
        

    }
}
