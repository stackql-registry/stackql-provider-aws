--- 
title: jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - jobs
  - glue
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_jobs"
    values={[
        { label: 'batch_get_jobs', value: 'batch_get_jobs' },
        { label: 'get_job', value: 'get_job' },
        { label: 'get_jobs', value: 'get_jobs' }
    ]}
>
<TabItem value="batch_get_jobs">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="jobs" /></td>
    <td><code>array</code></td>
    <td>A list of job definitions.</td>
</tr>
<tr>
    <td><CopyableCode code="jobs_not_found" /></td>
    <td><code>array</code></td>
    <td>A list of names of jobs not found.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_job">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="allocated_capacity" /></td>
    <td><code>integer</code></td>
    <td>This field is deprecated. Use MaxCapacity instead. The number of Glue data processing units (DPUs) allocated to runs of this job. You can allocate a minimum of 2 DPUs; the default is 10. A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information, see the Glue pricing page.</td>
</tr>
<tr>
    <td><CopyableCode code="code_gen_configuration_nodes" /></td>
    <td><code>object</code></td>
    <td>The representation of a directed acyclic graph on which both the Glue Studio visual component and Glue Studio code generation is based.</td>
</tr>
<tr>
    <td><CopyableCode code="command" /></td>
    <td><code>object</code></td>
    <td>The JobCommand that runs this job.</td>
</tr>
<tr>
    <td><CopyableCode code="connections" /></td>
    <td><code>object</code></td>
    <td>The connections used for this job.</td>
</tr>
<tr>
    <td><CopyableCode code="created_on" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time and date that this job definition was created.</td>
</tr>
<tr>
    <td><CopyableCode code="default_arguments" /></td>
    <td><code>object</code></td>
    <td>The default arguments for every run of this job, specified as name-value pairs. You can specify arguments here that your own job-execution script consumes, as well as arguments that Glue itself consumes. Job arguments may be logged. Do not pass plaintext secrets as arguments. Retrieve secrets from a Glue Connection, Secrets Manager or other secret management mechanism if you intend to keep them within the Job. For information about how to specify and consume your own Job arguments, see the Calling Glue APIs in Python topic in the developer guide. For information about the arguments you can provide to this field when configuring Spark jobs, see the Special Parameters Used by Glue topic in the developer guide. For information about the arguments you can provide to this field when configuring Ray jobs, see Using job parameters in Ray jobs in the developer guide.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the job. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="execution_class" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the job is run with a standard or flexible execution class. The standard execution class is ideal for time-sensitive workloads that require fast job startup and dedicated resources. The flexible execution class is appropriate for time-insensitive jobs whose start and completion times may vary. Only jobs with Glue version 3.0 and above and command type glueetl will be allowed to set ExecutionClass to FLEX. The flexible execution class is available for Spark jobs. (FLEX, STANDARD)</td>
</tr>
<tr>
    <td><CopyableCode code="execution_property" /></td>
    <td><code>object</code></td>
    <td>An ExecutionProperty specifying the maximum number of concurrent runs allowed for this job.</td>
