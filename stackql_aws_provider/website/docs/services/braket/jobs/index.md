--- 
title: jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - jobs
  - braket
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.braket.jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_job"
    values={[
        { label: 'get_job', value: 'get_job' },
        { label: 'search_jobs', value: 'search_jobs' }
    ]}
>
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
    <td><CopyableCode code="algorithmSpecification" /></td>
    <td><code>object</code></td>
    <td>Defines the Amazon Braket hybrid job to be created. Specifies the container image the job uses and the paths to the Python scripts used for entry and training.</td>
</tr>
<tr>
    <td><CopyableCode code="associations" /></td>
    <td><code>array</code></td>
    <td>The list of Amazon Braket resources associated with the hybrid job.</td>
</tr>
<tr>
    <td><CopyableCode code="billableDuration" /></td>
    <td><code>integer</code></td>
    <td>The billable time for which the Amazon Braket hybrid job used to complete.</td>
</tr>
<tr>
    <td><CopyableCode code="checkpointConfig" /></td>
    <td><code>object</code></td>
    <td>Contains information about the output locations for hybrid job checkpoint data.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the Amazon Braket hybrid job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deviceConfig" /></td>
    <td><code>object</code></td>
    <td>Configures the primary device used to create and run an Amazon Braket hybrid job.</td>
</tr>
<tr>
    <td><CopyableCode code="endedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the Amazon Braket hybrid job ended.</td>
</tr>
<tr>
    <td><CopyableCode code="events" /></td>
    <td><code>array</code></td>
    <td>Details about the time and type of events occurred related to the Amazon Braket hybrid job.</td>
</tr>
<tr>
    <td><CopyableCode code="failureReason" /></td>
    <td><code>string</code></td>
    <td>A description of the reason why an Amazon Braket hybrid job failed, if it failed.</td>
</tr>
<tr>
    <td><CopyableCode code="hyperParameters" /></td>
    <td><code>object</code></td>
    <td>Algorithm-specific parameters used by an Amazon Braket hybrid job that influence the quality of the traiing job. The values are set with a map of JSON key:value pairs, where the key is the name of the hyperparameter and the value is the value of th hyperparameter.</td>
</tr>
<tr>
    <td><CopyableCode code="inputDataConfig" /></td>
    <td><code>array</code></td>
    <td>A list of parameters that specify the name and type of input data and where it is located.</td>
</tr>
<tr>
    <td><CopyableCode code="instanceConfig" /></td>
    <td><code>object</code></td>
    <td>Configures the resource instances to use while running the Amazon Braket hybrid job on Amazon Braket.</td>
</tr>
<tr>
    <td><CopyableCode code="jobArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the Amazon Braket hybrid job. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:braket:&#91;a-z0-9\-&#93;+:&#91;0-9&#93;&#123;12&#125;:job/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="jobName" /></td>
    <td><code>string</code></td>
    <td>The name of the Amazon Braket hybrid job. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,50&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="outputDataConfig" /></td>
    <td><code>object</code></td>
    <td>Specifies the path to the S3 location where you want to store hybrid job artifacts and the encryption key used to store them.</td>
</tr>
<tr>
    <td><CopyableCode code="queueInfo" /></td>
    <td><code>object</code></td>
    <td>Queue information for the requested hybrid job. Only returned if QueueInfo is specified in the additionalAttributeNames" field in the GetJob API request.</td>
</tr>
<tr>
    <td><CopyableCode code="roleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of an IAM role that Amazon Braket can assume to perform tasks on behalf of a user. It can access user resources, run an Amazon Braket job container on behalf of user, and output results and other hybrid job details to the s3 buckets of a user. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:iam::\d&#123;12&#125;:role/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="startedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the Amazon Braket hybrid job was started.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the Amazon Braket hybrid job. (QUEUED, RUNNING, COMPLETED, FAILED, CANCELLING, CANCELLED)</td>
</tr>
<tr>
    <td><CopyableCode code="stoppingCondition" /></td>
    <td><code>object</code></td>
    <td>Specifies limits for how long an Amazon Braket hybrid job can run.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags associated with this hybrid job.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_jobs">

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
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the Amazon Braket hybrid job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="device" /></td>
    <td><code>string</code></td>
    <td>The primary device used by an Amazon Braket hybrid job.</td>
</tr>
<tr>
    <td><CopyableCode code="endedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the Amazon Braket hybrid job ended.</td>
</tr>
<tr>
    <td><CopyableCode code="jobArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the Amazon Braket hybrid job. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:braket:&#91;a-z0-9\-&#93;+:&#91;0-9&#93;&#123;12&#125;:job/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="jobName" /></td>
    <td><code>string</code></td>
    <td>The name of the Amazon Braket hybrid job.</td>
</tr>
<tr>
    <td><CopyableCode code="startedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the Amazon Braket hybrid job was started.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the Amazon Braket hybrid job. (QUEUED, RUNNING, COMPLETED, FAILED, CANCELLING, CANCELLED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Displays the key, value pairs of tags associated with this hybrid job.</td>
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
    <td><a href="#get_job"><CopyableCode code="get_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-job_arn"><code>job_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-additionalAttributeNames"><code>additionalAttributeNames</code></a></td>
    <td>Retrieves the specified Amazon Braket hybrid job.</td>
</tr>
<tr>
    <td><a href="#search_jobs"><CopyableCode code="search_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Searches for Amazon Braket hybrid jobs that match the specified filter values.</td>
