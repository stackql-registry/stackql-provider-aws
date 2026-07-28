"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["595126"],{322619(e,t,s){s.r(t),s.d(t,{metadata:()=>i,default:()=>p,frontMatter:()=>l,contentTitle:()=>h,toc:()=>u,assets:()=>j});var i=JSON.parse('{"id":"services/s3control/jobs/index","title":"jobs","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/s3control/jobs/index.md","sourceDirName":"services/s3control/jobs","slug":"/services/s3control/jobs/","permalink":"/services/s3control/jobs/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"jobs","hide_title":false,"hide_table_of_contents":false,"keywords":["jobs","s3control","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"job_taggings","permalink":"/services/s3control/job_taggings/"},"next":{"title":"multi_region_access_point_operations","permalink":"/services/s3control/multi_region_access_point_operations/"}}'),r=s(474848),n=s(28453),o=s(97362),a=s(897272),d=s(413554),c=s(541647);let l={title:"jobs",hide_title:!1,hide_table_of_contents:!1,keywords:["jobs","s3control","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},h,j={},u=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>UPDATE</code> examples",id:"update-examples",level:2}];function x(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Creates, updates, deletes, gets or lists a ",(0,r.jsx)("code",{children:"jobs"})," resource."]}),"\n",(0,r.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)("table",{children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Name"})}),(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"jobs"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Type"})}),(0,r.jsx)("td",{children:"Resource"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Id"})}),(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"aws.s3control.jobs"})})]})]})}),"\n",(0,r.jsx)(t.h2,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(t.p,{children:["The following fields are returned by ",(0,r.jsx)(t.code,{children:"SELECT"})," queries:"]}),"\n",(0,r.jsxs)(d.A,{defaultValue:"describe_job",values:[{label:"describe_job",value:"describe_job"},{label:"list_jobs",value:"list_jobs"}],children:[(0,r.jsx)(c.A,{value:"describe_job",children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Datatype"}),(0,r.jsx)("th",{children:"Description"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"ConfirmationRequired"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"boolean"})}),(0,r.jsx)("td",{children:"Indicates whether confirmation is required before Amazon S3 begins running the specified job. Confirmation is required only for jobs created through the Amazon S3 console."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"CreationTime"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"A timestamp indicating when this job was created."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"Description"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The description for this job, if one was provided in this job's Create Job request."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"FailureReasons"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"If the specified job failed, this field contains information describing the failure."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"GeneratedManifestDescriptor"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The attribute of the JobDescriptor containing details about the job's generated manifest."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"JobArn"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The Amazon Resource Name (ARN) for this job."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"JobId"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The ID for the specified job."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"Manifest"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The configuration information for the specified job's manifest object."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"ManifestGenerator"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The manifest generator that was used to generate a job manifest for this job."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"Operation"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The operation that the specified job is configured to run on the objects listed in the manifest."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"Priority"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"integer"})}),(0,r.jsx)("td",{children:"The priority of the specified job."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"ProgressSummary"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"Describes the total number of tasks that the specified job has run, the number of tasks that succeeded, and the number of tasks that failed."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"Report"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"Contains the configuration information for the job-completion report if you requested one in the Create Job request."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"RoleArn"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The Amazon Resource Name (ARN) for the Identity and Access Management (IAM) role assigned to run the tasks for this job."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"Status"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The current status of the specified job."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"StatusUpdateReason"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The reason for updating the job."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"SuspendedCause"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The reason why the specified job was suspended. A job is only suspended if you create it through the Amazon S3 console. When you create the job, it enters the Suspended state to await confirmation before running. After you confirm the job, it automatically exits the Suspended state."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"SuspendedDate"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The timestamp when this job was suspended, if it has been suspended."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"TerminationDate"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"A timestamp indicating when this job terminated. A job's termination date is the date and time when it succeeded, failed, or was canceled."})]})]})]})}),(0,r.jsx)(c.A,{value:"list_jobs",children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Datatype"}),(0,r.jsx)("th",{children:"Description"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"CreationTime"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"A timestamp indicating when the specified job was created."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"Description"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The user-specified description that was included in the specified job's Create Job request."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"JobId"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The ID for the specified job."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"Operation"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The operation that the specified job is configured to run on every object listed in the manifest."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"Priority"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"integer"})}),(0,r.jsx)("td",{children:"The current priority for the specified job."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"ProgressSummary"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"Describes the total number of tasks that the specified job has run, the number of tasks that succeeded, and the number of tasks that failed."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"Status"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The specified job's current status."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"TerminationDate"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"A timestamp indicating when the specified job terminated. A job's termination date is the date and time when it succeeded, failed, or was canceled."})]})]})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(t.p,{children:"The following methods are available for this resource:"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Accessible by"}),(0,r.jsx)("th",{children:"Required Params"}),(0,r.jsx)("th",{children:"Optional Params"}),(0,r.jsx)("th",{children:"Description"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#describe_job",children:(0,r.jsx)(o.A,{code:"describe_job"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"select"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:"#parameter-x-amz-account-id",children:(0,r.jsx)("code",{children:"x-amz-account-id"})}),", ",(0,r.jsx)("a",{href:"#parameter-id",children:(0,r.jsx)("code",{children:"id"})}),", ",(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})})]}),(0,r.jsx)("td",{}),(0,r.jsxs)("td",{children:["Retrieves the configuration parameters and status for a Batch Operations job. For more information, see S3 Batch Operations in the Amazon S3 User Guide. Permissions To use the DescribeJob operation, you must have permission to perform the s3",":DescribeJob"," action. Related actions include: CreateJob ListJobs UpdateJobPriority UpdateJobStatus"]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#list_jobs",children:(0,r.jsx)(o.A,{code:"list_jobs"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"select"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:"#parameter-x-amz-account-id",children:(0,r.jsx)("code",{children:"x-amz-account-id"})}),", ",(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})})]}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:"#parameter-jobStatuses",children:(0,r.jsx)("code",{children:"jobStatuses"})}),", ",(0,r.jsx)("a",{href:"#parameter-nextToken",children:(0,r.jsx)("code",{children:"nextToken"})}),", ",(0,r.jsx)("a",{href:"#parameter-maxResults",children:(0,r.jsx)("code",{children:"maxResults"})})]}),(0,r.jsxs)("td",{children:["Lists current S3 Batch Operations jobs as well as the jobs that have ended within the last 90 days for the Amazon Web Services account making the request. For more information, see S3 Batch Operations in the Amazon S3 User Guide. Permissions To use the ListJobs operation, you must have permission to perform the s3",":ListJobs"," action. Related actions include: CreateJob DescribeJob UpdateJobPriority UpdateJobStatus"]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#create_job",children:(0,r.jsx)(o.A,{code:"create_job"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"insert"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:"#parameter-x-amz-account-id",children:(0,r.jsx)("code",{children:"x-amz-account-id"})}),", ",(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})}),", ",(0,r.jsx)("a",{href:"#parameter-ClientRequestToken",children:(0,r.jsx)("code",{children:"ClientRequestToken"})}),", ",(0,r.jsx)("a",{href:"#parameter-RoleArn",children:(0,r.jsx)("code",{children:"RoleArn"})})]}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"This operation creates an S3 Batch Operations job. You can use S3 Batch Operations to perform large-scale batch actions on Amazon S3 objects. Batch Operations can run a single action on lists of Amazon S3 objects that you specify. For more information, see S3 Batch Operations in the Amazon S3 User Guide. Permissions For information about permissions required to use the Batch Operations, see Granting permissions for S3 Batch Operations in the Amazon S3 User Guide. Related actions include: DescribeJob ListJobs UpdateJobPriority UpdateJobStatus JobOperation"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#update_job_priority",children:(0,r.jsx)(o.A,{code:"update_job_priority"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"update"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:"#parameter-x-amz-account-id",children:(0,r.jsx)("code",{children:"x-amz-account-id"})}),", ",(0,r.jsx)("a",{href:"#parameter-id",children:(0,r.jsx)("code",{children:"id"})}),", ",(0,r.jsx)("a",{href:"#parameter-priority",children:(0,r.jsx)("code",{children:"priority"})}),", ",(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})})]}),(0,r.jsx)("td",{}),(0,r.jsxs)("td",{children:["Updates an existing S3 Batch Operations job's priority. For more information, see S3 Batch Operations in the Amazon S3 User Guide. Permissions To use the UpdateJobPriority operation, you must have permission to perform the s3",":UpdateJobPriority"," action. Related actions include: CreateJob ListJobs DescribeJob UpdateJobStatus"]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#update_job_status",children:(0,r.jsx)(o.A,{code:"update_job_status"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"update"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:"#parameter-x-amz-account-id",children:(0,r.jsx)("code",{children:"x-amz-account-id"})}),", ",(0,r.jsx)("a",{href:"#parameter-id",children:(0,r.jsx)("code",{children:"id"})}),", ",(0,r.jsx)("a",{href:"#parameter-requestedJobStatus",children:(0,r.jsx)("code",{children:"requestedJobStatus"})}),", ",(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})})]}),(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#parameter-statusUpdateReason",children:(0,r.jsx)("code",{children:"statusUpdateReason"})})}),(0,r.jsxs)("td",{children:["Updates the status for the specified job. Use this operation to confirm that you want to run a job or to cancel an existing job. For more information, see S3 Batch Operations in the Amazon S3 User Guide. Permissions To use the UpdateJobStatus operation, you must have permission to perform the s3",":UpdateJobStatus"," action. Related actions include: CreateJob ListJobs DescribeJob UpdateJobStatus"]})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.p,{children:["Parameters can be passed in the ",(0,r.jsx)(t.code,{children:"WHERE"})," clause of a query. Check the ",(0,r.jsx)(t.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Datatype"}),(0,r.jsx)("th",{children:"Description"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{id:"parameter-id",children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"id"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The ID of the job whose status you want to update."})]}),(0,r.jsxs)("tr",{id:"parameter-priority",children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"priority"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"integer"})}),(0,r.jsx)("td",{children:"The priority you want to assign to this job."})]}),(0,r.jsxs)("tr",{id:"parameter-region",children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"region"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"AWS region (default: us-east-1)"})]}),(0,r.jsxs)("tr",{id:"parameter-requestedJobStatus",children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"requestedJobStatus"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The status that you want to move the specified job to."})]}),(0,r.jsxs)("tr",{id:"parameter-x-amz-account-id",children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"x-amz-account-id"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The Amazon Web Services account ID associated with the S3 Batch Operations job."})]}),(0,r.jsxs)("tr",{id:"parameter-jobStatuses",children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"jobStatuses"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"array"})}),(0,r.jsx)("td",{children:"The List Jobs request returns jobs that match the statuses listed in this element."})]}),(0,r.jsxs)("tr",{id:"parameter-maxResults",children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"maxResults"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"integer"})}),(0,r.jsx)("td",{children:"The maximum number of jobs that Amazon S3 will include in the List Jobs response. If there are more jobs than this number, the response will include a pagination token in the NextToken field to enable you to retrieve the next page of results."})]}),(0,r.jsxs)("tr",{id:"parameter-nextToken",children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"nextToken"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"A pagination token to request the next page of results. Use the token that Amazon S3 returned in the NextToken element of the ListJobsResult from the previous List Jobs request."})]}),(0,r.jsxs)("tr",{id:"parameter-statusUpdateReason",children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"statusUpdateReason"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"A description of the reason why you want to change the specified job's status. This field can be any string up to the maximum length."})]})]})]}),"\n",(0,r.jsxs)(t.h2,{id:"select-examples",children:[(0,r.jsx)(t.code,{children:"SELECT"})," examples"]}),"\n",(0,r.jsxs)(d.A,{defaultValue:"describe_job",values:[{label:"describe_job",value:"describe_job"},{label:"list_jobs",value:"list_jobs"}],children:[(0,r.jsxs)(c.A,{value:"describe_job",children:[(0,r.jsxs)(t.p,{children:["Retrieves the configuration parameters and status for a Batch Operations job. For more information, see S3 Batch Operations in the Amazon S3 User Guide. Permissions To use the DescribeJob operation, you must have permission to perform the s3",":DescribeJob"," action. Related actions include: CreateJob ListJobs UpdateJobPriority UpdateJobStatus"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"SELECT\nConfirmationRequired,\nCreationTime,\nDescription,\nFailureReasons,\nGeneratedManifestDescriptor,\nJobArn,\nJobId,\nManifest,\nManifestGenerator,\nOperation,\nPriority,\nProgressSummary,\nReport,\nRoleArn,\nStatus,\nStatusUpdateReason,\nSuspendedCause,\nSuspendedDate,\nTerminationDate\nFROM aws.s3control.jobs\nWHERE `x-amz-account-id` = '{{ x-amz-account-id }}' -- required\nAND id = '{{ id }}' -- required\nAND region = '{{ region }}' -- required\n;\n"})})]}),(0,r.jsxs)(c.A,{value:"list_jobs",children:[(0,r.jsxs)(t.p,{children:["Lists current S3 Batch Operations jobs as well as the jobs that have ended within the last 90 days for the Amazon Web Services account making the request. For more information, see S3 Batch Operations in the Amazon S3 User Guide. Permissions To use the ListJobs operation, you must have permission to perform the s3",":ListJobs"," action. Related actions include: CreateJob DescribeJob UpdateJobPriority UpdateJobStatus"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"SELECT\nCreationTime,\nDescription,\nJobId,\nOperation,\nPriority,\nProgressSummary,\nStatus,\nTerminationDate\nFROM aws.s3control.jobs\nWHERE `x-amz-account-id` = '{{ x-amz-account-id }}' -- required\nAND region = '{{ region }}' -- required\nAND jobStatuses = '{{ jobStatuses }}'\nAND nextToken = '{{ nextToken }}'\nAND maxResults = '{{ maxResults }}'\n;\n"})})]})]}),"\n",(0,r.jsxs)(t.h2,{id:"insert-examples",children:[(0,r.jsx)(t.code,{children:"INSERT"})," examples"]}),"\n",(0,r.jsxs)(d.A,{defaultValue:"create_job",values:[{label:"create_job",value:"create_job"},{label:"Manifest",value:"manifest"}],children:[(0,r.jsxs)(c.A,{value:"create_job",children:[(0,r.jsx)(t.p,{children:"This operation creates an S3 Batch Operations job. You can use S3 Batch Operations to perform large-scale batch actions on Amazon S3 objects. Batch Operations can run a single action on lists of Amazon S3 objects that you specify. For more information, see S3 Batch Operations in the Amazon S3 User Guide. Permissions For information about permissions required to use the Batch Operations, see Granting permissions for S3 Batch Operations in the Amazon S3 User Guide. Related actions include: DescribeJob ListJobs UpdateJobPriority UpdateJobStatus JobOperation"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"INSERT INTO aws.s3control.jobs (\nConfirmationRequired,\nOperation,\nReport,\nClientRequestToken,\nManifest,\nDescription,\nPriority,\nRoleArn,\nTags,\nManifestGenerator,\n`x-amz-account-id`,\nregion\n)\nSELECT \n{{ ConfirmationRequired }},\n'{{ Operation }}',\n'{{ Report }}',\n'{{ ClientRequestToken }}' /* required */,\n'{{ Manifest }}',\n'{{ Description }}',\n{{ Priority }},\n'{{ RoleArn }}' /* required */,\n'{{ Tags }}',\n'{{ ManifestGenerator }}',\n'{{ x-amz-account-id }}',\n'{{ region }}'\nRETURNING\nJobId\n;\n"})})]}),(0,r.jsx)(c.A,{value:"manifest",children:(0,r.jsx)(a.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: jobs
props:
  - name: x-amz-account-id
    value: "{{ x-amz-account-id }}"
    description: Required parameter for the jobs resource.
  - name: region
    value: "{{ region }}"
    description: Required parameter for the jobs resource.
  - name: ConfirmationRequired
    value: {{ ConfirmationRequired }}
  - name: Operation
    description: |
      The operation that you want this job to perform on every object listed in the manifest. For more information about the available operations, see Operations in the Amazon S3 User Guide.
    value:
      LambdaInvoke:
        FunctionArn: "{{ FunctionArn }}"
        InvocationSchemaVersion: "{{ InvocationSchemaVersion }}"
        UserArguments: "{{ UserArguments }}"
      S3PutObjectCopy:
        TargetResource: "{{ TargetResource }}"
        CannedAccessControlList: "{{ CannedAccessControlList }}"
        AccessControlGrants:
          - Grantee:
              TypeIdentifier: "{{ TypeIdentifier }}"
              Identifier: "{{ Identifier }}"
              DisplayName: "{{ DisplayName }}"
            Permission: "{{ Permission }}"
        MetadataDirective: "{{ MetadataDirective }}"
        ModifiedSinceConstraint: "{{ ModifiedSinceConstraint }}"
        NewObjectMetadata:
          CacheControl: "{{ CacheControl }}"
          ContentDisposition: "{{ ContentDisposition }}"
          ContentEncoding: "{{ ContentEncoding }}"
          ContentLanguage: "{{ ContentLanguage }}"
          UserMetadata: "{{ UserMetadata }}"
          ContentLength: {{ ContentLength }}
          ContentMD5: "{{ ContentMD5 }}"
          ContentType: "{{ ContentType }}"
          HttpExpiresDate: "{{ HttpExpiresDate }}"
          RequesterCharged: {{ RequesterCharged }}
          SSEAlgorithm: "{{ SSEAlgorithm }}"
        NewObjectTagging:
          - Key: "{{ Key }}"
            Value: "{{ Value }}"
        RedirectLocation: "{{ RedirectLocation }}"
        RequesterPays: {{ RequesterPays }}
        StorageClass: "{{ StorageClass }}"
        UnModifiedSinceConstraint: "{{ UnModifiedSinceConstraint }}"
        SSEAwsKmsKeyId: "{{ SSEAwsKmsKeyId }}"
        TargetKeyPrefix: "{{ TargetKeyPrefix }}"
        ObjectLockLegalHoldStatus: "{{ ObjectLockLegalHoldStatus }}"
        ObjectLockMode: "{{ ObjectLockMode }}"
        ObjectLockRetainUntilDate: "{{ ObjectLockRetainUntilDate }}"
        BucketKeyEnabled: {{ BucketKeyEnabled }}
        ChecksumAlgorithm: "{{ ChecksumAlgorithm }}"
      S3PutObjectAcl:
        AccessControlPolicy:
          AccessControlList:
            Owner:
              ID: "{{ ID }}"
              DisplayName: "{{ DisplayName }}"
            Grants:
              - Grantee:
                  TypeIdentifier: "{{ TypeIdentifier }}"
                  Identifier: "{{ Identifier }}"
                  DisplayName: "{{ DisplayName }}"
                Permission: "{{ Permission }}"
          CannedAccessControlList: "{{ CannedAccessControlList }}"
      S3PutObjectTagging:
        TagSet:
          - Key: "{{ Key }}"
            Value: "{{ Value }}"
      S3DeleteObjectTagging: "{{ S3DeleteObjectTagging }}"
      S3InitiateRestoreObject:
        ExpirationInDays: {{ ExpirationInDays }}
        GlacierJobTier: "{{ GlacierJobTier }}"
      S3PutObjectLegalHold:
        LegalHold:
          Status: "{{ Status }}"
      S3PutObjectRetention:
        BypassGovernanceRetention: {{ BypassGovernanceRetention }}
        Retention:
          RetainUntilDate: "{{ RetainUntilDate }}"
          Mode: "{{ Mode }}"
      S3ReplicateObject: "{{ S3ReplicateObject }}"
      S3ComputeObjectChecksum:
        ChecksumAlgorithm: "{{ ChecksumAlgorithm }}"
        ChecksumType: "{{ ChecksumType }}"
      S3UpdateObjectEncryption:
        ObjectEncryption:
          SSEKMS:
            KMSKeyArn: "{{ KMSKeyArn }}"
            BucketKeyEnabled: {{ BucketKeyEnabled }}
  - name: Report
    description: |
      Contains the configuration parameters for a job-completion report.
    value:
      Bucket: "{{ Bucket }}"
      Format: "{{ Format }}"
      Enabled: {{ Enabled }}
      Prefix: "{{ Prefix }}"
      ReportScope: "{{ ReportScope }}"
      ExpectedBucketOwner: "{{ ExpectedBucketOwner }}"
  - name: ClientRequestToken
    value: "{{ ClientRequestToken }}"
  - name: Manifest
    description: |
      Contains the configuration information for a job's manifest.
    value:
      Spec:
        Format: "{{ Format }}"
        Fields:
          - "{{ Fields }}"
      Location:
        ObjectArn: "{{ ObjectArn }}"
        ObjectVersionId: "{{ ObjectVersionId }}"
        ETag: "{{ ETag }}"
  - name: Description
    value: "{{ Description }}"
  - name: Priority
    value: {{ Priority }}
  - name: RoleArn
    value: "{{ RoleArn }}"
  - name: Tags
    value:
      - Key: "{{ Key }}"
        Value: "{{ Value }}"
  - name: ManifestGenerator
    description: |
      Configures the type of the job's ManifestGenerator.
    value:
      S3JobManifestGenerator:
        ExpectedBucketOwner: "{{ ExpectedBucketOwner }}"
        SourceBucket: "{{ SourceBucket }}"
        ManifestOutputLocation:
          ExpectedManifestBucketOwner: "{{ ExpectedManifestBucketOwner }}"
          Bucket: "{{ Bucket }}"
          ManifestPrefix: "{{ ManifestPrefix }}"
          ManifestEncryption:
            SSES3: "{{ SSES3 }}"
            SSEKMS:
              KeyId: "{{ KeyId }}"
          ManifestFormat: "{{ ManifestFormat }}"
        Filter:
          EligibleForReplication: {{ EligibleForReplication }}
          CreatedAfter: "{{ CreatedAfter }}"
          CreatedBefore: "{{ CreatedBefore }}"
          ObjectReplicationStatuses:
            - "{{ ObjectReplicationStatuses }}"
          KeyNameConstraint:
            MatchAnyPrefix:
              - "{{ MatchAnyPrefix }}"
            MatchAnySuffix:
              - "{{ MatchAnySuffix }}"
            MatchAnySubstring:
              - "{{ MatchAnySubstring }}"
          ObjectSizeGreaterThanBytes: {{ ObjectSizeGreaterThanBytes }}
          ObjectSizeLessThanBytes: {{ ObjectSizeLessThanBytes }}
          MatchAnyStorageClass:
            - "{{ MatchAnyStorageClass }}"
          MatchAnyObjectEncryption:
            - SSES3: "{{ SSES3 }}"
              SSEKMS:
                KmsKeyArn: "{{ KmsKeyArn }}"
                BucketKeyEnabled: {{ BucketKeyEnabled }}
              DSSEKMS:
                KmsKeyArn: "{{ KmsKeyArn }}"
              SSEC: "{{ SSEC }}"
              NOTSSE: "{{ NOTSSE }}"
        EnableManifestOutput: {{ EnableManifestOutput }}
`})})]}),"\n",(0,r.jsxs)(t.h2,{id:"update-examples",children:[(0,r.jsx)(t.code,{children:"UPDATE"})," examples"]}),"\n",(0,r.jsxs)(d.A,{defaultValue:"update_job_priority",values:[{label:"update_job_priority",value:"update_job_priority"},{label:"update_job_status",value:"update_job_status"}],children:[(0,r.jsxs)(c.A,{value:"update_job_priority",children:[(0,r.jsxs)(t.p,{children:["Updates an existing S3 Batch Operations job's priority. For more information, see S3 Batch Operations in the Amazon S3 User Guide. Permissions To use the UpdateJobPriority operation, you must have permission to perform the s3",":UpdateJobPriority"," action. Related actions include: CreateJob ListJobs DescribeJob UpdateJobStatus"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"UPDATE aws.s3control.jobs\nSET \n-- No updatable properties\nWHERE \n`x-amz-account-id` = '{{ x-amz-account-id }}' --required\nAND id = '{{ id }}' --required\nAND priority = '{{ priority }}' --required\nAND region = '{{ region }}' --required\nRETURNING\nJobId,\nPriority;\n"})})]}),(0,r.jsxs)(c.A,{value:"update_job_status",children:[(0,r.jsxs)(t.p,{children:["Updates the status for the specified job. Use this operation to confirm that you want to run a job or to cancel an existing job. For more information, see S3 Batch Operations in the Amazon S3 User Guide. Permissions To use the UpdateJobStatus operation, you must have permission to perform the s3",":UpdateJobStatus"," action. Related actions include: CreateJob ListJobs DescribeJob UpdateJobStatus"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"UPDATE aws.s3control.jobs\nSET \n-- No updatable properties\nWHERE \n`x-amz-account-id` = '{{ x-amz-account-id }}' --required\nAND id = '{{ id }}' --required\nAND requestedJobStatus = '{{ requestedJobStatus }}' --required\nAND region = '{{ region }}' --required\nAND statusUpdateReason = '{{ statusUpdateReason}}'\nRETURNING\nJobId,\nStatus,\nStatusUpdateReason;\n"})})]})]})]})}function p(e={}){let{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}}}]);