package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
	"go.mongodb.org/mongo-driver/mongo"
)

type Carro struct {
	Placa  string `json:Placa, omitempty`
	Marca  string `json: Marca, omitempty`
	Modelo int    `json: Modelo, omitempty`
	Serie  string `json: Serie, omitempty`
	Color  string `json: Color, omitemptyt`
}

var client *mongo.Client

func indexRoute(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Welcome to my API")
	fmt.Fprintf(w, "Si Jala")
}

func create(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Crear Carro")
}

func read(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Leer Carros")
}
func update(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Actualizar Carro")
}
func delete(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Borrar Carro")
}

func main() {
	fmt.Println("Starting Application")

	router := mux.NewRouter().StrictSlash(true)

	router.HandleFunc("/", indexRoute)
	router.HandleFunc("/create", create).Methods("GET")
	router.HandleFunc("/read", read).Methods("GET")
	router.HandleFunc("/update", update).Methods("GET")
	router.HandleFunc("/delete", delete).Methods("GET")

	fmt.Println("Server on port", 4000)
	log.Fatal(http.ListenAndServe(":4000", router))
}
