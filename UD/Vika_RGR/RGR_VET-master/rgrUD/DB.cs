using System;
using MySql.Data.MySqlClient;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Common;
using System.Security.Cryptography.X509Certificates;
using System.Windows.Forms;
using System.Drawing;

namespace rgrUD
{
    public class DB
    {
        public List<string> AllTables { get; set; }
        public Dictionary<string, string> allOwners { get; set; }
        public Dictionary<string, string> allVeterinarian { get; set; }
        public Dictionary<string, string> allSex { get; set; }
        public Dictionary<string, string> allDiagnosis { get; set; }
        public Dictionary<string, string> allDrug { get; set; }
        public Dictionary<string, string> allPets { get; set; }
        public Dictionary<string, string> allTreatments { get; set; }
        string role;

        public string selectedTable { get; set; }
        public int numRows { get; set; }
        MySqlConnection connection;

        public DB()
        {
            connection = new MySqlConnection("server=localhost;port=3306;username='root'; password='';database=veterinary_clinic;");
            role = "";
            selectedTable = "";
        }

        //ОТКРЫТИЕ СОЕДИНЕНИЯ
        public void OpenConnection()
        {
            if (connection.State == System.Data.ConnectionState.Closed)
                connection.Open();

        }

        //ЗАКРЫТИЕ СОЕДИНЕНИЯ
        public void CloseConnection()
        {
            if (connection.State == System.Data.ConnectionState.Open)
                connection.Close();
        }

        //ВОЗВРАТ СОЕДИНЕНИЯ
        public MySqlConnection getConnection()
        {
            return connection;
        }

        public string GetRole()
        {
            return role;
        }

        public string LogIn(string userName, string userPassword)
        {
            string sql1 = "SELECT veterinarian.FIO, veterinarian.password FROM veterinarian";
            MySqlCommand cmd1 = new MySqlCommand();

            cmd1.Connection = connection;
            cmd1.CommandText = sql1;

            using (DbDataReader reader = cmd1.ExecuteReader())
            {
                if (reader.HasRows)
                {
                    while (reader.Read())
                    {
                        string tableName = reader.GetString(0);
                        string tablePassword = reader.GetString(1);

                        if (userName == tableName && userPassword == tablePassword)
                        {
                            role = "veterinar";
                            return role;
                        }
                    }
                }
            }

            string sql2 = "SELECT owner.ФИО, owner.password FROM owner";
            MySqlCommand cmd2 = new MySqlCommand();

            cmd2.Connection = connection;
            cmd2.CommandText = sql2;

            using (DbDataReader reader = cmd2.ExecuteReader())
            {
                if (reader.HasRows)
                {
                    while (reader.Read())
                    {
                        string tableName = reader.GetString(0);
                        string tablePassword = reader.GetString(1);

                        if (userName == tableName && userPassword == tablePassword)
                        {
                            role = "guest";
                        }
                    }
                }
            }

            return role;
        }

        public void SelectAllTables()
        {
            string sql = "SHOW Tables";
            string tableName = "";

            AllTables = new List<string>();
            // Создать объект Command.
            MySqlCommand cmd = new MySqlCommand();

            // Сочетать Command с Connection.
            cmd.Connection = connection;
            cmd.CommandText = sql;

            using (DbDataReader reader = cmd.ExecuteReader())
            {
                if (reader.HasRows)
                {
                    while (reader.Read())
                    {
                        tableName = reader.GetString(0);

                        if(tableName != "sex")
                        {
                            if (role == "guest" && tableName == "pet")
                            {
                                AllTables.Add(tableName);
                            }
                            else if (role == "veterinar")
                            {
                                AllTables.Add(tableName);
                            }
                        }
                    }
                }
            }
        }
        public void ShowTable(DataGridView table, string query, List<string> colNames)
        {
            MySqlCommand cmd = new MySqlCommand();


            for (int i = 0; i < colNames.Count; i++)
            {
                table.Columns.Add($"Column{i}", colNames[i]);
            }

            cmd.Connection = connection;
            cmd.CommandText = query;

            object[] fieldValue = new object[colNames.Count];

            using (DbDataReader reader = cmd.ExecuteReader())
            {
                if (reader.HasRows)
                {
                    for (int i = 0; reader.Read(); i++)
                    {
                        table.Rows.Add();
                        for (int j = 0; j < colNames.Count; j++)
                        {
                            table.Rows[i].Cells[j].Value = reader.GetString(j).ToString();
                        }
                    }
                }
            }
        }

