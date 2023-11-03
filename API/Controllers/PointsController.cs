using API.Data;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")] //api/points - endpoint for GPS Coordinate Positions
public class PointsController : ControllerBase
{
    private readonly IPointRepository _pointRepository;
    public PointsController(IPointRepository pointRepository)
    {
        _pointRepository = pointRepository;
    }

    [HttpPost("add")]
    public async Task<ActionResult<PointDto>> AddPoint(PointDto pointDto)
    {
        var point = new Point
        {
            Lat = pointDto.Lat,
            Lng = pointDto.Lng
        };

        await _pointRepository.AddPointAsync(point);

        return CreatedAtAction("GetPoints", new { id = point.Id }, point);
    }



    [HttpGet] //Get coordinates
    public async Task<ActionResult<IEnumerable<Point>>> GetPoints()
    {
        var points = await _pointRepository.GetPointsAsync();
        return Ok(points); 
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeletePoint(int id)
    {
        var point = await _pointRepository.GetPointAsync(id);

        if (point == null)
        {
            return NotFound();
        }

        await _pointRepository.DeletePointAsync(id); 

        return NoContent();
    }

}