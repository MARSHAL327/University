using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace rgrUD
{
    public partial class ComandForm : Form
    {
        public ComandForm(List<string> allTables)
        {
            InitializeComponent();
            comboBoxTable.Items.AddRange(allTables.Cast<object>().ToArray());
        }
     
        private void button1_Click(object sender, EventArgs e)
        {

        }

        private void button1_Click_1(object sender, EventArgs e)
        {

        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void label1_Click_1(object sender, EventArgs e)
        {

        }

        private void closeButton_Click(object sender, EventArgs e)
        {
            Application.Exit();
            Close();
        }

        private void closeButton_MouseEnter(object sender, EventArgs e)
        {
            closeButton.BackColor = Color.White;
            closeButton.ForeColor = Color.DarkSlateBlue;
        }

        private void closeButton_MouseLeave(object sender, EventArgs e)
        {
            closeButton.BackColor = ColorTranslator.FromHtml("#20263d");
            closeButton.ForeColor = Color.White;
        }

        Point lastPoint;
        private void ComandPanel_MouseMove(object sender, MouseEventArgs e)
        {
            if (e.Button == MouseButtons.Left)
            {
                this.Left += e.X - lastPoint.X;
                this.Top += e.Y - lastPoint.Y;
            }
        }

        private void ComandPanel_MouseDown(object sender, MouseEventArgs e)
        {
            lastPoint = new Point(e.X, e.Y);
        }

        private void tableMedCard_Click(object sender, EventArgs e)
        {

        }

        private void comboBoxTable_SelectedIndexChanged(object sender, EventArgs e)
        {

        }
    }
    
}
