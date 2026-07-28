"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["450409"],{933267(e,n,t){t.r(n),t.d(n,{metadata:()=>r,default:()=>g,frontMatter:()=>l,contentTitle:()=>h,toc:()=>m,assets:()=>u});var r=JSON.parse('{"id":"services/sagemaker/hyper_parameter_tuning_jobs/index","title":"hyper_parameter_tuning_jobs","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/sagemaker/hyper_parameter_tuning_jobs/index.md","sourceDirName":"services/sagemaker/hyper_parameter_tuning_jobs","slug":"/services/sagemaker/hyper_parameter_tuning_jobs/","permalink":"/services/sagemaker/hyper_parameter_tuning_jobs/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"hyper_parameter_tuning_jobs","hide_title":false,"hide_table_of_contents":false,"keywords":["hyper_parameter_tuning_jobs","sagemaker","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"human_task_uis","permalink":"/services/sagemaker/human_task_uis/"},"next":{"title":"image_versions","permalink":"/services/sagemaker/image_versions/"}}'),a=t(474848),i=t(28453),s=t(97362),o=t(897272),d=t(413554),c=t(541647);let l={title:"hyper_parameter_tuning_jobs",hide_title:!1,hide_table_of_contents:!1,keywords:["hyper_parameter_tuning_jobs","sagemaker","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},h,u={},m=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2},{value:"Lifecycle Methods",id:"lifecycle-methods",level:2}];function p(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Creates, updates, deletes, gets or lists a ",(0,a.jsx)("code",{children:"hyper_parameter_tuning_jobs"})," resource."]}),"\n",(0,a.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsx)("table",{children:(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("b",{children:"Name"})}),(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"hyper_parameter_tuning_jobs"})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("b",{children:"Type"})}),(0,a.jsx)("td",{children:"Resource"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("b",{children:"Id"})}),(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"aws.sagemaker.hyper_parameter_tuning_jobs"})})]})]})}),"\n",(0,a.jsx)(n.h2,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(n.p,{children:["The following fields are returned by ",(0,a.jsx)(n.code,{children:"SELECT"})," queries:"]}),"\n",(0,a.jsxs)(d.A,{defaultValue:"describe_hyper_parameter_tuning_job",values:[{label:"describe_hyper_parameter_tuning_job",value:"describe_hyper_parameter_tuning_job"},{label:"list_hyper_parameter_tuning_jobs",value:"list_hyper_parameter_tuning_jobs"}],children:[(0,a.jsx)(c.A,{value:"describe_hyper_parameter_tuning_job",children:(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Name"}),(0,a.jsx)("th",{children:"Datatype"}),(0,a.jsx)("th",{children:"Description"})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"Autotune"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"object"})}),(0,a.jsx)("td",{children:"A flag to indicate if autotune is enabled for the hyperparameter tuning job."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"BestTrainingJob"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"object"})}),(0,a.jsx)("td",{children:"A TrainingJobSummary object that describes the training job that completed with the best current HyperParameterTuningJobObjective."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"ConsumedResources"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"object"})}),(0,a.jsx)("td",{children:"The total resources consumed by your hyperparameter tuning job."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"CreationTime"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string (date-time)"})}),(0,a.jsx)("td",{children:"The date and time that the tuning job started."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"FailureReason"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"If the tuning job failed, the reason it failed."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"HyperParameterTuningEndTime"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string (date-time)"})}),(0,a.jsx)("td",{children:"The date and time that the tuning job ended."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"HyperParameterTuningJobArn"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsxs)("td",{children:["The Amazon Resource Name (ARN) of the tuning job. (pattern: <code>arn",":aws","[a-z-]",(0,a.jsx)(n.em,{children:":sagemaker:[a-z0-9-]"}),":[0-9]{12}",":hyper-parameter-tuning-job","/.*</code>)"]})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"HyperParameterTuningJobConfig"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"object"})}),(0,a.jsx)("td",{children:"The HyperParameterTuningJobConfig object that specifies the configuration of the tuning job."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"HyperParameterTuningJobName"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"The name of the hyperparameter tuning job. (pattern: <code>[a-zA-Z0-9](-*[a-zA-Z0-9]){0,31}</code>)"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"HyperParameterTuningJobStatus"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"The status of the tuning job. (Completed, InProgress, Failed, Stopped, Stopping, Deleting, DeleteFailed)"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"LastModifiedTime"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string (date-time)"})}),(0,a.jsx)("td",{children:"The date and time that the status of the tuning job was modified."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"ObjectiveStatusCounters"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"object"})}),(0,a.jsx)("td",{children:"The ObjectiveStatusCounters object that specifies the number of training jobs, categorized by the status of their final objective metric, that this tuning job launched."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"OverallBestTrainingJob"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"object"})}),(0,a.jsx)("td",{children:"If the hyperparameter tuning job is an warm start tuning job with a WarmStartType of IDENTICAL_DATA_AND_ALGORITHM, this is the TrainingJobSummary for the training job with the best objective metric value of all training jobs launched by this tuning job and all parent jobs specified for the warm start tuning job."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"TrainingJobDefinition"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"object"})}),(0,a.jsx)("td",{children:"Defines the training jobs launched by a hyperparameter tuning job."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"TrainingJobDefinitions"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"array"})}),(0,a.jsx)("td",{children:"A list of the HyperParameterTrainingJobDefinition objects launched for this tuning job."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"TrainingJobStatusCounters"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"object"})}),(0,a.jsx)("td",{children:"The TrainingJobStatusCounters object that specifies the number of training jobs, categorized by status, that this tuning job launched."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"TuningJobCompletionDetails"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"object"})}),(0,a.jsx)("td",{children:"Tuning job completion information returned as the response from a hyperparameter tuning job. This information tells if your tuning job has or has not converged. It also includes the number of training jobs that have not improved model performance as evaluated against the objective function."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"WarmStartConfig"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"object"})}),(0,a.jsx)("td",{children:"The configuration for starting the hyperparameter parameter tuning job using one or more previous tuning jobs as a starting point. The results of previous tuning jobs are used to inform which combinations of hyperparameters to search over in the new tuning job."})]})]})]})}),(0,a.jsx)(c.A,{value:"list_hyper_parameter_tuning_jobs",children:(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Name"}),(0,a.jsx)("th",{children:"Datatype"}),(0,a.jsx)("th",{children:"Description"})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"CreationTime"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string (date-time)"})}),(0,a.jsx)("td",{children:"The date and time that the tuning job was created."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"HyperParameterTuningEndTime"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string (date-time)"})}),(0,a.jsx)("td",{children:"The date and time that the tuning job ended."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"HyperParameterTuningJobArn"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsxs)("td",{children:["The Amazon Resource Name (ARN) of the tuning job. (pattern: <code>arn",":aws","[a-z-]",(0,a.jsx)(n.em,{children:":sagemaker:[a-z0-9-]"}),":[0-9]{12}",":hyper-parameter-tuning-job","/.*</code>)"]})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"HyperParameterTuningJobName"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"The name of the tuning job. (pattern: <code>[a-zA-Z0-9](-*[a-zA-Z0-9]){0,31}</code>)"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"HyperParameterTuningJobStatus"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"The status of the tuning job. (Completed, InProgress, Failed, Stopped, Stopping, Deleting, DeleteFailed)"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"LastModifiedTime"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string (date-time)"})}),(0,a.jsx)("td",{children:"The date and time that the tuning job was modified."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"ObjectiveStatusCounters"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"object"})}),(0,a.jsx)("td",{children:"The ObjectiveStatusCounters object that specifies the numbers of training jobs, categorized by objective metric status, that this tuning job launched."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"ResourceLimits"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"object"})}),(0,a.jsx)("td",{children:"The ResourceLimits object that specifies the maximum number of training jobs and parallel training jobs allowed for this tuning job."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"Strategy"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"Specifies the search strategy hyperparameter tuning uses to choose which hyperparameters to evaluate at each iteration. (Bayesian, Random, Hyperband, Grid)"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"TrainingJobStatusCounters"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"object"})}),(0,a.jsx)("td",{children:"The TrainingJobStatusCounters object that specifies the numbers of training jobs, categorized by status, that this tuning job launched."})]})]})]})})]}),"\n",(0,a.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,a.jsx)(n.p,{children:"The following methods are available for this resource:"}),"\n",(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Name"}),(0,a.jsx)("th",{children:"Accessible by"}),(0,a.jsx)("th",{children:"Required Params"}),(0,a.jsx)("th",{children:"Optional Params"}),(0,a.jsx)("th",{children:"Description"})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#describe_hyper_parameter_tuning_job",children:(0,a.jsx)(s.A,{code:"describe_hyper_parameter_tuning_job"})})}),(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"select"})}),(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#parameter-region",children:(0,a.jsx)("code",{children:"region"})})}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{children:"Returns a description of a hyperparameter tuning job, depending on the fields selected. These fields can include the name, Amazon Resource Name (ARN), job status of your tuning job and more."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#list_hyper_parameter_tuning_jobs",children:(0,a.jsx)(s.A,{code:"list_hyper_parameter_tuning_jobs"})})}),(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"select"})}),(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#parameter-region",children:(0,a.jsx)("code",{children:"region"})})}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{children:"Gets a list of HyperParameterTuningJobSummary objects that describe the hyperparameter tuning jobs launched in your account."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#create_hyper_parameter_tuning_job",children:(0,a.jsx)(s.A,{code:"create_hyper_parameter_tuning_job"})})}),(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"insert"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("a",{href:"#parameter-region",children:(0,a.jsx)("code",{children:"region"})}),", ",(0,a.jsx)("a",{href:"#parameter-HyperParameterTuningJobName",children:(0,a.jsx)("code",{children:"HyperParameterTuningJobName"})}),", ",(0,a.jsx)("a",{href:"#parameter-HyperParameterTuningJobConfig",children:(0,a.jsx)("code",{children:"HyperParameterTuningJobConfig"})})]}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{children:"Starts a hyperparameter tuning job. A hyperparameter tuning job finds the best version of a model by running many training jobs on your dataset using the algorithm you choose and values for hyperparameters within ranges that you specify. It then chooses the hyperparameter values that result in a model that performs the best, as measured by an objective metric that you choose. A hyperparameter tuning job automatically creates Amazon SageMaker experiments, trials, and trial components for each training job that it runs. You can view these entities in Amazon SageMaker Studio. For more information, see View Experiments, Trials, and Trial Components. Do not include any security-sensitive information including account access IDs, secrets, or tokens in any hyperparameter fields. As part of the shared responsibility model, you are responsible for any potential exposure, unauthorized access, or compromise of your sensitive data if caused by any security-sensitive information included in the request hyperparameter variable or plain text fields.."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#delete_hyper_parameter_tuning_job",children:(0,a.jsx)(s.A,{code:"delete_hyper_parameter_tuning_job"})})}),(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"delete"})}),(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#parameter-region",children:(0,a.jsx)("code",{children:"region"})})}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{children:"Deletes a hyperparameter tuning job. The DeleteHyperParameterTuningJob API deletes only the tuning job entry that was created in SageMaker when you called the CreateHyperParameterTuningJob API. It does not delete training jobs, artifacts, or the IAM role that you specified when creating the model."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#stop_hyper_parameter_tuning_job",children:(0,a.jsx)(s.A,{code:"stop_hyper_parameter_tuning_job"})})}),(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"exec"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("a",{href:"#parameter-region",children:(0,a.jsx)("code",{children:"region"})}),", ",(0,a.jsx)("a",{href:"#parameter-HyperParameterTuningJobName",children:(0,a.jsx)("code",{children:"HyperParameterTuningJobName"})})]}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{children:"Stops a running hyperparameter tuning job and all running training jobs that the tuning job launched. All model artifacts output from the training jobs are stored in Amazon Simple Storage Service (Amazon S3). All data that the training jobs write to Amazon CloudWatch Logs are still available in CloudWatch. After the tuning job moves to the Stopped state, it releases all reserved resources for the tuning job."})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(n.p,{children:["Parameters can be passed in the ",(0,a.jsx)(n.code,{children:"WHERE"})," clause of a query. Check the ",(0,a.jsx)(n.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Name"}),(0,a.jsx)("th",{children:"Datatype"}),(0,a.jsx)("th",{children:"Description"})]})}),(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{id:"parameter-region",children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"region"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"AWS region (default: us-east-1)"})]})})]}),"\n",(0,a.jsxs)(n.h2,{id:"select-examples",children:[(0,a.jsx)(n.code,{children:"SELECT"})," examples"]}),"\n",(0,a.jsxs)(d.A,{defaultValue:"describe_hyper_parameter_tuning_job",values:[{label:"describe_hyper_parameter_tuning_job",value:"describe_hyper_parameter_tuning_job"},{label:"list_hyper_parameter_tuning_jobs",value:"list_hyper_parameter_tuning_jobs"}],children:[(0,a.jsxs)(c.A,{value:"describe_hyper_parameter_tuning_job",children:[(0,a.jsx)(n.p,{children:"Returns a description of a hyperparameter tuning job, depending on the fields selected. These fields can include the name, Amazon Resource Name (ARN), job status of your tuning job and more."}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SELECT\nAutotune,\nBestTrainingJob,\nConsumedResources,\nCreationTime,\nFailureReason,\nHyperParameterTuningEndTime,\nHyperParameterTuningJobArn,\nHyperParameterTuningJobConfig,\nHyperParameterTuningJobName,\nHyperParameterTuningJobStatus,\nLastModifiedTime,\nObjectiveStatusCounters,\nOverallBestTrainingJob,\nTrainingJobDefinition,\nTrainingJobDefinitions,\nTrainingJobStatusCounters,\nTuningJobCompletionDetails,\nWarmStartConfig\nFROM aws.sagemaker.hyper_parameter_tuning_jobs\nWHERE region = '{{ region }}' -- required\n;\n"})})]}),(0,a.jsxs)(c.A,{value:"list_hyper_parameter_tuning_jobs",children:[(0,a.jsx)(n.p,{children:"Gets a list of HyperParameterTuningJobSummary objects that describe the hyperparameter tuning jobs launched in your account."}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SELECT\nCreationTime,\nHyperParameterTuningEndTime,\nHyperParameterTuningJobArn,\nHyperParameterTuningJobName,\nHyperParameterTuningJobStatus,\nLastModifiedTime,\nObjectiveStatusCounters,\nResourceLimits,\nStrategy,\nTrainingJobStatusCounters\nFROM aws.sagemaker.hyper_parameter_tuning_jobs\nWHERE region = '{{ region }}' -- required\n;\n"})})]})]}),"\n",(0,a.jsxs)(n.h2,{id:"insert-examples",children:[(0,a.jsx)(n.code,{children:"INSERT"})," examples"]}),"\n",(0,a.jsxs)(d.A,{defaultValue:"create_hyper_parameter_tuning_job",values:[{label:"create_hyper_parameter_tuning_job",value:"create_hyper_parameter_tuning_job"},{label:"Manifest",value:"manifest"}],children:[(0,a.jsxs)(c.A,{value:"create_hyper_parameter_tuning_job",children:[(0,a.jsx)(n.p,{children:"Starts a hyperparameter tuning job. A hyperparameter tuning job finds the best version of a model by running many training jobs on your dataset using the algorithm you choose and values for hyperparameters within ranges that you specify. It then chooses the hyperparameter values that result in a model that performs the best, as measured by an objective metric that you choose. A hyperparameter tuning job automatically creates Amazon SageMaker experiments, trials, and trial components for each training job that it runs. You can view these entities in Amazon SageMaker Studio. For more information, see View Experiments, Trials, and Trial Components. Do not include any security-sensitive information including account access IDs, secrets, or tokens in any hyperparameter fields. As part of the shared responsibility model, you are responsible for any potential exposure, unauthorized access, or compromise of your sensitive data if caused by any security-sensitive information included in the request hyperparameter variable or plain text fields.."}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"INSERT INTO aws.sagemaker.hyper_parameter_tuning_jobs (\nHyperParameterTuningJobName,\nHyperParameterTuningJobConfig,\nTrainingJobDefinition,\nTrainingJobDefinitions,\nWarmStartConfig,\nTags,\nAutotune,\nregion\n)\nSELECT \n'{{ HyperParameterTuningJobName }}' /* required */,\n'{{ HyperParameterTuningJobConfig }}' /* required */,\n'{{ TrainingJobDefinition }}',\n'{{ TrainingJobDefinitions }}',\n'{{ WarmStartConfig }}',\n'{{ Tags }}',\n'{{ Autotune }}',\n'{{ region }}'\nRETURNING\nHyperParameterTuningJobArn\n;\n"})})]}),(0,a.jsx)(c.A,{value:"manifest",children:(0,a.jsx)(o.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: hyper_parameter_tuning_jobs
props:
  - name: region
    value: "{{ region }}"
    description: Required parameter for the hyper_parameter_tuning_jobs resource.
  - name: HyperParameterTuningJobName
    value: "{{ HyperParameterTuningJobName }}"
    description: |
      The name of the tuning job. This name is the prefix for the names of all training jobs that this tuning job launches. The name must be unique within the same Amazon Web Services account and Amazon Web Services Region. The name must have 1 to 32 characters. Valid characters are a-z, A-Z, 0-9, and : + = @ _ % - (hyphen). The name is not case sensitive.
  - name: HyperParameterTuningJobConfig
    description: |
      The HyperParameterTuningJobConfig object that describes the tuning job, including the search strategy, the objective metric used to evaluate training jobs, ranges of parameters to search, and resource limits for the tuning job. For more information, see How Hyperparameter Tuning Works.
    value:
      Strategy: "{{ Strategy }}"
      StrategyConfig:
        HyperbandStrategyConfig:
          MinResource: {{ MinResource }}
          MaxResource: {{ MaxResource }}
      HyperParameterTuningJobObjective:
        Type: "{{ Type }}"
        MetricName: "{{ MetricName }}"
      ResourceLimits:
        MaxNumberOfTrainingJobs: {{ MaxNumberOfTrainingJobs }}
        MaxParallelTrainingJobs: {{ MaxParallelTrainingJobs }}
        MaxRuntimeInSeconds: {{ MaxRuntimeInSeconds }}
      ParameterRanges:
        IntegerParameterRanges:
          - Name: "{{ Name }}"
            MinValue: "{{ MinValue }}"
            MaxValue: "{{ MaxValue }}"
            ScalingType: "{{ ScalingType }}"
        ContinuousParameterRanges:
          - Name: "{{ Name }}"
            MinValue: "{{ MinValue }}"
            MaxValue: "{{ MaxValue }}"
            ScalingType: "{{ ScalingType }}"
        CategoricalParameterRanges:
          - Name: "{{ Name }}"
            Values: "{{ Values }}"
        AutoParameters:
          - Name: "{{ Name }}"
            ValueHint: "{{ ValueHint }}"
      TrainingJobEarlyStoppingType: "{{ TrainingJobEarlyStoppingType }}"
      TuningJobCompletionCriteria:
        TargetObjectiveMetricValue: {{ TargetObjectiveMetricValue }}
        BestObjectiveNotImproving:
          MaxNumberOfTrainingJobsNotImproving: {{ MaxNumberOfTrainingJobsNotImproving }}
        ConvergenceDetected:
          CompleteOnConvergence: "{{ CompleteOnConvergence }}"
      RandomSeed: {{ RandomSeed }}
  - name: TrainingJobDefinition
    description: |
      The HyperParameterTrainingJobDefinition object that describes the training jobs that this tuning job launches, including static hyperparameters, input data configuration, output data configuration, resource configuration, and stopping condition.
    value:
      DefinitionName: "{{ DefinitionName }}"
      TuningObjective:
        Type: "{{ Type }}"
        MetricName: "{{ MetricName }}"
      HyperParameterRanges:
        IntegerParameterRanges:
          - Name: "{{ Name }}"
            MinValue: "{{ MinValue }}"
            MaxValue: "{{ MaxValue }}"
            ScalingType: "{{ ScalingType }}"
        ContinuousParameterRanges:
          - Name: "{{ Name }}"
            MinValue: "{{ MinValue }}"
            MaxValue: "{{ MaxValue }}"
            ScalingType: "{{ ScalingType }}"
        CategoricalParameterRanges:
          - Name: "{{ Name }}"
            Values: "{{ Values }}"
        AutoParameters:
          - Name: "{{ Name }}"
            ValueHint: "{{ ValueHint }}"
      StaticHyperParameters: "{{ StaticHyperParameters }}"
      AlgorithmSpecification:
        TrainingImage: "{{ TrainingImage }}"
        TrainingInputMode: "{{ TrainingInputMode }}"
        AlgorithmName: "{{ AlgorithmName }}"
        MetricDefinitions:
          - Name: "{{ Name }}"
            Regex: "{{ Regex }}"
      RoleArn: "{{ RoleArn }}"
      InputDataConfig:
        - ChannelName: "{{ ChannelName }}"
          DataSource:
            S3DataSource:
              S3DataType: "{{ S3DataType }}"
              S3Uri: "{{ S3Uri }}"
              S3DataDistributionType: "{{ S3DataDistributionType }}"
              AttributeNames:
                - "{{ AttributeNames }}"
              InstanceGroupNames:
                - "{{ InstanceGroupNames }}"
              ModelAccessConfig:
                AcceptEula: {{ AcceptEula }}
              HubAccessConfig:
                HubContentArn: "{{ HubContentArn }}"
            FileSystemDataSource:
              FileSystemId: "{{ FileSystemId }}"
              FileSystemAccessMode: "{{ FileSystemAccessMode }}"
              FileSystemType: "{{ FileSystemType }}"
              DirectoryPath: "{{ DirectoryPath }}"
            DatasetSource:
              DatasetArn: "{{ DatasetArn }}"
          ContentType: "{{ ContentType }}"
          CompressionType: "{{ CompressionType }}"
          RecordWrapperType: "{{ RecordWrapperType }}"
          InputMode: "{{ InputMode }}"
          ShuffleConfig:
            Seed: {{ Seed }}
      VpcConfig:
        SecurityGroupIds:
          - "{{ SecurityGroupIds }}"
        Subnets:
          - "{{ Subnets }}"
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
          PlacementSpecifications:
            - UltraServerId: "{{ UltraServerId }}"
              InstanceCount: {{ InstanceCount }}
      HyperParameterTuningResourceConfig:
        InstanceType: "{{ InstanceType }}"
        InstanceCount: {{ InstanceCount }}
        VolumeSizeInGB: {{ VolumeSizeInGB }}
        VolumeKmsKeyId: "{{ VolumeKmsKeyId }}"
        AllocationStrategy: "{{ AllocationStrategy }}"
        InstanceConfigs:
          - InstanceType: "{{ InstanceType }}"
            InstanceCount: {{ InstanceCount }}
            VolumeSizeInGB: {{ VolumeSizeInGB }}
      StoppingCondition:
        MaxRuntimeInSeconds: {{ MaxRuntimeInSeconds }}
        MaxWaitTimeInSeconds: {{ MaxWaitTimeInSeconds }}
        MaxPendingTimeInSeconds: {{ MaxPendingTimeInSeconds }}
      EnableNetworkIsolation: {{ EnableNetworkIsolation }}
      EnableInterContainerTrafficEncryption: {{ EnableInterContainerTrafficEncryption }}
      EnableManagedSpotTraining: {{ EnableManagedSpotTraining }}
      CheckpointConfig:
        S3Uri: "{{ S3Uri }}"
        LocalPath: "{{ LocalPath }}"
      RetryStrategy:
        MaximumRetryAttempts: {{ MaximumRetryAttempts }}
      Environment: "{{ Environment }}"
  - name: TrainingJobDefinitions
    description: |
      A list of the HyperParameterTrainingJobDefinition objects launched for this tuning job.
    value:
      - DefinitionName: "{{ DefinitionName }}"
        TuningObjective:
          Type: "{{ Type }}"
          MetricName: "{{ MetricName }}"
        HyperParameterRanges:
          IntegerParameterRanges:
            - Name: "{{ Name }}"
              MinValue: "{{ MinValue }}"
              MaxValue: "{{ MaxValue }}"
              ScalingType: "{{ ScalingType }}"
          ContinuousParameterRanges:
            - Name: "{{ Name }}"
              MinValue: "{{ MinValue }}"
              MaxValue: "{{ MaxValue }}"
              ScalingType: "{{ ScalingType }}"
          CategoricalParameterRanges:
            - Name: "{{ Name }}"
              Values: "{{ Values }}"
          AutoParameters:
            - Name: "{{ Name }}"
              ValueHint: "{{ ValueHint }}"
        StaticHyperParameters: "{{ StaticHyperParameters }}"
        AlgorithmSpecification:
          TrainingImage: "{{ TrainingImage }}"
          TrainingInputMode: "{{ TrainingInputMode }}"
          AlgorithmName: "{{ AlgorithmName }}"
          MetricDefinitions:
            - Name: "{{ Name }}"
              Regex: "{{ Regex }}"
        RoleArn: "{{ RoleArn }}"
        InputDataConfig: "{{ InputDataConfig }}"
        VpcConfig:
          SecurityGroupIds:
            - "{{ SecurityGroupIds }}"
          Subnets:
            - "{{ Subnets }}"
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
            PlacementSpecifications:
              - UltraServerId: "{{ UltraServerId }}"
                InstanceCount: {{ InstanceCount }}
        HyperParameterTuningResourceConfig:
          InstanceType: "{{ InstanceType }}"
          InstanceCount: {{ InstanceCount }}
          VolumeSizeInGB: {{ VolumeSizeInGB }}
          VolumeKmsKeyId: "{{ VolumeKmsKeyId }}"
          AllocationStrategy: "{{ AllocationStrategy }}"
          InstanceConfigs:
            - InstanceType: "{{ InstanceType }}"
              InstanceCount: {{ InstanceCount }}
              VolumeSizeInGB: {{ VolumeSizeInGB }}
        StoppingCondition:
          MaxRuntimeInSeconds: {{ MaxRuntimeInSeconds }}
          MaxWaitTimeInSeconds: {{ MaxWaitTimeInSeconds }}
          MaxPendingTimeInSeconds: {{ MaxPendingTimeInSeconds }}
        EnableNetworkIsolation: {{ EnableNetworkIsolation }}
        EnableInterContainerTrafficEncryption: {{ EnableInterContainerTrafficEncryption }}
        EnableManagedSpotTraining: {{ EnableManagedSpotTraining }}
        CheckpointConfig:
          S3Uri: "{{ S3Uri }}"
          LocalPath: "{{ LocalPath }}"
        RetryStrategy:
          MaximumRetryAttempts: {{ MaximumRetryAttempts }}
        Environment: "{{ Environment }}"
  - name: WarmStartConfig
    description: |
      Specifies the configuration for starting the hyperparameter tuning job using one or more previous tuning jobs as a starting point. The results of previous tuning jobs are used to inform which combinations of hyperparameters to search over in the new tuning job. All training jobs launched by the new hyperparameter tuning job are evaluated by using the objective metric. If you specify IDENTICAL_DATA_AND_ALGORITHM as the WarmStartType value for the warm start configuration, the training job that performs the best in the new tuning job is compared to the best training jobs from the parent tuning jobs. From these, the training job that performs the best as measured by the objective metric is returned as the overall best training job. All training jobs launched by parent hyperparameter tuning jobs and the new hyperparameter tuning jobs count against the limit of training jobs for the tuning job.
    value:
      ParentHyperParameterTuningJobs:
        - HyperParameterTuningJobName: "{{ HyperParameterTuningJobName }}"
      WarmStartType: "{{ WarmStartType }}"
  - name: Tags
    description: |
      An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in different ways, for example, by purpose, owner, or environment. For more information, see Tagging Amazon Web Services Resources. Tags that you specify for the tuning job are also added to all training jobs that the tuning job launches.
    value:
      - Key: "{{ Key }}"
        Value: "{{ Value }}"
  - name: Autotune
    description: |
      Configures SageMaker Automatic model tuning (AMT) to automatically find optimal parameters for the following fields: ParameterRanges: The names and ranges of parameters that a hyperparameter tuning job can optimize. ResourceLimits: The maximum resources that can be used for a training job. These resources include the maximum number of training jobs, the maximum runtime of a tuning job, and the maximum number of training jobs to run at the same time. TrainingJobEarlyStoppingType: A flag that specifies whether or not to use early stopping for training jobs launched by a hyperparameter tuning job. RetryStrategy: The number of times to retry a training job. Strategy: Specifies how hyperparameter tuning chooses the combinations of hyperparameter values to use for the training jobs that it launches. ConvergenceDetected: A flag to indicate that Automatic model tuning (AMT) has detected model convergence.
    value:
      Mode: "{{ Mode }}"
