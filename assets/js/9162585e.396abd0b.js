"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["418461"],{117430(e,a,t){t.r(a),t.d(a,{metadata:()=>o,default:()=>u,frontMatter:()=>l,contentTitle:()=>p,toc:()=>m,assets:()=>h});var o=JSON.parse('{"id":"services/sagemaker/model_packages/index","title":"model_packages","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/sagemaker/model_packages/index.md","sourceDirName":"services/sagemaker/model_packages","slug":"/services/sagemaker/model_packages/","permalink":"/services/sagemaker/model_packages/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"model_packages","hide_title":false,"hide_table_of_contents":false,"keywords":["model_packages","sagemaker","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"model_package_groups","permalink":"/services/sagemaker/model_package_groups/"},"next":{"title":"model_quality_job_definitions","permalink":"/services/sagemaker/model_quality_job_definitions/"}}'),n=t(474848),i=t(28453),r=t(97362),s=t(897272),d=t(413554),c=t(541647);let l={title:"model_packages",hide_title:!1,hide_table_of_contents:!1,keywords:["model_packages","sagemaker","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},p,h={},m=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>UPDATE</code> examples",id:"update-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2}];function g(e){let a={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.p,{children:["Creates, updates, deletes, gets or lists a ",(0,n.jsx)("code",{children:"model_packages"})," resource."]}),"\n",(0,n.jsx)(a.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)("table",{children:(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Name"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"model_packages"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Type"})}),(0,n.jsx)("td",{children:"Resource"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Id"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"aws.sagemaker.model_packages"})})]})]})}),"\n",(0,n.jsx)(a.h2,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(a.p,{children:["The following fields are returned by ",(0,n.jsx)(a.code,{children:"SELECT"})," queries:"]}),"\n",(0,n.jsxs)(d.A,{defaultValue:"describe_model_package",values:[{label:"describe_model_package",value:"describe_model_package"},{label:"list_model_packages",value:"list_model_packages"}],children:[(0,n.jsx)(c.A,{value:"describe_model_package",children:(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Datatype"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"AdditionalInferenceSpecifications"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"array"})}),(0,n.jsx)("td",{children:"An array of additional Inference Specification objects. Each additional Inference Specification specifies artifacts based on this model package that can be used on inference endpoints. Generally used with SageMaker Neo to store the compiled artifacts."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"ApprovalDescription"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"A description provided for the model approval. (pattern: <code>.*</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"CertifyForMarketplace"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"boolean"})}),(0,n.jsx)("td",{children:"Whether the model package is certified for listing on Amazon Web Services Marketplace."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"CreatedBy"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"Information about the user who created or modified a SageMaker resource."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"CreationTime"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string (date-time)"})}),(0,n.jsx)("td",{children:"A timestamp specifying when the model package was created."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"CustomerMetadataProperties"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"The metadata properties associated with the model package versions."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"Domain"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The machine learning domain of the model package you specified. Common machine learning domains include computer vision and natural language processing."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"DriftCheckBaselines"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"Represents the drift check baselines that can be used when the model monitor is set using the model package. For more information, see the topic on Drift Detection against Previous Baselines in SageMaker Pipelines in the Amazon SageMaker Developer Guide."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"InferenceSpecification"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"Details about inference jobs that you can run with models based on this model package."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"LastModifiedBy"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"Information about the user who created or modified a SageMaker resource."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"LastModifiedTime"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string (date-time)"})}),(0,n.jsx)("td",{children:"The last time that the model package was modified."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"ManagedStorageType"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The storage type of the model package. (Restricted)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"MetadataProperties"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"Metadata properties of the tracking entity, trial, or trial component."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"ModelApprovalStatus"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The approval status of the model package. (Approved, Rejected, PendingManualApproval)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"ModelCard"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"The model card associated with the model package. Since ModelPackageModelCard is tied to a model package, it is a specific usage of a model card and its schema is simplified compared to the schema of ModelCard. The ModelPackageModelCard schema does not include model_package_details, and model_overview is composed of the model_creator and model_artifact properties. For more information about the model package model card schema, see Model package model card schema. For more information about the model card associated with the model package, see View the Details of a Model Version."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"ModelLifeCycle"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"A structure describing the current state of the model in its life cycle."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"ModelMetrics"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"Metrics for the model."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"ModelPackageArn"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsxs)("td",{children:["The Amazon Resource Name (ARN) of the model package. (pattern: <code>arn",":aws","[a-z-]*:sagemaker:[a-z0-9-]{9,16}:[0-9]{12}",":model-package","/[\\S]{1,2048}</code>)"]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"ModelPackageDescription"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"A brief summary of the model package. (pattern: <code>[\\p{L}\\p{M}\\p{Z}\\p{S}\\p{N}\\p{P}]*</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"ModelPackageGroupName"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"If the model is a versioned model, the name of the model group that the versioned model belongs to. (pattern: <code>[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"ModelPackageName"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The name of the model package being described. (pattern: <code>[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"ModelPackageRegistrationType"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The package registration type of the model package output. (Logged, Registered)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"ModelPackageStatus"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The current status of the model package. (Pending, InProgress, Completed, Failed, Deleting)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"ModelPackageStatusDetails"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"Details about the current status of the model package."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"ModelPackageVersion"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"integer"})}),(0,n.jsx)("td",{children:"The version of the model package."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"SamplePayloadUrl"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The Amazon Simple Storage Service (Amazon S3) path where the sample payload are stored. This path points to a single gzip compressed tar archive (.tar.gz suffix)."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"SecurityConfig"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"The KMS Key ID (KMSKeyId) used for encryption of model package information."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"SkipModelValidation"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"Indicates if you want to skip model validation. (All, None)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"SourceAlgorithmSpecification"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"Details about the algorithm that was used to create the model package."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"SourceUri"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The URI of the source for the model package. (pattern: <code>[\\p{L}\\p{M}\\p{Z}\\p{N}\\p{P}]{0,1024}</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"Task"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The machine learning task you specified that your model package accomplishes. Common machine learning tasks include object detection and image classification."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"ValidationSpecification"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"Configurations for one or more transform jobs that SageMaker runs to test the model package."})]})]})]})}),(0,n.jsx)(c.A,{value:"list_model_packages",children:(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Datatype"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"CreationTime"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string (date-time)"})}),(0,n.jsx)("td",{children:"A timestamp that shows when the model package was created."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"ModelApprovalStatus"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The approval status of the model. This can be one of the following values. APPROVED - The model is approved REJECTED - The model is rejected. PENDING_MANUAL_APPROVAL - The model is waiting for manual approval. (Approved, Rejected, PendingManualApproval)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"ModelLifeCycle"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"A structure describing the current state of the model in its life cycle."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"ModelPackageArn"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsxs)("td",{children:["The Amazon Resource Name (ARN) of the model package. (pattern: <code>arn",":aws","[a-z-]*:sagemaker:[a-z0-9-]{9,16}:[0-9]{12}",":model-package","/[\\S]{1,2048}</code>)"]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"ModelPackageDescription"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"A brief description of the model package. (pattern: <code>[\\p{L}\\p{M}\\p{Z}\\p{S}\\p{N}\\p{P}]*</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"ModelPackageGroupName"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"If the model package is a versioned model, the model group that the versioned model belongs to. (pattern: <code>[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"ModelPackageName"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The name of the model package. (pattern: <code>[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"ModelPackageRegistrationType"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The package registration type of the model package summary. (Logged, Registered)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"ModelPackageStatus"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The overall status of the model package. (Pending, InProgress, Completed, Failed, Deleting)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"ModelPackageVersion"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"integer"})}),(0,n.jsx)("td",{children:"If the model package is a versioned model, the version of the model."})]})]})]})})]}),"\n",(0,n.jsx)(a.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(a.p,{children:"The following methods are available for this resource:"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Accessible by"}),(0,n.jsx)("th",{children:"Required Params"}),(0,n.jsx)("th",{children:"Optional Params"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#describe_model_package",children:(0,n.jsx)(r.A,{code:"describe_model_package"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"select"})}),(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Returns a description of the specified model package, which is used to create SageMaker models or list them on Amazon Web Services Marketplace. If you provided a KMS Key ID when you created your model package, you will see the KMS Decrypt API call in your CloudTrail logs when you use this API. To create models in SageMaker, buyers can subscribe to model packages listed on Amazon Web Services Marketplace."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#list_model_packages",children:(0,n.jsx)(r.A,{code:"list_model_packages"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"select"})}),(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Lists the model packages that have been created."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#create_model_package",children:(0,n.jsx)(r.A,{code:"create_model_package"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"insert"})}),(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Creates a model package that you can use to create SageMaker models or list on Amazon Web Services Marketplace, or a versioned model that is part of a model group. Buyers can subscribe to model packages listed on Amazon Web Services Marketplace to create models in SageMaker. To create a model package by specifying a Docker container that contains your inference code and the Amazon S3 location of your model artifacts, provide values for InferenceSpecification. To create a model from an algorithm resource that you created or subscribed to in Amazon Web Services Marketplace, provide a value for SourceAlgorithmSpecification. There are two types of model packages: Versioned - a model that is part of a model group in the model registry. Unversioned - a model package that is not part of a model group."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#update_model_package",children:(0,n.jsx)(r.A,{code:"update_model_package"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"update"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})}),", ",(0,n.jsx)("a",{href:"#parameter-ModelPackageArn",children:(0,n.jsx)("code",{children:"ModelPackageArn"})})]}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Updates a versioned model."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#delete_model_package",children:(0,n.jsx)(r.A,{code:"delete_model_package"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"delete"})}),(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Deletes a model package. A model package is used to create SageMaker models or list on Amazon Web Services Marketplace. Buyers can subscribe to model packages listed on Amazon Web Services Marketplace to create models in SageMaker."})]})]})]}),"\n",(0,n.jsx)(a.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(a.p,{children:["Parameters can be passed in the ",(0,n.jsx)(a.code,{children:"WHERE"})," clause of a query. Check the ",(0,n.jsx)(a.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Datatype"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsx)("tbody",{children:(0,n.jsxs)("tr",{id:"parameter-region",children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"region"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"AWS region (default: us-east-1)"})]})})]}),"\n",(0,n.jsxs)(a.h2,{id:"select-examples",children:[(0,n.jsx)(a.code,{children:"SELECT"})," examples"]}),"\n",(0,n.jsxs)(d.A,{defaultValue:"describe_model_package",values:[{label:"describe_model_package",value:"describe_model_package"},{label:"list_model_packages",value:"list_model_packages"}],children:[(0,n.jsxs)(c.A,{value:"describe_model_package",children:[(0,n.jsx)(a.p,{children:"Returns a description of the specified model package, which is used to create SageMaker models or list them on Amazon Web Services Marketplace. If you provided a KMS Key ID when you created your model package, you will see the KMS Decrypt API call in your CloudTrail logs when you use this API. To create models in SageMaker, buyers can subscribe to model packages listed on Amazon Web Services Marketplace."}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"SELECT\nAdditionalInferenceSpecifications,\nApprovalDescription,\nCertifyForMarketplace,\nCreatedBy,\nCreationTime,\nCustomerMetadataProperties,\nDomain,\nDriftCheckBaselines,\nInferenceSpecification,\nLastModifiedBy,\nLastModifiedTime,\nManagedStorageType,\nMetadataProperties,\nModelApprovalStatus,\nModelCard,\nModelLifeCycle,\nModelMetrics,\nModelPackageArn,\nModelPackageDescription,\nModelPackageGroupName,\nModelPackageName,\nModelPackageRegistrationType,\nModelPackageStatus,\nModelPackageStatusDetails,\nModelPackageVersion,\nSamplePayloadUrl,\nSecurityConfig,\nSkipModelValidation,\nSourceAlgorithmSpecification,\nSourceUri,\nTask,\nValidationSpecification\nFROM aws.sagemaker.model_packages\nWHERE region = '{{ region }}' -- required\n;\n"})})]}),(0,n.jsxs)(c.A,{value:"list_model_packages",children:[(0,n.jsx)(a.p,{children:"Lists the model packages that have been created."}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"SELECT\nCreationTime,\nModelApprovalStatus,\nModelLifeCycle,\nModelPackageArn,\nModelPackageDescription,\nModelPackageGroupName,\nModelPackageName,\nModelPackageRegistrationType,\nModelPackageStatus,\nModelPackageVersion\nFROM aws.sagemaker.model_packages\nWHERE region = '{{ region }}' -- required\n;\n"})})]})]}),"\n",(0,n.jsxs)(a.h2,{id:"insert-examples",children:[(0,n.jsx)(a.code,{children:"INSERT"})," examples"]}),"\n",(0,n.jsxs)(d.A,{defaultValue:"create_model_package",values:[{label:"create_model_package",value:"create_model_package"},{label:"Manifest",value:"manifest"}],children:[(0,n.jsxs)(c.A,{value:"create_model_package",children:[(0,n.jsx)(a.p,{children:"Creates a model package that you can use to create SageMaker models or list on Amazon Web Services Marketplace, or a versioned model that is part of a model group. Buyers can subscribe to model packages listed on Amazon Web Services Marketplace to create models in SageMaker. To create a model package by specifying a Docker container that contains your inference code and the Amazon S3 location of your model artifacts, provide values for InferenceSpecification. To create a model from an algorithm resource that you created or subscribed to in Amazon Web Services Marketplace, provide a value for SourceAlgorithmSpecification. There are two types of model packages: Versioned - a model that is part of a model group in the model registry. Unversioned - a model package that is not part of a model group."}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"INSERT INTO aws.sagemaker.model_packages (\nModelPackageName,\nModelPackageGroupName,\nModelPackageDescription,\nModelPackageRegistrationType,\nInferenceSpecification,\nValidationSpecification,\nSourceAlgorithmSpecification,\nCertifyForMarketplace,\nTags,\nModelApprovalStatus,\nMetadataProperties,\nModelMetrics,\nClientToken,\nDomain,\nTask,\nSamplePayloadUrl,\nCustomerMetadataProperties,\nDriftCheckBaselines,\nAdditionalInferenceSpecifications,\nSkipModelValidation,\nSourceUri,\nSecurityConfig,\nModelCard,\nModelLifeCycle,\nManagedStorageType,\nregion\n)\nSELECT \n'{{ ModelPackageName }}',\n'{{ ModelPackageGroupName }}',\n'{{ ModelPackageDescription }}',\n'{{ ModelPackageRegistrationType }}',\n'{{ InferenceSpecification }}',\n'{{ ValidationSpecification }}',\n'{{ SourceAlgorithmSpecification }}',\n{{ CertifyForMarketplace }},\n'{{ Tags }}',\n'{{ ModelApprovalStatus }}',\n'{{ MetadataProperties }}',\n'{{ ModelMetrics }}',\n'{{ ClientToken }}',\n'{{ Domain }}',\n'{{ Task }}',\n'{{ SamplePayloadUrl }}',\n'{{ CustomerMetadataProperties }}',\n'{{ DriftCheckBaselines }}',\n'{{ AdditionalInferenceSpecifications }}',\n'{{ SkipModelValidation }}',\n'{{ SourceUri }}',\n'{{ SecurityConfig }}',\n'{{ ModelCard }}',\n'{{ ModelLifeCycle }}',\n'{{ ManagedStorageType }}',\n'{{ region }}'\nRETURNING\nModelPackageArn\n;\n"})})]}),(0,n.jsx)(c.A,{value:"manifest",children:(0,n.jsx)(s.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: model_packages
props:
  - name: region
    value: "{{ region }}"
    description: Required parameter for the model_packages resource.
  - name: ModelPackageName
    value: "{{ ModelPackageName }}"
    description: |
      The name of the model package. The name must have 1 to 63 characters. Valid characters are a-z, A-Z, 0-9, and - (hyphen). This parameter is required for unversioned models. It is not applicable to versioned models.
  - name: ModelPackageGroupName
    value: "{{ ModelPackageGroupName }}"
    description: |
      The name or Amazon Resource Name (ARN) of the model package group that this model version belongs to. This parameter is required for versioned models, and does not apply to unversioned models.
  - name: ModelPackageDescription
    value: "{{ ModelPackageDescription }}"
    description: |
      A description of the model package.
  - name: ModelPackageRegistrationType
    value: "{{ ModelPackageRegistrationType }}"
    description: |
      The package registration type of the model package input.
    valid_values: ['Logged', 'Registered']
  - name: InferenceSpecification
    description: |
      Specifies details about inference jobs that you can run with models based on this model package, including the following information: The Amazon ECR paths of containers that contain the inference code and model artifacts. The instance types that the model package supports for transform jobs and real-time endpoints used for inference. The input and output content formats that the model package supports for inference.
    value:
      Containers:
        - ContainerHostname: "{{ ContainerHostname }}"
          Image: "{{ Image }}"
          ImageDigest: "{{ ImageDigest }}"
          ModelDataUrl: "{{ ModelDataUrl }}"
          ModelDataSource:
            S3DataSource:
              S3Uri: "{{ S3Uri }}"
              S3DataType: "{{ S3DataType }}"
              CompressionType: "{{ CompressionType }}"
              ModelAccessConfig:
                AcceptEula: {{ AcceptEula }}
              HubAccessConfig:
                HubContentArn: "{{ HubContentArn }}"
              ManifestS3Uri: "{{ ManifestS3Uri }}"
              ETag: "{{ ETag }}"
              ManifestEtag: "{{ ManifestEtag }}"
          ProductId: "{{ ProductId }}"
          Environment: "{{ Environment }}"
          ModelInput:
            DataInputConfig: "{{ DataInputConfig }}"
          Framework: "{{ Framework }}"
          FrameworkVersion: "{{ FrameworkVersion }}"
          NearestModelName: "{{ NearestModelName }}"
          AdditionalModelDataSources: "{{ AdditionalModelDataSources }}"
          AdditionalS3DataSource:
            S3DataType: "{{ S3DataType }}"
            S3Uri: "{{ S3Uri }}"
            CompressionType: "{{ CompressionType }}"
            ETag: "{{ ETag }}"
          ModelDataETag: "{{ ModelDataETag }}"
          IsCheckpoint: {{ IsCheckpoint }}
          BaseModel:
            HubContentName: "{{ HubContentName }}"
            HubContentVersion: "{{ HubContentVersion }}"
            RecipeName: "{{ RecipeName }}"
      SupportedTransformInstanceTypes:
        - "{{ SupportedTransformInstanceTypes }}"
      SupportedRealtimeInferenceInstanceTypes:
        - "{{ SupportedRealtimeInferenceInstanceTypes }}"
      SupportedContentTypes:
        - "{{ SupportedContentTypes }}"
      SupportedResponseMIMETypes:
        - "{{ SupportedResponseMIMETypes }}"
  - name: ValidationSpecification
    description: |
      Specifies configurations for one or more transform jobs that SageMaker runs to test the model package.
    value:
      ValidationRole: "{{ ValidationRole }}"
      ValidationProfiles:
        - ProfileName: "{{ ProfileName }}"
          TransformJobDefinition:
            MaxConcurrentTransforms: {{ MaxConcurrentTransforms }}
            MaxPayloadInMB: {{ MaxPayloadInMB }}
            BatchStrategy: "{{ BatchStrategy }}"
            Environment: "{{ Environment }}"
            TransformInput:
              DataSource:
                S3DataSource: "{{ S3DataSource }}"
              ContentType: "{{ ContentType }}"
              CompressionType: "{{ CompressionType }}"
              SplitType: "{{ SplitType }}"
            TransformOutput:
              S3OutputPath: "{{ S3OutputPath }}"
              Accept: "{{ Accept }}"
              AssembleWith: "{{ AssembleWith }}"
              KmsKeyId: "{{ KmsKeyId }}"
            TransformResources:
              InstanceType: "{{ InstanceType }}"
              InstanceCount: {{ InstanceCount }}
              VolumeKmsKeyId: "{{ VolumeKmsKeyId }}"
              TransformAmiVersion: "{{ TransformAmiVersion }}"
  - name: SourceAlgorithmSpecification
    description: |
      Details about the algorithm that was used to create the model package.
    value:
      SourceAlgorithms:
        - ModelDataUrl: "{{ ModelDataUrl }}"
          ModelDataSource:
            S3DataSource:
              S3Uri: "{{ S3Uri }}"
              S3DataType: "{{ S3DataType }}"
              CompressionType: "{{ CompressionType }}"
              ModelAccessConfig:
                AcceptEula: {{ AcceptEula }}
              HubAccessConfig:
                HubContentArn: "{{ HubContentArn }}"
              ManifestS3Uri: "{{ ManifestS3Uri }}"
              ETag: "{{ ETag }}"
              ManifestEtag: "{{ ManifestEtag }}"
          ModelDataETag: "{{ ModelDataETag }}"
          AlgorithmName: "{{ AlgorithmName }}"
  - name: CertifyForMarketplace
    value: {{ CertifyForMarketplace }}
    description: |
      Whether to certify the model package for listing on Amazon Web Services Marketplace. This parameter is optional for unversioned models, and does not apply to versioned models.
  - name: Tags
    description: |
      A list of key value pairs associated with the model. For more information, see Tagging Amazon Web Services resources in the Amazon Web Services General Reference Guide. If you supply ModelPackageGroupName, your model package belongs to the model group you specify and uses the tags associated with the model group. In this case, you cannot supply a tag argument.
    value:
      - Key: "{{ Key }}"
        Value: "{{ Value }}"
  - name: ModelApprovalStatus
    value: "{{ ModelApprovalStatus }}"
    description: |
      Whether the model is approved for deployment. This parameter is optional for versioned models, and does not apply to unversioned models. For versioned models, the value of this parameter must be set to Approved to deploy the model.
    valid_values: ['Approved', 'Rejected', 'PendingManualApproval']
  - name: MetadataProperties
    description: |
      Metadata properties of the tracking entity, trial, or trial component.
    value:
      CommitId: "{{ CommitId }}"
      Repository: "{{ Repository }}"
      GeneratedBy: "{{ GeneratedBy }}"
      ProjectId: "{{ ProjectId }}"
  - name: ModelMetrics
    description: |
      A structure that contains model metrics reports.
    value:
      ModelQuality:
        Statistics:
          ContentType: "{{ ContentType }}"
          ContentDigest: "{{ ContentDigest }}"
          S3Uri: "{{ S3Uri }}"
        Constraints:
          ContentType: "{{ ContentType }}"
          ContentDigest: "{{ ContentDigest }}"
          S3Uri: "{{ S3Uri }}"
      ModelDataQuality:
        Statistics:
          ContentType: "{{ ContentType }}"
          ContentDigest: "{{ ContentDigest }}"
          S3Uri: "{{ S3Uri }}"
        Constraints:
          ContentType: "{{ ContentType }}"
          ContentDigest: "{{ ContentDigest }}"
          S3Uri: "{{ S3Uri }}"
      Bias:
        Report:
          ContentType: "{{ ContentType }}"
          ContentDigest: "{{ ContentDigest }}"
          S3Uri: "{{ S3Uri }}"
        PreTrainingReport:
          ContentType: "{{ ContentType }}"
          ContentDigest: "{{ ContentDigest }}"
          S3Uri: "{{ S3Uri }}"
        PostTrainingReport:
          ContentType: "{{ ContentType }}"
          ContentDigest: "{{ ContentDigest }}"
          S3Uri: "{{ S3Uri }}"
      Explainability:
        Report:
          ContentType: "{{ ContentType }}"
          ContentDigest: "{{ ContentDigest }}"
          S3Uri: "{{ S3Uri }}"
  - name: ClientToken
    value: "{{ ClientToken }}"
    description: |
      A unique token that guarantees that the call to this API is idempotent.
  - name: Domain
    value: "{{ Domain }}"
    description: |
      The machine learning domain of your model package and its components. Common machine learning domains include computer vision and natural language processing.
  - name: Task
    value: "{{ Task }}"
    description: |
      The machine learning task your model package accomplishes. Common machine learning tasks include object detection and image classification. The following tasks are supported by Inference Recommender: "IMAGE_CLASSIFICATION" | "OBJECT_DETECTION" | "TEXT_GENERATION" |"IMAGE_SEGMENTATION" | "FILL_MASK" | "CLASSIFICATION" | "REGRESSION" | "OTHER". Specify "OTHER" if none of the tasks listed fit your use case.
  - name: SamplePayloadUrl
    value: "{{ SamplePayloadUrl }}"
    description: |
      The Amazon Simple Storage Service (Amazon S3) path where the sample payload is stored. This path must point to a single gzip compressed tar archive (.tar.gz suffix). This archive can hold multiple files that are all equally used in the load test. Each file in the archive must satisfy the size constraints of the InvokeEndpoint call.
  - name: CustomerMetadataProperties
    value: "{{ CustomerMetadataProperties }}"
    description: |
      The metadata properties associated with the model package versions.
  - name: DriftCheckBaselines
    description: |
      Represents the drift check baselines that can be used when the model monitor is set using the model package. For more information, see the topic on Drift Detection against Previous Baselines in SageMaker Pipelines in the Amazon SageMaker Developer Guide.
    value:
      Bias:
        ConfigFile:
          ContentType: "{{ ContentType }}"
          ContentDigest: "{{ ContentDigest }}"
          S3Uri: "{{ S3Uri }}"
        PreTrainingConstraints:
          ContentType: "{{ ContentType }}"
          ContentDigest: "{{ ContentDigest }}"
          S3Uri: "{{ S3Uri }}"
        PostTrainingConstraints:
          ContentType: "{{ ContentType }}"
          ContentDigest: "{{ ContentDigest }}"
          S3Uri: "{{ S3Uri }}"
      Explainability:
        Constraints:
          ContentType: "{{ ContentType }}"
          ContentDigest: "{{ ContentDigest }}"
          S3Uri: "{{ S3Uri }}"
        ConfigFile:
          ContentType: "{{ ContentType }}"
          ContentDigest: "{{ ContentDigest }}"
          S3Uri: "{{ S3Uri }}"
      ModelQuality:
        Statistics:
          ContentType: "{{ ContentType }}"
          ContentDigest: "{{ ContentDigest }}"
          S3Uri: "{{ S3Uri }}"
        Constraints:
          ContentType: "{{ ContentType }}"
          ContentDigest: "{{ ContentDigest }}"
          S3Uri: "{{ S3Uri }}"
      ModelDataQuality:
        Statistics:
          ContentType: "{{ ContentType }}"
          ContentDigest: "{{ ContentDigest }}"
          S3Uri: "{{ S3Uri }}"
        Constraints:
          ContentType: "{{ ContentType }}"
          ContentDigest: "{{ ContentDigest }}"
          S3Uri: "{{ S3Uri }}"
  - name: AdditionalInferenceSpecifications
    description: |
      An array of additional Inference Specification objects. Each additional Inference Specification specifies artifacts based on this model package that can be used on inference endpoints. Generally used with SageMaker Neo to store the compiled artifacts.
    value:
      - Name: "{{ Name }}"
        Description: "{{ Description }}"
        Containers: "{{ Containers }}"
        SupportedTransformInstanceTypes: "{{ SupportedTransformInstanceTypes }}"
        SupportedRealtimeInferenceInstanceTypes: "{{ SupportedRealtimeInferenceInstanceTypes }}"
        SupportedContentTypes: "{{ SupportedContentTypes }}"
        SupportedResponseMIMETypes: "{{ SupportedResponseMIMETypes }}"
  - name: SkipModelValidation
    value: "{{ SkipModelValidation }}"
    description: |
      Indicates if you want to skip model validation.
    valid_values: ['All', 'None']
  - name: SourceUri
    value: "{{ SourceUri }}"
    description: |
      The URI of the source for the model package. If you want to clone a model package, set it to the model package Amazon Resource Name (ARN). If you want to register a model, set it to the model ARN.
  - name: SecurityConfig
    description: |
      The KMS Key ID (KMSKeyId) used for encryption of model package information.
    value:
      KmsKeyId: "{{ KmsKeyId }}"
  - name: ModelCard
    description: |
      The model card associated with the model package. Since ModelPackageModelCard is tied to a model package, it is a specific usage of a model card and its schema is simplified compared to the schema of ModelCard. The ModelPackageModelCard schema does not include model_package_details, and model_overview is composed of the model_creator and model_artifact properties. For more information about the model package model card schema, see Model package model card schema. For more information about the model card associated with the model package, see View the Details of a Model Version.
    value:
      ModelCardContent: "{{ ModelCardContent }}"
      ModelCardStatus: "{{ ModelCardStatus }}"
  - name: ModelLifeCycle
    description: |
      A structure describing the current state of the model in its life cycle.
    value:
      Stage: "{{ Stage }}"
      StageStatus: "{{ StageStatus }}"
      StageDescription: "{{ StageDescription }}"
  - name: ManagedStorageType
    value: "{{ ManagedStorageType }}"
    description: |
      The storage type of the model package.
    valid_values: ['Restricted']
`})})]}),"\n",(0,n.jsxs)(a.h2,{id:"update-examples",children:[(0,n.jsx)(a.code,{children:"UPDATE"})," examples"]}),"\n",(0,n.jsx)(d.A,{defaultValue:"update_model_package",values:[{label:"update_model_package",value:"update_model_package"}],children:(0,n.jsxs)(c.A,{value:"update_model_package",children:[(0,n.jsx)(a.p,{children:"Updates a versioned model."}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"UPDATE aws.sagemaker.model_packages\nSET \nModelPackageArn = '{{ ModelPackageArn }}',\nModelApprovalStatus = '{{ ModelApprovalStatus }}',\nModelPackageRegistrationType = '{{ ModelPackageRegistrationType }}',\nApprovalDescription = '{{ ApprovalDescription }}',\nCustomerMetadataProperties = '{{ CustomerMetadataProperties }}',\nCustomerMetadataPropertiesToRemove = '{{ CustomerMetadataPropertiesToRemove }}',\nAdditionalInferenceSpecificationsToAdd = '{{ AdditionalInferenceSpecificationsToAdd }}',\nInferenceSpecification = '{{ InferenceSpecification }}',\nSourceUri = '{{ SourceUri }}',\nModelCard = '{{ ModelCard }}',\nModelLifeCycle = '{{ ModelLifeCycle }}',\nClientToken = '{{ ClientToken }}'\nWHERE \nregion = '{{ region }}' --required\nAND ModelPackageArn = '{{ ModelPackageArn }}' --required\nRETURNING\nModelPackageArn;\n"})})]})}),"\n",(0,n.jsxs)(a.h2,{id:"delete-examples",children:[(0,n.jsx)(a.code,{children:"DELETE"})," examples"]}),"\n",(0,n.jsx)(d.A,{defaultValue:"delete_model_package",values:[{label:"delete_model_package",value:"delete_model_package"}],children:(0,n.jsxs)(c.A,{value:"delete_model_package",children:[(0,n.jsx)(a.p,{children:"Deletes a model package. A model package is used to create SageMaker models or list on Amazon Web Services Marketplace. Buyers can subscribe to model packages listed on Amazon Web Services Marketplace to create models in SageMaker."}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"DELETE FROM aws.sagemaker.model_packages\nWHERE region = '{{ region }}' --required\n;\n"})})]})})]})}function u(e={}){let{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}}}]);