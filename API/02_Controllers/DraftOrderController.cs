using Microsoft.AspNetCore.Mvc;
using Services;
using Models;

[ApiController]

public class DraftOrderController : ControllerBase
{
    private readonly IDraftOrderService _draftService;

    public DraftOrderController(IDraftOrderService draftrServiceFromBuilder)
    {
        _draftService = draftrServiceFromBuilder;
    }

    [HttpPost("Draft/SetDraftOrder")]

    public async Task<ActionResult<List<DraftOrder>>> SetDraftOrder(int rounds)
    {
        try{
            List<DraftOrder> draft = await _draftService.SetDraftOrder(rounds);

            return Ok(draft);

        }
        catch(Exception e)
        {
            return BadRequest(e.Message);
        }

    }
}