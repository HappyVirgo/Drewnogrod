// AOS Animation
AOS.init();


// Sidenav Show/Hide
function openNav() {
  $("#mySidenav").css("width", "75vw");
}

function closeNav() {
  $("#mySidenav").css("width", "0");
}


// Sidenav Dropdown Show/Hide
var dropdown = document.getElementsByClassName("dropdown-btn");

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}


// Navbar Shadow Show/Hide
$(document).ready(function () {
  var scroll_pos = 0;
  $(document).scroll(function () {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 0) {
      $(".navbar").addClass("shadow-sm");
    } else {
      $(".navbar").removeClass("shadow-sm");
    }
  });
});


// Owl Carousels
$(document).ready(function () {

  // Homepage Production Carousel
  $("#productionCarousel").owlCarousel({
    autoPlay: 5000,
    items: 3,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [991, 2],
    itemsTablet: [768, 1],
  });

  $(".production-carousel-next").click(function () {
    $("#productionCarousel").trigger('owl.prev');
  })
  $(".production-carousel-prev").click(function () {
    $("#productionCarousel").trigger('owl.next');
  })

  // Homepage News Carousel
  $("#newsCarousel").owlCarousel({
    autoPlay: 5000,
    items: 3,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [991, 2],
    itemsTablet: [768, 1],
    pagination: false
  });

  $(".news-carousel-next").click(function () {
    $("#newsCarousel").trigger('owl.prev');
  })
  $(".news-carousel-prev").click(function () {
    $("#newsCarousel").trigger('owl.next');
  })

  // About page Reference Carousel
  $("#referenceCarousel").owlCarousel({
    autoPlay: 5000,
    items: 4,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [991, 2],
    itemsTablet: [768, 1],
  });

  $(".reference-carousel-next").click(function () {
    $("#referenceCarousel").trigger('owl.prev');
  })
  $(".reference-carousel-prev").click(function () {
    $("#referenceCarousel").trigger('owl.next');
  })

  // Technology page Nasze Carousel
  $("#naszeCarousel").owlCarousel({
    autoPlay: 5000,
    items: 5,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [991, 2],
    itemsTablet: [768, 1],
  });

  $(".nasze-carousel-next").click(function () {
    $("#naszeCarousel").trigger('owl.prev');
  })
  $(".nasze-carousel-prev").click(function () {
    $("#naszeCarousel").trigger('owl.next');
  })

  // News Details Page Mid Carousel
  $("#midCarousel").owlCarousel({
    autoPlay: 5000,
    items: 1,
    itemsDesktop: [1199, 1],
    itemsDesktopSmall: [991, 1],
    itemsTablet: [768, 1],
    itemsMobile: [479, 1],
    pagination: false
  });

  $(".mid-carousel-next").click(function () {
    $("#midCarousel").trigger('owl.prev');
  })
  $(".mid-carousel-prev").click(function () {
    $("#midCarousel").trigger('owl.next');
  })

});


// Light Galleries
$(document).ready(function () {

  // About Page Light Gallery
  $("#referenceCarousel").lightGallery({
    selector: ".reference-carousel-item"
  });

  // News Detail Page Light Galleries
  $(".news-lightbox").lightGallery({
    selector: ".news-lightbox-item"
  });

  $(".video-lightbox").lightGallery({
    selector: ".video-lightbox-item"
  });

});


// Category Pgae Sidemenu
function openMenu() {
  $("#mySidemenu").css("width", "318px");

}

function closeMenu() {
  $("#mySidemenu").css("width", "0");
}


// Category Page Filter Delete
$(document).ready(function () {
  $(".filter-delete-text").click(function () {
    $(".filter-item").hide();
    $(this).hide();
  });

  $(".filter-delete-icon-1").click(function () {
    $(".filter-item-1").hide();
  });

  $(".filter-delete-icon-2").click(function () {
    $(".filter-item-2").hide();
  });
});


// Contact Page Google Map
function myMap() {
  const center = {
    lat: 50.88774409798566,
    lng: 17.48887734066538
  };

  const drewnogrod = {
    lat: 50.88774409798566,
    lng: 20.48887734066538
  };

  const mapProp = {
    center,
    zoom: 5,
    styles: [{
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#d3d3d3"
        }]
      },
      {
        "featureType": "transit",
        "stylers": [{
            "color": "#808080"
          },
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
            "visibility": "on"
          },
          {
            "color": "#b3b3b3"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#ffffff"
        }]
      },
      {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [{
            "visibility": "on"
          },
          {
            "color": "#ffffff"
          },
          {
            "weight": 1.8
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#d7d7d7"
        }]
      },
      {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [{
            "visibility": "on"
          },
          {
            "color": "#ebebeb"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [{
          "color": "#a7a7a7"
        }]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#ffffff"
        }]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#ffffff"
        }]
      },
      {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [{
            "visibility": "on"
          },
          {
            "color": "#efefef"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#696969"
        }]
      },
      {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [{
            "visibility": "on"
          },
          {
            "color": "#737373"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#d6d6d6"
        }]
      },
      {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#dadada"
        }]
      }
    ]
  };
  const map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

  const marker = new google.maps.Marker({
    position: drewnogrod,
    map: map,
  });
}