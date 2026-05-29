$aboutHtml = Get-Content "c:\Users\Asus\Downloads\progenneww\about.html" -Raw

$startIndex = $aboutHtml.IndexOf("<!-- About Info Section -->")
$footerIndex = $aboutHtml.IndexOf("<!-- Footer Section -->")

if ($startIndex -lt 0 -or $footerIndex -lt 0) {
    Write-Error "Could not find sections in about.html"
    exit 1
}

$headerAndBanner = $aboutHtml.Substring(0, $startIndex)
$footerAndScripts = $aboutHtml.Substring($footerIndex)

$pages = @("blog", "career", "gallery", "certifications", "esg")
foreach ($p in $pages) {
    $title = (Get-Culture).TextInfo.ToTitleCase($p)
    if ($p -eq "esg") { $title = "ESG" }
    
    $customHeader = $headerAndBanner -replace "<title>About Us - Progen Solar</title>", "<title>$title - Progen Solar</title>"
    $customHeader = $customHeader -replace "<span>Who We Are</span>", "<span>$title</span>"
    $customHeader = $customHeader -replace "<h1 class=`"about-banner-title`">About us</h1>", "<h1 class=`"about-banner-title`">Coming Soon</h1>"
    
    $pageContent = $customHeader + "`r`n`r`n    <!-- Coming Soon Content -->`r`n    <section style=`"padding: 100px 20px; text-align: center; min-height: 30vh; display: flex; align-items: center; justify-content: center; flex-direction: column;`">`r`n        <h2 style=`"font-size: 3rem; color: #3ca2fa; margin-bottom: 20px; font-family: 'Host Grotesk', sans-serif;`">Stay Tuned!</h2>`r`n        <p style=`"font-size: 1.2rem; color: #555; max-width: 600px; line-height: 1.6; font-family: 'Host Grotesk', sans-serif;`">We are working hard to bring you the $title page. Please check back later.</p>`r`n    </section>`r`n`r`n" + $footerAndScripts
    
    Set-Content -Path "c:\Users\Asus\Downloads\progenneww\$p.html" -Value $pageContent -Encoding UTF8
    Write-Host "Created $p.html"
}
