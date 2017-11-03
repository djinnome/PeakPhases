(defun genes-of-pathway-class (class)
  (remove-duplicates 
		     (loop for pwy in (get-class-all-instances class)
			   append (genes-of-pathway pwy))
		     :test #'fequal))

(defun print-genes-of-pwy-class (filename class)
  (tofile filename
	  (format t "PathwayClass	Gene~%")
	  (loop for gene in (genes-of-pathway-class class)
		do
		(format t "~A	~A~%" (get-frame-name class)
			(get-slot-value gene 'accession-2)))))

(setq *pwy-classes-of-interest* '(|Lipid-Biosynthesis| |Amino-Acid-Biosynthesis|
				  |Carbohydrates-Biosynthesis| |Fatty-Acid-and-Lipid-Degradation|
				  |Carbohydrates-Degradation| GLYCOLYSIS-VARIANTS TCA-VARIANTS
						     |Pentose-Phosphate-Cycle| |Fermentation| |Respiration|))
