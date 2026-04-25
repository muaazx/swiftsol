$files = Get-ChildItem -Filter *.html
foreach ($f in $files) {
    if ($f.Name -eq "privacy.html") { continue }
    $content = Get-Content $f.FullName -Raw
    
    # Desktop nav
    $content = $content -replace '<a href="TP\.html#section-2">(\s*)<h4>Privacy Policy</h4>', '<a href="privacy.html">$1<h4>Privacy Policy</h4>'
    
    # Mobile nav
    $content = $content -replace '<a href="TP\.html#section-2">Privacy Policy</a>', '<a href="privacy.html">Privacy Policy</a>'
    
    # Footer link (where it was wrongly pointed to section-1)
    $content = $content -replace '<a href="TP\.html#section-1">Privacy Policy</a>', '<a href="privacy.html">Privacy Policy</a>'
    
    # Also fix footer link for Terms if they had TP.html#section-2 for Terms
    $content = $content -replace '<a href="TP\.html#section-2">\s*Terms\s*</a>', '<a href="TP.html#section-1">Terms & Conditions</a>'
    
    Set-Content $f.FullName $content
}
