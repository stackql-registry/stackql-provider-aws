"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["553733"],{507163(e,n,t){t.r(n),t.d(n,{metadata:()=>o,default:()=>f,frontMatter:()=>l,contentTitle:()=>h,toc:()=>p,assets:()=>u});var o=JSON.parse('{"id":"services/sagemaker/endpoint_configs/index","title":"endpoint_configs","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/sagemaker/endpoint_configs/index.md","sourceDirName":"services/sagemaker/endpoint_configs","slug":"/services/sagemaker/endpoint_configs/","permalink":"/services/sagemaker/endpoint_configs/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"endpoint_configs","hide_title":false,"hide_table_of_contents":false,"keywords":["endpoint_configs","sagemaker","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"edge_packaging_jobs","permalink":"/services/sagemaker/edge_packaging_jobs/"},"next":{"title":"endpoints","permalink":"/services/sagemaker/endpoints/"}}'),i=t(474848),a=t(28453),r=t(97362),s=t(897272),d=t(413554),c=t(541647);let l={title:"endpoint_configs",hide_title:!1,hide_table_of_contents:!1,keywords:["endpoint_configs","sagemaker","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},h,u={},p=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2}];function m(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Creates, updates, deletes, gets or lists an ",(0,i.jsx)("code",{children:"endpoint_configs"})," resource."]}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)("table",{children:(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"Name"})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.A,{code:"endpoint_configs"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"Type"})}),(0,i.jsx)("td",{children:"Resource"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"Id"})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.A,{code:"aws.sagemaker.endpoint_configs"})})]})]})}),"\n",(0,i.jsx)(n.h2,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(n.p,{children:["The following fields are returned by ",(0,i.jsx)(n.code,{children:"SELECT"})," queries:"]}),"\n",(0,i.jsxs)(d.A,{defaultValue:"describe_endpoint_config",values:[{label:"describe_endpoint_config",value:"describe_endpoint_config"},{label:"list_endpoint_configs",value:"list_endpoint_configs"}],children:[(0,i.jsx)(c.A,{value:"describe_endpoint_config",children:(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Datatype"}),(0,i.jsx)("th",{children:"Description"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(r.A,{code:"AsyncInferenceConfig"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"object"})}),(0,i.jsx)("td",{children:"Returns the description of an endpoint configuration created using the CreateEndpointConfig API."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(r.A,{code:"CreationTime"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string (date-time)"})}),(0,i.jsx)("td",{children:"A timestamp that shows when the endpoint configuration was created."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(r.A,{code:"DataCaptureConfig"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"object"})}),(0,i.jsx)("td",{children:"Configuration to control how SageMaker AI captures inference data."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(r.A,{code:"EnableNetworkIsolation"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"boolean"})}),(0,i.jsx)("td",{children:"Indicates whether all model containers deployed to the endpoint are isolated. If they are, no inbound or outbound network calls can be made to or from the model containers."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(r.A,{code:"EndpointConfigArn"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsxs)("td",{children:["The Amazon Resource Name (ARN) of the endpoint configuration. (pattern: <code>arn",":aws","[a-z-]",(0,i.jsx)(n.em,{children:":sagemaker:[a-z0-9-]"}),":[0-9]{12}",":endpoint-config","/.*</code>)"]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(r.A,{code:"EndpointConfigName"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"Name of the SageMaker endpoint configuration. (pattern: <code>[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}</code>)"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(r.A,{code:"ExecutionRoleArn"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsxs)("td",{children:["The Amazon Resource Name (ARN) of the IAM role that you assigned to the endpoint configuration. (pattern: <code>arn",":aws","[a-z-]*:iam::\\d{12}",":role","/?[a-zA-Z_0-9+=,.@-_/]+</code>)"]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(r.A,{code:"ExplainerConfig"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"object"})}),(0,i.jsx)("td",{children:"The configuration parameters for an explainer."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(r.A,{code:"KmsKeyId"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"Amazon Web Services KMS key ID Amazon SageMaker uses to encrypt data when storing it on the ML storage volume attached to the instance. (pattern: <code>[a-zA-Z0-9:/_-]*</code>)"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(r.A,{code:"MetricsConfig"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"object"})}),(0,i.jsx)("td",{children:"The configuration parameters for utilization metrics."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(r.A,{code:"ProductionVariants"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"array"})}),(0,i.jsx)("td",{children:"An array of ProductionVariant objects, one for each model that you want to host at this endpoint."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(r.A,{code:"ShadowProductionVariants"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"array"})}),(0,i.jsx)("td",{children:"An array of ProductionVariant objects, one for each model that you want to host at this endpoint in shadow mode with production traffic replicated from the model specified on ProductionVariants."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(r.A,{code:"VpcConfig"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"object"})}),(0,i.jsx)("td",{children:"Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. You can control access to and from your resources by configuring a VPC. For more information, see Give SageMaker Access to Resources in your Amazon VPC."})]})]})]})}),(0,i.jsx)(c.A,{value:"list_endpoint_configs",children:(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Datatype"}),(0,i.jsx)("th",{children:"Description"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(r.A,{code:"CreationTime"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string (date-time)"})}),(0,i.jsx)("td",{children:"A timestamp that shows when the endpoint configuration was created."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(r.A,{code:"EndpointConfigArn"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsxs)("td",{children:["The Amazon Resource Name (ARN) of the endpoint configuration. (pattern: <code>arn",":aws","[a-z-]",(0,i.jsx)(n.em,{children:":sagemaker:[a-z0-9-]"}),":[0-9]{12}",":endpoint-config","/.*</code>)"]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(r.A,{code:"EndpointConfigName"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"The name of the endpoint configuration. (pattern: <code>[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}</code>)"})]})]})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(n.p,{children:"The following methods are available for this resource:"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Accessible by"}),(0,i.jsx)("th",{children:"Required Params"}),(0,i.jsx)("th",{children:"Optional Params"}),(0,i.jsx)("th",{children:"Description"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#describe_endpoint_config",children:(0,i.jsx)(r.A,{code:"describe_endpoint_config"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.A,{code:"select"})}),(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#parameter-region",children:(0,i.jsx)("code",{children:"region"})})}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:"Returns the description of an endpoint configuration created using the CreateEndpointConfig API."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#list_endpoint_configs",children:(0,i.jsx)(r.A,{code:"list_endpoint_configs"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.A,{code:"select"})}),(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#parameter-region",children:(0,i.jsx)("code",{children:"region"})})}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:"Lists endpoint configurations."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#create_endpoint_config",children:(0,i.jsx)(r.A,{code:"create_endpoint_config"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.A,{code:"insert"})}),(0,i.jsxs)("td",{children:[(0,i.jsx)("a",{href:"#parameter-region",children:(0,i.jsx)("code",{children:"region"})}),", ",(0,i.jsx)("a",{href:"#parameter-EndpointConfigName",children:(0,i.jsx)("code",{children:"EndpointConfigName"})}),", ",(0,i.jsx)("a",{href:"#parameter-ProductionVariants",children:(0,i.jsx)("code",{children:"ProductionVariants"})})]}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:"Creates an endpoint configuration that SageMaker hosting services uses to deploy models. In the configuration, you identify one or more models, created using the CreateModel API, to deploy and the resources that you want SageMaker to provision. Then you call the CreateEndpoint API. Use this API if you want to use SageMaker hosting services to deploy models into production. In the request, you define a ProductionVariant, for each model that you want to deploy. Each ProductionVariant parameter also describes the resources that you want SageMaker to provision. This includes the number and type of ML compute instances to deploy. If you are hosting multiple models, you also assign a VariantWeight to specify how much traffic you want to allocate to each model. For example, suppose that you want to host two models, A and B, and you assign traffic weight 2 for model A and 1 for model B. SageMaker distributes two-thirds of the traffic to Model A, and one-third to model B. When you call CreateEndpoint, a load call is made to DynamoDB to verify that your endpoint configuration exists. When you read data from a DynamoDB table supporting Eventually Consistent Reads , the response might not reflect the results of a recently completed write operation. The response might include some stale data. If the dependent entities are not yet in DynamoDB, this causes a validation error. If you repeat your read request after a short time, the response should return the latest data. So retry logic is recommended to handle these possible issues. We also recommend that customers call DescribeEndpointConfig before calling CreateEndpoint to minimize the potential impact of a DynamoDB eventually consistent read."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#delete_endpoint_config",children:(0,i.jsx)(r.A,{code:"delete_endpoint_config"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.A,{code:"delete"})}),(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#parameter-region",children:(0,i.jsx)("code",{children:"region"})})}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:"Deletes an endpoint configuration. The DeleteEndpointConfig API deletes only the specified configuration. It does not delete endpoints created using the configuration. You must not delete an EndpointConfig in use by an endpoint that is live or while the UpdateEndpoint or CreateEndpoint operations are being performed on the endpoint. If you delete the EndpointConfig of an endpoint that is active or being created or updated you may lose visibility into the instance type the endpoint is using. The endpoint must be deleted in order to stop incurring charges."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.p,{children:["Parameters can be passed in the ",(0,i.jsx)(n.code,{children:"WHERE"})," clause of a query. Check the ",(0,i.jsx)(n.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Datatype"}),(0,i.jsx)("th",{children:"Description"})]})}),(0,i.jsx)("tbody",{children:(0,i.jsxs)("tr",{id:"parameter-region",children:[(0,i.jsx)("td",{children:(0,i.jsx)(r.A,{code:"region"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"AWS region (default: us-east-1)"})]})})]}),"\n",(0,i.jsxs)(n.h2,{id:"select-examples",children:[(0,i.jsx)(n.code,{children:"SELECT"})," examples"]}),"\n",(0,i.jsxs)(d.A,{defaultValue:"describe_endpoint_config",values:[{label:"describe_endpoint_config",value:"describe_endpoint_config"},{label:"list_endpoint_configs",value:"list_endpoint_configs"}],children:[(0,i.jsxs)(c.A,{value:"describe_endpoint_config",children:[(0,i.jsx)(n.p,{children:"Returns the description of an endpoint configuration created using the CreateEndpointConfig API."}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT\nAsyncInferenceConfig,\nCreationTime,\nDataCaptureConfig,\nEnableNetworkIsolation,\nEndpointConfigArn,\nEndpointConfigName,\nExecutionRoleArn,\nExplainerConfig,\nKmsKeyId,\nMetricsConfig,\nProductionVariants,\nShadowProductionVariants,\nVpcConfig\nFROM aws.sagemaker.endpoint_configs\nWHERE region = '{{ region }}' -- required\n;\n"})})]}),(0,i.jsxs)(c.A,{value:"list_endpoint_configs",children:[(0,i.jsx)(n.p,{children:"Lists endpoint configurations."}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT\nCreationTime,\nEndpointConfigArn,\nEndpointConfigName\nFROM aws.sagemaker.endpoint_configs\nWHERE region = '{{ region }}' -- required\n;\n"})})]})]}),"\n",(0,i.jsxs)(n.h2,{id:"insert-examples",children:[(0,i.jsx)(n.code,{children:"INSERT"})," examples"]}),"\n",(0,i.jsxs)(d.A,{defaultValue:"create_endpoint_config",values:[{label:"create_endpoint_config",value:"create_endpoint_config"},{label:"Manifest",value:"manifest"}],children:[(0,i.jsxs)(c.A,{value:"create_endpoint_config",children:[(0,i.jsx)(n.p,{children:"Creates an endpoint configuration that SageMaker hosting services uses to deploy models. In the configuration, you identify one or more models, created using the CreateModel API, to deploy and the resources that you want SageMaker to provision. Then you call the CreateEndpoint API. Use this API if you want to use SageMaker hosting services to deploy models into production. In the request, you define a ProductionVariant, for each model that you want to deploy. Each ProductionVariant parameter also describes the resources that you want SageMaker to provision. This includes the number and type of ML compute instances to deploy. If you are hosting multiple models, you also assign a VariantWeight to specify how much traffic you want to allocate to each model. For example, suppose that you want to host two models, A and B, and you assign traffic weight 2 for model A and 1 for model B. SageMaker distributes two-thirds of the traffic to Model A, and one-third to model B. When you call CreateEndpoint, a load call is made to DynamoDB to verify that your endpoint configuration exists. When you read data from a DynamoDB table supporting Eventually Consistent Reads , the response might not reflect the results of a recently completed write operation. The response might include some stale data. If the dependent entities are not yet in DynamoDB, this causes a validation error. If you repeat your read request after a short time, the response should return the latest data. So retry logic is recommended to handle these possible issues. We also recommend that customers call DescribeEndpointConfig before calling CreateEndpoint to minimize the potential impact of a DynamoDB eventually consistent read."}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"INSERT INTO aws.sagemaker.endpoint_configs (\nEndpointConfigName,\nProductionVariants,\nDataCaptureConfig,\nTags,\nKmsKeyId,\nAsyncInferenceConfig,\nExplainerConfig,\nShadowProductionVariants,\nExecutionRoleArn,\nVpcConfig,\nEnableNetworkIsolation,\nMetricsConfig,\nregion\n)\nSELECT \n'{{ EndpointConfigName }}' /* required */,\n'{{ ProductionVariants }}' /* required */,\n'{{ DataCaptureConfig }}',\n'{{ Tags }}',\n'{{ KmsKeyId }}',\n'{{ AsyncInferenceConfig }}',\n'{{ ExplainerConfig }}',\n'{{ ShadowProductionVariants }}',\n'{{ ExecutionRoleArn }}',\n'{{ VpcConfig }}',\n{{ EnableNetworkIsolation }},\n'{{ MetricsConfig }}',\n'{{ region }}'\nRETURNING\nEndpointConfigArn\n;\n"})})]}),(0,i.jsx)(c.A,{value:"manifest",children:(0,i.jsx)(s.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: endpoint_configs
props:
  - name: region
    value: "{{ region }}"
    description: Required parameter for the endpoint_configs resource.
  - name: EndpointConfigName
    value: "{{ EndpointConfigName }}"
    description: |
      The name of the endpoint configuration. You specify this name in a CreateEndpoint request.
  - name: ProductionVariants
    description: |
      An array of ProductionVariant objects, one for each model that you want to host at this endpoint.
    value:
      - VariantName: "{{ VariantName }}"
        ModelName: "{{ ModelName }}"
        InitialInstanceCount: {{ InitialInstanceCount }}
        InstanceType: "{{ InstanceType }}"
        InstancePools: "{{ InstancePools }}"
        VariantInstanceProvisionTimeoutInSeconds: {{ VariantInstanceProvisionTimeoutInSeconds }}
        InitialVariantWeight: {{ InitialVariantWeight }}
        AcceleratorType: "{{ AcceleratorType }}"
        CoreDumpConfig:
          DestinationS3Uri: "{{ DestinationS3Uri }}"
          KmsKeyId: "{{ KmsKeyId }}"
        ServerlessConfig:
          MemorySizeInMB: {{ MemorySizeInMB }}
          MaxConcurrency: {{ MaxConcurrency }}
          ProvisionedConcurrency: {{ ProvisionedConcurrency }}
        VolumeSizeInGB: {{ VolumeSizeInGB }}
        ModelDataDownloadTimeoutInSeconds: {{ ModelDataDownloadTimeoutInSeconds }}
        ContainerStartupHealthCheckTimeoutInSeconds: {{ ContainerStartupHealthCheckTimeoutInSeconds }}
        EnableSSMAccess: {{ EnableSSMAccess }}
        ManagedInstanceScaling:
          Status: "{{ Status }}"
          MinInstanceCount: {{ MinInstanceCount }}
          MaxInstanceCount: {{ MaxInstanceCount }}
          ScaleInPolicy:
            Strategy: "{{ Strategy }}"
            MaximumStepSize: {{ MaximumStepSize }}
            CooldownInMinutes: {{ CooldownInMinutes }}
        RoutingConfig:
          RoutingStrategy: "{{ RoutingStrategy }}"
        InferenceAmiVersion: "{{ InferenceAmiVersion }}"
        CapacityReservationConfig:
          CapacityReservationPreference: "{{ CapacityReservationPreference }}"
          MlReservationArn: "{{ MlReservationArn }}"
  - name: DataCaptureConfig
    description: |
      Configuration to control how SageMaker AI captures inference data.
    value:
      EnableCapture: {{ EnableCapture }}
      InitialSamplingPercentage: {{ InitialSamplingPercentage }}
      DestinationS3Uri: "{{ DestinationS3Uri }}"
      KmsKeyId: "{{ KmsKeyId }}"
      CaptureOptions:
        - CaptureMode: "{{ CaptureMode }}"
      CaptureContentTypeHeader:
        CsvContentTypes:
          - "{{ CsvContentTypes }}"
        JsonContentTypes:
          - "{{ JsonContentTypes }}"
  - name: Tags
    description: |
      An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in different ways, for example, by purpose, owner, or environment. For more information, see Tagging Amazon Web Services Resources.
    value:
      - Key: "{{ Key }}"
        Value: "{{ Value }}"
  - name: KmsKeyId
    value: "{{ KmsKeyId }}"
    description: |
      The Amazon Resource Name (ARN) of a Amazon Web Services Key Management Service key that SageMaker uses to encrypt data on the storage volume attached to the ML compute instance that hosts the endpoint. The KmsKeyId can be any of the following formats: Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab Key ARN: arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab Alias name: alias/ExampleAlias Alias name ARN: arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias The KMS key policy must grant permission to the IAM role that you specify in your CreateEndpoint, UpdateEndpoint requests. For more information, refer to the Amazon Web Services Key Management Service section Using Key Policies in Amazon Web Services KMS Certain Nitro-based instances include local storage, dependent on the instance type. Local storage volumes are encrypted using a hardware module on the instance. You can't request a KmsKeyId when using an instance type with local storage. If any of the models that you specify in the ProductionVariants parameter use nitro-based instances with local storage, do not specify a value for the KmsKeyId parameter. If you specify a value for KmsKeyId when using any nitro-based instances with local storage, the call to CreateEndpointConfig fails. For a list of instance types that support local instance storage, see Instance Store Volumes. For more information about local instance storage encryption, see SSD Instance Store Volumes.
  - name: AsyncInferenceConfig
    description: |
      Specifies configuration for how an endpoint performs asynchronous inference. This is a required field in order for your Endpoint to be invoked using InvokeEndpointAsync.
    value:
      ClientConfig:
        MaxConcurrentInvocationsPerInstance: {{ MaxConcurrentInvocationsPerInstance }}
      OutputConfig:
        KmsKeyId: "{{ KmsKeyId }}"
        S3OutputPath: "{{ S3OutputPath }}"
        NotificationConfig:
          SuccessTopic: "{{ SuccessTopic }}"
          ErrorTopic: "{{ ErrorTopic }}"
          IncludeInferenceResponseIn:
            - "{{ IncludeInferenceResponseIn }}"
        S3FailurePath: "{{ S3FailurePath }}"
  - name: ExplainerConfig
    description: |
      A member of CreateEndpointConfig that enables explainers.
    value:
      ClarifyExplainerConfig:
        EnableExplanations: "{{ EnableExplanations }}"
        InferenceConfig:
          FeaturesAttribute: "{{ FeaturesAttribute }}"
          ContentTemplate: "{{ ContentTemplate }}"
          MaxRecordCount: {{ MaxRecordCount }}
          MaxPayloadInMB: {{ MaxPayloadInMB }}
          ProbabilityIndex: {{ ProbabilityIndex }}
          LabelIndex: {{ LabelIndex }}
          ProbabilityAttribute: "{{ ProbabilityAttribute }}"
          LabelAttribute: "{{ LabelAttribute }}"
          LabelHeaders:
            - "{{ LabelHeaders }}"
          FeatureHeaders:
            - "{{ FeatureHeaders }}"
          FeatureTypes:
            - "{{ FeatureTypes }}"
        ShapConfig:
          ShapBaselineConfig:
            MimeType: "{{ MimeType }}"
            ShapBaseline: "{{ ShapBaseline }}"
            ShapBaselineUri: "{{ ShapBaselineUri }}"
          NumberOfSamples: {{ NumberOfSamples }}
          UseLogit: {{ UseLogit }}
          Seed: {{ Seed }}
          TextConfig:
            Language: "{{ Language }}"
            Granularity: "{{ Granularity }}"
  - name: ShadowProductionVariants
    description: |
      An array of ProductionVariant objects, one for each model that you want to host at this endpoint in shadow mode with production traffic replicated from the model specified on ProductionVariants. If you use this field, you can only specify one variant for ProductionVariants and one variant for ShadowProductionVariants.
    value:
      - VariantName: "{{ VariantName }}"
        ModelName: "{{ ModelName }}"
        InitialInstanceCount: {{ InitialInstanceCount }}
        InstanceType: "{{ InstanceType }}"
        InstancePools: "{{ InstancePools }}"
        VariantInstanceProvisionTimeoutInSeconds: {{ VariantInstanceProvisionTimeoutInSeconds }}
        InitialVariantWeight: {{ InitialVariantWeight }}
        AcceleratorType: "{{ AcceleratorType }}"
        CoreDumpConfig:
          DestinationS3Uri: "{{ DestinationS3Uri }}"
          KmsKeyId: "{{ KmsKeyId }}"
        ServerlessConfig:
          MemorySizeInMB: {{ MemorySizeInMB }}
          MaxConcurrency: {{ MaxConcurrency }}
          ProvisionedConcurrency: {{ ProvisionedConcurrency }}
        VolumeSizeInGB: {{ VolumeSizeInGB }}
        ModelDataDownloadTimeoutInSeconds: {{ ModelDataDownloadTimeoutInSeconds }}
        ContainerStartupHealthCheckTimeoutInSeconds: {{ ContainerStartupHealthCheckTimeoutInSeconds }}
        EnableSSMAccess: {{ EnableSSMAccess }}
        ManagedInstanceScaling:
          Status: "{{ Status }}"
          MinInstanceCount: {{ MinInstanceCount }}
          MaxInstanceCount: {{ MaxInstanceCount }}
          ScaleInPolicy:
            Strategy: "{{ Strategy }}"
            MaximumStepSize: {{ MaximumStepSize }}
            CooldownInMinutes: {{ CooldownInMinutes }}
        RoutingConfig:
          RoutingStrategy: "{{ RoutingStrategy }}"
        InferenceAmiVersion: "{{ InferenceAmiVersion }}"
        CapacityReservationConfig:
          CapacityReservationPreference: "{{ CapacityReservationPreference }}"
          MlReservationArn: "{{ MlReservationArn }}"
  - name: ExecutionRoleArn
    value: "{{ ExecutionRoleArn }}"
    description: |
      The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker AI can assume to perform actions on your behalf. For more information, see SageMaker AI Roles. To be able to pass this role to Amazon SageMaker AI, the caller of this action must have the iam:PassRole permission.
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
      Sets whether all model containers deployed to the endpoint are isolated. If they are, no inbound or outbound network calls can be made to or from the model containers.
  - name: MetricsConfig
    description: |
      The configuration parameters for utilization metrics.
    value:
      EnableEnhancedMetrics: {{ EnableEnhancedMetrics }}
      MetricPublishFrequencyInSeconds: {{ MetricPublishFrequencyInSeconds }}
`})})]}),"\n",(0,i.jsxs)(n.h2,{id:"delete-examples",children:[(0,i.jsx)(n.code,{children:"DELETE"})," examples"]}),"\n",(0,i.jsx)(d.A,{defaultValue:"delete_endpoint_config",values:[{label:"delete_endpoint_config",value:"delete_endpoint_config"}],children:(0,i.jsxs)(c.A,{value:"delete_endpoint_config",children:[(0,i.jsx)(n.p,{children:"Deletes an endpoint configuration. The DeleteEndpointConfig API deletes only the specified configuration. It does not delete endpoints created using the configuration. You must not delete an EndpointConfig in use by an endpoint that is live or while the UpdateEndpoint or CreateEndpoint operations are being performed on the endpoint. If you delete the EndpointConfig of an endpoint that is active or being created or updated you may lose visibility into the instance type the endpoint is using. The endpoint must be deleted in order to stop incurring charges."}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"DELETE FROM aws.sagemaker.endpoint_configs\nWHERE region = '{{ region }}' --required\n;\n"})})]})})]})}function f(e={}){let{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}}}]);