$appendCss = @"

/* Specific styling for the More dropdown (last-child) to match the home page, overriding the mega menu styles */
@media (min-width: 1001px) {
    nav .nav-links .nav-dropdown:last-child .nav-dropdown-menu,
    nav .nav-links .nav-dropdown:last-child:hover .nav-dropdown-menu {
        left: auto !important;
        right: 0 !important;
        width: auto !important;
        min-width: 180px !important;
        max-width: none !important;
        padding: 15px 25px !important;
        display: flex !important;
        flex-direction: column !important;
        border-radius: 12px !important;
    }
    nav .nav-links .nav-dropdown:last-child:not(:hover) .nav-dropdown-menu {
        display: none !important;
    }
    nav .nav-links .nav-dropdown:last-child .nav-dropdown-menu a {
        color: #4b5563 !important;
        padding: 14px 0 !important;
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif !important;
        font-size: 0.95rem !important;
        font-weight: 400 !important;
        border-bottom: 1px solid #e5e7eb !important;
    }
    nav .nav-links .nav-dropdown:last-child .nav-dropdown-menu a:last-child {
        border-bottom: none !important;
    }
    nav .nav-links .nav-dropdown:last-child .nav-dropdown-menu a:hover {
        background-color: transparent !important;
        color: #10b981 !important;
    }
}
"@

Add-Content -Path "c:\Users\Asus\Downloads\progenneww\assets\css\investor.css" -Value $appendCss
Write-Host "Appended styles to investor.css"
