"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["891577"],{405871(e,i,t){t.r(i),t.d(i,{metadata:()=>n,default:()=>f,frontMatter:()=>c,contentTitle:()=>h,toc:()=>j,assets:()=>u});var n=JSON.parse('{"id":"services/sagemaker/data_quality_job_definitions/index","title":"data_quality_job_definitions","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/sagemaker/data_quality_job_definitions/index.md","sourceDirName":"services/sagemaker/data_quality_job_definitions","slug":"/services/sagemaker/data_quality_job_definitions/","permalink":"/services/sagemaker/data_quality_job_definitions/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"data_quality_job_definitions","hide_title":false,"hide_table_of_contents":false,"keywords":["data_quality_job_definitions","sagemaker","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"contexts","permalink":"/services/sagemaker/contexts/"},"next":{"title":"device_fleet_reports","permalink":"/services/sagemaker/device_fleet_reports/"}}'),a=t(474848),r=t(28453),o=t(97362),s=t(897272),d=t(413554),l=t(541647);let c={title:"data_quality_job_definitions",hide_title:!1,hide_table_of_contents:!1,keywords:["data_quality_job_definitions","sagemaker","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},h,u={},j=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2}];function x(e){let i={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(i.p,{children:["Creates, updates, deletes, gets or lists a ",(0,a.jsx)("code",{children:"data_quality_job_definitions"})," resource."]}),"\n",(0,a.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsx)("table",{children:(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("b",{children:"Name"})}),(0,a.jsx)("td",{children:(0,a.jsx)(o.A,{code:"data_quality_job_definitions"})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("b",{children:"Type"})}),(0,a.jsx)("td",{children:"Resource"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("b",{children:"Id"})}),(0,a.jsx)("td",{children:(0,a.jsx)(o.A,{code:"aws.sagemaker.data_quality_job_definitions"})})]})]})}),"\n",(0,a.jsx)(i.h2,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(i.p,{children:["The following fields are returned by ",(0,a.jsx)(i.code,{children:"SELECT"})," queries:"]}),"\n",(0,a.jsxs)(d.A,{defaultValue:"describe_data_quality_job_definition",values:[{label:"describe_data_quality_job_definition",value:"describe_data_quality_job_definition"},{label:"list_data_quality_job_definitions",value:"list_data_quality_job_definitions"}],children:[(0,a.jsx)(l.A,{value:"describe_data_quality_job_definition",children:(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Name"}),(0,a.jsx)("th",{children:"Datatype"}),(0,a.jsx)("th",{children:"Description"})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(o.A,{code:"CreationTime"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string (date-time)"})}),(0,a.jsx)("td",{children:"The time that the data quality monitoring job definition was created."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(o.A,{code:"DataQualityAppSpecification"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"object"})}),(0,a.jsx)("td",{children:"Information about the container that runs the data quality monitoring job."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(o.A,{code:"DataQualityBaselineConfig"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"object"})}),(0,a.jsx)("td",{children:"The constraints and baselines for the data quality monitoring job definition."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(o.A,{code:"DataQualityJobInput"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"object"})}),(0,a.jsx)("td",{children:"The list of inputs for the data quality monitoring job. Currently endpoints are supported."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(o.A,{code:"DataQualityJobOutputConfig"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"object"})}),(0,a.jsx)("td",{children:"The output configuration for monitoring jobs."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(o.A,{code:"JobDefinitionArn"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"The Amazon Resource Name (ARN) of the data quality monitoring job definition. (pattern: <code>.*</code>)"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(o.A,{code:"JobDefinitionName"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"The name of the data quality monitoring job definition. (pattern: <code>[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}</code>)"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(o.A,{code:"JobResources"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"object"})}),(0,a.jsx)("td",{children:"Identifies the resources to deploy for a monitoring job."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(o.A,{code:"NetworkConfig"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"object"})}),(0,a.jsx)("td",{children:"The networking configuration for the data quality monitoring job."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(o.A,{code:"RoleArn"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsxs)("td",{children:["The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker AI can assume to perform tasks on your behalf. (pattern: <code>arn",":aws","[a-z-]*:iam::\\d{12}",":role","/?[a-zA-Z_0-9+=,.@-_/]+</code>)"]})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(o.A,{code:"StoppingCondition"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"object"})}),(0,a.jsx)("td",{children:"A time limit for how long the monitoring job is allowed to run before stopping."})]})]})]})}),(0,a.jsx)(l.A,{value:"list_data_quality_job_definitions",children:(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Name"}),(0,a.jsx)("th",{children:"Datatype"}),(0,a.jsx)("th",{children:"Description"})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(o.A,{code:"CreationTime"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string (date-time)"})}),(0,a.jsx)("td",{children:"The time that the monitoring job was created."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(o.A,{code:"EndpointName"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"The name of the endpoint that the job monitors. (pattern: <code>[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}</code>)"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(o.A,{code:"MonitoringJobDefinitionArn"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"The Amazon Resource Name (ARN) of the monitoring job. (pattern: <code>.*</code>)"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(o.A,{code:"MonitoringJobDefinitionName"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"The name of the monitoring job. (pattern: <code>[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}</code>)"})]})]})]})})]}),"\n",(0,a.jsx)(i.h2,{id:"methods",children:"Methods"}),"\n",(0,a.jsx)(i.p,{children:"The following methods are available for this resource:"}),"\n",(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Name"}),(0,a.jsx)("th",{children:"Accessible by"}),(0,a.jsx)("th",{children:"Required Params"}),(0,a.jsx)("th",{children:"Optional Params"}),(0,a.jsx)("th",{children:"Description"})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#describe_data_quality_job_definition",children:(0,a.jsx)(o.A,{code:"describe_data_quality_job_definition"})})}),(0,a.jsx)("td",{children:(0,a.jsx)(o.A,{code:"select"})}),(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#parameter-region",children:(0,a.jsx)("code",{children:"region"})})}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{children:"Gets the details of a data quality monitoring job definition."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#list_data_quality_job_definitions",children:(0,a.jsx)(o.A,{code:"list_data_quality_job_definitions"})})}),(0,a.jsx)("td",{children:(0,a.jsx)(o.A,{code:"select"})}),(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#parameter-region",children:(0,a.jsx)("code",{children:"region"})})}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{children:"Lists the data quality job definitions in your account."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#create_data_quality_job_definition",children:(0,a.jsx)(o.A,{code:"create_data_quality_job_definition"})})}),(0,a.jsx)("td",{children:(0,a.jsx)(o.A,{code:"insert"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("a",{href:"#parameter-region",children:(0,a.jsx)("code",{children:"region"})}),", ",(0,a.jsx)("a",{href:"#parameter-JobDefinitionName",children:(0,a.jsx)("code",{children:"JobDefinitionName"})}),", ",(0,a.jsx)("a",{href:"#parameter-DataQualityAppSpecification",children:(0,a.jsx)("code",{children:"DataQualityAppSpecification"})}),", ",(0,a.jsx)("a",{href:"#parameter-DataQualityJobInput",children:(0,a.jsx)("code",{children:"DataQualityJobInput"})}),", ",(0,a.jsx)("a",{href:"#parameter-DataQualityJobOutputConfig",children:(0,a.jsx)("code",{children:"DataQualityJobOutputConfig"})}),", ",(0,a.jsx)("a",{href:"#parameter-JobResources",children:(0,a.jsx)("code",{children:"JobResources"})}),", ",(0,a.jsx)("a",{href:"#parameter-RoleArn",children:(0,a.jsx)("code",{children:"RoleArn"})})]}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{children:"Creates a definition for a job that monitors data quality and drift. For information about model monitor, see Amazon SageMaker AI Model Monitor."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#delete_data_quality_job_definition",children:(0,a.jsx)(o.A,{code:"delete_data_quality_job_definition"})})}),(0,a.jsx)("td",{children:(0,a.jsx)(o.A,{code:"delete"})}),(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#parameter-region",children:(0,a.jsx)("code",{children:"region"})})}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{children:"Deletes a data quality monitoring job definition."})]})]})]}),"\n",(0,a.jsx)(i.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(i.p,{children:["Parameters can be passed in the ",(0,a.jsx)(i.code,{children:"WHERE"})," clause of a query. Check the ",(0,a.jsx)(i.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Name"}),(0,a.jsx)("th",{children:"Datatype"}),(0,a.jsx)("th",{children:"Description"})]})}),(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{id:"parameter-region",children:[(0,a.jsx)("td",{children:(0,a.jsx)(o.A,{code:"region"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"AWS region (default: us-east-1)"})]})})]}),"\n",(0,a.jsxs)(i.h2,{id:"select-examples",children:[(0,a.jsx)(i.code,{children:"SELECT"})," examples"]}),"\n",(0,a.jsxs)(d.A,{defaultValue:"describe_data_quality_job_definition",values:[{label:"describe_data_quality_job_definition",value:"describe_data_quality_job_definition"},{label:"list_data_quality_job_definitions",value:"list_data_quality_job_definitions"}],children:[(0,a.jsxs)(l.A,{value:"describe_data_quality_job_definition",children:[(0,a.jsx)(i.p,{children:"Gets the details of a data quality monitoring job definition."}),(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-sql",children:"SELECT\nCreationTime,\nDataQualityAppSpecification,\nDataQualityBaselineConfig,\nDataQualityJobInput,\nDataQualityJobOutputConfig,\nJobDefinitionArn,\nJobDefinitionName,\nJobResources,\nNetworkConfig,\nRoleArn,\nStoppingCondition\nFROM aws.sagemaker.data_quality_job_definitions\nWHERE region = '{{ region }}' -- required\n;\n"})})]}),(0,a.jsxs)(l.A,{value:"list_data_quality_job_definitions",children:[(0,a.jsx)(i.p,{children:"Lists the data quality job definitions in your account."}),(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-sql",children:"SELECT\nCreationTime,\nEndpointName,\nMonitoringJobDefinitionArn,\nMonitoringJobDefinitionName\nFROM aws.sagemaker.data_quality_job_definitions\nWHERE region = '{{ region }}' -- required\n;\n"})})]})]}),"\n",(0,a.jsxs)(i.h2,{id:"insert-examples",children:[(0,a.jsx)(i.code,{children:"INSERT"})," examples"]}),"\n",(0,a.jsxs)(d.A,{defaultValue:"create_data_quality_job_definition",values:[{label:"create_data_quality_job_definition",value:"create_data_quality_job_definition"},{label:"Manifest",value:"manifest"}],children:[(0,a.jsxs)(l.A,{value:"create_data_quality_job_definition",children:[(0,a.jsx)(i.p,{children:"Creates a definition for a job that monitors data quality and drift. For information about model monitor, see Amazon SageMaker AI Model Monitor."}),(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-sql",children:"INSERT INTO aws.sagemaker.data_quality_job_definitions (\nJobDefinitionName,\nDataQualityBaselineConfig,\nDataQualityAppSpecification,\nDataQualityJobInput,\nDataQualityJobOutputConfig,\nJobResources,\nNetworkConfig,\nRoleArn,\nStoppingCondition,\nTags,\nregion\n)\nSELECT \n'{{ JobDefinitionName }}' /* required */,\n'{{ DataQualityBaselineConfig }}',\n'{{ DataQualityAppSpecification }}' /* required */,\n'{{ DataQualityJobInput }}' /* required */,\n'{{ DataQualityJobOutputConfig }}' /* required */,\n'{{ JobResources }}' /* required */,\n'{{ NetworkConfig }}',\n'{{ RoleArn }}' /* required */,\n'{{ StoppingCondition }}',\n'{{ Tags }}',\n'{{ region }}'\nRETURNING\nJobDefinitionArn\n;\n"})})]}),(0,a.jsx)(l.A,{value:"manifest",children:(0,a.jsx)(s.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: data_quality_job_definitions
props:
  - name: region
    value: "{{ region }}"
    description: Required parameter for the data_quality_job_definitions resource.
  - name: JobDefinitionName
    value: "{{ JobDefinitionName }}"
    description: |
      The name for the monitoring job definition.
  - name: DataQualityBaselineConfig
    description: |
      Configures the constraints and baselines for the monitoring job.
    value:
      BaseliningJobName: "{{ BaseliningJobName }}"
      ConstraintsResource:
        S3Uri: "{{ S3Uri }}"
      StatisticsResource:
        S3Uri: "{{ S3Uri }}"
  - name: DataQualityAppSpecification
    description: |
      Specifies the container that runs the monitoring job.
    value:
      ImageUri: "{{ ImageUri }}"
      ContainerEntrypoint:
        - "{{ ContainerEntrypoint }}"
      ContainerArguments:
        - "{{ ContainerArguments }}"
      RecordPreprocessorSourceUri: "{{ RecordPreprocessorSourceUri }}"
      PostAnalyticsProcessorSourceUri: "{{ PostAnalyticsProcessorSourceUri }}"
      Environment: "{{ Environment }}"
  - name: DataQualityJobInput
    description: |
      A list of inputs for the monitoring job. Currently endpoints are supported as monitoring inputs.
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
  - name: DataQualityJobOutputConfig
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
      Specifies networking configuration for the monitoring job.
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
`})})]}),"\n",(0,a.jsxs)(i.h2,{id:"delete-examples",children:[(0,a.jsx)(i.code,{children:"DELETE"})," examples"]}),"\n",(0,a.jsx)(d.A,{defaultValue:"delete_data_quality_job_definition",values:[{label:"delete_data_quality_job_definition",value:"delete_data_quality_job_definition"}],children:(0,a.jsxs)(l.A,{value:"delete_data_quality_job_definition",children:[(0,a.jsx)(i.p,{children:"Deletes a data quality monitoring job definition."}),(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-sql",children:"DELETE FROM aws.sagemaker.data_quality_job_definitions\nWHERE region = '{{ region }}' --required\n;\n"})})]})})]})}function f(e={}){let{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}}}]);