`})})]}),"\n",(0,a.jsxs)(n.h2,{id:"delete-examples",children:[(0,a.jsx)(n.code,{children:"DELETE"})," examples"]}),"\n",(0,a.jsx)(d.A,{defaultValue:"delete_hyper_parameter_tuning_job",values:[{label:"delete_hyper_parameter_tuning_job",value:"delete_hyper_parameter_tuning_job"}],children:(0,a.jsxs)(c.A,{value:"delete_hyper_parameter_tuning_job",children:[(0,a.jsx)(n.p,{children:"Deletes a hyperparameter tuning job. The DeleteHyperParameterTuningJob API deletes only the tuning job entry that was created in SageMaker when you called the CreateHyperParameterTuningJob API. It does not delete training jobs, artifacts, or the IAM role that you specified when creating the model."}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"DELETE FROM aws.sagemaker.hyper_parameter_tuning_jobs\nWHERE region = '{{ region }}' --required\n;\n"})})]})}),"\n",(0,a.jsx)(n.h2,{id:"lifecycle-methods",children:"Lifecycle Methods"}),"\n",(0,a.jsx)(d.A,{defaultValue:"stop_hyper_parameter_tuning_job",values:[{label:"stop_hyper_parameter_tuning_job",value:"stop_hyper_parameter_tuning_job"}],children:(0,a.jsxs)(c.A,{value:"stop_hyper_parameter_tuning_job",children:[(0,a.jsx)(n.p,{children:"Stops a running hyperparameter tuning job and all running training jobs that the tuning job launched. All model artifacts output from the training jobs are stored in Amazon Simple Storage Service (Amazon S3). All data that the training jobs write to Amazon CloudWatch Logs are still available in CloudWatch. After the tuning job moves to the Stopped state, it releases all reserved resources for the tuning job."}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"EXEC aws.sagemaker.hyper_parameter_tuning_jobs.stop_hyper_parameter_tuning_job \n@region='{{ region }}' --required \n@@json=\n'{\n\"HyperParameterTuningJobName\": \"{{ HyperParameterTuningJobName }}\"\n}'\n;\n"})})]})})]})}function g(e={}){let{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}}}]);