</tr>
<tr>
    <td><CopyableCode code="glue_version" /></td>
    <td><code>string</code></td>
    <td>In Spark jobs, GlueVersion determines the versions of Apache Spark and Python that Glue available in a job. The Python version indicates the version supported for jobs of type Spark. Ray jobs should set GlueVersion to 4.0 or greater. However, the versions of Ray, Python and additional libraries available in your Ray job are determined by the Runtime parameter of the Job command. For more information about the available Glue versions and corresponding Spark and Python versions, see Glue version in the developer guide. Jobs that are created without specifying a Glue version default to Glue 5.1. (pattern: &lt;code&gt;^(\w+\.)+\w+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_mode" /></td>
    <td><code>string</code></td>
    <td>A mode that describes how a job was created. Valid values are: SCRIPT - The job was created using the Glue Studio script editor. VISUAL - The job was created using the Glue Studio visual editor. NOTEBOOK - The job was created using an interactive sessions notebook. When the JobMode field is missing or null, SCRIPT is assigned as the default value. (SCRIPT, VISUAL, NOTEBOOK)</td>
</tr>
<tr>
    <td><CopyableCode code="job_run_queuing_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether job run queuing is enabled for the job runs for this job. A value of true means job run queuing is enabled for the job runs. If false or not populated, the job runs will not be considered for queueing. If this field does not match the value set in the job run, then the value from the job run field will be used.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_on" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last point in time when this job definition was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="log_uri" /></td>
    <td><code>string</code></td>
    <td>This field is reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="maintenance_window" /></td>
    <td><code>string</code></td>
    <td>This field specifies a day of the week and hour for a maintenance window for streaming jobs. Glue periodically performs maintenance activities. During these maintenance windows, Glue will need to restart your streaming jobs. Glue will restart the job within 3 hours of the specified maintenance window. For instance, if you set up the maintenance window for Monday at 10:00AM GMT, your jobs will be restarted between 10:00AM GMT to 1:00PM GMT. (pattern: &lt;code&gt;^(Sun|Mon|Tue|Wed|Thu|Fri|Sat):(&#91;01&#93;?&#91;0-9&#93;|2&#91;0-3&#93;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="max_capacity" /></td>
    <td><code>number (double)</code></td>
    <td>For Glue version 1.0 or earlier jobs, using the standard worker type, the number of Glue data processing units (DPUs) that can be allocated when this job runs. A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information, see the Glue pricing page. For Glue version 2.0 or later jobs, you cannot specify a Maximum capacity. Instead, you should specify a Worker type and the Number of workers. Do not set MaxCapacity if using WorkerType and NumberOfWorkers. The value that can be allocated for MaxCapacity depends on whether you are running a Python shell job, an Apache Spark ETL job, or an Apache Spark streaming ETL job: When you specify a Python shell job (JobCommand.Name="pythonshell"), you can allocate either 0.0625 or 1 DPU. The default is 0.0625 DPU. When you specify an Apache Spark ETL job (JobCommand.Name="glueetl") or Apache Spark streaming ETL job (JobCommand.Name="gluestreaming"), you can allocate from 2 to 100 DPUs. The default is 10 DPUs. This job type cannot have a fractional DPU allocation.</td>
</tr>
<tr>
    <td><CopyableCode code="max_retries" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of times to retry this job after a JobRun fails.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name you assign to this job definition. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="non_overridable_arguments" /></td>
    <td><code>object</code></td>
    <td>Arguments for this job that are not overridden when providing job arguments in a job run, specified as name-value pairs.</td>
</tr>
<tr>
    <td><CopyableCode code="notification_property" /></td>
    <td><code>object</code></td>
    <td>Specifies configuration properties of a job notification.</td>
</tr>
<tr>
    <td><CopyableCode code="number_of_workers" /></td>
    <td><code>integer</code></td>
    <td>The number of workers of a defined workerType that are allocated when a job runs.</td>
</tr>
<tr>
    <td><CopyableCode code="profile_name" /></td>
    <td><code>string</code></td>
    <td>The name of an Glue usage profile associated with the job. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>The name or Amazon Resource Name (ARN) of the IAM role associated with this job.</td>
</tr>
<tr>
    <td><CopyableCode code="security_configuration" /></td>
    <td><code>string</code></td>
    <td>The name of the SecurityConfiguration structure to be used with this job. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="source_control_details" /></td>
    <td><code>object</code></td>
    <td>The details for a source control configuration for a job, allowing synchronization of job artifacts to or from a remote repository.</td>
</tr>
<tr>
    <td><CopyableCode code="timeout" /></td>
    <td><code>integer</code></td>
    <td>The job timeout in minutes. This is the maximum time that a job run can consume resources before it is terminated and enters TIMEOUT status. Jobs must have timeout values less than 7 days or 10080 minutes. Otherwise, the jobs will throw an exception. When the value is left blank, the timeout is defaulted to 2,880 minutes for Glue version 4.0 and earlier, or 480 minutes for Glue version 5.0 and later. Any existing Glue jobs that had a timeout value greater than 7 days will be defaulted to 7 days. For instance if you have specified a timeout of 20 days for a batch job, it will be stopped on the 7th day. For streaming jobs, if you have set up a maintenance window, it will be restarted during the maintenance window after 7 days.</td>
</tr>
<tr>
    <td><CopyableCode code="worker_type" /></td>
    <td><code>string</code></td>
    <td>The type of predefined worker that is allocated when a job runs. Glue provides multiple worker types to accommodate different workload requirements: G Worker Types (General-purpose compute workers): G.1X: 1 DPU (4 vCPUs, 16 GB memory, 94GB disk) G.2X: 2 DPU (8 vCPUs, 32 GB memory, 138GB disk) G.4X: 4 DPU (16 vCPUs, 64 GB memory, 256GB disk) G.8X: 8 DPU (32 vCPUs, 128 GB memory, 512GB disk) G.12X: 12 DPU (48 vCPUs, 192 GB memory, 768GB disk) G.16X: 16 DPU (64 vCPUs, 256 GB memory, 1024GB disk) R Worker Types (Memory-optimized workers): R.1X: 1 M-DPU (4 vCPUs, 32 GB memory) R.2X: 2 M-DPU (8 vCPUs, 64 GB memory) R.4X: 4 M-DPU (16 vCPUs, 128 GB memory) R.8X: 8 M-DPU (32 vCPUs, 256 GB memory) (Standard, G.1X, G.2X, G.025X, G.4X, G.8X, Z.2X)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_jobs">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="allocated_capacity" /></td>
    <td><code>integer</code></td>
    <td>This field is deprecated. Use MaxCapacity instead. The number of Glue data processing units (DPUs) allocated to runs of this job. You can allocate a minimum of 2 DPUs; the default is 10. A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information, see the Glue pricing page.</td>
</tr>
<tr>
    <td><CopyableCode code="code_gen_configuration_nodes" /></td>
    <td><code>object</code></td>
    <td>The representation of a directed acyclic graph on which both the Glue Studio visual component and Glue Studio code generation is based.</td>
</tr>
<tr>
    <td><CopyableCode code="command" /></td>
    <td><code>object</code></td>
    <td>The JobCommand that runs this job.</td>
</tr>
<tr>
    <td><CopyableCode code="connections" /></td>
    <td><code>object</code></td>
    <td>The connections used for this job.</td>
</tr>
<tr>
    <td><CopyableCode code="created_on" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time and date that this job definition was created.</td>
</tr>
<tr>
    <td><CopyableCode code="default_arguments" /></td>
    <td><code>object</code></td>
    <td>The default arguments for every run of this job, specified as name-value pairs. You can specify arguments here that your own job-execution script consumes, as well as arguments that Glue itself consumes. Job arguments may be logged. Do not pass plaintext secrets as arguments. Retrieve secrets from a Glue Connection, Secrets Manager or other secret management mechanism if you intend to keep them within the Job. For information about how to specify and consume your own Job arguments, see the Calling Glue APIs in Python topic in the developer guide. For information about the arguments you can provide to this field when configuring Spark jobs, see the Special Parameters Used by Glue topic in the developer guide. For information about the arguments you can provide to this field when configuring Ray jobs, see Using job parameters in Ray jobs in the developer guide.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the job. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="execution_class" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the job is run with a standard or flexible execution class. The standard execution class is ideal for time-sensitive workloads that require fast job startup and dedicated resources. The flexible execution class is appropriate for time-insensitive jobs whose start and completion times may vary. Only jobs with Glue version 3.0 and above and command type glueetl will be allowed to set ExecutionClass to FLEX. The flexible execution class is available for Spark jobs. (FLEX, STANDARD)</td>
</tr>
<tr>
    <td><CopyableCode code="execution_property" /></td>
    <td><code>object</code></td>
    <td>An ExecutionProperty specifying the maximum number of concurrent runs allowed for this job.</td>
</tr>
<tr>
    <td><CopyableCode code="glue_version" /></td>
    <td><code>string</code></td>
    <td>In Spark jobs, GlueVersion determines the versions of Apache Spark and Python that Glue available in a job. The Python version indicates the version supported for jobs of type Spark. Ray jobs should set GlueVersion to 4.0 or greater. However, the versions of Ray, Python and additional libraries available in your Ray job are determined by the Runtime parameter of the Job command. For more information about the available Glue versions and corresponding Spark and Python versions, see Glue version in the developer guide. Jobs that are created without specifying a Glue version default to Glue 5.1. (pattern: &lt;code&gt;^(\w+\.)+\w+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_mode" /></td>
    <td><code>string</code></td>
    <td>A mode that describes how a job was created. Valid values are: SCRIPT - The job was created using the Glue Studio script editor. VISUAL - The job was created using the Glue Studio visual editor. NOTEBOOK - The job was created using an interactive sessions notebook. When the JobMode field is missing or null, SCRIPT is assigned as the default value. (SCRIPT, VISUAL, NOTEBOOK)</td>
</tr>
<tr>
    <td><CopyableCode code="job_run_queuing_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether job run queuing is enabled for the job runs for this job. A value of true means job run queuing is enabled for the job runs. If false or not populated, the job runs will not be considered for queueing. If this field does not match the value set in the job run, then the value from the job run field will be used.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_on" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last point in time when this job definition was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="log_uri" /></td>
    <td><code>string</code></td>
    <td>This field is reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="maintenance_window" /></td>
    <td><code>string</code></td>
    <td>This field specifies a day of the week and hour for a maintenance window for streaming jobs. Glue periodically performs maintenance activities. During these maintenance windows, Glue will need to restart your streaming jobs. Glue will restart the job within 3 hours of the specified maintenance window. For instance, if you set up the maintenance window for Monday at 10:00AM GMT, your jobs will be restarted between 10:00AM GMT to 1:00PM GMT. (pattern: &lt;code&gt;^(Sun|Mon|Tue|Wed|Thu|Fri|Sat):(&#91;01&#93;?&#91;0-9&#93;|2&#91;0-3&#93;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="max_capacity" /></td>
    <td><code>number (double)</code></td>
    <td>For Glue version 1.0 or earlier jobs, using the standard worker type, the number of Glue data processing units (DPUs) that can be allocated when this job runs. A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information, see the Glue pricing page. For Glue version 2.0 or later jobs, you cannot specify a Maximum capacity. Instead, you should specify a Worker type and the Number of workers. Do not set MaxCapacity if using WorkerType and NumberOfWorkers. The value that can be allocated for MaxCapacity depends on whether you are running a Python shell job, an Apache Spark ETL job, or an Apache Spark streaming ETL job: When you specify a Python shell job (JobCommand.Name="pythonshell"), you can allocate either 0.0625 or 1 DPU. The default is 0.0625 DPU. When you specify an Apache Spark ETL job (JobCommand.Name="glueetl") or Apache Spark streaming ETL job (JobCommand.Name="gluestreaming"), you can allocate from 2 to 100 DPUs. The default is 10 DPUs. This job type cannot have a fractional DPU allocation.</td>
</tr>
<tr>
    <td><CopyableCode code="max_retries" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of times to retry this job after a JobRun fails.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name you assign to this job definition. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="non_overridable_arguments" /></td>
    <td><code>object</code></td>
    <td>Arguments for this job that are not overridden when providing job arguments in a job run, specified as name-value pairs.</td>
</tr>
<tr>
    <td><CopyableCode code="notification_property" /></td>
    <td><code>object</code></td>
    <td>Specifies configuration properties of a job notification.</td>
</tr>
<tr>
    <td><CopyableCode code="number_of_workers" /></td>
    <td><code>integer</code></td>
    <td>The number of workers of a defined workerType that are allocated when a job runs.</td>
</tr>
<tr>
    <td><CopyableCode code="profile_name" /></td>
    <td><code>string</code></td>
    <td>The name of an Glue usage profile associated with the job. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>The name or Amazon Resource Name (ARN) of the IAM role associated with this job.</td>
</tr>
<tr>
    <td><CopyableCode code="security_configuration" /></td>
    <td><code>string</code></td>
    <td>The name of the SecurityConfiguration structure to be used with this job. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="source_control_details" /></td>
    <td><code>object</code></td>
    <td>The details for a source control configuration for a job, allowing synchronization of job artifacts to or from a remote repository.</td>
</tr>
<tr>
    <td><CopyableCode code="timeout" /></td>
    <td><code>integer</code></td>
    <td>The job timeout in minutes. This is the maximum time that a job run can consume resources before it is terminated and enters TIMEOUT status. Jobs must have timeout values less than 7 days or 10080 minutes. Otherwise, the jobs will throw an exception. When the value is left blank, the timeout is defaulted to 2,880 minutes for Glue version 4.0 and earlier, or 480 minutes for Glue version 5.0 and later. Any existing Glue jobs that had a timeout value greater than 7 days will be defaulted to 7 days. For instance if you have specified a timeout of 20 days for a batch job, it will be stopped on the 7th day. For streaming jobs, if you have set up a maintenance window, it will be restarted during the maintenance window after 7 days.</td>
</tr>
<tr>
    <td><CopyableCode code="worker_type" /></td>
    <td><code>string</code></td>
    <td>The type of predefined worker that is allocated when a job runs. Glue provides multiple worker types to accommodate different workload requirements: G Worker Types (General-purpose compute workers): G.1X: 1 DPU (4 vCPUs, 16 GB memory, 94GB disk) G.2X: 2 DPU (8 vCPUs, 32 GB memory, 138GB disk) G.4X: 4 DPU (16 vCPUs, 64 GB memory, 256GB disk) G.8X: 8 DPU (32 vCPUs, 128 GB memory, 512GB disk) G.12X: 12 DPU (48 vCPUs, 192 GB memory, 768GB disk) G.16X: 16 DPU (64 vCPUs, 256 GB memory, 1024GB disk) R Worker Types (Memory-optimized workers): R.1X: 1 M-DPU (4 vCPUs, 32 GB memory) R.2X: 2 M-DPU (8 vCPUs, 64 GB memory) R.4X: 4 M-DPU (16 vCPUs, 128 GB memory) R.8X: 8 M-DPU (32 vCPUs, 256 GB memory) (Standard, G.1X, G.2X, G.025X, G.4X, G.8X, Z.2X)</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#batch_get_jobs"><CopyableCode code="batch_get_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of resource metadata for a given list of job names. After calling the ListJobs operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.</td>
</tr>
<tr>
    <td><a href="#get_job"><CopyableCode code="get_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves an existing job definition.</td>
</tr>
<tr>
    <td><a href="#get_jobs"><CopyableCode code="get_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves all current job definitions.</td>
</tr>
<tr>
    <td><a href="#create_job"><CopyableCode code="create_job" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a new job definition.</td>
</tr>
<tr>
    <td><a href="#update_job"><CopyableCode code="update_job" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-JobName"><code>JobName</code></a>, <a href="#parameter-JobUpdate"><code>JobUpdate</code></a></td>
    <td></td>
    <td>Updates an existing job definition. The previous job definition is completely overwritten by this information.</td>
</tr>
<tr>
    <td><a href="#update_job_from_source_control"><CopyableCode code="update_job_from_source_control" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Synchronizes a job from the source control repository. This operation takes the job artifacts that are located in the remote repository and updates the Glue internal stores with these artifacts. This API supports optional parameters which take in the repository information.</td>
</tr>
<tr>
    <td><a href="#delete_job"><CopyableCode code="delete_job" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a specified job definition. If the job definition is not found, no exception is thrown.</td>
</tr>
<tr>
    <td><a href="#list_jobs"><CopyableCode code="list_jobs" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the names of all job resources in this Amazon Web Services account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names. This operation takes the optional Tags field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved.</td>
</tr>
<tr>
    <td><a href="#reset_job_bookmark"><CopyableCode code="reset_job_bookmark" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-JobName"><code>JobName</code></a></td>
    <td></td>
    <td>Resets a bookmark entry. For more information about enabling and using job bookmarks, see: Tracking processed data using job bookmarks Job parameters used by Glue Job structure</td>
</tr>
<tr>
    <td><a href="#start_job_run"><CopyableCode code="start_job_run" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-JobName"><code>JobName</code></a></td>
    <td></td>
    <td>Starts a job run using a job definition.</td>
</tr>
<tr>
    <td><a href="#update_source_control_from_job"><CopyableCode code="update_source_control_from_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Synchronizes a job to the source control repository. This operation takes the job artifacts from the Glue internal stores and makes a commit to the remote repository that is configured on the job. This API supports optional parameters which take in the repository information.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="batch_get_jobs"
    values={[
        { label: 'batch_get_jobs', value: 'batch_get_jobs' },
        { label: 'get_job', value: 'get_job' },
        { label: 'get_jobs', value: 'get_jobs' }
    ]}
>
<TabItem value="batch_get_jobs">

Returns a list of resource metadata for a given list of job names. After calling the ListJobs operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.

```sql
SELECT
jobs,
jobs_not_found
FROM aws.glue.jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_job">

Retrieves an existing job definition.

```sql
SELECT
allocated_capacity,
code_gen_configuration_nodes,
command,
connections,
created_on,
default_arguments,
description,
execution_class,
execution_property,
glue_version,
job_mode,
job_run_queuing_enabled,
last_modified_on,
log_uri,
maintenance_window,
max_capacity,
max_retries,
name,
non_overridable_arguments,
notification_property,
number_of_workers,
profile_name,
role,
security_configuration,
source_control_details,
timeout,
worker_type
FROM aws.glue.jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_jobs">

Retrieves all current job definitions.

```sql
SELECT
allocated_capacity,
code_gen_configuration_nodes,
command,
connections,
created_on,
default_arguments,
description,
execution_class,
execution_property,
glue_version,
job_mode,
job_run_queuing_enabled,
last_modified_on,
log_uri,
maintenance_window,
max_capacity,
max_retries,
name,
non_overridable_arguments,
notification_property,
number_of_workers,
profile_name,
role,
security_configuration,
source_control_details,
timeout,
worker_type
FROM aws.glue.jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_job"
    values={[
        { label: 'create_job', value: 'create_job' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_job">

Creates a new job definition.

```sql
INSERT INTO aws.glue.jobs (
Name,
JobMode,
JobRunQueuingEnabled,
Description,
LogUri,
Role,
ExecutionProperty,
Command,
DefaultArguments,
NonOverridableArguments,
Connections,
MaxRetries,
AllocatedCapacity,
Timeout,
MaxCapacity,
SecurityConfiguration,
Tags,
NotificationProperty,
GlueVersion,
NumberOfWorkers,
WorkerType,
CodeGenConfigurationNodes,
ExecutionClass,
SourceControlDetails,
MaintenanceWindow,
region
)
SELECT 
'{{ Name }}',
'{{ JobMode }}',
{{ JobRunQueuingEnabled }},
'{{ Description }}',
'{{ LogUri }}',
'{{ Role }}',
'{{ ExecutionProperty }}',
'{{ Command }}',
'{{ DefaultArguments }}',
'{{ NonOverridableArguments }}',
'{{ Connections }}',
{{ MaxRetries }},
{{ AllocatedCapacity }},
{{ Timeout }},
{{ MaxCapacity }},
'{{ SecurityConfiguration }}',
'{{ Tags }}',
'{{ NotificationProperty }}',
'{{ GlueVersion }}',
{{ NumberOfWorkers }},
'{{ WorkerType }}',
'{{ CodeGenConfigurationNodes }}',
'{{ ExecutionClass }}',
'{{ SourceControlDetails }}',
'{{ MaintenanceWindow }}',
'{{ region }}'
RETURNING
name
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: jobs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the jobs resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        The name you assign to this job definition. It must be unique in your account.
    - name: JobMode
      value: "{{ JobMode }}"
      description: |
        A mode that describes how a job was created. Valid values are: SCRIPT - The job was created using the Glue Studio script editor. VISUAL - The job was created using the Glue Studio visual editor. NOTEBOOK - The job was created using an interactive sessions notebook. When the JobMode field is missing or null, SCRIPT is assigned as the default value.
      valid_values: ['SCRIPT', 'VISUAL', 'NOTEBOOK']
    - name: JobRunQueuingEnabled
      value: {{ JobRunQueuingEnabled }}
      description: |
        Specifies whether job run queuing is enabled for the job runs for this job. A value of true means job run queuing is enabled for the job runs. If false or not populated, the job runs will not be considered for queueing. If this field does not match the value set in the job run, then the value from the job run field will be used.
    - name: Description
      value: "{{ Description }}"
      description: |
        Description of the job being defined.
    - name: LogUri
      value: "{{ LogUri }}"
      description: |
        This field is reserved for future use.
    - name: Role
      value: "{{ Role }}"
      description: |
        The name or Amazon Resource Name (ARN) of the IAM role associated with this job.
    - name: ExecutionProperty
      description: |
        An ExecutionProperty specifying the maximum number of concurrent runs allowed for this job.
      value:
        MaxConcurrentRuns: {{ MaxConcurrentRuns }}
    - name: Command
      description: |
        The JobCommand that runs this job.
      value:
        Name: "{{ Name }}"
        ScriptLocation: "{{ ScriptLocation }}"
        PythonVersion: "{{ PythonVersion }}"
        Runtime: "{{ Runtime }}"
    - name: DefaultArguments
      value: "{{ DefaultArguments }}"
      description: |
        The default arguments for every run of this job, specified as name-value pairs. You can specify arguments here that your own job-execution script consumes, as well as arguments that Glue itself consumes. Job arguments may be logged. Do not pass plaintext secrets as arguments. Retrieve secrets from a Glue Connection, Secrets Manager or other secret management mechanism if you intend to keep them within the Job. For information about how to specify and consume your own Job arguments, see the Calling Glue APIs in Python topic in the developer guide. For information about the arguments you can provide to this field when configuring Spark jobs, see the Special Parameters Used by Glue topic in the developer guide. For information about the arguments you can provide to this field when configuring Ray jobs, see Using job parameters in Ray jobs in the developer guide.
    - name: NonOverridableArguments
      value: "{{ NonOverridableArguments }}"
      description: |
        Arguments for this job that are not overridden when providing job arguments in a job run, specified as name-value pairs.
    - name: Connections
      description: |
        The connections used for this job.
      value:
        Connections:
          - "{{ Connections }}"
    - name: MaxRetries
      value: {{ MaxRetries }}
      description: |
        The maximum number of times to retry this job if it fails.
    - name: AllocatedCapacity
      value: {{ AllocatedCapacity }}
      description: |
        This parameter is deprecated. Use MaxCapacity instead. The number of Glue data processing units (DPUs) to allocate to this Job. You can allocate a minimum of 2 DPUs; the default is 10. A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information, see the Glue pricing page.
    - name: Timeout
      value: {{ Timeout }}
      description: |
        The job timeout in minutes. This is the maximum time that a job run can consume resources before it is terminated and enters TIMEOUT status. Jobs must have timeout values less than 7 days or 10080 minutes. Otherwise, the jobs will throw an exception. When the value is left blank, the timeout is defaulted to 2,880 minutes for Glue version 4.0 and earlier, or 480 minutes for Glue version 5.0 and later. Any existing Glue jobs that had a timeout value greater than 7 days will be defaulted to 7 days. For instance if you have specified a timeout of 20 days for a batch job, it will be stopped on the 7th day. For streaming jobs, if you have set up a maintenance window, it will be restarted during the maintenance window after 7 days.
    - name: MaxCapacity
      value: {{ MaxCapacity }}
      description: |
        For Glue version 1.0 or earlier jobs, using the standard worker type, the number of Glue data processing units (DPUs) that can be allocated when this job runs. A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information, see the Glue pricing page. For Glue version 2.0+ jobs, you cannot specify a Maximum capacity. Instead, you should specify a Worker type and the Number of workers. Do not set MaxCapacity if using WorkerType and NumberOfWorkers. The value that can be allocated for MaxCapacity depends on whether you are running a Python shell job, an Apache Spark ETL job, or an Apache Spark streaming ETL job: When you specify a Python shell job (JobCommand.Name="pythonshell"), you can allocate either 0.0625 or 1 DPU. The default is 0.0625 DPU. When you specify an Apache Spark ETL job (JobCommand.Name="glueetl") or Apache Spark streaming ETL job (JobCommand.Name="gluestreaming"), you can allocate from 2 to 100 DPUs. The default is 10 DPUs. This job type cannot have a fractional DPU allocation.
    - name: SecurityConfiguration
      value: "{{ SecurityConfiguration }}"
      description: |
        The name of the SecurityConfiguration structure to be used with this job.
    - name: Tags
      value: "{{ Tags }}"
      description: |
        The tags to use with this job. You may use tags to limit access to the job. For more information about tags in Glue, see Amazon Web Services Tags in Glue in the developer guide.
    - name: NotificationProperty
      description: |
        Specifies configuration properties of a job notification.
      value:
        NotifyDelayAfter: {{ NotifyDelayAfter }}
    - name: GlueVersion
      value: "{{ GlueVersion }}"
      description: |
        In Spark jobs, GlueVersion determines the versions of Apache Spark and Python that Glue available in a job. The Python version indicates the version supported for jobs of type Spark. Ray jobs should set GlueVersion to 4.0 or greater. However, the versions of Ray, Python and additional libraries available in your Ray job are determined by the Runtime parameter of the Job command. For more information about the available Glue versions and corresponding Spark and Python versions, see Glue version in the developer guide. Jobs that are created without specifying a Glue version default to Glue 5.1.
    - name: NumberOfWorkers
      value: {{ NumberOfWorkers }}
      description: |
        The number of workers of a defined workerType that are allocated when a job runs.
    - name: WorkerType
      value: "{{ WorkerType }}"
      description: |
        The type of predefined worker that is allocated when a job runs. Accepts a value of G.1X, G.2X, G.4X, G.8X or G.025X for Spark jobs. Accepts the value Z.2X for Ray jobs. For the G.1X worker type, each worker maps to 1 DPU (4 vCPUs, 16 GB of memory) with 94GB disk, and provides 1 executor per worker. We recommend this worker type for workloads such as data transforms, joins, and queries, to offers a scalable and cost effective way to run most jobs. For the G.2X worker type, each worker maps to 2 DPU (8 vCPUs, 32 GB of memory) with 138GB disk, and provides 1 executor per worker. We recommend this worker type for workloads such as data transforms, joins, and queries, to offers a scalable and cost effective way to run most jobs. For the G.4X worker type, each worker maps to 4 DPU (16 vCPUs, 64 GB of memory) with 256GB disk, and provides 1 executor per worker. We recommend this worker type for jobs whose workloads contain your most demanding transforms, aggregations, joins, and queries. This worker type is available only for Glue version 3.0 or later Spark ETL jobs in the following Amazon Web Services Regions: US East (Ohio), US East (N. Virginia), US West (N. California), US West (Oregon), Asia Pacific (Mumbai), Asia Pacific (Seoul), Asia Pacific (Singapore), Asia Pacific (Sydney), Asia Pacific (Tokyo), Canada (Central), Europe (Frankfurt), Europe (Ireland), Europe (London), Europe (Spain), Europe (Stockholm), and South America (São Paulo). For the G.8X worker type, each worker maps to 8 DPU (32 vCPUs, 128 GB of memory) with 512GB disk, and provides 1 executor per worker. We recommend this worker type for jobs whose workloads contain your most demanding transforms, aggregations, joins, and queries. This worker type is available only for Glue version 3.0 or later Spark ETL jobs, in the same Amazon Web Services Regions as supported for the G.4X worker type. For the G.025X worker type, each worker maps to 0.25 DPU (2 vCPUs, 4 GB of memory) with 84GB disk, and provides 1 executor per worker. We recommend this worker type for low volume streaming jobs. This worker type is only available for Glue version 3.0 or later streaming jobs. For the Z.2X worker type, each worker maps to 2 M-DPU (8vCPUs, 64 GB of memory) with 128 GB disk, and provides up to 8 Ray workers based on the autoscaler.
      valid_values: ['Standard', 'G.1X', 'G.2X', 'G.025X', 'G.4X', 'G.8X', 'Z.2X']
    - name: CodeGenConfigurationNodes
      value: "{{ CodeGenConfigurationNodes }}"
      description: |
        The representation of a directed acyclic graph on which both the Glue Studio visual component and Glue Studio code generation is based.
    - name: ExecutionClass
      value: "{{ ExecutionClass }}"
      description: |
        Indicates whether the job is run with a standard or flexible execution class. The standard execution-class is ideal for time-sensitive workloads that require fast job startup and dedicated resources. The flexible execution class is appropriate for time-insensitive jobs whose start and completion times may vary. Only jobs with Glue version 3.0 and above and command type glueetl will be allowed to set ExecutionClass to FLEX. The flexible execution class is available for Spark jobs.
      valid_values: ['FLEX', 'STANDARD']
    - name: SourceControlDetails
      description: |
        The details for a source control configuration for a job, allowing synchronization of job artifacts to or from a remote repository.
      value:
        Provider: "{{ Provider }}"
        Repository: "{{ Repository }}"
        Owner: "{{ Owner }}"
        Branch: "{{ Branch }}"
        Folder: "{{ Folder }}"
        LastCommitId: "{{ LastCommitId }}"
        AuthStrategy: "{{ AuthStrategy }}"
        AuthToken: "{{ AuthToken }}"
    - name: MaintenanceWindow
      value: "{{ MaintenanceWindow }}"
      description: |
        This field specifies a day of the week and hour for a maintenance window for streaming jobs. Glue periodically performs maintenance activities. During these maintenance windows, Glue will need to restart your streaming jobs. Glue will restart the job within 3 hours of the specified maintenance window. For instance, if you set up the maintenance window for Monday at 10:00AM GMT, your jobs will be restarted between 10:00AM GMT to 1:00PM GMT.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_job"
    values={[
        { label: 'update_job', value: 'update_job' },
        { label: 'update_job_from_source_control', value: 'update_job_from_source_control' }
    ]}
>
<TabItem value="update_job">

Updates an existing job definition. The previous job definition is completely overwritten by this information.

```sql
UPDATE aws.glue.jobs
SET 
JobName = '{{ JobName }}',
JobUpdate = '{{ JobUpdate }}'
WHERE 
region = '{{ region }}' --required
AND JobName = '{{ JobName }}' --required
AND JobUpdate = '{{ JobUpdate }}' --required
RETURNING
job_name;
```
</TabItem>
<TabItem value="update_job_from_source_control">

Synchronizes a job from the source control repository. This operation takes the job artifacts that are located in the remote repository and updates the Glue internal stores with these artifacts. This API supports optional parameters which take in the repository information.

```sql
UPDATE aws.glue.jobs
SET 
JobName = '{{ JobName }}',
Provider = '{{ Provider }}',
RepositoryName = '{{ RepositoryName }}',
RepositoryOwner = '{{ RepositoryOwner }}',
BranchName = '{{ BranchName }}',
Folder = '{{ Folder }}',
CommitId = '{{ CommitId }}',
AuthStrategy = '{{ AuthStrategy }}',
AuthToken = '{{ AuthToken }}'
WHERE 
region = '{{ region }}' --required
RETURNING
job_name;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_job"
    values={[
        { label: 'delete_job', value: 'delete_job' }
    ]}
>
<TabItem value="delete_job">

Deletes a specified job definition. If the job definition is not found, no exception is thrown.

```sql
DELETE FROM aws.glue.jobs
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_jobs"
    values={[
        { label: 'list_jobs', value: 'list_jobs' },
        { label: 'reset_job_bookmark', value: 'reset_job_bookmark' },
        { label: 'start_job_run', value: 'start_job_run' },
        { label: 'update_source_control_from_job', value: 'update_source_control_from_job' }
    ]}
>
<TabItem value="list_jobs">

Retrieves the names of all job resources in this Amazon Web Services account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names. This operation takes the optional Tags field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved.

```sql
EXEC aws.glue.jobs.list_jobs 
@region='{{ region }}' --required 
@@json=
'{
"NextToken": "{{ NextToken }}", 
"MaxResults": {{ MaxResults }}, 
"Tags": "{{ Tags }}"
}'
;
```
</TabItem>
<TabItem value="reset_job_bookmark">

Resets a bookmark entry. For more information about enabling and using job bookmarks, see: Tracking processed data using job bookmarks Job parameters used by Glue Job structure

```sql
EXEC aws.glue.jobs.reset_job_bookmark 
@region='{{ region }}' --required 
@@json=
'{
"JobName": "{{ JobName }}", 
"RunId": "{{ RunId }}"
}'
;
```
</TabItem>
<TabItem value="start_job_run">

Starts a job run using a job definition.

```sql
EXEC aws.glue.jobs.start_job_run 
@region='{{ region }}' --required 
@@json=
'{
"JobName": "{{ JobName }}", 
"JobRunQueuingEnabled": {{ JobRunQueuingEnabled }}, 
"JobRunId": "{{ JobRunId }}", 
"Arguments": "{{ Arguments }}", 
"AllocatedCapacity": {{ AllocatedCapacity }}, 
"Timeout": {{ Timeout }}, 
"MaxCapacity": {{ MaxCapacity }}, 
"SecurityConfiguration": "{{ SecurityConfiguration }}", 
"NotificationProperty": "{{ NotificationProperty }}", 
"WorkerType": "{{ WorkerType }}", 
"NumberOfWorkers": {{ NumberOfWorkers }}, 
"ExecutionClass": "{{ ExecutionClass }}", 
"ExecutionRoleSessionPolicy": "{{ ExecutionRoleSessionPolicy }}"
}'
;
```
</TabItem>
<TabItem value="update_source_control_from_job">

Synchronizes a job to the source control repository. This operation takes the job artifacts from the Glue internal stores and makes a commit to the remote repository that is configured on the job. This API supports optional parameters which take in the repository information.

```sql
EXEC aws.glue.jobs.update_source_control_from_job 
@region='{{ region }}' --required 
@@json=
'{
"JobName": "{{ JobName }}", 
"Provider": "{{ Provider }}", 
"RepositoryName": "{{ RepositoryName }}", 
"RepositoryOwner": "{{ RepositoryOwner }}", 
"BranchName": "{{ BranchName }}", 
"Folder": "{{ Folder }}", 
"CommitId": "{{ CommitId }}", 
"AuthStrategy": "{{ AuthStrategy }}", 
"AuthToken": "{{ AuthToken }}"
}'
;
```
</TabItem>
</Tabs>
