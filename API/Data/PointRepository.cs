using API.DTOs;
using API.Entities;
using API.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class PointRepository : IPointRepository
    {

        private readonly DataContext _context;
        public PointRepository(DataContext context)
        {
            _context = context;

        }

        public async Task<Point> AddPointAsync(Point point)
        {
            _context.Points.Add(point);
            await _context.SaveChangesAsync();
            return point;
        }


        public async Task<IEnumerable<Point>> GetPointsAsync()
        {
            return await _context.Points.ToListAsync();
        }

        public async Task<bool> SaveAllAsync()
        {
            return await _context.SaveChangesAsync() > 0;
        }

        public async Task<Point> DeletePointAsync(int id)
        {
            var point = await _context.Points.FindAsync(id);
            if (point == null)
            {
                return null;
            }

            _context.Points.Remove(point);
            await _context.SaveChangesAsync();

            return point;
        }

        public async Task<Point> GetPointAsync(int id)
        {
            return await _context.Points.FindAsync(id);
        }

    }
}