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
        DB thisDB;
        bool selectedRow = false;

        public ComandForm(DB dB)
        {
            InitializeComponent();
            thisDB = dB;

            if (thisDB.GetRole() == "guest")
            {
                dataGridView1.ReadOnly = true;
                dataGridView1.AllowUserToDeleteRows = false;
                ButtonAdd.Visible = false;
            }

            foreach (string value in dB.AllTables)
            {
                comboBoxTable.Items.Add(value);
            }

        }

        private void button1_Click(object sender, EventArgs e)
        {
            MessageBox.Show("ok");
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
            thisDB.CloseConnection();
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
            dataGridView1.Rows.Clear();
            dataGridView1.Columns.Clear();

            using (thisDB.getConnection())
            {
                thisDB.OpenConnection();
                List<string> colNames;
                string query;
                thisDB.selectedTable = (string)comboBoxTable.SelectedItem;

                switch ((string)comboBoxTable.SelectedItem)
                {
                    case "pet":
                        colNames = new List<string>() { "id", "Владелец", "Ветеринар", "Категория", "Порода", "Кличка", "Пол", "Дата Рождения" };
                        query = "SELECT pet.id, owner.`ФИО`, veterinarian.fio, pet.`Категория`, pet.`Порода`, pet.`Кличка`, sex.sex, pet.`Дата Рождения` " +
                "FROM `pet`, `owner`, `veterinarian`, `sex` " +
                "WHERE pet.`Владелец` = owner.`id` " +
                "AND pet.`Ветеринар` = veterinarian.id " +
                "AND pet.`Пол` = sex.id";

                        thisDB.ShowTablePet(dataGridView1, query, colNames);
                        break;
                    case "owner":
                        colNames = new List<string>() { "id", "ФИО", "Адрес", "Телефон", "password" };
                        query = "SELECT * FROM owner";
                        thisDB.ShowTable(dataGridView1, query, colNames);
                        break;
                    case "veterinarian":
                        colNames = new List<string>() { "id", "FIO", "address", "phone", "password" };
                        query = "SELECT * FROM veterinarian";
                        thisDB.ShowTable(dataGridView1, query, colNames);
                        break;
                    case "drug":
                        colNames = new List<string>() { "id", "name", "cost" };
                        query = "SELECT * FROM drug";
                        thisDB.ShowTable(dataGridView1, query, colNames);
                        break;
                    case "diagnosis":
                        colNames = new List<string>() { "id", "name"};
                        query = "SELECT * FROM diagnosis";
                        thisDB.ShowTable(dataGridView1, query, colNames);
                        break;
                    case "treatment":
                        colNames = new List<string>() { "id", "Диагноз", "Лекарство", "Предписание", "Дата начала лечения", "Дата конца лечения" };
                        query = "SELECT treatment.id, diagnosis.`name`, drug.name, treatment.`Предписание`, treatment.`Дата начала лечения`, treatment.`Дата конца лечения` " +
                            "FROM `treatment`, `diagnosis`, `drug` " +
                            "WHERE treatment.`Диагноз` = diagnosis.`id` " +
                            "AND treatment.`Лекарство` = drug.id";
                        thisDB.ShowTableTreatment(dataGridView1, query, colNames);
                        break;
                    case "medical_card":
                        colNames = new List<string>() { "id", "Питомец", "Ветеринар_м", "Лечение"};
                        query = "SELECT medical_card.id, pet.Кличка, veterinarian.FIO, treatment.Предписание " +
                            "FROM `medical_card`, `treatment`, `pet`, veterinarian " +
                            "WHERE medical_card.Питомец = pet.`id` " +
                            "AND medical_card.Лечение = treatment.id " +
                            "AND medical_card.Ветеринар_м = veterinarian.id";
                        thisDB.ShowTableMedicalCard(dataGridView1, query, colNames);
                        break;
                }

                thisDB.numRows = dataGridView1.Rows.Count;
                thisDB.CloseConnection();
            }
        }

        private void ButtonAdd_Click(object sender, EventArgs e)
        {
            using (thisDB.getConnection())
            {
                thisDB.OpenConnection();

                if (thisDB.selectedTable == "")
                {
                    MessageBox.Show("Выберите таблицу");
                } else {
                    if (dataGridView1.Rows.Count > thisDB.numRows)
                    {
                        thisDB.AddRow(dataGridView1);
                        return;
                    }
                }

                thisDB.CloseConnection();
            }
        }

        private void DataGridView1_CellEndEdit(object sender, DataGridViewCellEventArgs e)
        {
            if (dataGridView1.CurrentRow.Index >= thisDB.numRows - 1)
            {
                return;
            }
            if (dataGridView1.CurrentRow.Cells[0].Value != null)
            {
                using (thisDB.getConnection())
                {
                    thisDB.OpenConnection();

                    int selectedColumn = dataGridView1.CurrentCell.ColumnIndex;
                    string query = "",
                           res = "",
                           tableSearchName = "",
                           colSearchName = "";

                    switch (dataGridView1.Columns[selectedColumn].HeaderText)
                    {
                        case "Владелец":
                            tableSearchName = "owner";
                            colSearchName = "ФИО";
                            break;
                        case "Ветеринар":
                        case "Ветеринар_м":
                            tableSearchName = "veterinarian";
                            colSearchName = "FIO";
                            break;
                        case "Пол":
                            tableSearchName = "sex";
                            colSearchName = "sex";
                            break;
                        case "Диагноз":
                            tableSearchName = "diagnosis";
                            colSearchName = "name";
                            break;
                        case "Лекарство":
                            tableSearchName = "drug";
                            colSearchName = "name";
                            break;
                        case "Питомец":
                            tableSearchName = "pet";
                            colSearchName = "Кличка";
                            break;
                        case "Лечение":
                            tableSearchName = "treatment";
                            colSearchName = "Предписание";
                            break;
                    }
                    

                    if (dataGridView1.Columns[selectedColumn].GetType().ToString() == "System.Windows.Forms.DataGridViewComboBoxColumn")
                    {
                        res = thisDB.SelectOneCell(
                            $"SELECT `id` " +
                            $"FROM `{tableSearchName}` " +
                            $"WHERE `{colSearchName}` = '{dataGridView1.CurrentCell.Value.ToString()}' ");

                        query =
                            $"UPDATE `{thisDB.selectedTable}` " +
                            $"SET `{dataGridView1.Columns[selectedColumn].HeaderText}` = '{res}' " +
                            $"WHERE {thisDB.selectedTable}.id = {dataGridView1.CurrentRow.Cells[0].Value.ToString()}";
                    } else
                    {
                        query =
                            $"UPDATE `{thisDB.selectedTable}` " +
                            $"SET `{dataGridView1.Columns[selectedColumn].HeaderText}` = '{dataGridView1.CurrentCell.Value.ToString()}' " +
                            $"WHERE {thisDB.selectedTable}.id = {dataGridView1.CurrentRow.Cells[0].Value.ToString()}";
                    }

                    thisDB.TransformationTable(query);

                    thisDB.CloseConnection();
                }
            }
        }

        private void DataGridView1_RowHeaderMouseClick(object sender, DataGridViewCellMouseEventArgs e)
        {
            selectedRow = true;
        }

        private void DataGridView1_PreviewKeyDown(object sender, PreviewKeyDownEventArgs e)
        {
            if (selectedRow && thisDB.GetRole() != "guest" )
            {
                DialogResult result = MessageBox.Show(
                    "Удалить строку?",
                    "Сообщение",
                    MessageBoxButtons.YesNo,
                    MessageBoxIcon.Question,
                    MessageBoxDefaultButton.Button1,
                    MessageBoxOptions.DefaultDesktopOnly
                );

                if (result == DialogResult.Yes)
                {
                    using (thisDB.getConnection())
                    {
                        thisDB.OpenConnection();

                        int selectedColumn = dataGridView1.CurrentCell.ColumnIndex;

                        string query =
                            $"DELETE FROM `{thisDB.selectedTable}` " +
                            $"WHERE {thisDB.selectedTable}.id = {dataGridView1.CurrentRow.Cells[0].Value.ToString()}";

                        thisDB.TransformationTable(query);
                        thisDB.numRows = dataGridView1.Rows.Count;

                        thisDB.CloseConnection();
                    }
                }

            }
        }

        private void DataGridView1_CellClick(object sender, DataGridViewCellEventArgs e)
        {
            selectedRow = false;
        }

        private void DataGridView1_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {

        }
    }  
}
