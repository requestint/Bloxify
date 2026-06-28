local RbxHttpService = require("./Packages/RbxHttpService/RbxHttpService")
local Response = RbxHttpService.RequestAsync({
	url = "https://api.github.com",
	method = "GET",
})

print(RbxHttpService.Features)
RbxHttpService.Batcher:Start()

repeat
	task.wait()
until Response ~= nil
print("Fetching API", Response)

RbxHttpService.Batcher:Stop()
