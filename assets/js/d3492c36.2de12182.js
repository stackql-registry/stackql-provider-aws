"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["965904"],{650715(e,r,s){s.r(r),s.d(r,{metadata:()=>t,default:()=>g,frontMatter:()=>d,contentTitle:()=>u,toc:()=>p,assets:()=>h});var t=JSON.parse('{"id":"services/sagemaker/clusters/index","title":"clusters","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/sagemaker/clusters/index.md","sourceDirName":"services/sagemaker/clusters","slug":"/services/sagemaker/clusters/","permalink":"/services/sagemaker/clusters/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"clusters","hide_title":false,"hide_table_of_contents":false,"keywords":["clusters","sagemaker","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"cluster_scheduler_configs","permalink":"/services/sagemaker/cluster_scheduler_configs/"},"next":{"title":"code_repositories","permalink":"/services/sagemaker/code_repositories/"}}'),a=s(474848),n=s(28453),i=s(97362),l=s(897272),c=s(413554),o=s(541647);let d={title:"clusters",hide_title:!1,hide_table_of_contents:!1,keywords:["clusters","sagemaker","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},u,h={},p=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>UPDATE</code> examples",id:"update-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2},{value:"Lifecycle Methods",id:"lifecycle-methods",level:2}];function x(e){let r={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.p,{children:["Creates, updates, deletes, gets or lists a ",(0,a.jsx)("code",{children:"clusters"})," resource."]}),"\n",(0,a.jsx)(r.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsx)("table",{children:(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("b",{children:"Name"})}),(0,a.jsx)("td",{children:(0,a.jsx)(i.A,{code:"clusters"})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("b",{children:"Type"})}),(0,a.jsx)("td",{children:"Resource"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("b",{children:"Id"})}),(0,a.jsx)("td",{children:(0,a.jsx)(i.A,{code:"aws.sagemaker.clusters"})})]})]})}),"\n",(0,a.jsx)(r.h2,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(r.p,{children:["The following fields are returned by ",(0,a.jsx)(r.code,{children:"SELECT"})," queries:"]}),"\n",(0,a.jsxs)(c.A,{defaultValue:"describe_cluster",values:[{label:"describe_cluster",value:"describe_cluster"},{label:"list_clusters",value:"list_clusters"}],children:[(0,a.jsx)(o.A,{value:"describe_cluster",children:(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Name"}),(0,a.jsx)("th",{children:"Datatype"}),(0,a.jsx)("th",{children:"Description"})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(i.A,{code:"AutoScaling"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"object"})}),(0,a.jsx)("td",{children:"The current autoscaling configuration and status for the autoscaler."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(i.A,{code:"ClusterArn"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsxs)("td",{children:["The Amazon Resource Name (ARN) of the SageMaker HyperPod cluster. (pattern: <code>arn",":aws","[a-z-]",(0,a.jsx)(r.em,{children:":sagemaker:[a-z0-9-]"}),":[0-9]{12}",":cluster","/[a-z0-9]{12}</code>)"]})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(i.A,{code:"ClusterName"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsxs)("td",{children:["The name of the SageMaker HyperPod cluster. (pattern: <code>[a-zA-Z0-9](-",(0,a.jsx)(r.em,{children:"[a-zA-Z0-9])"}),"</code>)"]})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(i.A,{code:"ClusterRole"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsxs)("td",{children:["The Amazon Resource Name (ARN) of the IAM role that HyperPod uses for cluster autoscaling operations. (pattern: <code>arn",":aws","[a-z-]*:iam::\\d{12}",":role","/?[a-zA-Z_0-9+=,.@-_/]+</code>)"]})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(i.A,{code:"ClusterStatus"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"The status of the SageMaker HyperPod cluster. (Creating, Deleting, Failed, InService, RollingBack, SystemUpdating, Updating)"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(i.A,{code:"CreationTime"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string (date-time)"})}),(0,a.jsx)("td",{children:"The time when the SageMaker Cluster is created."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(i.A,{code:"FailureMessage"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"The failure message of the SageMaker HyperPod cluster."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(i.A,{code:"InstanceGroups"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"array"})}),(0,a.jsx)("td",{children:"The instance groups of the SageMaker HyperPod cluster."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(i.A,{code:"NodeProvisioningMode"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"The mode used for provisioning nodes in the cluster. (Continuous)"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(i.A,{code:"NodeRecovery"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"The node recovery mode configured for the SageMaker HyperPod cluster. (Automatic, None)"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(i.A,{code:"Orchestrator"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"object"})}),(0,a.jsx)("td",{children:"The type of orchestrator used for the SageMaker HyperPod cluster."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(i.A,{code:"RestrictedInstanceGroups"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"array"})}),(0,a.jsx)("td",{children:"The specialized instance groups for training models like Amazon Nova to be created in the SageMaker HyperPod cluster."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(i.A,{code:"TieredStorageConfig"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"object"})}),(0,a.jsx)("td",{children:"The current configuration for managed tier checkpointing on the HyperPod cluster. For example, this shows whether the feature is enabled and the percentage of cluster memory allocated for checkpoint storage."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(i.A,{code:"VpcConfig"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"object"})}),(0,a.jsx)("td",{children:"Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. You can control access to and from your resources by configuring a VPC. For more information, see Give SageMaker Access to Resources in your Amazon VPC."})]})]})]})}),(0,a.jsx)(o.A,{value:"list_clusters",children:(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Name"}),(0,a.jsx)("th",{children:"Datatype"}),(0,a.jsx)("th",{children:"Description"})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(i.A,{code:"ClusterArn"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsxs)("td",{children:["The Amazon Resource Name (ARN) of the SageMaker HyperPod cluster. (pattern: <code>arn",":aws","[a-z-]",(0,a.jsx)(r.em,{children:":sagemaker:[a-z0-9-]"}),":[0-9]{12}",":cluster","/[a-z0-9]{12}</code>)"]})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(i.A,{code:"ClusterName"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsxs)("td",{children:["The name of the SageMaker HyperPod cluster. (pattern: <code>[a-zA-Z0-9](-",(0,a.jsx)(r.em,{children:"[a-zA-Z0-9])"}),"</code>)"]})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(i.A,{code:"ClusterStatus"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"The status of the SageMaker HyperPod cluster. (Creating, Deleting, Failed, InService, RollingBack, SystemUpdating, Updating)"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(i.A,{code:"CreationTime"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string (date-time)"})}),(0,a.jsx)("td",{children:"The time when the SageMaker HyperPod cluster is created."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(i.A,{code:"TrainingPlanArns"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"array"})}),(0,a.jsx)("td",{children:"A list of Amazon Resource Names (ARNs) of the training plans associated with this cluster. For more information about how to reserve GPU capacity for your SageMaker HyperPod clusters using Amazon SageMaker Training Plan, see CreateTrainingPlan ."})]})]})]})})]}),"\n",(0,a.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,a.jsx)(r.p,{children:"The following methods are available for this resource:"}),"\n",(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Name"}),(0,a.jsx)("th",{children:"Accessible by"}),(0,a.jsx)("th",{children:"Required Params"}),(0,a.jsx)("th",{children:"Optional Params"}),(0,a.jsx)("th",{children:"Description"})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#describe_cluster",children:(0,a.jsx)(i.A,{code:"describe_cluster"})})}),(0,a.jsx)("td",{children:(0,a.jsx)(i.A,{code:"select"})}),(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#parameter-region",children:(0,a.jsx)("code",{children:"region"})})}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{children:"Retrieves information of a SageMaker HyperPod cluster."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#list_clusters",children:(0,a.jsx)(i.A,{code:"list_clusters"})})}),(0,a.jsx)("td",{children:(0,a.jsx)(i.A,{code:"select"})}),(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#parameter-region",children:(0,a.jsx)("code",{children:"region"})})}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{children:"Retrieves the list of SageMaker HyperPod clusters."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#create_cluster",children:(0,a.jsx)(i.A,{code:"create_cluster"})})}),(0,a.jsx)("td",{children:(0,a.jsx)(i.A,{code:"insert"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("a",{href:"#parameter-region",children:(0,a.jsx)("code",{children:"region"})}),", ",(0,a.jsx)("a",{href:"#parameter-ClusterName",children:(0,a.jsx)("code",{children:"ClusterName"})})]}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{children:"Creates an Amazon SageMaker HyperPod cluster. SageMaker HyperPod is a capability of SageMaker for creating and managing persistent clusters for developing large machine learning models, such as large language models (LLMs) and diffusion models. To learn more, see Amazon SageMaker HyperPod in the Amazon SageMaker Developer Guide."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#update_cluster",children:(0,a.jsx)(i.A,{code:"update_cluster"})})}),(0,a.jsx)("td",{children:(0,a.jsx)(i.A,{code:"update"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("a",{href:"#parameter-region",children:(0,a.jsx)("code",{children:"region"})}),", ",(0,a.jsx)("a",{href:"#parameter-ClusterName",children:(0,a.jsx)("code",{children:"ClusterName"})})]}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{children:"Updates a SageMaker HyperPod cluster."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#delete_cluster",children:(0,a.jsx)(i.A,{code:"delete_cluster"})})}),(0,a.jsx)("td",{children:(0,a.jsx)(i.A,{code:"delete"})}),(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#parameter-region",children:(0,a.jsx)("code",{children:"region"})})}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{children:"Delete a SageMaker HyperPod cluster."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#start_cluster_health_check",children:(0,a.jsx)(i.A,{code:"start_cluster_health_check"})})}),(0,a.jsx)("td",{children:(0,a.jsx)(i.A,{code:"exec"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("a",{href:"#parameter-region",children:(0,a.jsx)("code",{children:"region"})}),", ",(0,a.jsx)("a",{href:"#parameter-ClusterName",children:(0,a.jsx)("code",{children:"ClusterName"})}),", ",(0,a.jsx)("a",{href:"#parameter-DeepHealthCheckConfigurations",children:(0,a.jsx)("code",{children:"DeepHealthCheckConfigurations"})})]}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{children:"Start deep health checks for a SageMaker HyperPod cluster. You can use DescribeClusterNode API to track progress of the deep health checks. The unhealthy nodes will be automatically rebooted or replaced. Please see Resilience-related Kubernetes labels by SageMaker HyperPod for details."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#update_cluster_software",children:(0,a.jsx)(i.A,{code:"update_cluster_software"})})}),(0,a.jsx)("td",{children:(0,a.jsx)(i.A,{code:"exec"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("a",{href:"#parameter-region",children:(0,a.jsx)("code",{children:"region"})}),", ",(0,a.jsx)("a",{href:"#parameter-ClusterName",children:(0,a.jsx)("code",{children:"ClusterName"})})]}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{children:"Updates the platform software of a SageMaker HyperPod cluster for security patching. To learn how to use this API, see Update the SageMaker HyperPod platform software of a cluster. The UpgradeClusterSoftware API call may impact your SageMaker HyperPod cluster uptime and availability. Plan accordingly to mitigate potential disruptions to your workloads."})]})]})]}),"\n",(0,a.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(r.p,{children:["Parameters can be passed in the ",(0,a.jsx)(r.code,{children:"WHERE"})," clause of a query. Check the ",(0,a.jsx)(r.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Name"}),(0,a.jsx)("th",{children:"Datatype"}),(0,a.jsx)("th",{children:"Description"})]})}),(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{id:"parameter-region",children:[(0,a.jsx)("td",{children:(0,a.jsx)(i.A,{code:"region"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"AWS region (default: us-east-1)"})]})})]}),"\n",(0,a.jsxs)(r.h2,{id:"select-examples",children:[(0,a.jsx)(r.code,{children:"SELECT"})," examples"]}),"\n",(0,a.jsxs)(c.A,{defaultValue:"describe_cluster",values:[{label:"describe_cluster",value:"describe_cluster"},{label:"list_clusters",value:"list_clusters"}],children:[(0,a.jsxs)(o.A,{value:"describe_cluster",children:[(0,a.jsx)(r.p,{children:"Retrieves information of a SageMaker HyperPod cluster."}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sql",children:"SELECT\nAutoScaling,\nClusterArn,\nClusterName,\nClusterRole,\nClusterStatus,\nCreationTime,\nFailureMessage,\nInstanceGroups,\nNodeProvisioningMode,\nNodeRecovery,\nOrchestrator,\nRestrictedInstanceGroups,\nTieredStorageConfig,\nVpcConfig\nFROM aws.sagemaker.clusters\nWHERE region = '{{ region }}' -- required\n;\n"})})]}),(0,a.jsxs)(o.A,{value:"list_clusters",children:[(0,a.jsx)(r.p,{children:"Retrieves the list of SageMaker HyperPod clusters."}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sql",children:"SELECT\nClusterArn,\nClusterName,\nClusterStatus,\nCreationTime,\nTrainingPlanArns\nFROM aws.sagemaker.clusters\nWHERE region = '{{ region }}' -- required\n;\n"})})]})]}),"\n",(0,a.jsxs)(r.h2,{id:"insert-examples",children:[(0,a.jsx)(r.code,{children:"INSERT"})," examples"]}),"\n",(0,a.jsxs)(c.A,{defaultValue:"create_cluster",values:[{label:"create_cluster",value:"create_cluster"},{label:"Manifest",value:"manifest"}],children:[(0,a.jsxs)(o.A,{value:"create_cluster",children:[(0,a.jsx)(r.p,{children:"Creates an Amazon SageMaker HyperPod cluster. SageMaker HyperPod is a capability of SageMaker for creating and managing persistent clusters for developing large machine learning models, such as large language models (LLMs) and diffusion models. To learn more, see Amazon SageMaker HyperPod in the Amazon SageMaker Developer Guide."}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sql",children:"INSERT INTO aws.sagemaker.clusters (\nClusterName,\nInstanceGroups,\nRestrictedInstanceGroups,\nVpcConfig,\nTags,\nOrchestrator,\nNodeRecovery,\nTieredStorageConfig,\nNodeProvisioningMode,\nClusterRole,\nAutoScaling,\nregion\n)\nSELECT \n'{{ ClusterName }}' /* required */,\n'{{ InstanceGroups }}',\n'{{ RestrictedInstanceGroups }}',\n'{{ VpcConfig }}',\n'{{ Tags }}',\n'{{ Orchestrator }}',\n'{{ NodeRecovery }}',\n'{{ TieredStorageConfig }}',\n'{{ NodeProvisioningMode }}',\n'{{ ClusterRole }}',\n'{{ AutoScaling }}',\n'{{ region }}'\nRETURNING\nClusterArn\n;\n"})})]}),(0,a.jsx)(o.A,{value:"manifest",children:(0,a.jsx)(l.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: clusters
props:
  - name: region
    value: "{{ region }}"
    description: Required parameter for the clusters resource.
  - name: ClusterName
    value: "{{ ClusterName }}"
    description: |
      The name for the new SageMaker HyperPod cluster.
  - name: InstanceGroups
    description: |
      The instance groups to be created in the SageMaker HyperPod cluster.
    value:
      - InstanceCount: {{ InstanceCount }}
        MinInstanceCount: {{ MinInstanceCount }}
        InstanceGroupName: "{{ InstanceGroupName }}"
        InstanceType: "{{ InstanceType }}"
        InstanceRequirements:
          InstanceTypes:
            - "{{ InstanceTypes }}"
        LifeCycleConfig:
          SourceS3Uri: "{{ SourceS3Uri }}"
          OnCreate: "{{ OnCreate }}"
          OnInitComplete: "{{ OnInitComplete }}"
        ExecutionRole: "{{ ExecutionRole }}"
        ThreadsPerCore: {{ ThreadsPerCore }}
        InstanceStorageConfigs: "{{ InstanceStorageConfigs }}"
        OnStartDeepHealthChecks: "{{ OnStartDeepHealthChecks }}"
        TrainingPlanArn: "{{ TrainingPlanArn }}"
        OverrideVpcConfig:
          SecurityGroupIds:
            - "{{ SecurityGroupIds }}"
          Subnets:
            - "{{ Subnets }}"
        ScheduledUpdateConfig:
          ScheduleExpression: "{{ ScheduleExpression }}"
          DeploymentConfig:
            RollingUpdatePolicy:
              MaximumBatchSize:
                Type: "{{ Type }}"
                Value: {{ Value }}
              RollbackMaximumBatchSize:
                Type: "{{ Type }}"
                Value: {{ Value }}
            WaitIntervalInSeconds: {{ WaitIntervalInSeconds }}
            AutoRollbackConfiguration:
              - AlarmName: "{{ AlarmName }}"
        ImageId: "{{ ImageId }}"
        KubernetesConfig:
          Labels: "{{ Labels }}"
          Taints:
            - Key: "{{ Key }}"
              Value: "{{ Value }}"
              Effect: "{{ Effect }}"
        SlurmConfig:
          NodeType: "{{ NodeType }}"
          PartitionNames:
            - "{{ PartitionNames }}"
        CapacityRequirements:
          Spot: "{{ Spot }}"
          OnDemand: "{{ OnDemand }}"
        NetworkInterface:
          InterfaceType: "{{ InterfaceType }}"
  - name: RestrictedInstanceGroups
    description: |
      The specialized instance groups for training models like Amazon Nova to be created in the SageMaker HyperPod cluster.
    value:
      - InstanceCount: {{ InstanceCount }}
        InstanceGroupName: "{{ InstanceGroupName }}"
        InstanceType: "{{ InstanceType }}"
        ExecutionRole: "{{ ExecutionRole }}"
        ThreadsPerCore: {{ ThreadsPerCore }}
        InstanceStorageConfigs: "{{ InstanceStorageConfigs }}"
        OnStartDeepHealthChecks: "{{ OnStartDeepHealthChecks }}"
        TrainingPlanArn: "{{ TrainingPlanArn }}"
        OverrideVpcConfig:
          SecurityGroupIds:
            - "{{ SecurityGroupIds }}"
          Subnets:
            - "{{ Subnets }}"
        ScheduledUpdateConfig:
          ScheduleExpression: "{{ ScheduleExpression }}"
          DeploymentConfig:
            RollingUpdatePolicy:
              MaximumBatchSize:
                Type: "{{ Type }}"
                Value: {{ Value }}
              RollbackMaximumBatchSize:
                Type: "{{ Type }}"
                Value: {{ Value }}
            WaitIntervalInSeconds: {{ WaitIntervalInSeconds }}
            AutoRollbackConfiguration:
              - AlarmName: "{{ AlarmName }}"
        EnvironmentConfig:
          FSxLustreConfig:
            SizeInGiB: {{ SizeInGiB }}
            PerUnitStorageThroughput: {{ PerUnitStorageThroughput }}
  - name: VpcConfig
    description: |
      Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. You can control access to and from your resources by configuring a VPC. For more information, see Give SageMaker Access to Resources in your Amazon VPC.
    value:
      SecurityGroupIds:
        - "{{ SecurityGroupIds }}"
      Subnets:
        - "{{ Subnets }}"
  - name: Tags
    description: |
      Custom tags for managing the SageMaker HyperPod cluster as an Amazon Web Services resource. You can add tags to your cluster in the same way you add them in other Amazon Web Services services that support tagging. To learn more about tagging Amazon Web Services resources in general, see Tagging Amazon Web Services Resources User Guide.
    value:
      - Key: "{{ Key }}"
        Value: "{{ Value }}"
  - name: Orchestrator
    description: |
      The type of orchestrator to use for the SageMaker HyperPod cluster. Currently, supported values are "Eks" and "Slurm", which is to use an Amazon Elastic Kubernetes Service or Slurm cluster as the orchestrator. If you specify the Orchestrator field, you must provide exactly one orchestrator configuration: either Eks or Slurm. Specifying both or providing an empty configuration returns a validation error.
    value:
      Eks:
        ClusterArn: "{{ ClusterArn }}"
      Slurm:
        SlurmConfigStrategy: "{{ SlurmConfigStrategy }}"
  - name: NodeRecovery
    value: "{{ NodeRecovery }}"
    description: |
      The node recovery mode for the SageMaker HyperPod cluster. When set to Automatic, SageMaker HyperPod will automatically reboot or replace faulty nodes when issues are detected. When set to None, cluster administrators will need to manually manage any faulty cluster instances.
    valid_values: ['Automatic', 'None']
  - name: TieredStorageConfig
    description: |
      The configuration for managed tier checkpointing on the HyperPod cluster. When enabled, this feature uses a multi-tier storage approach for storing model checkpoints, providing faster checkpoint operations and improved fault tolerance across cluster nodes.
    value:
      Mode: "{{ Mode }}"
      InstanceMemoryAllocationPercentage: {{ InstanceMemoryAllocationPercentage }}
  - name: NodeProvisioningMode
    value: "{{ NodeProvisioningMode }}"
    description: |
      The mode for provisioning nodes in the cluster. You can specify the following modes: Continuous: Scaling behavior that enables 1) concurrent operation execution within instance groups, 2) continuous retry mechanisms for failed operations, 3) enhanced customer visibility into cluster events through detailed event streams, 4) partial provisioning capabilities. Your clusters and instance groups remain InService while scaling. This mode is only supported for EKS orchestrated clusters.
    valid_values: ['Continuous']
  - name: ClusterRole
    value: "{{ ClusterRole }}"
    description: |
      The Amazon Resource Name (ARN) of the IAM role that HyperPod assumes to perform cluster autoscaling operations. This role must have permissions for sagemaker:BatchAddClusterNodes and sagemaker:BatchDeleteClusterNodes. This is only required when autoscaling is enabled and when HyperPod is performing autoscaling operations.
  - name: AutoScaling
    description: |
      The autoscaling configuration for the cluster. Enables automatic scaling of cluster nodes based on workload demand using a Karpenter-based system.
    value:
      Mode: "{{ Mode }}"
      AutoScalerType: "{{ AutoScalerType }}"
