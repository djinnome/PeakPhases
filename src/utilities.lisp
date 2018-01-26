(defun is-beginning-of-pathway? (rxn pwy)
   (= 0  (length (get-predecessors rxn pwy))))
 
(defun is-end-of-pathway? (rxn pwy)
   (= 0  (length (get-successors rxn pwy))))
 
(defun is-branch-point-of-pathway? (rxn pwy)
  (< 1 (length (get-successors rxn pwy))))

(defun get-func-of-pathway (filename func)
  (tofile filename
	  (format t "Gene	Reaction	PathwayID	PathwayName~%")
	  (loop for pwy in (all-pathways :small-molecule )
		do (loop for rxn in (gsvs pwy 'reaction-list)
			 when (funcall func rxn pwy)
			 do (loop for gene in (genes-of-reaction rxn)
				  do (format t "~A	~A	~A	~A~%"
					     (get-slot-value gene 'accession-2)
					     (get-frame-name rxn)
					     (get-frame-name pwy)
					     (get-name-string pwy)
					     ))))))


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
