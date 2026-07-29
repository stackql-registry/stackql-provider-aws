--- 
title: model_invocation_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - model_invocation_jobs
  - bedrock
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

Creates, updates, deletes, gets or lists a <code>model_invocation_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="model_invocation_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock.model_invocation_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_model_invocation_job"
    values={[
        { label: 'get_model_invocation_job', value: 'get_model_invocation_job' },
        { label: 'list_model_invocation_jobs', value: 'list_model_invocation_jobs' }
    ]}
>
<TabItem value="get_model_invocation_job">

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
    <td><CopyableCode code="client_request_token" /></td>
    <td><code>string</code></td>
    <td>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see Ensuring idempotency. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#123;1,256&#125;(-*&#91;a-zA-Z0-9&#93;)&#123;0,256&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the batch inference job ended.</td>
</tr>
<tr>
    <td><CopyableCode code="error_record_count" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of records that failed to process in the batch inference job.</td>
</tr>
<tr>
    <td><CopyableCode code="input_data_config" /></td>
    <td><code>object</code></td>
    <td>Details about the location of the input to the batch inference job.</td>
</tr>
<tr>
    <td><CopyableCode code="job_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the batch inference job. (pattern: &lt;code&gt;(arn:aws(-&#91;^:&#93;+)?:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:model-invocation-job/&#91;a-z0-9&#93;&#123;12&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_expiration_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the batch inference job times or timed out.</td>
</tr>
<tr>
    <td><CopyableCode code="job_name" /></td>
    <td><code>string</code></td>
    <td>The name of the batch inference job. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#123;1,63&#125;(-*&#91;a-zA-Z0-9\+\-\.&#93;)&#123;0,63&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the batch inference job was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>If the batch inference job failed, this field contains a message describing why the job failed.</td>
</tr>
<tr>
    <td><CopyableCode code="model_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the foundation model used for model inference. (pattern: &lt;code&gt;(arn:aws(-&#91;^:&#93;+)?:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:((&#91;0-9&#93;&#123;12&#125;:custom-model/&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;&#123;1&#125;&#91;a-z0-9-:&#93;&#123;1,63&#125;/&#91;a-z0-9&#93;&#123;12&#125;$)|(:foundation-model/(&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;&#123;1&#125;&#91;a-z0-9-&#93;&#123;1,63&#125;(&#91;.&#93;?&#91;a-z0-9-&#93;&#123;1,63&#125;)(&#91;:&#93;&#91;a-z0-9-&#93;&#123;1,63&#125;)&#123;0,2&#125;)|((&#91;0-9a-zA-Z&#93;&#91;_-&#93;?)+)$)|(&#91;0-9&#93;&#123;12&#125;:(inference-profile|application-inference-profile)/&#91;a-zA-Z0-9-:.&#93;+$)))|(&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;&#123;1&#125;&#91;a-z0-9-&#93;&#123;1,63&#125;(&#91;.&#93;?&#91;a-z0-9-&#93;&#123;1,63&#125;)(&#91;:&#93;&#91;a-z0-9-&#93;&#123;1,63&#125;)&#123;0,2&#125;)|((&#91;0-9a-zA-Z&#93;&#91;_-&#93;?)+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="model_invocation_type" /></td>
    <td><code>string</code></td>
    <td>The invocation endpoint for ModelInvocationJob (InvokeModel, Converse)</td>
</tr>
<tr>
    <td><CopyableCode code="output_data_config" /></td>
    <td><code>object</code></td>
    <td>Contains the configuration of the S3 location of the output data.</td>
