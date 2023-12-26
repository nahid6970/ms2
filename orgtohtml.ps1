# PowerShell script to extract and convert Org Mode content to HTML

# Define the file paths
$inputFilePath = "C:\Users\nahid\OneDrive\Git\ms2\2.org"  # Update with your Org Mode file name
$outputFilePath = "C:\Users\nahid\OneDrive\Git\ms2\tab.html"  # Update with your desired HTML file name

# Read the content of the Org Mode file
$orgContent = Get-Content -Path $inputFilePath -Raw

# Extract lines between src_start_org and src_end_org
$pattern = '(?ms)(?<=src_start_org).*?(?=\s*src_end_org)'
$matches = [regex]::Match($orgContent, $pattern)

if ($matches.Success) {
    $orgSection = $matches.Value

    # Save the extracted content to a temporary file
    $tempFilePath = [System.IO.Path]::GetTempFileName()
    $orgSection | Set-Content -Path $tempFilePath

    # Convert the Org Mode content to HTML using Pandoc
    Start-Process pandoc -ArgumentList "$tempFilePath -o $outputFilePath" -Wait

    # Display a message
    Write-Host "Conversion complete. HTML file saved to $outputFilePath"
    
    # Remove the temporary file
    Remove-Item -Path $tempFilePath -Force
} else {
    Write-Host "No content found between src_start_org and src_end_org"
}
