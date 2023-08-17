local colorscheme = 'rosebones'
vim.o.termguicolors = true

--require("lualine").setup {
--	options = { theme = colorscheme }, -- or any other flavor
--}

local is_ok, _ = pcall(vim.cmd, "colorscheme " .. colorscheme)
if not is_ok then
    vim.notify('colorscheme ' .. colorscheme .. ' not found!')
    return
end

-- vim.o.colorscheme = colorscheme

vim.g.zenbones_solid_line_nr = true
vim.g.zenbones_darken_comments = 33