`})})]}),"\n",(0,a.jsxs)(r.h2,{id:"update-examples",children:[(0,a.jsx)(r.code,{children:"UPDATE"})," examples"]}),"\n",(0,a.jsx)(c.A,{defaultValue:"update_cluster",values:[{label:"update_cluster",value:"update_cluster"}],children:(0,a.jsxs)(o.A,{value:"update_cluster",children:[(0,a.jsx)(r.p,{children:"Updates a SageMaker HyperPod cluster."}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sql",children:"UPDATE aws.sagemaker.clusters\nSET \nClusterName = '{{ ClusterName }}',\nInstanceGroups = '{{ InstanceGroups }}',\nRestrictedInstanceGroups = '{{ RestrictedInstanceGroups }}',\nTieredStorageConfig = '{{ TieredStorageConfig }}',\nNodeRecovery = '{{ NodeRecovery }}',\nInstanceGroupsToDelete = '{{ InstanceGroupsToDelete }}',\nNodeProvisioningMode = '{{ NodeProvisioningMode }}',\nClusterRole = '{{ ClusterRole }}',\nAutoScaling = '{{ AutoScaling }}',\nOrchestrator = '{{ Orchestrator }}'\nWHERE \nregion = '{{ region }}' --required\nAND ClusterName = '{{ ClusterName }}' --required\nRETURNING\nClusterArn;\n"})})]})}),"\n",(0,a.jsxs)(r.h2,{id:"delete-examples",children:[(0,a.jsx)(r.code,{children:"DELETE"})," examples"]}),"\n",(0,a.jsx)(c.A,{defaultValue:"delete_cluster",values:[{label:"delete_cluster",value:"delete_cluster"}],children:(0,a.jsxs)(o.A,{value:"delete_cluster",children:[(0,a.jsx)(r.p,{children:"Delete a SageMaker HyperPod cluster."}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sql",children:"DELETE FROM aws.sagemaker.clusters\nWHERE region = '{{ region }}' --required\n;\n"})})]})}),"\n",(0,a.jsx)(r.h2,{id:"lifecycle-methods",children:"Lifecycle Methods"}),"\n",(0,a.jsxs)(c.A,{defaultValue:"start_cluster_health_check",values:[{label:"start_cluster_health_check",value:"start_cluster_health_check"},{label:"update_cluster_software",value:"update_cluster_software"}],children:[(0,a.jsxs)(o.A,{value:"start_cluster_health_check",children:[(0,a.jsx)(r.p,{children:"Start deep health checks for a SageMaker HyperPod cluster. You can use DescribeClusterNode API to track progress of the deep health checks. The unhealthy nodes will be automatically rebooted or replaced. Please see Resilience-related Kubernetes labels by SageMaker HyperPod for details."}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sql",children:'EXEC aws.sagemaker.clusters.start_cluster_health_check \n@region=\'{{ region }}\' --required \n@@json=\n\'{\n"ClusterName": "{{ ClusterName }}", \n"DeepHealthCheckConfigurations": "{{ DeepHealthCheckConfigurations }}"\n}\'\n;\n'})})]}),(0,a.jsxs)(o.A,{value:"update_cluster_software",children:[(0,a.jsx)(r.p,{children:"Updates the platform software of a SageMaker HyperPod cluster for security patching. To learn how to use this API, see Update the SageMaker HyperPod platform software of a cluster. The UpgradeClusterSoftware API call may impact your SageMaker HyperPod cluster uptime and availability. Plan accordingly to mitigate potential disruptions to your workloads."}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sql",children:'EXEC aws.sagemaker.clusters.update_cluster_software \n@region=\'{{ region }}\' --required \n@@json=\n\'{\n"ClusterName": "{{ ClusterName }}", \n"InstanceGroups": "{{ InstanceGroups }}", \n"DeploymentConfig": "{{ DeploymentConfig }}", \n"ImageId": "{{ ImageId }}"\n}\'\n;\n'})})]})]})]})}function g(e={}){let{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}}}]);