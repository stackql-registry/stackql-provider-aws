--- 
title: job_runs
hide_title: false
hide_table_of_contents: false
keywords:
  - job_runs
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

Creates, updates, deletes, gets or lists a <code>job_runs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="job_runs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.job_runs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_job_run"
    values={[
        { label: 'get_job_run', value: 'get_job_run' },
        { label: 'get_job_runs', value: 'get_job_runs' }
    ]}
>
<TabItem value="get_job_run">

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
    <td>This field is deprecated. Use MaxCapacity instead. The number of Glue data processing units (DPUs) allocated to this JobRun. From 2 to 100 DPUs can be allocated; the default is 10. A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information, see the Glue pricing page.</td>
</tr>
<tr>
    <td><CopyableCode code="arguments" /></td>
    <td><code>object</code></td>
    <td>The job arguments associated with this run. For this job run, they replace the default arguments set in the job definition itself. You can specify arguments here that your own job-execution script consumes, as well as arguments that Glue itself consumes. Job arguments may be logged. Do not pass plaintext secrets as arguments. Retrieve secrets from a Glue Connection, Secrets Manager or other secret management mechanism if you intend to keep them within the Job. For information about how to specify and consume your own Job arguments, see the Calling Glue APIs in Python topic in the developer guide. For information about the arguments you can provide to this field when configuring Spark jobs, see the Special Parameters Used by Glue topic in the developer guide. For information about the arguments you can provide to this field when configuring Ray jobs, see Using job parameters in Ray jobs in the developer guide.</td>
</tr>
<tr>
    <td><CopyableCode code="attempt" /></td>
    <td><code>integer</code></td>
    <td>The number of the attempt to run this job.</td>
</tr>
<tr>
    <td><CopyableCode code="completed_on" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that this job run completed.</td>
</tr>
<tr>
    <td><CopyableCode code="dpu_seconds" /></td>
    <td><code>number (double)</code></td>
    <td>This field can be set for either job runs with execution class FLEX or when Auto Scaling is enabled, and represents the total time each executor ran during the lifecycle of a job run in seconds, multiplied by a DPU factor (1 for G.1X, 2 for G.2X, or 0.25 for G.025X workers). This value may be different than the executionEngineRuntime * MaxCapacity as in the case of Auto Scaling jobs, as the number of executors running at a given time may be less than the MaxCapacity. Therefore, it is possible that the value of DPUSeconds is less than executionEngineRuntime * MaxCapacity.</td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>An error message associated with this job run.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_class" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the job is run with a standard or flexible execution class. The standard execution-class is ideal for time-sensitive workloads that require fast job startup and dedicated resources. The flexible execution class is appropriate for time-insensitive jobs whose start and completion times may vary. Only jobs with Glue version 3.0 and above and command type glueetl will be allowed to set ExecutionClass to FLEX. The flexible execution class is available for Spark jobs. (FLEX, STANDARD)</td>
</tr>
<tr>
    <td><CopyableCode code="execution_role_session_policy" /></td>
    <td><code>string</code></td>
    <td>This inline session policy to the StartJobRun API allows you to dynamically restrict the permissions of the specified execution role for the scope of the job, without requiring the creation of additional IAM roles.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_time" /></td>
    <td><code>integer</code></td>
    <td>The amount of time (in seconds) that the job run consumed resources.</td>
