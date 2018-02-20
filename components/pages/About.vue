<template>
 <main>
    <v-container fill-height>
      <v-layout align-center justify-center>
        <v-card height="300px">
          <v-container fill-height>
            <v-layout align-center justify-center>
              <v-card-text>
                <div style="min-width:300px;text-align:center">
                  ... About ...
                </div>                  
              </v-card-text>
            </v-layout>
          </v-container>
        </v-card>
      </v-layout>
    </v-container>
  </main>
</template>

<script>
  export default {
    mounted() 
    {
      this.title()
    }
    , data () 
    {
      return {
        options: [{
          value: 'Option1',
          label: 'Option1'
        }, {
          value: 'Option2',
          label: 'Option2'
        }, {
          value: 'Option3',
          label: 'Option3'
        }, {
          value: 'Option4',
          label: 'Option4'
        }, {
          value: 'Option5',
          label: 'Option5'
        }],
        value: ''
      }
    }
    , methods: 
    {
      title() 
      {
        this.$store.dispatch( 'CHANGE_APPLICATION_TITLE', "About" )
      },
      open() 
      {
        this.$alert('This is a message', 'Title', 
        {
          confirmButtonText: 'OK',
          callback: action => 
          {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            })
          }
        })
      },
      handleClick() {
        alert('button click')
      }
    }
  }
</script>

<style scoped>
   .el-select { max-width: 100px }

  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .el-dropdown {
    vertical-align: top;
    margin-top: 5px;
  }
  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>