"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["982191"],{459266(e,n,r){r.r(n),r.d(n,{metadata:()=>o,default:()=>j,frontMatter:()=>c,contentTitle:()=>h,toc:()=>u,assets:()=>m});var o=JSON.parse('{"id":"services/sagemaker/models/index","title":"models","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/sagemaker/models/index.md","sourceDirName":"services/sagemaker/models","slug":"/services/sagemaker/models/","permalink":"/services/sagemaker/models/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"models","hide_title":false,"hide_table_of_contents":false,"keywords":["models","sagemaker","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"model_quality_job_definitions","permalink":"/services/sagemaker/model_quality_job_definitions/"},"next":{"title":"monitoring_alert_histories","permalink":"/services/sagemaker/monitoring_alert_histories/"}}'),s=r(474848),t=r(28453),a=r(97362),i=r(897272),d=r(413554),l=r(541647);let c={title:"models",hide_title:!1,hide_table_of_contents:!1,keywords:["models","sagemaker","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},h,m={},u=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2}];function x(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Creates, updates, deletes, gets or lists a ",(0,s.jsx)("code",{children:"models"})," resource."]}),"\n",(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)("table",{children:(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("b",{children:"Name"})}),(0,s.jsx)("td",{children:(0,s.jsx)(a.A,{code:"models"})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("b",{children:"Type"})}),(0,s.jsx)("td",{children:"Resource"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("b",{children:"Id"})}),(0,s.jsx)("td",{children:(0,s.jsx)(a.A,{code:"aws.sagemaker.models"})})]})]})}),"\n",(0,s.jsx)(n.h2,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(n.p,{children:["The following fields are returned by ",(0,s.jsx)(n.code,{children:"SELECT"})," queries:"]}),"\n",(0,s.jsxs)(d.A,{defaultValue:"describe_model",values:[{label:"describe_model",value:"describe_model"},{label:"list_models",value:"list_models"}],children:[(0,s.jsx)(l.A,{value:"describe_model",children:(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Name"}),(0,s.jsx)("th",{children:"Datatype"}),(0,s.jsx)("th",{children:"Description"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(a.A,{code:"Containers"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"array"})}),(0,s.jsx)("td",{children:"The containers in the inference pipeline."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(a.A,{code:"CreationTime"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string (date-time)"})}),(0,s.jsx)("td",{children:"A timestamp that shows when the model was created."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(a.A,{code:"DeploymentRecommendation"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"object"})}),(0,s.jsx)("td",{children:"A set of recommended deployment configurations for the model."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(a.A,{code:"EnableNetworkIsolation"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"boolean"})}),(0,s.jsx)("td",{children:"If True, no inbound or outbound network calls can be made to or from the model container."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(a.A,{code:"ExecutionRoleArn"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsxs)("td",{children:["The Amazon Resource Name (ARN) of the IAM role that you specified for the model. (pattern: <code>arn",":aws","[a-z-]*:iam::\\d{12}",":role","/?[a-zA-Z_0-9+=,.@-_/]+</code>)"]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(a.A,{code:"InferenceExecutionConfig"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"object"})}),(0,s.jsx)("td",{children:"Specifies details of how containers in a multi-container endpoint are called."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(a.A,{code:"ModelArn"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsxs)("td",{children:["The Amazon Resource Name (ARN) of the model. (pattern: <code>arn",":aws","[a-z-]",(0,s.jsx)(n.em,{children:":sagemaker:[a-z0-9-]"}),":[0-9]{12}",":model","/.*</code>)"]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(a.A,{code:"ModelName"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)("td",{children:"Name of the SageMaker model. (pattern: <code>[a-zA-Z0-9]([-a-zA-Z0-9]*[a-zA-Z0-9])?</code>)"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(a.A,{code:"PrimaryContainer"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"object"})}),(0,s.jsx)("td",{children:"Describes the container, as part of model definition."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(a.A,{code:"VpcConfig"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"object"})}),(0,s.jsx)("td",{children:"Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. You can control access to and from your resources by configuring a VPC. For more information, see Give SageMaker Access to Resources in your Amazon VPC."})]})]})]})}),(0,s.jsx)(l.A,{value:"list_models",children:(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Name"}),(0,s.jsx)("th",{children:"Datatype"}),(0,s.jsx)("th",{children:"Description"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(a.A,{code:"CreationTime"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string (date-time)"})}),(0,s.jsx)("td",{children:"A timestamp that indicates when the model was created."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(a.A,{code:"ModelArn"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsxs)("td",{children:["The Amazon Resource Name (ARN) of the model. (pattern: <code>arn",":aws","[a-z-]",(0,s.jsx)(n.em,{children:":sagemaker:[a-z0-9-]"}),":[0-9]{12}",":model","/.*</code>)"]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(a.A,{code:"ModelName"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)("td",{children:"The name of the model that you want a summary for. (pattern: <code>[a-zA-Z0-9]([-a-zA-Z0-9]*[a-zA-Z0-9])?</code>)"})]})]})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(n.p,{children:"The following methods are available for this resource:"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Name"}),(0,s.jsx)("th",{children:"Accessible by"}),(0,s.jsx)("th",{children:"Required Params"}),(0,s.jsx)("th",{children:"Optional Params"}),(0,s.jsx)("th",{children:"Description"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"#describe_model",children:(0,s.jsx)(a.A,{code:"describe_model"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(a.A,{code:"select"})}),(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"#parameter-region",children:(0,s.jsx)("code",{children:"region"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:"Describes a model that you created using the CreateModel API."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"#list_models",children:(0,s.jsx)(a.A,{code:"list_models"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(a.A,{code:"select"})}),(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"#parameter-region",children:(0,s.jsx)("code",{children:"region"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:"Lists models created with the CreateModel API."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"#create_model",children:(0,s.jsx)(a.A,{code:"create_model"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(a.A,{code:"insert"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)("a",{href:"#parameter-region",children:(0,s.jsx)("code",{children:"region"})}),", ",(0,s.jsx)("a",{href:"#parameter-ModelName",children:(0,s.jsx)("code",{children:"ModelName"})})]}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:"Creates a model in SageMaker. In the request, you name the model and describe a primary container. For the primary container, you specify the Docker image that contains inference code, artifacts (from prior training), and a custom environment map that the inference code uses when you deploy the model for predictions. Use this API to create a model if you want to use SageMaker hosting services or run a batch transform job. To host your model, you create an endpoint configuration with the CreateEndpointConfig API, and then create an endpoint with the CreateEndpoint API. SageMaker then deploys all of the containers that you defined for the model in the hosting environment. To run a batch transform using your model, you start a job with the CreateTransformJob API. SageMaker uses your model and your dataset to get inferences which are then saved to a specified S3 location. In the request, you also provide an IAM role that SageMaker can assume to access model artifacts and docker image for deployment on ML compute hosting instances or for batch transform jobs. In addition, you also use the IAM role to manage permissions the inference code needs. For example, if the inference code access any other Amazon Web Services resources, you grant necessary permissions via this role."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"#delete_model",children:(0,s.jsx)(a.A,{code:"delete_model"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(a.A,{code:"delete"})}),(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"#parameter-region",children:(0,s.jsx)("code",{children:"region"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:"Deletes a model. The DeleteModel API deletes only the model entry that was created in SageMaker when you called the CreateModel API. It does not delete model artifacts, inference code, or the IAM role that you specified when creating the model."})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["Parameters can be passed in the ",(0,s.jsx)(n.code,{children:"WHERE"})," clause of a query. Check the ",(0,s.jsx)(n.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Name"}),(0,s.jsx)("th",{children:"Datatype"}),(0,s.jsx)("th",{children:"Description"})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{id:"parameter-region",children:[(0,s.jsx)("td",{children:(0,s.jsx)(a.A,{code:"region"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)("td",{children:"AWS region (default: us-east-1)"})]})})]}),"\n",(0,s.jsxs)(n.h2,{id:"select-examples",children:[(0,s.jsx)(n.code,{children:"SELECT"})," examples"]}),"\n",(0,s.jsxs)(d.A,{defaultValue:"describe_model",values:[{label:"describe_model",value:"describe_model"},{label:"list_models",value:"list_models"}],children:[(0,s.jsxs)(l.A,{value:"describe_model",children:[(0,s.jsx)(n.p,{children:"Describes a model that you created using the CreateModel API."}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT\nContainers,\nCreationTime,\nDeploymentRecommendation,\nEnableNetworkIsolation,\nExecutionRoleArn,\nInferenceExecutionConfig,\nModelArn,\nModelName,\nPrimaryContainer,\nVpcConfig\nFROM aws.sagemaker.models\nWHERE region = '{{ region }}' -- required\n;\n"})})]}),(0,s.jsxs)(l.A,{value:"list_models",children:[(0,s.jsx)(n.p,{children:"Lists models created with the CreateModel API."}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT\nCreationTime,\nModelArn,\nModelName\nFROM aws.sagemaker.models\nWHERE region = '{{ region }}' -- required\n;\n"})})]})]}),"\n",(0,s.jsxs)(n.h2,{id:"insert-examples",children:[(0,s.jsx)(n.code,{children:"INSERT"})," examples"]}),"\n",(0,s.jsxs)(d.A,{defaultValue:"create_model",values:[{label:"create_model",value:"create_model"},{label:"Manifest",value:"manifest"}],children:[(0,s.jsxs)(l.A,{value:"create_model",children:[(0,s.jsx)(n.p,{children:"Creates a model in SageMaker. In the request, you name the model and describe a primary container. For the primary container, you specify the Docker image that contains inference code, artifacts (from prior training), and a custom environment map that the inference code uses when you deploy the model for predictions. Use this API to create a model if you want to use SageMaker hosting services or run a batch transform job. To host your model, you create an endpoint configuration with the CreateEndpointConfig API, and then create an endpoint with the CreateEndpoint API. SageMaker then deploys all of the containers that you defined for the model in the hosting environment. To run a batch transform using your model, you start a job with the CreateTransformJob API. SageMaker uses your model and your dataset to get inferences which are then saved to a specified S3 location. In the request, you also provide an IAM role that SageMaker can assume to access model artifacts and docker image for deployment on ML compute hosting instances or for batch transform jobs. In addition, you also use the IAM role to manage permissions the inference code needs. For example, if the inference code access any other Amazon Web Services resources, you grant necessary permissions via this role."}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"INSERT INTO aws.sagemaker.models (\nModelName,\nPrimaryContainer,\nContainers,\nInferenceExecutionConfig,\nExecutionRoleArn,\nTags,\nVpcConfig,\nEnableNetworkIsolation,\nregion\n)\nSELECT \n'{{ ModelName }}' /* required */,\n'{{ PrimaryContainer }}',\n'{{ Containers }}',\n'{{ InferenceExecutionConfig }}',\n'{{ ExecutionRoleArn }}',\n'{{ Tags }}',\n'{{ VpcConfig }}',\n{{ EnableNetworkIsolation }},\n'{{ region }}'\nRETURNING\nModelArn\n;\n"})})]}),(0,s.jsx)(l.A,{value:"manifest",children:(0,s.jsx)(i.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: models
props:
  - name: region
    value: "{{ region }}"
    description: Required parameter for the models resource.
  - name: ModelName
    value: "{{ ModelName }}"
    description: |
      The name of the new model.
  - name: PrimaryContainer
    description: |
      The location of the primary docker image containing inference code, associated artifacts, and custom environment map that the inference code uses when the model is deployed for predictions.
    value:
      ContainerHostname: "{{ ContainerHostname }}"
      Image: "{{ Image }}"
      ImageConfig:
        RepositoryAccessMode: "{{ RepositoryAccessMode }}"
        RepositoryAuthConfig:
          RepositoryCredentialsProviderArn: "{{ RepositoryCredentialsProviderArn }}"
      Mode: "{{ Mode }}"
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
      AdditionalModelDataSources:
        - ChannelName: "{{ ChannelName }}"
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
      Environment: "{{ Environment }}"
      ModelPackageName: "{{ ModelPackageName }}"
      InferenceSpecificationName: "{{ InferenceSpecificationName }}"
      MultiModelConfig:
        ModelCacheSetting: "{{ ModelCacheSetting }}"
  - name: Containers
    description: |
      Specifies the containers in the inference pipeline.
    value:
      - ContainerHostname: "{{ ContainerHostname }}"
        Image: "{{ Image }}"
        ImageConfig:
          RepositoryAccessMode: "{{ RepositoryAccessMode }}"
          RepositoryAuthConfig:
            RepositoryCredentialsProviderArn: "{{ RepositoryCredentialsProviderArn }}"
        Mode: "{{ Mode }}"
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
        AdditionalModelDataSources: "{{ AdditionalModelDataSources }}"
        Environment: "{{ Environment }}"
        ModelPackageName: "{{ ModelPackageName }}"
        InferenceSpecificationName: "{{ InferenceSpecificationName }}"
        MultiModelConfig:
          ModelCacheSetting: "{{ ModelCacheSetting }}"
  - name: InferenceExecutionConfig
    description: |
      Specifies details of how containers in a multi-container endpoint are called.
    value:
      Mode: "{{ Mode }}"
  - name: ExecutionRoleArn
    value: "{{ ExecutionRoleArn }}"
    description: |
      The Amazon Resource Name (ARN) of the IAM role that SageMaker can assume to access model artifacts and docker image for deployment on ML compute instances or for batch transform jobs. Deploying on ML compute instances is part of model hosting. For more information, see SageMaker Roles. To be able to pass this role to SageMaker, the caller of this API must have the iam:PassRole permission.
  - name: Tags
    description: |
      An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in different ways, for example, by purpose, owner, or environment. For more information, see Tagging Amazon Web Services Resources.
    value:
      - Key: "{{ Key }}"
        Value: "{{ Value }}"
  - name: VpcConfig
    description: |
      Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. You can control access to and from your resources by configuring a VPC. For more information, see Give SageMaker Access to Resources in your Amazon VPC.
    value:
      SecurityGroupIds:
        - "{{ SecurityGroupIds }}"
      Subnets:
        - "{{ Subnets }}"
  - name: EnableNetworkIsolation
    value: {{ EnableNetworkIsolation }}
    description: |
      Isolates the model container. No inbound or outbound network calls can be made to or from the model container.
`})})]}),"\n",(0,s.jsxs)(n.h2,{id:"delete-examples",children:[(0,s.jsx)(n.code,{children:"DELETE"})," examples"]}),"\n",(0,s.jsx)(d.A,{defaultValue:"delete_model",values:[{label:"delete_model",value:"delete_model"}],children:(0,s.jsxs)(l.A,{value:"delete_model",children:[(0,s.jsx)(n.p,{children:"Deletes a model. The DeleteModel API deletes only the model entry that was created in SageMaker when you called the CreateModel API. It does not delete model artifacts, inference code, or the IAM role that you specified when creating the model."}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"DELETE FROM aws.sagemaker.models\nWHERE region = '{{ region }}' --required\n;\n"})})]})})]})}function j(e={}){let{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}}}]);