</tr>
<tr>
    <td><a href="#create_job"><CopyableCode code="create_job" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a>, <a href="#parameter-algorithmSpecification"><code>algorithmSpecification</code></a>, <a href="#parameter-outputDataConfig"><code>outputDataConfig</code></a>, <a href="#parameter-jobName"><code>jobName</code></a>, <a href="#parameter-roleArn"><code>roleArn</code></a>, <a href="#parameter-instanceConfig"><code>instanceConfig</code></a>, <a href="#parameter-deviceConfig"><code>deviceConfig</code></a></td>
    <td></td>
    <td>Creates an Amazon Braket hybrid job.</td>
</tr>
<tr>
    <td><a href="#cancel_job"><CopyableCode code="cancel_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-job_arn"><code>job_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Cancels an Amazon Braket hybrid job.</td>
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
<tr id="parameter-job_arn">
    <td><CopyableCode code="job_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the Amazon Braket hybrid job to cancel.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-additionalAttributeNames">
    <td><CopyableCode code="additionalAttributeNames" /></td>
    <td><code>array</code></td>
    <td>A list of attributes to return additional information for. Only the QueueInfo additional attribute name is currently supported.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_job"
    values={[
        { label: 'get_job', value: 'get_job' },
        { label: 'search_jobs', value: 'search_jobs' }
    ]}
>
<TabItem value="get_job">

Retrieves the specified Amazon Braket hybrid job.

```sql
SELECT
algorithmSpecification,
associations,
billableDuration,
checkpointConfig,
createdAt,
deviceConfig,
endedAt,
events,
failureReason,
hyperParameters,
inputDataConfig,
instanceConfig,
jobArn,
jobName,
outputDataConfig,
queueInfo,
roleArn,
startedAt,
status,
stoppingCondition,
tags
FROM aws.braket.jobs
WHERE job_arn = '{{ job_arn }}' -- required
AND region = '{{ region }}' -- required
AND additionalAttributeNames = '{{ additionalAttributeNames }}'
;
```
</TabItem>
<TabItem value="search_jobs">

Searches for Amazon Braket hybrid jobs that match the specified filter values.

```sql
SELECT
createdAt,
device,
endedAt,
jobArn,
jobName,
startedAt,
status,
tags
FROM aws.braket.jobs
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

Creates an Amazon Braket hybrid job.

```sql
INSERT INTO aws.braket.jobs (
clientToken,
algorithmSpecification,
inputDataConfig,
outputDataConfig,
checkpointConfig,
jobName,
roleArn,
stoppingCondition,
instanceConfig,
hyperParameters,
deviceConfig,
tags,
associations,
region
)
SELECT 
'{{ clientToken }}' /* required */,
'{{ algorithmSpecification }}' /* required */,
'{{ inputDataConfig }}',
'{{ outputDataConfig }}' /* required */,
'{{ checkpointConfig }}',
'{{ jobName }}' /* required */,
'{{ roleArn }}' /* required */,
'{{ stoppingCondition }}',
'{{ instanceConfig }}' /* required */,
'{{ hyperParameters }}',
'{{ deviceConfig }}' /* required */,
'{{ tags }}',
'{{ associations }}',
'{{ region }}'
RETURNING
jobArn
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
    - name: clientToken
      value: "{{ clientToken }}"
    - name: algorithmSpecification
      description: |
        Defines the Amazon Braket hybrid job to be created. Specifies the container image the job uses and the paths to the Python scripts used for entry and training.
      value:
        scriptModeConfig:
          entryPoint: "{{ entryPoint }}"
          s3Uri: "{{ s3Uri }}"
          compressionType: "{{ compressionType }}"
        containerImage:
          uri: "{{ uri }}"
    - name: inputDataConfig
      value:
        - channelName: "{{ channelName }}"
          contentType: "{{ contentType }}"
          dataSource:
            s3DataSource:
              s3Uri: "{{ s3Uri }}"
    - name: outputDataConfig
      description: |
        Specifies the path to the S3 location where you want to store hybrid job artifacts and the encryption key used to store them.
      value:
        kmsKeyId: "{{ kmsKeyId }}"
        s3Path: "{{ s3Path }}"
    - name: checkpointConfig
      description: |
        Contains information about the output locations for hybrid job checkpoint data.
      value:
        localPath: "{{ localPath }}"
        s3Uri: "{{ s3Uri }}"
    - name: jobName
      value: "{{ jobName }}"
    - name: roleArn
      value: "{{ roleArn }}"
    - name: stoppingCondition
      description: |
        Specifies limits for how long an Amazon Braket hybrid job can run.
      value:
        maxRuntimeInSeconds: {{ maxRuntimeInSeconds }}
    - name: instanceConfig
      description: |
        Configures the resource instances to use while running the Amazon Braket hybrid job on Amazon Braket.
      value:
        instanceType: "{{ instanceType }}"
        volumeSizeInGb: {{ volumeSizeInGb }}
        instanceCount: {{ instanceCount }}
    - name: hyperParameters
      value: "{{ hyperParameters }}"
    - name: deviceConfig
      description: |
        Configures the primary device used to create and run an Amazon Braket hybrid job.
      value:
        device: "{{ device }}"
    - name: tags
      value: "{{ tags }}"
    - name: associations
      value:
        - arn: "{{ arn }}"
          type_: "{{ type_ }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_job"
    values={[
        { label: 'cancel_job', value: 'cancel_job' }
    ]}
>
<TabItem value="cancel_job">

Cancels an Amazon Braket hybrid job.

```sql
EXEC aws.braket.jobs.cancel_job 
@job_arn='{{ job_arn }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
