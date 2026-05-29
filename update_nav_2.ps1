$target = "                    <a href=`"investorcontact.html`">Investor Compliant Redressal</a>`n                </div>`n            </div>`n        </div>"
$targetCRLF = "                    <a href=`"investorcontact.html`">Investor Compliant Redressal</a>`r`n                </div>`r`n            </div>`r`n        </div>"

$replacement = "                    <a href=`"investorcontact.html`">Investor Compliant Redressal</a>`n                </div>`n            </div>`n            <div class=`"nav-dropdown`">`n                <a href=`"javascript:void(0)`" class=`"nav-link`">More</a>`n                <div class=`"nav-dropdown-menu`">`n                    <a href=`"blog.html`">Blog</a>`n                    <a href=`"career.html`">Career</a>`n                    <a href=`"gallery.html`">Gallery</a>`n                    <a href=`"certifications.html`">Certifications</a>`n                    <a href=`"esg.html`">ESG</a>`n                </div>`n            </div>`n        </div>"
$replacementCRLF = "                    <a href=`"investorcontact.html`">Investor Compliant Redressal</a>`r`n                </div>`r`n            </div>`r`n            <div class=`"nav-dropdown`">`r`n                <a href=`"javascript:void(0)`" class=`"nav-link`">More</a>`r`n                <div class=`"nav-dropdown-menu`">`r`n                    <a href=`"blog.html`">Blog</a>`r`n                    <a href=`"career.html`">Career</a>`r`n                    <a href=`"gallery.html`">Gallery</a>`r`n                    <a href=`"certifications.html`">Certifications</a>`r`n                    <a href=`"esg.html`">ESG</a>`r`n                </div>`r`n            </div>`r`n        </div>"

Get-ChildItem -Path "c:\Users\Asus\Downloads\progenneww\*.html" -Exclude "index.html" | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    $modified = $false
    if ($content.Contains($targetCRLF)) {
        $content = $content.Replace($targetCRLF, $replacementCRLF)
        $modified = $true
    } elseif ($content.Contains($target)) {
        $content = $content.Replace($target, $replacement)
        $modified = $true
    }
    if ($modified) {
        Set-Content -Path $_.FullName -Value $content -NoNewline
        Write-Host "Updated $($_.Name)"
    }
}
