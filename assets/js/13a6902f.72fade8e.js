"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["133594"],{784629(e,t,n){n.r(t),n.d(t,{metadata:()=>r,default:()=>m,frontMatter:()=>l,contentTitle:()=>h,toc:()=>j,assets:()=>u});var r=JSON.parse('{"id":"services/mediaconvert/jobs/index","title":"jobs","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/mediaconvert/jobs/index.md","sourceDirName":"services/mediaconvert/jobs","slug":"/services/mediaconvert/jobs/","permalink":"/services/mediaconvert/jobs/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"jobs","hide_title":false,"hide_table_of_contents":false,"keywords":["jobs","mediaconvert","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"job_templates","permalink":"/services/mediaconvert/job_templates/"},"next":{"title":"jobs_query_results","permalink":"/services/mediaconvert/jobs_query_results/"}}'),i=n(474848),s=n(28453),o=n(97362),a=n(897272),d=n(413554),c=n(541647);let l={title:"jobs",hide_title:!1,hide_table_of_contents:!1,keywords:["jobs","mediaconvert","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},h,u={},j=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"Lifecycle Methods",id:"lifecycle-methods",level:2}];function x(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Creates, updates, deletes, gets or lists a ",(0,i.jsx)("code",{children:"jobs"})," resource."]}),"\n",(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)("table",{children:(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"Name"})}),(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"jobs"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"Type"})}),(0,i.jsx)("td",{children:"Resource"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"Id"})}),(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"aws.mediaconvert.jobs"})})]})]})}),"\n",(0,i.jsx)(t.h2,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(t.p,{children:["The following fields are returned by ",(0,i.jsx)(t.code,{children:"SELECT"})," queries:"]}),"\n",(0,i.jsxs)(d.A,{defaultValue:"get_job",values:[{label:"get_job",value:"get_job"},{label:"list_jobs",value:"list_jobs"}],children:[(0,i.jsx)(c.A,{value:"get_job",children:(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Datatype"}),(0,i.jsx)("th",{children:"Description"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"AccelerationSettings"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"object"})}),(0,i.jsx)("td",{children:"Accelerated transcoding can significantly speed up jobs with long, visually complex content."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"AccelerationStatus"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"Describes whether the current job is running with accelerated transcoding. For jobs that have Acceleration (AccelerationMode) set to DISABLED, AccelerationStatus is always NOT_APPLICABLE. For jobs that have Acceleration (AccelerationMode) set to ENABLED or PREFERRED, AccelerationStatus is one of the other states. AccelerationStatus is IN_PROGRESS initially, while the service determines whether the input files and job settings are compatible with accelerated transcoding. If they are, AcclerationStatus is ACCELERATED. If your input files and job settings aren't compatible with accelerated transcoding, the service either fails your job or runs it without accelerated transcoding, depending on how you set Acceleration (AccelerationMode). When the service runs your job without accelerated transcoding, AccelerationStatus is NOT_ACCELERATED. (NOT_APPLICABLE, IN_PROGRESS, ACCELERATED, NOT_ACCELERATED)"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"Arn"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"An identifier for this resource that is unique within all of AWS."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"BillingTagsSource"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"The tag type that AWS Billing and Cost Management will use to sort your AWS Elemental MediaConvert costs on any billing report that you set up. (QUEUE, PRESET, JOB_TEMPLATE, JOB)"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"ClientRequestToken"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"Prevent duplicate jobs from being created and ensure idempotency for your requests. A client request token can be any string that includes up to 64 ASCII characters. If you reuse a client request token within one minute of a successful request, the API returns the job details of the original request instead. For more information see https:\u200B//docs.aws.amazon.com/mediaconvert/latest/apireference/idempotency.html."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"CreatedAt"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string (date-time)"})}),(0,i.jsx)("td",{children:"The time, in Unix epoch format in seconds, when the job got created."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"CurrentPhase"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"A job's phase can be PROBING, TRANSCODING OR UPLOADING (PROBING, TRANSCODING, UPLOADING)"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"ElementalInferenceConfiguration"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"object"})}),(0,i.jsx)("td",{children:"The Elemental Inference configuration used in this job."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"ErrorCode"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"integer"})}),(0,i.jsx)("td",{children:"Error code for the job"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"ErrorMessage"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"Error message of Job"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"HopDestinations"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"array"})}),(0,i.jsx)("td",{children:"Optional list of hop destinations."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"Id"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"A portion of the job's ARN, unique within your AWS Elemental MediaConvert resources"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"JobEngineVersionRequested"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"The Job engine version that you requested for your job. Valid versions are in a YYYY-MM-DD format."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"JobEngineVersionUsed"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"The Job engine version that your job used. Job engine versions are in a YYYY-MM-DD format. When you request an expired version, the response for this property will be empty. Requests to create jobs with an expired version result in a regular job, as if no specific Job engine version was requested. When you request an invalid version, the response for this property will be empty. Requests to create jobs with an invalid version result in a 400 error message, and no job is created."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"JobPercentComplete"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"integer"})}),(0,i.jsx)("td",{children:"An estimate of how far your job has progressed. This estimate is shown as a percentage of the total time from when your job leaves its queue to when your output files appear in your output Amazon S3 bucket. AWS Elemental MediaConvert provides jobPercentComplete in CloudWatch STATUS_UPDATE events and in the response to GetJob and ListJobs requests. The jobPercentComplete estimate is reliable for the following input containers: Quicktime, Transport Stream, MP4, and MXF. For some jobs, the service can't provide information about job progress. In those cases, jobPercentComplete returns a null value."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"JobTemplate"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"The job template that the job is created from, if it is created from a job template."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"LastShareDetails"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"Contains information about the most recent share attempt for the job. For more information, see https:\u200B//docs.aws.amazon.com/mediaconvert/latest/ug/creating-resource-share.html"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"Messages"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"object"})}),(0,i.jsx)("td",{children:"Provides messages from the service about jobs that you have already successfully submitted."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"OutputGroupDetails"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"array"})}),(0,i.jsx)("td",{children:"List of output group details"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"Priority"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"integer"})}),(0,i.jsx)("td",{children:"Relative priority on the job."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"Queue"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"When you create a job, you can specify a queue to send it to. If you don't specify, the job will go to the default queue. For more about queues, see the User Guide topic at https:\u200B//docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"QueueTransitions"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"array"})}),(0,i.jsx)("td",{children:"The job's queue hopping history."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"RetryCount"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"integer"})}),(0,i.jsx)("td",{children:"The number of times that the service automatically attempted to process your job after encountering an error."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"Role"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"The IAM role you use for creating this job. For details about permissions, see the User Guide topic at the User Guide at https:\u200B//docs.aws.amazon.com/mediaconvert/latest/ug/iam-role.html"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"Settings"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"object"})}),(0,i.jsx)("td",{children:"JobSettings contains all the transcode settings for a job."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"ShareStatus"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"A job's share status can be NOT_SHARED, INITIATED, or SHARED (NOT_SHARED, INITIATED, SHARED)"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"SimulateReservedQueue"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"Enable this setting when you run a test job to estimate how many reserved transcoding slots (RTS) you need. When this is enabled, MediaConvert runs your job from an on-demand queue with similar performance to what you will see with one RTS in a reserved queue. This setting is disabled by default. (DISABLED, ENABLED)"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"Status"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"A job's status can be SUBMITTED, PROGRESSING, COMPLETE, CANCELED, or ERROR. (SUBMITTED, PROGRESSING, COMPLETE, CANCELED, ERROR)"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"StatusUpdateInterval"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error. (SECONDS_10, SECONDS_12, SECONDS_15, SECONDS_20, SECONDS_30, SECONDS_60, SECONDS_120, SECONDS_180, SECONDS_240, SECONDS_300, SECONDS_360, SECONDS_420, SECONDS_480, SECONDS_540, SECONDS_600)"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"Timing"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"object"})}),(0,i.jsx)("td",{children:"Information about when jobs are submitted, started, and finished is specified in Unix epoch format in seconds."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"UserMetadata"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"object"})}),(0,i.jsx)("td",{children:"User-defined metadata that you want to associate with an MediaConvert job. You specify metadata in key/value pairs."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"Warnings"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"array"})}),(0,i.jsx)("td",{children:"Contains any warning messages for the job. Use to help identify potential issues with your input, output, or job. For more information, see https:\u200B//docs.aws.amazon.com/mediaconvert/latest/ug/warning_codes.html"})]})]})]})}),(0,i.jsx)(c.A,{value:"list_jobs",children:(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Datatype"}),(0,i.jsx)("th",{children:"Description"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"AccelerationSettings"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"object"})}),(0,i.jsx)("td",{children:"Accelerated transcoding can significantly speed up jobs with long, visually complex content."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"AccelerationStatus"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"Describes whether the current job is running with accelerated transcoding. For jobs that have Acceleration (AccelerationMode) set to DISABLED, AccelerationStatus is always NOT_APPLICABLE. For jobs that have Acceleration (AccelerationMode) set to ENABLED or PREFERRED, AccelerationStatus is one of the other states. AccelerationStatus is IN_PROGRESS initially, while the service determines whether the input files and job settings are compatible with accelerated transcoding. If they are, AcclerationStatus is ACCELERATED. If your input files and job settings aren't compatible with accelerated transcoding, the service either fails your job or runs it without accelerated transcoding, depending on how you set Acceleration (AccelerationMode). When the service runs your job without accelerated transcoding, AccelerationStatus is NOT_ACCELERATED. (NOT_APPLICABLE, IN_PROGRESS, ACCELERATED, NOT_ACCELERATED)"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"Arn"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"An identifier for this resource that is unique within all of AWS."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"BillingTagsSource"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"The tag type that AWS Billing and Cost Management will use to sort your AWS Elemental MediaConvert costs on any billing report that you set up. (QUEUE, PRESET, JOB_TEMPLATE, JOB)"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"ClientRequestToken"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"Prevent duplicate jobs from being created and ensure idempotency for your requests. A client request token can be any string that includes up to 64 ASCII characters. If you reuse a client request token within one minute of a successful request, the API returns the job details of the original request instead. For more information see https:\u200B//docs.aws.amazon.com/mediaconvert/latest/apireference/idempotency.html."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"CreatedAt"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string (date-time)"})}),(0,i.jsx)("td",{children:"The time, in Unix epoch format in seconds, when the job got created."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"CurrentPhase"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"A job's phase can be PROBING, TRANSCODING OR UPLOADING (PROBING, TRANSCODING, UPLOADING)"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"ElementalInferenceConfiguration"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"object"})}),(0,i.jsx)("td",{children:"The Elemental Inference configuration used in this job."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"ErrorCode"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"integer"})}),(0,i.jsx)("td",{children:"Error code for the job"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"ErrorMessage"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"Error message of Job"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"HopDestinations"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"array"})}),(0,i.jsx)("td",{children:"Optional list of hop destinations."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"Id"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"A portion of the job's ARN, unique within your AWS Elemental MediaConvert resources"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"JobEngineVersionRequested"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"The Job engine version that you requested for your job. Valid versions are in a YYYY-MM-DD format."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"JobEngineVersionUsed"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"The Job engine version that your job used. Job engine versions are in a YYYY-MM-DD format. When you request an expired version, the response for this property will be empty. Requests to create jobs with an expired version result in a regular job, as if no specific Job engine version was requested. When you request an invalid version, the response for this property will be empty. Requests to create jobs with an invalid version result in a 400 error message, and no job is created."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"JobPercentComplete"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"integer"})}),(0,i.jsx)("td",{children:"An estimate of how far your job has progressed. This estimate is shown as a percentage of the total time from when your job leaves its queue to when your output files appear in your output Amazon S3 bucket. AWS Elemental MediaConvert provides jobPercentComplete in CloudWatch STATUS_UPDATE events and in the response to GetJob and ListJobs requests. The jobPercentComplete estimate is reliable for the following input containers: Quicktime, Transport Stream, MP4, and MXF. For some jobs, the service can't provide information about job progress. In those cases, jobPercentComplete returns a null value."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"JobTemplate"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"The job template that the job is created from, if it is created from a job template."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"LastShareDetails"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"Contains information about the most recent share attempt for the job. For more information, see https:\u200B//docs.aws.amazon.com/mediaconvert/latest/ug/creating-resource-share.html"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"Messages"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"object"})}),(0,i.jsx)("td",{children:"Provides messages from the service about jobs that you have already successfully submitted."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"OutputGroupDetails"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"array"})}),(0,i.jsx)("td",{children:"List of output group details"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"Priority"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"integer"})}),(0,i.jsx)("td",{children:"Relative priority on the job."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"Queue"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"When you create a job, you can specify a queue to send it to. If you don't specify, the job will go to the default queue. For more about queues, see the User Guide topic at https:\u200B//docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"QueueTransitions"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"array"})}),(0,i.jsx)("td",{children:"The job's queue hopping history."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"RetryCount"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"integer"})}),(0,i.jsx)("td",{children:"The number of times that the service automatically attempted to process your job after encountering an error."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"Role"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"The IAM role you use for creating this job. For details about permissions, see the User Guide topic at the User Guide at https:\u200B//docs.aws.amazon.com/mediaconvert/latest/ug/iam-role.html"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"Settings"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"object"})}),(0,i.jsx)("td",{children:"JobSettings contains all the transcode settings for a job."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"ShareStatus"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"A job's share status can be NOT_SHARED, INITIATED, or SHARED (NOT_SHARED, INITIATED, SHARED)"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"SimulateReservedQueue"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"Enable this setting when you run a test job to estimate how many reserved transcoding slots (RTS) you need. When this is enabled, MediaConvert runs your job from an on-demand queue with similar performance to what you will see with one RTS in a reserved queue. This setting is disabled by default. (DISABLED, ENABLED)"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"Status"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"A job's status can be SUBMITTED, PROGRESSING, COMPLETE, CANCELED, or ERROR. (SUBMITTED, PROGRESSING, COMPLETE, CANCELED, ERROR)"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"StatusUpdateInterval"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error. (SECONDS_10, SECONDS_12, SECONDS_15, SECONDS_20, SECONDS_30, SECONDS_60, SECONDS_120, SECONDS_180, SECONDS_240, SECONDS_300, SECONDS_360, SECONDS_420, SECONDS_480, SECONDS_540, SECONDS_600)"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"Timing"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"object"})}),(0,i.jsx)("td",{children:"Information about when jobs are submitted, started, and finished is specified in Unix epoch format in seconds."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"UserMetadata"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"object"})}),(0,i.jsx)("td",{children:"User-defined metadata that you want to associate with an MediaConvert job. You specify metadata in key/value pairs."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"Warnings"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"array"})}),(0,i.jsx)("td",{children:"Contains any warning messages for the job. Use to help identify potential issues with your input, output, or job. For more information, see https:\u200B//docs.aws.amazon.com/mediaconvert/latest/ug/warning_codes.html"})]})]})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(t.p,{children:"The following methods are available for this resource:"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Accessible by"}),(0,i.jsx)("th",{children:"Required Params"}),(0,i.jsx)("th",{children:"Optional Params"}),(0,i.jsx)("th",{children:"Description"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#get_job",children:(0,i.jsx)(o.A,{code:"get_job"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"select"})}),(0,i.jsxs)("td",{children:[(0,i.jsx)("a",{href:"#parameter-id",children:(0,i.jsx)("code",{children:"id"})}),", ",(0,i.jsx)("a",{href:"#parameter-region",children:(0,i.jsx)("code",{children:"region"})})]}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:"Retrieve the JSON for a specific transcoding job."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#list_jobs",children:(0,i.jsx)(o.A,{code:"list_jobs"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"select"})}),(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#parameter-region",children:(0,i.jsx)("code",{children:"region"})})}),(0,i.jsxs)("td",{children:[(0,i.jsx)("a",{href:"#parameter-maxResults",children:(0,i.jsx)("code",{children:"maxResults"})}),", ",(0,i.jsx)("a",{href:"#parameter-nextToken",children:(0,i.jsx)("code",{children:"nextToken"})}),", ",(0,i.jsx)("a",{href:"#parameter-order",children:(0,i.jsx)("code",{children:"order"})}),", ",(0,i.jsx)("a",{href:"#parameter-queue",children:(0,i.jsx)("code",{children:"queue"})}),", ",(0,i.jsx)("a",{href:"#parameter-status",children:(0,i.jsx)("code",{children:"status"})})]}),(0,i.jsx)("td",{children:"Retrieve a JSON array of up to twenty of your most recently created jobs. This array includes in-process, completed, and errored jobs. This will return the jobs themselves, not just a list of the jobs. To retrieve the twenty next most recent jobs, use the nextToken string returned with the array."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#create_resource_share",children:(0,i.jsx)(o.A,{code:"create_resource_share"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"insert"})}),(0,i.jsxs)("td",{children:[(0,i.jsx)("a",{href:"#parameter-region",children:(0,i.jsx)("code",{children:"region"})}),", ",(0,i.jsx)("a",{href:"#parameter-JobId",children:(0,i.jsx)("code",{children:"JobId"})}),", ",(0,i.jsx)("a",{href:"#parameter-SupportCaseId",children:(0,i.jsx)("code",{children:"SupportCaseId"})})]}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:"Create a new resource share request for MediaConvert resources with AWS Support."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#create_job",children:(0,i.jsx)(o.A,{code:"create_job"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"insert"})}),(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#parameter-region",children:(0,i.jsx)("code",{children:"region"})})}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:"Create a new transcoding job. For information about jobs and job settings, see the User Guide at http:\u200B//docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#search_jobs",children:(0,i.jsx)(o.A,{code:"search_jobs"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"exec"})}),(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#parameter-region",children:(0,i.jsx)("code",{children:"region"})})}),(0,i.jsxs)("td",{children:[(0,i.jsx)("a",{href:"#parameter-inputFile",children:(0,i.jsx)("code",{children:"inputFile"})}),", ",(0,i.jsx)("a",{href:"#parameter-maxResults",children:(0,i.jsx)("code",{children:"maxResults"})}),", ",(0,i.jsx)("a",{href:"#parameter-nextToken",children:(0,i.jsx)("code",{children:"nextToken"})}),", ",(0,i.jsx)("a",{href:"#parameter-order",children:(0,i.jsx)("code",{children:"order"})}),", ",(0,i.jsx)("a",{href:"#parameter-queue",children:(0,i.jsx)("code",{children:"queue"})}),", ",(0,i.jsx)("a",{href:"#parameter-status",children:(0,i.jsx)("code",{children:"status"})})]}),(0,i.jsx)("td",{children:"Retrieve a JSON array that includes job details for up to twenty of your most recent jobs. Optionally filter results further according to input file, queue, or status. To retrieve the twenty next most recent jobs, use the nextToken string returned with the array."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#start_jobs_query",children:(0,i.jsx)(o.A,{code:"start_jobs_query"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"exec"})}),(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#parameter-region",children:(0,i.jsx)("code",{children:"region"})})}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:"Start an asynchronous jobs query using the provided filters. To receive the list of jobs that match your query, call the GetJobsQueryResults API using the query ID returned by this API."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.p,{children:["Parameters can be passed in the ",(0,i.jsx)(t.code,{children:"WHERE"})," clause of a query. Check the ",(0,i.jsx)(t.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Datatype"}),(0,i.jsx)("th",{children:"Description"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{id:"parameter-id",children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"id"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"the job ID of the job."})]}),(0,i.jsxs)("tr",{id:"parameter-region",children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"region"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"AWS region (default: us-east-1)"})]}),(0,i.jsxs)("tr",{id:"parameter-inputFile",children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"inputFile"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"Optional. Provide your input file URL or your partial input file name. The maximum length for an input file is 300 characters."})]}),(0,i.jsxs)("tr",{id:"parameter-maxResults",children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"maxResults"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"integer"})}),(0,i.jsx)("td",{children:"Optional. Number of jobs, up to twenty, that will be returned at one time."})]}),(0,i.jsxs)("tr",{id:"parameter-nextToken",children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"nextToken"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"Optional. Use this string, provided with the response to a previous request, to request the next batch of jobs."})]}),(0,i.jsxs)("tr",{id:"parameter-order",children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"order"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"Optional. When you request lists of resources, you can specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource."})]}),(0,i.jsxs)("tr",{id:"parameter-queue",children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"queue"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"Optional. Provide a queue name, or a queue ARN, to return only jobs from that queue."})]}),(0,i.jsxs)("tr",{id:"parameter-status",children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"status"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"Optional. A job's status can be SUBMITTED, PROGRESSING, COMPLETE, CANCELED, or ERROR."})]})]})]}),"\n",(0,i.jsxs)(t.h2,{id:"select-examples",children:[(0,i.jsx)(t.code,{children:"SELECT"})," examples"]}),"\n",(0,i.jsxs)(d.A,{defaultValue:"get_job",values:[{label:"get_job",value:"get_job"},{label:"list_jobs",value:"list_jobs"}],children:[(0,i.jsxs)(c.A,{value:"get_job",children:[(0,i.jsx)(t.p,{children:"Retrieve the JSON for a specific transcoding job."}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"SELECT\nAccelerationSettings,\nAccelerationStatus,\nArn,\nBillingTagsSource,\nClientRequestToken,\nCreatedAt,\nCurrentPhase,\nElementalInferenceConfiguration,\nErrorCode,\nErrorMessage,\nHopDestinations,\nId,\nJobEngineVersionRequested,\nJobEngineVersionUsed,\nJobPercentComplete,\nJobTemplate,\nLastShareDetails,\nMessages,\nOutputGroupDetails,\nPriority,\nQueue,\nQueueTransitions,\nRetryCount,\nRole,\nSettings,\nShareStatus,\nSimulateReservedQueue,\nStatus,\nStatusUpdateInterval,\nTiming,\nUserMetadata,\nWarnings\nFROM aws.mediaconvert.jobs\nWHERE id = '{{ id }}' -- required\nAND region = '{{ region }}' -- required\n;\n"})})]}),(0,i.jsxs)(c.A,{value:"list_jobs",children:[(0,i.jsx)(t.p,{children:"Retrieve a JSON array of up to twenty of your most recently created jobs. This array includes in-process, completed, and errored jobs. This will return the jobs themselves, not just a list of the jobs. To retrieve the twenty next most recent jobs, use the nextToken string returned with the array."}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"SELECT\nAccelerationSettings,\nAccelerationStatus,\nArn,\nBillingTagsSource,\nClientRequestToken,\nCreatedAt,\nCurrentPhase,\nElementalInferenceConfiguration,\nErrorCode,\nErrorMessage,\nHopDestinations,\nId,\nJobEngineVersionRequested,\nJobEngineVersionUsed,\nJobPercentComplete,\nJobTemplate,\nLastShareDetails,\nMessages,\nOutputGroupDetails,\nPriority,\nQueue,\nQueueTransitions,\nRetryCount,\nRole,\nSettings,\nShareStatus,\nSimulateReservedQueue,\nStatus,\nStatusUpdateInterval,\nTiming,\nUserMetadata,\nWarnings\nFROM aws.mediaconvert.jobs\nWHERE region = '{{ region }}' -- required\nAND maxResults = '{{ maxResults }}'\nAND nextToken = '{{ nextToken }}'\nAND order = '{{ order }}'\nAND queue = '{{ queue }}'\nAND status = '{{ status }}'\n;\n"})})]})]}),"\n",(0,i.jsxs)(t.h2,{id:"insert-examples",children:[(0,i.jsx)(t.code,{children:"INSERT"})," examples"]}),"\n",(0,i.jsxs)(d.A,{defaultValue:"create_resource_share",values:[{label:"create_resource_share",value:"create_resource_share"},{label:"create_job",value:"create_job"},{label:"Manifest",value:"manifest"}],children:[(0,i.jsxs)(c.A,{value:"create_resource_share",children:[(0,i.jsx)(t.p,{children:"Create a new resource share request for MediaConvert resources with AWS Support."}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"INSERT INTO aws.mediaconvert.jobs (\nJobId,\nSupportCaseId,\nregion\n)\nSELECT \n'{{ JobId }}' /* required */,\n'{{ SupportCaseId }}' /* required */,\n'{{ region }}'\n;\n"})})]}),(0,i.jsxs)(c.A,{value:"create_job",children:[(0,i.jsxs)(t.p,{children:["Create a new transcoding job. For information about jobs and job settings, see the User Guide at ",(0,i.jsx)(t.a,{href:"http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html",children:"http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html"})]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"INSERT INTO aws.mediaconvert.jobs (\nAccelerationSettings,\nBillingTagsSource,\nClientRequestToken,\nHopDestinations,\nJobEngineVersion,\nJobTemplate,\nPriority,\nQueue,\nRole,\nSettings,\nSimulateReservedQueue,\nStatusUpdateInterval,\nTags,\nUserMetadata,\nregion\n)\nSELECT \n'{{ AccelerationSettings }}',\n'{{ BillingTagsSource }}',\n'{{ ClientRequestToken }}',\n'{{ HopDestinations }}',\n'{{ JobEngineVersion }}',\n'{{ JobTemplate }}',\n{{ Priority }},\n'{{ Queue }}',\n'{{ Role }}',\n'{{ Settings }}',\n'{{ SimulateReservedQueue }}',\n'{{ StatusUpdateInterval }}',\n'{{ Tags }}',\n'{{ UserMetadata }}',\n'{{ region }}'\nRETURNING\nJob\n;\n"})})]}),(0,i.jsx)(c.A,{value:"manifest",children:(0,i.jsx)(a.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: jobs
props:
  - name: region
    value: "{{ region }}"
    description: Required parameter for the jobs resource.
  - name: JobId
    value: "{{ JobId }}"
  - name: SupportCaseId
    value: "{{ SupportCaseId }}"
  - name: AccelerationSettings
    description: |
      Accelerated transcoding can significantly speed up jobs with long, visually complex content.
    value:
      Mode: "{{ Mode }}"
  - name: BillingTagsSource
    value: "{{ BillingTagsSource }}"
    description: |
      The tag type that AWS Billing and Cost Management will use to sort your AWS Elemental MediaConvert costs on any billing report that you set up.
    valid_values: ['QUEUE', 'PRESET', 'JOB_TEMPLATE', 'JOB']
  - name: ClientRequestToken
    value: "{{ ClientRequestToken }}"
  - name: HopDestinations
    value:
      - Priority: {{ Priority }}
        Queue: "{{ Queue }}"
        WaitMinutes: {{ WaitMinutes }}
  - name: JobEngineVersion
    value: "{{ JobEngineVersion }}"
  - name: JobTemplate
    value: "{{ JobTemplate }}"
  - name: Priority
    value: {{ Priority }}
  - name: Queue
    value: "{{ Queue }}"
  - name: Role
    value: "{{ Role }}"
  - name: Settings
    description: |
      JobSettings contains all the transcode settings for a job.
    value:
      AdAvailOffset: {{ AdAvailOffset }}
      AvailBlanking:
        AvailBlankingImage: "{{ AvailBlankingImage }}"
      ColorConversion3DLUTSettings:
        - FileInput: "{{ FileInput }}"
          InputColorSpace: "{{ InputColorSpace }}"
          InputMasteringLuminance: {{ InputMasteringLuminance }}
          OutputColorSpace: "{{ OutputColorSpace }}"
          OutputMasteringLuminance: {{ OutputMasteringLuminance }}
      Esam:
        ManifestConfirmConditionNotification:
          MccXml: "{{ MccXml }}"
        ResponseSignalPreroll: {{ ResponseSignalPreroll }}
        SignalProcessingNotification:
          SccXml: "{{ SccXml }}"
      ExtendedDataServices:
        CopyProtectionAction: "{{ CopyProtectionAction }}"
        VchipAction: "{{ VchipAction }}"
      FollowSource: {{ FollowSource }}
      Inputs:
        - AdvancedInputFilter: "{{ AdvancedInputFilter }}"
          AdvancedInputFilterSettings:
            AddTexture: "{{ AddTexture }}"
            Sharpening: "{{ Sharpening }}"
          AudioSelectorGroups: "{{ AudioSelectorGroups }}"
          AudioSelectors: "{{ AudioSelectors }}"
          CaptionSelectors: "{{ CaptionSelectors }}"
          Crop:
            Height: {{ Height }}
            Width: {{ Width }}
            X: {{ X }}
            Y: {{ Y }}
          DeblockFilter: "{{ DeblockFilter }}"
          DecryptionSettings:
            DecryptionMode: "{{ DecryptionMode }}"
            EncryptedDecryptionKey: "{{ EncryptedDecryptionKey }}"
            InitializationVector: "{{ InitializationVector }}"
            KmsKeyRegion: "{{ KmsKeyRegion }}"
          DenoiseFilter: "{{ DenoiseFilter }}"
          DolbyVisionMetadataXml: "{{ DolbyVisionMetadataXml }}"
          DynamicAudioSelectors: "{{ DynamicAudioSelectors }}"
          FileInput: "{{ FileInput }}"
          FilterEnable: "{{ FilterEnable }}"
          FilterStrength: {{ FilterStrength }}
          ImageInserter:
            InsertableImages:
              - Duration: {{ Duration }}
                FadeIn: {{ FadeIn }}
                FadeOut: {{ FadeOut }}
                Height: {{ Height }}
                ImageInserterInput: "{{ ImageInserterInput }}"
                ImageX: {{ ImageX }}
                ImageY: {{ ImageY }}
                Layer: {{ Layer }}
                Opacity: {{ Opacity }}
                StartTime: "{{ StartTime }}"
                Width: {{ Width }}
            SdrReferenceWhiteLevel: {{ SdrReferenceWhiteLevel }}
          InputClippings: "{{ InputClippings }}"
          InputScanType: "{{ InputScanType }}"
          MultiViewSettings: "{{ MultiViewSettings }}"
          Position:
            Height: {{ Height }}
            Width: {{ Width }}
            X: {{ X }}
            Y: {{ Y }}
          ProgramNumber: {{ ProgramNumber }}
          PsiControl: "{{ PsiControl }}"
          SupplementalImps: "{{ SupplementalImps }}"
          TamsSettings:
            AuthConnectionArn: "{{ AuthConnectionArn }}"
            GapHandling: "{{ GapHandling }}"
            SourceId: "{{ SourceId }}"
            Timerange: "{{ Timerange }}"
          TimecodeSource: "{{ TimecodeSource }}"
          TimecodeStart: "{{ TimecodeStart }}"
          VideoGenerator:
            Channels: {{ Channels }}
            Duration: {{ Duration }}
            FramerateDenominator: {{ FramerateDenominator }}
            FramerateNumerator: {{ FramerateNumerator }}
            Height: {{ Height }}
            ImageInput: "{{ ImageInput }}"
            SampleRate: {{ SampleRate }}
            Width: {{ Width }}
          VideoOverlays: "{{ VideoOverlays }}"
          VideoSelector:
            AlphaBehavior: "{{ AlphaBehavior }}"
            ColorSpace: "{{ ColorSpace }}"
            ColorSpaceUsage: "{{ ColorSpaceUsage }}"
            EmbeddedTimecodeOverride: "{{ EmbeddedTimecodeOverride }}"
            Hdr10Metadata:
              BluePrimaryX: {{ BluePrimaryX }}
              BluePrimaryY: {{ BluePrimaryY }}
              GreenPrimaryX: {{ GreenPrimaryX }}
              GreenPrimaryY: {{ GreenPrimaryY }}
              MaxContentLightLevel: {{ MaxContentLightLevel }}
              MaxFrameAverageLightLevel: {{ MaxFrameAverageLightLevel }}
              MaxLuminance: {{ MaxLuminance }}
              MinLuminance: {{ MinLuminance }}
              RedPrimaryX: {{ RedPrimaryX }}
              RedPrimaryY: {{ RedPrimaryY }}
              WhitePointX: {{ WhitePointX }}
              WhitePointY: {{ WhitePointY }}
            MaxLuminance: {{ MaxLuminance }}
            PadVideo: "{{ PadVideo }}"
            Pid: {{ Pid }}
            ProgramNumber: {{ ProgramNumber }}
            Rotate: "{{ Rotate }}"
            SampleRange: "{{ SampleRange }}"
            SelectorType: "{{ SelectorType }}"
            Streams:
              - {{ Streams }}
      KantarWatermark:
        ChannelName: "{{ ChannelName }}"
        ContentReference: "{{ ContentReference }}"
        CredentialsSecretName: "{{ CredentialsSecretName }}"
        FileOffset: {{ FileOffset }}
        KantarLicenseId: {{ KantarLicenseId }}
        KantarServerUrl: "{{ KantarServerUrl }}"
        LogDestination: "{{ LogDestination }}"
        Metadata3: "{{ Metadata3 }}"
        Metadata4: "{{ Metadata4 }}"
        Metadata5: "{{ Metadata5 }}"
        Metadata6: "{{ Metadata6 }}"
        Metadata7: "{{ Metadata7 }}"
        Metadata8: "{{ Metadata8 }}"
      MotionImageInserter:
        Framerate:
          FramerateDenominator: {{ FramerateDenominator }}
          FramerateNumerator: {{ FramerateNumerator }}
        Input: "{{ Input }}"
        InsertionMode: "{{ InsertionMode }}"
        Offset:
          ImageX: {{ ImageX }}
          ImageY: {{ ImageY }}
        Playback: "{{ Playback }}"
        StartTime: "{{ StartTime }}"
      NielsenConfiguration:
        BreakoutCode: {{ BreakoutCode }}
        DistributorId: "{{ DistributorId }}"
      NielsenNonLinearWatermark:
        ActiveWatermarkProcess: "{{ ActiveWatermarkProcess }}"
        AdiFilename: "{{ AdiFilename }}"
        AssetId: "{{ AssetId }}"
        AssetName: "{{ AssetName }}"
        CbetSourceId: "{{ CbetSourceId }}"
        EpisodeId: "{{ EpisodeId }}"
        MetadataDestination: "{{ MetadataDestination }}"
        SourceId: {{ SourceId }}
        SourceWatermarkStatus: "{{ SourceWatermarkStatus }}"
        TicServerUrl: "{{ TicServerUrl }}"
        UniqueTicPerAudioTrack: "{{ UniqueTicPerAudioTrack }}"
      OutputGroups:
        - AutomatedEncodingSettings:
            AbrSettings:
              MaxAbrBitrate: {{ MaxAbrBitrate }}
              MaxQualityLevel: {{ MaxQualityLevel }}
              MaxRenditions: {{ MaxRenditions }}
              MinAbrBitrate: {{ MinAbrBitrate }}
              Rules:
                - AllowedRenditions: "{{ AllowedRenditions }}"
                  ForceIncludeRenditions: "{{ ForceIncludeRenditions }}"
                  MinBottomRenditionSize:
                    Height: {{ Height }}
                    Width: {{ Width }}
                  MinTopRenditionSize:
                    Height: {{ Height }}
                    Width: {{ Width }}
                  Type: "{{ Type }}"
          CustomName: "{{ CustomName }}"
          Name: "{{ Name }}"
          OutputGroupSettings:
            CmafGroupSettings:
              AdditionalManifests:
                - ManifestNameModifier: "{{ ManifestNameModifier }}"
                  SelectedOutputs: "{{ SelectedOutputs }}"
              BaseUrl: "{{ BaseUrl }}"
              ClientCache: "{{ ClientCache }}"
              CodecSpecification: "{{ CodecSpecification }}"
              DashIFrameTrickPlayNameModifier: "{{ DashIFrameTrickPlayNameModifier }}"
              DashManifestStyle: "{{ DashManifestStyle }}"
              Destination: "{{ Destination }}"
              DestinationSettings:
                S3Settings: "{{ S3Settings }}"
              Encryption:
                ClearLead: "{{ ClearLead }}"
                ConstantInitializationVector: "{{ ConstantInitializationVector }}"
                EncryptionMethod: "{{ EncryptionMethod }}"
                InitializationVectorInManifest: "{{ InitializationVectorInManifest }}"
                SpekeKeyProvider: "{{ SpekeKeyProvider }}"
                StaticKeyProvider: "{{ StaticKeyProvider }}"
                Type: "{{ Type }}"
              FragmentLength: {{ FragmentLength }}
              ImageBasedTrickPlay: "{{ ImageBasedTrickPlay }}"
              ImageBasedTrickPlaySettings:
                IntervalCadence: "{{ IntervalCadence }}"
                ThumbnailHeight: {{ ThumbnailHeight }}
                ThumbnailInterval: {{ ThumbnailInterval }}
                ThumbnailWidth: {{ ThumbnailWidth }}
                TileHeight: {{ TileHeight }}
                TileWidth: {{ TileWidth }}
              ManifestCompression: "{{ ManifestCompression }}"
              ManifestDurationFormat: "{{ ManifestDurationFormat }}"
              MinBufferTime: {{ MinBufferTime }}
              MinFinalSegmentLength: {{ MinFinalSegmentLength }}
              MpdManifestBandwidthType: "{{ MpdManifestBandwidthType }}"
              MpdProfile: "{{ MpdProfile }}"
              PtsOffsetHandlingForBFrames: "{{ PtsOffsetHandlingForBFrames }}"
              SegmentControl: "{{ SegmentControl }}"
              SegmentLength: {{ SegmentLength }}
              SegmentLengthControl: "{{ SegmentLengthControl }}"
              StreamInfResolution: "{{ StreamInfResolution }}"
              TargetDurationCompatibilityMode: "{{ TargetDurationCompatibilityMode }}"
              VideoCompositionOffsets: "{{ VideoCompositionOffsets }}"
              WriteDashManifest: "{{ WriteDashManifest }}"
              WriteHlsManifest: "{{ WriteHlsManifest }}"
              WriteSegmentTimelineInRepresentation: "{{ WriteSegmentTimelineInRepresentation }}"
            DashIsoGroupSettings:
              AdditionalManifests:
                - ManifestNameModifier: "{{ ManifestNameModifier }}"
                  SelectedOutputs: "{{ SelectedOutputs }}"
              AudioChannelConfigSchemeIdUri: "{{ AudioChannelConfigSchemeIdUri }}"
              BaseUrl: "{{ BaseUrl }}"
              DashIFrameTrickPlayNameModifier: "{{ DashIFrameTrickPlayNameModifier }}"
              DashManifestStyle: "{{ DashManifestStyle }}"
              Destination: "{{ Destination }}"
              DestinationSettings:
                S3Settings: "{{ S3Settings }}"
              Encryption:
                PlaybackDeviceCompatibility: "{{ PlaybackDeviceCompatibility }}"
                SpekeKeyProvider: "{{ SpekeKeyProvider }}"
              FragmentLength: {{ FragmentLength }}
              HbbtvCompliance: "{{ HbbtvCompliance }}"
              ImageBasedTrickPlay: "{{ ImageBasedTrickPlay }}"
              ImageBasedTrickPlaySettings:
                IntervalCadence: "{{ IntervalCadence }}"
                ThumbnailHeight: {{ ThumbnailHeight }}
                ThumbnailInterval: {{ ThumbnailInterval }}
                ThumbnailWidth: {{ ThumbnailWidth }}
                TileHeight: {{ TileHeight }}
                TileWidth: {{ TileWidth }}
              MinBufferTime: {{ MinBufferTime }}
              MinFinalSegmentLength: {{ MinFinalSegmentLength }}
              MpdManifestBandwidthType: "{{ MpdManifestBandwidthType }}"
              MpdProfile: "{{ MpdProfile }}"
              PtsOffsetHandlingForBFrames: "{{ PtsOffsetHandlingForBFrames }}"
              SegmentControl: "{{ SegmentControl }}"
              SegmentLength: {{ SegmentLength }}
              SegmentLengthControl: "{{ SegmentLengthControl }}"
              VideoCompositionOffsets: "{{ VideoCompositionOffsets }}"
              WriteSegmentTimelineInRepresentation: "{{ WriteSegmentTimelineInRepresentation }}"
            FileGroupSettings:
              Destination: "{{ Destination }}"
              DestinationSettings:
                S3Settings: "{{ S3Settings }}"
            HlsGroupSettings:
              AdMarkers:
                - "{{ AdMarkers }}"
              AdditionalManifests:
                - ManifestNameModifier: "{{ ManifestNameModifier }}"
                  SelectedOutputs: "{{ SelectedOutputs }}"
              AudioOnlyHeader: "{{ AudioOnlyHeader }}"
              BaseUrl: "{{ BaseUrl }}"
              CaptionLanguageMappings:
                - CaptionChannel: {{ CaptionChannel }}
                  CustomLanguageCode: "{{ CustomLanguageCode }}"
                  LanguageCode: "{{ LanguageCode }}"
                  LanguageDescription: "{{ LanguageDescription }}"
              CaptionLanguageSetting: "{{ CaptionLanguageSetting }}"
              CaptionSegmentLengthControl: "{{ CaptionSegmentLengthControl }}"
              ClientCache: "{{ ClientCache }}"
              CodecSpecification: "{{ CodecSpecification }}"
              Destination: "{{ Destination }}"
              DestinationSettings:
                S3Settings: "{{ S3Settings }}"
              DirectoryStructure: "{{ DirectoryStructure }}"
              Encryption:
                ConstantInitializationVector: "{{ ConstantInitializationVector }}"
                EncryptionMethod: "{{ EncryptionMethod }}"
                InitializationVectorInManifest: "{{ InitializationVectorInManifest }}"
                OfflineEncrypted: "{{ OfflineEncrypted }}"
                SpekeKeyProvider: "{{ SpekeKeyProvider }}"
                StaticKeyProvider: "{{ StaticKeyProvider }}"
                Type: "{{ Type }}"
              ImageBasedTrickPlay: "{{ ImageBasedTrickPlay }}"
              ImageBasedTrickPlaySettings:
                IntervalCadence: "{{ IntervalCadence }}"
                ThumbnailHeight: {{ ThumbnailHeight }}
                ThumbnailInterval: {{ ThumbnailInterval }}
                ThumbnailWidth: {{ ThumbnailWidth }}
                TileHeight: {{ TileHeight }}
                TileWidth: {{ TileWidth }}
              ManifestCompression: "{{ ManifestCompression }}"
              ManifestDurationFormat: "{{ ManifestDurationFormat }}"
              MinFinalSegmentLength: {{ MinFinalSegmentLength }}
              MinSegmentLength: {{ MinSegmentLength }}
              OutputSelection: "{{ OutputSelection }}"
              ProgramDateTime: "{{ ProgramDateTime }}"
              ProgramDateTimePeriod: {{ ProgramDateTimePeriod }}
              ProgressiveWriteHlsManifest: "{{ ProgressiveWriteHlsManifest }}"
              SegmentControl: "{{ SegmentControl }}"
              SegmentLength: {{ SegmentLength }}
              SegmentLengthControl: "{{ SegmentLengthControl }}"
              SegmentsPerSubdirectory: {{ SegmentsPerSubdirectory }}
              StreamInfResolution: "{{ StreamInfResolution }}"
              TargetDurationCompatibilityMode: "{{ TargetDurationCompatibilityMode }}"
              TimedMetadataId3Frame: "{{ TimedMetadataId3Frame }}"
              TimedMetadataId3Period: {{ TimedMetadataId3Period }}
              TimestampDeltaMilliseconds: {{ TimestampDeltaMilliseconds }}
            MsSmoothGroupSettings:
              AdditionalManifests:
                - ManifestNameModifier: "{{ ManifestNameModifier }}"
                  SelectedOutputs: "{{ SelectedOutputs }}"
              AudioDeduplication: "{{ AudioDeduplication }}"
              Destination: "{{ Destination }}"
              DestinationSettings:
                S3Settings: "{{ S3Settings }}"
              Encryption:
                SpekeKeyProvider: "{{ SpekeKeyProvider }}"
              FragmentLength: {{ FragmentLength }}
              FragmentLengthControl: "{{ FragmentLengthControl }}"
              ManifestEncoding: "{{ ManifestEncoding }}"
            PerFrameMetrics:
              - "{{ PerFrameMetrics }}"
            Type: "{{ Type }}"
          Outputs: "{{ Outputs }}"
      TimecodeConfig:
        Anchor: "{{ Anchor }}"
        Source: "{{ Source }}"
        Start: "{{ Start }}"
        TimestampOffset: "{{ TimestampOffset }}"
      TimedMetadataInsertion:
        Id3Insertions:
          - Id3: "{{ Id3 }}"
            Timecode: "{{ Timecode }}"
  - name: SimulateReservedQueue
    value: "{{ SimulateReservedQueue }}"
    description: |
      Enable this setting when you run a test job to estimate how many reserved transcoding slots (RTS) you need. When this is enabled, MediaConvert runs your job from an on-demand queue with similar performance to what you will see with one RTS in a reserved queue. This setting is disabled by default.
    valid_values: ['DISABLED', 'ENABLED']
  - name: StatusUpdateInterval
    value: "{{ StatusUpdateInterval }}"
    description: |
      Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error.
    valid_values: ['SECONDS_10', 'SECONDS_12', 'SECONDS_15', 'SECONDS_20', 'SECONDS_30', 'SECONDS_60', 'SECONDS_120', 'SECONDS_180', 'SECONDS_240', 'SECONDS_300', 'SECONDS_360', 'SECONDS_420', 'SECONDS_480', 'SECONDS_540', 'SECONDS_600']
  - name: Tags
    value: "{{ Tags }}"
  - name: UserMetadata
    value: "{{ UserMetadata }}"
`})})]}),"\n",(0,i.jsx)(t.h2,{id:"lifecycle-methods",children:"Lifecycle Methods"}),"\n",(0,i.jsxs)(d.A,{defaultValue:"search_jobs",values:[{label:"search_jobs",value:"search_jobs"},{label:"start_jobs_query",value:"start_jobs_query"}],children:[(0,i.jsxs)(c.A,{value:"search_jobs",children:[(0,i.jsx)(t.p,{children:"Retrieve a JSON array that includes job details for up to twenty of your most recent jobs. Optionally filter results further according to input file, queue, or status. To retrieve the twenty next most recent jobs, use the nextToken string returned with the array."}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"EXEC aws.mediaconvert.jobs.search_jobs \n@region='{{ region }}' --required, \n@inputFile='{{ inputFile }}', \n@maxResults='{{ maxResults }}', \n@nextToken='{{ nextToken }}', \n@order='{{ order }}', \n@queue='{{ queue }}', \n@status='{{ status }}'\n;\n"})})]}),(0,i.jsxs)(c.A,{value:"start_jobs_query",children:[(0,i.jsx)(t.p,{children:"Start an asynchronous jobs query using the provided filters. To receive the list of jobs that match your query, call the GetJobsQueryResults API using the query ID returned by this API."}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:'EXEC aws.mediaconvert.jobs.start_jobs_query \n@region=\'{{ region }}\' --required \n@@json=\n\'{\n"FilterList": "{{ FilterList }}", \n"MaxResults": {{ MaxResults }}, \n"NextToken": "{{ NextToken }}", \n"Order": "{{ Order }}"\n}\'\n;\n'})})]})]})]})}function m(e={}){let{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}}}]);