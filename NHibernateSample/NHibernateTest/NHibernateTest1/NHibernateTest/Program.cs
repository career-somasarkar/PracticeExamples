using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using NHibernate.Cfg;
using NHibernate;

namespace NHibernateTest
{
    class Program
    {
        static void Main(string[] args)
        {
            Configuration cfg = new Configuration().Configure(@"D:\Soma\Practices\NHibernateTest\NHibernateTest\NHibernateTest\nhibernate.cfg.xml");
            ISessionFactory sf = cfg.BuildSessionFactory();
            ISession session = null;
            ITransaction tx = null;
            try
            {
                session = sf.OpenSession();
                tx = session.BeginTransaction();

                //Employee e1 = (Employee)session.Load(typeof(Employee), 1);
                //Console.WriteLine(e1.EmpName);
                //Console.ReadKey();
                Employee e = new Employee();
                e.EmpId = 2;
                e.EmpName = "Name 002";
                e.Email = "email 002";
                e.Salary = 1002;

                session.Save(e,2);

                tx.Commit();
                
            }
            catch (Exception e)
            {
                if (null != tx)
                {
                    tx.Rollback();
                }
                Console.WriteLine(e.Message);
            }
            finally
            {
                if (null != session)
                {
                    session.Close();
                }
            }
            Console.ReadKey();
        }
    }
}
