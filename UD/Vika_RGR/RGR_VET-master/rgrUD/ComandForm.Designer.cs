namespace rgrUD
{
    partial class ComandForm
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.ComandPanel = new System.Windows.Forms.Panel();
            this.comboBoxTable = new System.Windows.Forms.ComboBox();
            this.tableLayoutPanel1 = new System.Windows.Forms.TableLayoutPanel();
            this.closeButton = new System.Windows.Forms.Label();
            this.ButtonDelete = new System.Windows.Forms.Button();
            this.ButtonUpdate = new System.Windows.Forms.Button();
            this.ButtonAdd = new System.Windows.Forms.Button();
            this.ButtonSelect = new System.Windows.Forms.Button();
            this.ComandPanel.SuspendLayout();
            this.SuspendLayout();
            // 
            // ComandPanel
            // 
            this.ComandPanel.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(32)))), ((int)(((byte)(38)))), ((int)(((byte)(61)))));
            this.ComandPanel.Controls.Add(this.comboBoxTable);
            this.ComandPanel.Controls.Add(this.tableLayoutPanel1);
            this.ComandPanel.Controls.Add(this.closeButton);
            this.ComandPanel.Controls.Add(this.ButtonDelete);
            this.ComandPanel.Controls.Add(this.ButtonUpdate);
            this.ComandPanel.Controls.Add(this.ButtonAdd);
            this.ComandPanel.Controls.Add(this.ButtonSelect);
            this.ComandPanel.Dock = System.Windows.Forms.DockStyle.Fill;
            this.ComandPanel.Location = new System.Drawing.Point(0, 0);
            this.ComandPanel.Name = "ComandPanel";
            this.ComandPanel.Size = new System.Drawing.Size(800, 450);
            this.ComandPanel.TabIndex = 0;
            this.ComandPanel.MouseDown += new System.Windows.Forms.MouseEventHandler(this.ComandPanel_MouseDown);
            this.ComandPanel.MouseMove += new System.Windows.Forms.MouseEventHandler(this.ComandPanel_MouseMove);
            // 
            // comboBoxTable
            // 
            this.comboBoxTable.FormattingEnabled = true;
            this.comboBoxTable.Location = new System.Drawing.Point(34, 64);
            this.comboBoxTable.Name = "comboBoxTable";
            this.comboBoxTable.Size = new System.Drawing.Size(121, 21);
            this.comboBoxTable.TabIndex = 18;
            this.comboBoxTable.Text = "Выберите таблицу";
            this.comboBoxTable.SelectedIndexChanged += new System.EventHandler(this.comboBoxTable_SelectedIndexChanged);
            // 
            // tableLayoutPanel1
            // 
            this.tableLayoutPanel1.ColumnCount = 2;
            this.tableLayoutPanel1.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 50F));
            this.tableLayoutPanel1.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 50F));
            this.tableLayoutPanel1.Location = new System.Drawing.Point(307, 64);
            this.tableLayoutPanel1.Name = "tableLayoutPanel1";
            this.tableLayoutPanel1.RowCount = 2;
            this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 50F));
            this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 50F));
            this.tableLayoutPanel1.Size = new System.Drawing.Size(450, 265);
            this.tableLayoutPanel1.TabIndex = 17;
            // 
            // closeButton
            // 
            this.closeButton.AutoSize = true;
            this.closeButton.Cursor = System.Windows.Forms.Cursors.Hand;
            this.closeButton.Font = new System.Drawing.Font("Castellar", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.closeButton.Location = new System.Drawing.Point(756, 13);
            this.closeButton.Name = "closeButton";
            this.closeButton.Size = new System.Drawing.Size(31, 25);
            this.closeButton.TabIndex = 16;
            this.closeButton.Text = "X";
            this.closeButton.Click += new System.EventHandler(this.closeButton_Click);
            this.closeButton.MouseEnter += new System.EventHandler(this.closeButton_MouseEnter);
            this.closeButton.MouseLeave += new System.EventHandler(this.closeButton_MouseLeave);
            // 
            // ButtonDelete
            // 
            this.ButtonDelete.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.ButtonDelete.Location = new System.Drawing.Point(609, 409);
            this.ButtonDelete.Name = "ButtonDelete";
            this.ButtonDelete.Size = new System.Drawing.Size(188, 38);
            this.ButtonDelete.TabIndex = 12;
            this.ButtonDelete.Text = "УДАЛИТЬ";
            this.ButtonDelete.UseVisualStyleBackColor = true;
            // 
            // ButtonUpdate
            // 
            this.ButtonUpdate.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.ButtonUpdate.Location = new System.Drawing.Point(405, 409);
            this.ButtonUpdate.Name = "ButtonUpdate";
            this.ButtonUpdate.Size = new System.Drawing.Size(198, 38);
            this.ButtonUpdate.TabIndex = 13;
            this.ButtonUpdate.Text = "ИЗМЕНИТЬ";
            this.ButtonUpdate.UseVisualStyleBackColor = true;
            // 
            // ButtonAdd
            // 
            this.ButtonAdd.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.ButtonAdd.Location = new System.Drawing.Point(206, 409);
            this.ButtonAdd.Name = "ButtonAdd";
            this.ButtonAdd.Size = new System.Drawing.Size(193, 38);
            this.ButtonAdd.TabIndex = 14;
            this.ButtonAdd.Text = "ДОБАВИТЬ";
            this.ButtonAdd.UseVisualStyleBackColor = true;
            // 
            // ButtonSelect
            // 
            this.ButtonSelect.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.ButtonSelect.Location = new System.Drawing.Point(3, 409);
            this.ButtonSelect.Name = "ButtonSelect";
            this.ButtonSelect.Size = new System.Drawing.Size(197, 38);
            this.ButtonSelect.TabIndex = 15;
            this.ButtonSelect.Text = "ПРОСМОТРЕТЬ";
            this.ButtonSelect.UseVisualStyleBackColor = true;
            this.ButtonSelect.Click += new System.EventHandler(this.button1_Click);
            // 
            // ComandForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.ComandPanel);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None;
            this.Name = "ComandForm";
            this.Text = "ComandForm";
            this.ComandPanel.ResumeLayout(false);
            this.ComandPanel.PerformLayout();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Panel ComandPanel;
        private System.Windows.Forms.Button ButtonDelete;
        private System.Windows.Forms.Button ButtonUpdate;
        private System.Windows.Forms.Button ButtonAdd;
        private System.Windows.Forms.Label closeButton;
        private System.Windows.Forms.TableLayoutPanel tableLayoutPanel1;
        private System.Windows.Forms.ComboBox comboBoxTable;
        private System.Windows.Forms.Button ButtonSelect;
    }
}