        public void ShowTablePet(DataGridView table, string query, List<string> colNames)
        {
            MySqlCommand cmd = new MySqlCommand();
            
            for (int i = 0; i < colNames.Count; i++)
            {
                if ( i == 1 || i == 2 || i == 6 )
                {
                    DataGridViewComboBoxColumn comboboxColumn = new DataGridViewComboBoxColumn();
                    comboboxColumn.DataPropertyName = $"Column{i}";
                    comboboxColumn.HeaderText = colNames[i];

                    if (i == 1)
                    {
                        foreach (KeyValuePair<string, string> item in allOwners)
                        {
                            comboboxColumn.Items.Add(item.Value);
                        }
                    }
                    else if (i == 2)
                    {
                        foreach (KeyValuePair<string, string> item in allVeterinarian)
                        {
                            comboboxColumn.Items.Add(item.Value);
                        }
                    }
                    else if (i == 6)
                    {
                        foreach (KeyValuePair<string, string> item in allSex)
                        {
                            comboboxColumn.Items.Add(item.Value);
                        }
                    }

                    table.Columns.Insert(i, comboboxColumn);
                }
                else {
                    table.Columns.Add($"Column{i}", colNames[i]);
                }
            }
            
            cmd.Connection = connection;
            cmd.CommandText = query;

            object[] fieldValue = new object[colNames.Count];

            using (DbDataReader reader = cmd.ExecuteReader())
            {
                if (reader.HasRows)
                {
                    for (int i = 0; reader.Read(); i++)
                    {
                        table.Rows.Add();
                        for (int j = 0; j < colNames.Count; j++)
                        {
                            if( j == 1 || j == 2 || j == 6)
                            {
                                DataGridViewComboBoxCell comboboxCell = new DataGridViewComboBoxCell();

                                if( j == 1) {
                                    foreach (KeyValuePair<string, string> item in allOwners)
                                    {
                                        comboboxCell.Items.Add(item.Value);
                                    }
                                } else if( j == 2) {
                                    foreach (KeyValuePair<string, string> item in allVeterinarian)
                                    {
                                        comboboxCell.Items.Add(item.Value);
                                    }
                                } else if (j == 6) {
                                    foreach (KeyValuePair<string, string> item in allSex)
                                    {
                                        comboboxCell.Items.Add(item.Value);
                                    }
                                }

                                comboboxCell.Value = reader.GetString(j);
                                table.Rows[i].Cells[j] = comboboxCell;
                            } else {
                                table.Rows[i].Cells[j].Value = reader.GetString(j).ToString();
                            }  
                        }
                    }
                }
            }
        }

        public void ShowTableTreatment(DataGridView table, string query, List<string> colNames)
        {
            MySqlCommand cmd = new MySqlCommand();

            for (int i = 0; i < colNames.Count; i++)
            {
                if (i == 1 || i == 2)
                {
                    DataGridViewComboBoxColumn comboboxColumn = new DataGridViewComboBoxColumn();
                    comboboxColumn.DataPropertyName = $"Column{i}";
                    comboboxColumn.HeaderText = colNames[i];

                    if (i== 1)
                    {
                        foreach (KeyValuePair<string, string> item in allDiagnosis)
                        {
                            comboboxColumn.Items.Add(item.Value);
                        }
                    }
                    else if (i == 2)
                    {
                        foreach (KeyValuePair<string, string> item in allDrug)
                        {
                            comboboxColumn.Items.Add(item.Value);
                        }
                    }

                    table.Columns.Insert(i, comboboxColumn);
                }
                else
                {
                    table.Columns.Add($"Column{i}", colNames[i]);
                }
            }

            cmd.Connection = connection;
            cmd.CommandText = query;

            object[] fieldValue = new object[colNames.Count];

            using (DbDataReader reader = cmd.ExecuteReader())
            {
                if (reader.HasRows)
                {
                    for (int i = 0; reader.Read(); i++)
                    {
                        table.Rows.Add();
                        for (int j = 0; j < colNames.Count; j++)
                        {
                            if (j == 1 || j == 2)
                            {
                                DataGridViewComboBoxCell comboboxCell = new DataGridViewComboBoxCell();

                                if (j == 1)
                                {
                                    foreach (KeyValuePair<string, string> item in allDiagnosis)
                                    {
                                        comboboxCell.Items.Add(item.Value);
                                    }
                                }
                                else if (j == 2)
                                {
                                    foreach (KeyValuePair<string, string> item in allDrug)
                                    {
                                        comboboxCell.Items.Add(item.Value);
                                    }
                                }

                                comboboxCell.Value = reader.GetString(j);
                                table.Rows[i].Cells[j] = comboboxCell;
                            }
                            else
                            {
                                table.Rows[i].Cells[j].Value = reader.GetString(j).ToString();
                            }
                        }
                    }
                }
            }
        }

