
function random_function()
            {
                var a=document.getElementById("input").value;
                if(a==="csv")
                {
                    var arr= ['DOC', 'HTML', 'MDB', 'ODS', 'PDF', 'RTF', 'XLS', 'XLSX', 'XML'];
                }

                else if(a==="djvu")
                {
                    var arr=['BMP', 'GIF', 'JPG', 'PCX', 'PDF', 'PNG', 'TGA', 'TIFF', 'WBMP'];
                }

                else if(a==="doc")
                {
                    var arr=['BMP', 'DOCX', 'GIF', 'HTML', 'HTML5', 'HTML-1PAGE', ' JPG', ' MHT', ' ODT', 'PCX', 'PDF', 'PDFA1A', 'PDFA1B', 'PNG', 'PS', 'THUMBNAIL', 'TIFF', ' TXT']
                }

                else if(a==="docm")
                {
                    var arr=['BMP', 'DOC', 'DOCX', 'GIF', 'HTML', 'HTML5', 'JPG', 'MHT', 'ODT', 'PCX', 'PDF', 'PDFA1A', 'PDFA1B', 'PNG', 'PS', 'RTF', 'THUMBNAIL', 'TIFF', 'TXT']
                }

                else if(a==="docx")
                {
                    var arr=['AZW3', 'BMP', 'DOC', 'EPUB', 'FB2', 'GIF', 'HTML', 'HTML5', 'HTML-1PAGE', 'HTMLZ', 'JPG', 'LIT', 'LRF', 'MHT', 'MOBI', 'ODT', 'PCX', 'PDB', 'PDF', 'PDFA1A', 'PDFA1B', 'PNG', 'PRC', 'PS', 'RB', 'RTF', 'SRB', 'TCR', 'THUMBNAIL', 'TIFF', 'TXT', 'TXTZ']
                }

                 else if(a==="eml")
                {
                    var arr=['DOC', 'HTML', 'JPG', 'MSG', 'PDF', 'RTF', 'TIFF', 'TXT', 'XLS', 'XPS'];
                }

                else if(a==="eps")
                {
                    var arr=['BMP', 'GIF', 'ICO', 'JPG', 'PCX', 'PDF', 'PNG', 'PS', 'TGA', 'THUMBNAIL', 'TIFF', 'WBMP']
                }

                else if(a==="msg")
                {
                    var arr=['DOC', 'EML', 'HTML', 'JPG', 'PDF', 'RTF', 'TIFF', 'TXT', 'XLS', 'XPS']
                }

                else if(a==="odp")
                {
                    var arr=['HTML', 'JPG', 'PCX', 'PDF', 'PNG', 'PS', 'SWT']
                }

                 else if(a==="ods")
                {
                    var arr=['CSV', 'HTML', 'JPG', 'PDF', 'PNG'];
                }

                else if(a==="odt")
                {
                    var arr=['HTML', 'JPG', 'PDF', 'PNG', 'PS', 'TXT']
                }

                else if(a==="pdf")
                {
                    var arr=['BMP', 'CSV', 'DOC', 'DOCX', 'DWG', 'DXF', 'EPUB', 'FB2', 'GIF', 'HTML', 'HTML5', 'HTML5-1PAGE', 'HTMLZ', 'JPG', 'LIT', 'LRF', 'MOBI', 'PCX', 'PDB', 'PNG', 'PPT', 'PPTX', 'PRC', 'PS', 'RB', 'RTF', 'SNB', 'SVG', 'TCR', 'THUMBNAIL', 'TIFF', 'TXT', 'TXTZ', 'XLS', 'XLSX']
                }

                else if(a==="pps")
                {
                    var arr=['HTML', 'JPG', 'ODP', 'PCX', 'PDF', 'PNG', 'PPT', 'PS', 'SWF']
                }


                 else if(a==="ppsx")
                {
                    var arr=['HTML', 'JPG', 'ODP', 'PCX', 'PDF', 'PNG', 'PPT', 'PPTX', 'PS', 'SWF'];
                }

                else if(a==="ppt")
                {
                    var arr=['HTML', 'HTML5', 'HTML5-1PAGE', 'JPG', 'ODP', 'PCX', 'PDF', 'PNG', 'PPTX', 'PS', 'SWF']
                }

                else if(a==="pptm")
                {
                    var arr=['HTML5', 'JPG', 'ODP', 'PCX', 'PDF', 'PNG', 'PPT', 'PPTX', 'PS', 'SWF']
                }

                else if(a==="pptx")
                {
                    var arr=['HTML', 'HTML5', 'HTML5-1PAGE', 'JPG', 'ODP', 'PCX', 'PDF', 'PNG', 'PPT', 'PS', 'SWF']
                }

                 else if(a==="ps")
                {
                    var arr=['BMP', 'GIF', 'JPG', 'PDF', 'THUMBNAIL', 'TIFF'];
                }

                else if(a==="pub")
                {
                    var arr=['DOC', 'HTML', 'PCX', 'PDF', 'PNG', 'PS', 'RTF', 'TXT']
                }

                else if(a==="rtf")
                {
                    var arr=['DOC', 'DOCX', 'JPG', 'PCX', 'PDF', 'PNG', 'PS']
                }

                else if(a==="txt")
                {
                    var arr=['EPUB', 'PDF']
                }

                 else if(a==="wks")
                {
                    var arr=['HTML', 'XLS', 'XLSX'];
                }

                else if(a==="wpd")
                {
                    var arr=['DOC', 'DOCX', 'ODT', 'PCX', 'PDF', 'PNG', 'PS', 'TXT']
                }

                else if(a==="wps")
                {
                    var arr=['DOC', 'DOCX', 'ODT', 'PCX', 'PDF', 'PNG', 'PS', 'TXT']
                }

                else if(a==="xlr")
                {
                    var arr=['CSV', 'HTML', 'MDB', 'ODS', 'PCX', 'PDF', 'PS', 'RTF', 'XLS', 'XLSX', 'XML']
                }

                 else if(a==="xls")
                {
                    var arr=['CSV', 'HTML', 'HTML5', 'JPG', 'MDB', 'ODS', 'PCX', 'PDF', 'PNG', 'PS', 'RTF', 'TXT', 'XLSX', 'XML'];
                }

                else if(a==="xlsm")
                {
                    var arr=['CSV', 'HTML', 'JPG', 'MDB', 'ODS', 'PCX', 'PDF', 'PNG', 'PS', 'RTF', 'TXT', 'XLS', 'XLSX', 'XML']
                }

                else if(a==="xlsx")
                {
                    var arr=['CSV', 'HTML', 'HTML5', 'JPG', 'MDB', 'ODS', 'PCX', 'PDF', 'PNG', 'PS', 'RTF', 'TXT', 'XLS', 'XML']
                }

                else if(a==="xps")
                {
                    var arr=['BMP', 'GIF', 'JPG', 'PCX', 'PDF', 'PNG', 'THUMBNAIL', 'TIFF']
                }



                var string="";

                for(i=0;i<arr.length;i++)
                {
                    string=string+"<option value="+arr[i]+">"+arr[i]+"</option>";
                }
                document.getElementById("output").innerHTML=string;
            }


