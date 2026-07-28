"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["750316"],{971353(e,t,r){r.r(t),r.d(t,{metadata:()=>i,default:()=>u,frontMatter:()=>c,contentTitle:()=>h,toc:()=>p,assets:()=>m});var i=JSON.parse('{"id":"services/sagemaker/algorithms/index","title":"algorithms","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/sagemaker/algorithms/index.md","sourceDirName":"services/sagemaker/algorithms","slug":"/services/sagemaker/algorithms/","permalink":"/services/sagemaker/algorithms/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"algorithms","hide_title":false,"hide_table_of_contents":false,"keywords":["algorithms","sagemaker","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"ai_workload_configs","permalink":"/services/sagemaker/ai_workload_configs/"},"next":{"title":"aliases","permalink":"/services/sagemaker/aliases/"}}'),n=r(474848),a=r(28453),s=r(97362),o=r(897272),l=r(413554),d=r(541647);let c={title:"algorithms",hide_title:!1,hide_table_of_contents:!1,keywords:["algorithms","sagemaker","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},h,m={},p=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2}];function g(e){let t={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Creates, updates, deletes, gets or lists an ",(0,n.jsx)("code",{children:"algorithms"})," resource."]}),"\n",(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)("table",{children:(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Name"})}),(0,n.jsx)("td",{children:(0,n.jsx)(s.A,{code:"algorithms"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Type"})}),(0,n.jsx)("td",{children:"Resource"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Id"})}),(0,n.jsx)("td",{children:(0,n.jsx)(s.A,{code:"aws.sagemaker.algorithms"})})]})]})}),"\n",(0,n.jsx)(t.h2,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(t.p,{children:["The following fields are returned by ",(0,n.jsx)(t.code,{children:"SELECT"})," queries:"]}),"\n",(0,n.jsxs)(l.A,{defaultValue:"describe_algorithm",values:[{label:"describe_algorithm",value:"describe_algorithm"},{label:"list_algorithms",value:"list_algorithms"}],children:[(0,n.jsx)(d.A,{value:"describe_algorithm",children:(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Datatype"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(s.A,{code:"AlgorithmArn"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsxs)("td",{children:["The Amazon Resource Name (ARN) of the algorithm. (pattern: <code>arn",":aws","[a-z-]*:sagemaker:[a-z0-9-]{9,16}:[0-9]{12}",":algorithm","/[\\S]{1,2048}</code>)"]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(s.A,{code:"AlgorithmDescription"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"A brief summary about the algorithm. (pattern: <code>[\\p{L}\\p{M}\\p{Z}\\p{S}\\p{N}\\p{P}]*</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(s.A,{code:"AlgorithmName"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The name of the algorithm being described. (pattern: <code>[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(s.A,{code:"AlgorithmStatus"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The current status of the algorithm. (Pending, InProgress, Completed, Failed, Deleting)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(s.A,{code:"AlgorithmStatusDetails"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"Details about the current status of the algorithm."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(s.A,{code:"CertifyForMarketplace"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"boolean"})}),(0,n.jsx)("td",{children:"Whether the algorithm is certified to be listed in Amazon Web Services Marketplace."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(s.A,{code:"CreationTime"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string (date-time)"})}),(0,n.jsx)("td",{children:"A timestamp specifying when the algorithm was created."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(s.A,{code:"InferenceSpecification"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"Details about inference jobs that the algorithm runs."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(s.A,{code:"ProductId"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsxs)("td",{children:["The product identifier of the algorithm. (pattern: <code>[a-zA-Z0-9](-",(0,n.jsx)(t.em,{children:"[a-zA-Z0-9])"}),"</code>)"]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(s.A,{code:"TrainingSpecification"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"Details about training jobs run by this algorithm."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(s.A,{code:"ValidationSpecification"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"Details about configurations for one or more training jobs that SageMaker runs to test the algorithm."})]})]})]})}),(0,n.jsx)(d.A,{value:"list_algorithms",children:(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Datatype"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(s.A,{code:"AlgorithmArn"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsxs)("td",{children:["The Amazon Resource Name (ARN) of the algorithm. (pattern: <code>arn",":aws","[a-z-]*:sagemaker:[a-z0-9-]{9,16}:[0-9]{12}",":algorithm","/[\\S]{1,2048}</code>)"]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(s.A,{code:"AlgorithmDescription"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"A brief description of the algorithm. (pattern: <code>[\\p{L}\\p{M}\\p{Z}\\p{S}\\p{N}\\p{P}]*</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(s.A,{code:"AlgorithmName"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The name of the algorithm that is described by the summary. (pattern: <code>[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(s.A,{code:"AlgorithmStatus"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The overall status of the algorithm. (Pending, InProgress, Completed, Failed, Deleting)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(s.A,{code:"CreationTime"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string (date-time)"})}),(0,n.jsx)("td",{children:"A timestamp that shows when the algorithm was created."})]})]})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(t.p,{children:"The following methods are available for this resource:"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Accessible by"}),(0,n.jsx)("th",{children:"Required Params"}),(0,n.jsx)("th",{children:"Optional Params"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#describe_algorithm",children:(0,n.jsx)(s.A,{code:"describe_algorithm"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(s.A,{code:"select"})}),(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Returns a description of the specified algorithm that is in your account."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#list_algorithms",children:(0,n.jsx)(s.A,{code:"list_algorithms"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(s.A,{code:"select"})}),(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Lists the machine learning algorithms that have been created."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#create_algorithm",children:(0,n.jsx)(s.A,{code:"create_algorithm"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(s.A,{code:"insert"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})}),", ",(0,n.jsx)("a",{href:"#parameter-AlgorithmName",children:(0,n.jsx)("code",{children:"AlgorithmName"})}),", ",(0,n.jsx)("a",{href:"#parameter-TrainingSpecification",children:(0,n.jsx)("code",{children:"TrainingSpecification"})})]}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Create a machine learning algorithm that you can use in SageMaker and list in the Amazon Web Services Marketplace."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#delete_algorithm",children:(0,n.jsx)(s.A,{code:"delete_algorithm"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(s.A,{code:"delete"})}),(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Removes the specified algorithm from your account."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.p,{children:["Parameters can be passed in the ",(0,n.jsx)(t.code,{children:"WHERE"})," clause of a query. Check the ",(0,n.jsx)(t.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Datatype"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsx)("tbody",{children:(0,n.jsxs)("tr",{id:"parameter-region",children:[(0,n.jsx)("td",{children:(0,n.jsx)(s.A,{code:"region"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"AWS region (default: us-east-1)"})]})})]}),"\n",(0,n.jsxs)(t.h2,{id:"select-examples",children:[(0,n.jsx)(t.code,{children:"SELECT"})," examples"]}),"\n",(0,n.jsxs)(l.A,{defaultValue:"describe_algorithm",values:[{label:"describe_algorithm",value:"describe_algorithm"},{label:"list_algorithms",value:"list_algorithms"}],children:[(0,n.jsxs)(d.A,{value:"describe_algorithm",children:[(0,n.jsx)(t.p,{children:"Returns a description of the specified algorithm that is in your account."}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"SELECT\nAlgorithmArn,\nAlgorithmDescription,\nAlgorithmName,\nAlgorithmStatus,\nAlgorithmStatusDetails,\nCertifyForMarketplace,\nCreationTime,\nInferenceSpecification,\nProductId,\nTrainingSpecification,\nValidationSpecification\nFROM aws.sagemaker.algorithms\nWHERE region = '{{ region }}' -- required\n;\n"})})]}),(0,n.jsxs)(d.A,{value:"list_algorithms",children:[(0,n.jsx)(t.p,{children:"Lists the machine learning algorithms that have been created."}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"SELECT\nAlgorithmArn,\nAlgorithmDescription,\nAlgorithmName,\nAlgorithmStatus,\nCreationTime\nFROM aws.sagemaker.algorithms\nWHERE region = '{{ region }}' -- required\n;\n"})})]})]}),"\n",(0,n.jsxs)(t.h2,{id:"insert-examples",children:[(0,n.jsx)(t.code,{children:"INSERT"})," examples"]}),"\n",(0,n.jsxs)(l.A,{defaultValue:"create_algorithm",values:[{label:"create_algorithm",value:"create_algorithm"},{label:"Manifest",value:"manifest"}],children:[(0,n.jsxs)(d.A,{value:"create_algorithm",children:[(0,n.jsx)(t.p,{children:"Create a machine learning algorithm that you can use in SageMaker and list in the Amazon Web Services Marketplace."}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"INSERT INTO aws.sagemaker.algorithms (\nAlgorithmName,\nAlgorithmDescription,\nTrainingSpecification,\nInferenceSpecification,\nValidationSpecification,\nCertifyForMarketplace,\nTags,\nregion\n)\nSELECT \n'{{ AlgorithmName }}' /* required */,\n'{{ AlgorithmDescription }}',\n'{{ TrainingSpecification }}' /* required */,\n'{{ InferenceSpecification }}',\n'{{ ValidationSpecification }}',\n{{ CertifyForMarketplace }},\n'{{ Tags }}',\n'{{ region }}'\nRETURNING\nAlgorithmArn\n;\n"})})]}),(0,n.jsx)(d.A,{value:"manifest",children:(0,n.jsx)(o.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: algorithms
props:
  - name: region
    value: "{{ region }}"
    description: Required parameter for the algorithms resource.
  - name: AlgorithmName
    value: "{{ AlgorithmName }}"
    description: |
      The name of the algorithm.
  - name: AlgorithmDescription
    value: "{{ AlgorithmDescription }}"
    description: |
      A description of the algorithm.
  - name: TrainingSpecification
    description: |
      Specifies details about training jobs run by this algorithm, including the following: The Amazon ECR path of the container and the version digest of the algorithm. The hyperparameters that the algorithm supports. The instance types that the algorithm supports for training. Whether the algorithm supports distributed training. The metrics that the algorithm emits to Amazon CloudWatch. Which metrics that the algorithm emits can be used as the objective metric for hyperparameter tuning jobs. The input channels that the algorithm supports for training data. For example, an algorithm might support train, validation, and test channels.
    value:
      TrainingImage: "{{ TrainingImage }}"
      TrainingImageDigest: "{{ TrainingImageDigest }}"
      SupportedHyperParameters:
        - Name: "{{ Name }}"
          Description: "{{ Description }}"
          Type: "{{ Type }}"
          Range:
            IntegerParameterRangeSpecification:
              MinValue: "{{ MinValue }}"
              MaxValue: "{{ MaxValue }}"
            ContinuousParameterRangeSpecification:
              MinValue: "{{ MinValue }}"
              MaxValue: "{{ MaxValue }}"
            CategoricalParameterRangeSpecification:
              Values:
                - "{{ Values }}"
          IsTunable: {{ IsTunable }}
          IsRequired: {{ IsRequired }}
          DefaultValue: "{{ DefaultValue }}"
      SupportedTrainingInstanceTypes:
        - "{{ SupportedTrainingInstanceTypes }}"
      SupportsDistributedTraining: {{ SupportsDistributedTraining }}
      MetricDefinitions:
        - Name: "{{ Name }}"
          Regex: "{{ Regex }}"
      TrainingChannels:
        - Name: "{{ Name }}"
          Description: "{{ Description }}"
          IsRequired: {{ IsRequired }}
          SupportedContentTypes: "{{ SupportedContentTypes }}"
          SupportedCompressionTypes: "{{ SupportedCompressionTypes }}"
          SupportedInputModes: "{{ SupportedInputModes }}"
      SupportedTuningJobObjectiveMetrics:
        - Type: "{{ Type }}"
          MetricName: "{{ MetricName }}"
      AdditionalS3DataSource:
        S3DataType: "{{ S3DataType }}"
        S3Uri: "{{ S3Uri }}"
        CompressionType: "{{ CompressionType }}"
        ETag: "{{ ETag }}"
  - name: InferenceSpecification
    description: |
      Specifies details about inference jobs that the algorithm runs, including the following: The Amazon ECR paths of containers that contain the inference code and model artifacts. The instance types that the algorithm supports for transform jobs and real-time endpoints used for inference. The input and output content formats that the algorithm supports for inference.
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
      Specifies configurations for one or more training jobs and that SageMaker runs to test the algorithm's training code and, optionally, one or more batch transform jobs that SageMaker runs to test the algorithm's inference code.
    value:
      ValidationRole: "{{ ValidationRole }}"
      ValidationProfiles:
        - ProfileName: "{{ ProfileName }}"
          TrainingJobDefinition:
            TrainingInputMode: "{{ TrainingInputMode }}"
            HyperParameters: "{{ HyperParameters }}"
            InputDataConfig:
              - ChannelName: "{{ ChannelName }}"
                DataSource:
                  S3DataSource: "{{ S3DataSource }}"
                  FileSystemDataSource: "{{ FileSystemDataSource }}"
                  DatasetSource: "{{ DatasetSource }}"
                ContentType: "{{ ContentType }}"
                CompressionType: "{{ CompressionType }}"
                RecordWrapperType: "{{ RecordWrapperType }}"
                InputMode: "{{ InputMode }}"
                ShuffleConfig:
                  Seed: {{ Seed }}
            OutputDataConfig:
              KmsKeyId: "{{ KmsKeyId }}"
              S3OutputPath: "{{ S3OutputPath }}"
              CompressionType: "{{ CompressionType }}"
            ResourceConfig:
              InstanceType: "{{ InstanceType }}"
              InstanceCount: {{ InstanceCount }}
              VolumeSizeInGB: {{ VolumeSizeInGB }}
              VolumeKmsKeyId: "{{ VolumeKmsKeyId }}"
              KeepAlivePeriodInSeconds: {{ KeepAlivePeriodInSeconds }}
              InstanceGroups:
                - InstanceType: "{{ InstanceType }}"
                  InstanceCount: {{ InstanceCount }}
                  InstanceGroupName: "{{ InstanceGroupName }}"
              TrainingPlanArn: "{{ TrainingPlanArn }}"
              InstancePlacementConfig:
                EnableMultipleJobs: {{ EnableMultipleJobs }}
                PlacementSpecifications: "{{ PlacementSpecifications }}"
            StoppingCondition:
              MaxRuntimeInSeconds: {{ MaxRuntimeInSeconds }}
              MaxWaitTimeInSeconds: {{ MaxWaitTimeInSeconds }}
              MaxPendingTimeInSeconds: {{ MaxPendingTimeInSeconds }}
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
  - name: CertifyForMarketplace
    value: {{ CertifyForMarketplace }}
    description: |
      Whether to certify the algorithm so that it can be listed in Amazon Web Services Marketplace.
  - name: Tags
    description: |
      An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in different ways, for example, by purpose, owner, or environment. For more information, see Tagging Amazon Web Services Resources.
    value:
      - Key: "{{ Key }}"
        Value: "{{ Value }}"
`})})]}),"\n",(0,n.jsxs)(t.h2,{id:"delete-examples",children:[(0,n.jsx)(t.code,{children:"DELETE"})," examples"]}),"\n",(0,n.jsx)(l.A,{defaultValue:"delete_algorithm",values:[{label:"delete_algorithm",value:"delete_algorithm"}],children:(0,n.jsxs)(d.A,{value:"delete_algorithm",children:[(0,n.jsx)(t.p,{children:"Removes the specified algorithm from your account."}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"DELETE FROM aws.sagemaker.algorithms\nWHERE region = '{{ region }}' --required\n;\n"})})]})})]})}function u(e={}){let{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}}}]);