</tr>
<tr>
    <td><CopyableCode code="processed_record_count" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of records that have been processed in the batch inference job.</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the service role with permissions to carry out and manage batch inference. You can use the console to create a default service role or follow the steps at Create a service role for batch inference. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:iam::(&#91;0-9&#93;&#123;12&#125;)?:role/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the batch inference job. The following statuses are possible: Submitted – This job has been submitted to a queue for validation. Validating – This job is being validated for the requirements described in Format and upload your batch inference data. The criteria include the following: Your IAM service role has access to the Amazon S3 buckets containing your files. Your files are .jsonl files and each individual record is a JSON object in the correct format. Note that validation doesn't check if the modelInput value matches the request body for the model. Your files fulfill the requirements for file size and number of records. For more information, see Quotas for Amazon Bedrock. Scheduled – This job has been validated and is now in a queue. The job will automatically start when it reaches its turn. Expired – This job timed out because it was scheduled but didn't begin before the set timeout duration. Submit a new job request. InProgress – This job has begun. You can start viewing the results in the output S3 location. Completed – This job has successfully completed. View the output files in the output S3 location. PartiallyCompleted – This job has partially completed. Not all of your records could be processed in time. View the output files in the output S3 location. Failed – This job has failed. Check the failure message for any further details. For further assistance, reach out to the Amazon Web Services Support Center. Stopped – This job was stopped by a user. Stopping – This job is being stopped by a user. (Submitted, InProgress, Completed, Failed, Stopping, Stopped, PartiallyCompleted, Expired, Validating, Scheduled)</td>
</tr>
<tr>
    <td><CopyableCode code="submit_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the batch inference job was submitted.</td>
</tr>
<tr>
    <td><CopyableCode code="success_record_count" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of records that were successfully processed in the batch inference job.</td>
</tr>
<tr>
    <td><CopyableCode code="timeout_duration_in_hours" /></td>
    <td><code>integer</code></td>
    <td>The number of hours after which batch inference job was set to time out.</td>
</tr>
<tr>
    <td><CopyableCode code="total_record_count" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total number of records in the batch inference job.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_config" /></td>
    <td><code>object</code></td>
    <td>The configuration of a virtual private cloud (VPC). For more information, see Protect your data using Amazon Virtual Private Cloud and Amazon Web Services PrivateLink.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_model_invocation_jobs">

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
    <td><CopyableCode code="client_request_token" /></td>
    <td><code>string</code></td>
    <td>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see Ensuring idempotency. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#123;1,256&#125;(-*&#91;a-zA-Z0-9&#93;)&#123;0,256&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the batch inference job ended.</td>
</tr>
<tr>
    <td><CopyableCode code="error_record_count" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of records that failed to process in the batch inference job.</td>
</tr>
<tr>
    <td><CopyableCode code="input_data_config" /></td>
    <td><code>object</code></td>
    <td>Details about the location of the input to the batch inference job.</td>
</tr>
<tr>
    <td><CopyableCode code="job_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the batch inference job. (pattern: &lt;code&gt;(arn:aws(-&#91;^:&#93;+)?:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:model-invocation-job/&#91;a-z0-9&#93;&#123;12&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_expiration_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the batch inference job times or timed out.</td>
</tr>
<tr>
    <td><CopyableCode code="job_name" /></td>
    <td><code>string</code></td>
    <td>The name of the batch inference job. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#123;1,63&#125;(-*&#91;a-zA-Z0-9\+\-\.&#93;)&#123;0,63&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the batch inference job was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>If the batch inference job failed, this field contains a message describing why the job failed.</td>
</tr>
<tr>
    <td><CopyableCode code="model_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the foundation model used for model inference. (pattern: &lt;code&gt;(arn:aws(-&#91;^:&#93;+)?:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:((&#91;0-9&#93;&#123;12&#125;:custom-model/&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;&#123;1&#125;&#91;a-z0-9-:&#93;&#123;1,63&#125;/&#91;a-z0-9&#93;&#123;12&#125;$)|(:foundation-model/(&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;&#123;1&#125;&#91;a-z0-9-&#93;&#123;1,63&#125;(&#91;.&#93;?&#91;a-z0-9-&#93;&#123;1,63&#125;)(&#91;:&#93;&#91;a-z0-9-&#93;&#123;1,63&#125;)&#123;0,2&#125;)|((&#91;0-9a-zA-Z&#93;&#91;_-&#93;?)+)$)|(&#91;0-9&#93;&#123;12&#125;:(inference-profile|application-inference-profile)/&#91;a-zA-Z0-9-:.&#93;+$)))|(&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;&#123;1&#125;&#91;a-z0-9-&#93;&#123;1,63&#125;(&#91;.&#93;?&#91;a-z0-9-&#93;&#123;1,63&#125;)(&#91;:&#93;&#91;a-z0-9-&#93;&#123;1,63&#125;)&#123;0,2&#125;)|((&#91;0-9a-zA-Z&#93;&#91;_-&#93;?)+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="model_invocation_type" /></td>
    <td><code>string</code></td>
    <td>The invocation endpoint for ModelInvocationJob (InvokeModel, Converse)</td>
</tr>
<tr>
    <td><CopyableCode code="output_data_config" /></td>
    <td><code>object</code></td>
    <td>Contains the configuration of the S3 location of the output data.</td>
</tr>
<tr>
    <td><CopyableCode code="processed_record_count" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of records that have been processed in the batch inference job.</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the service role with permissions to carry out and manage batch inference. You can use the console to create a default service role or follow the steps at Create a service role for batch inference. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:iam::(&#91;0-9&#93;&#123;12&#125;)?:role/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the batch inference job. The following statuses are possible: Submitted – This job has been submitted to a queue for validation. Validating – This job is being validated for the requirements described in Format and upload your batch inference data. The criteria include the following: Your IAM service role has access to the Amazon S3 buckets containing your files. Your files are .jsonl files and each individual record is a JSON object in the correct format. Note that validation doesn't check if the modelInput value matches the request body for the model. Your files fulfill the requirements for file size and number of records. For more information, see Quotas for Amazon Bedrock. Scheduled – This job has been validated and is now in a queue. The job will automatically start when it reaches its turn. Expired – This job timed out because it was scheduled but didn't begin before the set timeout duration. Submit a new job request. InProgress – This job has begun. You can start viewing the results in the output S3 location. Completed – This job has successfully completed. View the output files in the output S3 location. PartiallyCompleted – This job has partially completed. Not all of your records could be processed in time. View the output files in the output S3 location. Failed – This job has failed. Check the failure message for any further details. For further assistance, reach out to the Amazon Web Services Support Center. Stopped – This job was stopped by a user. Stopping – This job is being stopped by a user. (Submitted, InProgress, Completed, Failed, Stopping, Stopped, PartiallyCompleted, Expired, Validating, Scheduled)</td>
</tr>
<tr>
    <td><CopyableCode code="submit_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the batch inference job was submitted.</td>
</tr>
<tr>
    <td><CopyableCode code="success_record_count" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of records that were successfully processed in the batch inference job.</td>
</tr>
<tr>
    <td><CopyableCode code="timeout_duration_in_hours" /></td>
    <td><code>integer</code></td>
    <td>The number of hours after which the batch inference job was set to time out.</td>
</tr>
<tr>
    <td><CopyableCode code="total_record_count" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total number of records in the batch inference job.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_config" /></td>
    <td><code>object</code></td>
    <td>The configuration of a virtual private cloud (VPC). For more information, see Protect your data using Amazon Virtual Private Cloud and Amazon Web Services PrivateLink.</td>
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
    <td><a href="#get_model_invocation_job"><CopyableCode code="get_model_invocation_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-job_identifier"><code>job_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets details about a batch inference job. For more information, see Monitor batch inference jobs</td>
</tr>
<tr>
    <td><a href="#list_model_invocation_jobs"><CopyableCode code="list_model_invocation_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-submitTimeAfter"><code>submitTimeAfter</code></a>, <a href="#parameter-submitTimeBefore"><code>submitTimeBefore</code></a>, <a href="#parameter-statusEquals"><code>statusEquals</code></a>, <a href="#parameter-nameContains"><code>nameContains</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a></td>
    <td>Lists all batch inference jobs in the account. For more information, see View details about a batch inference job.</td>
</tr>
<tr>
    <td><a href="#create_model_invocation_job"><CopyableCode code="create_model_invocation_job" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-jobName"><code>jobName</code></a>, <a href="#parameter-roleArn"><code>roleArn</code></a>, <a href="#parameter-modelId"><code>modelId</code></a>, <a href="#parameter-inputDataConfig"><code>inputDataConfig</code></a>, <a href="#parameter-outputDataConfig"><code>outputDataConfig</code></a></td>
    <td></td>
    <td>Creates a batch inference job to invoke a model on multiple prompts. Format your data according to Format your inference data and upload it to an Amazon S3 bucket. For more information, see Process multiple prompts with batch inference. The response returns a jobArn that you can use to stop or get details about the job.</td>
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
<tr id="parameter-job_identifier">
    <td><CopyableCode code="job_identifier" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the batch inference job.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return. If there are more results than the number that you specify, a nextToken value is returned. Use the nextToken in a request to return the next batch of results.</td>
</tr>
<tr id="parameter-nameContains">
    <td><CopyableCode code="nameContains" /></td>
    <td><code>string</code></td>
    <td>Specify a string to filter for batch inference jobs whose names contain the string.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If there were more results than the value you specified in the maxResults field in a previous ListModelInvocationJobs request, the response would have returned a nextToken value. To see the next batch of results, send the nextToken value in another request.</td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>An attribute by which to sort the results.</td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>Specifies whether to sort the results by ascending or descending order.</td>
</tr>
<tr id="parameter-statusEquals">
    <td><CopyableCode code="statusEquals" /></td>
    <td><code>string</code></td>
    <td>Specify a status to filter for batch inference jobs whose statuses match the string you specify. The following statuses are possible: Submitted – This job has been submitted to a queue for validation. Validating – This job is being validated for the requirements described in Format and upload your batch inference data. The criteria include the following: Your IAM service role has access to the Amazon S3 buckets containing your files. Your files are .jsonl files and each individual record is a JSON object in the correct format. Note that validation doesn't check if the modelInput value matches the request body for the model. Your files fulfill the requirements for file size and number of records. For more information, see Quotas for Amazon Bedrock. Scheduled – This job has been validated and is now in a queue. The job will automatically start when it reaches its turn. Expired – This job timed out because it was scheduled but didn't begin before the set timeout duration. Submit a new job request. InProgress – This job has begun. You can start viewing the results in the output S3 location. Completed – This job has successfully completed. View the output files in the output S3 location. PartiallyCompleted – This job has partially completed. Not all of your records could be processed in time. View the output files in the output S3 location. Failed – This job has failed. Check the failure message for any further details. For further assistance, reach out to the Amazon Web Services Support Center. Stopped – This job was stopped by a user. Stopping – This job is being stopped by a user.</td>
</tr>
<tr id="parameter-submitTimeAfter">
    <td><CopyableCode code="submitTimeAfter" /></td>
    <td><code>string (date-time)</code></td>
    <td>Specify a time to filter for batch inference jobs that were submitted after the time you specify.</td>
</tr>
<tr id="parameter-submitTimeBefore">
    <td><CopyableCode code="submitTimeBefore" /></td>
    <td><code>string (date-time)</code></td>
    <td>Specify a time to filter for batch inference jobs that were submitted before the time you specify.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_model_invocation_job"
    values={[
        { label: 'get_model_invocation_job', value: 'get_model_invocation_job' },
        { label: 'list_model_invocation_jobs', value: 'list_model_invocation_jobs' }
    ]}
>
<TabItem value="get_model_invocation_job">

Gets details about a batch inference job. For more information, see Monitor batch inference jobs

```sql
SELECT
client_request_token,
end_time,
error_record_count,
input_data_config,
job_arn,
job_expiration_time,
job_name,
last_modified_time,
message,
model_id,
model_invocation_type,
output_data_config,
processed_record_count,
role_arn,
status,
submit_time,
success_record_count,
timeout_duration_in_hours,
total_record_count,
vpc_config
FROM aws.bedrock.model_invocation_jobs
WHERE job_identifier = '{{ job_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_model_invocation_jobs">

Lists all batch inference jobs in the account. For more information, see View details about a batch inference job.

```sql
SELECT
client_request_token,
end_time,
error_record_count,
input_data_config,
job_arn,
job_expiration_time,
job_name,
last_modified_time,
message,
model_id,
model_invocation_type,
output_data_config,
processed_record_count,
role_arn,
status,
submit_time,
success_record_count,
timeout_duration_in_hours,
total_record_count,
vpc_config
FROM aws.bedrock.model_invocation_jobs
WHERE region = '{{ region }}' -- required
AND submitTimeAfter = '{{ submitTimeAfter }}'
AND submitTimeBefore = '{{ submitTimeBefore }}'
AND statusEquals = '{{ statusEquals }}'
AND nameContains = '{{ nameContains }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_model_invocation_job"
    values={[
        { label: 'create_model_invocation_job', value: 'create_model_invocation_job' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_model_invocation_job">

Creates a batch inference job to invoke a model on multiple prompts. Format your data according to Format your inference data and upload it to an Amazon S3 bucket. For more information, see Process multiple prompts with batch inference. The response returns a jobArn that you can use to stop or get details about the job.

```sql
INSERT INTO aws.bedrock.model_invocation_jobs (
jobName,
roleArn,
clientRequestToken,
modelId,
inputDataConfig,
outputDataConfig,
vpcConfig,
timeoutDurationInHours,
tags,
modelInvocationType,
region
)
SELECT 
'{{ jobName }}' /* required */,
'{{ roleArn }}' /* required */,
'{{ clientRequestToken }}',
'{{ modelId }}' /* required */,
'{{ inputDataConfig }}' /* required */,
'{{ outputDataConfig }}' /* required */,
'{{ vpcConfig }}',
{{ timeoutDurationInHours }},
'{{ tags }}',
'{{ modelInvocationType }}',
'{{ region }}'
RETURNING
job_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: model_invocation_jobs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the model_invocation_jobs resource.
    - name: jobName
      value: "{{ jobName }}"
    - name: roleArn
      value: "{{ roleArn }}"
    - name: clientRequestToken
      value: "{{ clientRequestToken }}"
    - name: modelId
      value: "{{ modelId }}"
    - name: inputDataConfig
      description: |
        Details about the location of the input to the batch inference job.
      value:
        s3InputDataConfig:
          s3InputFormat: "{{ s3InputFormat }}"
          s3Uri: "{{ s3Uri }}"
          s3BucketOwner: "{{ s3BucketOwner }}"
    - name: outputDataConfig
      description: |
        Contains the configuration of the S3 location of the output data.
      value:
        s3OutputDataConfig:
          s3Uri: "{{ s3Uri }}"
          s3EncryptionKeyId: "{{ s3EncryptionKeyId }}"
          s3BucketOwner: "{{ s3BucketOwner }}"
    - name: vpcConfig
      description: |
        The configuration of a virtual private cloud (VPC). For more information, see Protect your data using Amazon Virtual Private Cloud and Amazon Web Services PrivateLink.
      value:
        subnetIds:
          - "{{ subnetIds }}"
        securityGroupIds:
          - "{{ securityGroupIds }}"
    - name: timeoutDurationInHours
      value: {{ timeoutDurationInHours }}
    - name: tags
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: modelInvocationType
      value: "{{ modelInvocationType }}"
      valid_values: ['InvokeModel', 'Converse']
`}</CodeBlock>

</TabItem>
</Tabs>