        public void ShowTableMedicalCard(DataGridView table, string query, List<string> colNames)
        {
            MySqlCommand cmd = new MySqlCommand();

            for (int i = 0; i < colNames.Count; i++)
            {
                if (i == 1 || i == 2 || i == 3)
                {
                    DataGridViewComboBoxColumn comboboxColumn = new DataGridViewComboBoxColumn();
                    comboboxColumn.DataPropertyName = $"Column{i}";
                    comboboxColumn.HeaderText = colNames[i];
                    if( i == 1)
                    {
                        foreach (KeyValuePair<string, string> item in allPets)
                        {
                            comboboxColumn.Items.Add(item.Value);
                        }
                    }
                    else if (i == 2)
                    {
                        foreach (KeyValuePair<string, string> item in allVeterinarian)
                        {
                            comboboxColumn.Items.Add(item.Value);
                        }
                    }
                    else if (i == 3)
                    {
                        foreach (KeyValuePair<string, string> item in allTreatments)
                        {
                            comboboxColumn.Items.Add(item.Value);
                        }
                    }
                    table.Columns.Insert(i, comboboxColumn);
                }
                else
                {
                    table.Columns.Add($"Column{i}", colNames[i]);
                }
            }

            cmd.Connection = connection;
            cmd.CommandText = query;

            object[] fieldValue = new object[colNames.Count];

            using (DbDataReader reader = cmd.ExecuteReader())
            {
                if (reader.HasRows)
                {
                    for (int i = 0; reader.Read(); i++)
                    {
                        table.Rows.Add();
                        for (int j = 0; j < colNames.Count; j++)
                        {
                            if (j == 1 || j == 2 || j == 3)
                            {
                                DataGridViewComboBoxCell comboboxCell = new DataGridViewComboBoxCell();

                                if (j == 1)
                                {
                                    foreach (KeyValuePair<string, string> item in allPets)
                                    {
                                        comboboxCell.Items.Add(item.Value);
                                    }
                                }
                                else if (j == 2)
                                {
                                    foreach (KeyValuePair<string, string> item in allVeterinarian)
                                    {
                                        comboboxCell.Items.Add(item.Value);
                                    }
                                }
                                else if (j == 3)
                                {
                                    foreach (KeyValuePair<string, string> item in allTreatments)
                                    {
                                        comboboxCell.Items.Add(item.Value);
                                    }
                                }

                                comboboxCell.Value = reader.GetString(j);
                                table.Rows[i].Cells[j] = comboboxCell;
                            }
                            else
                            {
                                table.Rows[i].Cells[j].Value = reader.GetString(j).ToString();
                            }
                        }
                    }
                }
            }
        }

        public Dictionary<string, string> GetDictionary(string sql)
        {
            Dictionary<string, string> allColumn = new Dictionary<string, string>();
            MySqlCommand cmd = new MySqlCommand();

            cmd.Connection = connection;
            cmd.CommandText = sql;

            using (DbDataReader reader = cmd.ExecuteReader())
            {
                if (reader.HasRows)
                {
                    while (reader.Read())
                    {
                        allColumn.Add(reader.GetString(0), reader.GetString(1));
                    }
                }
            }

            return allColumn;
        }

        public string SelectOneCell(string sql)
        {
            MySqlCommand command = new MySqlCommand(sql, connection);
            return command.ExecuteScalar().ToString();
        }

        public void TransformationTable(string query)
        {
            MySqlCommand cmd = new MySqlCommand();

            cmd.Connection = connection;
            cmd.CommandText = query;

            cmd.ExecuteNonQuery();
        }

        public void AddRow(DataGridView table)
        {
            string colNames = "";
            string values = "";
            bool fail = false;

            for (int i = numRows - 1; i < table.Rows.Count - 1; i++)
            {
                for (int j = 0; j < table.Rows[i].Cells.Count; j++)
                {
                    if (table.Rows[i].Cells[j].Value == null)
                    {
                        MessageBox.Show("Вы заполнили не все поля");
                        return;
                    }
                    colNames += $"`{table.Columns[j].HeaderText}`, ";
                }  
            }

            colNames = colNames.Substring(0, colNames.Length - 2);

            int selectedColumn = table.CurrentCell.ColumnIndex;
            string query = "",
                   res = "",
                   tableSearchName = "",
                   colSearchName = "";

            for (int i = numRows - 1; i < table.Rows.Count - 1; i++)
            {
                values += "(";
                for (int j = 0; j < table.Rows[i].Cells.Count; j++)
                {
                    switch (table.Columns[j].HeaderText)
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

                    if (table.Columns[j].GetType().ToString() == "System.Windows.Forms.DataGridViewComboBoxColumn")
                    {
                        res = SelectOneCell(
                            $"SELECT `id` " +
                            $"FROM `{tableSearchName}` " +
                            $"WHERE `{colSearchName}` = '{table.Rows[i].Cells[j].Value.ToString()}' ");

                        values += $"'{res}', ";
                    } else
                    {
                        values += $"'{table.Rows[i].Cells[j].Value.ToString()}', ";
                    }
                }
                values = values.Substring(0, values.Length - 2);
                values += "), ";
            }

            values = values.Substring(0, values.Length - 2);

            query = $"INSERT INTO `{selectedTable}` ({colNames}) VALUES {values}";

            try
            {
                TransformationTable(query);
            } catch(Exception ex) {
                fail = true;
                MessageBox.Show("При добавлении произошла ошибка");
            }

            if( fail == false)
            {
                MessageBox.Show("Данные успешно добавлены");
            }
            
        }
    }
}
