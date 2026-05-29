$files = Get-ChildItem -Path "c:\Users\Asus\Downloads\progenneww\*.html"
foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    $newContent = $content -replace '>Contact Us \?</a>', '>Contact Us ⚡</a>'
    $newContent = $newContent -replace '>Contact Us âš¡</a>', '>Contact Us ⚡</a>'
    if ($content -cne $newContent) {
        Set-Content -Path $file.FullName -Value $newContent -Encoding UTF8
        Write-Host "Updated $($file.Name)"
    }
}
