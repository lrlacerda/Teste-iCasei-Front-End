# Dockerfile
FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["BFF/BFF.csproj", "BFF/"]
RUN dotnet restore "BFF/BFF.csproj"
COPY . .
WORKDIR "/src/BFF"
RUN dotnet build "BFF.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "BFF.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "BFF.dll"]
