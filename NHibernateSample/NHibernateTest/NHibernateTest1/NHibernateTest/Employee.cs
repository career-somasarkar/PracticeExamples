using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace NHibernateTest
{
    public class Employee
    {
        private int empId;
        private string empName; 
        private string email ;
        private double salary ;

        public virtual int EmpId
        {
            get { return empId; }
            set { empId = value; }
        }

        public virtual string EmpName
        {
            get { return empName; }
            set { empName = value; }
        }

        public virtual string Email
        {
            get { return email; }
            set { email = value; }
        }

        public virtual double Salary
        {
            get { return salary; }
            set { salary = value; }
        }
    }
}
