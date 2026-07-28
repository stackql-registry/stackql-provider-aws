"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["442516"],{961507(e,i,n){n.r(i),n.d(i,{metadata:()=>t,default:()=>p,frontMatter:()=>c,contentTitle:()=>x,toc:()=>j,assets:()=>h});var t=JSON.parse('{"id":"services/sagemaker/model_explainability_job_definitions/index","title":"model_explainability_job_definitions","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/sagemaker/model_explainability_job_definitions/index.md","sourceDirName":"services/sagemaker/model_explainability_job_definitions","slug":"/services/sagemaker/model_explainability_job_definitions/","permalink":"/services/sagemaker/model_explainability_job_definitions/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"model_explainability_job_definitions","hide_title":false,"hide_table_of_contents":false,"keywords":["model_explainability_job_definitions","sagemaker","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"model_cards","permalink":"/services/sagemaker/model_cards/"},"next":{"title":"model_metadatas","permalink":"/services/sagemaker/model_metadatas/"}}'),o=n(474848),l=n(28453),a=n(97362),d=n(897272),r=n(413554),s=n(541647);let c={title:"model_explainability_job_definitions",hide_title:!1,hide_table_of_contents:!1,keywords:["model_explainability_job_definitions","sagemaker","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},x,h={},j=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2}];function b(e){let i={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(i.p,{children:["Creates, updates, deletes, gets or lists a ",(0,o.jsx)("code",{children:"model_explainability_job_definitions"})," resource."]}),"\n",(0,o.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,o.jsx)("table",{children:(0,o.jsxs)("tbody",{children:[(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("b",{children:"Name"})}),(0,o.jsx)("td",{children:(0,o.jsx)(a.A,{code:"model_explainability_job_definitions"})})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("b",{children:"Type"})}),(0,o.jsx)("td",{children:"Resource"})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("b",{children:"Id"})}),(0,o.jsx)("td",{children:(0,o.jsx)(a.A,{code:"aws.sagemaker.model_explainability_job_definitions"})})]})]})}),"\n",(0,o.jsx)(i.h2,{id:"fields",children:"Fields"}),"\n",(0,o.jsxs)(i.p,{children:["The following fields are returned by ",(0,o.jsx)(i.code,{children:"SELECT"})," queries:"]}),"\n",(0,o.jsxs)(r.A,{defaultValue:"describe_model_explainability_job_definition",values:[{label:"describe_model_explainability_job_definition",value:"describe_model_explainability_job_definition"},{label:"list_model_explainability_job_definitions",value:"list_model_explainability_job_definitions"}],children:[(0,o.jsx)(s.A,{value:"describe_model_explainability_job_definition",children:(0,o.jsxs)("table",{children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Name"}),(0,o.jsx)("th",{children:"Datatype"}),(0,o.jsx)("th",{children:"Description"})]})}),(0,o.jsxs)("tbody",{children:[(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)(a.A,{code:"CreationTime"})}),(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"string (date-time)"})}),(0,o.jsx)("td",{children:"The time at which the model explainability job was created."})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)(a.A,{code:"JobDefinitionArn"})}),(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"string"})}),(0,o.jsx)("td",{children:"The Amazon Resource Name (ARN) of the model explainability job. (pattern: <code>.*</code>)"})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)(a.A,{code:"JobDefinitionName"})}),(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"string"})}),(0,o.jsx)("td",{children:"The name of the explainability job definition. The name must be unique within an Amazon Web Services Region in the Amazon Web Services account. (pattern: <code>[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}</code>)"})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)(a.A,{code:"JobResources"})}),(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"object"})}),(0,o.jsx)("td",{children:"Identifies the resources to deploy for a monitoring job."})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)(a.A,{code:"ModelExplainabilityAppSpecification"})}),(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"object"})}),(0,o.jsx)("td",{children:"Configures the model explainability job to run a specified Docker container image."})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)(a.A,{code:"ModelExplainabilityBaselineConfig"})}),(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"object"})}),(0,o.jsx)("td",{children:"The baseline configuration for a model explainability job."})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)(a.A,{code:"ModelExplainabilityJobInput"})}),(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"object"})}),(0,o.jsx)("td",{children:"Inputs for the model explainability job."})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)(a.A,{code:"ModelExplainabilityJobOutputConfig"})}),(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"object"})}),(0,o.jsx)("td",{children:"The output configuration for monitoring jobs."})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)(a.A,{code:"NetworkConfig"})}),(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"object"})}),(0,o.jsx)("td",{children:"Networking options for a model explainability job."})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)(a.A,{code:"RoleArn"})}),(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"string"})}),(0,o.jsxs)("td",{children:["The Amazon Resource Name (ARN) of the IAM role that has read permission to the input data location and write permission to the output data location in Amazon S3. (pattern: <code>arn",":aws","[a-z-]*:iam::\\d{12}",":role","/?[a-zA-Z_0-9+=,.@-_/]+</code>)"]})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)(a.A,{code:"StoppingCondition"})}),(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"object"})}),(0,o.jsx)("td",{children:"A time limit for how long the monitoring job is allowed to run before stopping."})]})]})]})}),(0,o.jsx)(s.A,{value:"list_model_explainability_job_definitions",children:(0,o.jsxs)("table",{children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Name"}),(0,o.jsx)("th",{children:"Datatype"}),(0,o.jsx)("th",{children:"Description"})]})}),(0,o.jsxs)("tbody",{children:[(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)(a.A,{code:"CreationTime"})}),(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"string (date-time)"})}),(0,o.jsx)("td",{children:"The time that the monitoring job was created."})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)(a.A,{code:"EndpointName"})}),(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"string"})}),(0,o.jsx)("td",{children:"The name of the endpoint that the job monitors. (pattern: <code>[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}</code>)"})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)(a.A,{code:"MonitoringJobDefinitionArn"})}),(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"string"})}),(0,o.jsx)("td",{children:"The Amazon Resource Name (ARN) of the monitoring job. (pattern: <code>.*</code>)"})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)(a.A,{code:"MonitoringJobDefinitionName"})}),(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"string"})}),(0,o.jsx)("td",{children:"The name of the monitoring job. (pattern: <code>[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}</code>)"})]})]})]})})]}),"\n",(0,o.jsx)(i.h2,{id:"methods",children:"Methods"}),"\n",(0,o.jsx)(i.p,{children:"The following methods are available for this resource:"}),"\n",(0,o.jsxs)("table",{children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Name"}),(0,o.jsx)("th",{children:"Accessible by"}),(0,o.jsx)("th",{children:"Required Params"}),(0,o.jsx)("th",{children:"Optional Params"}),(0,o.jsx)("th",{children:"Description"})]})}),(0,o.jsxs)("tbody",{children:[(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("a",{href:"#describe_model_explainability_job_definition",children:(0,o.jsx)(a.A,{code:"describe_model_explainability_job_definition"})})}),(0,o.jsx)("td",{children:(0,o.jsx)(a.A,{code:"select"})}),(0,o.jsx)("td",{children:(0,o.jsx)("a",{href:"#parameter-region",children:(0,o.jsx)("code",{children:"region"})})}),(0,o.jsx)("td",{}),(0,o.jsx)("td",{children:"Returns a description of a model explainability job definition."})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("a",{href:"#list_model_explainability_job_definitions",children:(0,o.jsx)(a.A,{code:"list_model_explainability_job_definitions"})})}),(0,o.jsx)("td",{children:(0,o.jsx)(a.A,{code:"select"})}),(0,o.jsx)("td",{children:(0,o.jsx)("a",{href:"#parameter-region",children:(0,o.jsx)("code",{children:"region"})})}),(0,o.jsx)("td",{}),(0,o.jsx)("td",{children:"Lists model explainability job definitions that satisfy various filters."})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("a",{href:"#create_model_explainability_job_definition",children:(0,o.jsx)(a.A,{code:"create_model_explainability_job_definition"})})}),(0,o.jsx)("td",{children:(0,o.jsx)(a.A,{code:"insert"})}),(0,o.jsxs)("td",{children:[(0,o.jsx)("a",{href:"#parameter-region",children:(0,o.jsx)("code",{children:"region"})}),", ",(0,o.jsx)("a",{href:"#parameter-JobDefinitionName",children:(0,o.jsx)("code",{children:"JobDefinitionName"})}),", ",(0,o.jsx)("a",{href:"#parameter-ModelExplainabilityAppSpecification",children:(0,o.jsx)("code",{children:"ModelExplainabilityAppSpecification"})}),", ",(0,o.jsx)("a",{href:"#parameter-ModelExplainabilityJobInput",children:(0,o.jsx)("code",{children:"ModelExplainabilityJobInput"})}),", ",(0,o.jsx)("a",{href:"#parameter-ModelExplainabilityJobOutputConfig",children:(0,o.jsx)("code",{children:"ModelExplainabilityJobOutputConfig"})}),", ",(0,o.jsx)("a",{href:"#parameter-JobResources",children:(0,o.jsx)("code",{children:"JobResources"})}),", ",(0,o.jsx)("a",{href:"#parameter-RoleArn",children:(0,o.jsx)("code",{children:"RoleArn"})})]}),(0,o.jsx)("td",{}),(0,o.jsx)("td",{children:"Creates the definition for a model explainability job."})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("a",{href:"#delete_model_explainability_job_definition",children:(0,o.jsx)(a.A,{code:"delete_model_explainability_job_definition"})})}),(0,o.jsx)("td",{children:(0,o.jsx)(a.A,{code:"delete"})}),(0,o.jsx)("td",{children:(0,o.jsx)("a",{href:"#parameter-region",children:(0,o.jsx)("code",{children:"region"})})}),(0,o.jsx)("td",{}),(0,o.jsx)("td",{children:"Deletes an Amazon SageMaker AI model explainability job definition."})]})]})]}),"\n",(0,o.jsx)(i.h2,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)(i.p,{children:["Parameters can be passed in the ",(0,o.jsx)(i.code,{children:"WHERE"})," clause of a query. Check the ",(0,o.jsx)(i.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,o.jsxs)("table",{children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Name"}),(0,o.jsx)("th",{children:"Datatype"}),(0,o.jsx)("th",{children:"Description"})]})}),(0,o.jsx)("tbody",{children:(0,o.jsxs)("tr",{id:"parameter-region",children:[(0,o.jsx)("td",{children:(0,o.jsx)(a.A,{code:"region"})}),(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"string"})}),(0,o.jsx)("td",{children:"AWS region (default: us-east-1)"})]})})]}),"\n",(0,o.jsxs)(i.h2,{id:"select-examples",children:[(0,o.jsx)(i.code,{children:"SELECT"})," examples"]}),"\n",(0,o.jsxs)(r.A,{defaultValue:"describe_model_explainability_job_definition",values:[{label:"describe_model_explainability_job_definition",value:"describe_model_explainability_job_definition"},{label:"list_model_explainability_job_definitions",value:"list_model_explainability_job_definitions"}],children:[(0,o.jsxs)(s.A,{value:"describe_model_explainability_job_definition",children:[(0,o.jsx)(i.p,{children:"Returns a description of a model explainability job definition."}),(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-sql",children:"SELECT\nCreationTime,\nJobDefinitionArn,\nJobDefinitionName,\nJobResources,\nModelExplainabilityAppSpecification,\nModelExplainabilityBaselineConfig,\nModelExplainabilityJobInput,\nModelExplainabilityJobOutputConfig,\nNetworkConfig,\nRoleArn,\nStoppingCondition\nFROM aws.sagemaker.model_explainability_job_definitions\nWHERE region = '{{ region }}' -- required\n;\n"})})]}),(0,o.jsxs)(s.A,{value:"list_model_explainability_job_definitions",children:[(0,o.jsx)(i.p,{children:"Lists model explainability job definitions that satisfy various filters."}),(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-sql",children:"SELECT\nCreationTime,\nEndpointName,\nMonitoringJobDefinitionArn,\nMonitoringJobDefinitionName\nFROM aws.sagemaker.model_explainability_job_definitions\nWHERE region = '{{ region }}' -- required\n;\n"})})]})]}),"\n",(0,o.jsxs)(i.h2,{id:"insert-examples",children:[(0,o.jsx)(i.code,{children:"INSERT"})," examples"]}),"\n",(0,o.jsxs)(r.A,{defaultValue:"create_model_explainability_job_definition",values:[{label:"create_model_explainability_job_definition",value:"create_model_explainability_job_definition"},{label:"Manifest",value:"manifest"}],children:[(0,o.jsxs)(s.A,{value:"create_model_explainability_job_definition",children:[(0,o.jsx)(i.p,{children:"Creates the definition for a model explainability job."}),(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-sql",children:"INSERT INTO aws.sagemaker.model_explainability_job_definitions (\nJobDefinitionName,\nModelExplainabilityBaselineConfig,\nModelExplainabilityAppSpecification,\nModelExplainabilityJobInput,\nModelExplainabilityJobOutputConfig,\nJobResources,\nNetworkConfig,\nRoleArn,\nStoppingCondition,\nTags,\nregion\n)\nSELECT \n'{{ JobDefinitionName }}' /* required */,\n'{{ ModelExplainabilityBaselineConfig }}',\n'{{ ModelExplainabilityAppSpecification }}' /* required */,\n'{{ ModelExplainabilityJobInput }}' /* required */,\n'{{ ModelExplainabilityJobOutputConfig }}' /* required */,\n'{{ JobResources }}' /* required */,\n'{{ NetworkConfig }}',\n'{{ RoleArn }}' /* required */,\n'{{ StoppingCondition }}',\n'{{ Tags }}',\n'{{ region }}'\nRETURNING\nJobDefinitionArn\n;\n"})})]}),(0,o.jsx)(s.A,{value:"manifest",children:(0,o.jsx)(d.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: model_explainability_job_definitions
props:
  - name: region
    value: "{{ region }}"
    description: Required parameter for the model_explainability_job_definitions resource.
  - name: JobDefinitionName
    value: "{{ JobDefinitionName }}"
    description: |
      The name of the model explainability job definition. The name must be unique within an Amazon Web Services Region in the Amazon Web Services account.
  - name: ModelExplainabilityBaselineConfig
    description: |
      The baseline configuration for a model explainability job.
    value:
      BaseliningJobName: "{{ BaseliningJobName }}"
      ConstraintsResource:
        S3Uri: "{{ S3Uri }}"
  - name: ModelExplainabilityAppSpecification
    description: |
      Configures the model explainability job to run a specified Docker container image.
    value:
      ImageUri: "{{ ImageUri }}"
      ConfigUri: "{{ ConfigUri }}"
      Environment: "{{ Environment }}"
  - name: ModelExplainabilityJobInput
    description: |
      Inputs for the model explainability job.
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
  - name: ModelExplainabilityJobOutputConfig
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
      Networking options for a model explainability job.
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
`})})]}),"\n",(0,o.jsxs)(i.h2,{id:"delete-examples",children:[(0,o.jsx)(i.code,{children:"DELETE"})," examples"]}),"\n",(0,o.jsx)(r.A,{defaultValue:"delete_model_explainability_job_definition",values:[{label:"delete_model_explainability_job_definition",value:"delete_model_explainability_job_definition"}],children:(0,o.jsxs)(s.A,{value:"delete_model_explainability_job_definition",children:[(0,o.jsx)(i.p,{children:"Deletes an Amazon SageMaker AI model explainability job definition."}),(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-sql",children:"DELETE FROM aws.sagemaker.model_explainability_job_definitions\nWHERE region = '{{ region }}' --required\n;\n"})})]})})]})}function p(e={}){let{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(b,{...e})}):b(e)}}}]);