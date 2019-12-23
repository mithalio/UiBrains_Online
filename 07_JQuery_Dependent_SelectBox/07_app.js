let brands=[{id:1,name:'Maruthi Suzuki'},{id:2,name:'Suzuki NEXA'},
    {id:3,name:'TATA Motors'},{id:4,name:'Hundai Motors'}];
let models=[{id:1,brand_id:1,name:'Maruthi Swift'},
    {id:2,brand_id:1,name:'Maruthi Dzire'},{id:3,brand_id:1,name:'Maruthi Waganor'},
    {id:4,brand_id:1,name:'Maruthi Ertiga'},{id:5,brand_id:2,name:'NEXA Baleno'},
    {id:6,brand_id:2,name:'NEXA Ciaz'},{id:7,brand_id:2,name:'NEXA Ignis'},
    {id:8,brand_id:2,name:'NEXA SCross'},{id:9,brand_id:3,name:'TATA Indica'},
    {id:10,brand_id:3,name:'TATA Safari'},{id:11,brand_id:3,name:'TATA Harrier'},
    {id:12,brand_id:3,name:'TATA Mazda'},{id:13,brand_id:4,name:'Hundai Grand i10'},
    {id:14,brand_id:4,name:'Hundai Grand i20'},{id:15,brand_id:4,name:'Hundai Creta'},
    {id:16,brand_id:4,name:'Hundai Santro'}];

let brandSelect = $('#brand');
let modelSelect = $('#model');

let brandOptions = `<option value="">Select a Brand</option>`;
for(let brand of brands){
    brandOptions += `<option value="${brand.id}">${brand.name}</option>`;
}
brandSelect.append(brandOptions);

// Change Event on Brands Select box
brandSelect.change(function() {
    let selectedBrandId = Number.parseInt(brandSelect.val());
    let selectedModels = models.filter((model) => {
        return model.brand_id === selectedBrandId;
    });
    let modelOptions = `<option value="">Select a Model</option>`;
    for(let model of selectedModels){
        modelOptions += `<option value="${model.id}">${model.name}</option>`;
    }
    modelSelect.empty().append(modelOptions);
});