</tr>
<tr>
    <td><CopyableCode code="glue_version" /></td>
    <td><code>string</code></td>
    <td>In Spark jobs, GlueVersion determines the versions of Apache Spark and Python that Glue available in a job. The Python version indicates the version supported for jobs of type Spark. Ray jobs should set GlueVersion to 4.0 or greater. However, the versions of Ray, Python and additional libraries available in your Ray job are determined by the Runtime parameter of the Job command. For more information about the available Glue versions and corresponding Spark and Python versions, see Glue version in the developer guide. Jobs that are created without specifying a Glue version default to Glue 5.1. (pattern: &lt;code&gt;^(\w+\.)+\w+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of this job run. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_mode" /></td>
    <td><code>string</code></td>
    <td>A mode that describes how a job was created. Valid values are: SCRIPT - The job was created using the Glue Studio script editor. VISUAL - The job was created using the Glue Studio visual editor. NOTEBOOK - The job was created using an interactive sessions notebook. When the JobMode field is missing or null, SCRIPT is assigned as the default value. (SCRIPT, VISUAL, NOTEBOOK)</td>
</tr>
<tr>
    <td><CopyableCode code="job_name" /></td>
    <td><code>string</code></td>
    <td>The name of the job definition being used in this run. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_run_queuing_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether job run queuing is enabled for the job run. A value of true means job run queuing is enabled for the job run. If false or not populated, the job run will not be considered for queueing.</td>
</tr>
<tr>
    <td><CopyableCode code="job_run_state" /></td>
    <td><code>string</code></td>
    <td>The current state of the job run. For more information about the statuses of jobs that have terminated abnormally, see Glue Job Run Statuses. (STARTING, RUNNING, STOPPING, STOPPED, SUCCEEDED, FAILED, TIMEOUT, ERROR, WAITING, EXPIRED)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_on" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time that this job run was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="log_group_name" /></td>
    <td><code>string</code></td>
    <td>The name of the log group for secure logging that can be server-side encrypted in Amazon CloudWatch using KMS. This name can be /aws-glue/jobs/, in which case the default encryption is NONE. If you add a role name and SecurityConfiguration name (in other words, /aws-glue/jobs-yourRoleName-yourSecurityConfigurationName/), then that security configuration is used to encrypt the log group.</td>
</tr>
<tr>
    <td><CopyableCode code="maintenance_window" /></td>
    <td><code>string</code></td>
    <td>This field specifies a day of the week and hour for a maintenance window for streaming jobs. Glue periodically performs maintenance activities. During these maintenance windows, Glue will need to restart your streaming jobs. Glue will restart the job within 3 hours of the specified maintenance window. For instance, if you set up the maintenance window for Monday at 10:00AM GMT, your jobs will be restarted between 10:00AM GMT to 1:00PM GMT. (pattern: &lt;code&gt;^(Sun|Mon|Tue|Wed|Thu|Fri|Sat):(&#91;01&#93;?&#91;0-9&#93;|2&#91;0-3&#93;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="max_capacity" /></td>
    <td><code>number (double)</code></td>
    <td>For Glue version 1.0 or earlier jobs, using the standard worker type, the number of Glue data processing units (DPUs) that can be allocated when this job runs. A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information, see the Glue pricing page. For Glue version 2.0+ jobs, you cannot specify a Maximum capacity. Instead, you should specify a Worker type and the Number of workers. Do not set MaxCapacity if using WorkerType and NumberOfWorkers. The value that can be allocated for MaxCapacity depends on whether you are running a Python shell job, an Apache Spark ETL job, or an Apache Spark streaming ETL job: When you specify a Python shell job (JobCommand.Name="pythonshell"), you can allocate either 0.0625 or 1 DPU. The default is 0.0625 DPU. When you specify an Apache Spark ETL job (JobCommand.Name="glueetl") or Apache Spark streaming ETL job (JobCommand.Name="gluestreaming"), you can allocate from 2 to 100 DPUs. The default is 10 DPUs. This job type cannot have a fractional DPU allocation.</td>
</tr>
<tr>
    <td><CopyableCode code="notification_property" /></td>
    <td><code>object</code></td>
    <td>Specifies configuration properties of a job run notification.</td>
</tr>
<tr>
    <td><CopyableCode code="number_of_workers" /></td>
    <td><code>integer</code></td>
    <td>The number of workers of a defined workerType that are allocated when a job runs.</td>
</tr>
<tr>
    <td><CopyableCode code="predecessor_runs" /></td>
    <td><code>array</code></td>
    <td>A list of predecessors to this job run.</td>
</tr>
<tr>
    <td><CopyableCode code="previous_run_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the previous run of this job. For example, the JobRunId specified in the StartJobRun action. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="profile_name" /></td>
    <td><code>string</code></td>
    <td>The name of an Glue usage profile associated with the job run. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="security_configuration" /></td>
    <td><code>string</code></td>
    <td>The name of the SecurityConfiguration structure to be used with this job run. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="started_on" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time at which this job run was started.</td>
</tr>
<tr>
    <td><CopyableCode code="state_detail" /></td>
    <td><code>string</code></td>
    <td>This field holds details that pertain to the state of a job run. The field is nullable. For example, when a job run is in a WAITING state as a result of job run queuing, the field has the reason why the job run is in that state.</td>
</tr>
<tr>
    <td><CopyableCode code="timeout" /></td>
    <td><code>integer</code></td>
    <td>The JobRun timeout in minutes. This is the maximum time that a job run can consume resources before it is terminated and enters TIMEOUT status. This value overrides the timeout value set in the parent job. Jobs must have timeout values less than 7 days or 10080 minutes. Otherwise, the jobs will throw an exception. When the value is left blank, the timeout is defaulted to 2,880 minutes for Glue version 4.0 and earlier, or 480 minutes for Glue version 5.0 and later. Any existing Glue jobs that had a timeout value greater than 7 days will be defaulted to 7 days. For instance if you have specified a timeout of 20 days for a batch job, it will be stopped on the 7th day. For streaming jobs, if you have set up a maintenance window, it will be restarted during the maintenance window after 7 days.</td>
</tr>
<tr>
    <td><CopyableCode code="trigger_name" /></td>
    <td><code>string</code></td>
    <td>The name of the trigger that started this job run. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="worker_type" /></td>
    <td><code>string</code></td>
    <td>The type of predefined worker that is allocated when a job runs. Accepts a value of G.1X, G.2X, G.4X, G.8X or G.025X for Spark jobs. Accepts the value Z.2X for Ray jobs. For the G.1X worker type, each worker maps to 1 DPU (4 vCPUs, 16 GB of memory) with 94GB disk, and provides 1 executor per worker. We recommend this worker type for workloads such as data transforms, joins, and queries, to offers a scalable and cost effective way to run most jobs. For the G.2X worker type, each worker maps to 2 DPU (8 vCPUs, 32 GB of memory) with 138GB disk, and provides 1 executor per worker. We recommend this worker type for workloads such as data transforms, joins, and queries, to offers a scalable and cost effective way to run most jobs. For the G.4X worker type, each worker maps to 4 DPU (16 vCPUs, 64 GB of memory) with 256GB disk, and provides 1 executor per worker. We recommend this worker type for jobs whose workloads contain your most demanding transforms, aggregations, joins, and queries. This worker type is available only for Glue version 3.0 or later Spark ETL jobs in the following Amazon Web Services Regions: US East (Ohio), US East (N. Virginia), US West (Oregon), Asia Pacific (Singapore), Asia Pacific (Sydney), Asia Pacific (Tokyo), Canada (Central), Europe (Frankfurt), Europe (Ireland), and Europe (Stockholm). For the G.8X worker type, each worker maps to 8 DPU (32 vCPUs, 128 GB of memory) with 512GB disk, and provides 1 executor per worker. We recommend this worker type for jobs whose workloads contain your most demanding transforms, aggregations, joins, and queries. This worker type is available only for Glue version 3.0 or later Spark ETL jobs, in the same Amazon Web Services Regions as supported for the G.4X worker type. For the G.025X worker type, each worker maps to 0.25 DPU (2 vCPUs, 4 GB of memory) with 84GB disk, and provides 1 executor per worker. We recommend this worker type for low volume streaming jobs. This worker type is only available for Glue version 3.0 or later streaming jobs. For the Z.2X worker type, each worker maps to 2 M-DPU (8vCPUs, 64 GB of memory) with 128 GB disk, and provides up to 8 Ray workers based on the autoscaler. (Standard, G.1X, G.2X, G.025X, G.4X, G.8X, Z.2X)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_job_runs">

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
    <td>This field is deprecated. Use MaxCapacity instead. The number of Glue data processing units (DPUs) allocated to this JobRun. From 2 to 100 DPUs can be allocated; the default is 10. A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information, see the Glue pricing page.</td>
</tr>
<tr>
    <td><CopyableCode code="arguments" /></td>
    <td><code>object</code></td>
    <td>The job arguments associated with this run. For this job run, they replace the default arguments set in the job definition itself. You can specify arguments here that your own job-execution script consumes, as well as arguments that Glue itself consumes. Job arguments may be logged. Do not pass plaintext secrets as arguments. Retrieve secrets from a Glue Connection, Secrets Manager or other secret management mechanism if you intend to keep them within the Job. For information about how to specify and consume your own Job arguments, see the Calling Glue APIs in Python topic in the developer guide. For information about the arguments you can provide to this field when configuring Spark jobs, see the Special Parameters Used by Glue topic in the developer guide. For information about the arguments you can provide to this field when configuring Ray jobs, see Using job parameters in Ray jobs in the developer guide.</td>
</tr>
<tr>
    <td><CopyableCode code="attempt" /></td>
    <td><code>integer</code></td>
    <td>The number of the attempt to run this job.</td>
</tr>
<tr>
    <td><CopyableCode code="completed_on" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that this job run completed.</td>
</tr>
<tr>
    <td><CopyableCode code="dpu_seconds" /></td>
    <td><code>number (double)</code></td>
    <td>This field can be set for either job runs with execution class FLEX or when Auto Scaling is enabled, and represents the total time each executor ran during the lifecycle of a job run in seconds, multiplied by a DPU factor (1 for G.1X, 2 for G.2X, or 0.25 for G.025X workers). This value may be different than the executionEngineRuntime * MaxCapacity as in the case of Auto Scaling jobs, as the number of executors running at a given time may be less than the MaxCapacity. Therefore, it is possible that the value of DPUSeconds is less than executionEngineRuntime * MaxCapacity.</td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>An error message associated with this job run.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_class" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the job is run with a standard or flexible execution class. The standard execution-class is ideal for time-sensitive workloads that require fast job startup and dedicated resources. The flexible execution class is appropriate for time-insensitive jobs whose start and completion times may vary. Only jobs with Glue version 3.0 and above and command type glueetl will be allowed to set ExecutionClass to FLEX. The flexible execution class is available for Spark jobs. (FLEX, STANDARD)</td>
</tr>
<tr>
    <td><CopyableCode code="execution_role_session_policy" /></td>
    <td><code>string</code></td>
    <td>This inline session policy to the StartJobRun API allows you to dynamically restrict the permissions of the specified execution role for the scope of the job, without requiring the creation of additional IAM roles.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_time" /></td>
    <td><code>integer</code></td>
    <td>The amount of time (in seconds) that the job run consumed resources.</td>
</tr>
<tr>
    <td><CopyableCode code="glue_version" /></td>
    <td><code>string</code></td>
    <td>In Spark jobs, GlueVersion determines the versions of Apache Spark and Python that Glue available in a job. The Python version indicates the version supported for jobs of type Spark. Ray jobs should set GlueVersion to 4.0 or greater. However, the versions of Ray, Python and additional libraries available in your Ray job are determined by the Runtime parameter of the Job command. For more information about the available Glue versions and corresponding Spark and Python versions, see Glue version in the developer guide. Jobs that are created without specifying a Glue version default to Glue 5.1. (pattern: &lt;code&gt;^(\w+\.)+\w+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of this job run. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_mode" /></td>
    <td><code>string</code></td>
    <td>A mode that describes how a job was created. Valid values are: SCRIPT - The job was created using the Glue Studio script editor. VISUAL - The job was created using the Glue Studio visual editor. NOTEBOOK - The job was created using an interactive sessions notebook. When the JobMode field is missing or null, SCRIPT is assigned as the default value. (SCRIPT, VISUAL, NOTEBOOK)</td>
</tr>
<tr>
    <td><CopyableCode code="job_name" /></td>
    <td><code>string</code></td>
    <td>The name of the job definition being used in this run. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_run_queuing_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether job run queuing is enabled for the job run. A value of true means job run queuing is enabled for the job run. If false or not populated, the job run will not be considered for queueing.</td>
</tr>
<tr>
    <td><CopyableCode code="job_run_state" /></td>
    <td><code>string</code></td>
    <td>The current state of the job run. For more information about the statuses of jobs that have terminated abnormally, see Glue Job Run Statuses. (STARTING, RUNNING, STOPPING, STOPPED, SUCCEEDED, FAILED, TIMEOUT, ERROR, WAITING, EXPIRED)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_on" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time that this job run was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="log_group_name" /></td>
    <td><code>string</code></td>
    <td>The name of the log group for secure logging that can be server-side encrypted in Amazon CloudWatch using KMS. This name can be /aws-glue/jobs/, in which case the default encryption is NONE. If you add a role name and SecurityConfiguration name (in other words, /aws-glue/jobs-yourRoleName-yourSecurityConfigurationName/), then that security configuration is used to encrypt the log group.</td>
</tr>
<tr>
    <td><CopyableCode code="maintenance_window" /></td>
    <td><code>string</code></td>
    <td>This field specifies a day of the week and hour for a maintenance window for streaming jobs. Glue periodically performs maintenance activities. During these maintenance windows, Glue will need to restart your streaming jobs. Glue will restart the job within 3 hours of the specified maintenance window. For instance, if you set up the maintenance window for Monday at 10:00AM GMT, your jobs will be restarted between 10:00AM GMT to 1:00PM GMT. (pattern: &lt;code&gt;^(Sun|Mon|Tue|Wed|Thu|Fri|Sat):(&#91;01&#93;?&#91;0-9&#93;|2&#91;0-3&#93;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="max_capacity" /></td>
    <td><code>number (double)</code></td>
    <td>For Glue version 1.0 or earlier jobs, using the standard worker type, the number of Glue data processing units (DPUs) that can be allocated when this job runs. A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information, see the Glue pricing page. For Glue version 2.0+ jobs, you cannot specify a Maximum capacity. Instead, you should specify a Worker type and the Number of workers. Do not set MaxCapacity if using WorkerType and NumberOfWorkers. The value that can be allocated for MaxCapacity depends on whether you are running a Python shell job, an Apache Spark ETL job, or an Apache Spark streaming ETL job: When you specify a Python shell job (JobCommand.Name="pythonshell"), you can allocate either 0.0625 or 1 DPU. The default is 0.0625 DPU. When you specify an Apache Spark ETL job (JobCommand.Name="glueetl") or Apache Spark streaming ETL job (JobCommand.Name="gluestreaming"), you can allocate from 2 to 100 DPUs. The default is 10 DPUs. This job type cannot have a fractional DPU allocation.</td>
</tr>
<tr>
    <td><CopyableCode code="notification_property" /></td>
    <td><code>object</code></td>
    <td>Specifies configuration properties of a job run notification.</td>
</tr>
<tr>
    <td><CopyableCode code="number_of_workers" /></td>
    <td><code>integer</code></td>
    <td>The number of workers of a defined workerType that are allocated when a job runs.</td>
</tr>
<tr>
    <td><CopyableCode code="predecessor_runs" /></td>
    <td><code>array</code></td>
    <td>A list of predecessors to this job run.</td>
</tr>
<tr>
    <td><CopyableCode code="previous_run_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the previous run of this job. For example, the JobRunId specified in the StartJobRun action. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="profile_name" /></td>
    <td><code>string</code></td>
    <td>The name of an Glue usage profile associated with the job run. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="security_configuration" /></td>
    <td><code>string</code></td>
    <td>The name of the SecurityConfiguration structure to be used with this job run. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="started_on" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time at which this job run was started.</td>
</tr>
<tr>
    <td><CopyableCode code="state_detail" /></td>
    <td><code>string</code></td>
    <td>This field holds details that pertain to the state of a job run. The field is nullable. For example, when a job run is in a WAITING state as a result of job run queuing, the field has the reason why the job run is in that state.</td>
</tr>
<tr>
    <td><CopyableCode code="timeout" /></td>
    <td><code>integer</code></td>
    <td>The JobRun timeout in minutes. This is the maximum time that a job run can consume resources before it is terminated and enters TIMEOUT status. This value overrides the timeout value set in the parent job. Jobs must have timeout values less than 7 days or 10080 minutes. Otherwise, the jobs will throw an exception. When the value is left blank, the timeout is defaulted to 2,880 minutes for Glue version 4.0 and earlier, or 480 minutes for Glue version 5.0 and later. Any existing Glue jobs that had a timeout value greater than 7 days will be defaulted to 7 days. For instance if you have specified a timeout of 20 days for a batch job, it will be stopped on the 7th day. For streaming jobs, if you have set up a maintenance window, it will be restarted during the maintenance window after 7 days.</td>
</tr>
<tr>
    <td><CopyableCode code="trigger_name" /></td>
    <td><code>string</code></td>
    <td>The name of the trigger that started this job run. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="worker_type" /></td>
    <td><code>string</code></td>
    <td>The type of predefined worker that is allocated when a job runs. Accepts a value of G.1X, G.2X, G.4X, G.8X or G.025X for Spark jobs. Accepts the value Z.2X for Ray jobs. For the G.1X worker type, each worker maps to 1 DPU (4 vCPUs, 16 GB of memory) with 94GB disk, and provides 1 executor per worker. We recommend this worker type for workloads such as data transforms, joins, and queries, to offers a scalable and cost effective way to run most jobs. For the G.2X worker type, each worker maps to 2 DPU (8 vCPUs, 32 GB of memory) with 138GB disk, and provides 1 executor per worker. We recommend this worker type for workloads such as data transforms, joins, and queries, to offers a scalable and cost effective way to run most jobs. For the G.4X worker type, each worker maps to 4 DPU (16 vCPUs, 64 GB of memory) with 256GB disk, and provides 1 executor per worker. We recommend this worker type for jobs whose workloads contain your most demanding transforms, aggregations, joins, and queries. This worker type is available only for Glue version 3.0 or later Spark ETL jobs in the following Amazon Web Services Regions: US East (Ohio), US East (N. Virginia), US West (Oregon), Asia Pacific (Singapore), Asia Pacific (Sydney), Asia Pacific (Tokyo), Canada (Central), Europe (Frankfurt), Europe (Ireland), and Europe (Stockholm). For the G.8X worker type, each worker maps to 8 DPU (32 vCPUs, 128 GB of memory) with 512GB disk, and provides 1 executor per worker. We recommend this worker type for jobs whose workloads contain your most demanding transforms, aggregations, joins, and queries. This worker type is available only for Glue version 3.0 or later Spark ETL jobs, in the same Amazon Web Services Regions as supported for the G.4X worker type. For the G.025X worker type, each worker maps to 0.25 DPU (2 vCPUs, 4 GB of memory) with 84GB disk, and provides 1 executor per worker. We recommend this worker type for low volume streaming jobs. This worker type is only available for Glue version 3.0 or later streaming jobs. For the Z.2X worker type, each worker maps to 2 M-DPU (8vCPUs, 64 GB of memory) with 128 GB disk, and provides up to 8 Ray workers based on the autoscaler. (Standard, G.1X, G.2X, G.025X, G.4X, G.8X, Z.2X)</td>
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
    <td><a href="#get_job_run"><CopyableCode code="get_job_run" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the metadata for a given job run. Job run history is accessible for 365 days for your workflow and job run.</td>
</tr>
<tr>
    <td><a href="#get_job_runs"><CopyableCode code="get_job_runs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves metadata for all runs of a given job definition. GetJobRuns returns the job runs in chronological order, with the newest jobs returned first.</td>
</tr>
<tr>
    <td><a href="#batch_stop_job_run"><CopyableCode code="batch_stop_job_run" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-JobName"><code>JobName</code></a>, <a href="#parameter-JobRunIds"><code>JobRunIds</code></a></td>
    <td></td>
    <td>Stops one or more job runs for a specified job definition.</td>
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
    defaultValue="get_job_run"
    values={[
        { label: 'get_job_run', value: 'get_job_run' },
        { label: 'get_job_runs', value: 'get_job_runs' }
    ]}
>
<TabItem value="get_job_run">

Retrieves the metadata for a given job run. Job run history is accessible for 365 days for your workflow and job run.

```sql
SELECT
allocated_capacity,
arguments,
attempt,
completed_on,
dpu_seconds,
error_message,
execution_class,
execution_role_session_policy,
execution_time,
glue_version,
id,
job_mode,
job_name,
job_run_queuing_enabled,
job_run_state,
last_modified_on,
log_group_name,
maintenance_window,
max_capacity,
notification_property,
number_of_workers,
predecessor_runs,
previous_run_id,
profile_name,
security_configuration,
started_on,
state_detail,
timeout,
trigger_name,
worker_type
FROM aws.glue.job_runs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_job_runs">

Retrieves metadata for all runs of a given job definition. GetJobRuns returns the job runs in chronological order, with the newest jobs returned first.

```sql
SELECT
allocated_capacity,
arguments,
attempt,
completed_on,
dpu_seconds,
error_message,
execution_class,
execution_role_session_policy,
execution_time,
glue_version,
id,
job_mode,
job_name,
job_run_queuing_enabled,
job_run_state,
last_modified_on,
log_group_name,
maintenance_window,
max_capacity,
notification_property,
number_of_workers,
predecessor_runs,
previous_run_id,
profile_name,
security_configuration,
started_on,
state_detail,
timeout,
trigger_name,
worker_type
FROM aws.glue.job_runs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_stop_job_run"
    values={[
        { label: 'batch_stop_job_run', value: 'batch_stop_job_run' }
    ]}
>
<TabItem value="batch_stop_job_run">

Stops one or more job runs for a specified job definition.

```sql
EXEC aws.glue.job_runs.batch_stop_job_run 
@region='{{ region }}' --required 
@@json=
'{
"JobName": "{{ JobName }}", 
"JobRunIds": "{{ JobRunIds }}"
}'
;
```
</TabItem>
</Tabs>
