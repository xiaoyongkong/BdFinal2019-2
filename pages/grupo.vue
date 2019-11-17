<template>
  <div class="fill-height d-flex flex-column align-center justify-center">
    <div>
      Desenvolvedores
    </div>
    <v-list>
      <v-list-item
        v-for="membro in group"
        :key="membro.name"
      >
        <v-list-item-avatar>
          <v-img :src="membro.avatar" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title v-text="membro.name" />
          <v-list-item-subtitle>DRE: {{membro.DRE}}</v-list-item-subtitle>
        </v-list-item-content>

      </v-list-item>
    </v-list>
    
  </div>
</template>

<script>
export default {
  data: () => ({
    group: [
      { name: 'Vinicius de Andrade Flores', DRE: '115048056' , avatar: 'https://scontent.fsdu5-1.fna.fbcdn.net/v/t1.0-9/12809608_939725609450925_5307637718253686847_n.jpg?_nc_cat=103&_nc_oc=AQk0D-M7t1ZwiDd2qEWR3YN3eezi4eXc1AI9mQtz-mmI8HN6MZt5bltmkcm4VuetcP4&_nc_ht=scontent.fsdu5-1.fna&oh=3c0e289739bdb1861cbcc9c16c243964&oe=5E84FAC2'},
      { name: 'Xiao Kong', DRE: '114176987', avatar: 'https://scontent.fsdu5-1.fna.fbcdn.net/v/t1.0-9/148992_529111510446515_1556373056_n.jpg?_nc_cat=108&_nc_oc=AQn_ql2M8hZXzhHSuqZmvqOvjf74SSuvD2dEVT7b2kUVGQf0YGTNJ6ShtHQGyqrT3X4&_nc_ht=scontent.fsdu5-1.fna&oh=0245ad3d2fd40e4157a59f437927c121&oe=5E3E486B'},
      { name: 'Larissa Galeno', DRE: '116083017', avatar: 'https://scontent.fsdu5-1.fna.fbcdn.net/v/t1.0-9/p960x960/48369591_2167422653308548_3944404377309020160_o.jpg?_nc_cat=108&_nc_oc=AQlvpvIfBO7Ve0ey6fxkmnciV76fEHUa9JW607yXtSVgZoVo21b5sfqjsxWNVcieAmM&_nc_ht=scontent.fsdu5-1.fna&oh=8423854a26f6d48e05384a4d01909015&oe=5E497B1B'},
      { name: 'Matheus Figueiredo', DRE: '116023504', avatar: 'https://scontent.fsdu5-1.fna.fbcdn.net/v/t1.0-9/17352079_960456154091201_8685762516091258087_n.jpg?_nc_cat=102&_nc_oc=AQnq1KAHvLGWrkUnKH9jFsC4MFZD7Vv1_NRJW1L2KC7Pyhyvvb0s2BHuBukQikK4ePY&_nc_ht=scontent.fsdu5-1.fna&oh=04ec1f1938d51c94734bb2b17ff39ff9&oe=5E54308F'},
      { name: 'João Virgilio', DRE: '115167402', avatar: 'https://scontent.fsdu5-1.fna.fbcdn.net/v/t1.0-9/52682035_1615440425266793_6818224246976675840_n.jpg?_nc_cat=100&_nc_oc=AQla476LI2qARrJRXfVpc1AeSoCqESGVE1rV9X2B22tIgPHemrjUs9Cplf5vBrXt3g4&_nc_ht=scontent.fsdu5-1.fna&oh=de567aed5f5bcf358ad21e61cb18bf9b&oe=5E586B4F'}
    ]
  })
}
</script>