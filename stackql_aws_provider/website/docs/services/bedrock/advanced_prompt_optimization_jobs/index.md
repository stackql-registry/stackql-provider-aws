--- 
title: advanced_prompt_optimization_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - advanced_prompt_optimization_jobs
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

Creates, updates, deletes, gets or lists an <code>advanced_prompt_optimization_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="advanced_prompt_optimization_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock.advanced_prompt_optimization_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_advanced_prompt_optimization_job"
    values={[
        { label: 'get_advanced_prompt_optimization_job', value: 'get_advanced_prompt_optimization_job' },
        { label: 'list_advanced_prompt_optimization_jobs', value: 'list_advanced_prompt_optimization_jobs' }
    ]}
>
<TabItem value="get_advanced_prompt_optimization_job">

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
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation time of the advanced prompt optimization job.</td>
</tr>
<tr>
    <td><CopyableCode code="encryption_key_arn" /></td>
    <td><code>string</code></td>
    <td>KMS key ARN used for encrypting output data. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:kms:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:key/&#91;a-zA-Z0-9-&#93;&#123;36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="failure_message" /></td>
    <td><code>string</code></td>
    <td>Failure message if the advanced prompt optimization job failed.</td>
</tr>
<tr>
    <td><CopyableCode code="input_config" /></td>
    <td><code>object</code></td>
    <td>Input data configuration for the advanced prompt optimization job.</td>
</tr>
<tr>
    <td><CopyableCode code="job_arn" /></td>
    <td><code>string</code></td>
    <td>ARN of the advanced prompt optimization job. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:advanced-prompt-optimization-job/&#91;a-z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_description" /></td>
    <td><code>string</code></td>
    <td>Description of the advanced prompt optimization job.</td>
</tr>
<tr>
    <td><CopyableCode code="job_name" /></td>
    <td><code>string</code></td>
    <td>Name of the advanced prompt optimization job. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9.+-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_status" /></td>
    <td><code>string</code></td>
    <td>Status of the advanced prompt optimization job. (InProgress, Completed, Failed, PartiallyCompleted, Stopping, Stopped, Deleting)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last modified time of the advanced prompt optimization job.</td>
</tr>
<tr>
    <td><CopyableCode code="model_configurations" /></td>
    <td><code>array</code></td>
    <td>Model configurations for advanced prompt optimization.</td>
</tr>
<tr>
    <td><CopyableCode code="output_config" /></td>
    <td><code>object</code></td>
    <td>Output data configuration for the advanced prompt optimization job.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_advanced_prompt_optimization_jobs">

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
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation time of the advanced prompt optimization job.</td>
</tr>
<tr>
    <td><CopyableCode code="job_arn" /></td>
    <td><code>string</code></td>
    <td>ARN of the advanced prompt optimization job. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:advanced-prompt-optimization-job/&#91;a-z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_name" /></td>
    <td><code>string</code></td>
    <td>Name of the advanced prompt optimization job. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9.+-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_status" /></td>
    <td><code>string</code></td>
    <td>Status of the advanced prompt optimization job. (InProgress, Completed, Failed, PartiallyCompleted, Stopping, Stopped, Deleting)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last modified time of the advanced prompt optimization job.</td>
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
    <td><a href="#get_advanced_prompt_optimization_job"><CopyableCode code="get_advanced_prompt_optimization_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-job_identifier"><code>job_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the details and status of an advanced prompt optimization job.</td>
</tr>
<tr>
    <td><a href="#list_advanced_prompt_optimization_jobs"><CopyableCode code="list_advanced_prompt_optimization_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a></td>
    <td>Lists all advanced prompt optimization jobs for the account.</td>
</tr>
<tr>
    <td><a href="#create_advanced_prompt_optimization_job"><CopyableCode code="create_advanced_prompt_optimization_job" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-jobName"><code>jobName</code></a>, <a href="#parameter-inputConfig"><code>inputConfig</code></a>, <a href="#parameter-outputConfig"><code>outputConfig</code></a>, <a href="#parameter-modelConfigurations"><code>modelConfigurations</code></a></td>
    <td></td>
    <td>Creates an asynchronous batch job for advanced prompt optimization.</td>
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
    <td>ARN or ID of the advanced prompt optimization job.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>Maximum number of results to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Pagination token for the next page of results.</td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>Field to sort by in the returned list of jobs.</td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>Sort order for the results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_advanced_prompt_optimization_job"
    values={[
        { label: 'get_advanced_prompt_optimization_job', value: 'get_advanced_prompt_optimization_job' },
        { label: 'list_advanced_prompt_optimization_jobs', value: 'list_advanced_prompt_optimization_jobs' }
    ]}
>
<TabItem value="get_advanced_prompt_optimization_job">

Retrieves the details and status of an advanced prompt optimization job.

```sql
SELECT
creation_time,
encryption_key_arn,
failure_message,
input_config,
job_arn,
job_description,
job_name,
job_status,
last_modified_time,
model_configurations,
output_config
FROM aws.bedrock.advanced_prompt_optimization_jobs
WHERE job_identifier = '{{ job_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_advanced_prompt_optimization_jobs">

Lists all advanced prompt optimization jobs for the account.

```sql
SELECT
creation_time,
job_arn,
job_name,
job_status,
last_modified_time
FROM aws.bedrock.advanced_prompt_optimization_jobs
WHERE region = '{{ region }}' -- required
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
    defaultValue="create_advanced_prompt_optimization_job"
    values={[
        { label: 'create_advanced_prompt_optimization_job', value: 'create_advanced_prompt_optimization_job' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_advanced_prompt_optimization_job">

Creates an asynchronous batch job for advanced prompt optimization.

```sql
INSERT INTO aws.bedrock.advanced_prompt_optimization_jobs (
jobName,
jobDescription,
clientToken,
inputConfig,
outputConfig,
encryptionKeyArn,
tags,
modelConfigurations,
region
)
SELECT 
'{{ jobName }}' /* required */,
'{{ jobDescription }}',
'{{ clientToken }}',
'{{ inputConfig }}' /* required */,
'{{ outputConfig }}' /* required */,
'{{ encryptionKeyArn }}',
'{{ tags }}',
'{{ modelConfigurations }}' /* required */,
'{{ region }}'
RETURNING
job_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: advanced_prompt_optimization_jobs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the advanced_prompt_optimization_jobs resource.
    - name: jobName
      value: "{{ jobName }}"
      description: |
        Name of the advanced prompt optimization job.
    - name: jobDescription
      value: "{{ jobDescription }}"
      description: |
        Description of the advanced prompt optimization job.
    - name: clientToken
      value: "{{ clientToken }}"
    - name: inputConfig
      description: |
        Input data configuration for the advanced prompt optimization job.
      value:
        s3Uri: "{{ s3Uri }}"
    - name: outputConfig
      description: |
        Output data configuration for the advanced prompt optimization job.
      value:
        s3Uri: "{{ s3Uri }}"
    - name: encryptionKeyArn
      value: "{{ encryptionKeyArn }}"
    - name: tags
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: modelConfigurations
      description: |
        Model configurations for advanced prompt optimization.
      value:
        - modelId: "{{ modelId }}"
          inferenceConfig:
            maxTokens: {{ maxTokens }}
            temperature: {{ temperature }}
            topP: {{ topP }}
            stopSequences:
              - "{{ stopSequences }}"
          additionalModelRequestFields: "{{ additionalModelRequestFields }}"
`}</CodeBlock>

</TabItem>
</Tabs>
