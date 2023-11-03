using API.DTOs;
using API.Entities;

namespace API.Interfaces
{
    public interface IPointRepository
    {

        Task<Point> AddPointAsync(Point point);
        Task<IEnumerable<Point>> GetPointsAsync();
        Task<Point> GetPointAsync(int id);
        Task<bool> SaveAllAsync();
        Task<Point> DeletePointAsync(int id);
    }
}