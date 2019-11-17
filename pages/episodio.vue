<template>
  
  <v-container>
    <v-row
      :align="alignment"
      :justify="justify"
      style="height: 300px;"
    >
      <v-card v-for
        style='margin-top:2%; margin-left: 5%'
        outlined
      >
        <v-list-item three-line>
          <v-list-item-content>
           
            <v-list-item-title class="headline mb-1">Episodio</v-list-item-title>
            <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-row>
  </v-container>
</template>