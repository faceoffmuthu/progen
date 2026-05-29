$target = "<a href=`"esg.html`">ESG</a>"
$replacement = "<a href=`"esg.html`">ESG (Environmental, Social, and Governance)</a>"

Get-ChildItem -Path "c:\Users\Asus\Downloads\progenneww\*.html" | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    if ($content -match [regex]::Escape($target)) {
        $content = $content.Replace($target, $replacement)
        Set-Content -Path $_.FullName -Value $content -NoNewline -Encoding UTF8
        Write-Host "Updated $($_.Name)"
    }
}
