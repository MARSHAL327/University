using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using MySql.Data.MySqlClient;

namespace rgrUD
{
    public partial class LoginForm : Form
    {
        string login;
        string password;
        DB db;

        public LoginForm()
        {
            InitializeComponent();

            this.passField.AutoSize = false;
            this.passField.Size = new Size(this.passField.Size.Width, 26);
        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void closeButton_Click(object sender, EventArgs e)
        {
            this.Close();
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
        private void MainPanel_MouseMove(object sender, MouseEventArgs e)
        {
            if (e.Button == MouseButtons.Left)
            {
                this.Left += e.X - lastPoint.X;
                this.Top += e.Y - lastPoint.Y;
            }
        }

        private void MainPanel_MouseDown(object sender, MouseEventArgs e)
        {
            lastPoint = new Point(e.X, e.Y);
        }

        //КНОПКА ВОЙТИ
        private void buttonLogin_Click(object sender, EventArgs e)
        {
            bool failed;

            login = loginField.Text;
            password = passField.Text;

            db = new DB();

            try
            {
                using (db.getConnection())
                {
                    db.OpenConnection();
                    failed = false;

                    if (db.LogIn(login, password) == "")
                    {
                        throw new Exception("Неправильный логин или пароль!");
                    }

                    db.CloseConnection();
                }
            } catch (Exception ex) {
                MessageBox.Show(ex.Message);
                failed = true;
            }

            if (!failed)
            {
                this.Hide();
                using (db.getConnection())
                {
                    db.OpenConnection();
                    db.allOwners = db.GetDictionary("SELECT `id`, `ФИО` FROM owner");
                    db.allVeterinarian = db.GetDictionary("SELECT `id`, `FIO` FROM veterinarian");
                    db.allSex = db.GetDictionary("SELECT `id`, `sex` FROM sex");
                    db.allDiagnosis = db.GetDictionary("SELECT `id`, `name` FROM diagnosis");
                    db.allDrug = db.GetDictionary("SELECT `id`, `name` FROM drug");
                    db.allPets = db.GetDictionary("SELECT `id`, pet.`Кличка` FROM pet");
                    db.allTreatments = db.GetDictionary("SELECT `id`, treatment.`Предписание` FROM treatment");
                    db.SelectAllTables();

                    ComandForm CF = new ComandForm(db);
                    CF.Show();
                }
            }
        }

        private void Form1_FormClosed(object sender, FormClosedEventArgs e)
        {
            Application.Exit();
            Close();
        }

        private void passField_TextChanged(object sender, EventArgs e)
        {

        }
    }

}
