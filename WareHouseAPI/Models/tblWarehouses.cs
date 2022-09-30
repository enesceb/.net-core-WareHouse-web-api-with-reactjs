using System.ComponentModel.DataAnnotations;
namespace WareHouseAPI.Models
{
    public class tblWarehouses
    {
        [Key]
        public Guid Id{ get; set; } 
        [Required]
        public string wareHouseName { get; set; }
    }
}
