"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["704865"],{803025(e,i,n){n.r(i),n.d(i,{metadata:()=>t,default:()=>x,frontMatter:()=>c,contentTitle:()=>u,toc:()=>j,assets:()=>h});var t=JSON.parse('{"id":"services/sagemaker/model_quality_job_definitions/index","title":"model_quality_job_definitions","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/sagemaker/model_quality_job_definitions/index.md","sourceDirName":"services/sagemaker/model_quality_job_definitions","slug":"/services/sagemaker/model_quality_job_definitions/","permalink":"/services/sagemaker/model_quality_job_definitions/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"model_quality_job_definitions","hide_title":false,"hide_table_of_contents":false,"keywords":["model_quality_job_definitions","sagemaker","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"model_packages","permalink":"/services/sagemaker/model_packages/"},"next":{"title":"models","permalink":"/services/sagemaker/models/"}}'),o=n(474848),r=n(28453),d=n(97362),s=n(897272),l=n(413554),a=n(541647);let c={title:"model_quality_job_definitions",hide_title:!1,hide_table_of_contents:!1,keywords:["model_quality_job_definitions","sagemaker","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},u,h={},j=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2}];function m(e){let i={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(i.p,{children:["Creates, updates, deletes, gets or lists a ",(0,o.jsx)("code",{children:"model_quality_job_definitions"})," resource."]}),"\n",(0,o.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,o.jsx)("table",{children:(0,o.jsxs)("tbody",{children:[(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("b",{children:"Name"})}),(0,o.jsx)("td",{children:(0,o.jsx)(d.A,{code:"model_quality_job_definitions"})})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("b",{children:"Type"})}),(0,o.jsx)("td",{children:"Resource"})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("b",{children:"Id"})}),(0,o.jsx)("td",{children:(0,o.jsx)(d.A,{code:"aws.sagemaker.model_quality_job_definitions"})})]})]})}),"\n",(0,o.jsx)(i.h2,{id:"fields",children:"Fields"}),"\n",(0,o.jsxs)(i.p,{children:["The following fields are returned by ",(0,o.jsx)(i.code,{children:"SELECT"})," queries:"]}),"\n",(0,o.jsxs)(l.A,{defaultValue:"describe_model_quality_job_definition",values:[{label:"describe_model_quality_job_definition",value:"describe_model_quality_job_definition"},{label:"list_model_quality_job_definitions",value:"list_model_quality_job_definitions"}],children:[(0,o.jsx)(a.A,{value:"describe_model_quality_job_definition",children:(0,o.jsxs)("table",{children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Name"}),(0,o.jsx)("th",{children:"Datatype"}),(0,o.jsx)("th",{children:"Description"})]})}),(0,o.jsxs)("tbody",{children:[(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)(d.A,{code:"CreationTime"})}),(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"string (date-time)"})}),(0,o.jsx)("td",{children:"The time at which the model quality job was created."})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)(d.A,{code:"JobDefinitionArn"})}),(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"string"})}),(0,o.jsx)("td",{children:"The Amazon Resource Name (ARN) of the model quality job. (pattern: <code>.*</code>)"})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)(d.A,{code:"JobDefinitionName"})}),(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"string"})}),(0,o.jsx)("td",{children:"The name of the quality job definition. The name must be unique within an Amazon Web Services Region in the Amazon Web Services account. (pattern: <code>[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}</code>)"})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)(d.A,{code:"JobResources"})}),(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"object"})}),(0,o.jsx)("td",{children:"Identifies the resources to deploy for a monitoring job."})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)(d.A,{code:"ModelQualityAppSpecification"})}),(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"object"})}),(0,o.jsx)("td",{children:"Configures the model quality job to run a specified Docker container image."})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)(d.A,{code:"ModelQualityBaselineConfig"})}),(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"object"})}),(0,o.jsx)("td",{children:"The baseline configuration for a model quality job."})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)(d.A,{code:"ModelQualityJobInput"})}),(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"object"})}),(0,o.jsx)("td",{children:"Inputs for the model quality job."})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)(d.A,{code:"ModelQualityJobOutputConfig"})}),(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"object"})}),(0,o.jsx)("td",{children:"The output configuration for monitoring jobs."})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)(d.A,{code:"NetworkConfig"})}),(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"object"})}),(0,o.jsx)("td",{children:"Networking options for a model quality job."})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)(d.A,{code:"RoleArn"})}),(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"string"})}),(0,o.jsxs)("td",{children:["The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker AI can assume to perform tasks on your behalf. (pattern: <code>arn",":aws","[a-z-]*:iam::\\d{12}",":role","/?[a-zA-Z_0-9+=,.@-_/]+</code>)"]})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)(d.A,{code:"StoppingCondition"})}),(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"object"})}),(0,o.jsx)("td",{children:"A time limit for how long the monitoring job is allowed to run before stopping."})]})]})]})}),(0,o.jsx)(a.A,{value:"list_model_quality_job_definitions",children:(0,o.jsxs)("table",{children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Name"}),(0,o.jsx)("th",{children:"Datatype"}),(0,o.jsx)("th",{children:"Description"})]})}),(0,o.jsxs)("tbody",{children:[(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)(d.A,{code:"CreationTime"})}),(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"string (date-time)"})}),(0,o.jsx)("td",{children:"The time that the monitoring job was created."})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)(d.A,{code:"EndpointName"})}),(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"string"})}),(0,o.jsx)("td",{children:"The name of the endpoint that the job monitors. (pattern: <code>[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}</code>)"})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)(d.A,{code:"MonitoringJobDefinitionArn"})}),(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"string"})}),(0,o.jsx)("td",{children:"The Amazon Resource Name (ARN) of the monitoring job. (pattern: <code>.*</code>)"})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)(d.A,{code:"MonitoringJobDefinitionName"})}),(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"string"})}),(0,o.jsx)("td",{children:"The name of the monitoring job. (pattern: <code>[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}</code>)"})]})]})]})})]}),"\n",(0,o.jsx)(i.h2,{id:"methods",children:"Methods"}),"\n",(0,o.jsx)(i.p,{children:"The following methods are available for this resource:"}),"\n",(0,o.jsxs)("table",{children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Name"}),(0,o.jsx)("th",{children:"Accessible by"}),(0,o.jsx)("th",{children:"Required Params"}),(0,o.jsx)("th",{children:"Optional Params"}),(0,o.jsx)("th",{children:"Description"})]})}),(0,o.jsxs)("tbody",{children:[(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("a",{href:"#describe_model_quality_job_definition",children:(0,o.jsx)(d.A,{code:"describe_model_quality_job_definition"})})}),(0,o.jsx)("td",{children:(0,o.jsx)(d.A,{code:"select"})}),(0,o.jsx)("td",{children:(0,o.jsx)("a",{href:"#parameter-region",children:(0,o.jsx)("code",{children:"region"})})}),(0,o.jsx)("td",{}),(0,o.jsx)("td",{children:"Returns a description of a model quality job definition."})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("a",{href:"#list_model_quality_job_definitions",children:(0,o.jsx)(d.A,{code:"list_model_quality_job_definitions"})})}),(0,o.jsx)("td",{children:(0,o.jsx)(d.A,{code:"select"})}),(0,o.jsx)("td",{children:(0,o.jsx)("a",{href:"#parameter-region",children:(0,o.jsx)("code",{children:"region"})})}),(0,o.jsx)("td",{}),(0,o.jsx)("td",{children:"Gets a list of model quality monitoring job definitions in your account."})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("a",{href:"#create_model_quality_job_definition",children:(0,o.jsx)(d.A,{code:"create_model_quality_job_definition"})})}),(0,o.jsx)("td",{children:(0,o.jsx)(d.A,{code:"insert"})}),(0,o.jsxs)("td",{children:[(0,o.jsx)("a",{href:"#parameter-region",children:(0,o.jsx)("code",{children:"region"})}),", ",(0,o.jsx)("a",{href:"#parameter-JobDefinitionName",children:(0,o.jsx)("code",{children:"JobDefinitionName"})}),", ",(0,o.jsx)("a",{href:"#parameter-ModelQualityAppSpecification",children:(0,o.jsx)("code",{children:"ModelQualityAppSpecification"})}),", ",(0,o.jsx)("a",{href:"#parameter-ModelQualityJobInput",children:(0,o.jsx)("code",{children:"ModelQualityJobInput"})}),", ",(0,o.jsx)("a",{href:"#parameter-ModelQualityJobOutputConfig",children:(0,o.jsx)("code",{children:"ModelQualityJobOutputConfig"})}),", ",(0,o.jsx)("a",{href:"#parameter-JobResources",children:(0,o.jsx)("code",{children:"JobResources"})}),", ",(0,o.jsx)("a",{href:"#parameter-RoleArn",children:(0,o.jsx)("code",{children:"RoleArn"})})]}),(0,o.jsx)("td",{}),(0,o.jsx)("td",{children:"Creates a definition for a job that monitors model quality and drift. For information about model monitor, see Amazon SageMaker AI Model Monitor."})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("a",{href:"#delete_model_quality_job_definition",children:(0,o.jsx)(d.A,{code:"delete_model_quality_job_definition"})})}),(0,o.jsx)("td",{children:(0,o.jsx)(d.A,{code:"delete"})}),(0,o.jsx)("td",{children:(0,o.jsx)("a",{href:"#parameter-region",children:(0,o.jsx)("code",{children:"region"})})}),(0,o.jsx)("td",{}),(0,o.jsx)("td",{children:"Deletes the secified model quality monitoring job definition."})]})]})]}),"\n",(0,o.jsx)(i.h2,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)(i.p,{children:["Parameters can be passed in the ",(0,o.jsx)(i.code,{children:"WHERE"})," clause of a query. Check the ",(0,o.jsx)(i.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,o.jsxs)("table",{children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Name"}),(0,o.jsx)("th",{children:"Datatype"}),(0,o.jsx)("th",{children:"Description"})]})}),(0,o.jsx)("tbody",{children:(0,o.jsxs)("tr",{id:"parameter-region",children:[(0,o.jsx)("td",{children:(0,o.jsx)(d.A,{code:"region"})}),(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"string"})}),(0,o.jsx)("td",{children:"AWS region (default: us-east-1)"})]})})]}),"\n",(0,o.jsxs)(i.h2,{id:"select-examples",children:[(0,o.jsx)(i.code,{children:"SELECT"})," examples"]}),"\n",(0,o.jsxs)(l.A,{defaultValue:"describe_model_quality_job_definition",values:[{label:"describe_model_quality_job_definition",value:"describe_model_quality_job_definition"},{label:"list_model_quality_job_definitions",value:"list_model_quality_job_definitions"}],children:[(0,o.jsxs)(a.A,{value:"describe_model_quality_job_definition",children:[(0,o.jsx)(i.p,{children:"Returns a description of a model quality job definition."}),(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-sql",children:"SELECT\nCreationTime,\nJobDefinitionArn,\nJobDefinitionName,\nJobResources,\nModelQualityAppSpecification,\nModelQualityBaselineConfig,\nModelQualityJobInput,\nModelQualityJobOutputConfig,\nNetworkConfig,\nRoleArn,\nStoppingCondition\nFROM aws.sagemaker.model_quality_job_definitions\nWHERE region = '{{ region }}' -- required\n;\n"})})]}),(0,o.jsxs)(a.A,{value:"list_model_quality_job_definitions",children:[(0,o.jsx)(i.p,{children:"Gets a list of model quality monitoring job definitions in your account."}),(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-sql",children:"SELECT\nCreationTime,\nEndpointName,\nMonitoringJobDefinitionArn,\nMonitoringJobDefinitionName\nFROM aws.sagemaker.model_quality_job_definitions\nWHERE region = '{{ region }}' -- required\n;\n"})})]})]}),"\n",(0,o.jsxs)(i.h2,{id:"insert-examples",children:[(0,o.jsx)(i.code,{children:"INSERT"})," examples"]}),"\n",(0,o.jsxs)(l.A,{defaultValue:"create_model_quality_job_definition",values:[{label:"create_model_quality_job_definition",value:"create_model_quality_job_definition"},{label:"Manifest",value:"manifest"}],children:[(0,o.jsxs)(a.A,{value:"create_model_quality_job_definition",children:[(0,o.jsx)(i.p,{children:"Creates a definition for a job that monitors model quality and drift. For information about model monitor, see Amazon SageMaker AI Model Monitor."}),(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-sql",children:"INSERT INTO aws.sagemaker.model_quality_job_definitions (\nJobDefinitionName,\nModelQualityBaselineConfig,\nModelQualityAppSpecification,\nModelQualityJobInput,\nModelQualityJobOutputConfig,\nJobResources,\nNetworkConfig,\nRoleArn,\nStoppingCondition,\nTags,\nregion\n)\nSELECT \n'{{ JobDefinitionName }}' /* required */,\n'{{ ModelQualityBaselineConfig }}',\n'{{ ModelQualityAppSpecification }}' /* required */,\n'{{ ModelQualityJobInput }}' /* required */,\n'{{ ModelQualityJobOutputConfig }}' /* required */,\n'{{ JobResources }}' /* required */,\n'{{ NetworkConfig }}',\n'{{ RoleArn }}' /* required */,\n'{{ StoppingCondition }}',\n'{{ Tags }}',\n'{{ region }}'\nRETURNING\nJobDefinitionArn\n;\n"})})]}),(0,o.jsx)(a.A,{value:"manifest",children:(0,o.jsx)(s.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: model_quality_job_definitions
props:
  - name: region
    value: "{{ region }}"
    description: Required parameter for the model_quality_job_definitions resource.
  - name: JobDefinitionName
    value: "{{ JobDefinitionName }}"
    description: |
      The name of the monitoring job definition.
  - name: ModelQualityBaselineConfig
    description: |
      Specifies the constraints and baselines for the monitoring job.
    value:
      BaseliningJobName: "{{ BaseliningJobName }}"
      ConstraintsResource:
        S3Uri: "{{ S3Uri }}"
  - name: ModelQualityAppSpecification
    description: |
      The container that runs the monitoring job.
    value:
      ImageUri: "{{ ImageUri }}"
      ContainerEntrypoint:
        - "{{ ContainerEntrypoint }}"
      ContainerArguments:
        - "{{ ContainerArguments }}"
      RecordPreprocessorSourceUri: "{{ RecordPreprocessorSourceUri }}"
      PostAnalyticsProcessorSourceUri: "{{ PostAnalyticsProcessorSourceUri }}"
      ProblemType: "{{ ProblemType }}"
      Environment: "{{ Environment }}"
  - name: ModelQualityJobInput
    description: |
      A list of the inputs that are monitored. Currently endpoints are supported.
    value:
      EndpointInput:
        EndpointName: "{{ EndpointName }}"
        LocalPath: "{{ LocalPath }}"
        S3InputMode: "{{ S3InputMode }}"
        S3DataDistributionType: "{{ S3DataDistributionType }}"
        FeaturesAttribute: "{{ FeaturesAttribute }}"
        InferenceAttribute: "{{ InferenceAttribute }}"
        ProbabilityAttribute: "{{ ProbabilityAttribute }}"
        ProbabilityThresholdAttribute: {{ ProbabilityThresholdAttribute }}
        StartTimeOffset: "{{ StartTimeOffset }}"
        EndTimeOffset: "{{ EndTimeOffset }}"
        ExcludeFeaturesAttribute: "{{ ExcludeFeaturesAttribute }}"
      BatchTransformInput:
        DataCapturedDestinationS3Uri: "{{ DataCapturedDestinationS3Uri }}"
        DatasetFormat:
          Csv:
            Header: {{ Header }}
          Json:
            Line: {{ Line }}
          Parquet: "{{ Parquet }}"
        LocalPath: "{{ LocalPath }}"
        S3InputMode: "{{ S3InputMode }}"
        S3DataDistributionType: "{{ S3DataDistributionType }}"
        FeaturesAttribute: "{{ FeaturesAttribute }}"
        InferenceAttribute: "{{ InferenceAttribute }}"
        ProbabilityAttribute: "{{ ProbabilityAttribute }}"
        ProbabilityThresholdAttribute: {{ ProbabilityThresholdAttribute }}
        StartTimeOffset: "{{ StartTimeOffset }}"
        EndTimeOffset: "{{ EndTimeOffset }}"
        ExcludeFeaturesAttribute: "{{ ExcludeFeaturesAttribute }}"
      GroundTruthS3Input:
        S3Uri: "{{ S3Uri }}"
  - name: ModelQualityJobOutputConfig
    description: |
      The output configuration for monitoring jobs.
    value:
      MonitoringOutputs:
        - S3Output:
            S3Uri: "{{ S3Uri }}"
            LocalPath: "{{ LocalPath }}"
            S3UploadMode: "{{ S3UploadMode }}"
      KmsKeyId: "{{ KmsKeyId }}"
  - name: JobResources
    description: |
      Identifies the resources to deploy for a monitoring job.
    value:
      ClusterConfig:
        InstanceCount: {{ InstanceCount }}
        InstanceType: "{{ InstanceType }}"
        VolumeSizeInGB: {{ VolumeSizeInGB }}
        VolumeKmsKeyId: "{{ VolumeKmsKeyId }}"
  - name: NetworkConfig
    description: |
      Specifies the network configuration for the monitoring job.
    value:
      EnableInterContainerTrafficEncryption: {{ EnableInterContainerTrafficEncryption }}
      EnableNetworkIsolation: {{ EnableNetworkIsolation }}
      VpcConfig:
        SecurityGroupIds:
          - "{{ SecurityGroupIds }}"
        Subnets:
          - "{{ Subnets }}"
  - name: RoleArn
    value: "{{ RoleArn }}"
    description: |
      The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker AI can assume to perform tasks on your behalf.
  - name: StoppingCondition
    description: |
      A time limit for how long the monitoring job is allowed to run before stopping.
    value:
      MaxRuntimeInSeconds: {{ MaxRuntimeInSeconds }}
  - name: Tags
    description: |
      (Optional) An array of key-value pairs. For more information, see Using Cost Allocation Tags in the Amazon Web Services Billing and Cost Management User Guide.
    value:
      - Key: "{{ Key }}"
        Value: "{{ Value }}"
`})})]}),"\n",(0,o.jsxs)(i.h2,{id:"delete-examples",children:[(0,o.jsx)(i.code,{children:"DELETE"})," examples"]}),"\n",(0,o.jsx)(l.A,{defaultValue:"delete_model_quality_job_definition",values:[{label:"delete_model_quality_job_definition",value:"delete_model_quality_job_definition"}],children:(0,o.jsxs)(a.A,{value:"delete_model_quality_job_definition",children:[(0,o.jsx)(i.p,{children:"Deletes the secified model quality monitoring job definition."}),(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-sql",children:"DELETE FROM aws.sagemaker.model_quality_job_definitions\nWHERE region = '{{ region }}' --required\n;\n"})})]})})]})}function x(e={}){let{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}}}]);