
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0">
   
    <title>My Warehouse</title>
    <link rel="stylesheet" type="text/css" href="<?php echo base_url()?>assets/css/bootstrap.min.css">
    
    <link rel="stylesheet" type="text/css" href="<?php echo base_url()?>assets/css/style.css">
 
</head>
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        Dashboard
        <small>Control panel</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="<?php echo base_url('dashboard') ?>"><i class="fa fa-dashboard"></i> Home</a></li>
        <li class="active">Dashboard</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
      <!-- Small boxes (Stat box) -->
      <?php if($is_admin == true): ?>

        <div class="row">
          <div class="col-lg-3 col-xs-6">
                      <div class="ad-hom-box ad-hom-box-1">
             <span class="ad-hom-col-com ad-hom-col-6"><i class="fa fa-cubes"></i></span>
             <a href="<?php echo base_url('products/') ?>">
            <div class="ad-hom-view-com">
             <p style="font-size: 20px !important;"><i class="fa  fa-arrow-up up"></i> Products</p>
             <h3>(<?php echo $total_products ?>)</h3>
            </div>
            </a>
            </div>
       </div>
         
          <!-- ./col -->
          <div class="col-lg-3 col-xs-6">
                      <div class="ad-hom-box ad-hom-box-1">
             <span class="ad-hom-col-com ad-hom-col-8"><i class="fa fa-usd"></i></span>
            <a href="<?php echo base_url('orders/') ?>">
            <div class="ad-hom-view-com">
             <p style="font-size: 20px !important;"><i class="fa fa-usd" ></i>Paid Orders</p>
             <h3>(<?php echo $total_paid_orders ?>)</h3>
            </div>
            </a>
            </div>
                    </div>
         
          <!-- ./col -->
          <div class="col-lg-3 col-xs-6">
                      <div class="ad-hom-box ad-hom-box-1">
             <span class="ad-hom-col-com ad-hom-col-4"><i class="fa fa-users"></i></span>
             <a href="<?php echo base_url('users/') ?>">
            <div class="ad-hom-view-com">
             <p style="font-size: 20px !important;"><i class="fa  fa-arrow-up up"></i>Users</p>
             <h3>(<?php echo $total_users; ?>)</h3>
            </div>
            </a>
            </div>
                    </div>
         
          <!-- ./col -->
          <div class="col-lg-3 col-xs-6">
                      <div class="ad-hom-box ad-hom-box-1">
             <span class="ad-hom-col-com ad-hom-col-1"><i class="fa fa-calendar-check-o"></i></span>
             <a href="<?php echo base_url('stores/') ?>">
            <div class="ad-hom-view-com">
             <p style="font-size: 20px !important;"><i class="fa  fa-arrow-up up"></i> Stores</p>
             <h3>(<?php echo $total_stores ?>)</h3>
            </div>
            </a>
            </div>
                    </div>
          
          <!-- ./col -->

          <div class="col-lg-3 col-xs-6">
                      <div class="ad-hom-box ad-hom-box-1">
             <span class="ad-hom-col-com ad-hom-col-2"><i class="fa fa-newspaper-o"></i></span>
             <a href="<?php echo base_url('groups/') ?>">
            <div class="ad-hom-view-com">
             <p style="font-size: 20px !important;"><i class="fa  fa-arrow-up up"></i> Groups</p>
             <h3>(<?php echo $total_group; ?>)</h3>
            </div>
            </a>
            </div>
                    </div>


            <div class="col-lg-3 col-xs-6">
                      <div class="ad-hom-box ad-hom-box-1">
             <span class="ad-hom-col-com ad-hom-col-5"><i class="fa fa-cubes"></i></span>
             <a href="<?php echo base_url('brands/') ?>">
            <div class="ad-hom-view-com">
             <p style="font-size: 20px !important;"><i class="fa  fa-arrow-up up"></i> Brand</p>
             <h3>(<?php echo $total_brand; ?>)</h3>
            </div>
            </a>
            </div>
                    </div>
          
          <div class="col-lg-3 col-xs-6">
                      <div class="ad-hom-box ad-hom-box-1">
             <span class="ad-hom-col-com ad-hom-col-7"><i class="fa fa-snowflake-o"></i></span>
            <a href="<?php echo base_url('category/') ?>">
            <div class="ad-hom-view-com">
             <p style="font-size: 20px !important;"><i class="fa  fa-arrow-up up"></i> Category</p>
             <h3>(<?php echo $total_cate; ?>)</h3>
            </div>
            </a>
            </div>
                    </div>

          
        </div>
        <!-- /.row -->
      <?php endif; ?>
      

    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->

  <script type="text/javascript">
    $(document).ready(function() {
      $("#dashboardMainMenu").addClass('active');
    }); 
  </script>


    
   